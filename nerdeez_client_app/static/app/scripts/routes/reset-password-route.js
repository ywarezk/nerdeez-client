/**
 * the route for the reset password page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.ResetPasswordRoute = Nerdeez.NerdeezRoute.extend({
    
    /**
     * will grab the params from the url and set them in the controller 
     */
    setupController: function(controller, model){
        controller.set('email', this.getURLParameter('email'));
        controller.set('hash',this.getURLParameter('hash'));
    }
});