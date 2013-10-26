/**
 * the route for the choose faculty screen
 * 
 * Created October 24th, 2013
 * @author: Yariv Katz
 * @version: 1.02
 * @copyright: Nerdeez
 */

Nerdeez.QuickstartFacultyRoute = Nerdeez.NerdeezRoute.extend({
    model: function(param){
        return Nerdeez.Schoolgroup.find({parent__id: this.modelFor('quickstart').get('id')});
    },
    
    setupController: function(controller, model){
        this._super(controller, model);
        //var faculties = Nerdeez.Schoolgroup.find({parent__id: model.get('id')});
        //this.controllerFor('quickstart').loading();
        this.controllerFor('quickstart').set('chooseTitle', 'Faculty');
        //controller.set('test', true);
        // var xthis = this;
        // faculties.one('didLoad', function(){
            // controller.set('faculties', faculties);
            // xthis.controllerFor('quickstart').success();
            // controller.set('isLoading', false);    
        // });
        
    }
    
   
});
