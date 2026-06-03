# Alice Portfolio

## File Structure

```
alice-portfolio/
│
├── index.html              ← Main HTML file (single page)
│
├── css/
│   └── style.css           ← All styles (variables, layout, animations)
│
├── js/
│   └── main.js             ← Scroll reveal, nav highlight, interactions
│
└── assets/
    └── images/
        ├── logo.svg            ← Your logo (top-left of sidebar)
        ├── hero-illustration.svg ← The hand-drawn line illustration
        ├── 2heal.jpg           ← 2-Heal Medical project screenshot
        ├── trendwear.jpg       ← Trend Wear project screenshot
        ├── spookyspells.jpg    ← Spooky Spells project screenshot
        ├── artin.jpg           ← Art-In project screenshot
        ├── signaling.jpg       ← Signaling video still
        └── goutnature.jpg      ← Goût Nature film still
```

## Setup in VS Code

1. Open the `alice-portfolio/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500`

## Adding Your Images

- Drop your images in `assets/images/`
- Match the filenames exactly as listed above (or update the `src` attributes in `index.html`)
- Recommended image dimensions: **1200×800px** minimum, JPG or WebP
- The site gracefully shows a dark placeholder if an image is missing

## Updating Content

All text content is in `index.html`:
- Hero tagline → look for `<h1>Hi I'm Alice...`
- Bio text → look for `<div class="hero-bio">`
- Each project → look for `<article class="project">`
- Footer links → look for `<footer class="footer">`

## Customising Colors

All colors are CSS variables at the top of `css/style.css`:

```css
:root {
  --green:    #c8f000;   /* Acid green accent */
  --dark:     #1a1a1a;   /* Main dark background */
  --light-bg: #e8e4dc;   /* Hero / sidebar background */
}
```

## Deployment (free)

- **GitHub Pages**: push to GitHub → Settings → Pages → deploy from main branch
- **Netlify**: drag and drop the folder at netlify.com/drop
- **Vercel**: `npm i -g vercel` then run `vercel` in the project folder
