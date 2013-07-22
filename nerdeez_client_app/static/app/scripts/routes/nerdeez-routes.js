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
	this.resource('flatpage', function() {
		this.route('about');
		this.route('terms');
		this.route('privacy');
	});
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

Nerdeez.FlatpageAboutRoute = Ember.Route.extend({
	model: function(param){
		page = Nerdeez.Flatpage.find({'title' : 'about'});
		return page.objectAt(0);
	}
});

Nerdeez.FlatpagePrivacyRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'}).objectAt(0);
	}
});

Nerdeez.FlatpageTermsRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'terms'}).objectAt(0);
	}
});