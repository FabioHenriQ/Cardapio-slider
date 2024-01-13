class CardFood extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode:"open" })

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // Divisor do card principal
        const card__left = document.createElement("div");
        card__left.setAttribute("class", "card__left");
        componentRoot.appendChild(card__left);

        const card__right = document.createElement("div");
        card__right.setAttribute("class", "card__right");
        componentRoot.appendChild(card__right);
        // Card__left

        // Card__right
        const artBackground = document.createElement("div");
        artBackground.setAttribute("class", "artBackground");


        componentRoot.appendChild(artBackground);

        return componentRoot;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                height: 100%;
                width: 100%;
                border-radius: 50px;
                display: flex;
                background-color: #fff;
                position: relative;
                overflow: hidden;
            }
            .card__left {
                height: 100%;
                width: 100%;
            }
            .card__right {
                height: 100%;
                width: 100%;
                transition: 1s;
                z-index: 1;

                background-image: url(${this.getAttribute("link-image-food")});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;

                position: relative;
            }
            .card__right:hover {
                transform: scale(1.1);
            }
            .artBackground {
                height: 100%;
                width: 100%;
                left: 50%;
                position: absolute;

                background-image: url(${this.getAttribute("link-image-background")});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: top;
            }

        `;
        return style
    }
}

customElements.define('card-food', CardFood);


