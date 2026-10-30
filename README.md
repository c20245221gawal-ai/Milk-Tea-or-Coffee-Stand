
# BREW & BOBA — Coffee and Milk Tea Website

A responsive student business website for BREW & BOBA, a coffee and milk tea shop concept.

## Project Features

- Responsive website design
- Tailwind CSS styling
- Dark Mode and Light Mode
- Saves the selected theme using localStorage
- GSAP hero introduction animation
- GSAP ScrollTrigger animations
- Scroll progress bar
- Replay Intro button
- Automatic product counter
- Contact form with basic validation
- Automatic current year in the footer

## Products / Menu

| No. | Product | Price |
|---|---|---:|
| 1 | Classic Iced Latte | ₱80 |
| 2 | Brown Sugar Boba | ₱90 |
| 3 | Taro Milk Tea | ₱75 |
| 4 | Spanish Latte | ₱95 |
| 5 | Caramel Macchiato | ₱100 |
| 6 | Mocha Frappe | ₱110 |
| 7 | Matcha Milk Tea | ₱90 |
| 8 | Wintermelon Milk Tea | ₱85 |
| 9 | Strawberry Milk Tea | ₱95 |
| 10 | Oreo Milk Tea | ₱100 |

*Prices are examples for this student project.*

## Project Structure

```text
BREW-AND-BOBA/
│
├── index.html
├── script.js
└── README.md
```

## How to Run the Website

1. Create a folder named `BREW-AND-BOBA`.
2. Save your HTML code as `index.html`.
3. Save the JavaScript code as `script.js`.
4. Save this documentation as `README.md`.
5. Make sure all three files are inside the same folder.
6. Open `index.html` using your browser.

You can also use Visual Studio Code with the Live Server extension.

## Required JavaScript Libraries

The following script tags must be placed before `script.js` and before the closing `</body>` tag:

```html
<!-- GSAP -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>

<!-- GSAP ScrollTrigger -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>

<!-- Main JavaScript -->
<script src="./script.js"></script>
```

## HTML IDs and Classes Used

The JavaScript depends on these HTML selectors:

| Selector | Purpose |
|---|---|
| `#theme-toggle` | Dark Mode / Light Mode button |
| `#theme-icon` | Theme icon |
| `#theme-label` | Theme button label |
| `#replay-intro` | Replay animation button |
| `#scroll-progress` | Scroll progress bar |
| `#contact-form` | Contact form |
| `#form-note` | Form feedback message |
| `#current-year` | Footer year |
| `.hero-item` | Hero animation elements |
| `#hero-title` | Main heading |
| `.reveal` | Scroll reveal sections |
| `#menu .menu-card` | Product cards |

Do not remove or rename these selectors unless you also update the JavaScript.

## Contact Form Information

The contact form is currently a front-end demonstration only.

It validates the required fields and displays a thank-you message. It does not send emails or save messages to a database.

A backend or form service is required for real message submissions.

## Images and Internet Connection

The website uses external image URLs and CDN libraries.

An internet connection is required to load:

- Product images
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger

If an image does not display, replace its image URL in `index.html` with a working image URL or a local image path.

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- GSAP
- GSAP ScrollTrigger

## Project Purpose

This project demonstrates a responsive business website for a coffee and milk tea shop. It is created for student learning and website development practice.
# BREW-BOBA
