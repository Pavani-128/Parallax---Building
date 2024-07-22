let text = document.getElementById('text');
let building2 = document.getElementById('building2');
let building3 = document.getElementById('building3');
let building4 = document.getElementById('building4');
window.addEventListener('scroll',() => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + "px";
    building2.style.top = value * 0.5 + 'px';
    building3.style.top = value * 1.5 +'px';
    building4.style.top = value * 2.5 + 'px'
});