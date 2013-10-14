/**
 * will hold abstract class for all the models in the app
 * and will hold common functions for all the models
 * 
 * Created October 14th, 2013
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 * @author: Yariv Katz
 */

Nerdeez.NerdeezModel = DS.Model.extend({
	creation_date: DS.attr('date'),
	
	/**
	 * return the creation date in a human readable format
	 * @return: {String} beautiful date
	 */
	getCreationDate: function(){
		var date = new Date(this.get('creation_date'));
		return date.toLocaleDateString();
	}.property('creation_date')
});
