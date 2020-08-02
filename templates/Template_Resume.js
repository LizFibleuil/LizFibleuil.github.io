const source2 = document.getElementById("resume-text").innerHTML;

const template2 = Handlebars.compile(source2);

const context2 = {
  resume: "Efficient and self-motivated project lead with over 7 years of experience in designing, leading, and collaborating with a multi-disciplinary team. With an excellent ability to transform client and stakeholder’s needs into succcesful outcomes, I seek to leverage my passion for great design and user experience as a Full-Stack Developer. "
};
const compiledHtml2 = template2(context2);

const fill2 = document.getElementById('resume-description');
fill2.innerHTML = compiledHtml2;