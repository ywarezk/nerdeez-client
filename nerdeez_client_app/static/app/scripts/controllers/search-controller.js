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
	
	setIconClass: function() {
		a = this.get('content').school_type;
		if (a == 0)
			iconClass = "faculty-icon";
		else if (a == 1)
			iconClass = "university-icon";
		else
			iconClass = "course-icon";
	},
	/**
	 * when the user submits the search form
	 */
	search: function(){
		this.set('content', Nerdeez.Schoolgroup.find({search: this.get('searchQuery')}));
	}.observes('searchQuery')
});