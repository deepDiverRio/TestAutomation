'use strict';

const { expect, should } = require('chai');
const assert = require('assert');
const { url } = require('inspector');
const { titleContains } = require('selenium-webdriver/lib/until');


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder();



describe("Delete a computer", done => {
    before(() => {
       
    });
   
    after(() => {
       // driver.quit();
    });

    beforeEach( () => {
        driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
           
       driver.get('http://computer-database.herokuapp.com/computers')

    });

    afterEach(() => {
       driver.quit();
    });
   

    it('He/she can successfully delete an existing computer', async function() {
        
        let title = await driver.findElement(By.xpath('//*[@id="main"]/h1'))
        .then(() => driver.findElement(By.id('main')))
        .then(() => visualTable => assert.strictEqual(visualTable, 'main'))
        .then(() => driver.findElement(By.xpath('//*[@id="pagination"]/ul/li[3]/a')).click())
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/table/tbody/tr[10]/td[1]/a')).click())
        .then(() => driver.findElement(By.className('btn danger')).click())
        .then(() =>  driver.findElement(By.xpath('//*[@id="main"]/div[1]')).getText())
        .then(confirmationMessage => assert.strictEqual(confirmationMessage, "Done! Computer has been deleted"))
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
       
    })

   

});