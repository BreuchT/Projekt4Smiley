'use strict';

let smiley = document.getElementById('smiley');
let btn = document.getElementById('btn');
let rotation = 360;
btn.addEventListener('click', function () {
  smiley.style = 'transform: rotate(' + rotation + 'deg)';
  rotation += 360;
});
