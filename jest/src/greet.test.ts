import {greet} from "./greet";

describe("greet", () => {
   it("should greet Paul", () => {
       let person = "Paul";
       let result = greet(person);
       expect(result).toEqual("Hello, Paul");
   })
});
