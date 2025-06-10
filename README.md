![image](https://github.com/user-attachments/assets/dcb75952-cf52-44ca-b47c-c3709c14af3b)# RemWaste Live Page Rework



This project was made using *REACT & VITE*. The main Idea behind the project was to modernize and introduce a more lively feeling to a page in the website " wewantwaste.co.uk ". I went for a more lively feeling with a buzzing background and changed the progress bar to give a more fluid feel.






## TechStack

- React
- Vite
- TailwindCSS
- Typescript
- React query
- React Context API
- Github Pages

The project didn't really require any navigation to set up protected routes, so I didn't add any routing libraries. 


## Demo

You can find the live version of the page on this link https://youssof-kandil.github.io/RemWaste/

You can view the sandbox on this link https://codesandbox.io/p/github/Youssof-Kandil/RemWaste/main?import=true

Here are some screenshots of the project

- Hero section with progress bar.

![image](https://github.com/user-attachments/assets/8c5c21ac-68fa-4ba9-b179-62227d610f78)


- Skips and selection cards.

![image](https://github.com/user-attachments/assets/dfddc4c1-54b3-4761-a717-06c1ba2a7aa2)


- Selected Skip look showing the selected Skip and the bottom bar.

![image](https://github.com/user-attachments/assets/a72ba2fa-b808-42d4-9a77-e6423019734b)


-mobile view
![image](https://github.com/user-attachments/assets/79096035-310b-423f-aa94-eb8d103e9eda)

![image](https://github.com/user-attachments/assets/a107f283-e10d-4502-8aac-cf66ab85a335)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Youssof-Kandil/RemWaste.git
```

Go to the project directory

```bash
  cd RemWaste
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

Deployment was done directly to GitHub Pages.

by adding the following two commands to the package.json *scripts section*. We can deploy to GitHub Pages.

```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

also by adding the repo name in the vite.config file using this line,

```bash
base: "/RemWaste/",
```
Vite now knows where to source the code for deployment.


Now, in a terminal, I ran the following command to deploy.
```bash
  npm run deploy
```


## Documentation

To give more details about the project, let's go through how I built the application.


### Initialization
I initialized a new React TypeScript project using the templates from Vite. I then installed TailwindCSS from their official website using the Vite-compatible version. I then installed Tanstack React Query for my queries.

### setup

I organized the code structure to be the following. 

```
scr \
----components --> UI   
----context  
----hooks   
----types
```

Each folder included the functionality it names.

I then set up the  tailwind config file with the variable I needed

I also cleared out the App.css and included the code I needed in index.css



### Coding

For reusability, I made 2 reusable UI components, 
- Button 
- Card 

Each of them was customized using Tailwind and allowed for further customization since I was using *template literals* to add more class name values.

I then divided the project into 4 different components.
- Hero
 It included just filler info about buying the Skips. Purely for visual pleasure. Doesn't add functionality
 - Progress Bar
 was specially made to design a new bar. The bar is designed to be on the side of desktop screens and on top of mobile screens.
- Bottom Bar
 to show the selected Skip and the continue Button
 - Skip Selection Section
 included another reusable component, a generic Skip card, which you feed data into. It also included the API call to get the data. 

 ### API Integration
 Used React Query to make a custom hook. The hook was designed to catch and throw meaningful errors and make to allow caching and retrying.

### Context.
Decided to go with a context because I wanted to avoid unnecessary refreshes in the UI. It impacts performance and usability. So I made a context that handles selecting the SKIP. It was made purely so that the bottom bar can get the selected skip info without needed to refresh the main home page.


-
Thanks for the long read.
-

Best regards, 
Youssof Kandil
