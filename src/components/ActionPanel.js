import React from "react";

import { buildCellList } from "../utils";

const ActionPanel = ({ activeColor, cellList, setCellList }) => {
  return (
    <div className="action-panel">
      <button
        onClick={() => {
          const newCellList = buildCellList();
          setCellList(newCellList);
        }}
      >
        clear all
      </button>

      <button
        onClick={() => {
          const newCellList = buildCellList();
          newCellList.forEach((cell) => {
            cell.color = activeColor;
          });
          setCellList(newCellList);
        }}
      >
        fill all
      </button>

      <button
        onClick={() => {
          const newCellList = buildCellList();
          cellList.forEach((cell, index) => {
            newCellList[index].color = cell.color ? cell.color : activeColor;
          });

          setCellList(newCellList);
        }}
      >
        fill empty
      </button>
    </div>
  );
};

export default ActionPanel;
