"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./MassageOfferPopup.css";

const OFFER_DELAY = 15_000;
const OFFER_DURATION = 3 * 60;
const whatsappLink =
  "https://wa.me/919371000458?text=Hello%2C%20I%27d%20like%20to%20book%20the%20massage%20offer%20for%20%E2%82%B91%2C999.";

export default function MassageOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsOpen(true), OFFER_DELAY);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isOpen || secondsLeft === 0) return undefined;

    const intervalId = window.setInterval(() => {
      setSecondsLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isOpen, secondsLeft]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");
  const progress = secondsLeft / OFFER_DURATION;
  const circumference = 2 * Math.PI * 34;

  return (
    <div
      className="massage-popup-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <section
        aria-labelledby="massage-popup-title"
        aria-modal="true"
        className="massage-popup"
        role="dialog"
      >
        <button
          aria-label="Close special offer"
          className="massage-popup-close"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="massage-popup-image">
          <Image
            alt="Spa therapist in a warm, relaxing spa"
            className="massage-popup-photo"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 44vw"
            src="/popupgirl.png"
          />
          <div className="massage-popup-image-caption">
            <span className="massage-popup-lotus" aria-hidden="true">
              ✦
            </span>
            BELLA SPA · SAMBHAJINAGAR
          </div>
        </div>

        <div className="massage-popup-content">
          <p className="massage-popup-eyebrow">A LITTLE SOMETHING FOR YOU</p>
          <h2 id="massage-popup-title">
            Make time
            <br />
            for <em>yourself.</em>
          </h2>
          <p className="massage-popup-description">
            Unwind with a soothing massage and leave the everyday behind.
          </p>

          <div className="massage-popup-price">
            <span>YOUR MASSAGE, FOR</span>
            <strong>₹1,999</strong>
          </div>

          <div className="massage-popup-countdown">
            <div
              aria-label={`${minutes} minutes and ${seconds} seconds remaining`}
              className="massage-popup-clock"
              role="timer"
            >
              <svg aria-hidden="true" viewBox="0 0 76 76">
                <circle className="massage-popup-clock-track" cx="38" cy="38" r="34" />
                <circle
                  className="massage-popup-clock-progress"
                  cx="38"
                  cy="38"
                  r="34"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progress)}
                />
              </svg>
              <span className="massage-popup-clock-time">
                {minutes}:{seconds}
              </span>
            </div>
            <p>
              {secondsLeft > 0 ? (
                <>
                  Your special offer is
                  <br />
                  reserved for you
                </>
              ) : (
                <>
                  Your offer timer
                  <br />
                  has ended
                </>
              )}
            </p>
          </div>

          <a
            className="massage-popup-cta"
            href={whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Book your massage
            <span aria-hidden="true">↗</span>
          </a>
          <p className="massage-popup-note">A calmer you is just one message away.</p>
        </div>
      </section>
    </div>
  );
}
