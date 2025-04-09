'use client';
import { NavBar,Footer } from "../Component/componentIndex";
import './Styles/globals.css'
import {ethers} from 'ethers'

import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
export default function RootLayout({ children }) {
  return (

    <div>
    
    <NFTMarketplaceProvider>
     <NavBar/>
      <main>{children}</main>

      <Footer/>
      </NFTMarketplaceProvider>
      </div>


  );
}
