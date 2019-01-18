var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Bushel 44", function() {

  this.timeout(30000);
  it("should send user to product page", function(done) {

    Nightmare({ show: true })
      .goto("https://bushel44-ui.herokuapp.com")
      .click("a[href='/products']")
      .evaluate(function() {
        return document.title;
      })
      .then(function(title) {
        expect(title).to.equal("Bushel 44 | Products");
        done();
      });
  });

  it("should present a link to user portal after login", function(done) {
    new Nightmare({ show: true })
      .goto("https://bushel44-ui.herokuapp.com/login")
      .type("#username", "sal")
      .type("#password", "s")
      .click("#login_button")
      .evaluate(function() {
        return document.querySelector("a[href='/protected']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });
});
