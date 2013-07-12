/*global Ember, DS */

var Nerdeez = window.Nerdeez = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap'
    
});

/* Order and include as you please. */
// require('scripts/routes/*');
// require('scripts/controllers/*');
// require('scripts/models/*');
// require('scripts/views/*');

require('scripts/views/nerdeez-view.js');
require('scripts/views/header-view.js');

Nerdeez.Router.map(function () {
  // put your routes here
});

Nerdeez.Store = DS.Store.extend({
});


Nerdeez.IndexRoute = Ember.Route.extend({

	/**
	 * render the header and the footer
	 */
	renderTemplate : function() {
		this._super();
		this.render('header', {
			into : 'application',
			outlet : 'header'
		});
	}
}); 

