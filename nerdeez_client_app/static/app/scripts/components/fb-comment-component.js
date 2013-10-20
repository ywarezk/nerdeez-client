
Nerdeez.FbCommentComponent = Ember.Component.extend({

	dataLink: window.location.href,

	dataColorScheme: "light",

	dataNumPosts: 5,

	dataWidth: 870,

	didInsertElement: function(){
		FB.XFBML.parse();
	}
});