function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleCardAnimation() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    if (isElementInViewport(card)) {
      card.classList.add('slide-up');
    }
  });
}

window.addEventListener('scroll', handleCardAnimation);
window.addEventListener('load', handleCardAnimation); 
