'use client';

import { useRef } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface LogoUploadProps {
  logo: string;
  onLogoChange: (base64: string) => void;
  label: string;
}

export function LogoUpload({ logo, onLogoChange, label }: LogoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error('File size must be less than 2MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      onLogoChange(result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onLogoChange('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="text-xs text-muted-foreground">{label}</label>
      <div className="flex items-center">
        {logo ? (
          <div className="relative group">
            <div
              className="flex items-center justify-center"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '4px',
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <Button
              type="button"
              size="icon"
              className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 hover:bg-red-600 text-white shadow-sm"
              onClick={handleRemove}
            >
              <X className="h-2.5 w-2.5" />
            </Button>
          </div>
        ) : (
          <button
            type="button"
            className="flex items-center justify-center rounded-lg border border-dashed transition-colors hover:border-foreground/25 hover:bg-muted/40"
            style={{
              width: '48px',
              height: '48px',
              borderColor: 'var(--border)',
              background: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => inputRef.current?.click()}
          >
            <ImagePlus
              className="text-muted-foreground"
              style={{ width: '18px', height: '18px' }}
            />
          </button>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
