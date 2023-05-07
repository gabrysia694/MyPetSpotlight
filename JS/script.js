const cardDivs = document.querySelectorAll('.card');

  cardDivs.forEach(cardDiv => {
  const liElements = cardDiv.querySelectorAll('li');
  const liCount = liElements.length;
  const ulElements = cardDiv.querySelectorAll('ul');
  const content = cardDiv.querySelectorAll('.content');
  const petImg = cardDiv.querySelectorAll('img');
  if (liCount > 3) {
    ulElements.forEach(ulElement => {
      ulElement.style.cssText = "height: 90px; overflow-y: scroll; padding-right: 10px;";
    });
  }
  else if (liCount < 3){
    petImg.forEach(pet => {
      pet.style.cssText = "position: absolute; top:0;" 
    })
    content.forEach(text => {
      text.style.cssText = "position: absolute; top:36%;" 
    })
  }
});