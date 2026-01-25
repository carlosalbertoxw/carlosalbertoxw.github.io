import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import MyHead from "../../components/my-head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function PDFPageSplitter() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile || selectedFile.type !== "application/pdf") {
      alert("Por favor selecciona un archivo PDF válido.");
      return;
    }

    setFile(selectedFile);

    const arrayBuffer = await selectedFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    setPageCount(pdfDoc.getPageCount());
  };

  const splitPDFToZip = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const zip = new JSZip();

      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const totalPages = pdfDoc.getPageCount();
      const baseName = file.name.replace(/\.pdf$/i, "");

      for (let i = 0; i < totalPages; i++) {
        const newPdf = await PDFDocument.create();
        const [page] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(page);

        const pdfBytes = await newPdf.save();

        zip.file(`${baseName}-pagina-${i + 1}.pdf`, pdfBytes);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `${baseName}-paginas.zip`;
      link.click();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al procesar el PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MyHead title="Divisor de Páginas PDF - Carlos Alberto" />
      <Nav />

      <main className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h5 className="center">Divisor de Páginas de PDF</h5>

            <div className="card">
              <div className="card-content">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Seleccionar PDF</span>
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Sube un archivo PDF"
                    />
                  </div>
                </div>

                {file && (
                  <div className="section">
                    <p>
                      <strong>Archivo:</strong> {file.name}
                    </p>
                    <p>
                      <strong>Páginas:</strong> {pageCount}
                    </p>
                  </div>
                )}

                <div className="section center">
                  <button
                    className={`btn waves-effect waves-light ${
                      loading ? "disabled" : ""
                    }`}
                    onClick={splitPDFToZip}
                    disabled={!file || loading}
                  >
                    {loading ? "Procesando..." : "Descargar ZIP"}
                  </button>
                </div>

                <p className="grey-text center">
                  El procesamiento se realiza localmente en tu navegador.
                  Ningún archivo se sube a servidores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
