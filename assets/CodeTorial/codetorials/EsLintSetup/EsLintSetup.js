const EsLintSetup = {
    render: () => {
        return `
            <div class='codetorial-body'>
                <h1>Adding code linting to your project</h1>
                <h2>What is code linting?</h2>
                <p>Linting is the automated checking of errors, stylistic issues and omissions of your code while you are working on it. This is done by using a lint tool that analyzes your code and points out what is wrong with it while you are writing it. Works similarly to the Spelling Check tool in Microsoft Word.</p>
                <h2>How to add code linting to our project?</h2>
                <p>For this specific tutorial, we’ll focus on using EsLint code linting which can be installed from Visual Studio’s extensions. Once installed let’s do the following steps to add it to our project. Something to note, it is always a good idea to add this at the beginning of the project. That way, you can check your code from the beginning.</p>
                <ol class='instruction-list'>
                    <li>At project’s root directory, let’s first install EsLint as a dependency. In order to do that we need to type the <code> NPM INSTALL -D ESLINT </code>. This also installs it as a dependency for the Development mode which is when we’ll be using it.  </li>
                    <li>Create a new file named .eslintrc.js at the project root directory. Within that new file we’ll be adding the code shown in the image below that defines the setting for the code linter. </li>
                    <li>Within that code you’ll notice that we defined two interesting things: (1) The extends and (2) Parser Options. The extends are a set of rules to which everything is being measured against. We need to install those rules by going back to the command line and using the <code>NPM INSTALL -D ESLINT-CONFIG-AIRBNB-BASE ESLINT-PLUGIN-IMPORT </code> The Parser Options are there to define what type of ES version we’ll be using. The code below is intended to be use for ES6 code (import, export configuration for example rather than require in ES5). </li>
                    <li>Finally, you can modify the different rules that the code linter is using. Define what it should ignore or not. </li>
                </ol>
                <div class='image-display' id='eslint-setup-image'></div>
                <figcaption class='image-caption'>EsLintrc File Code</figcaption>
            </div>`
    }
};

export default EsLintSetup;
