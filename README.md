# Create new React app

npm create vite@latest

# Install tailwindcss

npm install -D tailwindcss postcss autoprefixer

# Init the postcss and tailwind config file

npx tailwindcss init -p

# Add import header in index.css file

@tailwind base;
@tailwind components;
@tailwind utilities;

# Configure the tailwind template paths in tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./index.html", "./src/**/\*.{ts,tsx,js,jsx}"],
theme: {
extend: {},
},
plugins: [],
}

# Replace this code in tsconfig.json

{
"files": [],
"references": [
{ "path": "./tsconfig.app.json" },
{ "path": "./tsconfig.node.json" }
],

# This Code to be Added

"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/_": ["./src/_"]
}
}
}

# Replace this code to tsconfig.app.json

{
"compilerOptions": {
"tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
"target": "ES2020",
"useDefineForClassFields": true,
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"module": "ESNext",
"skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

# This Code to be Added

    /*To resolving the path for IDE*/
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }

},
"include": ["src"]
}

# Update vite.config.ts
npm install -D @types/node

# vite.config.ts
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  # Add this code
  ***Start***
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   ***End***
})

# Run the shadcn-ui init command to setup your project:
npx shadcn@latest init

# Configure components.json
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.js
✔ Updating src\index.css
✔ Installing dependencies.
✔ Created 1 file:
  - src\lib\utils.ts
Success! Project initialization completed.
You may now add components.


# You can now start adding components to your project.
npx shadcn@latest add button
npx shadcn@latest add sidebar
npx shadcn@latest add menubar
npx shadcn@latest add avatar
npx shadcn@latest add dropdown-menu
npx shadcn@latest add carousel
npx shadcn@latest add card

npm install react-router-dom@6

# Error may encounter
plugins: [require("tailwindcss-animate")],
          ^
ReferenceError: require is not defined

### Solution is 
import tailwindAnimate from 'tailwindcss-animate'
  plugins: [tailwindAnimate],



  npm install gh-pages --save-dev

   "homepage": "https://(github username).github.io/(repo name)",

   ,
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"