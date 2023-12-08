function backgroundColor() {
    const button = document.getElementById("s1").style.backgroundColor = "light blue";
    // your code here
}

function changeContent() {
    const button = document.getElementById('button2');
    const div = document.getElementById('#message');
    div.innerHTML = '<p id="message">Goodbye!</p'

  button.addEventListener('click', changeContent);
}
// your code here




const myIMG = document.getElementById("cat");
const myButton = document.getElementById("changePic");


myButton.addEventListener("click", function () {
    myIMG.src = "images/dog.jpg";
});
    // your code here}
