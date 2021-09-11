import React, { useState, useEffect } from "react";
import Dialog from "./dialog.jsx";
import ReactDOM from "react-dom";

class Modal extends React.PureComponent {
  /* 渲染底部按钮 */
  renderFooter = () => {
    const { onOk, onCancel, cancelText, okText, footer } = this.props;
    /* 触发 onOk / onCancel 回调  */
    if (footer && React.isValidElement(footer)) return footer; // 如果传入了footer 且footer是一个react组件
    return (
      <div className="model_bottom">
        <div className="model_btn_box">
          <button
            className="searchbtn"
            onClick={(e) => {
              onOk && onOk(e);
            }}
          >
            {okText || "确定"}
          </button>
          <button
            className="concellbtn"
            onClick={(e) => {
              onCancel && onCancel(e);
            }}
          >
            {cancelText || "取消"}
          </button>
        </div>
      </div>
    );
  };

  /* 渲染顶部 */
  renderTop = () => {
    const { title, onClose } = this.props;
    return (
      <div className="model_top">
        <p>{title}</p>
        <span className="model_top_close" onClick={() => onClose && onClose()}>
          x
        </span>
      </div>
    );
  };

  /* 渲染弹窗内容 */
  renderContent = () => {
    const { content, children } = this.props;
    return React.isValidElement(content) ? content : children ? children : null;
  };

  render() {
    const { visible, width = 500, closeCb, onClose } = this.props;
    return (
      <Dialog
        closeCb={closeCb}
        onClose={onClose}
        visible={visible}
        width={width}
      >
        {this.renderTop()}
        {this.renderContent()}
        {this.renderFooter()}
      </Dialog>
    );
  }
}

let ModalContainer = null;
const modelSysbol = Symbol("$$__model__Container_hidden");

/* 静态属性show——控制 */
Modal.show = function (config) {
  /* 如果modal已经存在了，那么就不需要第二次show */
  if (ModalContainer) return;
  const props = { ...config, visible: true };  // 默认打开
  const container = (ModalContainer = document.createElement("div"));
  /* 创建一个管理者，管理moal状态 */
  const manager = (container[modelSysbol] = {
    setShow: null,
    mounted: false,
    hidden() {
      const { setShow } = manager;
      setShow && setShow(false);
    },
    destory() {
      /* 卸载组件 */
      ReactDOM.unmountComponentAtNode(container);
      /* 移除节点 */
      document.body.removeChild(container);
      /* 置空元素 */
      ModalContainer = null;
    },
  });
  const ModelApp = (props) => {
    const [show, setShow] = useState(false);
    manager.setShow = setShow;  // 建立联系
    const { visible, ...trueProps } = props;
    useEffect(() => {
      /* 加载完成，设置状态 */
      manager.mounted = true;
      setShow(visible);
    }, []);
    return (
      <Modal
        {...trueProps}
        closeCb={() => manager.mounted && manager.destory()}
        visible={show}
      />
    );
  };
  /* 插入到body中 */
  document.body.appendChild(container);
  /* 渲染React元素 */
  ReactDOM.render(<ModelApp {...props} />, container);
  return manager;
};

/* 静态属性——hidden控制隐藏 */
Modal.hidden = function () {
  if (!ModalContainer) return;
  /* 如果存在 ModalContainer 那么隐藏 ModalContainer  */
  ModalContainer[modelSysbol] && ModalContainer[modelSysbol].hidden();
};

// ReactDOM.createPortal
export default Modal;
