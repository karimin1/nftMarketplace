import React,{useState,useEffect,useContext} from 'react'
import Web3Modal from "web3modal"
import {ethers} from 'ethers'
import axios from 'axios'
import { Buffer } from 'buffer';
import { formatUnits, parseUnits } from 'ethers';
///import { useRouter } from 'next/router'
 // Replaces ethers.utils.formatUnits, ethers.utils.parseUnits
import { JsonRpcProvider } from 'ethers';
import { useRouter } from 'next/router';


//INTERNAL IMPORT
import { NFTMarketplaceAddress,nftMarketplaceABI } from './constants'
import account from '@/app/account/page'
//FETCHING SMART CONTRACT
//const client=ipfsHttpClient('https://infura-ipfs.io:5001/api/v0/add')
//import { create as ipfsHttpClient } from 'ipfs-http-client';

import { create } from 'ipfs-http-client';

const ipfs = create({ 
    url: 'https://ipfs.infura.io:5001/api/v0' });



// Upload to IPFS function

const fetchContract=(signerOrProvider)=>{
return new ethers.Contract(NFTMarketplaceAddress,nftMarketplaceABI,signerOrProvider)
}
const connectingWithSmartContract=async()=>{
    try{
        const web3Modal=new Web3Modal()
        console.log('web3Modal',web3Modal)
        const connection=await web3Modal.connect();
        console.log('connection',connection)
        const provider=new ethers.BrowserProvider(connection)
        console.log('provider',provider)
        const signer=provider.getSigner()
        console.log('signer',signer)
        const contract=fetchContract(signer)
        console.log('contract',contract)
        return contract
    }catch(error){
        setError('something is going wrong with your contract',error); setOpenError(true)
    }
}
export const NFTMarketplaceContext=React.createContext();


export const NFTMarketplaceProvider=({children})=>{
    const titleData='Discover,collect,and sell NFT';
const [error,setError]=useState("")
const [openError,setOpenError]=useState(false)
//--------USESTATE
const [currentAccount,setCurrentAccount]=useState('')

//CHECK IF THE WALLET IS CONNECTED

const checkifWalletConnected=async()=>{
    try{
 if(!window.ethereum) return (setOpenError(true),setError('install metamask'))

 const accounts=await window.ethereum.request({method:'eth_accounts'});
 if(accounts.length){
      setCurrentAccount(accounts[0])
 }else{
    setError('no account found'); setOpenError(true)
 setError(true)
 }
    } 
 catch(error){
    setError('something going wrong'); setOpenError(true)
 }
 

 }
 useEffect(()=>{
    setError('second one')
    checkifWalletConnected()
     },[])
 useEffect(()=>{
    setError('currentAccount',currentAccount);  setOpenError(true)
 },[currentAccount])
 //---CONNECT WALLET FUNCTION
const connectWallet=async()=>{
    try{
        if(!window.ethereum) return setOpenError(true), setError('install metamask')
            const accounts=await window.ethereum.request({
        method:'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
      // window.location.reload()
    }catch(error){
        setError('something is going wrong',error)
        setOpenError(true)
    }
}
//----CONNECT TO IPFS FUNCTION
 const uploadToIPFS = async (file) => {
    const client = create('http://localhost:5001');

    // Upload a file to your local IPFS node
    async function uploadToIPFS(file) {
        try {
            const added = await ipfs.add(file);
            const url = `https://ipfs.io/ipfs/${added.path}`;
            return url;
          } catch (error) {
            setOpenError(true)
             setError('Error uploading file to IPFS:', error);
            throw new Error('Unable to upload file to IPFS');
          }
      }
    }
      



//CREATE NFT FUNCTION
const createNFT=async(formInput,image,router)=>{
 
        const {name,description,price}=formInput;
        if(!name || !description || !price || !image) return setError('Data Is Missing');  setOpenError(true)
            const data=JSON.stringify({name,description,image})
        
        try {
            const added =await client.add(data)
            const url = `https://ipfs.io/ipfs/${added.path}`;
            router.push('/searchPage')

            await createSale(url,price)
        }catch(error){
            setError.log(error)
            setOpenError(true)
        }
}
//--- createSale FUNCTION
const createSale=async(url,formInputPrice,isReselling,id)=>{
try{
const price=parseUnits(formInputPrice,'ether')
const contract=await connectingWithSmartContract()
const listingPrice=await contract.getListingPrice();
const transaction=!isReselling?await contract.createToken(url,price,{
    value:listingPrice.toString()
}):await  contract.resellToken(url,price,{
    value:listingPrice.toString()
})
await transaction.wait()
}catch(error){
    setError('error while creating sale')
    setOpenError(true)
}
}
const fetchNFTs=async ()=>{
    try{
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

        const contract=fetchContract(provider)
        const data=await contract.fetchMarketItem()
        const items=await Promise.all(
            data.map(async({tokenId,seller,owner,price:unformattedPrice})=>{
                const tokenURI=await contract.tokenURI(tokenId);
                const {
                    data:{image,name,description},}=await axios.get(tokenURI);
                    const price=formatUnits(
                        unformattedPrice.toString(),"ether"
                    )
                        return{
                            price,
                            tokenId:tokenId.toNumber(),
                            seller,
                            owner,
                            image,
                            name,
                            description,
                            tokenURI
                        }
                  
                   }
           
            )
       
      
        ) 
        return items;
    }catch(error){
        setError("eror while fetching NFTS")
        setOpenError(true)
    }
}
useEffect(()=>{
    fetchNFTs()
},[])
//FETCHING MY NFT OR LISTED NFTs
const fetchMyNFTsOrListedNFTs=async(type)=>{
    try{
        const contract=await connectingWithSmartContract()
        const data=type=='fetchItemsListed'
        ?await contract.fetchItemsListed()
        :await contract.fetchMyNFT()
        const items=await Promise.all(
            data.map(async({tokenId,seller,owner,price:unformattedPrice})=>{
               const tokenURI=contract.tokenURI(tokenId)
                const {
                    data:{image,name,description},
                }=await axios.get(tokenURI)
            const price=formatUnits(unformattedPrice.toString(),'ether') 
                return{
                    price,
                    tokenId:tokenId.toNumber(),
                    seller,
                    owner,
                    image,
                    name,
                    description,
                    tokenURI,

                }
            })
        )
        return items
    }
    catch(error){
        setError('error while fetching listed NFTs'); setOpenError(true)
    }
}
useEffect(()=>{
    fetchMyNFTsOrListedNFTs()
},[])
//-----BUY NFTs FUNCTION
const buyNFT=async(nft)=>{
try{
    const contract=await connectingWithSmartContract();
    const price=await parseUnits(nft.price.toString(),"ether")
    const transaction=await contract.createMarketSale(nft.tokenId,{value:price})
    await transaction.wait()
    router.push('/author')
}
catch(error){
    setError('error while buying Nft')
    setOpenError(true)

}
}
    return(
        <NFTMarketplaceContext.Provider 
        value={{checkifWalletConnected,connectWallet,uploadToIPFS,titleData,
        createNFT,fetchNFTs,fetchMyNFTsOrListedNFTs,
        buyNFT,currentAccount,createSale,openError,error}}>
        {children}
        </NFTMarketplaceContext.Provider>
    )
}

