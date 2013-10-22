/**
 * the route for the search page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

/**
 * the route for the university search, grab the initial data
 */
Nerdeez.SearchRoute = Ember.Route.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'search', model: null, title: 'Search'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(param){
		return Nerdeez.Schoolgroup.find({limit: 20, order_by: 'title', page: 'search'});
	},
	
	serialize: function(model) {
		  return {search_param: '#'};
	},
});