$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tet/test.feature");
formatter.feature({
  "line": 1,
  "name": "adding items to the shopping cart",
  "description": "",
  "id": "adding-items-to-the-shopping-cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Customer should be able to add item successfully into basket",
  "description": "",
  "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the customer is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he chooses to add an \"\u003citem\u003e\" to the cart",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he should be able to do so with by \"\u003cclicking\u003e\" on the item and adding it to the to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the cart window opens with the item added",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket;",
  "rows": [
    {
      "cells": [
        "item",
        "clicking"
      ],
      "line": 12,
      "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket;;1"
    },
    {
      "cells": [
        "Bhuna Spice Pot",
        "//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a"
      ],
      "line": 13,
      "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket;;2"
    },
    {
      "cells": [
        "Goan Spice Pot",
        "//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a"
      ],
      "line": 14,
      "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Customer should be able to add item successfully into basket",
  "description": "",
  "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the customer is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he chooses to add an \"Bhuna Spice Pot\" to the cart",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he should be able to do so with by \"//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a\" on the item and adding it to the to cart button",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the cart window opens with the item added",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.theCustomerIsOnHomePage()"
});
formatter.result({
  "duration": 10918767557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bhuna Spice Pot",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.heChoosesToAddAnItemToTheCart(String)"
});
formatter.result({
  "duration": 808288949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.heShouldBeAbleToDoSoWithByOnTheItemAndAddingItToTheToCartButton(String)"
});
formatter.result({
  "duration": 11247981515,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theCartWindowOpensWithTheItemAdded()"
});
formatter.result({
  "duration": 30728,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Customer should be able to add item successfully into basket",
  "description": "",
  "id": "adding-items-to-the-shopping-cart;customer-should-be-able-to-add-item-successfully-into-basket;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the customer is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he chooses to add an \"Goan Spice Pot\" to the cart",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he should be able to do so with by \"//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a\" on the item and adding it to the to cart button",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the cart window opens with the item added",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.theCustomerIsOnHomePage()"
});
formatter.result({
  "duration": 4451014929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goan Spice Pot",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.heChoosesToAddAnItemToTheCart(String)"
});
formatter.result({
  "duration": 936563613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.heShouldBeAbleToDoSoWithByOnTheItemAndAddingItToTheToCartButton(String)"
});
formatter.result({
  "duration": 2284827690,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a\"}\nCommand duration or timeout: 2.26 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Rajs-MBP\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0.1, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6187e8a8-a3d2-e141-b084-f0b5bc99df21\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat tet.SearchItem.clickingOnItemExamples(SearchItem.java:31)\n\tat tet.MyStepdefs.heShouldBeAbleToDoSoWithByOnTheItemAndAddingItToTheToCartButton(MyStepdefs.java:37)\n\tat ✽.Then he should be able to do so with by \"//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a\" on the item and adding it to the to cart button(tet/test.feature:8)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027item_list\u0027]/div[2]/div/div[1]/div/div[3]/a\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Rajs-MBP\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.5\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/x_/3p82sq_937v7jnnq7zfjt71m0000gn/T/anonymous6069281021883245574webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/x_/3p82sq_937v7jnnq7zfjt71m0000gn/T/anonymous6069281021883245574webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/x_/3p82sq_937v7jnnq7zfjt71m0000gn/T/anonymous6069281021883245574webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/x_/3p82sq_937v7jnnq7zfjt71m0000gn/T/anonymous6069281021883245574webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/x_/3p82sq_937v7jnnq7zfjt71m0000gn/T/anonymous6069281021883245574webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.theCartWindowOpensWithTheItemAdded()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "customer should not be able to add item to the basket with out required details",
  "description": "",
  "id": "adding-items-to-the-shopping-cart;customer-should-not-be-able-to-add-item-to-the-basket-with-out-required-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "the customer is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "he searches for an item",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "adds it to the basket before entering the required details",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the item should fail to be added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.theCustomerIsOnHomePage()"
});
formatter.result({
  "duration": 8348298658,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heSearchesForAnItem()"
});
formatter.result({
  "duration": 2457762994,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.addsItToTheBasketBeforeEnteringTheRequiredDetails()"
});
formatter.result({
  "duration": 12618828729,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theItemShouldFailToBeAddedToTheCart()"
});
formatter.result({
  "duration": 665635216,
  "status": "passed"
});
});