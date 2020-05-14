describe('test multiple block',function(){



    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    

 it('Add 2 and 6',function(){

    browser.get('
    ');
     firstNumber.sendKeys(2);
     secondNumber.sendKeys(6);
     goButton.click();
     //console.log(resultText.getText()); gives promise error
     element(by.className('ng-binding')).getText().then(function(text){

        console.log(text);

     });


     
 });
});
 