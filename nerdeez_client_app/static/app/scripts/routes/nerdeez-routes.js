/**
* this file will hold nerdeez application routes
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
*/

var Nerdeez = window.Nerdeez;
var Ember = window.Ember;

/**
 * define the routes urls here
 */
Nerdeez.Router.map(function () {
	this.route('search');
	this.route('about');
	this.route('terms');
	this.route('privacy');
    this.resource('schoolgroup', { path: '/schoolgroup/:schoolgroup_id' }, function(){
        this.route('wall');
        this.route('files');
    });
    this.route('login');
    this.route('logout');
    this.route('register');
    this.route('verifyEmail', {path: '/verify-email/:hash'});
});

/**
 * all nerdeez routes will extend this object
 * it will contain common route functions
 */
Nerdeez.NerdeezRoute = Ember.Route.extend({
    
    /**
     * wiil extract the url params
     * @param name String the name of the param to extract
     */
    getURLParameter: function(name){
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.href)||[,null])[1]
        );
    },
    
    /**
     * will grab the get params from the url and return a dictionary with the data
     * @returns {Object} dictionary object from the url
     */
    getUrlParamsAsDisctionary: function(){
	    	var search = location.search.substring(1);
	    	return JSON.parse('{"' + decodeURI(search.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    }
});

/**
 * all the routes that require login will extend this
 * Usage: just extend this class instead of the regular Ember.Route
 */
Nerdeez.LoginRequired = Ember.Route.extend({
    redirect: function(){
        self = this;
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                // the user is logged in and has authenticated your
                // app, and response.authResponse supplies
                // the user's ID, a valid access token, a signed
                // request, and the time the access token 
                // and signed request each expire
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
            } else{
                Nerdeez.set('lastPage', self.routeName);
                Nerdeez.set('lastModel', self.model());
                self.transitionTo('login');
            }
        });
    }
});

Nerdeez.LogoutRoute = Ember.Route.extend({
    redirect: function(){
        self = this;
        FB.logout(function(response) {
            Ember.run(function(){
                Nerdeez.set('isConnected' , false);    
            });
            self.transitionTo('index');
        });
    }
});

/**
 * the route for the university search, grab the initial data
 */
Nerdeez.SearchRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Schoolgroup.find({limit: 20, order_by: 'title'});
	}
});

/**
 * all the flat pages will extend this route
 */
Nerdeez.FlatPageRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('flatpage');
    }
});

/**
 * route to about page
 */
Nerdeez.AboutRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Nerdeez.PrivacyRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'});
	}
});

/**
 * route to terms page
 */
Nerdeez.TermsRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title': 'terms'});
	}
});

/**
 * the route to a course page
 */
Nerdeez.SchoolgroupRoute = Ember.Route.extend({
    model: function(param){
        return Nerdeez.Schoolgroup.find(param.schoolgroup_id);
    }
});

/**
 * the route to a course wall page
 */
Nerdeez.SchoolgroupWallRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route to a course files page
 */
Nerdeez.SchoolgroupFilesRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

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
        ).then(null, function(json){
            return {'success': false, 'message': 'Email verification failed'};
        });
        
    },
    
    /**
     * success verification now redirect to the login controller
     */
    setupController: function(controller, model){
        if (model.success){
            var loginController = this.controllerFor('login');
            loginController.set('isSuccess', true);
            loginController.set('message', 'Account is now activated, You can now login');
            this.redirect('login');
        }
    }
});
