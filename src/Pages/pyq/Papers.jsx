import React from "react";
import "./Papers.css";
import paper from "../../Images/test-paper.png";

const Papers = ({ Sem, test, year}) => {
  function getPapers() {
    switch(year){
      case "first":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
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
                <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
                <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
                <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
          }
        }
      }
      
      case "second":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
              <div className="paperbox"><img src={paper} alt="#"/><span>1paperevent2</span></div>
            </div>;
          }
        }
      }
      
      case "third":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
          }
        }
      }
      
      case "fourth":{
        if (Sem === "odd") {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
          }
        } else {
          switch (test) {
            case "t1":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t2":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            case "t3":
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
            default:
              return <div className="paper-container">
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
              <div className="paperbox"><image src={paper}/><span>1paperevent2</span></div>
            </div>;
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
