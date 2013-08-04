/**
 * this file will activate the facebook api
 * 
 * Created July 24th 2013
 * @author Yariv Katz
 * @copyright: nerdeez Ltd
 * @version: 1.0
 * 
 */

window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '410003599108568',                        // App ID from the app dashboard
      channelUrl : '/channel/', // Channel file for x-domain comms
      cookie     : true,
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    Nerdeez.set('isFBLoaded', true); 
    
    FB.getLoginStatus(function(response) {
        Ember.run(function(){
            Nerdeez.set('isConnected' , response.status === 'connected');    
        });
    });  
    
};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
    
}(document, 'script', 'facebook-jssdk'));