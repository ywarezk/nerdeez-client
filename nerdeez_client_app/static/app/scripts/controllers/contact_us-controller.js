Nerdeez.ContactusController = Ember.Controller.extend({
    msglength: 1000,
    isSuccess: false,
    message: '',
    
    /**
     * when the user submits the contact us form
     * @params string message the message to send
     * @params string name the name of the user sending the message
     * @params string mail the mail of the user
     * @params string the user phone number
     */
    submitContactUs: function(message, mail, success, error){
        Nerdeez.get('store.adapter').ajax(
	        	Nerdeez.server_url + '/api/v1/contactus/',
	        	'POST',
	        	{
	        		data: {message: message, mail: mail},
	        		success: success,
	        		error: error
	        	}
	    );
    }

});