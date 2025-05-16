import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="font-lufgar">
      <div className="border border-red-500">
        <HeroSection />
        <Services />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
