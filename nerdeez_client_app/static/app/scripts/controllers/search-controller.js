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

	sortBy: null,

	sortName: "Relevance",

	filterBy: null,

	resultNum : 0,

	/**
	 * when the user submits the search form
	 */
	 search: function(){
	 	var searchmsg = {};
	 	searchmsg['limit'] = Nerdeez.get('SEARCH_LIMIT');
	 	if (this.get('searchQuery') !== null)
	 		searchmsg['search'] = this.get('searchQuery');
	 	if (this.get('sortBy') !== null)
	 		searchmsg['order_by'] = this.get('sortBy');
	 	if (this.get('filterBy') !== null)
	 		searchmsg['school_type'] = this.get('filterBy');
		this.set('content', Nerdeez.Schoolgroup.find(searchmsg));
		this.set('resultNum', this.get('content.content.length'));
		}.observes('searchQuery', 'sortBy', 'filterBy'),

	 actions: {
		setSort: function(sortBy) {
			this.set("sortName", sortBy.title);
			this.set("sortBy", sortBy.value);
		}
	}
});