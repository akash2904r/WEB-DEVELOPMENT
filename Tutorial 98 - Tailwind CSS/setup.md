## How to setup Tailwind CSS

Step 1: Run the following commands:
```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update the 'tailwind.conf.js' file by adding the following into the content section:
```
content: ["*.html"]
```

Step 3: Create a new file 'src/input.css' and include the following in it:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Once Step 3 is done, a new file 'src/output.css' will be created. Include this file to your html
```
<link rel="stylesheet" href="src/output.css">
```

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```