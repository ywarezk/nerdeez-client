/**
* the controller for the search university and search course will be here
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
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
	
	
	/**
	 * when the user submits the search form
	 */
	search: function(){
		this.set('content', Nerdeez.Schoolgroup.find({search: this.get('searchQuery')}));
	}.observes('searchQuery')
});

