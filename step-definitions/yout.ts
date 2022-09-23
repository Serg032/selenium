import { After, Before, Then, When } from "@cucumber/cucumber";
import * as assert from "assert";

let sum = 0;

/*Before(function () {
  console.log("BEFORE");
});
After(function () {
  console.log("AFTER");
});
When("I add {int} and {int}", function (int, int2) {
  sum = int + int2;
});
Then("the result should be {int}", function (int) {
  assert.strictEqual(sum, int);
});
*/
