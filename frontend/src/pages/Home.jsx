import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
    }
  }, [cookies.token, navigate]);

  function handleLogout() {
    removeCookie("token");
    navigate("/login");
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#303030]">
      <Header onClick={handleLogout} />
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-12">
        <section className="relative grid min-h-[min(680px,calc(100vh-130px))] overflow-hidden bg-[#303030] text-white lg:grid-cols-[1.15fr_0.85fr]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-20 select-none text-[18rem] font-black leading-none text-[#3b3b3b] sm:text-[24rem] lg:right-[35%]"
          >
            ∫
          </div>
          <div className="relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#f4c400]">
              Aprenda. Pratique. Resolva.
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-[0.98] sm:text-6xl">
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
          </div>

          <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-t border-white/10 bg-[#282828] px-8 py-12 lg:border-l lg:border-t-0">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 select-none text-[18rem] font-black leading-none text-[#303030]"
            >
              +
            </span>
            <div
              aria-hidden="true"
              className="relative z-10 flex items-center gap-3 text-3xl font-bold sm:gap-5 sm:text-4xl"
            >
              <span>x²</span>
              <span className="text-[#f4c400]">+</span>
              <span>2x</span>
              <span className="text-[#f4c400]">=</span>
              <span className="text-[#f4c400]">?</span>
            </div>
            <div className="absolute bottom-6 right-7 text-xs font-bold uppercase tracking-[0.2em] text-[#777] sm:bottom-9 sm:right-10">
              RESOLVE+
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
