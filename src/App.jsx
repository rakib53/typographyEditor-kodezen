import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview/Preview";
import TypographyEditor from "./components/TypographyEditor/TypographyEditor";

function App() {
  const [propreties, setPropreties] = useState({
    font: {
      displayName: "Poppins",
      value: "'Poppins', sans-serif",
    },
    size: {
      value: "",
      unit: "px",
    },
    weight: "",
    style: "initial",
    decoration: "initial",
    transform: "initial",
    lineHeight: {
      value: "",
      unit: "px",
    },
    letterSpacing: {
      value: "",
      unit: "px",
    },
    wordSpacing: {
      value: "",
      unit: "px",
    },
    onClickState: {
      isOpenEditor: false,
      isOpenFontFamuly: false,
      isOpenWeight: false,
      isOpenDecoration: false,
      isOpenTransform: false,
      isOpenStyle: false,
    },
  });

  return (
    <div className="App">
      <TypographyEditor propreties={propreties} setPropreties={setPropreties} />
      <Preview propreties={propreties} />
    </div>
  );
}

export default App;
