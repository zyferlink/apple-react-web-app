# Apple Website Clone

## Project Overview

This repository contains the first stage of developing an Apple website clone using **React** and **Tailwind CSS**. The project is initialized with **Vite** for its speed and simplicity, providing a modern development environment.


<br>

## Stage 06: Implement 3D Model View Component  
**Log Date:** January 9, 2025  

This stage focuses on implementing a 3D model view component using Three.js and React Three Fiber to add an interactive 3D experience.


<hr>
<br>

### Step-by-Step Process


#### 1. Model Component Implementation  

- Build a basic model section.  

👉 [View the updated `Model.jsx` Component](./src/components/model3d/Model.jsx)

**Note:**  
You can see the changes in real time during the development phase.


<br>

<hr>

#### 2. Model View Component Implementation  

- Build a basic Model View section.  

👉 [View the updated `ModelView.jsx` Component](./src/components/model3d/ModelView.jsx)

**Note:**  
You can see the changes in real time during the development phase.


<br>

<hr>


#### 3. Install Three.js and Dependencies  

- Install the required packages for Three.js and React Three Fiber.  

```bash
npm install three @react-three/drei @react-three/fiber
```


<br>

<hr>

#### 4. Add Lights Component  

- Group different lights and light formers. Use the group to organize lights, cameras, meshes, and other objects in the scene.  

👉 [View the updated `Lights.jsx` Component](./src/components/model3d/Lights.jsx)
<br>

<hr>

#### 5. Add iPhone JSX Component  

- 🎮 Convert GLTF files into JSX components using the following repository:  
  [gltfjsx Repository](https://github.com/pmndrs/gltfjsx)  

1. Upload `assets/models/scene.glb` and convert.  
2. Copy the converted JSX code and paste it into `IPhone.jsx`.  

👉 [View the updated `IPhone.jsx` Component](./src/components/model3d/IPhone.jsx)

<br>

<hr>


#### 6. Update iPhone JSX Component  

- Add code to enable material texture changes for the model.  

👉 [View the updated `IPhone.jsx` Component](./src/components/model3d/IPhone.jsx)

<br>

<hr>


#### 7. Add Loading UI Component  

- Create a loading text UI with styling.  

👉 [View the updated `Loader.jsx` Component](./src/components/model3d/Loader.jsx)

<br>

<hr>


#### 8. Add Animation with GSAP Timeline Component  

- Create animations for the model using a GSAP timeline.  

👉 [View the updated `animations.js` Component](./src/utils/animations.js)

<br>

<hr>


#### 9. Update Model View Component Implementation  

- Update the Model View section with animation and interactivity.  

👉 [View the updated `ModelView.jsx` Component](./src/components/model3d/ModelView.jsx)

**Note:**  
You can see the changes in real time during the development phase.

<br>

<hr>


#### 10. Update Model Component Implementation  

- Update the Model section to include additional features and styling.  

👉 [View the updated `Model.jsx` Component](./src/components/model3d/Model.jsx)

**Note:**  
You can see the changes in real time during the development phase.


<br>

<hr>


### Run the Application  
After completing the above steps:  
1. Run the development server using the command:  
   ```bash
   npm run dev
    ```
2. Open the local development server in your browser:<br>
    ex: Local: ```http://localhost:{port#}/```

<br>

<hr>
See you in the next step for the development process! 🚀




