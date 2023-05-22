import GuidesAccordion from "./components/Guides";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <div className="w-full">
      <Navbar />
      <GuidesAccordion />
    </div>
  );
}

export default App;
