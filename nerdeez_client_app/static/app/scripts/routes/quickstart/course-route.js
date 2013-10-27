/**
 * the route for the choose course page
 * 
 * Created October 25th, 2013
 * @author: Yariv Katz
 * @version: 1.02
 * @copyright: Nerdeez
 */

Nerdeez.QuickstartCourseRoute = Nerdeez.NerdeezRoute.extend({
    model: function(param){
        return Nerdeez.Schoolgroup.find({parent__id: this.modelFor('quickstart').get('id')});
    },
    setupController: function(controller, model){
        this._super(controller, model);
        this.controllerFor('quickstart').set('chooseTitle', 'Course');
        this.controllerFor('quickstart').set('faculty', this.modelFor('quickstart'));
    }
    
});
