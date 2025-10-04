"use client";

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="relative w-full h-[800px] rounded-lg overflow-hidden glass">
      <iframe
        src={pdfUrl}
        className="w-full h-full border-0"
        title="Resume PDF"
      />
    </div>
  );
}
