let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  window.location.href = "cart.html"; // Replace with your actual cart page
};
document.querySelector("#login-btn").onclick = () => {
  window.location.href = "login.html"; // Replace with your actual cart page
};

// star rating

const stars = document.querySelectorAll(".star-rating .star");
const ratingValue = document.getElementById("rating-value");
let currentRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    currentRating = index + 1;
    updateStars();
    ratingValue.textContent = `Your rating: ${currentRating}`;
  });

  star.addEventListener("mouseover", () => {
    highlightStars(index);
  });

  star.addEventListener("mouseleave", () => {
    updateStars();
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.classList.toggle("active", i <= index);
  });
}

function updateStars() {
  stars.forEach((star, i) => {
    star.classList.toggle("active", i < currentRating);
  });
}
