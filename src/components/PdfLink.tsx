import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { Button } from './ui/button';

interface PdfLinkProps {
  filename: string;
  title?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export const PdfLink: React.FC<PdfLinkProps> = ({
  filename,
  title,
  variant = 'default',
  size = 'default',
  className = '',
  showIcon = true,
  children
}) => {
  const pdfUrl = `/pdfs/${filename}`;
  const displayTitle = title || filename.replace('.pdf', '');

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open ${displayTitle} in new window`}
        onClick={(e) => {
          // Optional: Add analytics tracking here
          console.log(`PDF opened: ${filename}`);
        }}
      >
        {showIcon && <ExternalLink className="mr-2 h-4 w-4" />}
        {children || displayTitle}
      </a>
    </Button>
  );
};

// Alternative component for download-style links
export const PdfDownload: React.FC<PdfLinkProps> = ({
  filename,
  title,
  variant = 'outline',
  size = 'default',
  className = '',
  children
}) => {
  const pdfUrl = `/pdfs/${filename}`;
  const displayTitle = title || filename.replace('.pdf', '');

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a
        href={pdfUrl}
        download={filename}
        title={`Download ${displayTitle}`}
        onClick={(e) => {
          console.log(`PDF downloaded: ${filename}`);
        }}
      >
        <Download className="mr-2 h-4 w-4" />
        {children || `Download ${displayTitle}`}
      </a>
    </Button>
  );
}; 