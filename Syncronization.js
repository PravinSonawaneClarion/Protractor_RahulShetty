describe('Syncronization ',function(){


 it('test expilict wait',function(){
    browser.waitForAngularEnabled(false);            //Using protractor for non angular js site
    browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');

    element(by.css('a[href="javascript: void(0);loadAjax();"]')).click();
  
    

     var EC = protractor.ExpectedConditions;
     // Waits for the element with id 'abc' to be no longer visible on the dom.
     browser.wait(EC.invisibilityOf(element(by.id('loader'))), 10000);

     expect(element(by.id('results')).getText()).toBe('Process completed! This response has been loaded via the Ajax request directly from the web server, without reoading this page.');
    });
     
 });
