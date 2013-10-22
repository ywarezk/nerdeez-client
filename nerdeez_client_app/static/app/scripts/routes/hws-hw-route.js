/**
 * the route for a single h.w page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

Nerdeez.HwsHwRoute = Nerdeez.LoginRequired.extend({
	
    model: function(param){
        var model = Nerdeez.Hw.find(param.hwId);
        this.redirectIfNeeded(model);
        return model;
    },
    
    setupController: function(controller, model){
	    	controller.set('content', model);
	    	this.populateMastheadSchoolgroupRoutes(model.get('school_group'));
		var masthead = Nerdeez.get('masthead');
		masthead.addObject({route: 'hws.index', model: model.get('school_group'), title: "H.W's"});
		masthead.addObject({route: 'hws.hw', model: model, title: model.get('title')});
	},
});