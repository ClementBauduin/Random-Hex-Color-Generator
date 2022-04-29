const bodyBg = document.body;
const button = document.querySelector(".container--button");
const hexaDisplay = document.querySelector(".container--hex");


button.onclick = () => {
    
    let number = Math.floor(1000000+ Math.random()*9000000);
    let hexNum = number.toString(16);
    console.log(`le nombre hexa est ${hexNum}`);
    bodyBg.style.backgroundColor = "#"+hexNum;
    hexaDisplay.innerText = "#";
    hexaDisplay.innerText += hexNum; 
};

