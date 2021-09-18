
/*
window.onload = function(){
    let elem = document.getElementById("id1");
        function f1 (){console.log('Hello!')};
        elem.addEventListener('click', f1);
}

*/
/*
'use script';
const divEl = document.getElementById('divBox');
//console.log(divEl);
divEl.addEventListener('click', changeColor1);

function changeColor1 (event) {
    this.style.backgroundColor = 'darkblue';
    this.removeEventListener('click', changeColor1);
    this.addEventListener('click', changeColor2);
}

function changeColor2 (event) {
    this.style.backgroundColor = 'orangered';
    this.removeEventListener('click', changeColor2);
    this.addEventListener('click', changeColor1);
}

*/
/*
window.onload = function () {
    const divEl = document.getElementById('divBox');
    //console.log(divEl);
    divEl.addEventListener('click', changeColor1);

    function changeColor1 (event) {
        this.style.backgroundColor = 'darkblue';
        this.removeEventListener('click', changeColor1);
        this.addEventListener('click', changeColor2);
    }

    function changeColor2 (event) {
        this.style.backgroundColor = 'orangered';
        this.removeEventListener('click', changeColor2);
        this.addEventListener('click', changeColor1);
    }

}*/
/*
'use script';
const divEl = document.querySelectorAll('.divBox');
divEl.forEach((i) => i.addEventListener('click', changeColor1));

function changeColor1(event) {
  this.style.backgroundColor = 'darkblue';
  this.removeEventListener('click', changeColor1);
  this.addEventListener('click', changeColor2);
}

function changeColor2(event) {
    this.style.backgroundColor = 'orangered';
    this.removeEventListener('click', changeColor2);
    this.addEventListener('click', changeColor1);
  }
*/

'use script';

let sliderEl = document.getElementById('slider');
let tumblerEl = document.getElementById('tumbler');

tumblerEl.onmousedown = function (e) {
    e.preventDefault();
    let shift = e.clientX - tumblerEl.getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove (e){
        let x = e.clientX - shift - sliderEl.getBoundingClientRect().left;
        if(x < 0) x = 0;
        let rightX = sliderEl.offsetWidth - tumblerEl.offsetWidth;
        if(x > rightX) x = rightX;
        tumblerEl.style.left = x + 'px';
    }
    
    function onMouseUp (e){
    
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    
    }
};

