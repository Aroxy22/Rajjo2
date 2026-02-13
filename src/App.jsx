import { useState } from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import FinalMessage from "./components/FinalMessage";
import LoveQuiz from "./components/LoveQuiz";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

const views = [
  { id: "hero", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "quiz", label: "Quiz" },
  { id: "memories", label: "Memories" },
  { id: "reasons", label: "Reasons" },
  { id: "letter", label: "Letter" },
];

function App() {
  const [currentView, setCurrentView] = useState("hero");

  return (
    <div className="app-shell bg-black overflow-x-hidden">
      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, index) => (
          <div
            key={index}
            className="floating-heart"
            style={{
              left: `${(index * 97) % 100}%`,
              bottom: `${(index * 37) % 100}%`,
              animationDelay: `${index * -0.9}s`,
              animationDuration: `${12 + (index % 6)}s`,
            }}
          />
        ))}
      </div>

      <header className="section-shell" style={{ paddingTop: "1.25rem" }}>
        <div className="section-inner" style={{ display: "flex", justifyContent: "center" }}>
          <nav
            style={{
              padding: "0.4rem",
              borderRadius: "999px",
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: "0 12px 30px rgba(248,113,113,0.3)",
              display: "flex",
              gap: "0.25rem",
            }}
          >
            {views.map((view) => {
              const isActive = view.id === currentView;
              return (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setCurrentView(view.id)}
                  style={{
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.45rem 0.9rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    backgroundColor: isActive ? "#fb7185" : "transparent",
                    color: isActive ? "#ffffff" : "#9f1239",
                    transition: "background-color 0.18s ease, color 0.18s ease",
                  }}
                >
                  {view.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main>
        {currentView === "hero" && (
          <Hero
            onNavigate={(next) => {
              setCurrentView(next);
            }}
          />
        )}

        {currentView === "story" && (
          <section className="section-shell">
            <div className="section-inner">
              <Timeline />
            </div>
          </section>
        )}

        {currentView === "quiz" && (
          <section className="section-shell">
            <div className="section-inner">
              <LoveQuiz />
            </div>
          </section>
        )}

        {currentView === "memories" && (
          <section className="section-shell">
            <div className="section-inner">
              <Gallery />
            </div>
          </section>
        )}

        {currentView === "reasons" && (
          <section className="section-shell">
            <div className="section-inner">
              <Reasons />
            </div>
          </section>
        )}

        {currentView === "letter" && (
          <section className="section-shell">
            <div className="section-inner">
              <FinalMessage />
            </div>
          </section>
        )}
      </main>

      <MusicPlayer />
    </div>
  );
}

export default App;
