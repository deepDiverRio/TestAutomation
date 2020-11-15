'use strict';

const { expect, assert, should } = require('chai');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


var driver = new webdriver.Builder();

var url = "http://computer-database.herokuapp.com/computers";
var url_wrong = "http://computer-database.herokuapp.com/computersfghfghf";

  
describe("Initial state", () => {

    before(() => {
        
    });

    after(() => {
        driver.quit();
    });

    beforeEach(() => {
        driver = new webdriver.Builder()
           .forBrowser('chrome')
           .build();
    });

    afterEach(() => {   
        driver.quit();
    });


    it("He successfully launches Home page with a proper url", done => {
        driver.get(url)
            .then(() =>  driver.getTitle())
            .then(pageTitle => assert.equal(pageTitle, "Computers database"))
            .then(() =>  driver.findElement(By.name('f')).isDisplayed())
            .then(filterFieldDisplayed => assert.isBoolean(true))
            .then(() =>  driver.findElement(By.id('searchsubmit')).isDisplayed())
            .then(searchButton => assert.isBoolean(true))
            .then(() =>  driver.findElement(By.id('add')).isDisplayed())
            .then(addButton => assert.isBoolean(true))
            .then(() =>  driver.findElement(By.xpath('//*[@id="main"]/table')).isDisplayed())
            .then(computersTable => assert.isBoolean(true))
            .then(() =>  driver.findElement(By.xpath('//*[@id="pagination"]/ul/li[1]/a')).isEnabled())
            .then(previousButton => assert.isBoolean(false))
            .then(() =>  driver.findElement(By.className('next')).isEnabled())
            .then(nextButton => assert.isBoolean(true))
            .then(() => driver.quit())
            .then(done)
            .catch(err => done(err));
    });

    it("He gets an error when using wrong url", done => {
        driver.get(url_wrong)
            .then(() =>  driver.findElement(By.xpath('/html/body/h1')).getText())
            .then(errorMessage => assert.equal(errorMessage, "Action not found"))
            .then(() => driver.quit())
            .then(done)
            .catch(err => done(err));
    });


});