/**
 * controller for the forget password page
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ForgetPasswordController = Ember.Controller.extend(Nerdeez.Status, {
	/**
	 * form param will hold the user's email
	 * @type {String}
	 */
	email: null,
	
	
	
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
			this.loading();
			
			//send the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/forget-password/',
				'POST',
				{
					success: function(json){
			        	    xthis.success(json['message']);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.error(message);
					},
					data: {
						email: email
					}
				}
			);
		}
	}
});
