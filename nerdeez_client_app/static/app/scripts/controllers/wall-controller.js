/**
* the controller for the wall page
*
* @copyright: Nerdeez Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.SchoolgroupWallController = Ember.Controller.extend(Nerdeez.Share, {

	/**
	* Init facebook's share function from the Mixin
	**/
	url: window.location.href,

	shareInit: function(){
		this.set('name', this.get('content.title'));
		this.set('description', this.get('content.description'));
	}

});