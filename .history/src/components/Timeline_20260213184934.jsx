import { motion } from "framer-motion";

const events = [
  { date: "First Text 💬", desc: "The day everything started." },
  { date: "First Call 📞", desc: "3 hours felt like 3 minutes." },
  { date: "First Date 🌹", desc: "Still my favorite memory." },
];

export default function Timeline() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
      <div className="space-y-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">{event.date}</h3>
            <p className="text-gray-400 mt-2">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
