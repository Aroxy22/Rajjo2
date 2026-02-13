import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const songs = [
  "/Ishq Bulaava Hasee Toh Phasee 128 Kbps.mp3",
  "/Jaane Na Tu(KoshalWorld.Com).mp3",
  "/Mera Mann Kehne Laga Nautanki Saala! 128 Kbps.mp3",
  "/Sheesha (PenduJatt.Com.Se).mp3",
];

// Shuffle array function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    // Shuffle songs on mount
    setShuffledSongs(shuffleArray(songs));
  }, []);

  useEffect(() => {
    if (shuffledSongs.length > 0 && audioRef.current) {
      audioRef.current.src = shuffledSongs[currentSongIndex];
      audioRef.current.volume = 0.7;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Auto-play prevented:", err);
        });
      }
    }
  }, [currentSongIndex, shuffledSongs, isPlaying]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log("Play prevented:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % shuffledSongs.length;
    setCurrentSongIndex(nextIndex);
    // Update source and play if currently playing
    if (audioRef.current && shuffledSongs.length > 0) {
      audioRef.current.src = shuffledSongs[nextIndex];
      audioRef.current.volume = 0.7;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Auto-play prevented:", err);
        });
      }
    }
  };

  const handleEnded = () => {
    // Move to next song in shuffled playlist
    const nextIndex = (currentSongIndex + 1) % shuffledSongs.length;
    setCurrentSongIndex(nextIndex);
    // Auto-play next song
    if (audioRef.current) {
      audioRef.current.src = shuffledSongs[nextIndex];
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch((err) => {
        console.log("Auto-play prevented:", err);
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "9999px",
          boxShadow: "0 20px 60px rgba(248, 113, 113, 0.4), 0 0 0 2px rgba(251, 113, 133, 0.5)",
          padding: "12px",
          position: "relative",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <button
          onClick={handlePlayPause}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #fb7185, #a855f7)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(248, 113, 113, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "linear-gradient(135deg, #ec4899, #9333ea)";
            e.target.style.boxShadow = "0 15px 40px rgba(248, 113, 113, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "linear-gradient(135deg, #fb7185, #a855f7)";
            e.target.style.boxShadow = "0 10px 30px rgba(248, 113, 113, 0.4)";
          }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg
              style={{ width: "24px", height: "24px", color: "white" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              style={{ width: "24px", height: "24px", color: "white", marginLeft: "4px" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          )}
        </button>
        <button
          onClick={handleNext}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #a855f7, #fb7185)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(168, 85, 247, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "linear-gradient(135deg, #9333ea, #ec4899)";
            e.target.style.boxShadow = "0 12px 35px rgba(168, 85, 247, 0.5)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "linear-gradient(135deg, #a855f7, #fb7185)";
            e.target.style.boxShadow = "0 8px 25px rgba(168, 85, 247, 0.4)";
            e.target.style.transform = "scale(1)";
          }}
          aria-label="Next song"
        >
          <svg
            style={{ width: "20px", height: "20px", color: "white", marginLeft: "2px" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0011 6v2.798l-5.445-3.63z" />
            <path d="M15 6v8l2-1.333V7.333L15 6z" />
          </svg>
        </button>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              width: "16px",
              height: "16px",
              backgroundColor: "#ec4899",
              borderRadius: "9999px",
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ec4899",
                borderRadius: "9999px",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </motion.div>
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        preload="auto"
      />
    </div>
  );
}
