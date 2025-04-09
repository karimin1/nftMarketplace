import React from 'react';
import Style from '../Styles/About.module.css'
import Image from 'next/image'
import images from '../../img'
import { Brand } from '../../Component/componentIndex';
const  About=()=> {
    const founderArray=[
        {name:"karim",
        position:'co-founder and cheif executive',
        image:images.founder1,
        },
        {name:"said",
        position:'techinicien',
        image:images.founder2,
        },
        {name:"hind",
        position:'ingineer',
        image:images.founder3,
        },
        {name:"leila",
        position:'worker',
        image:images.founder4,
        },
    ]
    const factsArray=[
        {title:'10 millie',
         info:'aaaaaaaaaaaaaaaaa' ,
        },
        {title:'100000 millie',
         info:'bbbbbbbbbbbbbbbbb' ,
        },
        {title:'+220',
        info:'cccccccccccccccccccccc' ,
        },
    ]
    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
            <div className={Style.aboutus_box_hero}>
            <div className={Style.aboutus_box_hero_left}>
            <h1>About Us.</h1>
            <p>About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.
            About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.
            About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.About Us.
            </p>
        </div>
        <div className={Style.aboutus_box_hero_right}>
        <Image src={images.nft_image_2} width={300} height={300}/>  
        </div>
        </div>
        <div className={Style.aboutus_box_title}>
        <h2> Founder</h2>
        <p> ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd
        ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsdddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd
        ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsdddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd
        ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsdddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd</p>
        </div>

        <div className={Style.aboutus_box_founder}>
        
        <h1>founders </h1>
        <div className={Style.aboutus_box_founder_box}>
        {founderArray.map((el,i)=>(
            <div key={i} className={Style.aboutus_box_founder_box_img}>
            <h3>{el.name}</h3>
                <Image src={el.image} 
                 alt={el.name} 
                    className={Style.aboutus_box_founder_box_img_img}
                    width='200px'  height='200px'
                />
                <p>{el.position}</p>
            </div>
        ))}
        </div>
        </div>

        <div className={Style.aboutus_box_title}>
        <h2> Fast Facts</h2>
        <p> ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd
        ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsdddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd
        ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsdddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd
        ddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsdddsfsdqffqsd qdsfqsdddfdsqf sdfqsdqdfsd</p>
        </div>

        <div className={Style.aboutus_box_facts}>
        <div className={Style.aboutus_box_facts_box}>
        {factsArray.map((el,i)=>(
            <div key={i} className={Style.aboutus_box_facts_box_info}>
            <h3>{el.title}  </h3>
            <p>{el.info}</p>
            </div>
        ))}
        </div>
        </div>
       
        </div>
        <Brand/>
      
        </div>
       
    );
}

export default About;