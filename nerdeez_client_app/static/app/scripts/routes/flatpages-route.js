/**
 * the routes for all the flat pages
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

/**
 * all the flat pages will extend this route
 */
Nerdeez.FlatPageRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('flatpage');
    }
});

/**
 * route to about page
 */
Nerdeez.AboutRoute = Nerdeez.FlatPageRoute.extend({
	
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'about', model: null, title: 'About'});
		Nerdeez.set('masthead', masthead);
	},
	
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Nerdeez.PrivacyRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'privacy', model: null, title: 'Privacy'});
		Nerdeez.set('masthead', masthead);
	},
	
	// model: function(param){
		// return Nerdeez.Flatpage.find({'title' : 'privacy'});
	// }
});

/**
 * route to terms page
 */
Nerdeez.TermsRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		masthead.addObject({route: 'terms', model: null, title: 'Terms & Conditions'});
		Nerdeez.set('masthead', masthead);
	},
	
	// model: function(param){
		// return Nerdeez.Flatpage.find({'title': 'terms'});
	// }
});