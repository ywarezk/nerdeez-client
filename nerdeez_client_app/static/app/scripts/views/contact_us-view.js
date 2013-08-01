/**
* Contact us view for the application
*
* @copyright: nerdeez.com Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.ContactusView = Nerdeez.NerdeezView.extend({
    templateName : "contact_us",

    submitForm: function(){
        this.controller.submitForm(this.get('onSuccess'), this.get('onError'));
    },

    toGGleErr: function(){
    	$("#" + this.elementId + " .errorTrigger").toggle();
    },
    toGGleSccs: function(){
    	$("#" + this.elementId + " .successTrigger").toggle();
    }

});
