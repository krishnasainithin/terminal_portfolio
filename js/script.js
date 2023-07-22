const BLACKLISTED_KEY_CODES = [ 38 ];	
const COMMANDS = {	
  help:	
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>.',	
  about:	
    "Hello World ! <br>I'm Krishna Sai Nithin Alimella. I'm a 21-year-old Programmer / Developer / CSIT Undergrad currently living in Hyderabad. A Motivated and enthusiastic Computer Science and Information Technology undergraduate seeking an entry-level position to apply acquired knowledge and skills in a professional environment. Committed to continuous learning with a passion for technology.",	
  skills:	
    '<span class="code">Languages:</span> Python, C, Java, HTML, CSS, JavaScript, React<br><span class="code">Frameworks:</span> Node.js, Django.<br><span class="code">Tools:</span> Bash, Git & GitHub, Windows, Linux.<br><span class="code">~Learning New Stack Everyday.</span>',	
  education:	
    "Bachelor of Technology — Computer Science and Information Technology,<br>Institute Of Aeronautical Engineering, Hyderabad.",	
  resume: "<a href='./RESUME 3317.pdf' class='success link'>resume.pdf</a>",	
  experience: '<span class="code">e-DAM: </span> <a href="https://edam.tech/" class="success link">Web Developer</a> - Learning and applying web development skills. [April 2021 – Aug 2021] <br><span class="code">CodeClause: </span> <a href="https://www.linkedin.com/feed/update/urn:li:activity:7060662057213317120/" class="success link">Python Development Intern</a> -  The Internship has been a transformative experience, allowing me to apply and enhance my Python programming skills in a real-world.[April 2023]<br>',	
  contact:	
    "Email: <a href='mailto:ksnithin.alimella@gmail.com' class='success link'>ksnithin.alimella@gmail.com</a> <br>LinkedIn : <a href='https://www.linkedin.com/in/krishnasainithin' class='success link'>krishnasainithin</a><br>Phone : (+91)6300368707",	
  hello:	
  "Hello?",	
  krishnasainithin:	
"<a href='https://www.google.com/search?q=krishnasainithin' class='success link'>krishnasainithin</a> "	
};	
let userInput, terminalOutput;	

const app = () => {	
  userInput = document.getElementById("userInput");	
  terminalOutput = document.getElementById("terminalOutput");	
  document.getElementById("dummyKeyboard").focus();	
  console.log("Application loaded");	

};	


const execute = function executeCommand(input) {	
  let output;	
  input = input.toLowerCase();	
  if (input.length === 0) {	
    return;	
  }	
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;	
  if (!COMMANDS.hasOwnProperty(input)) {	
    output += `<div class="terminal-line">no such command: ${input}</div>`;	
    console.log("Oops! no such command");	
  } else {	
    output += COMMANDS[input];	
  }	

  terminalOutput.innerHTML = `${	
    terminalOutput.innerHTML	
  }<div class="terminal-line">${output}</div>`;	
  terminalOutput.scrollTop = terminalOutput.scrollHeight;	
};	

const key = function keyEvent(e) {	
  const input = userInput.innerHTML;	

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {	
    return;	
  }	

  if (e.key === "Enter" || e.key ==='Return') {	
    execute(input);	
    userInput.innerHTML = "";	
    return;	
  }	

  userInput.innerHTML = input + e.key;	
};	

const backspace = function backSpaceKeyEvent(e) {	
  if (e.keyCode !== 8 && e.keyCode !== 46) {	
    return;	
  }	
  userInput.innerHTML = userInput.innerHTML.slice(	
    0,	
    userInput.innerHTML.length - 1	
  );	
};	

document.addEventListener("keydown", backspace);	
document.addEventListener("keypress", key);	
document.addEventListener("DOMContentLoaded", app);	


let text = ["Programmer .\\n", "<> Developer", "StillLearning :/",'CSIT Undergrad.' ];	
var counter = 1;var elem = document.getElementById("changeText");setInterval(change, 1500);function change(){elem.classList.add('hide');setTimeout(function () {elem.innerHTML = text[counter]; elem.classList.remove('hide'); counter++;if (counter >= text.length) {counter = 0;}}, 500);}	
