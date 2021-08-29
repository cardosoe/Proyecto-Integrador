import "./App.scss";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: "85.375rem",
        margin: "0 auto"

      }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Contact />
      <Footer />

    </div>
  );
}

export default App
