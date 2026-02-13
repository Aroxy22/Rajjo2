import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const secretPhrase = "i love you";
const specialAudio = "/AUDIO-2026-02-14-01-40-14 3.aac";
const specialPhoto = "/WhatsApp Image 2026-02-14 at 01.48.38.jpeg";

export default function FinalMessage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [showSpecial, setShowSpecial] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim().toLowerCase() === secretPhrase) {
      setUnlocked(true);
      setError("");
    } else {
      setError("That&apos;s cute, but try the obvious words. The ones we say a lot.");
    }
  };

  const handleSpecialClick = () => {
    setShowSpecial(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Audio play prevented:", err);
      });
      setIsAudioPlaying(true);
    }
  };

  const handleAudioEnd = () => {
    setIsAudioPlaying(false);
  };

  const handleCloseSpecial = () => {
    setShowSpecial(false);
    setIsAudioPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-20 text-center relative" aria-label="Final love letter" style={{ minHeight: "100vh" }}>
      {/* Special photo background */}
      <AnimatePresence>
        {showSpecial && (
          <>
            {/* Photo as background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 10,
                backgroundImage: `url(${specialPhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(1px)",
              }}
            />
            {/* Photo displayed prominently - full screen */}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={specialPhoto}
              alt="Special moment"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 13,
                display: "block",
              }}
            />
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleCloseSpecial}
              style={{
                position: "fixed",
                top: "24px",
                right: "24px",
                zIndex: 15,
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "2px solid rgba(251, 113, 133, 0.5)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
              }}
              aria-label="Close"
            >
              <svg
                style={{ width: "24px", height: "24px", color: "#ec4899" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Light overlay when photo is shown */}
      {showSpecial && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 11,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            pointerEvents: "none",
          }}
        />
      )}

      {!showSpecial && (
        <div style={{ position: "relative", zIndex: 12 }}>
          <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
            A tiny secret lock
          </p>
          <h2 className="text-3xl font-bold mb-3">The part I need you to really read</h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8">
            Type the little phrase that started everything and still means everything.
            (Hint: it&apos;s 3 words. You already know it.)
          </p>

        <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.form
            key="lock-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="max-w-md mx-auto flex flex-col items-center gap-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type the magic words here..."
              className="w-full rounded-full px-5 py-3 text-sm bg-black/50 border border-white/10 outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Unlock the letter 💌
            </button>
            {error && (
              <p className="text-xs text-gray-300" dangerouslySetInnerHTML={{ __html: error }} />
            )}
          </motion.form>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              marginTop: "2rem",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              background: showSpecial 
                ? "rgba(255, 255, 255, 0.95)" 
                : "radial-gradient(circle at top left, rgba(252, 231, 243, 0.9), rgba(255, 255, 255, 0.95))",
              borderRadius: "1.5rem",
              border: showSpecial 
                ? "2px solid rgba(251, 113, 133, 0.3)" 
                : "1px solid rgba(248, 113, 113, 0.2)",
              boxShadow: showSpecial
                ? "0 25px 60px rgba(0, 0, 0, 0.3)"
                : "0 20px 50px rgba(248, 113, 113, 0.25)",
              padding: "3rem 2.5rem",
              textAlign: "left",
            }}
          >
            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    Rajjo, before anything else, thank you. Thank you for reading this. Thank you for being here. Thank you for choosing me in all the small, quiet ways you do every single day.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    I genuinely do not think you understand how much you mean to me. The moment you entered my life, something shifted in a way I cannot fully explain. Things softened. The noise in my head got quieter. Hard days felt lighter. Ordinary moments started feeling important simply because you were in them.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    You are so, so special to me. More than I probably say out loud. You are my comfort chat, my favorite notification, my safest call at 2am, my happiest distraction, my peace when everything feels overwhelming. You are the person I want to tell everything to. The good, the bad, the random, the completely pointless details of my day. Because with you, nothing feels pointless.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    I love you. I love you in ways that are calm and steady. I love you in ways that are loud and overwhelming. I love you when we are laughing at something stupid. I love you when we are quiet on call and just breathing on the same line. I love you when you say "I miss you" three times in a row like you need me to truly understand it. I love that you miss me the way you do. I love that you say it again and again. I love that you care that much.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    You are the cutest human being to ever exist. Not just in the way you look, although yes, obviously that too. But in the way you think. The way you react. The way you get dramatic. The way you overanalyze. The way you trust me. The way you love.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    I miss you more than I admit sometimes. I miss your voice when the day feels long. I miss your random updates. I miss sitting next to you doing absolutely nothing. I miss you even when we just spoke five minutes ago. And I love that about us. I love that we cannot get enough of each other.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "1.5rem",
    fontWeight: 400,
  }}>
    You are not just someone I love. You are someone I respect. Someone I admire. Someone I am grateful for. You have this rare way of making my world feel bigger and safer at the same time.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginBottom: "2rem",
    fontWeight: 400,
  }}>
    No matter what happens, I want this page to be a little time capsule of how big my heart feels for you right now. If you ever doubt how much you matter to me, remember that I sat here and built all of this just to say it properly. Just to say it clearly. It is you. It has been you. It will always be you.
  </p>

  <p style={{ 
    fontSize: "0.95rem", 
    lineHeight: "1.8",
    color: showSpecial ? "#1f2937" : "#374151",
    marginTop: "2rem",
    marginBottom: "2rem",
  }}>
    With all my love,
    <br />
    <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "#ec4899" }}>
      Your narcissistic asshole ❤️
    </span>
  </p>

  {/* Special audio button */}
  {!showSpecial && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{ marginTop: "2.5rem", textAlign: "center" }}
    >
      <button
        onClick={handleSpecialClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "1rem 2rem",
          borderRadius: "9999px",
          border: "none",
          fontSize: "0.95rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "#ffffff",
          background: "linear-gradient(135deg, #fb7185, #a855f7, #fb7185)",
          backgroundSize: "200% 200%",
          cursor: "pointer",
          boxShadow: "0 15px 40px rgba(248, 113, 113, 0.4)",
          transition: "all 0.3s ease",
        }}
      >
        <span>🎵</span>
        Something for u Rajjo
        <span>💕</span>
      </button>
    </motion.div>
  )}

              {/* Audio playing indicator */}
              {isAudioPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    marginTop: "1.5rem",
                    textAlign: "center",
                    color: showSpecial ? "#1f2937" : "#ec4899",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  🎵 Playing something special for you...
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
        </div>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={specialAudio}
        onEnded={handleAudioEnd}
        preload="auto"
      />
    </section>
  );

                }
