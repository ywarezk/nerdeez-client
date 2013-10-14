/**
 * model for the h.w
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Hw = Nerdeez.NerdeezModel.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	grade: DS.attr('number'),
	school_group: DS.belongsTo('Nerdeez.Schoolgroup'),
	files: DS.hasMany('Nerdeez.File'),
	like: DS.attr('number'),
	dislike: DS.attr('number'),
});
