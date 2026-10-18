import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token"]);

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/auth", {
        usuario,
        password,
      });

      setCookie("token", response.data.token);
      navigate(response.data.papel === "ADMIN" ? "/dashboard" : "/estudos");
    } catch (err) {
      alert("Usuário ou senha inválidos");
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030] lg:grid lg:grid-cols-2">
      {/* LADO ESQUERDO */}
      <section className="relative hidden overflow-hidden bg-[#303030] lg:flex lg:min-h-screen lg:flex-col lg:justify-between">
        {/* Elementos matemáticos decorativos */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 select-none text-[22rem] font-black leading-none text-[#3b3b3b]"
        >
          ∫
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 select-none text-[20rem] font-black leading-none text-[#3a3a3a]"
        >
          +
        </div>

        {/* Logo */}
        <div className="relative z-10 px-16 pt-14">
          <div className="flex items-center gap-2">
            <img
              src="Icon.png"
              height={50}
              width={50}
              className="rounded-xl bg-white"
            ></img>

            <span className="text-2xl font-black tracking-tight text-white">
              RESOLVE
              <span className="text-[#f4c400]">+</span>
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 px-16 pb-20">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#f4c400]">
            Aprenda. Pratique. Resolva.
          </p>

          <h1 className="max-w-xl text-6xl font-black leading-[0.95] tracking-tight text-white">
            Transforme
            <br />
            dúvidas em
            <br />
            <span className="text-[#f4c400]">soluções.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-[#bdbdbd]">
            Uma forma simples e prática de aprender matemática, resolver
            exercícios e acompanhar sua evolução.
          </p>

          {/* Pequena fórmula decorativa */}
          <div className="mt-12 flex items-center gap-4 text-2xl font-bold">
            <span className="text-white">x²</span>
            <span className="text-[#f4c400]">+</span>
            <span className="text-white">2x</span>
            <span className="text-[#f4c400]">=</span>
            <span className="text-white">?</span>
          </div>
        </div>
      </section>

      {/* LADO DIREITO */}
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="mb-12 flex items-center gap-2 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#303030] text-2xl font-black text-[#f4c400]">
              +
            </div>

            <span className="text-2xl font-black tracking-tight">
              RESOLVE
              <span className="text-[#f4c400]">+</span>
            </span>
          </div>

          {/* Cabeçalho */}
          <div>
            <div className="mb-5 h-1.5 w-12 rounded-full bg-[#f4c400]" />

            <h2 className="text-4xl font-black tracking-tight text-[#303030]">
              Bem-vindo
              <br />
              de volta.
            </h2>

            <p className="mt-4 text-base leading-6 text-[#777]">
              Entre na sua conta para continuar
              <br className="hidden sm:block" />
              seus estudos.
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              id={"usuario"}
              type={"text"}
              autoComplete={"username"}
              placeholder={"seu.usuario"}
            >
              Usuário
            </Input>

            {/* Senha */}
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id={"password"}
              type={"password"}
              placeholder={"Sua senha"}
            >
              Senha
            </Input>

            {/* Botão */}
            <button
              type="submit"
              className="
                cursor-pointer
                mt-2
                flex
                h-13
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#303030]
                px-5
                font-bold
                text-white
                transition-all
                ease-in
                hover:bg-[#1f1f1f]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#f4c400]
                border-transparent
                border
                hover:border-[rgb(244,196,0)]
              "
            >
              Entrar
              <span className="text-[#f4c400]">→</span>
            </button>
          </form>

          {/* Rodapé */}
          <div className="mt-10 border-t border-[#e5e5e5] pt-6">
            <p className="text-sm text-[#888]">
              Ainda não possui uma conta?
              <button
                type="button"
                className="ml-1 font-bold text-[#303030] hover:text-[#f4c400] cursor-pointer"
              >
                Criar conta
              </button>
            </p>
            <p className="text-sm text-[#888]">
              Esqueceu sua senha?
              <button
                type="button"
                className="ml-1 font-bold text-[#303030] hover:text-[#f4c400] cursor-pointer"
              >
                Redefinir senha
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
