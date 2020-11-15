'use strict';

const { expect, should } = require('chai');
const assert = require('assert');
const { url } = require('inspector');
const { titleContains } = require('selenium-webdriver/lib/until');


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder();



describe("Edit a computer", done => {
    before(() => {
       
    });
   
    after(() => {
        driver.quit();
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
   

    it('He/she can successfully edit an existing computer', done => {
        
           
        let title = driver.findElement(By.xpath('//*[@id="main"]/h1'))
        .then(() => driver.findElement(By.id('main')))
        .then(() => visualTable => assert.strictEqual(visualTable, 'main'))
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/table/tbody/tr[1]/td[1]/a')).click())
        .then(() => driver.findElement(By.className('input')))
        .then(() => driver.findElement(By.id('name')).clear())
        .then(() => driver.findElement(By.id('name')).sendKeys("ACEROLA"))
        .then(() => driver.findElement(By.id('introduced')).clear())
        .then(() => driver.findElement(By.id('introduced')).sendKeys("1111-11-11"))
        .then(() => driver.findElement(By.id('discontinued')).clear())
        .then(() => driver.findElement(By.id('discontinued')).sendKeys("2222-12-12"))
        .then(() => driver.findElement(By.id('company')).click())
        .then(() => driver.findElement(By.xpath('//*[@id="company"]/option[2]')).click())
        .then(() => driver.findElement(By.className('btn primary')).click()) 
        .then(() => driver.findElement(By.className('alert-message warning')).getText())
        .then(alertMessage => assert.strictEqual(alertMessage, "Done! Computer ACEROLA has been updated"))
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
    })

    it('He/she try to edit a computer without a computer name', done => {
       

        let title = driver.findElement(By.xpath('//*[@id="main"]/h1'))
        .then(() => driver.findElement(By.id('main')))
        .then(() => visualTable => assert.strictEqual(visualTable, 'main'))
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/table/tbody/tr[1]/td[1]/a')).click())
        .then(()=> driver.findElement(By.className('btn')).click())
        .then(() =>  driver.findElement(By.name('f')).isDisplayed())
        .then(searchField => assert.strictEqual(searchField, true))
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
        
    })

});