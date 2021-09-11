import React, { useState } from "react";

import Header from "./Header";
import Palette from "./Palette";
import Grid from "./Grid";
import ActionPanel from "./ActionPanel";

import { COLORS, buildCellList } from "../utils";

const App = () => {
  const [activeColor, setActiveColor] = useState(COLORS[1]);
  const [cellList, setCellList] = useState(buildCellList());

  return (
    <div className="app">
      <Header />

      <Palette activeColor={activeColor} setActiveColor={setActiveColor} />

      <Grid
        activeColor={activeColor}
        cellList={cellList}
        setCellList={setCellList}
      />

      <ActionPanel
        activeColor={activeColor}
        cellList={cellList}
        setCellList={setCellList}
      />
    </div>
  );
};

export default App;
