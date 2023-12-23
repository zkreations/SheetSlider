<div align="center">
  <img width='50' src="https://raw.githubusercontent.com/zkreations/SheetSlider/master/.github/logo.png" align="center" />

  # SheetSlider

  <p>A pure CSS slider with no dependencies. Designed to be as lightweight and fast as possible.<p>

  <p><a href="https://zkreations.github.io/SheetSlider/"><strong> Live Demo &rarr;</strong></a></p>

  <img src="https://raw.githubusercontent.com/zkreations/SheetSlider/master/.github/screenshot.png" align="center" />
</div>

## Features

- Pure and modern CSS
- No dependencies
- Lightweight (minified ~ 1kb with [Brotli](https://www.multiutil.com/text-to-brotli-compress/))
- Fast and smooth
- Responsive (intrinsic ratio)
- Customizable with CSS and Sass variables
- Easy to use
- Multiple sliders on the same page
- Open source

## Install

### npm

```bash
npm install sheet-slider
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sheet-slider@3/dist/css/main.min.css"/>
```

## How to use

The slider only needs a basic HTML structure to work:

```html
<div class="sheet">
  <input id="a1" type="radio" name="a" checked>
  <input id="a2" type="radio" name="a">
  <input id="a3" type="radio" name="a">
  <div class="sheet-content">
    <div class="sheet-item">
      <img class="sheet-image" src="image.jpg">
    </div>
    <div class="sheet-item">
      <img class="sheet-image" src="image.jpg">
    </div>
    <div class="sheet-item">
      <img class="sheet-image" src="image.jpg">
    </div>
  </div>
  <div class="sheet-arrows">
    <label for="a1"></label>
    <label for="a2"></label>
    <label for="a3"></label>
  </div>
</div>
```

All content inside the `sheet-item` elements will be the ones that move. They don't necessarily have to be images, they can be any HTML element. 

The slider also has two optional elements, which are the navigation buttons and the descriptive texts. If you include them, the structure would look like this:

```html
<div class="sheet">
  <input id="a1" type="radio" name="a" checked>
  <input id="a2" type="radio" name="a">
  <input id="a3" type="radio" name="a">
  <div class="sheet-content">
    <div class="sheet-item">
      <img class="sheet-image" src="image.jpg">
      <!-- description -->
      <div class="sheet-meta">
        <h4 class="sheet-title">Example title</h4>
        <p class="sheet-text">Text description</p>
      </div>
    </div>
    <div class="sheet-item">
      <img class="sheet-image" src="image.jpg">
      <!-- description -->
      <div class="sheet-meta">
        <h4 class="sheet-title">Example title</h4>
        <p class="sheet-text">Text description</p>
      </div>
    </div>
    <div class="sheet-item">
      <img class="sheet-image" src="image.jpg">
      <!-- description -->
      <div class="sheet-meta">
        <h4 class="sheet-title">Example title</h4>
        <p class="sheet-text">Text description</p>
      </div>
    </div>
  </div>
  <!-- dots -->
  <div class="sheet-dots">
    <label for="a1"></label>
    <label for="a2"></label>
    <label for="a3"></label>
  </div>
  <!-- arrows -->
  <div class="sheet-arrows">
    <label for="a1"></label>
    <label for="a2"></label>
    <label for="a3"></label>
  </div>
</div>
```

**Note:** The `for` attribute of the labels must match the `id` of the inputs. For multiple sliders on the same page, the `name` attribute of the inputs must be different, and the `for` attribute of the labels must match the `id` of the inputs of the slider to which they belong.

## Customize

Define new values for the variables in your CSS file or in the `:root` selector. 

| Variable                | Description
| ----------------------- | -------------
| `--sheet-accent`        | Accent color
| `--sheet-ratio`         | Aspect ratio
| `--sheet-space`         | Space of the elements
| `--sheet-arrow-size`    | Size of the arrows
| `--sheet-duration`      | Animation duration
| `--sheet-dot-size`      | Size of the dots
| `--sheet-timing`        | Animation timing function
| `--sheet-text-color`    | Text color
| `--sheet-text-shadow`   | Text shadow
| `--sheet-title-size`    | Title font size
| `--sheet-text-size`     | Text font size
| `--sheet-arrow-padding` | Padding of the arrows
| `--sheet-arrow-bg`      | BG color of the arrows
| `--sheet-arrow`         | SVG of the arrows
| `--sheet-dot-gap`       | Space between the dots
| `--sheet-dot-bg`        | BG color of the dots
| `--sheet-dot-hover`     | BG color of the dots when hover

You can also modify the values in the `_variables.scss` file and compile it with Sass.

## Options

You can choose between two animation modes: `fade` and `vertical`. By default, the animation mode is `horizontal`. If you want to change it, you just have to add the corresponding class to the main container:

```html
<div class="sheet sheet-fade">
  ...
</div>
```

```html
<div class="sheet sheet-vertical">
  ...
</div>
```

## Supporting

If you want to help me keep this and more related projects always up to date, you can [buy me a coffee](https://ko-fi.com/zkreations) ☕. I will be very grateful 👏.

## License

**Sheet Slider** is licensed under the MIT License

