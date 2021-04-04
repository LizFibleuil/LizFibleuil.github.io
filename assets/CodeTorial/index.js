import GitHubRepo from "./codetorials/GitHubRepo/GitHubRepo.js";
import ReactSetup from "./codetorials/ReactSetup/ReactSetup.js";
import EsLintSetup from "./codetorials/EsLintSetup/EsLintSetup.js";

const main = document.getElementById('codetorial-content');
main.innerHTML = GitHubRepo.render();

/* Github Repository */
document.getElementById('github-repository').addEventListener('click', () => {
    main.innerHTML = GitHubRepo.render();
});
/* React Setup */
document.getElementById('react-setup').addEventListener('click', () => {
    main.innerHTML = ReactSetup.render();
});
/* EsLint Setup */
document.getElementById('eslint-setup').addEventListener('click', () => {
    main.innerHTML = EsLintSetup.render();
});
