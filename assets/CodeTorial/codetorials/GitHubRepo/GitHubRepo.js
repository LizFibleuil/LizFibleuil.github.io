const imageSrc = './GitHub_Workflow_Diagram.jpg';
const GitHubRepo = {
    render: () => {
        return `
            <div class='codetorial-body'>
                <h1>Starting a GitHub Repository</h1>
                <h2>What is Git and Github?</h2>
                <p>Git is a software that allows us to keep track of the changes done to our project over time. Git records the changes done to the project by storing those changes and allowing us to reference them in the future. </p>
                <p>GitHub is cloud code hosting platform for our Git created repository. It makes it a lot easier for individuals and teams to work with Git for collaboration and version control because it allows us to access our files from anywhere. </p>
                <h2>How to add Git to our project?</h2>
                <p>In order to turn a project into a Git project we need to initiate it using the Command Line. The goal is to set up all the tools the project needs to begin tracking the changes. </p>
                <p>Git has a very specific workflow and has three parts in the local computer. The working directory is where we’ll be doing all of our work, the staging area where we’ll list all the files that will be saved into our repository and finally the repository itself where the files are permanently stored. After doing this locally, we want to push this repository to our cloud-base repository in GitHub. </p>
                <img src='./Images/GitHub_Workflow_Diagram.jpg' alt='Github WorkFlow Diagram' />
                <img src= '${imageSrc}' alt='Github WorkFlow Diagram'>
                <h2>What about GitHub?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>`
    }
};

export default GitHubRepo;
