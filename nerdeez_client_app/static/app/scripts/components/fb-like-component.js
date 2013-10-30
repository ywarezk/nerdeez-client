/**
 * The View Component of the Facebook like plugin
 * 
 * Created October 30th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Doron Nachshon
 * 
 */



Nerdeez.FbLikeComponent = Ember.Component.extend({
	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function(){
      		FB.XFBML.parse();
      	});
	}
});