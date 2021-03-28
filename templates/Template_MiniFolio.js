const source4 = document.getElementById("minifolio-text").innerHTML;

const template4 = Handlebars.compile(source4);

const context4 = {
  minifolio: "The following are smaller projects where I'm trying to put into practice some new frameworks, libraries and languages."
};
const compiledHtml4 = template4(context4);

const fill4 = document.getElementById('minifolio-description');
fill4.innerHTML = compiledHtml4;