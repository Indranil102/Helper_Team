import React from "react";
import "./Papers.css";

const Papers = ({ Sem, test, year}) => {
  function getPapers() {
    switch(year){
      case "first":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paperbox" href="#">1paperoddt1</div>;
            case "t2":
              return <div className="paperbox">1paperoddt2</div>;
            case "t3":
              return <div className="paperbox">1paperoddt3</div>;
            default:
              return <div className="paperbox">1No test selected</div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paper-container"><div className="paperbox">1paperevent1</div>
              <div className="paperbox">1paperevent1</div>
              <div className="paperbox">1paperevent1</div>
              </div>;
            case "t2":
              return <div className="paper-container">
                <div className="paperbox">1paperevent2</div>
                <div className="paperbox">1paperevent2</div>
                <div className="paperbox">1paperevent2</div>
              </div>;
            case "t3":
              return <div className="paperbox">1paperevent3</div>;
            default:
              return <div className="paperbox">1No test selected</div>;
          }
        }
      }
      
      case "second":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paperbox">2paperoddt1</div>;
            case "t2":
              return <div className="paperbox">2paperoddt2</div>;
            case "t3":
              return <div className="paperbox">2paperoddt3</div>;
            default:
              return <div className="paperbox">2No test selected</div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paperbox">2paperevent1</div>;
            case "t2":
              return <div className="paperbox">2paperevent2</div>;
            case "t3":
              return <div className="paperbox">2paperevent3</div>;
            default:
              return <div className="paperbox">2No test selected</div>;
          }
        }
      }
      
      case "third":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paperbox">3paperoddt1</div>;
            case "t2":
              return <div className="paperbox">3paperoddt2</div>;
            case "t3":
              return <div className="paperbox">3paperoddt3</div>;
            default:
              return <div className="paperbox">3No test selected</div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paperbox">3paperevent1</div>;
            case "t2":
              return <div className="paperbox">3paperevent2</div>;
            case "t3":
              return <div className="paperbox">3paperevent3</div>;
            default:
              return <div className="paperbox">3No test selected</div>;
          }
        }
      }
      
      case "fourth":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paperbox">4paperoddt1</div>;
            case "t2":
              return <div className="paperbox">4paperoddt2</div>;
            case "t3":
              return <div className="paperbox">4paperoddt3</div>;
            default:
              return <div className="paperbox">4No test selected</div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paperbox">4paperevent1</div>;
            case "t2":
              return <div className="paperbox">4paperevent2</div>;
            case "t3":
              return <div className="paperbox">4paperevent3</div>;
            default:
              return <div className="paperbox">4No test selected</div>;
          }
        }
      }
      
      default:{
        return <></>
      }
    }
  }

  return <div>{getPapers()}</div>;
};

export default Papers;
