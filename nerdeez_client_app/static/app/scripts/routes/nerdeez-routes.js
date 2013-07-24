/**
* this file will hold nerdeez application routes
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
*/

/**
 * define the routes urls here
 */
Nerdeez.Router.map(function () {
	this.resource('search', function() {
	    this.route('university');
	    this.route('course');
	});
	this.route('about');
	this.route('terms');
	this.route('privacy');
});

/**
 * the route for the university search, grab the initial data
 */
Nerdeez.SearchUniversityRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.University.find({limit: 20, order_by: 'title'});
	}
});

/**
 * the route for the course search, grab the initial data
 */
Nerdeez.SearchCourseRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Course.find({limit: 20, order_by: 'title'});
	}
});

/**
 * route to about page
 */
Nerdeez.AboutRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Nerdeez.PrivacyRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'});
	}
});

/**
 * route to terms page
 */
Nerdeez.TermsRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title': 'terms'});
	}
});