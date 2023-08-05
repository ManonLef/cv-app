import GeneralInfo from "./components/General";
import EducationSection from "./components/Educational";
import WorkSection from "./components/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"

function App() {
  return (
    <div className="grid grid-rows-3 bg-slate-200">
      <Header />
      <div className=" gap-2 text-gray-800 mx-8 mb-8">
        <GeneralInfo />
        <EducationSection />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
