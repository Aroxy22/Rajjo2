import { useState } from "react";
import { motion } from "framer-motion";

export default function FinalMessage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 text-center">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-pink-500 px-6 py-3 rounded-full hover:bg-pink-600 transition"
        >
          Unlock Final Message 💌
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-2xl"
        >
          You are my today, my tomorrow, and my forever.
        </motion.div>
      )}
    </section>
  );
}
