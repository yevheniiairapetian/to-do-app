# To-do-list app

## Description:
This repository contains a simple responsive to-do app developed with React, jQuery, and Bootstrap

## Key Features:

#### User guide

- There's a simple "How-To" guide for desktop and mobile users

#### User set-up

- Ability to create a user profile with a username (required) and a profile image (optional) (all saved to local storage)
- The initial set-up checks the username and profile image on validity (value and length for the username and image type and size for the profile image) 
- The username can be edited upon a click
- The app checks if the username is empty (restores the last change if empty)
- The profile image can be deleted after initial set-up

#### Working with lists

- Create \ edit\ delete \ to-do lists
- Add \ edit \ copy to-dos (one by one) and delete to-dos (one by one or all at once)
- Rearrange to-dos \ lists
- Drop to-dos from one list to another
- Mark to-dos as done (strike through)
- The app checks list titles on empty data (restores the last change if empty)
- Upon deleting the list \ all to-dos the user can confirm \ cancel their choice
- All lists are edited independently.

#### Filtering

- The app has a live search that filters the lists \ to-dos by the list name \ to-do text
  
#### UI / UX

- Some button clicks produce simple sound notifications for more interactivity and engagement
- Some UI elements use simple icons and animations for better UX
- The app is responsive thanks to media queries
- The lists display updates to the user upon typing \ editing \ deleting text in the lists, hence, the user instantly gets feedback when using the list features
- Toggle list view between expand (makes lists wider and taking each a separate row) \ collapse modes (makes lists narrower and taking each 1/3 of the row width)
- Every important change affecting the content of a list(s) \ user data requires the user to confirm it first (via a modal dialog) to avoid possible data loss

#### Auto-save and PWA functionality

- All user changes are automatically saved to local storage after any to-do \ list edits (no need to click any buttons to save)
- The app can be installed on desktop \ mobile devices resembling a native-like experince, ease of use, and offline notification

#### Resetting data

- All user data can be deleted (performs local storage clearing upon clicking a button)

## Technologies Used:
- HTML5
- CSS3
- React.js
- jQuery
- jQuery UI
- React Bootstrap
- PWA
- Service Worker

## When installed like a PWA App, users can:

- Enjoy a native-app experience.
- Have an improved user experience
- Experience cross-platform compatibility
- Make use of faster loading times
- Use offline accessibility
- Have a smaller size than a native desktop app
- Access the app quickly via a mobile home screen, a Windows/Mac taskbar, etc

Read more about the Progressive Web Apps [here](https://www.itaims.com/blog/benefits-of-progressive-web-apps-pwa-advantages-and-disadvantages)

## Project dependencies:

- jQuery for DOM manipulation and interactivity
- jQuery UI for sortability
- React as the Javascript library
- React Bootstrap for design/responsive design, components, PWA features
- Vercel for deployment

## Live Version:

The app is live [here](https://to-do-min.vercel.app/)

## Clone and Preview:

To clone and launch the app, follow these steps:
 
1. Use the command ```console git clone git@github.com:yevheniiairapetian/to-do-app```. Alternatively, download directly by clicking on <> Code button > Download ZIP.
2. Make sure you have Node installed on your machine. To check if you have Node installed, run the ```node -v``` command in the terminal. If Node is not installed, use the preferred package manager:
- For npm on Windows, run the ```npm install nodejs``` command 
- For Mac, run the ```brew install node``` command
- For Linux Debian/Ubuntu-based systems run the ```sudo apt-get install nodejs``` command
- For Red Hat/Fedora-based systems run the ```sudo yum install nodejs```
command
3. Get back to the project folder and use the ```cd to-do-app``` terminal command. 
4. Run the ```npm i``` command (or similar, depending on the package manager) to install the project dependencies
5. Then follow the scripts in the section below (for quick start, use ```npm start``` if you want to launch the app in the default browser)

## Available Scripts:

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Opens the app in the default browser at this address: [http://localhost:3000](http://localhost:3000) (if the 3000 port is not taken by another process). Or, you can manually open it.

The page will reload when you make changes.\
That means, you see the updates to your code live, no need to refresh.
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Contact:
Feel free to contact me via[ LinkedIn](https://www.linkedin.com/in/yevheniiairapetian/) or  
[email](mailto:contact@yevheniiairapetian.com) or 
via the contact information on my [portfolio](https://yevheniiairapetian.com/#/contact)

Also, if you have any suggestions, comments, questions, ideas, either regarding this project or in general, or you noticed some errors in the code, feel free to use the same contact data above to discuss.
