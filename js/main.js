const elXField = document.getElementById("xField");
const elYField = document.getElementById("yField");
const elFieldCoontainer = document.querySelector('.fieldCoontainer');
const elNumberObstacle = document.getElementById("numberObstacle");
let xField = 0; // width of field
let yField = 0; // width of field
let elHtml = '';
let numberObstacle = 0;
let arr = [];
let arrXY = [];
let arrObs = [];
let step = 1;

elXField.addEventListener('change', () => {
    xField = Number(elXField.value);
    elHtml = `repeat(${xField}, 50px)`;
    elFieldCoontainer.style.gridTemplateColumns = elHtml;
});

elYField.addEventListener('change', () => {
    yField = Number(elYField.value);
    elHtml = `repeat(${yField}, 50px)`;
    elFieldCoontainer.style.gridTemplateRows = elHtml;
});

elNumberObstacle.addEventListener('change', () => {
    elFieldCoontainer.innerHTML = '';
    arrXY = [];
    numberObstacle = Number(elNumberObstacle.value);

    for (let i=1; i<=xField; i++){
        for (let j=1; j<=yField; j++){
            arrXY.push([i, j]);
        }
    }
    arrObs = [];
    for (let i=0; i<(numberObstacle+2); i++) {
        arrObs.push(arrXY.splice(Math.random()*arrXY.length,1)[0]);
    }

    for (let i=0; i <= numberObstacle+1; i++){
        elHtml = `<div class="obstacle obs${i}"></div>`;
        elFieldCoontainer.innerHTML += elHtml;
        elHtml = `.obs${i}`;
        arr[i] = document.querySelector(elHtml);
        arr[i].style.gridColumn = arrObs[i][0];
        arr[i].style.gridRow = arrObs[i][1];      
    }

    arr[0] = document.querySelector('.obs0');
    arr[0].style.border = '5px solid red';
    elHtml = `.obs${numberObstacle+1}`;
    arr[numberObstacle+1] = document.querySelector(elHtml);
    arr[numberObstacle+1].style.border = '5px solid greenyellow';
    arr[numberObstacle+1].innerHTML = 'Finish';    
})

const elNavLeft = document.querySelector('.navLeft');
const elNavRight = document.querySelector('.navRight');
const elNavUp = document.querySelector('.navUp');
const elNavDouwn = document.querySelector('.navDouwn');

elNavLeft.addEventListener('click', () => {
    step = 1;
    if (arrObs[0][0] === 1){
        step = 0; // near left side, no move
    } 
    else {for (let i=1; i<=numberObstacle; i++) {
            if ((arrObs[0][0]-1) === arrObs[i][0] && (arrObs[0][1]) === arrObs[i][1]) {
            step = 0; // near left obstacle, no move
            }
        }
        if (step === 1) {
            arrObs[0][0] = arrObs[0][0] - 1;
            arr[0].style.gridColumn = arrObs[0][0];
            if ( arrObs[0][0] === arrObs[numberObstacle+1][0] && arrObs[0][1] === arrObs[numberObstacle+1][1]) {
                arr[numberObstacle+1].innerHTML = 'You win';
            }
        }
    }
})

elNavRight.addEventListener('click', () => {
    step = 1;
    if (arrObs[0][0] === xField) {
        step = 0; // near right side, no move
    } 
    else {for (let i=1; i<=numberObstacle; i++) {
            if ((arrObs[0][0]+1) === arrObs[i][0] && (arrObs[0][1]) === arrObs[i][1]) {
            step = 0; // near right obstacle, no move
            }
        }
        if (step === 1) {
            arrObs[0][0] = arrObs[0][0] + 1;
            arr[0].style.gridColumn = arrObs[0][0];
            if ( arrObs[0][0] === arrObs[numberObstacle+1][0] && arrObs[0][1] === arrObs[numberObstacle+1][1]) {
                arr[numberObstacle+1].innerHTML = 'You win';
            }
        }
    }
})

elNavUp.addEventListener('click', () => {
    step = 1;
    if (arrObs[0][1] === 1) {
        step = 0; // near up side, no move
    } 
    else {for (let i=1; i<=numberObstacle; i++) {
            if ((arrObs[0][1]-1) === arrObs[i][1] && (arrObs[0][0]) === arrObs[i][0]) {
            step = 0; // near up obstacle, no move
            }
        }
        if (step === 1) {
            arrObs[0][1] = arrObs[0][1] - 1;
            arr[0].style.gridRow = arrObs[0][1];
            if ( arrObs[0][0] === arrObs[numberObstacle+1][0] && arrObs[0][1] === arrObs[numberObstacle+1][1]) {
                arr[numberObstacle+1].innerHTML = 'You win';
            }
        }
    }
})

elNavDouwn.addEventListener('click', () => {
    step = 1;
    if (arrObs[0][1] === yField) {
        step = 0; // near down side, no move
    } 
    else {for (let i=1; i<=numberObstacle; i++) {
            if ((arrObs[0][1]+1) === arrObs[i][1] && (arrObs[0][0]) === arrObs[i][0]) {
            step = 0; // near dowun obstacle, no move
            }
        }
        if (step === 1) {
            arrObs[0][1] = arrObs[0][1] + 1;
            arr[0].style.gridRow = arrObs[0][1];
            if ( arrObs[0][0] === arrObs[numberObstacle+1][0] && arrObs[0][1] === arrObs[numberObstacle+1][1]) {
                arr[numberObstacle+1].innerHTML = 'You win';
            }
        }
    }
})

// arrObs[0][0] - X coordinate move-box 
// arrObs[0][1] - Y coordinate move-box
// i= from 1 to numberObstacle
// arrObs[i][0] - X coordinate move-box 
// arrObs[i][1] - Y coordinate move-box 
// arrObs[numberObstacle+1][0] - X coordinate finish
// arrObs[numberObstacle+1][0] - Y coordinate finish