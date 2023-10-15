const shape = require('./Shape');

class Triangle extends shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `
        <svg width="200" height="200">
            <Triangle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="30px" font-family="Arial">${this.text}</text>
            </svg>
            `
    };
};

module.exports = Triangle;