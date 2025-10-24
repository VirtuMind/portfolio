"use client";
import { getTranslations, type Language } from "@/lib/translations";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  pdfUrl: string;
  language: Language;
};

export default function PDFViewer({ pdfUrl, language }: Props) {
  const [pageWidth, setPageWidth] = useState<number>(0);
  const t = getTranslations(language);

  // We have to measure the container width in pixels because it is required by <Page />
  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById("pdf-container");
      if (container) {
        setPageWidth(container.offsetWidth);
      }
    };

    // Initial width
    updateWidth();

    // Update on resize
    window.addEventListener("resize", updateWidth);
    // Cleanup listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      id="pdf-container"
      className="relative w-full rounded-lg overflow-hidden border bg-gray-200 dark:bg-gray-900"
    >
      <Document
        file={pdfUrl}
        loading={
          <div className="flex items-center justify-center h-[600px]">
            {t.resume.loadingResume}
          </div>
        }
        error={
          <div className="flex items-center justify-center h-[600px] text-red-500">
            {t.resume.failedLoad}
          </div>
        }
        className="flex justify-center "
      >
        <Page
          pageNumber={1}
          renderTextLayer={true}
          renderAnnotationLayer={true}
          width={pageWidth || undefined}
          className="mx-auto"
        />
      </Document>
    </div>
  );
}
