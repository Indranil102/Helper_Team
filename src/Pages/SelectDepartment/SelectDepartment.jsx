import React from 'react'
import './SelectDepartment.css'
import { RiComputerLine } from "react-icons/ri";
import { LuCircuitBoard } from "react-icons/lu";
import { IoIosConstruct } from "react-icons/io";
import { SlChemistry } from "react-icons/sl";
import { CiViewTimeline } from "react-icons/ci";


const SelectDepartment = () => {
  return (
    <div className='mom'>
      <div className="select-year-fullscreen">
          
          <div className="contain">
          <a href="https://drive.google.com/drive/folders/1Ve3D7nfETE1Z-Ex5iLa6Uywi6QDuLhgc?usp=drive_link"><button className="box"  > <RiComputerLine />CSE</button></a> 
          <a href="https://drive.google.com/drive/folders/1HeXlS04ETkFbdHKPsdzN8Y_eLKyVfk-D?usp=drive_link"><button className="box"  ><LuCircuitBoard />
          ECE</button></a> 
          <a href="https://drive.google.com/drive/folders/1pVsuiayY0BN6SGg28zz1HNVqlEwY-RV_?usp=drive_link"><button className="box"  ><IoIosConstruct />
          CE</button></a> 
          <a href="https://drive.google.com/drive/folders/10CWI-bAk3obokvtyr6LFzFQQrCPOSjQd?usp=drive_link"><button className="box"  > <SlChemistry />
          CHE</button></a> 
            
          <a href="https://drive.google.com/drive/folders/1pVsuiayY0BN6SGg28zz1HNVqlEwY-RV_?usp=drive_link"><button className="box"  ><CiViewTimeline />
          TIME TABLE</button></a> 
            
          </div>
        </div>
    </div>
  )
}

export default SelectDepartment
