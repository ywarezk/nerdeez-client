/**
 * the route for adding a faculty
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.AddSchoolGroupFacultyRoute = Nerdeez.NerdeezRoute.extend({
    setupController: function(controller, model){
        this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[1].id);
    }
});