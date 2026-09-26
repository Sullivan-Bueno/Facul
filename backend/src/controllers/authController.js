import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ quiet: true, path: "../.env" });

export async function authUser(req, res) {
  const { email, password } = req.body;

  const userId = "9187398";
  const userEmail = "teste@email.com";
  const userPassword = "123123123";

  if (email == userEmail && password == userPassword) {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: "Email ou senha incorretos" });
  }
}
