/**
 * the route for the welcome page
 * 
 * Created October 28nd, 2013
 * @author: Doron Nachshon
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.IndexRoute = Nerdeez.NerdeezRoute.extend({
	model: function(){
        return Nerdeez.Schoolgroup.find({
            school_type: 3,
            page: 'search'
        });
    },
    setupController: function(controller, model){
        this._super(controller, model);
        var totalFiles = 0;
        model.forEach(function(item, index, enumerable){
            totalFiles+=item.get('num_files');
        })
        controller.set('numFiles', totalFiles);
    },
    redirectIfNeeded: function(model){
        isLoggedIn = Nerdeez.get('auth.isLoggedIn');
        if(isLoggedIn){
            this.transitionTo('homepage');
        }
    },
});