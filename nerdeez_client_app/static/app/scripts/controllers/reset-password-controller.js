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
