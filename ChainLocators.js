describe('Chain Locators',function(){



    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
 
    it('Display result from table',function(){

        browser.get('https://juliemr.github.io/protractor-demo/');
        
        firstNumber.sendKeys(2);
        secondNumber.sendKeys(6);
        goButton.click();

        //chaining to get value from third column
        element(by.repeater('result in memory')).
        element(by.css('td:nth-child(3)')).
        getText().then(function(text){

            console.log(text);
        })
    
    });
});