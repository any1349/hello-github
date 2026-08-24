const helloButton = document.querySelector("#helloButton");
const message = document.querySelector("#message");

helloButton.addEventListener("click", () => {
  message.textContent = "这是我第一次用 VS Code 修改网页互动。";
});
