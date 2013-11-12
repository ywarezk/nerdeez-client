/**
 * the route for the change password
 * 
 * Created November 10th, 2013
 * @author: Doron Nachshon
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.chooseUniversityRoute = Ember.Route.extend({
  renderTemplate: function() {

  	var controller = this.controllerFor('homepage');

    this.render('chooseUniversity', {
      outlet: 'homepage',
      controller: controller
    });
  }
});