/**
* Contact us controller for the application
*
* @copyright: nerdeez.com Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.ContactusController = Ember.Controller.extend({
    
    isSuccess: false,

    mailContent: null,
    mailAddress: null,

    textLimit: 100,
    
    /**
     * when the user submits the contact us form
     * @params string message the message to send
     * @params string name the name of the user sending the message
     * @params string mail the mail of the user
     * @params string the user phone number
     */
    submitForm: function(success, error){
        message = this.get('mailContent');
        mail = this.get('mailAddress');
        Nerdeez.get('store.adapter').ajax(
	        	Nerdeez.server_url + '/api/v1/utilities/contact/',
	        	'POST',
	        	{
	        		data: {message: message, mail: mail},
	        		success: success,
	        		error: error
	        	}
	    );
    },

    countChars: function() {
        var elem = $(".charsRemaining");
        $('textarea[name=msginput]').limiter(this.get('textLimit'), elem);
    }.observes('mailContent')
});