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
                <div class='image-display' id='git-workflow'></div>
                <figcaption class='image-caption'>Git Workflow Diagram</figcaption>
                <h2>What about GitHub?</h2>
                <p>After creating a Git repository in our local computer, we can then upload that repository to GitHub. In order to do that we need to follow the next steps: </p>
                <ol class='instruction-list'>
                    <li>Navigate to the root directory/the directory where the Git repository was created for the project.</li>
                    <li>Check all the status of the files within the folder by using the <code>git status</code> command. You’ll be able to tell which files have been modified and need to be added to the staging area. If there are files that need to be committed, then do so before proceeding. </li>
                    <li>On GitHub, create a new repository and give it a unique name. Normally a name to match the project’s name. </li>
                    <li>After creating the repository, GitHub will take us to the repository page. Make sure that the selections at the top are for HTTPs so we can connect this page to our local Git repository.</li>
                    <li>Currently the repository is empty, to fill it up we need to copy the commands listed under the title “…or push an existing repository from the command line. and paste into the Command Line. Running these commands create a remote repository and push our files into the GitHub created repository. </li>
                    <li>When asked for username and password input those used in GitHub.</li>
                    <li>If you find yourself modidying your files you just need to commit those once again to your local Git repository and then use the command <code>git push</code> to upload them to GitHub. </li>
                </ol>
            </div>`
    }
};

export default GitHubRepo;
