// spec.js


});

describe('Go to Settings url and change provider', function(){
    browser.ignoreSynchronization=false; //ignore angular js specific
    it('Access to URL', function(){        
        browser.get('http://qaexercise.envalfresco.com/settings');
        
        var providers = element(by.id('adf-provider-selector'));
        var applyButton = element(by.css('#host-button'));
        var ecm = element(by.css('#mat-option-1'));
        
        providers.click();
        ecm.click();  
        applyButton.click();
        //browser.sleep(1000);
        
    });
});

describe('Login with test username and password', function(){
    browser.ignoreSynchronization=false; //ignore angular js specific
    it('Login with test username', function(){        
    //browser.get('http://qaexercise.envalfresco.com/login');   
        var usernameField = element(by.id('username'));
        var passwordField = element(by.id('password'));
        var signin = element(by.css('#login-button'));
        
        usernameField.sendKeys('guest@example.com');
        //browser.sleep(1000); 
        passwordField.sendKeys('Password');
        //browser.sleep(1000); 
        signin.click();        
        browser.sleep(2000);
        
     });
});


describe('Go to Settings url and change provider', function(){
    browser.ignoreSynchronization=false; //ignore angular js specific
    it('Access to ../files', function(){
       
        var gitHubId = 'asa';
        browser.get('http://qaexercise.envalfresco.com/files');
        //create folder
        element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')).click();
        element(by.css('#adf-folder-name-input')).sendKeys(gitHubId);
        element(by.css('#adf-folder-create-button > span')).click();
        browser.sleep(2000);
        //create folder
        element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')).click();
        element(by.css('#adf-folder-name-input')).sendKeys(gitHubId);
        element(by.css('#adf-folder-create-button > span')).click();
        browser.sleep(2000);
       
            
    });
   //TO DO
    /*it('Delete folder',function(){
        browser.get('http://qaexercise.envalfresco.com/files');
        browser.sleep(2000);
        let folder = element.all(by.css('#document-list-container > adf-upload-drag-area > div > adf-document-list > adf-datatable > div > div.adf-datatable-body'));
        folder.element(by.css('')).click();
        browser.sleep(1000);
        
    });
*/    
});

