import "./styles.css";
import React, { useState } from "react";
import Fields from "./components/Fields";
import Languages from "./components/Languages";
import Translate from "./components/Translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Fields label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
