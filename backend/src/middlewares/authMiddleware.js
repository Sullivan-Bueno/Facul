import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const header = req.headers.authorization ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Não autorizado" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    req.papel = payload.papel === "ADMIN" ? "ADMIN" : "ALUNO";
    next();
  } catch {
    return res.status(401).json({ message: "Não autorizado" });
  }
}

export function requireAdmin(req, res, next) {
  requireAuth(req, res, () => {
    if (req.papel !== "ADMIN") {
      return res.status(403).json({ message: "Acesso negado" });
    }
    next();
  });
}
