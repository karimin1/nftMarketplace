//INTERNAL IMPORT
'use client';
import Style from "./Discover.module.css"
import Link from "next/link";
const Discover=()=>{
    //-----DISCOVER NAVIGATION MENU
    const discover=[
    {
        name:"Collectionxxx",
        link:"collection",
    },
    {
        name:"Search",
        link:"search",
    },
    {
        name:"Author Profile",
        link:"author",
    },
    {
        name:"NFT Details",
        link:"NFT-details",
    },
    {
        name:"Account Setting",
        link:"account-setting",
    },
    {
        name:"Connect Wallet",
        link:"Connect Wallet",
    },
    {
        name:" Blog",
        link:" blog", 
    },
    ];
    return (
    <div>
    {discover.map((el,i)=>(
        <div key={i+1} className={Style.discover}>
        <Link href={{pathname:`${el.link}`}}> {el.name}</Link>
        </div>
    ))}
    </div>
    )
};
export default Discover;