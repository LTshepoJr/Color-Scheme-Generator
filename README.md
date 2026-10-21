# Color Scheme Generator

A simple, interactive color palette generator built with **HTML, CSS, and vanilla JavaScript**. Choose a starting color, select a color harmony mode, and generate a coordinated palette using [The Color API](https://www.thecolorapi.com/).

Designed for anyone who needs quick color inspiration for websites, interfaces, illustrations, or other creative projects.

## Features

- **Choose a base color** with the browser's built-in color picker.
- **Explore eight color scheme modes:** Monochrome, Monochrome Dark, Monochrome Light, Analogic, Complement, Analogic Complement, Triad, and Quad.
- **Generate a five-color palette** from the selected color and mode.
- **See results instantly** as the color swatches and HEX labels update without reloading the page.
- **Click a HEX code to copy it** to your clipboard.
- **Get copy confirmation:** the selected HEX label briefly changes to a green “✓ Copied” message before returning to its original value.

## Built With

- **HTML5** — page structure and controls
- **CSS3** — layout, color swatches, and component styling
- **JavaScript (ES6+)** — event handling, API requests, and dynamic DOM updates
- **[The Color API](https://www.thecolorapi.com/)** — color scheme generation
- **[Google Fonts](https://fonts.google.com/)** — typography

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/LTshepoJr/Color-Scheme-Generator.git
cd Color-Scheme-Generator
```

### 2. Run the project locally

You can open `index.html` in a browser. For more reliable clipboard support, serve the project on `localhost`, for example with Python:

```bash
python -m http.server 5500
```

Then visit **[http://localhost:5500](http://localhost:5500)**.

Alternatively, use a local development server such as VS Code's Live Server extension.

> **Note:** The current repository contains `index.html`, `index.css`, and `index.js` rather than a Node package setup, so `npm install` and `npm start` are not required. An internet connection is needed to request new schemes from The Color API.

## How to Use

1. **Pick a color** using the color input at the top of the app.
2. **Choose a scheme** from the dropdown menu.
3. Click **Get Color Scheme** to request matching colors.
4. **Explore the palette** displayed in five vertical swatches.
5. **Click any HEX value** below a swatch to copy that code. A green **✓ Copied** confirmation appears for about two seconds.

## Available Color Schemes

| Mode                | Description                                           |
| ------------------- | ----------------------------------------------------- |
| Monochrome          | Variations of a single hue                            |
| Monochrome Dark     | Darker variations of a hue                            |
| Monochrome Light    | Lighter variations of a hue                           |
| Analogic            | Colors near one another on the color wheel            |
| Complement          | A base hue and its opposite                           |
| Analogic Complement | A combination of neighboring and complementary colors |
| Triad               | A three-part harmony around the color wheel           |
| Quad                | A four-part color harmony                             |

## How the API Works

When you select a color and mode, the app sends a GET request to The Color API's `/scheme` endpoint.

Example request:

```text
https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome
```

The JavaScript then:

1. Reads the selected HEX color and scheme mode.
2. Fetches the generated color data.
3. Extracts each color's `hex.value`.
4. Replaces the displayed swatches and HEX labels with the new results.
5. Uses a click listener on the HEX-label container to support copying even after the labels are replaced dynamically.

## Project Structure

```text
Color-Scheme-Generator/
├── index.html    # App layout and interactive controls
├── index.css     # Styling and color palette layout
├── index.js      # API requests, rendering, and copy behavior
└── README.md     # Project documentation
```

## Learning Highlights

This project demonstrates several useful frontend development concepts:

- Fetching and processing JSON data from an external API
- Transforming arrays with `.map()` and `.join()`
- Updating page content dynamically with `innerHTML`
- Handling click events and **event delegation** for dynamically rendered elements
- Using the **Clipboard API** and timed UI feedback
- Styling native form controls and arranging swatches with CSS Grid

## Browser Notes

- Copy-to-clipboard functionality generally works in a **secure context**, such as HTTPS or `localhost`.
- Some customized dropdown styling uses newer CSS select features, so its appearance may vary by browser.
- The current layout uses a fixed-size main container and may need additional responsive styling for narrow screens.

## Author

Created by **[LTshepoJr](https://github.com/LTshepoJr)**.

Explore the source code: **[Color Scheme Generator on GitHub](https://github.com/LTshepoJr/Color-Scheme-Generator)**.
