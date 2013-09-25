/**
* the controller for registration
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

var Nerdeez = window.Nerdeez;
var Ember = window.Ember;
Nerdeez.RegisterController = Ember.Controller.extend({
    
    /**
     * specify the controllers we need to use 
     */
    needs: ['login'],
    
    /**
     * the email address from the user
     * @type {String}
     */
    email: null,
    
    /**
     * the password from the user
     * @type {String}
     */
    password: null,
    
    /**
     * if true then the loading sign is show
     * @type {Boolean}
     */
    isLoading: false,
    
    /**
     * will display success message to the user
     * @type {Boolean}
     */
    isSuccess: false,
    
    /**
     * will display an error message to the user
     * @type {Boolean}
     */
    isError: false,
    
    /**
     * will display a message to the user
     * @type {String}
     */
    message: null,
    
    
    
    actions: {
        
        /**
         * when the user clicks to register
         */
        register: function(){
            
            //js validation
            if (!$(".js-validation").validationEngine('validate')) return;
            
            console.log('user is registrating');
            
            //put the loading screen on
            this.set('isLoading', true);
            
            //get the params
            var email = this.get('email');
            var password = this.get('password');
            
            //make the ajax request
            var xthis = this;
            adapter = this.get('store.adapter');
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/register/',
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
			        	data:{
			        		email: email,
			        		password: password
			        	}
		        	}    
            );
            
        }
        
    }
});
