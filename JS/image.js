

// console.log(animals);
let container = document.getElementById("list");
/// Load the HTML template file using fetch
fetch("../card.html")
  .then((response) => response.text())
  .then((html) => {
    // Loop through the people array and replace the content of the template with the data
    animals.forEach(function (animal) {
      // Create a new div element and set its innerHTML to the template
      let div = document.createElement("div");
      div.innerHTML = html;

      // Set the content of the template with the data
      div.querySelector(".image").src = animal.imgSrc;
      div.querySelector(".name-list").innerHTML = animal.name;
      div.querySelector(".animal-list").innerHTML = animal.type;
      div.querySelector(".age-list").innerHTML = animal.age;
      div.querySelector(".character-1").innerHTML = animal.character[0];
      div.querySelector(".character-2").innerHTML = animal.character[1];
      div.querySelector(".character-3").innerHTML = animal.character[2];
      div.querySelector(".toy-list").innerHTML = animal.favToy;
      div.querySelector(".owner-list").innerHTML = animal.owner;
      div.querySelector(".ownerlink").setAttribute("href", animal.ownerUrl);

      // Append the div element to the container element
      container.appendChild(div);
    });
  });