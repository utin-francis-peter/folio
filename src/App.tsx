import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

function App() {
  return (
    <div className="font-lufgar">
      <div className="border border-red-500">
        <HeroSection />
        <Services />
      </div>
    </div>
  );
}

export default App;
