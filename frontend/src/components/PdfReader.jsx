import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerUrl;

const PdfReader = ({ src, title }) => {
  const frameRef = useRef(null);
  const canvasRef = useRef(null);
  const pdfRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [status, setStatus] = useState("loading");
  const [frameWidth, setFrameWidth] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setPage(1);
    setZoom(1);
    const task = getDocument({ url: src });

    task.promise
      .then((pdf) => {
        if (cancelled) return;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      task.destroy();
      pdfRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || status !== "ready") return;

    const observer = new ResizeObserver(() => {
      setFrameWidth(frame.clientWidth);
    });
    observer.observe(frame);
    setFrameWidth(frame.clientWidth);
    return () => observer.disconnect();
  }, [status]);

  useEffect(() => {
    const pdf = pdfRef.current;
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!pdf || status !== "ready" || !canvas || !frame) return;

    let cancelled = false;

    async function draw() {
      const pdfPage = await pdf.getPage(page);
      if (cancelled) return;

      const base = pdfPage.getViewport({ scale: 1 });
      const maxWidth = Math.max(frame.clientWidth - 48, 280);
      const maxHeight = Math.max(frame.clientHeight - 24, 420);
      const fit = Math.min(maxWidth / base.width, maxHeight / base.height);
      const pixelRatio = window.devicePixelRatio || 1;
      const viewport = pdfPage.getViewport({ scale: fit * zoom * pixelRatio });
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / pixelRatio}px`;
      canvas.style.height = `${viewport.height / pixelRatio}px`;

      renderTaskRef.current?.cancel();
      const renderTask = pdfPage.render({ canvasContext: context, viewport });
      renderTaskRef.current = renderTask;

      try {
        await renderTask.promise;
      } catch (error) {
        if (error?.name !== "RenderingCancelledException") {
          setStatus("error");
        }
      }
    }

    draw();

    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [page, zoom, status, frameWidth]);

  if (status === "loading") {
    return <p className="px-6 py-16 text-center text-[#777]">Abrindo o resumo...</p>;
  }

  if (status === "error") {
    return (
      <p role="alert" className="px-6 py-16 text-center font-bold">
        Não foi possível abrir este PDF.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ededeb] px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="inline-flex h-10 items-center gap-1 px-3 text-sm font-bold disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>
          <p className="min-w-24 text-center text-sm font-bold">
            {page} / {numPages}
          </p>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(numPages, current + 1))}
            disabled={page === numPages}
            className="inline-flex h-10 items-center gap-1 px-3 text-sm font-bold disabled:opacity-40"
          >
            Próxima
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Diminuir zoom"
            onClick={() => setZoom((current) => Math.max(1, Number((current - 0.25).toFixed(2))))}
            disabled={zoom <= 1}
            className="flex h-10 w-10 items-center justify-center border border-[#e5e5e5] disabled:opacity-40"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoom(1)}
            className="h-10 px-3 text-sm font-bold"
          >
            {zoom === 1 ? "Ajustado" : `${Math.round(zoom * 100)}%`}
          </button>
          <button
            type="button"
            aria-label="Aumentar zoom"
            onClick={() => setZoom((current) => Math.min(2.5, Number((current + 0.25).toFixed(2))))}
            disabled={zoom >= 2.5}
            className="flex h-10 w-10 items-center justify-center border border-[#e5e5e5] disabled:opacity-40"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={frameRef}
        className="flex h-[calc(100vh-15rem)] min-h-[520px] items-start justify-center overflow-auto bg-[#eceae4] p-6"
      >
        <canvas ref={canvasRef} role="img" aria-label={`${title}, página ${page} de ${numPages}`} />
      </div>
    </div>
  );
};

export default PdfReader;
