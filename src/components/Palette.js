import React from "react";
import Cell from "./Cell";

import { COLORS } from "../utils";

const Palette = ({ activeColor, setActiveColor }) => {
  return (
    <div className="palette">
      {COLORS.map((color, index) => (
        <Cell
          key={`palette-${index}`}
          color={color}
          isActive={activeColor === color}
          handleClick={() => setActiveColor(color)}
        />
      ))}
    </div>
  );
};

export default Palette;
