
window.onload = ()=> {
    let degree = 170, glow = document.querySelector("#glow");
    let intervalId = setInterval(()=>{
        console.log(degree);
        changeStylesheetRule(glow.styleSheets[0], "body", "background-image", `linear-gradient(${degree}deg, hsla(199, 98%, 48%, 0.70), hsla(187, 100%, 42%, 0.75), hsla(207, 90%, 54%, 0.7), transparent)`);
        if(degree === 180) degree = -179;
        else degree++;

    }, 300);

}
//Add or change the value of properties withing the given stylesheet
function changeStylesheetRule(stylesheet, selector, property, value) {
    let s = stylesheet;
    selector = selector.toLowerCase();
    property = property.toLowerCase();
    value = value.toLowerCase();

    for(var i = 0; i < s.cssRules.length; i++) {
        var rule = s.cssRules[i];
        if(rule.selectorText === selector) {
            rule.style[property] = value;
            return;
        }
    }

    stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
}