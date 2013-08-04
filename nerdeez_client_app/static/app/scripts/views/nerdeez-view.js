/**
* all views in the application will extend this master view
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

Nerdeez.NerdeezView = Ember.View.extend(Nerdeez.LoadingMixin, {
	 
	/**
	* holds the static url
	* @type {{string}}
	* @public
	*/
	staticUrl: STATIC_URL,

	viewId : this.elementId,

    onSuccess : function(json){
	    return $("#" + this.elementId + " .successTrigger").show();
	},

	onError : function(json) {
        $("#" + this.elementId + " .errorTrigger").text(json[error]);
        $("#" + this.elementId + " .errorTrigger").show();
	}
});


/*
* added the required attribute for text inputs
* for the form validation
*/

Ember.TextSupport.reopen({
	attributeBindings: ["required"]
});