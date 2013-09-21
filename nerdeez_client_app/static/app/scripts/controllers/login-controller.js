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
// Nerdeez.LoginController = Ember.Controller.extend({
    
//     /**
//      * loading flag
//      * @type {Boolean}
//      */
//     isLoading: false,
    
//     /**
//      * should i redirect the user after login?
//      * global variable called last page will have the last page to redirect
//      * @type {Boolean}
//      */
//     isRedirect: false,
    
//     isFacebookLoginBinding: 'Nerdeez.isFBLoaded',
    
//     /**
//      * init the controller variables
//      */
//     initController: function(){
//         self = this;
//         FB.getLoginStatus(function(response) {
//             Ember.run(function(){
//                 Nerdeez.set('isConnected' , response.status === 'connected');    
//             });
//         });      
//     },
    
//     /**
//      * subscribe to the facebook logged in change event
//      */
//     init: function(){
//         this._super();
//         this.set('isRedirect', Nerdeez.get('lastPage') != null);
//         if(Nerdeez.get('isFBLoaded')){
//             this.initController();
//         }
//     },
    
//     /**
//      * whne the user clicks the login button
//      */
//     login: function(){
//         this.set('isLoading', true);
//         self = this;
//         FB.login(function(response) {
            
//             if (response.authResponse) {
//                 Ember.run(function(){
//                     self.set('isLoading', false);
//                     Nerdeez.set('isConnected', true);
//                 });
                
                
//                 if(self.get('isRedirect')){
//                     Ember.run(function(){
//                         self.set('isLoading', true);
//                     });
//                     setTimeout(function() {
//                         self.transitionTo(Nerdeez.get('lastPage'),Nerdeez.get('lastModel'));
//                     }, 3000);
//                 }
//             } else {
//                 Ember.run(function(){
//                     self.set('isLoading', false);
//                     Nerdeez.set('isConnected', false);
//                 });
//             }
//         });
//     },
    
//     /**
//      * will be called when the facebook api is loaded
//      */
//     waitForFB: function(){
//         if(Nerdeez.get('isFBLoaded')){
//             this.initController();
//         } 
//     }.observes('Nerdeez.isFBLoaded')
// });

var Nerdeez = window.Nerdeez;
Nerdeez.LoginController = Ember.Controller.extend({
    
    /**
     * holds the user input for the email
     * @type {String}
     */ 
    email: null,
    
    /**
     * holds the password the user inputs
     * @type {String}
     */ 
    password: null,
    
    /**
     * save in the cookies the logged in status
     * @type {Boolean}
     */
    isRememberMe: false,
    
    actions: {
        
        /**
         * when the user submits the registration form
         */
        login: function(){
            //if js validation fails then return
            if (!$(".js-validation").validationEngine('validate')) return;
            
            console.log('Submitting the login form');
            
            //get the user params
            var password = this.get('password');
            var email = this.get('email');
            var isRememberMe = this.get('isRememberMe');
            
            //make the ajax request
            var adapter = this.get('store.adapter');
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/login/',
	        	'POST',
	        	{
		        	success: function(json){
		        	    console.log('redirecting to page');
		        	},
		        	error: function(){
		        	    xthis.set('isSuccess', false);
		        	    xthis.set('message', json['message']);
		        	    this.set('isLoading', false);
		        	},
		        	data:{
		        		email: email,
		        		password: password,
		        		remember_me: isRememberMe
		        	}
	        	}    
            );
            
            
        },
        
        /**
         * when the user wants to connect using twitter
         */
        twitterLogin: function(){
            console.log('login using twitter');
        },
        
        /**
         * when the user wants to login using facebook
         */
        fbLogin: function(){
            console.log('login using facebook');
        }
        
    }
});