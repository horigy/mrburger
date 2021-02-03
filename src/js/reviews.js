const reviewOverlay = document.querySelector('.review__overlay');
const closeReviewOverlay = document.querySelector('.review__overlay-close');
var reviewBtns = document.querySelectorAll('.review_btn');


for (let index = 0; index < reviewBtns.length; index++) {
  const element = reviewBtns[index];
  element.addEventListener('click', function(e) {
    e.preventDefault();
    const user = e.target.parentNode.querySelector('.reviews__item-username').innerText;
    const text = e.target.parentNode.querySelector('.review__item-text').innerText;

    reviewOverlay.querySelector('.review__overlay-user').innerText = user;
    reviewOverlay.querySelector('.review__overlay-text').innerText = text;
    reviewOverlay.style.display = 'flex';
  })
}

closeReviewOverlay.addEventListener('click', function(e) {
  e.preventDefault();
  reviewOverlay.style.display = 'none';
})