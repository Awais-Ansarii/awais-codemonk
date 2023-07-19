
const scale = 10 

const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput')
const rangeValueDiv = document.querySelector('#rangeValue')

const CANVAS_DIMENSIONS = { height: canvas.height, width: canvas.width };

const ctx = canvas.getContext("2d");

const sequence1 = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113]
    
const sequence = sequence1.map(item => item * scale);

const drawRecaman = (maxIndex) => {
    ctx.clearRect(0,0,CANVAS_DIMENSIONS.width,CANVAS_DIMENSIONS.height)
    ctx.beginPath();
    ctx.moveTo(0,CANVAS_DIMENSIONS.height/2)
    for(let i=1;i<=maxIndex;i++){
        const prevX = sequence[i-1];
        const currX = sequence[i];
        const radius = Math.abs(currX-prevX)/2;
        const direction = i%2===0 ? -1 : +1;
        ctx.arc((prevX+currX)/2,CANVAS_DIMENSIONS.height/2,radius,direction*Math.PI/2,(direction+2)*Math.PI/2)
    }
    ctx.stroke();
}

const onInputChangeHandler = (value) => {
    rangeValueDiv.innerText = value;
    drawRecaman(value)
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value))

drawRecaman(rangeInput.value)
