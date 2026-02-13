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
  "/WhatsApp Image 2026-02-14 at 00.57.06 (5).jpeg",
  "/WhatsApp Image 2026-02-14 at 00.57.06.jpeg",
  "/WhatsApp Image 2026-02-14 at 00.58.46.jpeg",
];

// All images same size - uniform square
const IMAGE_SIZE = "200px";

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

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allImages.map((src, index) => {
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedImage(src)}
                className="cursor-pointer"
              >
                <div 
                  className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    margin: "0 auto",
                  }}
                >
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto">
        
      </div>

      
    </section>
  );
}
