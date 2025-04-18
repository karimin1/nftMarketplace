//INTERNAL IMPORT
'use client';
import Style from "./Discover.module.css"
import Link from "next/link";
const Discover=()=>{
    //-----DISCOVER NAVIGATION MENU
    const discover=[
    {
        name:"Collection",
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
        link:"nftdetails",
    },
    {
        name:"Account Setting",
        link:"account",
    },
    {
        name:"uploadNFT",
        link:"upload_NFT",
    },
    {
        name:"Connect Wallet",
        link:"connectWallet",
    },

    {
        name:" Contact us",
        link:" contactus", 
    },
    {
        name:" About",
        link:" about", 
    },
    {
        name:" Subscription",
        link:" subscription", 
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