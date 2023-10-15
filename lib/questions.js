const questions = [
    //shape
    {
        name: 'shape',
        message: 'What shape would you like to use?',
        type: 'list',
        choices: ['circle', 'triangle', 'square']
    },
    //color
    {
        name: 'shapeColor',
        message: 'What color would you like to use for the shape?',
        type: 'input',
        default: 'blue'
    },
    //text
    {
        name: 'text',
        message: 'What text would you like to use? (3 char limit)',
        type: 'input',
        validate: (answer) => {
            if (answer.length >3) {
                return console.log("text must be 3 characters or less");
            }
            return true;
            }
        },
        //text color
        {
            name: 'textColor',
            message: 'What color would you like the text to be?',
            type: 'input',
        }
];

module.export = questions;