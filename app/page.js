'use client';
//INTERNAL IMPORT
import "./globals.css"
import {NavBar} from "../Component/componentIndex";
const MyApp=({component ,pageProps})=>{
    return(
    <div>
    <NavBar/>
     <component  {...pageProps}/>
     Home
    </div>
    );
};
export default MyApp;