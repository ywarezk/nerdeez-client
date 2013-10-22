/**
 * the route for the school gorup about page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */


Nerdeez.SchoolgroupAboutRoute = Nerdeez.LoginRequired.extend({
	enter: function(){
		this.populateMastheadSchoolgroupRoutes(this.modelFor('schoolgroup'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'schoolgroup.about', model: this.modelFor('schoolgroup'), title: 'About'});
	},
	
    model: function(){
        return this.modelFor('schoolgroup');
    }
});