/**
* the controller for the login with facebook page
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

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
    
    /**
     * if true will show the error box
     * @type {Boolean}
     */
    isError: false,
    
    /**
     * if true will show the success box with the message
     * @type {Boolean}
     */
    isSuccess: false,
    
    /**
     * a string containing a message displayed to the user
     * @type {String}
     */
    message: null,
    
    /**
     * should i display the loading sign
     * @type {Boolean}
     */
    isLoading: false,
    
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
            
            //loading
            this.set('isLoading', true);
            
            //make the ajax request
            var adapter = this.get('store.adapter');
            var xthis = this;
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/login/',
		        	'POST',
		        	{
			        	success: function(json){
			        	    console.log('redirecting to page');
			        	    var auth = Nerdeez.Auth.current();
			        		auth.set('isLoggedIn', json['success']);
			        		Nerdeez.set('isLoggedIn', json['success']);
			        		xthis.set('isLoading', false);
			        	},
			        	error: function(json){
			        		var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
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
            this.set('isLoading', true);
            var xthis = this;
            var adapter = Nerdeez.Adapter.current();
            adapter.ajax(
	            	SERVER_URL + '/api/v1/utilities/twitter-login/',
	            	'POST',
	            	{
	            		success: function(json){
	            			xthis.set('isLoading', false);
	            			xthis.set('isSuccess', true);
	            			xthis.set('message', 'Please authorize the app with your twitter account');
	            			var win=window.open(json['auth_url'], '_blank');
						win.focus();
	            		},
	            		error: function(){
	            			
	            		},
	            		data:{}
	            	}
            );
        },
        
        /**
         * when the user wants to login using facebook
         */
        fbLogin: function(){
            console.log('login using facebook');
            this.set('isLoading', true);
            var xthis = this;
            FB.login(function(response) {
	            if (response.authResponse) {
	                 console.log('inspect auth response');
	                 var accessToken = response.authResponse.accessToken;
	                 var signedRequest = response.authResponse.signedRequest;
					 var adapter = Nerdeez.Adapter.current();
			         adapter.ajax(
		                SERVER_URL + '/api/v1/utilities/fb-login/',
				        	'POST',
				        	{
					        	success: function(json){
					        	    var auth = Nerdeez.Auth.current();
					        		auth.set('isLoggedIn', json['is_logged_in']);
					        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
					        		xthis.set('isLoading', false);
					        		xthis.transitionTo('index');
					        	},
					        	error: function(json){
					        		xthis.set('isError', true);
					        		xthis.set('message', 'Failed to login via facebook');
					        	},
					        	data:{
					        		access_token: response.authResponse.accessToken,
					        		signed_request: response.authResponse.signedRequest
					        	}
				        	}    
		            );
	             } else {
		             
	             }
	         }, {scope: 'email'});
        }
        
    }
});