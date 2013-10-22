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
      appId      : FACEBOOK_APP_ID,                        // App ID from the app dashboard
      channelUrl : '/channel/', // Channel file for x-domain comms
      cookie     : true,
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    //Nerdeez.set('isFBLoaded', true); 
    
    FB.getLoginStatus(function(response) {
        // Ember.run(function(){
            // Nerdeez.set('isConnected' , response.status === 'connected');    
        // });
        if(response.status === 'connected'){
	        	var adapter = Nerdeez.Adapter.current();
	        	adapter.ajax(
                SERVER_URL + '/api/v1/utilities/fb-login/',
		        	'POST',
		        	{
			        	success: function(json){
			        	    var auth = Nerdeez.Auth.current();
			        		// auth.set('isLoggedIn', json['is_logged_in']);
			        		// Nerdeez.set('isLoggedIn', json['is_logged_in']);
			        		auth.set('apiKey', json['api_key']);
						auth.set('username', json['username']);
						adapter.set('apiKey', json['api_key']);
						adapter.set('username',json['username']);
						auth.set('userProfile',Nerdeez.Userprofile.find(json.user_profile.id));
						auth.set('id',json.user_profile.id);
						Nerdeez.set('auth', auth);
			        	},
			        	error: function(json){
			        		console.log('error login to facebook');
			        	},
			        	data:{
			        		access_token: response.authResponse.accessToken,
			        		signed_request: response.authResponse.signedRequest
			        	}
		        	}    
            );
	        	
        }
    });  
    
};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    
}(document, 'script', 'facebook-jssdk'));