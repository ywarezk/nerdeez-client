/**
 * the route for logining out
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.LogoutRoute = Ember.Route.extend({
    redirect: function(){
        var auth = Nerdeez.Auth.current();
        auth.set('username', null);
        auth.set('apiKey', null);
        auth.set('id', null);
        $.removeCookie('username');
        $.removeCookie('apiKey');
        $.removeCookie('id');
        FB.logout();
        this.transitionTo('index');
    }
});



