import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function exportToPDF(element: HTMLElement, fileName: string): Promise<void> {
  if (!element) {
    throw new Error('Invoice preview element not found');
  }

  // Check if element or its parents are hidden (e.g., inactive mobile tab)
  const isHidden = isElementHidden(element);

  let captureTarget: HTMLElement = element;
  let clonedNode: HTMLElement | null = null;

  if (isHidden) {
    // Clone the element and temporarily append to body for proper rendering
    clonedNode = element.cloneNode(true) as HTMLElement;
    clonedNode.style.position = 'fixed';
    clonedNode.style.left = '-99999px';
    clonedNode.style.top = '0';
    clonedNode.style.zIndex = '-9999';
    clonedNode.style.display = 'block';
    clonedNode.style.visibility = 'visible';
    clonedNode.style.opacity = '1';
    clonedNode.style.width = element.offsetWidth ? `${element.offsetWidth}px` : '800px';
    clonedNode.style.height = 'auto';
    document.body.appendChild(clonedNode);
    captureTarget = clonedNode;
  }

  try {
    // Wait a tick for layout to settle after cloning
    await new Promise((resolve) => requestAnimationFrame(resolve));

    const canvas = await html2canvas(captureTarget, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      // Ensure we capture the full content even if it overflows
      windowWidth: captureTarget.scrollWidth || captureTarget.offsetWidth,
      windowHeight: captureTarget.scrollHeight || captureTarget.offsetHeight,
      // Ignore certain elements that can cause issues
      ignoreElements: (node) => {
        // Ignore hidden elements
        if (node instanceof HTMLElement) {
          const style = window.getComputedStyle(node);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return true;
          }
        }
        return false;
      },
    });

    // Check if canvas is valid
    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error('Failed to capture invoice - canvas is empty');
    }

    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Remove default margins for edge-to-edge rendering
    const margin = 0;
    const usableWidth = pageWidth - margin * 2;
    const imgWidth = usableWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = -margin;

    // First page
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Additional pages for long invoices
    while (heightLeft > 0) {
      position = heightLeft - imgHeight - margin;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(fileName);
  } finally {
    // Clean up cloned element
    if (clonedNode && clonedNode.parentNode) {
      clonedNode.parentNode.removeChild(clonedNode);
    }
  }
}

/**
 * Check if an element or any of its parents are hidden.
 * This handles cases where the element exists but is inside a hidden container
 * (e.g., an inactive browser tab or a hidden panel).
 */
function isElementHidden(element: HTMLElement): boolean {
  // Check the element itself
  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return true;
  }

  // Check if element has zero dimensions (might be collapsed by parent)
  const rect = element.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) {
    return true;
  }

  // Check offsetParent (null means the element or a parent is hidden)
  // But also handle fixed positioning where offsetParent can be null
  if (element.offsetParent === null && style.position !== 'fixed') {
    return true;
  }

  // Walk up the DOM tree to check parent containers
  let parent: HTMLElement | null = element.parentElement;
  while (parent) {
    const parentStyle = window.getComputedStyle(parent);
    if (parentStyle.display === 'none') {
      return true;
    }
    parent = parent.parentElement;
  }

  return false;
}
