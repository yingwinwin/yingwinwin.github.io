import React, {useRef, useEffect, useState  } from "react";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import "./index.less";

const scrollArr = [img0, img1, img2, img3, img4];
const Carousel = () => {
  const [ind, setInd] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() =>{
      setInd(ind >= scrollArr.length - 1 ? 0 : ind + 1);
    }, 3000);
    return () => {
      clearTimeout(timer.current)
    }
  }, [ind]);

  return (
    <div className="box-wrap">
      <main >
        {
          scrollArr.map((item, index) => {
            return <img className={`${index === ind ? 'cur' : ''}`} src={item} />
          })
        }
      </main>
      <aside></aside>
    </div>
  );
};

export default Carousel;
