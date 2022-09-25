class Footer extends HTMLElement {
  connectedCallback() {
    this.text = this.getAttribute("text") || null;
    this.render();
  }

  render() {
    this.innerHTML = `<footer class="text-center p-3 border-top">
    ${this.text}
  </footer>`;
  }
}

customElements.define("footer-element", Footer);
