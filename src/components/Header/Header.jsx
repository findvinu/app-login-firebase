import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../index";
import Logo from "../../assets/images/vinuBytes.png";
import LogoutBtn from "./LogoutBtn";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Singup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Todos",
      slug: "/all-todos",
      active: authStatus,
    },
    {
      name: "Add Todo",
      slug: "/add-todos",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex items-center text-white">
          <div className="mr-4">
            <Link to="/">
              <img
                alt="Logo"
                src={Logo}
                style={{
                  width: "40px",
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
            </Link>
          </div>
          <p
            style={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            VinuBytes
          </p>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover-bg-blue-100 rounded-full"
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
