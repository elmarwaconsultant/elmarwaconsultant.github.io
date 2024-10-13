document.addEventListener('DOMContentLoaded', function() {
  const partners = document.querySelector('.partners');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // Slide to the left
  prevBtn.addEventListener('click', function() {
    partners.scrollLeft -= 200;
  });

  // Slide to the right
  nextBtn.addEventListener('click', function() {
    partners.scrollLeft += 200;
  });
});

// Open the image in full size
function openFullSize(imgElement) {
const overlay = document.getElementById('fullscreen-overlay');
const fullImg = document.getElementById('full-img');
fullImg.src = imgElement.src;
overlay.style.display = 'flex';
document.body.classList.add('blur');
}

// Close the full-size image and hide the overlay
function closeFullSize() {
const overlay = document.getElementById('fullscreen-overlay');
overlay.style.display = 'none';
document.body.classList.remove('blur');
}