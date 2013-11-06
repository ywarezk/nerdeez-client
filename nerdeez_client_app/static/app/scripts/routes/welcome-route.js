/**
 * the route for the welcome page
 * 
 * Created November 6th, 2013
 * @author: Doron Nachshon
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.WelcomeRoute = Nerdeez.NerdeezRoute.extend({
    model: function(){
        return Nerdeez.Schoolgroup.find({
            school_type: 3,
            page: 'search',
            order_by: 'users'
        });
    }
});