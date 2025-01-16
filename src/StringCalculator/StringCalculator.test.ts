import { StringCalculator } from "./StringCalculator";

describe("StringCalculator", () => {
    let calculator: StringCalculator;
  
    beforeEach(() => {
      calculator = new StringCalculator();
    });
  
    test("should return 0 for an empty string", () => {
      expect(calculator.add(""))
        .toBe(0);
    });

    test("should return the number itself for a single number", () => {
        expect(calculator.add("1"))
          .toBe(1);
        expect(calculator.add("5"))
          .toBe(5);
      });
    
      test("should return the sum of two numbers", () => {
        expect(calculator.add("1,5"))
          .toBe(6);
        expect(calculator.add("10,20"))
          .toBe(30);
      });

      test("should return the sum of ten numbers (or any amount of numbers. )", () => {
        expect(calculator.add("1,5,8,3,8,2,9,3,1,3"))
          .toBe(43);
      });

      test("should handle newlines as delimiters", () => {
        expect(calculator.add("1\n2,3"))
          .toBe(6);
        expect(calculator.add("4\n5\n6"))
          .toBe(15);
      });

});