@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(97, 16, 36, 0.35), transparent 30%),
    #12070d;
  color: #f8edf0;
  font-family: 'Inter', sans-serif;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
.font-serif {
  font-family: 'Cormorant Garamond', serif;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

::selection {
  background: rgba(200, 128, 157, 0.35);
  color: white;
}
