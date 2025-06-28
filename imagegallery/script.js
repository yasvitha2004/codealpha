const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const galleryItems = document.querySelectorAll('.gallery-item img');
const filterButtons = document.querySelectorAll('.filter');

let currentIndex = 0;

// Show Lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = img.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next Button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImage.src = galleryItems[currentIndex].src;
});

// Prev Button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImage.src = galleryItems[currentIndex].src;
});

// Category Filter
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.display = category === 'all' || item.getAttribute('data-category') === category
        ? 'block'
        : 'none';
    });
  });
});