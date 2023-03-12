import { renderTemplate } from "../utils/index.js";

class Base {
  constructor(options) {
    // 绑定挂载的 DOM 元素
    this.el = document.querySelector(options.el);
    // 数据对象
    this.data = options.data;
    // 模板字符串
    this.template = options.template;
    // 初始化方法
    this.init();
  }

  init() {
    // 调用渲染方法
    this.render();
    // 监听数据变化
    this.observeData();
  }

  render() {
    // 使用 Shadow DOM 渲染元素，将一个新的 Shadow DOM 树附加到指定的 DOM 元素上，并返回该 Shadow DOM 的根节点
    this.el.attachShadow({ mode: "open" });
  }

  update() {
    // 创建模板
    const template = document.createElement("template");
    // 渲染模板
    template.innerHTML = renderTemplate(this.template, this.data);
    // 清空 shadow DOM 的内容
    this.el.shadowRoot.innerHTML = "";
    // 将渲染结果添加到 shadow DOM 中
    this.el.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  observeData() {
    this.data = new Proxy(this.data, {
      // 使用 Proxy 监听数据变化
      set: (target, key, value) => {
        target[key] = value; // 修改数据
        this.update(); // 触发更新
        return true;
      },
      get: (target, key) => {
        return target[key]; // 获取数据
      },
    });
  }
}

export default Base;
