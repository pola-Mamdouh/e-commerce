const images = [
  "images/banner-1.jpg",
  "images/banner-2.jpg",
  "images/banner-3.jpg",
];

let currentIndex = 0;

const imgSlider = document.getElementById("imgSlider");
const dotsContainer = document.getElementById("slider-changer");

function createDots() {
  dotsContainer.innerHTML = "";
  images.forEach((_, index) => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => showImage(index));
    dotsContainer.appendChild(dot);
  });
}

function showImage(index) {
  currentIndex = index;
  imgSlider.src = images[currentIndex];
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextImg() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImg() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

createDots();
showImage(currentIndex);

setInterval(() => {
  nextImg();
}, 5000);
let date = new Date();


// Product Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.new-arrivals, .trending, .top-rated');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding panel
      const tabId = this.getAttribute('data-tab');
      document.querySelector(`.${tabId}`).classList.add('active');
    });
  });
});
