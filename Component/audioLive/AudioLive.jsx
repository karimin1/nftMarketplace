// @flow 
'use client';
import  React from 'react';
import Style from './AudioLive.module.css'
import AudioCard from './AudioCard';
import AudioCardSmall from './AudioCardSmall';

 const AudioLive = () => {
    return (
        <div className={Style.AudioLive}>
          <div className={Style.AudioLive_box}>
            <div className={Style.AudioLive_box_left}>
            <AudioCard/>
            <AudioCard/>
            </div>
            <div className={Style.AudioLive_box_right}>
            <AudioCardSmall/>
            <AudioCardSmall/>
          </div>  
        </div>
        </div>
    );
};
export default AudioLive;