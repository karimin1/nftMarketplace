'use client';
import { NavBar,Footer } from "../Component/componentIndex";
import './Styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
     <NavBar/>
      <main>{children}</main>
      <Footer/> 
      </body>
    </html>
  );
}
