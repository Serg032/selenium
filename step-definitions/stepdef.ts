import { Given, Then, When } from "@cucumber/cucumber";
import * as assert from "assert";

function isItFriday(today: string) {
  if (today === "Friday") {
    return "TGIF";
  }
  return "Nope";
}
/**/
Given("today is Sunday", function () {
  this.today = "Sunday";
});
When("I ask whether it's Friday yet", function () {
  this.question = isItFriday(this.today);
});
Then("I should be told {string}", function (expected) {
  assert.strictEqual(this.question, expected);
});

Given("today is Friday", function () {
  this.today = "Friday";
});
