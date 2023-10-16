const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./shape");
const {writeFile} = require("fs/promises");

class SVG {
    constructor(){
        this.textElement,
        this.shapeElement
    }
    render (){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    } 
    makeText(message, color){
        if (message.length > 3 && 0){
            throw new Error("3 character maximum");
        }
        this.textElement = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${message}</text>`
    }
        makeShape(shape){
            this.shapeElement = shape.render();
        }
    }

    class Inquirer {
        run() {
            let shape;
            return inquirer
            .prompt([
                {
                    name: "shape",
                    type: "list",
                    message: "what shape would you like to use?",
                    choices: ["circle", "square", "triangle"]
                },
                {
                    name: "shapeColor",
                    type: "input",
                    message: "please enter a color for the shape"
                },
                {
                    name: "text",
                    type: "input",
                    message: "Please enter up to 3 letters for your logo's text",
                    validate: (text) => text.length <= 3 || "must be 3 or less characters"
                },
                {
                    name: "textColor",
                    type: "input",
                    message: "Please enter a color for the text"
                },
            ])

            .then(({ shape, shapeColor, text, textColor}) => {
                switch (shape) {
                    case 'circle':
                        shape = new Circle();
                        break;

                    case 'square':
                        shape = new Square();
                        break;
                    
                    case 'triangle':
                        shape = new Triangle();
                        break;                        
                }

                shape.setColor(shapeColor);
                const svg = new SVG();
                svg.makeText(text, textColor)
                svg.makeShape(shape)
                return writeFile("logo.svg", svg.render())

        .then(() => {
            console.log("generated logo.svg")
        })
        .catch((err) => {
            console.log(err)
        })
      })
     }
    }
    
    module.exports = Inquirer;