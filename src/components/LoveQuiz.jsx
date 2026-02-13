import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "When did you realize we were something special?",
    options: [
      "The very first time we talked",
      "When we couldn't stop texting",
      "Our first proper date",
      "Honestly… I knew from the start",
    ],
    sweetAnswerIndex: 3,
  },
  {
    id: 2,
    question: "What describes us the best?",
    options: [
      "Two weirdos in love",
      "Soulmates in progress",
      "Main characters of a movie",
      "All of the above (obviously)",
    ],
    sweetAnswerIndex: 3,
  },
  {
    id: 3,
    question: "My favorite place in the world is…",
    options: [
      "On a call with you",
      "Next to you, doing nothing",
      "Anywhere, as long as you're there",
      "Inside your hoodie, stealing your warmth",
    ],
    sweetAnswerIndex: 2,
  },
  {
    id: 4,
    question: "What u should be within?",
    options: [
      "My arms",
      "My heart",
      "Your limits",
      "The boundaries of this quiz",
    ],
    sweetAnswerIndex: 2,
  },
  {
    id: 5,
    question: "What's the best part of my day?",
    options: [
      "Waking up",
      "Getting your good morning text",
      "Talking to you",
      "All of the above, but mostly you",
    ],
    sweetAnswerIndex: 3,
  },
  {
    id: 6,
    question: "If I had to choose one thing about you that makes me smile instantly?",
    options: [
      "Your laugh",
      "The way you say my name",
      "Your random texts at weird hours",
      "Everything. Literally everything.",
    ],
    sweetAnswerIndex: 3,
  },
  {
    id: 7,
    question: "What's our superpower as a couple?",
    options: [
      "Making each other laugh",
      "Understanding each other without words",
      "Being weird together",
      "All of the above + more",
    ],
    sweetAnswerIndex: 3,
  },
];

export default function LoveQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);

    const isLast = currentIndex === questions.length - 1;
    if (isLast) {
      setShowResult(true);
    } else {
      setCurrentIndex((idx) => idx + 1);
    }
  };

  const sweetScore = answers.reduce((score, answerIndex, idx) => {
    if (answerIndex === undefined) return score;
    return score + (answerIndex === questions[idx].sweetAnswerIndex ? 1 : 0);
  }, 0);

  const progress = ((currentIndex + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
    <section className="py-20" aria-label="Love quiz">
      <div className="text-center mb-10">
        <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-3">
          A tiny interactive thing
        </p>
        <h2 className="text-3xl font-bold mb-2">How well do you feel us? 💞</h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          There are no wrong answers here. Every choice just unlocks a different soft corner
          of my heart for you.
        </p>
      </div>

      <div className="bg-gray-900 panel-soft rounded-xl p-6 md:p-8">
        <div
          aria-hidden="true"
          className="mb-6 h-2 w-full rounded-full overflow-hidden bg-black/40"
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #f97316, #ec4899, #a855f7)",
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
            >
              <p className="text-sm text-gray-400 mb-2">
                Question {currentIndex + 1} of {questions.length}
              </p>
              <h3 className="text-xl font-semibold mb-5">{currentQuestion.question}</h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isActive = answers[currentIndex] === index;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left"
                    >
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="bg-black/50 border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3 transition"
                        style={{
                          boxShadow: isActive
                            ? "0 0 0 1px rgba(248, 113, 113, 0.4), 0 18px 40px rgba(248, 113, 113, 0.22)"
                            : "0 10px 24px rgba(148, 163, 184, 0.32)",
                          background: isActive
                            ? "radial-gradient(circle at top left, rgba(251, 113, 133, 0.18), #fff5f7)"
                            : "rgba(255, 255, 255, 0.96)",
                        }}
                      >
                        <span
                          className="inline-flex items-center justify-center rounded-full text-xs font-semibold"
                          style={{
                            width: 26,
                            height: 26,
                            backgroundColor: isActive ? "#f97316" : "rgba(148, 163, 184, 0.25)",
                          }}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-sm">{option}</span>
                      </motion.div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <p className="text-sm text-gray-400 mb-3">Mini result</p>
              <h3 className="text-2xl font-semibold mb-3">
                You scored {sweetScore} / {questions.length} in the{" "}
                <span style={{ backgroundImage: "linear-gradient(90deg,#fb7185,#e879f9)" }} className="bg-clip-text text-transparent">
                  softness-meter
                </span>
                .
              </h3>
              <p className="text-gray-300 text-sm max-w-xl mx-auto mb-5">
                But the truth is: no number, no quiz, no score could ever measure what you
                mean to me. This was just my cute excuse to keep you here a little longer.
              </p>
              <p className="text-lg">
                Keep scrolling down,{" "}
                <span className="font-semibold">
                  my favorite human
                </span>
                . There&apos;s more waiting for you. ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

