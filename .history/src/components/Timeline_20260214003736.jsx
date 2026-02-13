import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    label: "18th April • That soft first kiss 💋",
    title: "Cheek kiss number one",
    desc: "18th April.
    We went for a movie that day, but honestly, I barely remember the film. What I do remember is knowing you were leaving for Pondicherry with your friends soon, and I hated the thought of not seeing you for days. I think that’s when it hit me that this wasn’t casual for me anymore — I actually cared.
    After the movie, I hugged you tighter than I probably should have. I didn’t want to let go. And then you kissed me on the cheek.
    It was the first time that happened, and I swear my brain just paused for a second. I tried to act normal, but inside I was somewhere between shock and pure happiness. That was probably the first moment I felt like something real could happen between us.
    And yeah… I definitely couldn’t stop thinking about it after that..",
    image: "/cheek_kiss.jpeg",
  },
  {
    label: "13th May • The big question 💍",
    title: "The day I finally proposed",
    desc: "13th May. I remember overthinking everything — the timing, the words, how to say it without sounding stupid. But in that moment, when I actually asked you, everything went quiet inside me. It was just you, your eyes, and this crazy feeling of, “please say yes, please say yes, please say yes.”",
    image: "/lip_kiss.jpeg",
  },
  {
    label: "3rd July, 2:00am • The first 'I love you' 🕊️",
    title: "Video call + 3am feelings",
    desc: "3rd July, around 2am, on a video call when the world was half-asleep but my heart was wide awake. Hearing you say “I love you” for the first time — properly, clearly — did something to me I still can’t fully explain. Every version of me just went: this is it. This is home.",
    image: "/video_call.jpeg",
  },
  {
    label: "The infamous trip 🏖️",
    title: "Pondicherry memories",
    desc: "The infamous trip to Pondicherry. That time we got away together, explored new places, made new memories, and probably took way too many photos. But every single one of them is still my favorite because it’s us, together, in a place that felt like ours.",
    image: "/pondy_trip.jpeg",
  },
  {
    label: "Everything after • The best part ✨",
    title: "All the little moments that followed",
    desc: "After the first kiss, the proposal, the first ‘I love you’, and that trip — it’s been the small things: random calls, stupid jokes, late-night talks, and all the times we chose each other on ordinary days. That’s my favorite part of our story — that it keeps going.",
    image: null,
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20" aria-label="Our story timeline">
      <div className="text-center mb-10">
        <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
          Little milestones
        </p>
        <h2 className="text-3xl font-bold mb-2">The way we slowly became us</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          A few of our real moments — the first kiss on your cheek, the day I proposed, and
          that 2am “I love you” that changed everything. We can always add even more later.
        </p>
      </div>

      <div className="space-y-10 md:space-y-0 md:flex md:gap-10 md:items-start">
        <div className="md:w-1/2 space-y-4">
          {events.map((event, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={event.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="w-full text-left"
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="relative flex flex-col items-center"
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "999px",
                        border: "2px solid rgba(248, 250, 252, 0.7)",
                        background: isActive
                          ? "radial-gradient(circle, #fb7185 0, #a855f7 60%, transparent 100%)"
                          : "transparent",
                        boxShadow: isActive
                          ? "0 0 20px rgba(236, 72, 153, 0.9)"
                          : "0 0 0 rgba(0,0,0,0)",
                      }}
                    />
                    {index !== events.length - 1 && (
                      <span
                        style={{
                          width: 2,
                          flex: 1,
                          marginTop: 4,
                          background:
                            "linear-gradient(to bottom, rgba(148,163,184,0.7), transparent)",
                        }}
                      />
                    )}
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 md:p-5 transition">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                      {event.label}
                    </p>
                    <p className="text-sm font-semibold">{event.title}</p>
                    {isActive && (
                      <p className="text-gray-300 text-xs mt-2">
                        Tap the other points to move through our story.
                      </p>
                    )}
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="bg-black/40 panel-soft rounded-xl p-6 md:p-7 border border-white/5"
            >
              {events[activeIndex].image && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={events[activeIndex].image}
                  alt={events[activeIndex].title}
                  className="w-full rounded-lg mb-4"
                  style={{ 
                    maxHeight: "250px",
                    width: "100%",
                    objectFit: "contain",
                    display: "block"
                  }}
                />
              )}
              <p className="text-sm text-gray-300 leading-relaxed">
                {events[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

