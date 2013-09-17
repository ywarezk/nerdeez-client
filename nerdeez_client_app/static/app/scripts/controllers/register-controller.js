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
    
    actions: {
        
        /**
         * when the user clicks to register
         */
        register: function(){
            
            //js validation
            if (!$(".js-validation").validationEngine('validate')) return;
            
            console.log('user is registrating');
            
        }
        
    }
});
