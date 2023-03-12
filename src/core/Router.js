
class Router {
  constructor(options) {
    this.el = document.querySelector(options.el); // 通过传入的选项对象获取需要挂载的 DOM 元素
    this.components = options.components; // 传入的组件对象，用于注册组件
    this.routes = options.routes; // 传入的路由规则

    this.init(); // 初始化注册组件和路由规则
  }

  init() {
    this.registerComponents(); // 注册组件
    this.registerRoutes(); // 注册路由规则
  }

  // 注册组件
  registerComponents() {
    Object.keys(this.components).forEach((name) => {
      customElements.define(name, this.components[name]);
    });
  }

  // 注册路由规则
  registerRoutes() {
    // 监听 hashchange 事件
    window.addEventListener("hashchange", () => {
      const currentHash = window.location.hash.slice(1);
      const route = this.routes[currentHash];
      if (route) {
        const tag = route.tag;
        const component = document.createElement(tag);
        this.el.shadowRoot.innerHTML = "";
        this.el.shadowRoot.appendChild(component);
      }
    });

    // 初始默认路由
    Object.keys(this.routes).forEach((route) => {
      if (route === "/") {
        window.location.hash = "/";
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    });
  }
}

export default Router;
