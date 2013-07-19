/**
 * holds the model for the university resource
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * abstract class for all the school group models
 */

Nerdeez.SchoolGroup = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	image: DS.attr('string')
});

/**
 * uni model
 */
Nerdeez.University = Nerdeez.SchoolGroup.extend({
});

/**
 * course model
 */
Nerdeez.Course = Nerdeez.SchoolGroup.extend({
	university: DS.belongsTo('Nerdeez.University')
});