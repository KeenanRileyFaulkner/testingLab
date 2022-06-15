module.exports = {
    returnTwo: () => 2,

    greeting: (name) => `Hello, ${name}.`,

    add: (num1, num2) => {
        checkNumberTypes(num1, num2);
        return num1 + num2;
    },

    multiply: (num1, num2) => {
        checkNumberTypes(num1, num2);
        return num1 * num2;
    },

    divide: (num1, num2) => {
        checkNumberTypes(num1, num2);
        if(num2 === 0) {
            return undefined;
        }
        return num1 / num2;
    },

    subtract: (num1, num2) => {
        checkNumberTypes(num1, num2);
        return num1 - num2;
    }
}

const checkNumberTypes = (num1, num2) => {
    if(isNaN(num1)) {
        throw new TypeError(`Param of type ${typeof num1} must be number`);
    }

    if(isNaN(num2)) {
        throw new TypeError(`Param of type ${typeof num2} must be number`);
    }
}