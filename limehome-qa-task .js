var conf = require('../../nightwatch.conf.js');

module.exports = {
  'QA test limehome': function (browser) {  
    browser
      .url('https://limehome-qa-task.herokuapp.com/')
      .waitForElementVisible('body')
      .assert.titleContains('Online check-in | Limehome')
      .assert.visible('input[formcontrolname=lastName]')
      .assert.visible('input[formcontrolname=bookingReference]')
      .setValue('input[formcontrolname=lastName]', 'sajid')
      .setValue('input[formcontrolname=bookingReference]', 'xyz1234')
      .assert.visible('button[class=mat-button]')
      .click('button[class=mat-button]')
      .waitForElementVisible('input[id=mat-input-3]')
      .assert.containsText('#id=mat-input-3', 'sajid')
      .end();
    }
  };
