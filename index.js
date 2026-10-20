const getColorSchemeBtn = document.getElementById("get_color-scheme");
const colorPicker = document.getElementById("color-picker");
const colorSchemeMode = document.getElementById("color_scheme-mode");
const colorPalette = document.getElementById("color-palette");

getColorSchemeBtn.addEventListener("click", () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${colorSchemeMode.value}`,
  )
    .then((prom) => prom.json())
    .then((data) => {
      console.log(data);
      data.colors.map(({ hex }) => {
        console.log(hex.value);
      });
    });
});
