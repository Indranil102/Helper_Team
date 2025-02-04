import React from 'react'
import './SelectDepartment.css'
import { RiComputerLine } from "react-icons/ri";
import { LuCircuitBoard } from "react-icons/lu";
import { IoIosConstruct } from "react-icons/io";
import { SlChemistry } from "react-icons/sl";
import { CiViewTimeline } from "react-icons/ci";
import { GiChemicalDrop } from "react-icons/gi";
import { LuBookA } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";
import { MdEngineering } from "react-icons/md";
import { BiMath } from "react-icons/bi";

const SelectDepartment = () => {
  return (
    <>
    <div><h2 style={{textAlign:'center',color:'#f8f7ff',paddingTop:'5px'}}>JUET SERVER</h2></div>
    <div className='mom'>
      <div className="select-year-fullscreen">
          
          <div className="contain">
          <a href="https://drive.google.com/drive/folders/1hv11I7bBKHNNyUlzfmD-JpOMmhJ0g0QF"><button className="box"  > <RiComputerLine />CSE</button></a> 
          <a href="https://drive.google.com/drive/folders/1HeXlS04ETkFbdHKPsdzN8Y_eLKyVfk-D?usp=drive_link"><button className="box"  ><LuCircuitBoard />
          ECE</button></a> 
          <a href="https://drive.google.com/drive/folders/1pVsuiayY0BN6SGg28zz1HNVqlEwY-RV_?usp=drive_link"><button className="box"  ><MdEngineering />
          CE</button></a> 
          <a href="https://drive.google.com/drive/folders/10CWI-bAk3obokvtyr6LFzFQQrCPOSjQd?usp=drive_link"><button className="box"  > <SlChemistry />
          CHE</button></a> 
            
          <a href="https://drive.google.com/drive/folders/1pVsuiayY0BN6SGg28zz1HNVqlEwY-RV_?usp=drive_link"><button className="box"  ><CiViewTimeline />
          TIME TABLE</button></a> 
            
          <a href="https://drive.google.com/drive/folders/1BRaWzweoHrZ-voC8nvtZuVVwPM9dEhlb"><button className="box"  ><GiChemicalDrop />
          CHEMISTRY</button></a> 
          <a href="https://drive.google.com/drive/folders/1Lfp_reM0VbHYfJvnXIz76JSxaTRgfmd5"><button className="box"  ><TiSocialFacebook />
          FMS</button></a> 
          <a href="https://drive.google.com/drive/folders/1HIbnYkhC3S_UDtp6OJ9MVjdphd9L9tp_"><button className="box"  ><LuBookA />
          HSS</button></a> 
          <a href="https://drive.google.com/drive/folders/14YtaGkPBz4PwydiBZiwEjfdJMFx_qXKD"><button className="box"  ><BiMath />
          MATH</button></a> 
          <a href="https://drive.google.com/drive/folders/1bIW93dieNlIUvbZ7MNYM_c7bper_ZxLo"><button className="box"  ><IoIosConstruct />
          MECH</button></a> 
          </div>
        </div>
    </div>
    </>
  )
}

export default SelectDepartment
