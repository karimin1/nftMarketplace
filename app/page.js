'use client';
//INTERNAL IMPORT
import "./globals.css"
import {NavBar,Footer} from "../Component/componentIndex";
const MyApp=({component ,pageProps})=>{
    return(
    <div>
    <NavBar/>
     <component  {...pageProps}/>
     Home
     <Footer/>  
    </div>
    );
};
export default MyApp;