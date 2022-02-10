const keycodes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
}

let currentCodePosition = 0

document.addEventListener('keydown', function(e){
    let key = keycodes[`${e.keyCode}`];
    let required = konami[`${currentCodePosition}`];
    if (key == required){
        currentCodePosition++;
    if (currentCodePosition == konami.length){
        spin();
        currentCodePosition = 0
    }
}
    else currentCodePosition = 0
    renderKonamiCode()
})

const konami = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

function spin(){
    document.querySelector('.konami-logo').classList.add("combo")
    setTimeout(unspin, 4000)
}

function unspin(){
    document.querySelector('.konami-logo').classList.remove("combo")
}

function renderKonamiCode(){
    const text = document.querySelector('.codeflexbox')
    text.innerHTML = ""
    for(let i=0;i<konami.length;i++){
        const span = document.createElement('span')
        span.innerText = konami[i]
        if (i == currentCodePosition) span.classList.add('blacktext')
        text.appendChild(span)
    }
}