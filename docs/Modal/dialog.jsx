import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";

/* 控制弹窗隐藏以及动画效果 */
const controlShow = (f1, f2, value, timer) => {
  f1(value);
  return setTimeout(() => {
    f2(value);
  }, timer);
};

export default function Dialog(props) {
  const { width, visible, closeCb, onClose } = props;
  /* 控制 modelShow 动画效果 */
  const [modelShow, setModelShow] = useState(visible);
  const [modelShowAync, setModelShowAync] = useState(visible);
  const renderChildren = useMemo(() => {
    /* 把元素渲染到组件之外的 document.body 上  */
    return ReactDOM.createPortal(
      <div style={{ display: modelShow ? "block" : "none" }}>
        <div
          className="model_container"
          style={{ opacity: modelShowAync ? 1 : 0 }}
        >
          <div className="model_wrap">
            <div style={{ width: width + "px" }}> {props.children} </div>
          </div>
        </div>
        <div
          className="model_container mast"
          onClick={() => onClose && onClose()}
          style={{ opacity: modelShowAync ? 0.6 : 0 }}
        />
      </div>,
      document.body
    );
  }, [modelShowAync, modelShow]);

  useEffect(() => {
    let timer;
    if (visible) {
        // * 动画效果
      /* 打开弹窗，需要先让 */
      timer = controlShow(setModelShow, setModelShowAync, visible, 30);
    } else {
      timer = controlShow(setModelShowAync, setModelShow, visible, 1000);
    }
    return function () {
      timer && clearTimeout(timer);
    };
  }, [visible]);

  /* 执行关闭弹窗后的回调函数 closeCb */
  useEffect(() => {
    !modelShow && typeof closeCb === "function" && closeCb();
  }, [modelShow]);

  return renderChildren;
}
