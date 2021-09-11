import React from "react";
import Cell from "./Cell";

const Grid = ({ activeColor, cellList, setCellList }) => {
  return (
    <div className="grid">
      {cellList.map((cell, index) => (
        <Cell
          key={`grid-${index}`}
          color={cell.color}
          handleClick={() => {
            const newCellList = [...cellList];
            newCellList[index].color = activeColor;
            setCellList(newCellList);
          }}
        />
      ))}
    </div>
  );
};

export default Grid;
