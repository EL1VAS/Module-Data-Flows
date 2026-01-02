// =================
// Stripped down cowsayer CLI,
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2. Make supplies for our speech bubble
let topLine = "_";
let bottomLine = "-";

// 3. Make a cow that takes a string

const cow = (saying) => {
  // how did you make the cow before?
  // Check if saying is empty
  if (!saying || saying.trim() === "") {
    console.log("Cow said nothing!");
    return;
  }

  // Create the speech bubble
  const length = saying.length;
  const topBorder = " " + topLine.repeat(length + 2);
  const middleLine = `< ${saying} >`;
  const bottomBorder = " " + bottomLine.repeat(length + 2);

  const speechBubble = `${topBorder}\n${middleLine}\n${bottomBorder}`;

  // The cow picture
  const cowDesign = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

  // Log complete cowsay
  console.log(speechBubble + cowDesign);
};

// 4. Use readline to get a string from the terminal
// (with a prompt so it's clearer what we want)
rl.question("What should the cow say?", (answer) => {
  cow(answer);
  rl.close();
});
