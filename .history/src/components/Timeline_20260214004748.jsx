import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
    {
        label: "18th April • That soft first kiss 💋",
        title: "Cheek kiss number one",
        desc: "18th April. We went for a movie that day, but I barely remember what we watched. I just remember knowing you were leaving for Pondicherry soon, and I hated the idea of not seeing you for days. That was probably the first time I felt like this could actually become something real.\n\nAfter the movie, I hugged you really tight because I did not want to let go. And then you kissed me on the cheek.\n\nIt was the first time that happened, and for a second everything just paused. I tried to act normal, but inside I was unbelievably happy. That moment stayed with me. I could not stop thinking about it after that.",
        image: "/cheek_kiss.jpeg",
      }
      ,
  {
    label: "13th May • The big question 💍",
    title: "The day I finally proposed",
    desc: "13th May. I had thought about that moment more times than I would ever admit. I kept going over what I would say and how I would say it, not because I was unsure about you, but because I wanted it to feel right.\n\nWhen it actually happened, everything felt strangely calm. I was nervous, yes, but it was the kind of nervous that comes from caring deeply. I remember looking at you and realizing how certain I felt. It was not about perfect words or dramatic gestures. It was just about being honest.\n\nAsking you felt like stepping into something bigger than both of us. A little scary, but mostly exciting. In that moment, all I wanted was for us to choose each other, intentionally.\n\nAnd when you said yes, it did not feel loud or chaotic. It felt steady. It felt right. Like we had just taken a small but meaningful step toward something we both already knew was there.",
    image: "/lip_kiss.jpeg",
  },
  {
    label: "3rd July, 2:00am • The first 'I love you' 🕊️",
    title: "The first 'I love you'",
    desc: "3rd July, around 2am. We were on a video call, just talking like we always do. Nothing planned, nothing dramatic.\n\nAnd then YOU finally said it. 'I love you.'\n\nFor the record, I definitely said it first. I will not be accepting alternative versions of that story.\n\nJokes aside, hearing you say it back made it real in a way I cannot properly explain. It was not loud or overwhelming. It was calm. Certain. Comforting.\n\nThat night did not feel dramatic. It just felt right.",
    image: "/video_call.jpeg",
  },
  {
    label: "The infamous trip 🏖️",
    title: "Pondicherry memories",
    The infamous trip to Pondicherry. That time we got away together, explored new places, made new memories, and probably took way too many photos. But every single one of them is still my favorite because it’s us, together, in a place that felt like ours.",
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

