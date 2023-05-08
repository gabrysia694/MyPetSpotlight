const cardDivs = document.querySelectorAll('.card');

  cardDivs.forEach(cardDiv => {
  const liElements = cardDiv.querySelectorAll('li');
  const liCount = liElements.length;
  const ulElements = cardDiv.querySelectorAll('ul');

  if (liCount > 3) {
    ulElements.forEach(ulElement => {
      ulElement.style.cssText = "height: 90px; overflow-y: scroll; padding-right: 10px;";
    });
  }
});