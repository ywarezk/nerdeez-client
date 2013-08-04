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
    isSuccess: true,

    
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
    isShowStatus: false,


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
        this.set('isLoading', true);
        message = this.get('mailContent');
        mail = this.get('mailAddress');
        xthis = this;
        
        var success = function(json){
            xthis.set('isSuccess', json['success']);
            xthis.set('isShowStatus', true);
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
            xthis.set('isShowStatus', true);
            xthis.set('isLoading', false);
        }

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