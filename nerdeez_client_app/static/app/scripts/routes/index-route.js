/**
 * the route for the homepage
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.IndexRoute = Nerdeez.NerdeezRoute.extend({
    enter: function(){
        var masthead = Ember.A();
        masthead.addObject({route: 'index', model: null, title: 'Home'});
        Nerdeez.set('masthead', masthead);
    },
    
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
    }
});