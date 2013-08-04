/**
* here all the mixins for the application will be stored
*
* @copyright: nerdeez.com Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.LoadingMixin = Ember.Mixin.create({
	didInsertElement: function() {
    	$("#loader").remove();
	}
});