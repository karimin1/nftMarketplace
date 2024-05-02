'use client';
//INTERNAL IMPORT
import "./globals.css"
import Home from "./index";
import {NavBar,Footer} from "../Component/componentIndex";
const MyApp=({component ,pageProps})=>{
    return(
    <div>
    <NavBar/>
     <component  {...pageProps}/>
      <Home/>  
     <Footer/>  
    </div>
    );
};
export default MyApp;