import {renderTemplate} from '../../utils/index.js'
class About extends HTMLElement {
    connectedCallback() {
      const data = {
        title: "About",
        content: "This is the about page.",
      };
      this.innerHTML = renderTemplate(this.template, data);
    }

    get template() {
      return `
      <style>
          :host {
            display: block;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          }

          :host h1 {
            font-size: 36px;
            margin-bottom: 10px;
          }

          :host p {
            font-size: 24px;
            line-height: 1.5;
            margin-bottom: 20px;
          }

          :host my-link {
            display: inline-block;
            margin-right: 20px;
          }
        </style>
        <div>
            <div>
                <my-link href="/" title="Home"></my-link>
                <my-link href="/about" title="About"></my-link>
            </div>
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
            
        </div>`;
    }
  }

  export default About
