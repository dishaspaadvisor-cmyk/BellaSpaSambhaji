"use client";

import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    const spaId = "435";

    // Prevent duplicate loading
    if (document.getElementById("spa-chatbot-script")) return;

    const script = document.createElement("script");
    script.id = "spa-chatbot-script";
    script.src = `https://chatbot.bookingbot.in/bot.js?spa=${spaId}`;
    script.async = true;
    script.setAttribute("data-spa", spaId);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
