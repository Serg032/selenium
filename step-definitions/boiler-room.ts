import { Given, Then, When } from "@cucumber/cucumber";
import webdriver, { By, Key } from "selenium-webdriver";
import * as assert from "assert";
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given("I visit Worldcoo homepage", async function () {
  await driver.get("https://www.worldcoo.com/");
});
When("I click on close companies", async function () {
  await driver
    .findElement(By.className("hasHome hasSubmenu close company"))
    .click();
});

Then("I should see the result", async function () {
  let url = await driver.getCurrentUrl();
  let title = await driver.getTitle();
  console.log("URL", url);
  console.log("TITLE", title);
  assert.strictEqual(title, "Social commitment companies");
});
