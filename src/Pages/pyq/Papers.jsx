import React from "react";
import "./Papers.css";
import paper from "../../Images/test-paper.png";

const Papers = ({ Sem, test, year}) => {
  function getPapers() {
    switch(year){
      case "First":{
        if (Sem === "odd") {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/file/d/1tiG7ldmBIvIyGXhTTCH8ElOqRlhRCIw2/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2021</span></div></a>
              <a href="https://drive.google.com/file/d/18cmMZh5Dan2DA1ixfAFvZMt7XyaZbTea/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1rMeAu3ZNDuE6o55pZuctSxWmNbbi6q7L?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/file/d/1RFB8rBnDAQvgR1D0xWbtS3tIgjeSEioe/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2021</span></div></a>
              <a href="https://drive.google.com/file/d/1BtXq-Fg0r2oLVn6jlTFYMR1GSILQEV0I/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/file/d/1LHF6R2WMZA_2w3cSxJ3PetCivNIBvKcz/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/file/d/1tRdnMncQmVL8zGFHTCjvpelHxU7mq5We/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2021</span></div></a>
              <a href="https://drive.google.com/drive/folders/1Y9-ucIT3UV8xnRNWotp310M8BvUMfyqF?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/13o4C4WKDjFcenSXkxswGCcqlu5wkK1iQ?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
            </div>;
            default:
              return <></>;
          }
        } else {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/file/d/1j1qWVC-Q1KAI2_GDLQZEUgpqBGtgFsWo/view?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1Zp1XkHBnDs6jyzfgZcHcZjrjpmZeV0Hc?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/14IyqL_-BSi3qj6Pbse9uMHmW5ARUODcW?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1doUw6bmv83vX_R5MSbEkYL65eG8vYtkd?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1EgY0kDNUOCG6Va_8DY88iGIfO9dyA9Ci?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1djs7uHY5TXnbckBGbJZslFSmrXGtuLUA?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1LijFByLxCu8C4-uIfylPkC0wUByhRIZX?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/14Dh7pORFGRJO_3p6ITLwSTRXhmZHqbci?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1W_NaIc-ltDzo84oTF1cuS919qG4CHEDu?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;;
            default:
              return <>
              </>;
          }
        }
      }
      
      case "Second":{
        if (Sem === "odd") {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1o57kDMqxhZO4HIFea0fcckyHQBHJdMlI?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2021</span></div></a>
              <a href="https://drive.google.com/drive/folders/1ccvzO7AQ3hk9LSDMOxpFahFWbMiQgEAd?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1GEmMlA-FNbiqVAb-CkaUKXe5Tqp85ver?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1c7R6WZGSJ9yIKEphLcKBoUOSui3DG6y6?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2021</span></div></a>
              <a href="https://drive.google.com/drive/folders/14Uqjan0zq4iJCBDprTDvgxCo8CwAN9_6?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1x35KfYPcZrNPcFAX-56y3AfLespXBh4y?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1AXUDdkI0NReeGAihdXFZwy5IlO8KbGsQ?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2021</span></div></a>
              <a href="https://drive.google.com/drive/folders/1Qq9YIcXpZMeXat7EW0shVuxkMu9EMT75?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1MXglPTqhhDKjUMNvzqRWiCbe3PZqftkr?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
            </div>;
            default:
              return <>
              </>;
          }
        } else {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1HT360HpQsrFPGxDsM6dqdku9njbdQXzb?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/19KMKt22ike5x2Aerr4Vj8nuAK5qFYUWH?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/15Nl7t9VFsS9UEIGnLZQ7q2A7Mre8Nfa7?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1VhcdXEF3bT8L2noxSdPN_1TOh9y5zCek?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1qOyZpS3OeK8Y2DCbsVYsT6ujIjVCWe88?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1KmdYMYFmLlIEpy-KNUYdYoo6dL_mf2wi?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1Mk6hge8pVhHvn41GUAXztatinxDUqRmi?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1WTbFv6IexvgxfZ6UNWlaQi7GoSbPP6b8?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1BbyBRzRL5XFYWgN9cFTX5SSIQFw_0yaS?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            default:
              return <>
              </>;
          }
        }
      }
      
      case "Third":{
        if (Sem === "odd") {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1pSwSGziqPSy0XKeXttl81OyvL2x6VnK0?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1q146MLlglUqN8Hd3KQuvfkuxZFZ84g4e?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1Yow6X0Up1trXwu1VmzwUGVzqGLPVtbUV?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1RAo-Om9wseMnKW0BaFZhdN2yHyKEhYki?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1ZxUTz06kyfMRV3CsxfvJx2pNADlI8wP9?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1U3LOWiMyfghQw_-QIfxfatvVL4dpJ-v1?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1leBX1Yn6kS-seA1YG1fkEQvatm9Oik3I?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1-E1adkdZkkDUMw75sXzNm41rjlFN0JO3?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1tI1OqaoGkaK4os8t93Rp-h6DJ36jD1qP?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            default:
              return <>
              </>;
          }
        } else {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/19M6U-k6hmHRVX-Xsls0PqcbbraEg7iGD?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/12t1UMPU53tQbBwcRiYwnrERl6XEsoO0D?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1Xuhbf1kKVyaRoD7Io1OmlNvoiDJKVYCN?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/14-DmhSSSbeqZ5VvMLziyU9SQU_QsRgDi?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1mlN2K_r1cSOOKzL6T9RMsznwTtS2bfXi?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/14PxQ7vfPdRFhvvrA_IQJUm1adNbNy8_w?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1H7ystAcewV_ArHSCuqSAKCqvPGCSxzNG?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1L545hQKYIEjU8MR0em7OdihxBq0sQapX?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1y2egPhNuD1nW9CBMJ39S96xvUytF8Y8t?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            default:
              return <>
              </>;
          }
        }
      }
      
      case "Fourth":{
        if (Sem === "odd") {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/16WvajQ6GxEvr3yAey6wyukQva-_fV2a8?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1fS7l1ED7atYEz__5dhyLYEpZMuGuFFC-?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1GP5E5ARu2v2jypgXn_XUA-G66Z9RdOb3?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1neghnKCzlj-jjLL0gecpXUe3JVgUeuxm?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/14Albd1irSSly-kaj16wzEKYrTLX01_KB?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1spXw8V4QB7igSxhoxbtsrU3TAYg1tCOB?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1fh61cLqZSEf2G5Syo_PhSmePO-Cs9jV4?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/12STWsWgbNclnhK6m6U6AYU1jfYOpvUFo?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/19v7_B3ZYcoTLgi6pmaaH1XBfPnh9vM1Z?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            default:
              return <>
              </>;
          }
        } else {
          switch (test) {
            case "T1":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1ydOlb-Tp54Q0t8nmpECTa2UCp3zQfB7b?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1-0XMPqmqMrxcwlYvHMEAP3TgTqvDyYbJ?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1KAxUf5krwNr9PmoQmVnY364lWn_Cgo-W?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T2":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1PvnzhjxT7W3yIaa8cE9XiCfHcQqVRYkJ?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1S-T8_lkCtRw3ezkh0qBgvHnLkA84sG2L?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1vH7zG6lH04v4-WXTM-4gXNS6yoiMT01O?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            case "T3":
              return <div className="paper-container">
              <a href="https://drive.google.com/drive/folders/1BzjkIw4x0MsgXgpDRqi4Yi0gpqL--wKF?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2022</span></div></a>
              <a href="https://drive.google.com/drive/folders/1kG6_h0DRxL_MiojUYC3_9u5aGEgpTE_3?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2023</span></div></a>
              <a href="https://drive.google.com/drive/folders/1APBFn1Lir1MAQMhZ28HOYLoAgDGGfSAS?usp=drive_link"><div className="paperbox"><img src={paper} alt="#"/><span>2024</span></div></a>
            </div>;
            default:
              return <>
              </>;
          }
        }
      }
      
      default:{
        return <>
              </>;
      }
    }
  }
  return <div>{getPapers()}</div>;
};

export default Papers;
