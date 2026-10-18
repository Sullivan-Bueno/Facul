const STORAGE_KEY = "facul:conteudos-vistos";

function lerConteudosVistos() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function marcarConteudoVisto(topicId) {
  const vistos = new Set(lerConteudosVistos());
  vistos.add(topicId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...vistos]));
}

export function conteudoFoiVisto(topicId) {
  return lerConteudosVistos().includes(topicId);
}
