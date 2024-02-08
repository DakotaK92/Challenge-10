// parent class that will extend to children classes (Circle, Square, Triangle)
class Shape { // from the cildren class, push using this parent function
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

module.exports = Shape; // export shape