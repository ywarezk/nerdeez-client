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
    this.resource('school-group', { path: '/school-group/:type/:course_id' }, function(){
        this.route('wall');
        this.route('files');
    });
    this.route('login');
    this.route('logout');
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

/**
 * the route to a course page
 */
Nerdeez.CourseRoute = Ember.Route.extend({
    model: function(param){
        return Nerdeez.Course.find(param.course_id);
    }
});

/**
 * the route to a course wall page
 */
Nerdeez.CourseWallRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('course');
    }
});

/**
 * the route to a course files page
 */
Nerdeez.CourseFilesRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('course');
    }
});
