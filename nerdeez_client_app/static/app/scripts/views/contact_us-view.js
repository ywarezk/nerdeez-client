/**
* Contact us view for the application
*
* @copyright: nerdeez.com Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.ContactusView = Nerdeez.NerdeezView.extend({

	templateName: 'contact_us',
	//@member {string}fullTitle
	message: null,
	email: null,
    textLimit: 100,

/**
* JQuery plugin for form validation
* CURRENTLY NOT IN USE
* Somehow form validation is already in place
*/

//    didInsertElement: function() {
//        $("#contactusForm").validate();
//    },

	 /**
     * when the user submits the contact us form
     */
    submitContactUs: function() {

//        if (!$("#contactusForm").valid()) {
//            return;
//        }

        onSuccess = function(json){
            if('error' in json) {
                 $('#contact-message').text(json['error']);
             }
             else {
                 $('#contact-message').text(json['success']);
             }
             $('.info').css('display','block');
        }
        
        onError = function() {
            $('#contact-message').text('network problems');
            $('#contact-error').fadeIn('normal');
            $('.info').css('display','block');
        }
        
        this.controller.submitContactUs(this.message, this.email, onSuccess, onError);
    },

    countChars: function() {
        var elem = $(".charsRemaining");
        $('textarea[name=msginput]').limiter(this.get('textLimit'), elem);
    }.observes('message')

});