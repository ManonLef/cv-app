import GeneralInfo from "./components/General";
import EducationSection from "./components/Educational";
import WorkSection from "./components/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="md:flex-col md:items-center mb-6 gap-2 text-gray-800">
      <Header />
      <GeneralInfo />
      <EducationSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;
