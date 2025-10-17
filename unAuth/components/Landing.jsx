import React from "react";
import "./Landing.css";

export default function Landing() {
    return (
        <main className="landing">
            <div className="card">
                <h1 className="title">Hello, world!</h1>
                <p className="subtitle">Welcome to the app — this is your landing page.</p>
                <button className="cta" onClick={() => alert("Hello!")}>Say Hello</button>
            </div>
        </main>
    );
}