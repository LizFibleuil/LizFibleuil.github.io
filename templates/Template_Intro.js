const source = document.getElementById("intro-description").innerHTML;

const template = Handlebars.compile(source);

const context = {
  intro : "I'm a design-oriented full-stack developer who strives to create functionally beautiful web applications. I'm passionate about problem-solving and user experiences both in the digital and physical world "
};
const compiledHtml = template(context);

const fill = document.getElementById('description');
fill.innerHTML = compiledHtml;
