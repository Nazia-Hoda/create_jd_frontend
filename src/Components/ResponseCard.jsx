import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import ReactMarkdown from "react-markdown";

const ResponseCard = ({ response }) => {
  const responseRef = useRef(null);

  const handleDownload = () => {
    const element = responseRef.current;
    const opt = {
      margin: 0.5,
      filename: "response.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
      <div ref={responseRef} className="prose max-w-none text-gray-900">
        <ReactMarkdown>{response}</ReactMarkdown>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResponseCard;
