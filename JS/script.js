const personalityDivs = document.querySelectorAll('.personality');

  personalityDivs.forEach(personalityDiv => {
  const liElements = personalityDiv.querySelectorAll('li');
  const liCount = liElements.length;
  const ulElements = personalityDiv.querySelectorAll('ul');

  if (liCount > 3) {
    ulElements.forEach(ulElement => {
      ulElement.style.cssText = "height: 90px; overflow-y: scroll; padding-right: 10px;";
    });
  }
});