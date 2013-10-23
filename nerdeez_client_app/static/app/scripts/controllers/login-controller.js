/**
* the controller for the login with facebook page
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

var Nerdeez = window.Nerdeez;
Nerdeez.LoginController = Ember.Controller.extend(Nerdeez.Status, {
	
	/**
	 * if redirecting with model it will hold the model
	 * @type {DS.Model}
	 */
	redirectModel: null,
	
	/**
	 * will redirect the user to the path specified in the property
	 * @type {String} 
	 */
	redirect: null,
    
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
     * function that is common for all the logins
     * @param {Object} json object
     */
    commonLogin: function(json){
	    	if(this.get('isRememberMe')){
    			var expires = 7;
    		}
    		else{
    			var expires = 1;
    		}
    		Nerdeez.get('auth').set('username', json['username']);
    		Nerdeez.get('auth').set('apiKey', json['api_key']);
    		Nerdeez.get('auth').set('id', json['api_key']);
    		var adapter = Nerdeez.Adapter.current();
    		adapter.set('apiKey', json['api_key']);
		adapter.set('username', json['username']);
    		Nerdeez.get('auth').set('userProfile', Nerdeez.Userprofile.find(json['user_profile'].id));
    		$.cookie('username', json['username'], { expires: expires, path: '/' });
    		$.cookie('apiKey', json['api_key'], { expires: expires, path: '/' });
    		$.cookie('id', json['user_profile'].id, { expires: expires, path: '/' });
    		this.success('Successfully logged in');
    		if (this.get('redirect') == null){
             this.transitionToRoute('search');
    		}
    		else{
        		this.transitionToRoute(this.get('redirect'), this.get('redirectModel'));    
    		}
    },
    
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
            this.loading();
            
            //make the ajax request
            var adapter = this.get('store.adapter');
            var xthis = this;
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/login/',
		        	'POST',
		        	{
			        	success: function(json){
			        		xthis.commonLogin(json);
			        	},
			        	error: function(json){
			        		var message = $.parseJSON(json.responseText).message;
			        	    xthis.error(message);
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
	            			xthis.success('Please authorize the app with your twitter account');
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
					        	    xthis.commonLogin(json);
					        	},
					        	error: function(json){
					        		xthis.error('Failed to login via facebook');
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