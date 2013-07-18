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
Nerdeez.NerdeezSearchController = Ember.ArrayController.extend({
	
	/**
	 * the search query
	 * @property
	 * @public
	 * @type {string}
	 */
	searchQuery: null,
	
	/**
	 * the model for the search
	 * @property
	 * @private
	 * @type {subclass of DS.Model}
	 */
	_model: null,
	
	/**
	 * when the user submits the search form
	 */
	search: function(){
		if(this.get('_model') != null)
			this.set('content', this.get('_model').find({search: this.get('searchQuery')}));
	}.observes('searchQuery')
});

/**
 * the controller for the search university
 */
Nerdeez.SearchUniversityController = Nerdeez.NerdeezSearchController.extend({
	_model: Nerdeez.University
});

/**
 * the controller for the search course
 */
Nerdeez.SearchCourseController = Nerdeez.NerdeezSearchController.extend({
	_model: Nerdeez.Course
});
