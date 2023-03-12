import Base from "./Base.js";
import Router from "./Router.js";

class ShadowVue {
  constructor(options) {
    const { el, data, template, components, routes } = options;
    // 传递 el、data、template 属性
    this.base = new Base({ el, data, template });
    // 传递 el、components、routes 属性
    this.router = new Router({ el, components, routes });
  }
}

export default ShadowVue;
