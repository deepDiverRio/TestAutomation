'use strict';

const { expect, assert, should } = require('chai');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder();

var url = "http://computer-database.herokuapp.com/computers";

describe("Filter the computer list", () => {

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


    it("He can successfully filter the list of computers by computer name", done => {
        driver.get(url)
            .then(() =>  driver.getTitle())
            .then(pageTitle => assert.equal(pageTitle, "Computers database"))
            .then(() =>  driver.findElement(By.name('f')).sendKeys('ARRA'))
            .then(() =>  driver.findElement(By.id('searchsubmit')).click())
            .then(() =>  driver.findElement(By.name('f')).getAttribute('value'))
            .then(filterFieldDisplayedAfter => assert.equal(filterFieldDisplayedAfter, "ARRA"))

            .then(() => driver.quit())
            .then(done)
            .catch(err => done(err));

   
    });

    it("He sees empty list of computers when filter doesn't match any existing name", done => {
        driver.get(url)
            .then(() =>  driver.getTitle())
            .then(pageTitle => assert.equal(pageTitle, "Computers database"))
            .then(() =>  driver.findElement(By.name('f')).sendKeys('Idonotexist'))
            .then(() =>  driver.findElement(By.id('searchsubmit')).click())
            .then(() =>  driver.findElement(By.name('f')).getAttribute('value'))
            .then(filterFieldDisplayedAfter => assert.equal(filterFieldDisplayedAfter, "Idonotexist"))
            .then(() =>  driver.findElement(By.xpath('//*[@id="main"]/h1')).getText())
            .then(noComputersTitle => assert.equal(noComputersTitle, "No computers found"))
            .then(() =>  driver.findElement(By.xpath('//*[@id="main"]/div[2]/em')).getText())
            .then(noneComputersMessage => assert.equal(noneComputersMessage, "Nothing to display"))
            .then(() => driver.quit())
            .then(done)
            .catch(err => done(err));
    });


});