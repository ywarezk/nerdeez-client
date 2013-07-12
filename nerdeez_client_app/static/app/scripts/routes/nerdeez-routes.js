/**
* this file will hold nerdeez application routes
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
* @copyright: nerdeez.com Ltd.
*/

Nerdeez.Router.map(function () {
  // put your routes here
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