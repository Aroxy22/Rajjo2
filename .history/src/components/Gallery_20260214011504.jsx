import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Exclude images already in Our Story timeline
const allImages = [
  "/WhatsApp Image 2026-02-14 at 00.56.04.jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.05 (1).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.05 (2).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.05 (3).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.05 (4).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.05.jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (1).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (10).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (11).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (2).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (3).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (4).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (5).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (6).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (7).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (8).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06 (9).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.56.06.jpeg",
  "/WhatsApp Image 2026-02-14 at 00.57.06 (1).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.57.06 (2).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.57.06 (3).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.57.06 (4).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.57.06.jpeg",
  "/WhatsApp Image 2026-02-14 at 00.58.46.jpeg",
];

// All images same size - uniform
const IMAGE_SIZE = "240px";

const getRotation = (index) => {
  const rotations = [-3, 2.5, -2, 3, -1.5, 2, -2.5, 1.5, -1, 2.5, -2, 1];
  return rotations[index % rotations.length];
};

const getDecorativeElement = (index) => {
  const elements = ["💕", "✨", "💖", "💗", "💝", "💞", "🌹", "💐", "⭐", "💫"];
  return elements[index % elements.length];
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
          Our Visual Story
        </p>
        <h2 className="text-3xl font-bold mb-2">A collage of us 💕</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Every photo tells a piece of our story. Click any to see it bigger.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allImages.map((src, index) => {
            const rotation = getRotation(index);
            const decoration = getDecorativeElement(index);
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
                animate={{ opacity: 1, scale: 1, rotate: rotation }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: rotation + (rotation > 0 ? 2 : -2),
                  zIndex: 20,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedImage(src)}
                className="cursor-pointer relative"
              >
                {/* Polaroid-style frame */}
                <div 
                  className="relative bg-white rounded-lg shadow-2xl p-3 hover:shadow-pink-300/50 transition-all duration-300"
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    margin: "0 auto",
                    boxShadow: "0 20px 60px rgba(248, 113, 113, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {/* Decorative corner hearts */}
                  <div className="absolute -top-2 -left-2 text-2xl opacity-80 animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}>
                    {decoration}
                  </div>
                  <div className="absolute -top-2 -right-2 text-xl opacity-60">
                    ✨
                  </div>
                  <div className="absolute -bottom-2 -left-2 text-xl opacity-60">
                    💕
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-2xl opacity-80 animate-pulse" style={{ animationDelay: `${index * 0.15}s` }}>
                    {decoration}
                  </div>

                  {/* Image container */}
                  <div className="relative w-full h-full rounded-md overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                    <img
                      src={src}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ 
                        width: "100%",
                        height: "100%",
                        display: "block"
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Decorative tape/pin effect */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-yellow-200/60 rounded-sm opacity-70 rotate-[-2deg]" />
                  <div className="absolute top-1 right-2 w-3 h-3 bg-pink-300 rounded-full shadow-md" />

                  {/* Bottom decorative border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 opacity-60" />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-3xl"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  💖
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto">
        <p className="text-gray-300 text-sm leading-relaxed">
          The first shifts. The big questions. The quiet confessions.
          The trip that felt like ours. And all the ordinary days that followed.
          These are not just photos. They are reminders of how we became us.
        </p>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Enlarged memory"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
