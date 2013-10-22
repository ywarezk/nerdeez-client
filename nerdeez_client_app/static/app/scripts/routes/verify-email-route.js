/**
 * the route for email verification after registration
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

/**
 * when the user clicks the mail verification link this will lead to this url
 * will redirect to login if all is success
 */
Nerdeez.VerifyEmailRoute = Nerdeez.NerdeezRoute.extend({
    
    /**
     * grab the response from the server to the verification
     */
    model: function(param){
        
        //grab the params
        var email = this.getURLParameter('email');
        var hash = this.getURLParameter('hash');
        
        //query the server
        var adapter = this.get('store.adapter');
        return adapter.ajax(
            SERVER_URL + '/api/v1/utilities/verify-email/',
                'POST',
                {
                    success: function(json){
                        
                    },
                    error: function(json){
                        
                    },
                    data:{
                        email: email,
                        hash: hash
                    }
                }
        );
        
    },
    
    /**
     * success verification now redirect to the login controller
     */
    setupController: function(controller, model){
        this.transitionTo('login');
        var loginController = this.controllerFor('login');
        loginController.set('isSuccess', true);
        loginController.set('message', model.message);
    },
    
    actions: {
            
            /**
             * when the user fails to activate the account
         * @param {Object} reason
             */
            error: function(reason){
                this.transitionTo('register');
                var registerController = this.controllerFor('register');
                registerController.set('isError', true);
                registerController.set('message', 'Account activation failed');
            }
    }
});