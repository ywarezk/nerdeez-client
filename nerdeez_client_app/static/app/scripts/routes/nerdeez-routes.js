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
    this.resource('course', { path: '/course/:course_id' }, function(){
        this.route('wall');
        this.route('files');
    });
    this.route('login');
});

/**
 * all the routes that require login will extend this
 * Usage: just extend this class instead of the regular Ember.Route
 */
Nerdeez.LoginRequired = Ember.Route.extend({
    enter: function(){
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
                self.transitionTo('login');
            }
        });
    }
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

Nerdeez.AboutRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	},

	setupController: function(param, model){
		this.controller.set('content', model);
	}
});

Nerdeez.PrivacyRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'});
	}
});

Nerdeez.TermsRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title': 'terms'});
	}
});

/**
 * the route to a course page
 */
Nerdeez.CourseRoute = Nerdeez.LoginRequired.extend({
    model: function(param){
        return Nerdeez.Course.find(param.course_id);
    }
});

/**
 * the route to a course wall page
 */
Nerdeez.CourseWallRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('course');
    }
});

/**
 * the route to a course files page
 */
Nerdeez.CourseFilesRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('course');
    }
});
