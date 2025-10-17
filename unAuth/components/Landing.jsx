import React from "react";
import "./Landing.css";
import NavBar from "./NavBar";
import Bumpups from "./Bumpups";
import Timestamp from "./Timestamp";
import Footer from "./Footer";

export default function Landing() {
  return (
    <main className="landing">
      <div className="card">
        <NavBar />
        <h1 className="title">Hello Landing Page</h1>

        <div className="stack">
          <Bumpups />
          <Timestamp />
          <Footer />
        </div>
      </div>
    </main>
  );
}