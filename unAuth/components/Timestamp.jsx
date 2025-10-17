import React, { useState, useEffect } from "react";
import "./Timestamp.css";

export default function Timestamp() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="pill secondary">
      Timestamp Component
      <span className="muted">{now.toLocaleTimeString()}</span>
    </div>
  );
}