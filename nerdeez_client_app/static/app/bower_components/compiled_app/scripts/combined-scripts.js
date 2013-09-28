(function() {

/*global Ember, DS */

var Nerdeez = window.Nerdeez = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap'
    
});

/**
* application init function
* will check if the user is logged in upon application start
*/
var readyFunction = function(temp1, temp2, temp3){
	var adapter = Nerdeez.Adapter.current();
	adapter.ajax(
        SERVER_URL + '/api/v1/utilities/is-login/',
        	'POST',
        	{
	        	success: function(json){
	        		var auth = Nerdeez.Auth.current();
	        		auth.set('isLoggedIn', json['is_logged_in']);
	        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
	        	},
	        	error: function(json){
	        	    var auth = Nerdeez.Auth.current();
	        		auth.set('isLoggedIn', false);
	        		Nerdeez.set('isLoggedIn', false);
	        	},
	        	data:{}
        	}    
    );
}
Nerdeez.set('ready', readyFunction);



//vendor files


})();

(function() {

/**
 * this file will activate the facebook api
 * 
 * Created July 24th 2013
 * @author Yariv Katz
 * @copyright: nerdeez Ltd
 * @version: 1.0
 * 
 */

window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : FACEBOOK_APP_ID,                        // App ID from the app dashboard
      channelUrl : '/channel/', // Channel file for x-domain comms
      cookie     : true,
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    //Nerdeez.set('isFBLoaded', true); 
    
    FB.getLoginStatus(function(response) {
        // Ember.run(function(){
            // Nerdeez.set('isConnected' , response.status === 'connected');    
        // });
        if(response.status === 'connected'){
	        	var adapter = Nerdeez.Adapter.current();
	        	adapter.ajax(
                SERVER_URL + '/api/v1/utilities/fb-login/',
		        	'POST',
		        	{
			        	success: function(json){
			        	    var auth = Nerdeez.Auth.current();
			        		auth.set('isLoggedIn', json['is_logged_in']);
			        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
			        	},
			        	error: function(json){
			        		console.log('error login to facebook');
			        	},
			        	data:{
			        		access_token: response.authResponse.accessToken,
			        		signed_request: response.authResponse.signedRequest
			        	}
		        	}    
            );
	        	
        }
    });  
    
};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
    
}(document, 'script', 'facebook-jssdk'));

})();

(function() {

//application files


})();

(function() {

/**
* all views in the application will extend this master view
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/


Ember.View.reopen({
    /**
    * holds the static url
    * @type {{string}}
    * @public
    */
    staticUrl: STATIC_URL,
    
    /**
     * common actions when view finish reloading
     */
    didInsertElement: function(){
        this._super();
        //FB.XFBML.parse();
        $('.js-validation').validationEngine();
        
    }
});



})();

(function() {

/**
 * holds the model for the schoolgroups
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * abstract class for all the school group models
 */

Nerdeez.Schoolgroup = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	image: DS.attr('string'),
	school_type: DS.attr('number'),
	parent: DS.belongsTo('Nerdeez.Schoolgroup')
});


})();

(function() {

/**
 * holds the model for the flatpage resource
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * the flatpage model
 */
Nerdeez.Flatpage = DS.Model.extend({
	title:DS.attr('string'),
	html: DS.attr('string'),
})

})();

(function() {

/**
 * holds the model for the auth as a singleton
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

Nerdeez.Auth = Ember.Object.extend({
	isLoggedIn: false
});
Nerdeez.Auth.reopenClass(Nerdeez.Singleton);
Nerdeez.set('auth', Nerdeez.Auth.current());


})();

(function() {

/**
* the controller for the search university and search course will be here
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

/**
 * abstract controller for the search course and search university
 */
Nerdeez.SearchController = Ember.ArrayController.extend({
	
	/**
	 * the search query
	 * @property
	 * @public
	 * @type {string}
	 */
	searchQuery: null,
	
	
	/**
	 * when the user submits the search form
	 */
	search: function(){
		this.set('content', Nerdeez.Schoolgroup.find({search: this.get('searchQuery')}));
	}.observes('searchQuery')
});



})();

(function() {

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

})();

(function() {

/**
* the controller for registration
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

var Nerdeez = window.Nerdeez;
var Ember = window.Ember;
Nerdeez.RegisterController = Ember.Controller.extend({
    
    /**
     * specify the controllers we need to use 
     */
    needs: ['login'],
    
    /**
     * the email address from the user
     * @type {String}
     */
    email: null,
    
    /**
     * the password from the user
     * @type {String}
     */
    password: null,
    
    /**
     * if true then the loading sign is show
     * @type {Boolean}
     */
    isLoading: false,
    
    /**
     * will display success message to the user
     * @type {Boolean}
     */
    isSuccess: false,
    
    /**
     * will display an error message to the user
     * @type {Boolean}
     */
    isError: false,
    
    /**
     * will display a message to the user
     * @type {String}
     */
    message: null,
    
    
    
    actions: {
        
        /**
         * when the user clicks to register
         */
        register: function(){
            
            //js validation
            if (!$(".js-validation").validationEngine('validate')) return;
            
            console.log('user is registrating');
            
            //put the loading screen on
            this.set('isLoading', true);
            
            //get the params
            var email = this.get('email');
            var password = this.get('password');
            
            //make the ajax request
            var xthis = this;
            adapter = this.get('store.adapter');
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/register/',
		        	'POST',
		        	{
			        	success: function(json){
			        	    xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
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
			        		password: password
			        	}
		        	}    
            );
            
        }
        
    }
});


})();

(function() {

/**
* Contact us controller for the application
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

Nerdeez.ContactController = Ember.Controller.extend({
    
    /**
	 * used to inform on success transaction
	 * @property
	 * @private
	 * @type {boolean}
	 */
    isSuccess: false,

    
    /**
	 * set to true if we are moving to the loading state
	 * @property
	 * @private
	 * @type {boolean}
	 */
    isLoading: false,

    /**
	* used to pass message from server transaction
	* @property
	* @private
	* @type {string}
	*/
    statusMessage: 'test',

    
    /**
	* should i show the transaction status
	* @property
	* @private
	* @type {boolean}
	*/
    isError: false,


    mailContent: null,
    mailAddress: null,

	actions: {
		
		/**
		* when the user submits the contact us form
		* @params string message the message to send
		* @params string name the name of the user sending the message
		* @params string mail the mail of the user
		* @params string the user phone number
		*/
	    submitForm: function(success, error){
		    	//js validation
            if (!$(".js-validation").validationEngine('validate')) return;
	    	
	        this.set('isLoading', true);
	        message = this.get('mailContent');
	        mail = this.get('mailAddress');
	        xthis = this;
	        
	        var success = function(json){
	            xthis.set('isSuccess', json['success']);
	            xthis.set('isError', !json['success']);
	            xthis.set('isLoading', false);
	            xthis.set('statusMessage', json['message']);
	        }
	
	        var error = function(json){
	            if (json.hasOwnProperty('message')){
	                xthis.set('statusMessage', json['message']);
	            }
	            else{
	                xthis.set('statusMessage', 'Server communication error');
	            }
	            xthis.set('isSuccess', false);
	            xthis.set('isError', true)
	            xthis.set('isLoading', false);
	        }
	
			var adapter = Nerdeez.Adapter.current();	
	        adapter.ajax(
				SERVER_URL + '/api/v1/utilities/contact/',
				'POST',
				{
					data: {message: message, mail: mail},
					success: success,
					error: error
				}
			);
	    },	
	}
    
});

})();

(function() {

/**
 * controller for the change password page
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ChangePasswordController = Ember.Controller.extend({
	
	/**
	 * form param will hold the old password
	 * @type {String}
	 */
	currentPassword: null,
	
	/**
	 * form param will hold the new password
	 * @type {String}
	 */
	newPassword: null,
	
	/**
	 * will determine if the loading thingie is displayed
	 * @type {Boolean}
	 */
	isLoading: false,
	
	/**
	 * will determine if the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will determine if the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will determine the messages in the boxes
	 * @type {String}
	 */
	message: false,
	
	actions: {
		
		/**
		 * when the user submits the form
		 */
		changePassword: function(){
			//js validation
			if (!$(".js-validation").validationEngine('validate')) return;
			
			//get the params
			var currentPassword = this.get('currentPassword');
			var newPassword = this.get('newPassword');
			
			//put the loading screen on
			this.set('isLoading', true);
			
			//submit the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/change-password/',
				'POST',
				{
					success: function(json){
						xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
					},
					data: {
						old_password: currentPassword,
						new_password: newPassword
					}
				}
			);
		}
	}
});


})();

(function() {

/**
 * controller for the forget password page
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ForgetPasswordController = Ember.Controller.extend({
	/**
	 * form param will hold the user's email
	 * @type {String}
	 */
	email: null,
	
	/**
	 * will determine if the loading thingie is displayed
	 * @type {Boolean}
	 */
	isLoading: false,
	
	/**
	 * will determine if the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will determine if the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will determine the messages in the boxes
	 * @type {String}
	 */
	message: false,
	
	actions: {
		
		/**
		 * when the user submits the form to change the password
		 */
		forgotPassword: function(){
			//js validation
			if (!$(".js-validation").validationEngine('validate')) return;
			
			//get the param
			var email = this.get('email');
			
			//loading screen
			this.set('isLoading', true);
			
			//send the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/forget-password/',
				'POST',
				{
					success: function(json){
						xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
					},
					data: {
						email: email
					}
				}
			);
		}
	}
});


})();

(function() {

/**
 * controller for the user to change his password if he forgot it
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ResetPasswordController = Ember.Controller.extend({
	/**
	 * holds the email from the get params
	 * @type {String}
	 */
	email: null,
	
	/**
	 * holds the hash from the get params
	 * @type {String}
	 */
	hash: null,
	
	/**
	 * holds the password from the submitted form
	 * @type {String}
	 */
	password: null,
	
	/**
	 * will determine if the loading thingie is displayed
	 * @type {Boolean}
	 */
	isLoading: false,
	
	/**
	 * will determine if the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will determine if the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will determine the messages in the boxes
	 * @type {String}
	 */
	message: false,
	
	actions: {
		
		/**
		 * when the user submits the change password form
		 */
		changePassword: function(){
			//js validation
			if (!$(".js-validation").validationEngine('validate')) return;
			
			//get the param
			var password = this.get('password');
			var email = this.get('email');
			var hash = this.get('hash');
			
			//loading screen
			this.set('isLoading', true);
			
			//send the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/reset-password/',
				'POST',
				{
					success: function(json){
						xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
					},
					data: {
						password: password,
						email: email,
						hash: hash
					}
				}
			);
		}
		
	}
});


})();

(function() {

/**
 * nerdeez handlebars helper. 
 * register common handlebars that are used alot. 
 * Important note to whomever edits this file: All the programmers are going to use this code throughout the entire application. 
 * this code should be documented like a motherfucker
 * 
 * Created July 26t, 2013
 * @author: Yariv Katz
 * @copyright: Nerdeez Ltd.
 * @verison: 1.0
 * 
 */
 
 /**
 * put this every place you want a loading sign
 * 
 * usage
 * 
 * ```handlebar
 *    {{loading}}
 * ```
 * 
 * @return {Handlebars.SafeString}
 */
Ember.Handlebars.registerBoundHelper('loading', function() {
    return new Ember.Handlebars.SafeString('<div class="loading"><i class="icon-refresh icon-spin"></i></div>');
});

})();

(function() {

//routes


})();

(function() {

/**
* this file will hold nerdeez application routes
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
*/

var Nerdeez = window.Nerdeez;
var Ember = window.Ember;

/**
 * define the routes urls here
 */
Nerdeez.Router.map(function () {
	this.route('search');
	this.route('about');
	this.route('terms');
	this.route('privacy');
    this.resource('schoolgroup', { path: '/schoolgroup/:schoolgroup_id' }, function(){
        this.route('wall');
        this.route('files');
    });
    this.route('login');
    this.route('logout');
    this.route('register');
    this.route('contact');
    this.route('verifyEmail', {path: '/verify-email/:hash'});
    this.route('changePassword', {path: '/change-password'});
    this.route('forgetPassword', {path: '/forget-password'})
    this.route('resetPassword', {path: '/reset-password/:hash'})
    this.route('addSchoolGroup', {path: '/add-school-group'})
});

/**
 * all nerdeez routes will extend this object
 * it will contain common route functions
 */
Nerdeez.NerdeezRoute = Ember.Route.extend({
    
    /**
     * wiil extract the url params
     * @param name String the name of the param to extract
     */
    getURLParameter: function(name){
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.href)||[,null])[1]
        );
    },
    
    /**
     * will grab the get params from the url and return a dictionary with the data
     * @returns {Object} dictionary object from the url
     */
    getUrlParamsAsDisctionary: function(){
	    	var search = location.search.substring(1);
	    	return JSON.parse('{"' + decodeURI(search.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    }
});

/**
 * all the routes that require login will extend this
 * Usage: just extend this class instead of the regular Ember.Route
 */
Nerdeez.LoginRequired = Ember.Route.extend({
    redirect: function(){
        isLoggedIn = Nerdeez.get('isLoggedIn');
        if(!isLoggedIn){
	        	this.transitionTo('login');
        }
    }
});

Nerdeez.LogoutRoute = Ember.Route.extend({
    redirect: function(){
        // self = this;
        // FB.logout(function(response) {
            // Ember.run(function(){
                // Nerdeez.set('isConnected' , false);    
            // });
            // self.transitionTo('index');
        // });
        var adapter = Nerdeez.Adapter.current();
        adapter.ajax(
	        SERVER_URL + '/api/v1/utilities/logout/',
	        	'POST',
	        	{
		        	success: function(json){
		        		var auth = Nerdeez.Auth.current();
		        		auth.set('isLoggedIn', json['is_logged_in']);
		        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
		        	},
		        	error: function(json){
		        	    var auth = Nerdeez.Auth.current();
		        		auth.set('isLoggedIn', false);
		        		Nerdeez.set('isLoggedIn', false);
		        	},
		        	data:{}
	        	}    
	    );
	    FB.logout();
        this.transitionTo('index');
    }
});

Nerdeez.ChangePasswordRoute = Nerdeez.LoginRequired.extend({});

Nerdeez.ResetPasswordRoute = Nerdeez.NerdeezRoute.extend({
	
	/**
	 * will grab the params from the url and set them in the controller 
	 */
	setupController: function(controller, model){
		controller.set('email', this.getURLParameter('email'));
		controller.set('hash',this.getURLParameter('hash'));
	}
});

Nerdeez.ApplicationRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		
		//get the params from twitter if exists
		var oauthToken = this.getURLParameter('oauth_token');
		var oauthVerifier = 	this.getURLParameter('oauth_verifier');
		
		//if got message from twitter then get busy login
		if (oauthToken !== 'null' && oauthVerifier !== 'null'){
			var adapter = Nerdeez.Adapter.current();
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/twitter-login-callback/',
				'POST',
				{
					success: function(json){
						var auth = Nerdeez.Auth.current();
			        		auth.set('isLoggedIn', json['is_logged_in']);
			        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
					},
					error: function(json){
						console.log('twitter callback error');
					},
					data: {
						oauth_verifier: oauthVerifier,
						oauth_token: oauthToken
					}
				}
			);
		}
	}
	
});

/**
 * the route for the university search, grab the initial data
 */
Nerdeez.SearchRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Schoolgroup.find({limit: 20, order_by: 'title'});
	}
});

/**
 * all the flat pages will extend this route
 */
Nerdeez.FlatPageRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('flatpage');
    }
});

/**
 * route to about page
 */
Nerdeez.AboutRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Nerdeez.PrivacyRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'});
	}
});

/**
 * route to terms page
 */
Nerdeez.TermsRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title': 'terms'});
	}
});

/**
 * the route to a course page
 */
Nerdeez.SchoolgroupRoute = Ember.Route.extend({
    model: function(param){
        return Nerdeez.Schoolgroup.find(param.schoolgroup_id);
    }
});

/**
 * the route to a course wall page
 */
Nerdeez.SchoolgroupWallRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route to a course files page
 */
Nerdeez.SchoolgroupFilesRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * when the user clicks the mail verification link this will lead to this url
 * will redirect to login if all is success
 */
Nerdeez.VerifyEmailRoute = Nerdeez.NerdeezRoute.extend({
    
    /**
     * grab the response from the server to the verification
     */
    model: function(param){
        
        //grab the params
        var email = this.getURLParameter('email');
        var hash = this.getURLParameter('hash');
        
        //query the server
        var adapter = this.get('store.adapter');
        return adapter.ajax(
            SERVER_URL + '/api/v1/utilities/verify-email/',
	        	'POST',
	        	{
		        	success: function(json){
		        	    
		        	},
		        	error: function(json){
		        	    
		        	},
		        	data:{
		        		email: email,
		        		hash: hash
		        	}
	        	}
        );
        
    },
    
    /**
     * success verification now redirect to the login controller
     */
    setupController: function(controller, model){
        this.transitionTo('login');
        var loginController = this.controllerFor('login');
        loginController.set('isSuccess', true);
        loginController.set('message', model.message);
    },
    
    actions: {
	    	
	    	/**
	    	 * when the user fails to activate the account
		 * @param {Object} reason
	    	 */
	    	error: function(reason){
		    	this.transitionTo('register');
		    	var registerController = this.controllerFor('register');
		    	registerController.set('isError', true);
		    	registerController.set('message', 'Account activation failed');
	    	}
    }
});


})();

(function() {

//store


})();

(function() {

/**
* this file will hold store settings for proper communication with the backend
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
* @copyright: nerdeez.com Ltd.
*/

var Nerdeez = window.Nerdeez;
var SERVER_URL = window.SERVER_URL;
var DS = window.DS;

/**
 * configure our adapter as a singleton
 */
Nerdeez.Adapter = Nerdeez.DjangoTastypieAdapter.extend({
    /**
     * adapter hook to set the server url
     */
    serverDomain : SERVER_URL,
    
    /**
     * hook if we want to use cross domain communication
     */
    wormhole: Nerdeez.Wormhole,
    
    loadingFunction: function(){
        
    },
    
    stopLoadingFunction: function(){
        
    },
    
    /**
     * our serializer
     */
    serializer: Nerdeez.DjangoTastypieSerializer.extend({
        init: function(){
            this._super();
            this.mappings.set( 'Nerdeez.Schoolgroup', { 
                parent: { embedded: 'load' }
            });
        }
    })
    
})
Nerdeez.Adapter.reopenClass(Nerdeez.Singleton);

/**
 * handles backend communication
 */
Nerdeez.Store = DS.Store.extend({
	
	/**
	 * our adapter
	 */
	adapter: Nerdeez.Adapter.current()
	
});





})();