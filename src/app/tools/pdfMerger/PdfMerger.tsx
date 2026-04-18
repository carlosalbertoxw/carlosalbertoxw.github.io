"use client";

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function PdfMerger() {
  const [files, setFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const mergePDFs = async () => {
    if (files.length < 2) return alert("Selecciona al menos 2 archivos");

    setMerging(true);
    try {
      // 1. Crear un nuevo documento PDF
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        // 2. Leer el archivo como ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        
        // 3. Copiar todas las páginas del PDF actual
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        
        // 4. Añadirlas al documento final
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      // 5. Guardar el resultado y generar la descarga
      const mergedPdfBytes = await mergedPdf.save();

      // Creamos un Blob a partir de una copia explícita de los bytes
      const blob = new Blob([new Uint8Array(mergedPdfBytes)], { type: 'application/pdf' });

      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'archivo_combinado.pdf';
      link.click();
      
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al fusionar:", error);
      alert("Hubo un error al procesar los archivos.");
    } finally {
      setMerging(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold">Unir PDFs</h2>
            
            <input 
                type="file" 
                multiple 
                accept=".pdf" 
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            {files.length > 0 && (
                <ul className="text-sm text-gray-600">
                {files.map((f, i) => <li key={i}>• {f.name}</li>)}
                </ul>
            )}

            <button
                onClick={mergePDFs}
                disabled={merging || files.length < 2}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
            >
                {merging ? 'Procesando...' : 'Combinar y Descargar'}
            </button>
        </div>
    </div>
  );
}