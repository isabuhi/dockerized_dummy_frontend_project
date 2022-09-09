import React, {useRef, useEffect} from "react";

import logo from "../assets/img/Sociality-logo.png";

import Tabs from "./tabs";
import Menu from "./menu";




const SideBar = (props: any)=>{
    
    return (
       <div ref={props.refx} className="sideBarStyle flex-col flex select-none fixed">
            <div className="brandBox ">
                <img src={logo} alt="logo" style={{height: "28px"}}/>
            </div>
            <div className="flex-row flex overflow-y-scroll h-full">
                <Tabs/>
                <Menu/>
            </div>
       </div>

    )
}

export default SideBar