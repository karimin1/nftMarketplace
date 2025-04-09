'use client';
import React, { useContext } from 'react';
import Style from '../Styles/Upload_NFT.module.css'
import { UploadNFT } from '../../uploadNFTs/UploadNFTIndex';
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';
const Upload_NFT=()=> {
    const {uploadToIPFS,createNFT}=useContext(NFTMarketplaceContext);
    console.log('first uploadToIPFS_Upload_NFT:', uploadToIPFS); 

    return (
        <div className={Style.Upload_NFT}>
           <div className={Style.UploadNFT_box}>
            <div className={Style.UploadNFT_box_heading}>
            <h1>Create New NFT</h1>
            <p>You can set peefsv fjfs sdjfbsd hdbjhfdldqbqsf
            hdsflhdf hbsfdhbsqd hbdfhsld
            bhkjsdsbhksdf hsdvfkb  hsdvfksd</p>
            </div>
            <div className={Style.UploadNFT_box_title}>
            <h2>Image , Video, Audio or 3D Model</h2>
            <p>dqdqdqsdqsqsqsd</p>
            </div>
            <div className={Style.uploadNFT_box_form}>
            </div>
             <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT}/>  
            </div> 
        </div>
    );
}

export default Upload_NFT;