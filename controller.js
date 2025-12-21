// navbar -------------------------//
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".ininav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ========== about js ========== //
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000); // 3 detik

// =========== nav active =========== //

// ============= slider part product ============= //

function initSlider(containerSelector) {
  const container = document.querySelector(containerSelector);
  const prdk = container.querySelector(".prdk");
  const imgs = container.querySelectorAll(".prdk img");
  const nextBtn = container.querySelector(".next");
  const prevBtn = container.querySelector(".prev");

  const imgWidth = 220;
  let product = 0;

  function update() {
    prdk.style.transform = `translateX(${-imgWidth * product}px)`;
    prevBtn.disabled = product === 0;
    nextBtn.disabled = product === imgs.length - 1;
  }

  nextBtn.addEventListener("click", () => {
    if (product < imgs.length - 1) {
      product++;
      update();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (product > 0) {
      product--;
      update();
    }
  });

  update();
}

// INIT MASING-MASING SLIDER
initSlider("#isiproduct .slider");
initSlider("#isiproduct .slider2");
initSlider("#isiproduct .slider3");
