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

	/**
	* the sort query
	* @property
	* @public
	* @type {string}
	*/
	sortBy: null,

	/**
	* the sort value
	* @property
	* @public
	* @type {string}
	*/
	sortName: "Relevance",

	/**
	* the filter query
	* @property
	* @public
	* @type {string}
	*/
	filterBy: null,

	/**
	* number of search results
	* @property
	* @public
	* @type {integer}
	*/
	resultNum: 0,
	
	/**
	* set to true if we are moving to the loading state
	* @property
	* @private
	* @type {boolean}
	*/
	isLoading: false,
	
	/**
	 * will be binded to the pagination component extra params
	 * @type {Object}
	 */
	extraParams: {'page': 'search', 'order_by': 'title' },
	
	/**
	 * this is connected to the pagination page to reset the page when necessary
	 * @type {int}
	 */
	page: 0,

	/**
	 * triggers when the users is using the search bar / filter / sort by
	 */
	 search: function(){
	 	var xthis = this;
	 	var searchmsg = {};
	 	$('.result-num').hide();
	 	this.set('isLoading', true);
	 	searchmsg['limit'] = Nerdeez.get('SEARCH_LIMIT');
	 	searchmsg['page'] = 'search';
	 	if (this.get('searchQuery') !== null)
	 		searchmsg['search'] = this.get('searchQuery');
	 	if (this.get('sortBy') !== null)
	 		searchmsg['order_by'] = this.get('sortBy');
	 	if (this.get('filterBy') !== null)
	 		searchmsg['school_type'] = this.get('filterBy');
        
        xthis.set('extraParams', searchmsg);
        xthis.set('page',0);
	 	var srch = Nerdeez.Schoolgroup.find(searchmsg);

		this.set('content', srch);
		srch.one('didLoad', function() {
			xthis.set('isLoading', false);
			xthis.set('resultNum', xthis.get('content.content.length'));
			$('.result-num').show();
		});
		}.observes('searchQuery', 'sortBy', 'filterBy'),

	 actions: {
	 	/**
	 	* set the correct value and name for the sort by search query
	 	* @params array the current presented name and the value of the selected sort
	 	*/
		setSort: function(sortBy) {
			this.set("sortName", sortBy.title);
			this.set("sortBy", sortBy.value);
		},
		
		/**
		 * if the user managed to click a result then transfer him to the about page
		 * used for support for smartphone where the hover effect is a problem
		 */
		clickResult: function(schoolgroup){
			this.transitionToRoute("schoolgroup.about", schoolgroup);
		}
	}
});
