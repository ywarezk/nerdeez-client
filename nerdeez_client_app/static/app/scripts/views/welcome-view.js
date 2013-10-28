/**
 * the view for the welcome page
 * 
 * Created Septemeber 28th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Yariv Katz
 * 
 */

Nerdeez.WelcomeView = Ember.View.extend({
	didInsertElement: function() {
		$('#topbar').hide();
		$('#header').hide();
		$('#masthead').hide();
		$('#main-nav').hide();
		$('#left-sidebar-location').hide();
		$('.push').hide();
		$('#footer').hide();
	}
});