/**
 * the view for a hw page
 * 
 * Created October 18th, 2013
 * @version: 2.0
 * @copyright: Nerdeez Ltd.
 * @author: Yariv Katz
 */

Nerdeez.HwsHwView = Ember.View.extend({
	actions: {
		flagFile: function(file){
			$('#flag-file').modal('show');
			this.controller.set('flaggedFile', file);
		}
	}
});
