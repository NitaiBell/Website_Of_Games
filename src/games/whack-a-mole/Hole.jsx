import React from "react";

const Hole = ({ index, active, onClick }) => {
  return (
    <div className="hole" onClick={() => onClick(index)}>
      {active ? "👷" : ""}
    </div>
  );
};

export default Hole;

