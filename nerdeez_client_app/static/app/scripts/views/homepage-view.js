/**
 * the view for the homepage
 * 
 * Created October 21th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.HomepageView = Ember.View.extend({
	didInsertElement: function(){
		this._super();
		var stringOfHtml = $('#carousel-data').html();
		var wrappedString = '<div>' + stringOfHtml + '</div>';
		var noScript = wrappedString.replace(/script/g, "THISISNOTASCRIPTREALLY");
		var html = $(noScript);
		html.find('THISISNOTASCRIPTREALLY').remove();
		
		
		$('#carousel-example-generic .carousel-inner').html(html.html());
	
	}
});
