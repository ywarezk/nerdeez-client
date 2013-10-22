/**
 * the route for the main app
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.ApplicationRoute = Nerdeez.NerdeezRoute.extend({
    enter: function(){
        
        var xthis = this;
        
        //get the params from twitter if exists
        var oauthToken = this.getURLParameter('oauth_token');
        var oauthVerifier =     this.getURLParameter('oauth_verifier');
        
        //if got message from twitter then get busy login
        if (oauthToken !== 'null' && oauthVerifier !== 'null'){
            var adapter = Nerdeez.Adapter.current();
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/twitter-login-callback/',
                'POST',
                {
                    success: function(json){
                        // var auth = Nerdeez.Auth.current();
                            // auth.set('isLoggedIn', json['is_logged_in']);
                            // Nerdeez.set('isLoggedIn', json['is_logged_in']);
                            xthis.controllerFor('login').commonLogin(json);
                    },
                    error: function(json){
                        console.log('twitter callback error');
                    },
                    data: {
                        oauth_verifier: oauthVerifier,
                        oauth_token: oauthToken
                    }
                }
            );
        }
    },
    
    
});