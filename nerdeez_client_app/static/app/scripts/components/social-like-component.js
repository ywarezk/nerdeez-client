/**
 * The View Component of the Facebook like plugin
 * 
 * Created October 30th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Doron Nachshon
 * 
 */



Nerdeez.SocialLikeComponent = Ember.Component.extend({
	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function(){
      		FB.XFBML.parse();
      		gapi.plusone.go();
      	});
	}
});