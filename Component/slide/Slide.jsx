import {react,useState,useEffect, useRef  } from 'react'
import {motion} from 'framer-motion'
import { TiArrowLeftThick,TiArrowRightThick } from 'react-icons/ti';
import Style from './Slide.module.css'
import SliderCard from './SliderCard'
const  Slide=()=> {
    const sliderArray=[1,2,3,4,5,6]
    const [Width,setWidth]=useState(0);
    const dragSlider=useRef();
    useEffect(()=>{
        setWidth(dragSlider.current.scrollWidth-dragSlider.current.offsetWidth);
    },[])
    const handleScroll=(direction)=>{
        const {current}=dragSlider;
        const scrollAmount=window.innerWidth>1000?270:210;
        if(direction=='left'){
            current.scrollLeft-=scrollAmount;
        }else{
            current.scrollLeft+=scrollAmount;
        }
    }
    return (
        <div className={Style.slider}>
                <div className={Style.slider_box_button}>
                <p>click on play icon &enjoy Nfts video</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn}>
                            <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll('left')}>
                            <TiArrowLeftThick />
                            </div>
                            <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll('right')}>
                            <TiArrowRightThick />
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div className={Style.slider_box_items} ref={dragSlider}>
            <motion.div  ref={dragSlider} className={Style.slider_box_item}
            drag="x" dragConstraints={{right:0,left:-Width}}
            >{sliderArray.map((el,i)=>(
                <SliderCard key={i+1} el={el} i={i}/>
            ))}
            </motion.div>
                 </motion.div>

            </div>
    
    );
}

export default Slide;