
describe('test multiple block',function(){

 
 it('login ',function(){
    browser.waitForAngularEnabled(false);  
    browser.get('https://stage.starfishsolutions.com/starfish-stage/support/login.html');
    
    browser.driver.sleep(10000);

    element(by.id('username')).sendKeys("ygold");;
    

    });


     

});
 