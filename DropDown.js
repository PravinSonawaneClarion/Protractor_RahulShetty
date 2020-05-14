describe('test multiple block',function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton')); 

    function miniCalcuator(a, b, operation){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);

        element.all(by.tagName('option')).each(function(row){
             row.getAttribute('value').then(function(operator){

                if(operator==operation)
                row.click;

            })

        })


        goButton.click();
    }

    it('Opening Browser',function(){
    browser.get('https://juliemr.github.io/protractor-demo/');
    });

 
    it('calling different operation',function(){
    //miniCalcuator(2,3,'ADDITION');
  // miniCalcuator(4,5,'MULTIPLICATION');
    miniCalcuator(7,8,'SUBTRACTION');

    });
 
    it('Display result from all three rows',function(){
      
          //traverse every row third column
          element.all(by.repeater('result in memory')).each(function(row)
          {
              row.element(by.css('td:nth-child(3)')).getText().then(function(result){
      
                  console.log('row-wise result'+result)
      
              });
          });
      
      
         
      
    });



   


 
 });