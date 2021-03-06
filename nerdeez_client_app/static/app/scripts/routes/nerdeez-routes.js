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
    this.route('homepage');
	this.route('search', {path: '/search/:search_param'});
	this.route('about');
	this.route('terms');
	this.route('privacy');
	this.route('donate');
	this.route('chooseFaculty', {path: '/choose-faculty/:uni_id'});
	this.route('chooseCourse', {path: '/choose-course/:faculty_id'});
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
    this.resource('quickstart',{path: '/quickstart/:uniId'}, function(){
       this.route('faculty');
       this.route('course'); 
    });
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
        return decodeURIComponent(decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.href)||[,null])[1]
        ));
    },
    
    /**
     * will grab the get params from the url and return a dictionary with the data
     * @returns {Object} dictionary object from the url
     */
    getUrlParamsAsDisctionary: function(){
	    	var search = location.search.substring(1);
	    	return JSON.parse('{"' + decodeURIComponent(decodeURI(search.replace(/&/g, "\",\"").replace(/=/g,"\":\""))) + '"}');
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
	        	loginController.error('You must be logged in to access this page');
	        	loginController.set('redirect', this.routeName);
	        	loginController.set('redirectModel', model);
	        	this.transitionTo('login');
        }
	},
	
	
    // redirect: function(){
        // this.redirectIfNeeded(this.model());
    // }
});



































