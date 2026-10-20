const getColorSchemeBtn = document.getElementById("get_color-scheme");
const colorPicker = document.getElementById("color-picker");
const colorSchemeMode = document.getElementById("color_scheme-mode");
const colorPalette = document.getElementById("color-palette");
const hexFooterValues = document.getElementById("hex_footer-values");
const paragraphs = document.querySelectorAll(".copy-text");

paragraphs.forEach((p) => {
  const originalText = p.textContent.trim();
  let resetTimer;

  p.addEventListener("click", async () => {
    try {
      // Copy the original HEX value
      await navigator.clipboard.writeText(originalText);

      // Change text and color
      p.textContent = "✓ Copied";
      p.classList.add("copied");

      // Reset timer when clicked repeatedly
      clearTimeout(resetTimer);

      // Restore original text after 2 seconds
      resetTimer = setTimeout(() => {
        p.textContent = originalText;
        p.classList.remove("copied");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  });
});

getColorSchemeBtn.addEventListener("click", () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${colorSchemeMode.value}`,
  )
    .then((prom) => prom.json())
    .then((data) => {
      const hexFooterHtml = data.colors
        .map(({ hex }) => {
          return `<p class="copy-text">${hex.value}</p>`;
        })
        .join("");
      hexFooterValues.innerHTML = hexFooterHtml;

      const bgColorHtml = data.colors
        .map(({ hex }) => {
          return `<div
            class="rectangle"
            style="background-color: ${hex.value}"
          ></div>`;
        })
        .join("");
      colorPalette.innerHTML = bgColorHtml;
    });
});

const resetTimers = new WeakMap();

hexFooterValues.addEventListener("click", async (event) => {
  const p = event.target.closest(".copy-text");

  if (!p || !hexFooterValues.contains(p)) return;

  // Store the HEX value so it won't change during "Copied"
  const hex = p.dataset.hex || p.textContent.trim();
  p.dataset.hex = hex;

  try {
    // Copy HEX to clipboard
    await navigator.clipboard.writeText(hex);

    // Display success message
    p.textContent = "✓ Copied";
    p.classList.add("copied");

    // Clear previous timer for this paragraph
    clearTimeout(resetTimers.get(p));

    // Restore original HEX after 2 seconds
    const timer = setTimeout(() => {
      p.textContent = p.dataset.hex;
      p.classList.remove("copied");
      resetTimers.delete(p);
    }, 2000);

    resetTimers.set(p, timer);
  } catch (error) {
    console.error("Failed to copy:", error);
  }
});
