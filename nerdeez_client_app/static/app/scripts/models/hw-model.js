/**
 * model for the h.w
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Hw = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	grade: DS.attr('number'),
	school_group: DS.belongsTo('Nerdeez.Schoolgroup'),
	files: DS.hasMany('Nerdeez.File'),
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
