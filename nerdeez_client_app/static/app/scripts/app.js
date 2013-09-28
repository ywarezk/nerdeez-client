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

/**
* application init function
* will check if the user is logged in upon application start
*/
var readyFunction = function(temp1, temp2, temp3){
	var adapter = Nerdeez.Adapter.current();
	adapter.ajax(
        SERVER_URL + '/api/v1/utilities/is-login/',
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
}
Nerdeez.set('ready', readyFunction);



//vendor files
require('bower_components/facebook/facebook');

//application files
require('scripts/nerdeez-ember/singleton');
require('scripts/views/nerdeez-view');
require('scripts/views/add-schoolgroup-view');
require('scripts/models/schoolgroup-model');
require('scripts/models/flatpage-model');
require('scripts/models/auth-model');
require('scripts/controllers/search-controller');
require('scripts/controllers/login-controller');
require('scripts/controllers/register-controller');
require('scripts/controllers/contact-controller');
require('scripts/controllers/change-password-controller');
require('scripts/controllers/forget-password-controller');
require('scripts/controllers/reset-password-controller');
require('scripts/controllers/add-schoolgroup-controller');
require('scripts/handlebars-helpers/nerdeez-handlebars-helpers');

//routes
require('scripts/routes/nerdeez-routes');


//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store/nerdeez-store');

