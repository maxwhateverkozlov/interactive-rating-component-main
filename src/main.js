const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const submitBtn = document.getElementById("submit-btn");
const ratingBtns = document.querySelectorAll(".btn-rating");
const scoreSpan = document.getElementById("rating-value");

let selectedScore = null;

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ratingBtns.forEach((b) => b.classList.remove("active"));

    e.currentTarget.classList.add("active");

    selectedScore = e.currentTarget.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedScore) {
    scoreSpan.textContent = selectedScore;

    ratingState.classList.add("hidden");

    thankYouState.classList.remove("hidden");
    thankYouState.classList.add("fade-in");
  } else {
    alert("Please select a rating before submitting!");
  }
});
