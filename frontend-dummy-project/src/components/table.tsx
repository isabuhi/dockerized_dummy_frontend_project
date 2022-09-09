import React, {useState, useEffect} from "react";
import {  useAppSelector } from "../app/hooks";
import Card from "./card";

const  Table = (props: any)=>{

    const[cardList, setCardList] = useState<any>()
    const[width, setWidth] = useState<any>(props.refx.current?.style.width)
    let data = useAppSelector((state)=> state.Data)
    
    useEffect(()=>{
        setCardList(data.data)
    }, [data])

    useEffect(()=>{setWidth(window.getComputedStyle(props.refx.current).getPropertyValue("width"))}, [props.refx.current])
    
    console.log(width)
    return(
        <div className="tableStyle" style = {{marginLeft: width}}>
            <div className="flex items-center statusTable">
                <div className="my-dot published"></div>
                <span>Published</span>
                <div className="my-dot scheduled"></div>
                <span>Scheduled</span>
                <div className="my-dot needApproval"></div>
                <span>Need Approval</span>
                <div className="my-dot error"></div>
                <span>Error</span>
                <div className="my-dot notes"></div>
                <span>Notes</span>
            </div>
            <Card cardList ={cardList}/>
        </div>
    )
}

export default Table