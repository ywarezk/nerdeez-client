/**
 * the routes for all the pages that are under construciton
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

/**
 * all the under construction pages will extend this
 */
Nerdeez.UnderConstructionRoute = Ember.Route.extend({
	
    renderTemplate: function() {
        this.render('underConstruction');
    }
});

Nerdeez.DonateRoute = Nerdeez.UnderConstructionRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'donate', model: null, title: 'Buy T-Shirts'});
		Nerdeez.set('masthead', masthead);
	},
});