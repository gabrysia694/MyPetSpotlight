var backToTopBtn = document.getElementById('back-to-top-btn'); 

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
  var scrollY = window.scrollY || window.pageYOffset;
  var petSec = document.getElementById('petType');
  var cardList = this.document.getElementById('list');
    if (scrollY >= window.innerHeight) {
      petSec.classList.add('fixed');
      cardList.style.cssText = "margin-top: 70px;";
    } else {
      petSec.classList.remove('fixed');
      cardList.style.cssText = "margin-top: 0px;";
    }
});

window.addEventListener('DOMContentLoaded', function() {
  var petTypesLinks = document.querySelectorAll('#petType a');
  var petCards = document.querySelectorAll('#list .card');

  petTypesLinks.forEach(function(type) {
    type.addEventListener('click', function(event) {
      event.preventDefault();
      var filter = type.getAttribute('data-filter').toUpperCase();

      petTypesLinks.forEach(function(link) {
        link.classList.remove('active'); 
      });

      type.classList.add('active'); 

      // Show/hide pet cards based on the selected filter
      petCards.forEach(function(card) {
        var petType = card.getAttribute('data-pet-type').toUpperCase();

        if (filter === 'ALL' || (filter === 'DOG' && petType === 'DOG') || (filter === 'CAT' && petType === 'CAT') || (filter === 'OTHERS' && petType !== 'DOG' && petType !== 'CAT')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      var petSection = document.getElementById('petType');
      var offsetTop = window.innerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
  var allCategory = document.querySelector('#petType a[data-filter="all"]');
  allCategory.classList.add('active');
});
