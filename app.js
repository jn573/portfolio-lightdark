
const slider = document.querySelector('.switch') //getElementById('flicker')

slider.addEventListener('click',() => {
    document.body.classList.toggle('dark')
    document.getElementById('flicker').className="flicker-on" //classList.toggle('flicker-on')
})




