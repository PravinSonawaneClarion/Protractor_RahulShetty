describe('test multiple block',function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    
    
 

 function add(a, b){
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
 }

 it('Opening Browser',function(){
    browser.get('https://juliemr.github.io/protractor-demo/');
});

 
 it('calling add method',function(){
    add(2,3);
    add(4,5);
    add(7,8);

});
 

it('Display result from all three rows',function(){
  
  // element.all(by.repeater('result in memory')).count().then(function(count){
    //console.log(count);
   //});

   //get first row, third column result
   element.all(by.repeater('result in memory')).first().element(by.css('td:nth-child(3)')).getText().then(function(count){
    console.log(count);
    });
    
    //get last row, third column result
    element.all(by.repeater('result in memory')).last().element(by.css('td:nth-child(3)')).getText().then(function(count){
        console.log(count);
    });
    
    //get second row ,third column result
    element.all(by.repeater('result in memory')).get(1).element(by.css('td:nth-child(3)')).getText().then(function(count){
            console.log(count);
    });
    

    //traverse every row third column
    element.all(by.repeater('result in memory')).each(function(row)
    {
        row.element(by.css('td:nth-child(3)')).getText().then(function(result){

            console.log('row-wise result'+result)

        });
    });


   

});
 
 
 });