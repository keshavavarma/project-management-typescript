import React from "react";

import "./App.css";
import CenterPannel from "./layout/centerPannel/CenterPannel";
import LeftPannel from "./layout/leftPannel/LeftPannel";
import RightPannel from "./layout/rightPannel/RightPannel";

function App() {
  return (
    <main className="App">
      <LeftPannel />
      <CenterPannel />
      <RightPannel />
    </main>
  );
}

export default App;
