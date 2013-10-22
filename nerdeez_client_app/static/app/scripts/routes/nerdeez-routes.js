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
	this.route('search', {path: '/search/:search_param'});
	this.route('about');
	this.route('terms');
	this.route('privacy');
	this.route('donate');
    this.resource('schoolgroup', { path: '/schoolgroup/:schoolgroup_id' }, function(){
        this.route('wall');
        //this.route('hws');
        this.resource('hws', function(){
	        	this.route('hw', {path: '/hw/:hwId'});
        });
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
    schoolGroupRoutes: function(model){
	    	var masthead = Nerdeez.get('masthead');
	    	if (model.get('parent') != null){
	    		this.schoolGroupRoutes(model.get('parent'));
	    		
		}
		masthead.addObject({route: 'schoolgroup.about', model: model, title: model.get('title')});
		
	},
	
	populateMastheadSchoolgroupRoutes: function(model){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		Nerdeez.set('masthead', masthead);
		this.schoolGroupRoutes(model);
	},
    
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
Nerdeez.LoginRequired = Nerdeez.NerdeezRoute.extend({
	redirectIfNeeded: function(model){
		isLoggedIn = Nerdeez.get('auth.isLoggedIn');
        if(!isLoggedIn){
	        	
	        	var loginController = this.controllerFor('login');
	        	loginController.set('isError', true);
	        	loginController.set('message', 'You must be logged in to access this page');
	        	loginController.set('redirect', this.routeName);
	        	loginController.set('redirectModel', model);
	        	this.transitionTo('login');
        }
	},
    // redirect: function(){
        // this.redirectIfNeeded(this.model());
    // }
});

Nerdeez.LogoutRoute = Ember.Route.extend({
    redirect: function(){
	    var auth = Nerdeez.Auth.current();
	    auth.set('username', null);
	    auth.set('apiKey', null);
	    auth.set('id', null);
	    $.removeCookie('username');
	    $.removeCookie('apiKey');
	    $.removeCookie('id');
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
		
		var xthis = this;
		
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
	
	// model: function(){
		// if(Nerdeez.get('auth.isLoggedIn')){
			// return Nerdeez.Userprofile.find(Nerdeez.get('auth.id'));
		// }
	// },
// 	
	// setupController: function(controller, model){
		// var auth = Nerdeez.Auth.current();
		// auth.set('userProfile',model);
	// },
// 	
	// actions: {
		// error: function(status){
			// console.log('ERROR');
		// }
	// }
	
});

Nerdeez.IndexRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(){
		return Nerdeez.Schoolgroup.find({
			school_type: 3,
			image__isnull: false,
			limit: 10,
			page: 'search'
		});
	},
	
	setupController: function(controller, model){
		this._super(controller, model);
		var files = Nerdeez.File.find({limit: 1});
		files.one('didLoad', function(){
			controller.set('numFiles', files.get('content.totalCount'));	
		});
	}
});


/**
 * the route for the university search, grab the initial data
 */
Nerdeez.SearchRoute = Ember.Route.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'search', model: null, title: 'Search'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(param){
		return Nerdeez.Schoolgroup.find({limit: 20, order_by: 'title', page: 'search'});
	},
	
	serialize: function(model) {
		  return {search_param: '#'};
	},
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
	
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'about', model: null, title: 'About'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Nerdeez.PrivacyRoute = Nerdeez.FlatPageRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'privacy', model: null, title: 'Privacy'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'});
	}
});

/**
 * route to terms page
 */
Nerdeez.TermsRoute = Nerdeez.FlatPageRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'terms', model: null, title: 'Terms & Conditions'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(param){
		return Nerdeez.Flatpage.find({'title': 'terms'});
	}
});

/**
 * all the under construction pages will extend this
 */
Nerdeez.UnderConstructionRoute = Ember.Route.extend({
	
    renderTemplate: function() {
        this.render('underConstruction');
    }
});

Nerdeez.DonateRoute = Nerdeez.UnderConstructionRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'donate', model: null, title: 'Buy T-Shirts'});
		Nerdeez.set('masthead', masthead);
	},
});

/**
 * the route to a course page
 */
Nerdeez.SchoolgroupRoute = Nerdeez.NerdeezRoute.extend({
	
    model: function(param){
        return Nerdeez.Schoolgroup.find(param.schoolgroup_id);
    },
    
    setupController: function(controller, model){
	    	controller.set('content', model);
	    	if(Nerdeez.get('auth.isLoggedIn')){
		    	var enroll = Nerdeez.Enroll.createRecord();
			enroll.set('user', Nerdeez.get('auth.userProfile'));
			enroll.set('school_group', model);
			enroll.transaction.commit();
			
			var enrolls = Nerdeez.get('auth.userProfile.enrolls');
			var isInBar = false;
			enrolls.forEach(function(item, index, enumerable){
				if(item.get('school_group.id') == model.get('id'))isInBar = true;
			});
			if(!isInBar){
				enrolls.insertAt(0,enroll);
			}
		}
		
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		Nerdeez.set('masthead', masthead);
		this.schoolGroupRoutes(model);
    }
});

/**
 * the route to a course wall page
 */
Nerdeez.SchoolgroupWallRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		this.populateMastheadSchoolgroupRoutes(this.modelFor('schoolgroup'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'schoolgroup.wall', model: this.modelFor('schoolgroup'), title: 'Wall'});
	},
	
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route to a course files page
 */
Nerdeez.HwsIndexRoute = Nerdeez.LoginRequired.extend({
	enter: function(){
		this.populateMastheadSchoolgroupRoutes(this.modelFor('schoolgroup'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'hws.index', model: this.modelFor('schoolgroup'), title: "H.W's"});
	},
	
    model: function(){
		this.redirectIfNeeded(this.modelFor('schoolgroup'));
        return Nerdeez.Hw.find({school_group__id: this.modelFor('schoolgroup').get('id')});
    },
    setupController: function(controller, model){
	    controller.set('content', model);
	    	controller.set('schoolGroup', this.modelFor('schoolgroup'));
    }
});

/**
 * the route to a single hw page
 */
Nerdeez.HwsHwRoute = Nerdeez.LoginRequired.extend({
	
    model: function(param){
        var model = Nerdeez.Hw.find(param.hwId);
        this.redirectIfNeeded(model);
        return model;
    },
    
    setupController: function(controller, model){
	    	controller.set('content', model);
	    	this.populateMastheadSchoolgroupRoutes(model.get('school_group'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'hws.index', model: model.get('school_group'), title: "H.W's"});
		masthead.addObject({route: 'hws.hw', model: model, title: model.get('title')});
	},
});

/**
 * the route to a course about page
 */
Nerdeez.SchoolgroupAboutRoute = Nerdeez.LoginRequired.extend({
	enter: function(){
		this.populateMastheadSchoolgroupRoutes(this.modelFor('schoolgroup'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'schoolgroup.about', model: this.modelFor('schoolgroup'), title: 'About'});
	},
	
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route for the add school group page
 */
Nerdeez.AddSchoolGroupRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'addSchoolGroup', model: null, title: 'Add Uni/Faculty/Course'});
		Nerdeez.set('masthead', masthead);
	},
	
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

Nerdeez.LoadingRoute = Nerdeez.NerdeezRoute.extend({});
