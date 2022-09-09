import React from "react";
import noPostCard from "../assets/img/no-post-image.png"
import Image from 'react-async-image';
import * as Icons from 'react-icons/fa';
import {AiOutlineHeart , AiOutlineShareAlt, AiOutlineEye} from 'react-icons/ai';
import {FiMessageSquare} from 'react-icons/fi'
let Linky = require("react-linky/dist/index.js")


const StatusColors = ["#F7BF38", "#3AC183", "#67B1F2", "#ACACAC", "#FB6450"]


const Card = (props:any)=>{
    let cardList = props.cardList


    function Icon(name: string){
        switch(name){
            case "twitter":
                return <Icons.FaTwitter color="white" size={20}/>
            case "instagrambusiness":
                return <Icons.FaInstagram color="white" size={20}/>
            case "facebook":
                return <Icons.FaFacebook color="white" size={20}/>
    
        }
    }
    
    return(
        <>{cardList? Object.keys(cardList).map((date) => {
            let dateParts:any = date.split("-")
            console.log(dateParts)
            return (
            <div>
                <div className="dateStyle">{dateParts[2] + " " + new Date(1,Number(dateParts[1]),1).toLocaleString('en-us', { month: 'long' }) + " " + dateParts[0]}</div>
                <div className="flex flex-nowrap overflow-scroll my-margin-15px">
                    {cardList[date].map((card:any)=>{
                        const timePart = card.published_at.split(" ")[1].split(":")
                        const time = timePart[0] +":" + timePart[1]
                        return(
                            <div className="flex-none w-1/3 my-padding-15px" >
                                <div className=" post-box flex">
                                <div className="status-box flex-none flex justify-center items-center" style={{background: StatusColors[card.status]}}>{Icon(card.account.channel)}</div>
                                <div className="img-box">
                                    <div className="innerDate">{dateParts[2] + " " + new Date(1,Number(dateParts[1]),1).toLocaleString('en-us', { month: 'long' }) + " " + dateParts[0] + " - " + time }</div>
                                    <div className="textStyle"><Linky className="links ">{card.entry.message}</Linky></div>
                                    <div className="flex flex-col justify-between" style={{flex: 1}}>
                                        <Image src={card.entry.image[0]} placeholder={<img src={noPostCard} alt="" />} alt=""/>
                                        <div className="flex items-center gap-2 my-info-box">
                                            <AiOutlineHeart size={20} color="#707070"/>
                                            <span>0</span>
                                            <FiMessageSquare size={17} color="#707070"/>
                                            <span>0</span>
                                            <AiOutlineShareAlt size={20} color="#707070"/>
                                            <span>0</span>
                                            <AiOutlineEye size={20} color="#707070"/>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            )
    }): null}
    </>
    )
}

export default Card