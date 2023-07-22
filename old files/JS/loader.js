window.addEventListener('DOMContentLoaded', function() {
  var imageContainers = document.querySelectorAll('.image');
  var lazyLoadImages;

  function lazyLoadImage(image) {
    var loader = image.querySelector('.loader');
    var imgElement = image.querySelector('img');

    function showImage() {
      imgElement.style.display = 'block';
      loader.style.display = 'none';
    }

    imgElement.addEventListener('load', showImage);

    lazyLoadImages = Array.from(imageContainers).filter(function(img) {
      return !img.classList.contains('loaded');
    });

    lazyLoadImages.forEach(function(image, index) {
      var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var img = entry.target.querySelector('img');
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(entry.target);

            // Determine the range of cards to load
            var buffer = 2; // Number of cards to load ahead
            var start = index + 1;
            var end = index + buffer + 1;
            var nextImages = Array.from(imageContainers).slice(start, end);
            nextImages.forEach(function(nextImage) {
              var nextImg = nextImage.querySelector('img');
              if (!nextImg.classList.contains('loaded')) {
                nextImg.src = nextImg.dataset.src;
                nextImg.classList.add('loaded');
              }
            });
          }
        });
      });

      observer.observe(image);
    });
  }

  imageContainers.forEach(function(imageContainer) {
    lazyLoadImage(imageContainer);
  });
});
