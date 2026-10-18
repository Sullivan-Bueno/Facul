export function papelFromToken(token) {
  if (!token) return null;

  try {
    const segment = token.split(".")[1];
    const base64 = segment.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const payload = JSON.parse(atob(padded));
    return payload.papel === "ADMIN" ? "ADMIN" : "ALUNO";
  } catch {
    return "ALUNO";
  }
}

export function isAdmin(token) {
  return papelFromToken(token) === "ADMIN";
}
