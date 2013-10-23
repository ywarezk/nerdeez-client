/**
 * the route for the schoolgroup/##/hws page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

Nerdeez.HwsIndexRoute = Nerdeez.LoginRequired.extend({
	enter: function(){
		this.populateMastheadSchoolgroupRoutes(this.modelFor('schoolgroup'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'hws.index', model: this.modelFor('schoolgroup'), title: "H.W's"});
	},
	
    model: function(){
		this.redirectIfNeeded(this.modelFor('schoolgroup'));
        return Nerdeez.Hw.find({school_group__id: this.modelFor('schoolgroup').get('id')});
    },
    setupController: function(controller, model){
        if (model == null)this.redirectIfNeeded(this.modelFor('schoolgroup'));
	    controller.set('content', model);
	    	controller.set('schoolGroup', this.modelFor('schoolgroup'));
    },
    actions: {
        error: function(temp1, temp2){
            console.log('ERRoR');
        }
    }
});