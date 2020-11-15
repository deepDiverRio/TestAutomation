const { expect, assert } = require('chai');


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
 
var driver = new webdriver.Builder();

var url = "http://computer-database.herokuapp.com/computers";
var addUrl = "http://computer-database.herokuapp.com/computers/new";


describe("Add a new computer to computers list", done => {
 
    before(() => {
       
    });
   
    after(() => {
        driver.quit();
    });

    beforeEach(() => {
        driver = new webdriver.Builder()
           .forBrowser('chrome')
           .build();

        driver.get(url);
       
        var addButton = driver.findElement(By.xpath("//a[@href ='/computers/new']"));
        addButton.click();

    });

    afterEach(() => {
        driver.quit();
    });

    it("He/she can successfully add a new computer", done => {
        driver.get(addUrl)
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/h1')).getText(''))
        .then(editComputersTitle => assert.equal(editComputersTitle, "Add a computer")) 
        .then(() => driver.findElement(By.id('name')).sendKeys("NEW COMPUTER"))
        .then(() => driver.findElement(By.id('introduced')).clear())
        .then(() => driver.findElement(By.id('introduced')).sendKeys("3333-03-03"))
        .then(() => driver.findElement(By.id('discontinued')).clear())
        .then(() => driver.findElement(By.id('discontinued')).sendKeys("4444-04-04"))
        .then(() => driver.findElement(By.id('company')).click())
        .then(() => driver.findElement(By.xpath('//*[@id="company"]/option[3]')).click())
        .then(() => driver.findElement(By.className('btn primary')).click()) 
        .then(() => driver.findElement(By.className('alert-message warning')).getText())
        .then(alertMessage => assert.equal(alertMessage, "Done! Computer NEW COMPUTER has been created")) 
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
    });
    
    it("He/she can cancel addition of a new computer", done => {
        driver.get(addUrl)
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/h1')).getText(''))
        .then(editComputersTitle => assert.equal(editComputersTitle, "Add a computer")) 
        .then(() => driver.findElement(By.id('name')).sendKeys("NEW COMPUTER"))
        .then(() => driver.findElement(By.id('introduced')).clear())
        .then(() => driver.findElement(By.id('introduced')).sendKeys("3333-03-03"))
        .then(() => driver.findElement(By.id('discontinued')).clear())
        .then(() => driver.findElement(By.id('discontinued')).sendKeys("4444-04-04"))
        .then(() => driver.findElement(By.id('company')).click())
        .then(() => driver.findElement(By.xpath('//*[@id="company"]/option[3]')).click())
        .then(() => driver.findElement(By.className('btn')).click()) 
        .then(() => driver.findElement(By.name('f')).isDisplayed())
        .then(() => searchField => assert.equal(true))
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
    });

    it("He/she tries to add a new computer without a name", done => {
        driver.get(addUrl)
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/h1')).getText(''))
        .then(addComputersTitle => assert.equal(addComputersTitle, "Add a computer")) 
        .then(() => driver.findElement(By.id('introduced')).clear())
        .then(() => driver.findElement(By.id('introduced')).sendKeys("3333-03-03"))
        .then(() => driver.findElement(By.id('discontinued')).clear())
        .then(() => driver.findElement(By.id('discontinued')).sendKeys("4444-04-04"))
        .then(() => driver.findElement(By.id('company')).click())
        .then(() => driver.findElement(By.xpath('//*[@id="company"]/option[3]')).click())
        .then(() => driver.findElement(By.className('btn primary')).click()) 
        .then(()=> driver.findElement(By.className("clearfix error")).isDisplayed()) 
        .then(errorSelected => assert.isTrue(errorSelected))
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
    });

    it("He/she tries to add a new computer with wrong format dates", done => {
        driver.get(addUrl)
        .then(() => driver.findElement(By.xpath('//*[@id="main"]/h1')).getText(''))
        .then(addComputersTitle => assert.equal(addComputersTitle, "Add a computer")) 
        .then(() => driver.findElement(By.id('name')).sendKeys("NEW COMPUTER"))
        .then(() => driver.findElement(By.id('introduced')).clear())
        .then(() => driver.findElement(By.id('introduced')).sendKeys("3333-03-03"))
        .then(() => driver.findElement(By.id('discontinued')).clear())
        .then(() => driver.findElement(By.id('discontinued')).sendKeys("4444"))
        .then(() => driver.findElement(By.id('company')).click())
        .then(() => driver.findElement(By.xpath('//*[@id="company"]/option[3]')).click())
        .then(() => driver.findElement(By.className('btn primary')).click()) 
        .then(() => driver.findElement(By.className("clearfix error")).isDisplayed()) 
        .then(errorSelected => assert.isTrue(errorSelected))
        .then(() => driver.quit())
        .then(done)
        .catch(err => done(err));
    });

});