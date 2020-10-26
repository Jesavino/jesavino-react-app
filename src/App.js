import "./App.css";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import jsavino_pdf from "./john_savino.pdf";

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function pageLeft() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }
  function pageRight() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to John Savino's Personal Website</p>
      </header>

      <div className="PDF-Document">
        <Document file={jsavino_pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page className="PDF-Page" pageNumber={pageNumber} />
          <div className="Page-Controls">
            <button type="button" onClick={pageLeft}>
              {" "}
              {"<"}{" "}
            </button>
            <span>
              {" "}
              {pageNumber} of {numPages}{" "}
            </span>
            <button type="button" onClick={pageRight}>
              {" "}
              {">"}{" "}
            </button>
          </div>
        </Document>
      </div>
    </div>
  );
}

export default App;
