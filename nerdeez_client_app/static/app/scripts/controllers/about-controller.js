/**
 * The controller for the about page
 * 
 * Created October 21st, 2013
 * @author: Doron Nachshon
 * @version: 1.0
 * @copyright nerdeez Ltd.
 */

Nerdeez.SchoolgroupAboutController = Ember.Controller.extend(Nerdeez.Share, Nerdeez.LikeDislike,{
    /**
    * Init facebook's share function from the Mixin
    **/

    shareInit: function(){
        this.set('shareName', this.get('content.title'));
        this.set('shareDescription', this.get('content.description'));
    }
});