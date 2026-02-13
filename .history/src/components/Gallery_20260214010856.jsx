import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
          Memories
        </p>
        <h2 className="text-3xl font-bold mb-2">The moments that shaped us</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Not separate chapters. Just pieces of the same story.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src="/.jpg"
          alt="Memory 1"
          className="rounded-xl object-cover aspect-square panel-soft"
        />

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src="/photo2.jpg"
          alt="Memory 2"
          className="rounded-xl object-cover aspect-square panel-soft"
        />

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src="/photo3.jpg"
          alt="Memory 3"
          className="rounded-xl object-cover aspect-square panel-soft"
        />

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src="/photo4.jpg"
          alt="Memory 4"
          className="rounded-xl object-cover aspect-square panel-soft"
        />
      </div>

      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-gray-300 text-sm leading-relaxed">
          The first shifts. The big questions. The quiet confessions.
          The trip that felt like ours. And all the ordinary days that followed.
          These are not just photos. They are reminders of how we became us.
        </p>
      </div>
    </section>
  );
}
