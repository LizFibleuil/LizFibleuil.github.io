const source3 = document.getElementById("codefolio-text").innerHTML;

const template3 = Handlebars.compile(source3);

const context3 = {
  codefolio: "This is a collection of some projects I've done in the past. "
};
const compiledHtml3 = template3(context3);

const fill3 = document.getElementById('codefolio-description');
fill3.innerHTML = compiledHtml3;