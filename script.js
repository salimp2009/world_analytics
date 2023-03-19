const textareaEl = document.querySelector(".textarea");
const characterNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const twitterCharLimit = 200;
const facebookCharLimit = 2200;
const scriptPattern = /<[\s\S]*?script[\s\S]*?>/i;

function hasScript(textarea) {
  return scriptPattern.test(textarea.value);
}

const inputHandler = () => {
  if (hasScript(textareaEl) || textareaEl.value.includes("<script>")) {
    alert("<script> not allowed!");
    textareaEl.value = textareaEl.value.replace(scriptPattern, " ");
  }

  let numberOfWords = 0;
  if (textareaEl.value.trim() === "" || textareaEl.value === "") {
    numberOfWords = 0;
  } else {
    numberOfWords = textareaEl.value.trim().split(" ").length;
  }

  const numberOfCharacters = textareaEl.value.length;
  const twitterCharsLeft = twitterCharLimit - numberOfCharacters;
  const facebookCharsLeft = facebookCharLimit - numberOfCharacters;

  if (twitterCharsLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else if (twitterNumberEl.classList.contains("stat__number--limit")) {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharsLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else if (facebookNumberEl.classList.contains("stat__number--limit")) {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  characterNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharsLeft;
  facebookNumberEl.textContent = facebookCharsLeft;
  wordsNumberEl.textContent = numberOfWords;
};

textareaEl.addEventListener("input", inputHandler);
