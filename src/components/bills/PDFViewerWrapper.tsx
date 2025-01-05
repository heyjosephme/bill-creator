'use client';

import dynamic from "next/dynamic";

const PDFViewerComponent = dynamic(
  () => import("@/components/bills/pdf-viewer"),
  {
    ssr: false,
    loading: () => <div>Loading PDF viewer...</div>,
  }
);

export default function PDFViewerWrapper() {
  return <PDFViewerComponent />;
}
