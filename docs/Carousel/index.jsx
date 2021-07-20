import React, {useState, useEffect, useRef } from "react";
import "./index.less";


let timer = null;

const Carousel = () => {
    const [color, setColor] = useState('blue');
    const [img, setImg] = useState(["red", "yellow", "blue"]);
    const imgIndex = useRef(0)

    const startTime = () => {
        console.log('kaiqi');
        timer = setTimeout(() => {
            imgIndex.current = imgIndex.current > img.length - 1 ? 0 : imgIndex.current ++
            setColor(img[imgIndex.current++]); 
        }, 3000);
    }

    useEffect(() => {
        startTime();
        return () =>{
            console.log('guanbi');
            clearTimeout(timer)
        }
    }, [color]);

const hanleCircle = (item, index) =>{
    setColor(item);
    imgIndex.current = index;
}

const handleMouseMove = () => {
    clearTimeout(timer);
console.log('jinru guanbi');
}

const handleMouseLeave = () =>{
    startTime();
}

  return (
    <ul onMouseEnter={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {img.map((item) => (
        <li  style={{ background: color }} key={item}>
          <a href="#"></a>
        </li>
      ))}
      <div className="circle">
        {img.map((item, index) => (
          <a className={`a ${item === color ? 'cur' : ''}`} href="#" key={item}  onClick={() => hanleCircle(item, index)}></a>
        ))}
      </div>
    </ul>
  );
};

export default Carousel;


import React, {useRef, useEffect, useState } from "react";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import './index.less'

const scrollArr = [img0, img1, img2, img3, img4];
const Scroll = () => {
    const [left, setLeft] = useState(0);
    const [ind, setInd] = useState(0);
    const imgRef = useRef(null);
    const scrollWarp = useRef(null);
    useEffect(() => {
        
        setLeft()
        console.log(scrollWarp.current?.scrollWidth/scrollArr.length);
        return () => {
            
        }
    }, [scrollWarp, imgRef])

  return <div className="scroll-wrap">
      <div className="scroll-left" ref={scrollWarp} >
         <div className="ul" style={{left: `${(-scrollWarp.current?.offsetWidth) * (ind >= scrollArr.length ? 0 : ind)}px`}} >
         {
              scrollArr.map(item => {
                  return <img key={item} src={item} key={item} />
              })
          }
        <img ref={imgRef} src={scrollArr[0]} />
         </div>
        <div style={{position: 'absolute'}}>
        {
            scrollArr.map((item, index) => {
                return <div key={item} onClick={() => {
                    setInd(index)
                }}>{item}</div>
            })
        }
        </div>
      </div>
      <div className="scroll-right">

      </div>
  </div>;
};

export default Scroll;

