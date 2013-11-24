/**
 * The View Component of the metro theme hover plugin
 * 
 * Created October 20th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Doron Nachshon
 * 
 */


Nerdeez.MetroHoverComponent = Ember.Component.extend({
	didInsertElement: function() {
		/*
		* Taken from new-theme/custom.js
		* Allows description hover on blocks
		*/
		$('ul.hover-block li').hover(function(){
        $(this).find('.hover-content').animate({top:'-3px'},{queue:false,duration:500});
      	}, function(){
        	$(this).find('.hover-content').animate({top:'125px'},{queue:false,duration:500});
    	
    	});
	}
});