/**
 * the view for the school group files section
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.SchoolgroupFilesView = Ember.View.extend({
	actions: {
		showAddHw: function(){
			$('#new-hw').modal('show');
		},
		
		newHW: function(){
			var onSuccess = function(){
				$('#new-hw').modal('hide');
			}
			this.controller.send('newHW', onSuccess);
		}
	}
});
