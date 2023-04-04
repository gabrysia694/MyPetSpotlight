let images = ['cat.jpg', 'dog.jpg', 'hamster.jpg'];

let index = 0;
const imgElement = document.getElementById('photo');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 3000);
};