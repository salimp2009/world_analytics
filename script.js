const textareaEl = document.querySelector("textarea");
textareaEl.addEventListener("input", () => {
  const numberOfCharacters = textareaEl.value.length;
});
