// components/bills/pdf-viewer.tsx
'use client';

import { PDFViewer } from '@react-pdf/renderer';
import { SimpleBillPDF } from './simple-bill';

export default function PDFViewerComponent() {
  return (
    <div className="h-screen p-4">
      <PDFViewer width="100%" height="100%">
        <SimpleBillPDF />
      </PDFViewer>
    </div>
  );
}
