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

	selectedSort: "Best Match",

	newSort: null,

	/**
	 * when the user submits the search form
	 */
	search: function(){
		this.set('content', Nerdeez.Schoolgroup.find({search: this.get('searchQuery')}));
	}.observes('searchQuery'),

	
	actions: {
		manageSort: function(yariv){
			this.set("selectedSort", yariv);
			this.set('content', Nerdeez.Schoolgroup.find({order_by: yariv}))
		}
	}
});