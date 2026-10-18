import { LogOut } from "lucide-react";
import { useCookies } from "react-cookie";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { isAdmin } from "../lib/auth";

const linkClass =
  "flex min-h-10 items-center px-3 text-sm font-bold text-[#555] transition hover:text-[#303030]";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const loggedIn = Boolean(cookies.token);
  const admin = isAdmin(cookies.token);
  const studying =
    pathname.startsWith("/estudos") ||
    pathname.startsWith("/modulos") ||
    pathname.startsWith("/topicos");

  function handleLogout() {
    removeCookie("token");
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-10">
        <Link to="/" aria-label="RESOLVE+ início" className="flex items-center gap-2">
          <img src="/Icon.png" width={42} height={42} alt="" />
          <span className="text-xl font-black tracking-tight">
            RESOLVE<span className="text-[#f4c400]">+</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Principal">
          {loggedIn ? (
            <>
              <NavLink
                to="/estudos"
                className={`${linkClass} ${studying ? "text-[#303030]" : ""}`}
              >
                Estudar
              </NavLink>
              {admin && (
                <>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? "text-[#303030]" : ""}`
                    }
                  >
                    Painel
                  </NavLink>
                  <NavLink
                    to="/usuarios"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? "text-[#303030]" : ""}`
                    }
                  >
                    Usuários
                  </NavLink>
                </>
              )}
              <button
                type="button"
                onClick={handleLogout}
                aria-label="Sair"
                className="ml-1 flex min-h-10 items-center gap-2 rounded-lg border border-[#d8d8d8] px-3 text-sm font-bold transition hover:border-[#303030]"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex min-h-10 items-center rounded-lg bg-[#303030] px-4 text-sm font-bold text-white transition hover:bg-[#1f1f1f]"
            >
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
