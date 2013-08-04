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
    
    /**
     * common actions when view finish reloading
     */
    didInsertElement: function(){
        FB.XFBML.parse();
    }

Ember.TextSupport.reopen({
	attributeBindings: ["required"]
});
