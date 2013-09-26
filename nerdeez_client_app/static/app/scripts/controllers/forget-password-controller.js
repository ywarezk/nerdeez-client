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
