# Apple Website Clone

## Project Overview

This repository contains the first stage of developing an Apple website clone using **React** and **Tailwind CSS**. The project is initialized with **Vite** for its speed and simplicity, providing a modern development environment.


<br>

## Stage 02: Add Resources  
**Log Date:** January 8, 2025  

This stage involves setting up essential resources like colors, assets, and helper files to prepare the project for further development.

<hr>
<br>

### Step-by-Step Process

#### 1. Add Custom Colors
- Update the color palette in the Tailwind CSS configuration file.  
  Example configuration:  
  ```js
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
    ```
- Modify the `tailwind.config.js` file with the above configuration.  <br>
👉 View the updated | ->
   &nbsp; [ <code>tailwind.config.js</code>](./tailwind.config.js)


#### 2. Update the Global Stylesheet

- Enhance the `index.css` file with necessary helper classes and styles.  <br>
  👉 View the updated | ->
   &nbsp; [`index.css`](./src/index.css)


#### 3. Add Image and Video Assets  
- **Organize Assets**:  
  1. Delete the existing `assets` folder in the `src` directory.  
  2. Create a new `assets` folder inside the `public` directory.  
  3. Inside the `assets` folder:  
     - Create an `images` folder.  
     - Create a `videos` folder.

- **Add Images**:  
  Place the images (available in the repository) inside the `public/assets/images` folder.  
  👉 [View images in the repository](./public/assets/images/)

- **Add Videos**:  
  Download videos from the following link and place them in the `public/assets/videos` folder:  
  [Download Videos from Google Drive](https://drive.google.com/drive/folders/193simR5ud2I4ChhXN8cT-ZMAibI7DMQR?usp=sharing)


#### 4. Add Model Assets  
- Inside the `public` folder, create a new folder named `models`.  
- Add the `scene.glb` file (available in the repository) to this folder.  
  👉 [View the `models` folder](./public/models/)



#### 5. Create a Utility File for Asset Management  
- Inside the `src` directory, create a folder named `utils`.  
- Add a new file named `index.js` inside the `utils` folder.  
- Update the /src/utils/`index.js` file as required.  
  👉 [View the updated `index.js`](./src/utils/index.js)



#### 6. Create a Constants File for App Configuration  
- Inside the `src` directory, create a folder named `constants`.  
- Add a new file named `index.js` inside the `constants` folder.  
- Update the /src/constants/`index.js` file as required.  
  👉 [View the updated `index.js`](./src/constants/index.js)



#### 7. Finalize the `index.html` File  
- Update the `index.html` file:  
  1. Change the website title.  
  2. Update the favicon.  
  👉 [View the updated `index.html`](./index.html)


### Run the Application  
After completing the above steps:  
1. Run the development server using the command:  
   ```bash
   npm run dev
    ```
2. Open the local development server in your browser:<br>
    ex: Local: ```http://localhost:{port#}/```


<hr>
See you in the next step for the actual development process! 🚀




