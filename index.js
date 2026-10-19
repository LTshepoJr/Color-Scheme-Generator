const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
let colorScheme = [];
const hexValues = [];

fetch("https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome")
  .then((prom) => prom.json())
  .then((data) => {
    colorScheme = data.colors;
    colorScheme.forEach((element) => {
      hexValues.push(element.hex.value);
    });

    color1.style.backgroundColor = `${hexValues[0]}`;
    color2.style.backgroundColor = `${hexValues[1]}`;
    color3.style.backgroundColor = `${hexValues[2]}`;
    color4.style.backgroundColor = `${hexValues[3]}`;
    color5.style.backgroundColor = `${hexValues[4]}`;
  });
