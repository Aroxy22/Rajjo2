const reasons = [
    "You make me feel safe.",
    "You believe in me.",
    "Your smile fixes everything.",
    "You are my best friend.",
  ];
  
  export default function Reasons() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Why I Love You</h2>
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <p key={index} className="text-gray-300 text-lg">
              ❤️ {reason}
            </p>
          ))}
        </div>
      </section>
    );
  }
  