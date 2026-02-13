import { useState } from "react";
import { motion } from "framer-motion";

const herNamePlaceholder = "Rajjo"; // change this if you want to use a nickname 💗

export default function Hero({ onNavigate }) {
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const [noHoverOffset, setNoHoverOffset] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    setHasSaidYes(true);
  };

  const handleNoHover = () => {
    // move the "No" button around so it never really works 🙂
    const randomX = (Math.random() - 0.5) * 80; // -40 to 40
    const randomY = (Math.random() - 0.5) * 40; // -20 to 20
    setNoHoverOffset({ x: randomX, y: randomY });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center section-shell">
      <div className="section-inner">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm tracking-[0.3em] uppercase text-gray-300 mb-6"
        >
          For {herNamePlaceholder}, on this very extra Valentine&apos;s Day
        </motion.p>

        {!hasSaidYes ? (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl font-bold"
            >
              Will you be my
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #fb7185, #f97316, #ec4899)",
                }}
                className="bg-clip-text text-transparent"
              >
                Valentine, {herNamePlaceholder}?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-6 text-lg text-gray-300 max-w-xl mx-auto"
            >
              Think carefully. Saying yes may cause: excessive smiling, random butterflies,
              and one person who won&apos;t ever shut up about how much he loves you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center relative"
            >
              <button
                type="button"
                onClick={handleYes}
                className="btn-primary"
              >
                Yes OFC YES 💗
              </button>

              <motion.button
                type="button"
                onMouseEnter={handleNoHover}
                onFocus={handleNoHover}
                style={{
                  position: "relative",
                  transform: `translate(${noHoverOffset.x}px, ${noHoverOffset.y}px)`,
                }}
                className="btn-secondary"
              >
                No,  🙃
              </motion.button>
            </motion.div>
          </>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold"
            >
              Best. Answer. Ever. 💐
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-lg text-gray-300 max-w-xl mx-auto"
            >
              Now that you officially said yes, let me take you through a tiny tour of us — our
              story, our memories, the little reasons I&apos;m obsessed with you, and a final
              love letter at the end.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10 flex justify-center"
            >
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("story")}
                className="btn-primary"
              >
                Take me to our story ⭣
              </button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

