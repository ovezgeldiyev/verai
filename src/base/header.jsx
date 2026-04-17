import React, { useEffect, useRef, useState } from "react";
import logo from "assets/images/logo.png";
import { telegram, twitter } from "./SVG";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Modal from "./modal";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const header = useRef();

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  useEffect(() => {
    function scrollFunc() {
      if (window.scrollY >= 60) {
        setIsSticky(true);
      } else setIsSticky(false);
    }
    window.addEventListener("scroll", function () {
      scrollFunc();
    });
    return () => {
      window.removeEventListener("scroll", function () {
        scrollFunc();
      });
    };
  }, []);
  useEffect(() => {
    const windowScroll = () => {
      const links = document.querySelectorAll(".anchorLinks");
      const sections = document.querySelectorAll(".anchor");
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index]?.offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    };
    windowScroll();
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);
  const [modal, setModal] = useState(false);
  const closeFunc = (e) => {
    if (e.currentTarget === e.target) setModal(false);
  };
  return (
    <>
      <header className={"header " + (isSticky ? "sticky" : "")} id="header">
        <div className="auto__container">
          <div className="header__inner">
            <a href="#home" className="header__inner-logo anchorLinks">
              <img src={logo} alt="" />
            </a>
            <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
              <div className="nav__inner">
                <ul className="nav__inner-links">
                  <li>
                    <a href="#product" className="anchorLinks">
                      Product
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="anchorLinks">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#agents" className="anchorLinks">
                      AI Agents
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://verais-organization.gitbook.io/verai"
                      target="_blank"
                    >
                      Docs
                    </a>
                  </li>
                </ul>
                <div className="nav__inner-buttons">
                  <button
                    className="button uniq"
                    onClick={() => setModal(!modal)}
                  >
                    <span>LAUNCH APP</span>
                  </button>
                  <div className="nav__inner-social">
                    <a href="https://x.com/VerAI_Agents" target="_blank">
                      {twitter}
                    </a>
                    <a href="https://t.me/VerAIIntelligence" target="_blank">
                      {telegram}
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <div
              className={"burger " + (menu ? "active" : "")}
              id="menuBtn"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {modal && <Modal closeFunc={closeFunc} />}
      </AnimatePresence>
    </>
  );
}
