
function calulatorPage(){

    this.firstinput=element(by.model("first"));
    this.secondinput=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.result=element(by.css("h2[class='ng-binding']"));

    this.get = function(){
         browser.get('https://juliemr.github.io/protractor-demo/');
    }
};


module.exports = new calulatorPage();

 