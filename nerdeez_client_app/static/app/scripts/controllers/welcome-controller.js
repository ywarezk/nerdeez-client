/**
 * The controller for the welcome page
 * 
 * Created October 28st, 2013
 * @author: Doron Nachshon
 * @version: 1.0
 * @copyright nerdeez Ltd.
 */

Nerdeez.WelcomeController = Ember.Controller.extend({
	showElements: function() {
		$('#topbar').toggle();
		$('#header').toggle();
		$('#masthead').toggle();
		$('#main-nav').toggle();
		$('#left-sidebar-location').toggle();
		$('.push').toggle();
		$('#footer').toggle();
	},

	actions: {

		registerLink: function() {
			this.showElements();
			this.transitionToRoute('register');
		},

		loginLink: function () {
			this.showElements();
			this.transitionToRoute('login');
		}
	}
});