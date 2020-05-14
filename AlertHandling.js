describe('Handlinf Alerts',function(){

 
    it('Clicking OK for alerts',function(){
     
        browser.waitForAngularEnabled(false);            //Using protractor for non angular js site
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');

        element(by.id('confirmbtn')).click();

        //Switching to alert
        browser.switchTo().alert().accept();
    });
});

 