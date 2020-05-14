var obj=  require("./POMcalculatorPage.js");   

describe('test POM ',function(){

   it('Using objects from POM',function(){

      obj.get();   
      obj.firstinput.sendKeys(2);
      obj.secondinput.sendKeys(6);
      obj.goButton.click();  
      obj.result.getText().then(function(text){
         console.log(text);
      });


     
   });
});
 