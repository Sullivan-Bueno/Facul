import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="border-b border-[#e5e5e5] transition-all ease-in sticky top-0 right-0 bg-white z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 h-15">
        <a
          href="/"
          aria-label="RESOLVE+ início"
          className="flex items-center gap-2"
        >
          <img src="Icon.png" width={50} height={50}></img>
          <span className="text-2xl font-black tracking-tight">
            RESOLVE<span className="text-[#f4c400]">+</span>
          </span>
        </a>
        <nav className="flex items-center gap-3">
          <Link
            to="/exercises"
            className="flex min-h-10 items-center rounded-lg bg-[#f4c400] px-4 text-sm font-bold transition hover:bg-[#dfb300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#303030]"
          >
            Exercícios
          </Link>
          <button
            type="button"
            onClick={props.onClick}
            aria-label="Sair"
            className="flex min-h-10 items-center gap-2 rounded-lg border border-[#d8d8d8] px-4 text-sm font-bold transition hover:border-[#303030] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4c400]"
          >
            <LogOut className="h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
