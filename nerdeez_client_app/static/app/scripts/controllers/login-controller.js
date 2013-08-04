/**
* the controller for the login with facebook page
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

/**
 * controller that handles 
 */
Nerdeez.LoginController = Ember.Controller.extend({
    
    /**
     * loading flag
     * @type {Boolean}
     */
    isLoading: false,
    
    /**
     * should i redirect the user after login?
     * global variable called last page will have the last page to redirect
     * @type {Boolean}
     */
    isRedirect: false,
    
    isFacebookLoginBinding: 'Nerdeez.isFBLoaded',
    
    /**
     * init the controller variables
     */
    initController: function(){
        self = this;
        FB.getLoginStatus(function(response) {
            Ember.run(function(){
                Nerdeez.set('isConnected' , response.status === 'connected');    
            });
        });      
    },
    
    /**
     * subscribe to the facebook logged in change event
     */
    init: function(){
        this._super();
        this.set('isRedirect', Nerdeez.get('lastPage') != null);
        if(Nerdeez.get('isFBLoaded')){
            this.initController();
        }
    },
    
    /**
     * whne the user clicks the login button
     */
    login: function(){
        this.set('isLoading', true);
        self = this;
        FB.login(function(response) {
            
            if (response.authResponse) {
                Ember.run(function(){
                    self.set('isLoading', false);
                    Nerdeez.set('isConnected', true);
                });
                
                
                if(self.get('isRedirect')){
                    Ember.run(function(){
                        self.set('isLoading', true);
                    });
                    setTimeout(function() {
                        self.transitionTo(Nerdeez.get('lastPage'),Nerdeez.get('lastModel'));
                    }, 3000);
                }
            } else {
                Ember.run(function(){
                    self.set('isLoading', false);
                    Nerdeez.set('isConnected', false);
                });
            }
        });
    },
    
    /**
     * will be called when the facebook api is loaded
     */
    waitForFB: function(){
        if(Nerdeez.get('isFBLoaded')){
            this.initController();
        } 
    }.observes('Nerdeez.isFBLoaded')
});