import React from "react";
import Hero from "./components/hero";
import Product from "./components/product";
import Features from "./components/features";
import About from "./components/about";
import Agents from "./components/agents";
import Token from "./components/token";
import Roles from "./components/roles";
import Companies from "./components/companies";
import Credits from "./components/credits";

export default function Landing() {
  return (
    <>
      <div className="anchor" id="home"></div>
      <Hero />
      <div className="anchor" id="product"></div>
      <Product />
      <div className="anchor" id="features"></div>
      <Features />
      <About />
      <div className="anchor" id="agents"></div>
      <Agents />
      <Token />
      <Roles />
      <Credits />
      <Companies />
    </>
  );
}
