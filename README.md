# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm install`

Will install all npm modules that is necessary for starting the project.

## Before starting the app

In .env file we need to put api key under REACT_APP_API_KEY variable. 
The key will be available here [https://newsapi.org/](https://newsapi.org/) after registration.

The first page showed the latest news. 
Clicking on any category, it will be called a query with category param and country which is set to "us".
After api calling, data is cached for 24h in browser memory with react-query.
If there is no caching data, it will call API again.

Layout contains a header with a logo and search which is implemented as frontend search by name and it searches the current displayed data from the api. 
The second thing on the layout is the navigation category and the main component, which will show data depending
on the category selected.

Styles from component are written in scss, following the ITCSS standard for scss structure. 
All styles are in styles folder.

For testing, it is used jest and react-testing library.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Runs all files with test.tsx.

### `npm prettier`

Format the code with prettier rules.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
