import React from "react";

export default React.memo(
  function Count({ id, value }) {
    return (
      <div>
        <h1>{value}</h1>
      </div>
    );
  },
  (prefValue, nextValue) => {
    if (prefValue !== nextValue) return false;
    else return true;
  }
);
