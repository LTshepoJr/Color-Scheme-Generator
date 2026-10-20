const getColorSchemeBtn = document.getElementById("get_color-scheme");
const colorPicker = document.getElementById("color-picker");
const colorSchemeMode = document.getElementById("color_scheme-mode");
const colorPalette = document.getElementById("color-palette");
const hexFooterValues = document.getElementById("hex_footer-values");

getColorSchemeBtn.addEventListener("click", () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${colorSchemeMode.value}`,
  )
    .then((prom) => prom.json())
    .then((data) => {
      console.log(data);
      const hexFooterHtml = data.colors
        .map(({ hex }) => {
          console.log(hex.value);
          return `<p>${hex.value}</p>`;
        })
        .join("");
      hexFooterValues.innerHTML = hexFooterHtml;

      const bgColorHtml = data.colors
        .map(({ hex }) => {
          return ` <div class="rectangle" style="background-color: ${hex.value}"></div> `;
        })
        .join("");
      colorPalette.innerHTML = bgColorHtml;
    });
});
