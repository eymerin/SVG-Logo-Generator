// Import Inquirer
const inquirer = require("inquirer");

// Import file system
const fs = require("fs");

// Import shape classes
const { Triangle, Square, Circle } = require("./lib/shapes.js");

// Write SVG file with user answers to inquirer prompts
function writeToFile(fileName, answers) {

    // Creates string object
    let svgString = "";

    // Sets dimensions of logo container
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    // <g> tag around <text> so texts is displayed in front
    svgString += "<g>";

    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;
  
    // creates shapes based on user input
    let shapeChoice;

    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      svgString += `<polygon points="100, 15 200, 200 0, 200" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      svgString += `<rect x="-100" width="300" height="200" fill="${answers.shapeColor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgString += `<circle cx="100" cy="100" r="80" fill="${answers.shapeColor}"/>`;
    }
  
    // creates text content based on user input
    svgString += `<text x="98" y="120" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

    // Closing tags
    svgString += "</g>";
    svgString += "</svg>";
  
    // Uses file system to generate svg file, and either handles errors or logs to console 
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }

// Inquirer prompts user for logo details
function promptUser() {
    inquirer
      .prompt([
        // Ask for text values
        {
          type: "input",
          message:
            "What text do you want in the logo? (Enter 3 characters or less)",
          name: "text",
        },
        // Ask for text color
        {
          type: "input",
          message:
            "What color do you want the text color to be? (Enter color-name or hexidecimal value)",
          name: "textColor",
        },
        // Ask for shape
        {
          type: "list",
          message: "What shape would you like the logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        // Ask for shape color
        {
          type: "input",
          message:
            "What color do you want the shape to be? (Enter color-name or hexidecimal value)",
          name: "shapeColor",
        },
      ])
      .then((answers) => {
        // Error handling for text prompt
        if (answers.text.length > 3) {
          console.log("You must enter 3 characters or less");
          promptUser();
        } else {
          // Create SVG file
          writeToFile("logo.svg", answers);
        }
    });
}

// Calling promptUser function so inquirer prompts fire off when application is ran
promptUser();