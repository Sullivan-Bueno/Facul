import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/auth", {
        email,
        password,
      });

      setCookie("token", response.data.token);
      navigate("/");
    } catch (err) {
      alert("Email ou senha inválidos");
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen bg-[#f2f5e9] text-[#1f332d] lg:grid lg:grid-cols-[1fr_0.9fr]">
      <section className="relative flex min-h-[34vh] flex-col justify-between overflow-hidden bg-[#dce9d3] px-7 py-8 sm:px-12 lg:min-h-screen lg:px-16 lg:py-12">
        <a
          href="/"
          className="relative z-10 w-fit text-lg font-black tracking-tight"
        >
          soma<span className="text-[#e36b4f]">.</span>
        </a>

        <div className="relative z-10 my-14 max-w-xl lg:my-0">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#547064]">
            Matemática no seu ritmo
          </p>
          <h1 className="max-w-lg text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            Ideias grandes começam com um{" "}
            <span className="text-[#e36b4f]">passo.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#496057]">
            Retome suas aulas, pratique com calma e descubra até onde a
            matemática pode levar você.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-12 right-5 rotate-[-8deg] text-[9rem] font-black leading-none text-[#c8dac0] sm:right-12 sm:text-[13rem] lg:bottom-8 lg:right-10 lg:text-[16rem]"
        >
          ∑
        </div>
        <p className="relative z-10 hidden text-sm text-[#547064] lg:block">
          Aprender também é experimentar.
        </p>
      </section>

      <section className="flex items-center justify-center px-6 py-14 sm:px-12 lg:px-16">
        <div className="w-full max-w-md">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#e36b4f]">
            Que bom ter você de volta
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Entre na sua conta
          </h2>
          <p className="mt-3 text-[#64766e]">
            Continue de onde sua curiosidade parou.
          </p>

          <form className="mt-9 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold">
                E-mail
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                autoComplete="email"
                className="h-12 rounded-md border border-[#d6ded3] bg-white px-4 text-[#1f332d] outline-none transition placeholder:text-[#9ba8a0] focus:border-[#58816d] focus:ring-2 focus:ring-[#58816d]/15"
                placeholder="voce@exemplo.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold">
                Senha
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                autoComplete="current-password"
                className="h-12 rounded-md border border-[#d6ded3] bg-white px-4 text-[#1f332d] outline-none transition placeholder:text-[#9ba8a0] focus:border-[#58816d] focus:ring-2 focus:ring-[#58816d]/15"
                placeholder="Sua senha"
              />
            </div>

            <button className="mt-2 h-12 cursor-pointer rounded-md bg-[#1f332d] px-5 font-bold text-white transition hover:bg-[#304d41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e36b4f]">
              Entrar na plataforma
            </button>
          </form>

          <p className="mt-8 text-sm text-[#64766e]">
            Cada exercício é um começo.{" "}
            <span className="font-semibold text-[#1f332d]">Bons estudos!</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
