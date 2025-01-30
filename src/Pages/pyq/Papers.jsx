import React from "react";
import "./Papers.css";

const Papers = ({ Sem, test }) => {
  function getPapers() {
    if (Sem === "odd") {
      switch (test) {
        case "t1":
          return <div className="paperbox">paperoddt1</div>;
        case "t2":
          return <div className="paperbox">paperoddt2</div>;
        case "t3":
          return <div className="paperbox">paperoddt3</div>;
        default:
          return <div className="paperbox">No test selected</div>;
      }
    } else {
      switch (test) {
        case "t1":
          return <div className="paperbox">paperevent1</div>;
        case "t2":
          return <div className="paperbox">paperevent2</div>;
        case "t3":
          return <div className="paperbox">paperevent3</div>;
        default:
          return <div className="paperbox">No test selected</div>;
      }
    }
  }

  return <div>{getPapers()}</div>;
};

export default Papers;
