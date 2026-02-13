import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const memoryPlaceholders = [
  {
    src: "/photo1.jpg",
    title: "18th April • Our first cheek kiss",
    note: "We went for a movie that day, but I barely remember what we watched. I just remember knowing you were leaving for Pondicherry with your friends soon, and I was honestly upset about not being able to see you for a while. I think that was the first time I really felt that this could be something more than just casual.
    After the movie, I hugged you really tight. I did not want to let go. And then you kissed me on the cheek.
    It was the first time that happened, and I swear everything just paused for a second. I tried to act normal, but inside I was ridiculously happy. That moment stayed with me. It was probably the first time I truly felt something real could happen between us.
    And yes, I definitely could not stop thinking about it after that.",
  },
  {
    src: "/photo2.jpg",
    title: "13th May • The proposal day",
    note: "This one is for 13th May — the day I finally proposed. Add a picture from that day: maybe what you were wearing, the place we were at, or even a random selfie. Anything that brings that “you said yes” feeling right back.",
  },
  {
    src: "/photo3.jpg",
    title: "3rd July, 2am • First ‘I love you’",
    note: "For 3rd July, around 2am, when you said ‘I love you’ on video call. A screenshot from a late-night call, a blank dark screen, or even just a picture of the sky at night would fit — it’s more about the moment than the photo.",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openMemory = (index) => {
    setActiveIndex(index);
  };

  const closeMemory = () => {
    setActiveIndex(null);
  };

  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
          Your photos go here
        </p>
        <h2 className="text-3xl font-bold mb-2">A tiny gallery of us</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Replace these placeholders with our actual photos. Each one can have a little note,
          so when you click on it, it opens a short love story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {memoryPlaceholders.map((memory, index) => (
          <button
            key={memory.src}
            type="button"
            onClick={() => openMemory(index)}
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="rounded-xl hover:scale-105 transition duration-300 bg-black/40 panel-soft aspect-[4/5] flex items-center justify-center text-center px-4">
              <p className="text-sm text-gray-300">
                {memory.title}
                <br />
                <span className="text-xs text-gray-400">
                  (Click to open the note behind this memory.)
                </span>
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 px-4"
            onClick={closeMemory}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 panel-soft rounded-xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeMemory}
                className="absolute top-3 right-4 text-xs text-gray-400 hover:text-white"
              >
                close
              </button>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
                Memory note
              </p>
              <h3 className="text-lg font-semibold mb-3">
                {memoryPlaceholders[activeIndex].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {memoryPlaceholders[activeIndex].note}
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Later, you can add the real photo file in the{" "}
                <span className="font-semibold">public</span> folder and turn this note into the
                exact memory of that picture.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
