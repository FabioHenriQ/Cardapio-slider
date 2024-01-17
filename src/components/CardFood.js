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
        const title_food = document.createElement("h2");
        title_food.textContent = this.getAttribute("title_food");
        title_food.setAttribute("class", "title_food");

        const second_title_food = document.createElement("h3");
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
        button_description_food1.setAttribute("class", "button_description_food1 button");

        const button_description_food2 = document.createElement("button");
        button_description_food2.textContent = this.getAttribute("button_description_food2");
        button_description_food2.setAttribute("class", "button_description_food2 button");

        const container_buttons_food = document.createElement("div");
        container_buttons_food.setAttribute("class", "container_buttons_food");
        container_buttons_food.appendChild(button_description_food1);
        container_buttons_food.appendChild(button_description_food2);

        container_description_buttons_food.appendChild(description_food);
        container_description_buttons_food.appendChild(container_buttons_food);

        // options
        const container_options = document.createElement("div");
        container_options.setAttribute("class", "container_options");

        const card_options1 = document.createElement("div");
        card_options1.setAttribute("class", "card_options1");
        card_options1.innerHTML = `
            <div class="container-img-options">
                <img src="${this.getAttribute("image-card-options1")}" alt="">
            </div>
            <div class="container-info-options">
                <p>${this.getAttribute("option1")}</p>
                <p>10 caloria</p>
                <div class="card_options_price">
                    <p>R$2.25</p>
                    <button style="background-color:#c61c1c;">+</button>
                </div>
            </div>
        `;

        const card_options2 = document.createElement("div");
        card_options2.setAttribute("class", "card_options2");
        card_options2.innerHTML = `
            <div class="container-img-options">
                <img src="${this.getAttribute("image-card-options2")}" alt="">
            </div>
            <div class="container-info-options">
                <p>${this.getAttribute("option2")}</p>
                <p>calorias</p>
                <div class="card_options_price">
                    <p>R$2.25</p>
                    <button>+</button>
                </div>
            </div>
        `
        

        container_options.appendChild(card_options1);
        container_options.appendChild(card_options2);
        
        // Integration
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
                border-radius: 45px;
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
                justify-content: space-around;
            }
            .container_title, .container_description_buttons_food, .container_options{
                padding-left: 15%;
            }
            .container_title {
                background: linear-gradient(to right, #c61c1c5a, transparent 40%)
            }
            .container_description_buttons_food {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .container_buttons_food {
                display: flex;
                gap: 5%;
            }
            .button {
                cursor: pointer;
                width: 30%;
                border-radius: 30px;
                border: 0;
                padding: 13px;
                font-size: 15px;
                font-weight: 400;
                box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.342);
                transition: .5s;
            }
            .button:nth-child(1) {
                background-color: #c61c1c; 
                color: #fff;
            }
            .button:hover {
                transform: scale(1.05);
                box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.342);
            }

            .container_options {
                display: flex;
                gap: 10%;
            }
            .card_options1, .card_options2 {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 10px 30px;
                border: 1px solid #fff;
                border-radius: 15px;
                box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.342);
                transition: 1s;
            }
            .card_options2 {
                background-color: #c61c1c;
                color: #fff;
            }
            .card_options1:hover, .card_options2:hover {
                transform: scale(1.05);
                box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.34);
            }
            .container-img-options {
                position: absolute;
                top: -40px;
                left: 0;
                margin-left: 16px; 
                height: 50%;
                width: 80%;
            }
            .container-info-options {
                padding-top: 25px;
                text-align: center;
            }
            .container-img-options img{
                height: 100%;
                width: 100%;
            }
            .card_options_price {
                display: flex;
                justify-content: space-around;
                gap: 20%;
            }
            .card_options_price button {
                align-self: center;
                border-radius: 5px;
                border: 0;
                transition: .5s;
                font-size: 20px;
                cursor: pointer;
                color: #c61c1c;
            }
            .card_options1 .card_options_price button {
                color: #fff;
            }
            .card_options_price button:hover {
                transform: scale(1.1);
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
                transform: scale(1.06);
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


