window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");

    changeBtn.addEventListener("click", function () {
        const bgColor = genarateRGBColor();
        root.style.backgroundColor = bgColor;
  });
}

function genarateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
