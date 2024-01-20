var radio = document.querySelectorAll('.manual-btn');
let cont = 1;

document.getElementById('radio1').checked = true;

let interval = setInterval(()=>{
    nextImg();
}, 5000);

function nextImg() {
    cont++;
    if(cont > 4) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}

for (let i = 0; i < radio.length; i++){
    radio[i].addEventListener('click', ()=> {
        clearInterval(interval);
    });
}