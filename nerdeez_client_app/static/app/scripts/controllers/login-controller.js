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
     * connected flag
     * @type {Boolean}
     */
    isConnected: false,
    
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
    isRedirect: Nerdeez.get('lastPage') != null,
    
    isFacebookLoginBinding: 'Nerdeez.isFBLoaded',
    
    /**
     * init the controller variables
     */
    initController: function(){
        self = this;
        FB.Event.subscribe('auth.authResponseChange', function(response) {
            self.set('isLoading', false);
            self.set('isConnected', response.status === 'connected');
        });
        
        FB.getLoginStatus(function(response) {
            self.set('isConnected' , response.status === 'connected');
        });        
    },
    
    /**
     * subscribe to the facebook logged in change event
     */
    init: function(){
        this._super();
        if(Nerdeez.get('isFBLoaded')){
            this.initController();
        }
    },
    
    /**
     * whne the user clicks the login button
     */
    login: function(){
        this.set('isLoading', true);
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    },
    
    /**
     * 
     */
    waitForFB: function(){
        if(Nerdeez.get('isFBLoaded')){
            this.initController();
        } 
    }.property('isFacebookLoginBinding')
});