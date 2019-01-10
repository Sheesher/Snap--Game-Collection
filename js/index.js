const colors = ["#22a6b3", "#6ab04c", "#eb4d4b", "#f0932b", "#95afc0", "#ff4444", "#eef00a", "#d600ff", "#e74c3c", "#f1c40f", "#bdc3c7", "#3498db", "#EA2027", "#FFC312", "#fed330"];
let i = 0;

setInterval(function () {
     x = document.getElementsByClassName("ente")[0];
    changeText();
}, 102,4);

function changeText() {
    if (i == colors.length) {
        i = 0;
    }
    x.style.color = colors[i];
    
    i += 1; 
}