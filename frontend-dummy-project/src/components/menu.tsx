import React, {useRef} from "react";
import Group from "./group";
import Listen from "../../src/assets/img/icons/Icon-1.svg"
import Message from "../../src/assets/img/icons/Icon4.svg"
import Report from "../../src/assets/img/icons/Icon5.svg"
import Summary from "../../src/assets/img/icons/Icon2.svg"
import Publish from "../../src/assets/img/icons/Icon3.svg"
import Notification from "../../src/assets/img/icons/Icon1.svg"

type menuData ={
    icon: string,
    list: string[] | [],
    title: string
}


const menuData: menuData[] = [
    {
        icon: Notification,
        list: [],
        title: "NOTIFICATIONS"
    },
    {
        icon: Summary,
        list: [],
        title: "SUMMARY"
    },
    {
        icon: Publish,
        list: ["Compose","Feed"],
        title: "PUBLISH"
    },
    
    {
    icon: Message,
    list: [],
    title: "ENGAGE"
    },
    {
        icon: Listen,
        list: [],
        title: "LISTEN"
    },
    {
    icon: Report,
    list: [],
    title: "REPORT"
    },
    
    
    
    
]


const Menu = ()=>{
    const list = useRef([])
    return (
        <div className="w_76">
            { menuData.map((item, i)=>{
                return <Group key={i} refx={{ref: list, index: i}} iconUrl={item.icon} list={item.list} title={item.title}/>
            })}
        </div>
    )
}


export default Menu