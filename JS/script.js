const cardDivs = document.querySelectorAll('.card');
var backToTopBtn = document.getElementById('back-to-top-btn');

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  var backToTopBtn = document.getElementById('back-to-top-btn');
  if (window.pageYOffset > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
