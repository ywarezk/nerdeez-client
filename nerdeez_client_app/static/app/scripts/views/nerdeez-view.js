/**
* all views in the application will extend this master view
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

Nerdeez.NerdeezView = Ember.View.extend({
	 
	/**
	* holds the static url
	* @type {{string}}
	* @public
	*/
	staticUrl: STATIC_URL,

});


/*
* added the required attribute for text inputs
* for the JQuery validation plugin
*/

Ember.TextSupport.reopen({
	attributeBindings: ["required"]
});