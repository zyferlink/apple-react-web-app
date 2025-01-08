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
Modify the `tailwind.config.js` file with the above configuration.
👉 View the updated | ->
   &nbsp; [ <code>tailwind.config.js</code>](./tailwind.config.js)



#### 2. Update index file with helpers


Update
index.css
as this | ->
   &nbsp; [ <code>index.css</code>](./src/index.css)



#### 3. Add images Assets

first delete assests folder in 'src'

inside 'public' folder create 'assets' folder inside create 'images' & 'videos' folder

add images* (already in this repo  | ->
   &nbsp; [ Images ](./public/assets/images/)) <br>
add videos from below link (couse it is not in this repo)
```
https://drive.google.com/drive/folders/193simR5ud2I4ChhXN8cT-ZMAibI7DMQR?usp=sharing
```


#### 4. Add model Assets
inside 'public' folder create 'models' folder

add scene.glb
(which is already in this repo | ->
   &nbsp; [ models ](./public/models/))


#### 5. util file for use assests

inside 'src' folder create 'utils' folder
create file 'index.js'

Update
index.js
as this | ->
   &nbsp; [ <code>index.js</code>](./src/utils/index.js)


#### 6. constant file for the app

inside 'src' folder create 'constants' folder
create file 'index.js'

Update
index.js
as this | ->
   &nbsp; [ <code>index.js</code>](./src/constants/index.js)


#### all done
finally go to `index.html` file and change the title and icon as follow

| ->
   &nbsp; [ <code>index.html</code>](./index.html)

after this
run
   npm run dev

open 
Local:   http://localhost:{port#}/

see you in next step to start development




