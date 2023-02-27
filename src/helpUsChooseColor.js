let buttonGetColors = document.querySelector('#buttonGetColors');

let technologyAndroidStudio = document.querySelector('#technologyAndroidStudio');
let technologyAndroid = document.querySelector('#technologyAndroid');
let technologyApple = document.querySelector('#technologyApple');
let technologyJS = document.querySelector('#technologyJS');
let technologyVCode = document.querySelector('#technologyVCode');

let buttonLikedVC = document.querySelector('#buttonLikedVC');
let buttonLikedJS = document.querySelector('#buttonLikedJS');
let buttonLikedApple = document.querySelector('#buttonLikedApple');
let buttonLikedAndroid = document.querySelector('#buttonLikedAndroid');
let buttonLikedAndStudio = document.querySelector('#buttonLikedAndStudio');

let textChoose = document.querySelector('#textChoose');

let selectedList = [false, false, false, false, false];
let numberOfSelectedColor = 0;
let didGetColors = false;


let hexString = "0123456789abcdef";
let colorList = [];
let selectedColorList = [];


let createHexCode = () => {
    didGetColors = true;

    for (let j = 0; j < 5; j++) {

        let hexCode = "#"

        for (let i = 0; i < 6; i++) {
            hexCode += hexString[Math.floor(Math.random() * hexString.length)];
        }

        colorList.push(hexCode);

    }

    console.log(colorList.toString());
    setBorderColor();

}

let setBorderColor = () => {

    if (!selectedList[0]) {
        technologyVCode.style.borderColor = colorList[0];
    }

    if (!selectedList[1]) {
        technologyJS.style.borderColor = colorList[1];
    }

    if (!selectedList[2]) {
        technologyApple.style.borderColor = colorList[2];
    }

    if (!selectedList[3]) {
        technologyAndroid.style.borderColor = colorList[3];

    }

    if (!selectedList[4]) {
        technologyAndroidStudio.style.borderColor = colorList[4];
    }

    colorList = [];
}


buttonGetColors.addEventListener("click", createHexCode)

buttonLikedVC.addEventListener("click", function () {

    if (didGetColors) {
        buttonLikedVC.disabled = true;
        buttonLikedVC.textContent = "Liked ❤"
        selectedList[0] = true;
        numberOfSelectedColor++;
        controlNumberOfSelectedColor();
        setTextChoose(0, technologyVCode.style.borderColor, "VSCode");
    } else {
        alert("Hello! Get 5 Colors Random\nClick the Button");
    }


});

buttonLikedJS.addEventListener("click", function () {

    if (didGetColors) {
        buttonLikedJS.disabled = true;
        buttonLikedJS.textContent = "Liked ❤"
        selectedList[1] = true;
        numberOfSelectedColor++;
        controlNumberOfSelectedColor();
        setTextChoose(1, technologyJS.style.borderColor, "JavaScript");

    } else {
        alert("Hello! Get 5 Colors Random\nClick the Button");
    }



});

buttonLikedApple.addEventListener("click", function () {

    if (didGetColors) {
        buttonLikedApple.disabled = true;
        buttonLikedApple.textContent = "Liked ❤"
        selectedList[2] = true;
        numberOfSelectedColor++;
        controlNumberOfSelectedColor();
        setTextChoose(2, technologyApple.style.borderColor, "Apple");

    } else {
        alert("Hello! Get 5 Colors Random\nClick the Button");
    }



});

buttonLikedAndroid.addEventListener("click", function () {

    if (didGetColors) {
        buttonLikedAndroid.disabled = true;
        buttonLikedAndroid.textContent = "Liked ❤"
        selectedList[3] = true;
        numberOfSelectedColor++;
        controlNumberOfSelectedColor();
        setTextChoose(3, technologyAndroid.style.borderColor, "Android");

    } else {
        alert("Hello! Get 5 Colors Random\nClick the Button");
    }



});

buttonLikedAndStudio.addEventListener("click", function () {

    if (didGetColors) {
        buttonLikedAndStudio.disabled = true;
        buttonLikedAndStudio.textContent = "Liked ❤"
        selectedList[4] = true;
        numberOfSelectedColor++;
        controlNumberOfSelectedColor();
        setTextChoose(4, technologyAndroidStudio.style.borderColor, "Android Studio");

    } else {
        alert("Hello! Get 5 Colors Random\nClick the Button");
    }


});

let controlNumberOfSelectedColor = () => {


    if (numberOfSelectedColor == 5) {
        buttonGetColors.disabled = true;
        buttonGetColors.textContent = "Thank You!";
    }

}

let setTextChoose = (number, data, dataName) => {

    selectedColorList [number] = "(" +dataName+ ")" + " -> " +  data;
    
    textChoose.textContent= selectedColorList.join(" - \n");

}

function valueToHex(c) {
    var hex = c.toString(16);
    return hex;
}

function rgbToHex(r,g,b){
    return(valueToHex(r) + valueToHex(g) + valueToHex(b));
}