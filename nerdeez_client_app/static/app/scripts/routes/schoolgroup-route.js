/**
 * the route for the schoolgroup
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 2.0
 * @copyright: Nerdeez
 */

Nerdeez.SchoolgroupRoute = Nerdeez.NerdeezRoute.extend({
	
    model: function(param){
        return Nerdeez.Schoolgroup.find(param.schoolgroup_id);
    },
    
    setupController: function(controller, model){
	    	controller.set('content', model);
	    	if(Nerdeez.get('auth.isLoggedIn')){
		    	var enroll = Nerdeez.Enroll.createRecord();
			enroll.set('user', Nerdeez.get('auth.userProfile'));
			enroll.set('school_group', model);
			enroll.transaction.commit();
			
			var enrolls = Nerdeez.get('auth.userProfile.enrolls');
			var isInBar = false;
			enrolls.forEach(function(item, index, enumerable){
				if(item.get('school_group.id') == model.get('id'))isInBar = true;
			});
			if(!isInBar){
				enrolls.insertAt(0,enroll);
			}
		}
		
		var masthead = Ember.A();
		masthead.addObject({route: 'index', model: null, title: 'Home'});
		Nerdeez.set('masthead', masthead);
		this.schoolGroupRoutes(model);
    }
});