const cardDivs = document.querySelectorAll('.card');
var backToTopBtn = document.getElementById('back-to-top-btn');

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

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

window.addEventListener('scroll', function() {
  var backToTopBtn = document.getElementById('back-to-top-btn');
  if (window.pageYOffset > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
