# About this application

## Key Notes about the application

1. Its a dashboard showing details about the rocket launches. The backend of this application is not available or not developed rather this project/application is only a frontend application.

2. No backend technologies/framework was used to server data to the client side. Instead, the free public API of Space-X was used to serve data from the backend and the response data was displayed using the UI library React JS on the client side.

3. The frontend application is developed in React JS in the year 2021 & last commit was made during October-November 2021 prior to today dated April 5 2024 where this ReadMe file is being updated.

4. In the year 2021, React JS version 17, React-DOM version 17, React Scripts version 4 were used for development. And for responsiveness, Bootstrap version 4 as a CDN was used in the index.html file which is inside the public folder.

## Key Points related to Git & GitHub & branches of the repository

1. To emulate the working in real-world environment, in a production environment at software companies organizations, the best practices of how Git & GitHub is followed was employed in this repository.

2. Three branches was created namely Master Branch, Dev Branch and Feature Branch. Feature branch is the default branch here of this repository.

### Note about Point 2:

This issue happened as when I was learning React for the first time & I was new to Git, GitHub branching as well, plus the React Project that was bootstraped using the Create-React-App (CRA) template & then this template already initialises the default project it creates with a Git with a master branch.

Other Git, GitHub practices are followed & is mentioned in below Point No. 3

### Note about Point 2 ends here.

3. Feature branch being the default branch might be questionable to interviewers or viewers of this repository who are evaluating this repository. But as far as other practices are followed are being mentioned below step-wise from Point No. 4 of the current section.

4. All commits were made & developed on the Feature Branch of this repository first. All the features of this application that were developed incrementally were first were commited to the Feature Branch of repository.

5. Then a Pull Request(PR) was raised from the Feature Branch to Dev Branch of the repository. After, the merge was successful from Feature Branch to Dev Branch of this repository.

6. Then again a PR ras raised from the Dev Branch of the repository to Master Branch of the repository. After, merging the request from Dev Branch to Master Branch.

7. The Master branch holds the final tested & running code of the repository which then can be used for deployment.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was created/bootstraped in the year 2021 for first time & application was completed & all the commits were done. The last commit happened in November 2021 & was not modified until as of today on 5 April 2024 where the ReadMe file is being updated.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Note

The default project bootstrapped from the CRA template contained some Testing related JS files that were deleted during the process of cleaning-up the some files present in the initial project bootstrapped with CRA template as testing was not done for this application.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).

To learn React, check out the [React documentation](https://react.dev/).
