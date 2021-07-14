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
