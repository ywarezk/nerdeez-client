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

	viewId : this.elementId,

    onSuccess : function(json){
	    $("#" + viewId + " .alert-success").text("Success! " + json['message']);
	},

	onError : function(json) {
        $("#" + viewId + " .alert-error").text("Error: " + json['message']);
	}
});


/*
* added the required attribute for text inputs
* for the form validation
*/

Ember.TextSupport.reopen({
	attributeBindings: ["required"]
});