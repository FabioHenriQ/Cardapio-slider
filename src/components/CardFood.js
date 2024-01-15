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


        // ------------- Card__left
        // title
        const title_food = document.createElement("h1");
        title_food.textContent = this.getAttribute("title_food");
        title_food.setAttribute("class", "title_food");

        const second_title_food = document.createElement("h2");
        second_title_food.textContent = this.getAttribute("second_title_food");
        second_title_food.setAttribute("class", "second_title_food");

        const container_title = document.createElement("div");
        container_title.setAttribute("class", "container_title");
        container_title.appendChild(title_food);
        container_title.appendChild(second_title_food);

        // description and buttons
        const description_food = document.createElement("p");
        description_food.textContent = this.getAttribute("description_food");
        description_food.setAttribute("class", "description_food");

        const container_description_buttons_food = document.createElement("div");
        container_description_buttons_food.setAttribute("class", "container_description_buttons_food");

        // buttons
        const button_description_food1 = document.createElement("button");
        button_description_food1.textContent = this.getAttribute("button_description_food1");
        description_food.setAttribute("class", "button_description_food1");

        const button_description_food2 = document.createElement("button");
        button_description_food2.textContent = this.getAttribute("button_description_food2");
        description_food.setAttribute("class", "button_description_food2");

        const container_buttons_food = document.createElement("div");
        container_buttons_food.setAttribute("class", "container_buttons_food");
        container_buttons_food.appendChild(button_description_food1);
        container_buttons_food.appendChild(button_description_food2);

        container_description_buttons_food.appendChild(description_food);
        container_description_buttons_food.appendChild(container_buttons_food);

        // options
        const container_options = document.createElement("div");
        container_options.setAttribute("class", "container_options");


        
        
        card__left.appendChild(container_title);
        card__left.appendChild(container_description_buttons_food);
        card__left.appendChild(container_options);


        // ------------- Card__right
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
                border: 2px solid #fff;
                box-shadow: 1px 1px 30px 1px rgba(0, 0, 0, 0.342);
            }
            .card__left {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            .container_title {

            }
            .container_buttons_food {
                display: flex;
                gap: 20px;
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


