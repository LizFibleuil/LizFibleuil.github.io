const ReactSetup = {
    render: () => {
        return `
            <div class='codetorial-body'>
                <h1>Starting a React Project</h1>
                <h2>What is React?</h2>
                <p>React is an open-source JavaScript library used at the Front-End to develop interactive user interfaces. The library uses components that encapsulate code that can render into the DOM or contains information used by other components. Components can pass data to other components. </p>
                <p>React is typically used for single-page applications. It allows for the creation of re-usable components, meaning that the same component could be used several times withing the application without the need to recreate it or take it to another project and keep its functionality. </p>
                <h2>How do I use it in our project?</h2>
                <p>We need to setup our file structure within the project correctly in order to install React into it. Besides that we should also install several node packages that help execute the various functions that will have within our app. </p>
                <div class='image-display' id='react-setup-image'></div>
                <figcaption class='image-caption'>React Project Setup</figcaption>
                <h2>What are those steps?</h2>
                <p>Before doing all these steps, try to start with by creating a Git Repo from the beginning and connecting it to GitHub. That way your project is always saved, and you can refer to different revisions</p>
                <ol class='instruction-list'>
                    <li>At project’s root directory, in the command line initiate a node project by doing the <code>NPM INIT</code> command and answer all the necessary project questions the terminal gives you. This command will create a package.json file that contains the initial scripts and the project information. It also keeps track of the dependencies for the app. </li>
                    <li>Time to create a React app. To do so, at the same project’s root directory folder use the <code>NPM INSTALL CREATE-REACT-APP -g </code>command if this has the create-react-app package has not been installed globally in the computer. If it has, then we can go ahead to the next step.  </li>
                    <li>In that same root directory, use the <code>CREATE-REACT-APP "app-name" </code>in the command line. This will create the folder where the react application will be developed from. Normally, to better describe what the Front-End and the Back-End folders are it is better if we do <code>CREATE-REACT-APP Front-End </code>as the command. That way the created folder is named after Front-End. </li>
                    <li>We should install the express package in order to be able to work on our back end. In this same root directory, use the <code>NPM INSTALL EXPRESS </code>command to install it. A couple of other packages that we should install from the beginning are: NODEMON & BODY-PARSER.</li>
                    <li>Depending on which type of database we’ll be using in the back end we would install the package at this moment. For PostgreSQL we would use the <code>NPM INSTALL PG </code>command, and for MongoDB we would use the <code>NPM INSTALL MONGOOSE </code>command.</li>
                    <li>From here, we’ll focus on creating the files for the Back-End. First, within that project root directory, create a new folder named Back-End.</li>
                    <li>Within that back-end folder let’s create a index.js file. In this file is where we’ll define the code for our server. We can continue to use ES5 for the back-end of the server, or we could use ES6 and then translate it using the Babel package.  </li>
                    <li>After these first steps, we would start adding the code required for our project for both the back-end and the front-end.</li>
                </ol>
            </div>`
    }
};

export default ReactSetup;
