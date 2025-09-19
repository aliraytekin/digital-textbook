import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface Props {
  page: number;
  onLoadSuccess: (numPages: number) => void;
}

export default function PageViewer({ page, onLoadSuccess }: Props) {
  return(
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <Document file="/PDFs/sample.pdf" onLoadSuccess={({numPages}) => onLoadSuccess(numPages)}>
        <Page pageNumber={page} />
      </Document>
    </div>
  );
}
