// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
});
// describe('isNumeric', function(){
//     it('should be defined function', function() {
//         expect(typeof isNumeric).toBe("function");
//     });
//     it('should return a boolean value when called', function() {
//         expect(typeof isNimeric()).toBe("boolean");
//     });
//     it('should return true when passed the number 5', function() {
//         expect(isNumeric(5)).toBe(true);
//     });
//     it ("should return false when passed the string 'Jim Henson'", function() {
//         expect(isNumeric("Jim Henson")).toBe(false);
//     });
//     it("should return false when passed the array [1,2,3]", function() {
//         expect(isNumeric([1,2,3])).toBe(false);
//     });
//     it("should return false when passed an object", function() {
//         expect(isNumeric( {name: CarolBaskin, occupation: BigCatEnthusiast})).toBe(false);
//     });
// })