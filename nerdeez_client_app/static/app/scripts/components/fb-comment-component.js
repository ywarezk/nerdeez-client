/**
 * The View Component of the Facebook comments plugin
 * 
 * Created October 20th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Doron Nachshon
 * 
 */



Nerdeez.FbCommentComponent = Ember.Component.extend({

  	/**
  	* The absolute URL that comments posted in the plugin will be permanently associated with this URL.
  	* Stories on Facebook about comments posted in the plugin will link to this URL.
  	* @property
  	* @public
  	* @type {string}
  	*/
	dataLink: null,

	/**
	* The color scheme used by the plugin. Can be "light" or "dark".
	* @property
	* @public
	* @type {string}
	*/
	dataColorScheme: "light",

	/**
	* The number of comments to show by default. The minimum value is 1.
	* @property
	* @public
	* @type {integer}
	*/
	dataNumPosts: 5,

	/**
	* The width (in pixels) of the plugin.
	* The mobile version of the Comments plugin ignores the width parameter,
	* and instead has a fluid width of 100%.
	* @property
	* @public
	* @type {integer}
	*/
	dataWidth: 870,

	didInsertElement: function(){
		this.set('dataLink', window.location.href);

		Ember.run.scheduleOnce('afterRender', this, function(){
      		FB.XFBML.parse();
      	});
	}
});