import GitHubRepo from "./codetorials/GitHubRepo/GitHubRepo.js";

const main = document.getElementById('codetorial-content');
main.innerHTML = GitHubRepo.render();
/* Github Repository
document.getElementById('github-repository').addEventListener('click', () => {
    main.innerHTML = GitHubRepo.render();
}); */

