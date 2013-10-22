/**
 * the route for the add school group page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

/**
 * the route for the add school group page
 */
Nerdeez.AddSchoolGroupRoute = Nerdeez.NerdeezRoute.extend({
    enter: function(){
        var masthead = Ember.A();
        masthead.addObject({route: 'index', model: null, title: 'Home'});
        masthead.addObject({route: 'addSchoolGroup', model: null, title: 'Add Uni/Faculty/Course'});
        Nerdeez.set('masthead', masthead);
    },
    
    model: function(param){
        
        //find the id of the university
        var universityId = 0;
        for(var i=0; i < Nerdeez.SCHOOLGROUP_TYPE.length; i++){
            if(Nerdeez.SCHOOLGROUP_TYPE[i].title === 'University'){
                universityId = Nerdeez.SCHOOLGROUP_TYPE[i].id;
            }
        }
        
        //return all the universities
        return Nerdeez.Schoolgroup.find({school_type: universityId});
    },
    
});