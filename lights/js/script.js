const RED = document.querySelector('.red');
const YELLOW = document.querySelector('.yellow');
const GREEN = document.querySelector('.green');
const LIGHT = document.querySelector('.light');

LIGHT.addEventListener('click', function() {
    let lights = ['red', 'yellow', 'green'];
    for (let i = 0; i < lights.length; i++) {
        console.log(lights[i]);
        if (lights[i] == 'red') {
            RED.classList.add('bg-color1');
        } else if (lights[i] == 'yellow') {
            RED.classList.remove('bg-color1');
            YELLOW.classList.add('bg-color2');
        } else if (lights[i] == 'green') {
            YELLOW.classList.remove('bg-color2');
            GREEN.classList.add('bg-color3');
        }
    }               
})





