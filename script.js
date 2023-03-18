const textareaEl = document.querySelector(".textarea");
const characterNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

textareaEl.addEventListener("input", () => {
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharsLeft = 280 - numberOfCharacters;
  const facebookCharsLeft = 2200 - numberOfCharacters;

  characterNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharsLeft;
  facebookNumberEl.textContent = facebookCharsLeft;
});
