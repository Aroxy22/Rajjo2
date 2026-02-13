export default function Gallery() {
    return (
      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">Memories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/photo1.jpg" className="rounded-xl hover:scale-105 transition duration-300" />
          <img src="/photo2.jpg" className="rounded-xl hover:scale-105 transition duration-300" />
          <img src="/photo3.jpg" className="rounded-xl hover:scale-105 transition duration-300" />
        </div>
      </section>
    );
  }
  