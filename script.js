let degree = 45, glowSection = document.querySelector("#glow"), intervalId;

//increments degree of linear-gradient in intervals of 300ms
function startGlow(){
    intervalId = setInterval(() => {
        changeStylesheetRule(document.styleSheets[0], "#glow", "background-image", `linear-gradient(${degree}deg, hsla(199, 98%, 48%, 0.70), hsla(187, 100%, 42%, 0.75), hsla(207, 90%, 54%, 0.7))`);

        //keep degree within allowed range
        if (degree === 180) degree = -179;
        else degree++;
    }, 300);
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

startGlow();
