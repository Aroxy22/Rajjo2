import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    short: "You make everything feel softer.",
    detail:
      "Even on the worst days, one word from you changes the whole tone of my day. You are my safe place in human form.",
  },
  {
    short: "You believe in me more than I believe in myself.",
    detail:
      "You see versions of me I'm still trying to grow into. And somehow, just knowing that you believe in me makes me braver.",
  },
  {
    short: "Your smile rewires my whole brain chemistry.",
    detail:
      "I have genuinely paused mid thought because I remembered your smile. It's that serious. You're that distracting.",
  },
  {
    short: "You're my favorite best friend + crush combo.",
    detail:
      "I can be stupid, serious, annoying, emotional and extra with you — and you stay. That's rare. That's everything.",
  },
  {
    short: "The way you listen makes me feel heard.",
    detail:
      "You don't just hear me — you actually listen. You remember the small things I say, the random thoughts I share, and that makes me feel so seen.",
  },
  {
    short: "You make ordinary moments feel like memories.",
    detail:
      "A random call, a stupid joke, a late-night conversation — with you, even the most ordinary moments become something I want to remember forever.",
  },
  {
    short: "Your voice is my favorite sound.",
    detail:
      "Whether it's a text, a call, or you talking about something random — your voice has this power to calm my chaos and make everything okay.",
  },
  {
    short: "You accept all versions of me.",
    detail:
      "The happy me, the sad me, the annoying me, the extra me — you don't just tolerate them, you actually love them. That's rare.",
  },
  {
    short: "You make me want to be better.",
    detail:
      "Not because you ask me to, but because being with you makes me want to grow, to be the best version of myself — for you, for us.",
  },
  {
    short: "Your laugh is my favorite song.",
    detail:
      "I could listen to you laugh on loop. It's infectious, it's genuine, and it makes my whole world brighter every single time.",
  },
  {
    short: "You're my person.",
    detail:
      "The one I want to tell everything to. The one I want to share my day with. The one I want to be weird with. You're just... my person.",
  },
  {
    short: "You make me feel safe to be vulnerable.",
    detail:
      "I can cry, I can be scared, I can be weak — and you don't judge. You just hold space for me. That's everything.",
  },
  {
    short: "The way you care about the little things.",
    detail:
      "You remember what I like, what makes me happy, what I'm worried about. You pay attention to the details, and that makes me feel so loved.",
  },
  {
    short: "You're my home.",
    detail:
      "Not a place, but a feeling. When I'm with you, I'm home. When I talk to you, I'm home. You're my safe space, my comfort, my everything.",
  },
  {
    short: "You make me believe in us.",
    detail:
      "Even on days when I doubt everything, you make me believe that we're real, that we're special, that we're worth fighting for.",
  },
];

export default function Reasons() {
  const [revealed, setRevealed] = useState(Array(reasons.length).fill(false));

  const handleReveal = (index) => {
    setRevealed((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const allRevealed = revealed.every(Boolean);

  return (
    <section className="py-20 text-center" aria-label="Reasons I love you">
      <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
        Tap to reveal
      </p>
      <h2 className="text-3xl font-bold mb-3">A few reasons I&apos;m in love with you</h2>
      <p className="text-gray-300 text-sm max-w-xl mx-auto mb-10">
        These are placeholders — feel free to later switch them with super specific things
        only you and I would understand. That&apos;s what will make this page truly ours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const isOpen = revealed[index];
          return (
            <button
              key={reason.short}
              type="button"
              onClick={() => handleReveal(index)}
              className="text-left"
            >
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="h-full bg-gray-900 panel-soft rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-lg mb-3">
                    <span className="mr-2" aria-hidden="true">
                      {isOpen ? "💗" : "🤍"}
                    </span>
                    {reason.short}
                  </p>
                  {isOpen && (
                    <p className="text-gray-300 text-sm mt-2">{reason.detail}</p>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  {isOpen ? "Tap again to hide this reason." : "Tap to open this little love note."}
                </p>
              </motion.div>
            </button>
          );
        })}
      </div>

      {allRevealed && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-sm text-gray-300"
        >
          You opened all of them — which is funny, because I could list a hundred more.
          You&apos;re that easy to love.
        </motion.p>
      )}
    </section>
  );
}
