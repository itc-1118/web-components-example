 class Link extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute("href");
    const title = this.getAttribute("title");
    this.innerHTML = `<a href="#${href}">${title}</a>`;
    this.style.marginRight = "20px";
    this.style.fontSize = "24px";
    this.style.fontWeight = "bold";
    this.style.color = "blue";
    this.style.textDecoration = "none";
    this.style.transition = "all 0.3s ease";
    this.style.cursor = "pointer";
    this.addEventListener("mouseover", () => {
      this.style.color = "red";
    });
    this.addEventListener("mouseout", () => {
      this.style.color = "blue";
    });
  }
}

export default Link
