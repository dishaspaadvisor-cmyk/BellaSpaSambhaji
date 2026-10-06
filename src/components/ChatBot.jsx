"use client";

import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    const spaId = "435";
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let botRoot = null;
    let originalBottom = "";
    let originalBottomPriority = "";

    const updateBotPosition = () => {
      const currentBotRoot = document.getElementById("spa-bot-root");
      if (!currentBotRoot) return;

      if (currentBotRoot !== botRoot) {
        botRoot = currentBotRoot;
        originalBottom = botRoot.style.getPropertyValue("bottom");
        originalBottomPriority = botRoot.style.getPropertyPriority("bottom");
      }

      if (mobileQuery.matches) {
        botRoot.style.setProperty(
          "bottom",
          "calc(16px + env(safe-area-inset-bottom, 0px))",
          "important",
        );
      } else if (originalBottom) {
        botRoot.style.setProperty("bottom", originalBottom, originalBottomPriority);
      } else {
        botRoot.style.removeProperty("bottom");
      }
    };

    const observer = new MutationObserver(updateBotPosition);
    observer.observe(document.body, { childList: true, subtree: true });
    mobileQuery.addEventListener("change", updateBotPosition);
    updateBotPosition();

    // Prevent duplicate loading
    if (document.getElementById("spa-chatbot-script")) {
      return () => {
        observer.disconnect();
        mobileQuery.removeEventListener("change", updateBotPosition);
      };
    }

    const script = document.createElement("script");
    script.id = "spa-chatbot-script";
    script.src = `https://chatbot.bookingbot.in/bot.js?spa=${spaId}`;
    script.async = true;
    script.setAttribute("data-spa", spaId);

    document.head.appendChild(script);

    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener("change", updateBotPosition);
      script.remove();
    };
  }, []);

  return null;
}
