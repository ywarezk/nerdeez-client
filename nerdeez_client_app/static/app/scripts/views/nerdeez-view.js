/**
* all views in the application will extend this master view
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/


Ember.View.reopen({
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
        this._super();
        //FB.XFBML.parse();
        $('.js-validation').validationEngine();
        
        //fix for the history bar
        //$('.left-sidebar .child.active').closest('.parent').addClass('open')
        
    }
    
    // willDestroyElement: function(){
	    	// this._super();
	    	// $('.left-sidebar .child.active').closest('.parent').addClass('open')
    // }
});

Ember.Select.reopen({
	attributeBindings: ['data-errormessage-value-missing']
});

