/*global Ember, DS */



/**
 * init application
 */
var Nerdeez = window.Nerdeez = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap'
    
});

/**
 * application constants
 */
Nerdeez.SCHOOLGROUP_TYPE = [
	{id: 1, title: 'Course'},
	{id: 2, title: 'Faculty'},
	{id: 3, title: 'University'}
]

Nerdeez.SORTBY_TYPE = [
	{value: 'null', title: 'Relevance'},
	{value: 'title', title: 'Title'},
	{value: '-grade', title: 'Rating'},
	{value: 'users', title: 'Users'},
	{value: 'files', title: 'Files'}
]

Nerdeez.SEARCH_LIMIT = 20;

Nerdeez.UPLOAD_ALLOWED_EXTENSIONS = ['.doc', '.docx', '.pdf', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar', '.png', '.jpg', '.jpeg', '.bmp', '.gif'] 
Nerdeez.UPLOAD_SERVICES = ['COMPUTER','DROPBOX', 'GOOGLE_DRIVE', 'SKYDRIVE', 'URL', 'GMAIL','BOX'] 

/**
* application init function
* will check if the user is logged in upon application start
*/
var readyFunction = function(temp1, temp2, temp3){
	var adapter = Nerdeez.Adapter.current();
	var auth = Nerdeez.Auth.current();
	auth.set('apiKey', $.cookie('apiKey'));
	auth.set('username', $.cookie('username'));
	adapter.set('apiKey', $.cookie('apiKey'));
	adapter.set('username', $.cookie('username'));
	auth.set('userProfile',Nerdeez.Userprofile.find($.cookie('id')));
	auth.set('id',$.cookie('id'));
	Nerdeez.set('auth', auth);
	
	
	
	// adapter.ajax(
        // SERVER_URL + '/api/v1/utilities/is-login/',
        	// 'POST',
        	// {
	        	// success: function(json){
	        		// Nerdeez.get('auth').set('isLoggedIn',json['is_logged_in']);
	        		// //var userProfile = Nerdeez.Userprofile.createRecord(json['user_profile']);
	        		// //userProfile.set('data', {school_groups: json['user_profile'].school_groups})
	        		// //var school_groups = userProfile.get('school_groups');
	        		// //var userProfile = Nerdeez.Userprofile.createRecord(json['user_profile']);
	        		// Nerdeez.get('auth').set('user_profile',Nerdeez.Userprofile.find(json['user_profile'].id));
	        	// },
	        	// error: function(json){
	        		// Nerdeez.get('auth').set('isLoggedIn',false);
	        	// },
	        	// data:{}
        	// }    
    // );
}
Nerdeez.set('ready', readyFunction);



//vendor files
require('bower_components/facebook/facebook');
require('bower_components/jquery-plugin/jquery.cookie');

//mixins
require('scripts/mixins/like-mixin');

//application files
require('scripts/nerdeez-ember/mixins');
require('scripts/views/nerdeez-view');
require('scripts/views/add-schoolgroup-view');
require('scripts/views/schoolgroup-hws-view');
require('scripts/views/schoolgroup-hws-hw-view');
require('scripts/views/index-view');
require('scripts/models/nerdeez-model');
require('scripts/views/schoolgroup-files-view');
require('scripts/components/fb-comment-component');
require('scripts/components/pagination-component');
require('scripts/models/schoolgroup-model');
require('scripts/models/flatpage-model');
require('scripts/models/auth-model');
require('scripts/models/user-profile-model');
require('scripts/models/enroll-model');
require('scripts/models/hw-model');
require('scripts/models/file-model');
require('scripts/controllers/search-controller');
require('scripts/controllers/login-controller');
require('scripts/controllers/register-controller');
require('scripts/controllers/contact-controller');
require('scripts/controllers/wall-controller');
require('scripts/controllers/change-password-controller');
require('scripts/controllers/forget-password-controller');
require('scripts/controllers/reset-password-controller');
require('scripts/controllers/add-schoolgroup-controller');
require('scripts/controllers/schoolgroup-hws-controller');
require('scripts/controllers/schoolgroup-hws-hw-controller');
require('scripts/controllers/index-controller');
require('scripts/nerdeez-ember/handlebars_helpers');
require('scripts/handlebars-helpers/nerdeez-handlebars-helpers');

//routes
require('scripts/routes/nerdeez-routes');
require('scripts/routes/add-schoolgroup-course');
require('scripts/routes/add-schoolgroup-course-route');
require('scripts/routes/add-schoolgroup-faculty-route');
require('scripts/routes/add-schoolgroup-uni-route');
require('scripts/routes/application-route');
require('scripts/routes/change-password-route');
require('scripts/routes/flatpages-route');
require('scripts/routes/hws-hw-route');
require('scripts/routes/hws-route');
require('scripts/routes/index-route');
require('scripts/routes/loading-route');
require('scripts/routes/logout-route');
require('scripts/routes/reset-password-route');
require('scripts/routes/schoolgroup-about-route');
require('scripts/routes/schoolgroup-route');
require('scripts/routes/schoolgroup-wall-route');
require('scripts/routes/search-route');
require('scripts/routes/underconstruction-route');
require('scripts/routes/verify-email-route');



//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store/nerdeez-store');

