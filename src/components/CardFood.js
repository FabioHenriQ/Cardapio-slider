class CardFood extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode:"open" })

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    build() {
        const componentRoot = document.createElement('h2');
        componentRoot.textContent = this.getAttribute("titulo");

        return componentRoot;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
            h2{
                color: red;
            }
        `;
        
        return style
    }
}

customElements.define('card-food', CardFood);


