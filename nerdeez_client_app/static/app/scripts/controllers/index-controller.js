/**
 * controller for the homepage
 * 
 * Created October 20th, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

Nerdeez.IndexController = Ember.ArrayController.extend({
	needs: ['search'],
	
	/**
	 * will hold the user input from the quickstart box
	 * @type {String}
	 */
	quickStart: null,
	
	
	actions: {
		submitSearch: function(){
			var searchController = this.get('controllers.search');
			searchController.set('searchQuery', this.get('quickStart'));
			this.transitionToRoute('search', Nerdeez.Schoolgroup.find({
				limit: Nerdeez.get('SEARCH_LIMIT'),
				page: 'search',
				search: this.get('quickStart')
			}));	
		}
	}
	
});
