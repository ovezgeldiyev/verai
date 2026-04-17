import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "assets/css/main.scss";
import Header from "./base/header";
import Footer from "./base/footer";
import Landing from "./landing/landing";
export default function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
