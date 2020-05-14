var obj=  require("./POMcalculatorPage.js");  
var data=  require("./Data/dataInput.js");
var using = require('jasmine-data-provider');

beforeAll(function(){
    obj.get();

});

describe('test DataDriven testing ',function(){
    

 

    using(data.dataDriven, function(data, description){


        it('Using Data Provider'+description ,function(){

         
            obj.firstinput.sendKeys(data.firstInput);
            obj.secondinput.sendKeys(data.secondInput);
            obj.goButton.click();  
            //obj.result.getText().then(function(text){
            //   console.log(text);
            //});
            expect(obj.result.getText()).toBe(data.result); // for test to show result there should be expect
      
      
      
           
         });

    })

});
 