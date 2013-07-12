/**
* this file will hold nerdeez application routes
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
* @copyright: nerdeez.com Ltd.
*/

/**
 * define the routes urls here
 */
Nerdeez.Router.map(function () {
	this.resource('search', function() {
	    this.route('university');
	    this.route('course');
	});
});

/**
 * the application route
 */
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