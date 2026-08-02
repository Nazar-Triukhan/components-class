```css
/* Global Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  line-height: 1.1;
}

/* Links */
a {
  color: inherit;
  text-decoration: none;
}

/* Media */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

img {
  height: auto;
}

/* Forms */
button,
input,
textarea,
select {
  font: inherit;
}

button {
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
}

/* Lists */
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Selection */
::selection {
  background: #000;
  color: #fff;
}
```
