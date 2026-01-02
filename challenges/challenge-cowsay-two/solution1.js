// =================
// Stripped down cowsayer CLI,
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
// Use process.argv.slice(2) to get all command-line arguments
// slice(2) removes node path and script path, keeping only user arguments
const args = process.argv.slice(2).join("");

// 2. Make supplies for our speech bubble

let topLine = "_";
let bottomLine = "-";
let saying = args; // Store the command line argument

// 3. Make a cow that takes a string

function cowsay(saying) {
  // how will you account for the parameter being empty?
  if (!saying || saying.trim() === "") {
    console.log("Please provide a message for the cow to say!");
    console.log("Usage: node solution1.js <your message>");
    process.exit(1); // Exit with error code
  }

  // how will you make the speech bubble contain the text?
  const length = saying.length;
  const topBorder = " " + topLine.repeat(length + 2);
  const middleLine = `< ${saying} >`;
  const bottomBorder = " " + bottomLine.repeat(length + 2);

  const speechBubble = `${topBorder}\n${middleLine}\n${bottomBorder}`;

  // where will the cow picture go?
  const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

  // Return complete cowsay
  return speechBubble + cow;
}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
console.log(cowsay(saying));
