import React from 'react';
import { PdfLink, PdfDownload } from './PdfLink';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export const PdfExample: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>PDF Links Examples</CardTitle>
          <CardDescription>
            Different ways to link to PDFs on your site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic PDF link that opens in new window */}
          <div>
            <h3 className="text-sm font-medium mb-2">Open PDF in New Window</h3>
            <PdfLink 
              filename="sample.pdf" 
              title="Sample Document"
              variant="default"
            />
          </div>

          {/* Download-style link */}
          <div>
            <h3 className="text-sm font-medium mb-2">Download PDF</h3>
            <PdfDownload 
              filename="sample.pdf" 
              title="Sample Document"
              variant="outline"
            />
          </div>

          {/* Custom styled link */}
          <div>
            <h3 className="text-sm font-medium mb-2">Custom Styled Link</h3>
            <PdfLink 
              filename="sample.pdf" 
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-800"
              showIcon={false}
            >
              View Sample Document
            </PdfLink>
          </div>

          {/* Multiple PDFs in a list */}
          <div>
            <h3 className="text-sm font-medium mb-2">Multiple Documents</h3>
            <div className="space-y-2">
              <PdfLink 
                filename="resume.pdf" 
                title="Resume"
                variant="link"
                size="sm"
              />
              <br />
              <PdfLink 
                filename="portfolio.pdf" 
                title="Portfolio"
                variant="link"
                size="sm"
              />
              <br />
              <PdfLink 
                filename="certificate.pdf" 
                title="Certificate"
                variant="link"
                size="sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 