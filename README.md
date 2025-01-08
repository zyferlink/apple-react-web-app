# Apple Website Clone

## Project Overview
This repository contains the first stage of developing an Apple website clone using React and Tailwind CSS. The project is initialized with Vite as the build tool for its speed and simplicity.

<br>

## Stage 02 : Add Resource 
#### Log: January 8, 2025
<hr>
<br>

### Step-by-Step Process

#### 1. Add colors
`tailwind.config.js`

 colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
```


#### 2. Initialize a New Project


