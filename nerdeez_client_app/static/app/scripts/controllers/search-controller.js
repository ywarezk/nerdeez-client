/**
* the controller for the search page
*
* @copyright: Nerdeez Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

/**
 * abstract controller for the search course and search university
 */
Nerdeez.SearchController = Ember.ArrayController.extend({
	
	/**
	 * the search query
	 * @property
	 * @public
	 * @type {string}
	 */
	searchQuery: null,

	iconClass: null,

	newSort: null,

	sortBy: null,

	sortName: "Relevance",

	filterBy: null,

	/**
	 * when the user submits the search form
	 */
	 search: function(){
			this.set('content', Nerdeez.Schoolgroup.find({search: this.get('searchQuery'), order_by: this.get('sortBy'), school_type: this.get('filterBy')}));
		}.observes('searchQuery', 'sortBy', 'filterBy'),

	 actions: {
		setSort: function(sortBy) {
			this.set("sortName", sortBy.charAt(0).toUpperCase() + sortBy.slice(1));
			if (sortBy === "relevance")
				this.set("sortBy", null);
			else
				this.set("sortBy", sortBy);
		},

		setFilter: function(filterBy) {
		}
	}
});