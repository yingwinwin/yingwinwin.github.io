import React, {useRef, useEffect, useState  } from "react";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import "./index.less";

const scrollArr = [img0, img1, img2, img3, img4];
const Carousel = () => {
  const srcollRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [animition, setAnimition] = useState(1);
  const [ind, setInd] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    setWidth(srcollRef.current.offsetWidth)
  }, [srcollRef.current]);

  useEffect(() => {
    timer.current = setTimeout(() =>{
      setInd(ind + 1);
    }, 3000);
    setAnimition(1);
    return () => {
      clearTimeout(timer.current)
    }
  }, [ind]);

  const handleAnimition = () => {
    if (ind >= scrollArr.length) {
      setInd(0);
      setAnimition(0);
    }
  }

  return (
    <div className="box-wrap">
      <main ref={srcollRef}>
        <div className="srcoll-wrap" onTransitionEnd={handleAnimition} style={{
          transition: `transform ${animition}s`,
          transform: `translateX(${-width * ind}px)`
        }} >
          {scrollArr.map((item) => (
            <img src={item} key={item} width={width} />
          ))}
          <img src={scrollArr[0]} width={width} />
        </div>
      </main>
      <aside></aside>
    </div>
  );
};

export default Carousel;
