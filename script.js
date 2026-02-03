document.addEventListener("DOMContentLoaded", () => {
  const valueEl = document.getElementById("counter-value");
  const btnInc = document.getElementById("btn-increment");
  const btnDec = document.getElementById("btn-decrement");
  const btnReset = document.getElementById("btn-reset");

  let value = 0;

  function render() {
    valueEl.textContent = value.toString();
  }

  btnInc.addEventListener("click", () => {
    value++;
    render();
  });

  btnDec.addEventListener("click", () => {
    value--;
    render();
  });

  btnReset.addEventListener("click", () => {
    value = 0;
    render();
  });

  render();
});
