const flicker = document.getElementById('flicker')
let move = 5

function moveSlider(e) {
    if (move == 5) {
        flicker.style.left = '40px'
        move = 40
    } else {
        flicker.style.left = '5px'
        move = 5
    }
}


