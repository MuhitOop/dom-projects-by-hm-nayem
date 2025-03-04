window.onload = () => {
    main();
}


function main() {
    const root = document.getElementById("root");
    const changeBtn = document.getElementById("change-btn");
    const output = document.getElementById('output');

    changeBtn.addEventListener('click', function () {
        const bgColor = genarateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
}








function genarateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
