import { useState } from "react";
import MyHead from "../../components/my-head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function Base64Converter() {
  // Estado para Texto -> Base64
  const [textInput, setTextInput] = useState("");
  const [base64Output, setBase64Output] = useState("");

  // Estado para Base64 -> Texto
  const [base64Input, setBase64Input] = useState("");
  const [textOutput, setTextOutput] = useState("");

  // Lógica de conversión (Client-side JS)
  const encodeToBase64 = () => {
    try {
      // Usamos btoa con soporte para caracteres especiales (ñ, acentos)
      const encoded = btoa(unescape(encodeURIComponent(textInput)));
      setBase64Output(encoded);
    } catch (e) {
      setBase64Output("Error: No se pudo codificar el texto.");
    }
  };

  const decodeFromBase64 = () => {
    try {
      // Usamos atob con soporte para UTF-8
      const decoded = decodeURIComponent(escape(atob(base64Input)));
      setTextOutput(decoded);
    } catch (e) {
      setTextOutput("Error: El código Base64 no es válido.");
    }
  };

  return (
    <>
      <MyHead title="Convertidor Base64 - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12">
            <h5 className="center">Convertidor Base64</h5>            
            <div className="row">
              {/* BLOQUE 1: TEXTO A BASE64 */}
              <div className="col s12 m6">
                <div className="card-panel">
                  <span className="card-title">Texto a Base64</span>
                  <textarea 
                    className="materialize-textarea"
                    placeholder="Escribe el texto aquí..."
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    style={{ minHeight: '100px', border: '1px solid #ddd', padding: '10px' }}
                  />
                  <button className="btn waves-effect waves-light block" onClick={encodeToBase64} style={{ width: '100%' }}>
                    Codificar
                  </button>
                  <textarea 
                    className="materialize-textarea"
                    placeholder="Resultado Base64"
                    value={base64Output}
                    readOnly
                    style={{ minHeight: '100px', marginTop: '15px', backgroundColor: '#f9f9f9' }}
                  />
                </div>
              </div>

              {/* BLOQUE 2: BASE64 A TEXTO */}
              <div className="col s12 m6">
                <div className="card-panel">
                  <span className="card-title">Base64 a Texto</span>
                  <textarea 
                    className="materialize-textarea"
                    placeholder="Pega el código Base64 aquí..."
                    value={base64Input}
                    onChange={(e) => setBase64Input(e.target.value)}
                    style={{ minHeight: '100px', border: '1px solid #ddd', padding: '10px' }}
                  />
                  <button className="btn waves-effect waves-light blue" onClick={decodeFromBase64} style={{ width: '100%' }}>
                    Decodificar
                  </button>
                  <textarea 
                    className="materialize-textarea"
                    placeholder="Resultado Texto"
                    value={textOutput}
                    readOnly
                    style={{ minHeight: '100px', marginTop: '15px', backgroundColor: '#f9f9f9' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}