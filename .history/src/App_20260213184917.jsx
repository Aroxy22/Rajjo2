import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import FinalMessage from "./components/FinalMessage";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero />
      <Timeline />
      <Gallery />
      <Reasons />
      <FinalMessage />
    </div>
  );
}

export default App;
