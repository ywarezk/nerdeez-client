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
            image__isnull: false,
            limit: 10,
            page: 'search'
        });
    },
    
    setupController: function(controller, model){
        this._super(controller, model);
        var files = Nerdeez.File.find({limit: 1});
        files.one('didLoad', function(){
            controller.set('numFiles', files.get('content.totalCount'));    
        });
    }
});