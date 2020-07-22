const source2 = document.getElementById("resume-text").innerHTML;

const template2 = Handlebars.compile(source2);

const context2 = {
  resume: "I'm a design-oriented full-stack developer who strives to create functionally beautiful web applications. I'm passionate about problem-solving and user experiences both in the digital and physical world "
};
const compiledHtml2 = template2(context2);

const fill2 = document.getElementById('resume-description');
fill2.innerHTML = compiledHtml2;