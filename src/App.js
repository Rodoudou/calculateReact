import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  //creation du state
  const [cunter, setCunter] = useState(0);

  return (
    <div className="App">
      <Header />
      <Content
        value={cunter}
        plus={setCunter}
        moins={setCunter}
        refresh={setCunter}
      />
    </div>
  );
}

export default App;
