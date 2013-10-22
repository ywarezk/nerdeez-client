/**
 * the route for a schoolgroup wall page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 * 
 */

/**
 * the route to a course wall page
 */
Nerdeez.SchoolgroupWallRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		this.populateMastheadSchoolgroupRoutes(this.modelFor('schoolgroup'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'schoolgroup.wall', model: this.modelFor('schoolgroup'), title: 'Wall'});
	},
	
    model: function(){
        return this.modelFor('schoolgroup');
    }
});