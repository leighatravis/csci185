function switchems(cName) {
    document.querySelector('body').className = cName;
}


function defaultTheme() {
    // your code here.
    console.log('default theme');
    document.querySelector('body').className = "default"
}

function oceanTheme() {
   // your code here.
   console.log('ocean theme');
   // target the body tag and change its class//
   document.querySelector('body').className = "ocean";
}

function desertTheme() {
   // your code here.
   console.log('desert theme');
   document.querySelector('body').className = "desert";
}

function highContrastTheme() {
    // your code here.
    console.log('contrast theme');
    document.querySelector('body').className = "high-contrast";
}

