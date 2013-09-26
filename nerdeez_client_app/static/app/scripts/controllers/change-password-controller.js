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
