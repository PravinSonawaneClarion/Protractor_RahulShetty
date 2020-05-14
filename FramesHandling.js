describe('Handling Frames',function(){

 
    it('switching to frame and get text',function(){
     
        browser.waitForAngularEnabled(false);            //Using protractor for non angular js site
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');

        //browser.switchTo().frame("courses-iframe");

        browser.switchTo().frame(element(by.id("courses-iframe")).getWebElement());

        element(by.css('a[href="https://courses.rahulshettyacademy.com/sign_in"]')).getText().then(function(loginText){

        console.log(loginText);
        })



    });
});

 