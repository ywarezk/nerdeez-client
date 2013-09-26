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
    isSuccess: false,

    
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
    isError: false,


    mailContent: null,
    mailAddress: null,

	actions: {
		
		/**
		* when the user submits the contact us form
		* @params string message the message to send
		* @params string name the name of the user sending the message
		* @params string mail the mail of the user
		* @params string the user phone number
		*/
	    submitForm: function(success, error){
		    	//js validation
            if (!$(".js-validation").validationEngine('validate')) return;
	    	
	        this.set('isLoading', true);
	        message = this.get('mailContent');
	        mail = this.get('mailAddress');
	        xthis = this;
	        
	        var success = function(json){
	            xthis.set('isSuccess', json['success']);
	            xthis.set('isError', !json['success']);
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
	            xthis.set('isError', true)
	            xthis.set('isLoading', false);
	        }
	
			var adapter = Nerdeez.Adapter.current();	
	        adapter.ajax(
				SERVER_URL + '/api/v1/utilities/contact/',
				'POST',
				{
					data: {message: message, mail: mail},
					success: success,
					error: error
				}
			);
	    },	
	}
    
});