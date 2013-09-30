/**
 * holds the model for the schoolgroups
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * abstract class for all the school group models
 */

Nerdeez.Schoolgroup = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	image: DS.attr('string'),
	school_type: DS.attr('number'),
	parent: DS.belongsTo('Nerdeez.Schoolgroup'),
	getIconClass: function() {
		a = this.get("school_type");
		if (a == 1)
			return "faculty-icon";
		else if (a == 2)
			return "university-icon";
		else
			return "course-icon";
	}.property("school_type")
});
