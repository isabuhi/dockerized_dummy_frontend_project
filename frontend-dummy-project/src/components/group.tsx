import React, {useState} from "react";
import SeeLess from "../assets/img/icons/SeeLess.svg"
import SeeMore from "../assets/img/icons/SeeMore.svg"

type props = {
    list : string[],
    title: string,
    iconUrl: any,
    refx: any
}

const Group = (props: props)=>{
    const {ref, index} = props.refx
    const [toggle, setToggle ] = useState<boolean>(false)
    
    

    function handleClick(){
        setToggle(!toggle)
        ref.current.map((e:any, i:number) => {
            if(index !== i){ e(false)}
    })
    }
    return (

        <div ref={()=>ref.current[index] = setToggle} className="my-group-box">
            <div className="my-title-box flex flex-row items-center text-white justify-between" onClick={handleClick} style={{background: toggle?"#F55661": "unset"}}>
                <div className="flex flex-row items-center gap-2">
                    <img src={props.iconUrl} alt=""/>
                    {props.title}
                </div>
                {props.title !== "NOTIFICATIONS"?<img src={toggle? SeeLess: SeeMore} alt=""/>:<div className="notify-box" >96</div>}
            </div>
            {toggle && props.list.length?<ul className="list-inside list-disc my-list-box" >
                {props.list.map((i, index)=>{
                return <li key={index} className="text-white">{!index?<div className="my-list-box-arrow "></div>:null}{i}</li>
            })}</ul>: null}
        </div>
    )
}

export default Group