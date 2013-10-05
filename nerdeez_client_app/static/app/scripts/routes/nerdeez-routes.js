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
        this.route('about');
    });
    this.route('login');
    this.route('logout');
    this.route('register');
    this.route('contact');
    this.route('verifyEmail', {path: '/verify-email/:hash'});
    this.route('changePassword', {path: '/change-password'});
    this.route('forgetPassword', {path: '/forget-password'})
    this.route('resetPassword', {path: '/reset-password/:hash'})
    this.resource('addSchoolGroup', {path: '/add-school-group'}, function(){
	    	this.route('course');
	    	this.route('faculty');
	    	this.route('uni');
    })
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
        isLoggedIn = Nerdeez.get('auth.isLoggedIn');
        if(!isLoggedIn){
	        	this.transitionTo('login');
        }
    }
});

Nerdeez.LogoutRoute = Ember.Route.extend({
    redirect: function(){
        // self = this;
        // FB.logout(function(response) {
            // Ember.run(function(){
                // Nerdeez.set('isConnected' , false);    
            // });
            // self.transitionTo('index');
        // });
        var adapter = Nerdeez.Adapter.current();
        adapter.ajax(
	        SERVER_URL + '/api/v1/utilities/logout/',
	        	'POST',
	        	{
		        	success: function(json){
		        		var auth = Nerdeez.Auth.current();
		        		auth.set('isLoggedIn', json['is_logged_in']);
		        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
		        	},
		        	error: function(json){
		        	    var auth = Nerdeez.Auth.current();
		        		auth.set('isLoggedIn', false);
		        		Nerdeez.set('isLoggedIn', false);
		        	},
		        	data:{}
	        	}    
	    );
	    FB.logout();
        this.transitionTo('index');
    }
});

Nerdeez.ChangePasswordRoute = Nerdeez.LoginRequired.extend({});

Nerdeez.ResetPasswordRoute = Nerdeez.NerdeezRoute.extend({
	
	/**
	 * will grab the params from the url and set them in the controller 
	 */
	setupController: function(controller, model){
		controller.set('email', this.getURLParameter('email'));
		controller.set('hash',this.getURLParameter('hash'));
	}
});

Nerdeez.ApplicationRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		
		//get the params from twitter if exists
		var oauthToken = this.getURLParameter('oauth_token');
		var oauthVerifier = 	this.getURLParameter('oauth_verifier');
		
		//if got message from twitter then get busy login
		if (oauthToken !== 'null' && oauthVerifier !== 'null'){
			var adapter = Nerdeez.Adapter.current();
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/twitter-login-callback/',
				'POST',
				{
					success: function(json){
						var auth = Nerdeez.Auth.current();
			        		auth.set('isLoggedIn', json['is_logged_in']);
			        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
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
 * the route to a course about page
 */
Nerdeez.SchoolgroupAboutRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route for the add school group page
 */
Nerdeez.AddSchoolGroupRoute = Nerdeez.NerdeezRoute.extend({
	model: function(param){
		
		//find the id of the university
		var universityId = 0;
		for(var i=0; i < Nerdeez.SCHOOLGROUP_TYPE.length; i++){
			if(Nerdeez.SCHOOLGROUP_TYPE[i].title === 'University'){
				universityId = Nerdeez.SCHOOLGROUP_TYPE[i].id;
			}
		}
		
		//return all the universities
		return Nerdeez.Schoolgroup.find({school_type: universityId});
	},
	
});

Nerdeez.AddSchoolGroupCourseRoute = Nerdeez.NerdeezRoute.extend({
	setupController: function(controller, model){
		this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[0].id);
	}
});

Nerdeez.AddSchoolGroupFacultyRoute = Nerdeez.NerdeezRoute.extend({
	setupController: function(controller, model){
		this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[1].id);
	}
});

Nerdeez.AddSchoolGroupUniRoute = Nerdeez.NerdeezRoute.extend({
	setupController: function(controller, model){
		this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[2].id);
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
