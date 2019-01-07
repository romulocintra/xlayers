export const wcTemplate = (ast: string, style: string) => {
  const tpl = '`' + '<style>' + style + '</style>' + ast + '`';

  return `
// Web Components polyfills
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

const template = document.createElement('template');
template.innerHTML = ${tpl};

class XLayersElement extends HTMLElement {
  static is = 'x-layers-element';

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: 'open' });
    shadowDOM.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    console.log("XLayersElement custom element is first connected to the document's DOM.");
  }

  disconnectedCallback() {
    console.log("XLayersElement custom element is disconnected from the document's DOM.");
  }

  adoptedCallback() {
    console.log("XLayersElement custom element is moved to a new document.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("XLayersElement custom element attributes changed.");
  }

}

customElements.define( XLayersElement.is , XLayersElement);
  `;
};

export const readmeTemplate = () => {
  const codeBlock = '```';
  return `
## How to use the Xlayers Web Components

This implementation export the assets as single file web component that can be consumed in the following ways:

${codeBlock}
  // index.html
  <script src="./x-layers-element-file.js"></script>
  <x-layers-element></x-layers-element>
${codeBlock}

>  Needed polyfills are imported inside the x-layers-element javascript file you can import
>  globaly or on demand depending on browser capabilities.

${codeBlock}
  //index.html
  <!-- Load polyfills; note that "loader" will load these async -->
  <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>

  <!-- Load a custom element definitions in 'waitFor' and return a promise -->
  <script type="module">
    WebComponents.waitFor(() => {
    return import('./x-layers-element-file.js');
    });
  </script>

  <!-- Use the custom element -->
  <x-layers-element></x-layers-element>
${codeBlock}

>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)
  `;
};
