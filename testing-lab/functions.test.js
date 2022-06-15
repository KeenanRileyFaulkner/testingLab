const { returnTwo, greeting, add, multiply, subtract, divide } = require("./functions");




describe('returnTwo', () => {
    test('should return 2 of type num', () => {
        expect(returnTwo()).toBe(2);
    });
});




describe('greeting', () => {
    test('returns "Hello, James"', () => {
        expect(greeting('James')).toBe('Hello, James.');
    });

    test('returns "Hello, Jill"', () => {
        expect(greeting('Jill')).toBe('Hello, Jill.');
    })
});




describe('Math functions', () => {

    describe('add', () => {
        test('adds 1 and 2 to get 3', () => {
            expect(add(1, 2)).toEqual(3);
        });
    
        test('adds 5 and 9 to get 14', () => {
            expect(add(5, 9)).toEqual(14);
        });
    });
    
    describe('subtract', () => {
        test('subtracts -1 from 5 to get 6', () => {
            expect(subtract(5, -1)).toEqual(6);
        });
    
        test('subtracts 100 from 99 to get -1', () => {
            expect(subtract(99, 100)).toEqual(-1);
        });
    });
    
    describe('multiply', () => {
        test('multiplies -2 and -3 to get 6', () => {
            expect(multiply(-2, -3)).toEqual(6);
        });
    
        test('multiplies 100 and 100 to get 10000', () => {
            expect(multiply(100, 100)).toEqual(10000);
        });
    });
    
    describe('divide', () => {
        test('divides 1 by 4 to get 0.25', () => {
            expect(divide(1, 4)).toEqual(0.25);
        });
    
        test('divides 999 by 9 to get 111', () => {
            expect(divide(999, 9)).toEqual(111);
        });

        test('divides by 0, should return undefined', () => {
            expect(divide(3, 0)).toEqual(undefined);
        })
    });
});