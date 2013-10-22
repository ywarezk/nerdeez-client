/**
* the controller for the wall page
*
* @copyright: Nerdeez Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.SchoolgroupWallController = Ember.Controller.extend(Nerdeez.Share, Nerdeez.LikeDislike,{

	/**
	* Init facebook's share function from the Mixin
	**/

	shareInit: function(){
		this.set('shareName', this.get('content.title'));
		this.set('shareDescription', this.get('content.description'));
	}

});