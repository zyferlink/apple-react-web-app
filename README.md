# Apple Website Clone

## Project Overview
This repository contains the first stage of developing an Apple website clone using React and Tailwind CSS. The project is initialized with Vite as the build tool for its speed and simplicity.


## Stage 01 <br>Log: January 8, 2025

### Step-by-Step Process

#### 1. Create a New Folder and Open in VS Code
- Created a new folder with a meaningful name for the project.
- Opened the folder in Visual Studio Code.
- Opened the terminal in VS Code to initialize the project.

#### 2. Initialize a New Project
- Initialized a new Vite project with React template using the following command in the terminal:
  ```bash
  npm create vite@latest ./ -- --template react
  ```
  Alternatively, you can create the project in a new folder directly with:
  <br>

  *npm create vite@latest my-project -- --template react<br>
  cd my-project*
 



#### 3. Install Tailwind CSS
- Installed Tailwind CSS and its peer dependencies:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  ```
- Generated the configuration files for Tailwind CSS and PostCSS:
  ```bash
  npx tailwindcss init -p
  ```

#### 4. Configure Tailwind CSS
- Updated `tailwind.config.js` to include the paths of all template files:
  ```javascript
  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

#### 5. Add Tailwind Directives to CSS
- Added Tailwind's base, components, and utilities directives to `./src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

#### 6. Verify Tailwind CSS Integration
- Verified the Tailwind setup by creating a simple React component in `App.jsx`:
  ```jsx
  export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    );
  }
  ```

#### 7. Start the Development Server
- Ran the development server to ensure everything works as expected:
  ```bash
  npm run dev
  ```
- The terminal displays the following message: Ex:
  ```
  VITE v6.0.7  ready in 253 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
  ```
- Clicked on the `http://localhost:5173/` link to open the project in a web browser.
- Confirmed the output by viewing the "Hello world!" message styled with Tailwind CSS.

### Result
The project has been successfully initialized with Vite, React, and Tailwind CSS. A basic "Hello world!" styled with Tailwind utility classes is displayed, confirming the setup.

---

### Next Steps
- Build the homepage structure.
- Implement Apple website styling using Tailwind CSS.
- Add interactivity using React.

<hr>

Source: 
```
https://tailwindcss.com/docs/guides/vite
```

