import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CircleHelp, FileText, ImageIcon, Maximize2, Minimize2, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PdfReader from "../components/PdfReader";
import { marcarConteudoVisto } from "../lib/conteudoVisto";

const API_ORIGIN = "http://localhost:3000";

const sections = [
  { tipo: "RESUMO", label: "Resumo", icon: FileText },
  { tipo: "INFOGRAFICO", label: "Infográfico", icon: ImageIcon },
  { tipo: "YOUTUBE", label: "Vídeo", icon: Play },
];

function fileUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_ORIGIN}${url}`;
}

function youtubeEmbed(url) {
  if (!url) return null;
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function Infografico({ src, alt }) {
  const frameRef = useRef(null);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const expanded = nativeFullscreen || overlay;

  useEffect(() => {
    function syncFullscreen() {
      setNativeFullscreen(document.fullscreenElement === frameRef.current);
    }

    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  useEffect(() => {
    if (!overlay) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") setOverlay(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [overlay]);

  async function toggleFullscreen() {
    if (overlay) {
      setOverlay(false);
      return;
    }

    const frame = frameRef.current;
    if (!frame) return;

    if (document.fullscreenElement === frame) {
      await document.exitFullscreen();
      return;
    }

    try {
      await frame.requestFullscreen();
    } catch {
      setOverlay(true);
    }
  }

  return (
    <div
      ref={frameRef}
      className={
        expanded
          ? "fixed inset-0 z-50 flex h-dvh w-screen flex-col bg-[#111] text-white"
          : "bg-white"
      }
    >
      <div
        className={`flex justify-end border-b px-4 py-2 ${
          expanded ? "border-white/15" : "border-[#ededeb]"
        }`}
      >
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-pressed={expanded}
          className={`inline-flex h-10 items-center gap-2 px-3 text-sm font-bold ${
            expanded ? "text-[#f4c400]" : "text-[#9a7b00]"
          }`}
        >
          {expanded ? (
            <Minimize2 aria-hidden="true" className="h-4 w-4" />
          ) : (
            <Maximize2 aria-hidden="true" className="h-4 w-4" />
          )}
          {expanded ? "Sair da tela cheia" : "Tela cheia"}
        </button>
      </div>
      <div className={expanded ? "flex min-h-0 flex-1 items-center justify-center p-4" : ""}>
        <img
          src={src}
          alt={alt}
          className={expanded ? "max-h-full max-w-full object-contain" : "mx-auto block w-full"}
        />
      </div>
    </div>
  );
}

const Topic = () => {
  const { topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [status, setStatus] = useState("loading");
  const [active, setActive] = useState("RESUMO");

  useEffect(() => {
    async function fetchTopic() {
      setStatus("loading");
      try {
        const response = await axios.get(`${API_ORIGIN}/topics/${topicId}`);
        setTopic(response.data);
        marcarConteudoVisto(response.data.id);
        const available = response.data.materials?.[0]?.tipo;
        setActive(available ?? "RESUMO");
        setStatus("ready");
      } catch (err) {
        setStatus(err.response?.status === 404 ? "missing" : "error");
      }
    }

    fetchTopic();
  }, [topicId]);

  if (status === "loading") {
    return <p className="px-6 py-16 text-center text-[#777]">Carregando conteúdo...</p>;
  }

  if (status === "missing") {
    return <p className="px-6 py-16 text-center font-bold">Conteúdo não encontrado.</p>;
  }

  if (status === "error" || !topic) {
    return (
      <p role="alert" className="px-6 py-16 text-center font-bold">
        Não foi possível carregar o conteúdo.
      </p>
    );
  }

  const material = topic.materials.find((item) => item.tipo === active);
  const src = fileUrl(material?.url);
  const embed = active === "YOUTUBE" ? youtubeEmbed(material?.url) : null;

  return (
    <div className="px-6 py-8 sm:px-10 sm:py-12">
      <Link
        to={`/modulos/${topic.subject.id}`}
        className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7b00] hover:text-[#303030]"
      >
        {topic.subject.nome}
      </Link>
      <h1 className="mt-3 text-3xl font-black sm:text-4xl">{topic.nome}</h1>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Tipo de material">
        {sections.map((section) => {
          const ready = topic.materials.some((item) => item.tipo === section.tipo && item.url);
          const Icon = section.icon;
          const selected = active === section.tipo;

          return (
            <button
              key={section.tipo}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(section.tipo)}
              className={`inline-flex h-11 items-center gap-2 px-4 text-sm font-bold ${
                selected
                  ? "bg-[#303030] text-white"
                  : "border border-[#e5e5e5] bg-white text-[#555]"
              }`}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {section.label}
              {!ready && <span className="text-[10px] font-bold uppercase tracking-wide opacity-70">em breve</span>}
            </button>
          );
        })}
        {topic.quiz && (
          <Link
            to={`/test/${topic.quiz.id}`}
            className="inline-flex h-11 items-center gap-2 border border-[#e5e5e5] bg-white px-4 text-sm font-bold text-[#555]"
          >
            <CircleHelp aria-hidden="true" className="h-4 w-4" />
            Exercícios
          </Link>
        )}
      </div>

      <section className="mt-4 border border-[#e5e5e5] bg-white">
        {active === "RESUMO" && src && (
          <div>
            <div className="flex justify-end border-b border-[#ededeb] px-5 py-2">
              <a href={src} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#9a7b00]">
                Abrir PDF
              </a>
            </div>
            <PdfReader src={src} title={`Resumo de ${topic.nome}`} />
          </div>
        )}

        {active === "INFOGRAFICO" && src && (
          <Infografico src={src} alt={`Infográfico de ${topic.nome}`} />
        )}

        {active === "YOUTUBE" && embed && (
          <div className="aspect-video w-full">
            <iframe
              title={`Vídeo de ${topic.nome}`}
              src={embed}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {!src && (
          <div className="px-6 py-16 text-center">
            <h2 className="text-lg font-black">
              {active === "YOUTUBE" ? "Vídeo em breve" : "Material em breve"}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#777]">
              {active === "YOUTUBE"
                ? "A aula entra aqui como link do YouTube, sem guardar o arquivo de vídeo."
                : "Este material ainda não foi anexado a este conteúdo."}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Topic;
