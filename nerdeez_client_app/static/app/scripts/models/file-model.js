/**
 * model for the files
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.File = DS.Model.extend({
	title: DS.attr('string'),
	grade: DS.attr('number'),
	hw: DS.belongsTo('Nerdeez.Hw'),
	file: DS.attr('string'),
	size: DS.attr('number'),
	like: DS.attr('number'),
	dislike: DS.attr('number')
});
