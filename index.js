const letter = document.querySelectorAll('.letter');

function rotateLetter(value, massif){
    let deg = (massif.length-0.5)/2*(-value);
    for(let item of massif){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value
    }
};

rotateLetter(-9, letter);