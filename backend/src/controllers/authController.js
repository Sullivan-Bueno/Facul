import jwt from "jsonwebtoken";
import { createUser, findUserByUsuario } from "../models/userModel.js";

export async function authUser(req, res) {
  const usuario = req.body.usuario?.trim().toLowerCase();
  const { password } = req.body;
  const user = usuario ? await findUserByUsuario(usuario) : null;

  if (!user || user.senha !== password) {
    return res.status(401).json({ message: "Usuário ou senha incorretos" });
  }

  const token = jwt.sign(
    { userId: user.id, papel: user.papel },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return res.status(200).json({ token, papel: user.papel });
}

export async function createStudent(req, res) {
  const nome = req.body.nome?.trim();
  const usuario = req.body.usuario?.trim().toLowerCase();
  const senha = req.body.senha;

  if (!nome || !usuario || !senha) {
    return res.status(400).json({ message: "Preencha nome, usuário e senha" });
  }

  const existing = await findUserByUsuario(usuario);
  if (existing) {
    return res.status(409).json({ message: "Este usuário já está em uso" });
  }

  const user = await createUser({ nome, usuario, senha, papel: "ALUNO" });
  return res.status(201).json({ id: user.id, nome: user.nome, usuario: user.usuario });
}
