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

	 /**
     * when the user submits the contact us form
     */
    submitContactUs: function(){
        $("#contactusForm").validate();
    }

    /*    if(!$('.js-validation-form').valid()){
            return;
        }
        
        onSuccess = function(json){
            if('error' in json){
                 $('#contact-message').text(json['error']);
                 $('#contact-error').fadeIn('normal');
             }
             else{
                 $('#contact-message').text(json['success']);
                 $('#contact-success').fadeIn('normal');
             }
             $('.info').css('display','block');
        }
        
        onError = function(){
	        $('#contact-message').text('network problems');
            $('#contact-error').fadeIn('normal');
            $('.info').css('display','block');
        }
        
        this.controller.submitContactUs(this.message, this.email, onSuccess, onError);
    }, */
});