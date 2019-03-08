let degree, glowSection = document.querySelector("#glow"), intervalId;

//increments degree of linear-gradient in intervals of 300ms
function startGlow(degree = 45, hslas = ["hsla(4, 90%, 58%, 0.9)", "hsla(340, 82%, 52%, 0.9)", "hsla(291, 64%, 42%, 0.9)"]){

    //convert array of hsla-values to string for stylesheet
    let hslaString = "";
    for(let x = 0; x < hslas.length; x++){
        if(x !== hslas.length-1){
            hslaString += hslas[0] + ", ";
        }else{
            hslaString += hslas[0];
        }
    }

    //start interval
    intervalId = setInterval(() => {
        changeStylesheetRule(document.styleSheets[0], "#glow", "background-image", `linear-gradient(${degree}deg, ${hslas})`);

        //keep degree within allowed range
        if (degree === 180) degree = -179;
        else degree++;
    }, 200);
}

function stopGlow(){
    clearInterval(intervalId);
}

//Add or change the value of properties withing the given stylesheet
function changeStylesheetRule(stylesheet, selector, property, value) {
    let s = stylesheet;
    selector = selector.toLowerCase();
    property = property.toLowerCase();
    value = value.toLowerCase();

    //for every rule in stylesheet
    for(let i = 0; i < s.cssRules.length; i++) {
        let rule = s.cssRules[i];
        if(rule.selectorText === selector) {
            rule.style[property] = value;
            return;
        }
    }

    stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}

//event listener for different colors
//blue
document.querySelector("#color1").addEventListener("click", ()=>{
    stopGlow();
    startGlow(degree, ["hsla(199, 98%, 48%, 0.9)", "hsla(187, 100%, 42%, 0.9)", "hsla(207, 90%, 54%, 0.9)"]);
});

//green
document.querySelector("#color2").addEventListener("click", ()=>{
    stopGlow();
    startGlow(degree, ["hsla(174, 100%, 29%, 0.9)", "hsla(111, 50%, 53%, 0.9)", "hsla(122, 39%, 49%, 0.9)"]);
});

//yellow
document.querySelector("#color3").addEventListener("click", ()=>{
    stopGlow();
    startGlow(degree, ["hsla(45, 100%, 51%, 0.9)", "hsla(54, 100%, 62%, 0.9)", "hsla(36, 100%, 50%, 0.9)"]);
});

//purple
document.querySelector("#color4").addEventListener("click", ()=>{
    stopGlow();
    startGlow(degree, ["hsla(4, 90%, 58%, 0.9)", "hsla(340, 82%, 52%, 0.9)", "hsla(291, 64%, 42%, 0.9)"]);
});

startGlow();
