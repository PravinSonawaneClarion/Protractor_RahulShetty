var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',         //comment when running through jenkins
    //directConnect: true,
    specs: ['async_await.js'],

    //common global pre requisite
    onPrepare: function () {
        console.log('on prepared called');
        browser.driver.manage().window().maximize();    

        //adding html reporter
        //Should be inside onPrepare
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );


    },


    //To run particular spec used suite
    //Add a step in package.json and run as-----> npm run smokeSuite
    //if you only add in config.js the run as ------>protractor config.js
    suites: {
        smoke: ['spec1.js','DataDriven.js','DropDown.js'],
        search: ['AllElements.js']
    },


      // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }

   
};