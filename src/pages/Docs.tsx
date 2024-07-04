import React from "react";
function Docs() {

    const pdfUrl = "https://sushma.tiiny.site";

    return (
        <div>
            <center>
                <h1 style={{ color: 'white' }}>DOCS</h1>
            </center>
            <iframe
                src={pdfUrl}
                width="100%"
                height="1080"
                style={{ border: "none" }}
            >
                This browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>.
            </iframe>
        </div>

    );
}

export default Docs;