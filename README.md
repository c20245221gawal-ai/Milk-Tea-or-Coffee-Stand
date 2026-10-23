
# BREW & BOBA ☕🧋

**Sip something wonderful.**

BREW & BOBA is a fictional milk tea and coffee stand website created
for a Midterm Practical Examination.

The website presents a modern drink shop concept with a warm coffee
palette, responsive menu cards, a dark mode toggle, and scroll-based
animations.

## Project Information

- Project: BREW & BOBA
- Type: Milk Tea and Coffee Stand
- Subject: Midterm Practical Examination
- Author: Your Name

## Technologies

- HTML5
- Tailwind CSS v4 Browser CDN
- Vanilla JavaScript
- GSAP 3.13.0
- GSAP ScrollTrigger 3.13.0

No additional frameworks or JavaScript libraries are used.

## File Structure

```text
brew-boba/
├── index.html
├── script.js
└── README.md
```

## Design System

### 60-30-10 Color Palette

The design uses a 60-30-10 color distribution as a visual guideline.

| Proportion | Color | Hex | Usage |
|---|---|---|---|
| 60% | Cream | `#FFF8EF` | Main backgrounds |
| 30% | Coffee Brown | `#493126` | Text, headings, and buttons |
| 10% | Caramel Gold | `#DDA15E` | Highlights and accents |

Supporting colors:

- Coffee Light: `#775642`
- Espresso: `#17110E`
- Espresso Card: `#261C17`
- Dark Text: `#F9EDE0`
- Dark Muted: `#D3BFAE`

The palette proportions are a design guideline rather than exact
measured percentages of every rendered pixel.

### Visual Style

**Minimalism with a Bento Grid layout**

The design uses clear typography, generous spacing, rounded cards,
and organized content blocks to keep the menu readable and visually
consistent across screen sizes.

### Design Tokens and Reusable Classes

The color tokens are defined in the Tailwind `@theme` block in
`index.html`.

Reusable component classes are defined using `@apply`:

- `.btn-primary`
- `.menu-card`
- `.eyebrow`

These classes help maintain consistent styles across the website.

## Website Sections

1. Header and navigation
2. Hero section with tagline and call-to-action buttons
3. About section
4. Menu section with three drink cards
5. Contact form with name, email, and message fields
6. Footer

## Interactive Features

- Dark mode toggle using `classList.toggle("dark")`
- Theme preference saved with `localStorage`
- GSAP page-load intro timeline
- Staggered entrance animation
- Timeline overlap using the position parameter
- Replay intro button
- ScrollTrigger section reveals
- Scroll-linked reading progress bar
- Reduced-motion preference support
- Responsive layout using Tailwind breakpoints

## Accessibility and Contrast

The website includes semantic HTML, linked form labels, required
fields, descriptive SVG labels, and visible keyboard focus styles.

WCAG AA contrast targets:

- Normal text: at least 4.5:1
- Large text: at least 3:1

Contrast checker:
https://webaim.org/resources/contrastchecker/

Measure the actual foreground and background combinations in both
light and dark modes before submission. Record the measured results
here; do not claim that every combination passes without testing.

## Run Locally

1. Download or clone this repository.
2. Open the folder in Visual Studio Code.
3. Confirm that `index.html`, `script.js`, and `README.md` are in
   the same directory.
4. Run `index.html` with Live Server.
5. Make sure you have an internet connection for the CDN libraries.

## GitHub Pages Deployment

1. Create a public GitHub repository named `brew-boba`.
2. Upload all three project files.
3. Open the repository's Settings.
4. Select Pages.
5. Choose "Deploy from a branch".
6. Select the `main` branch and `/ (root)` folder.
7. Save and wait for deployment.
8. Open the generated website URL and test all features.

## Suggested Commit History

Session A:

- `Build responsive Brew and Boba landing page`
- `Add dark mode and reusable design tokens`

Session B:

- `Add GSAP intro and ScrollTrigger animations`
- `Document project and prepare GitHub Pages deployment`

Make each commit after the corresponding work is completed.

## Important Notes

The menu prices are examples for a fictional business.

The contact form is a front-end demonstration. It does not send or
store messages.

The project requires internet access for Tailwind CSS, GSAP, and
ScrollTrigger CDNs.
# Milk-Tea-or-Coffee-Stand
