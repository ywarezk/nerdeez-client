/**
 * holds the model for the schoolgroups
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */


Nerdeez.Schoolgroup = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	school_type: DS.attr('number'),
	parent: DS.belongsTo('Nerdeez.Schoolgroup'),
	grade: DS.attr('number'),
	user: DS.belongsTo('Nerdeez.Userprofile'),
	
	getIconClass: function() {
		a = this.get("school_type");
		if (a == 1)
			return "course-icon";
		else if (a == 2)
			return "faculty-icon";
		else
			return "university-icon";
	}.property("school_type"),
	
	isCourse: function() {
		if (this.get("school_type") == 1)
			return true;
		else
			return false;
	}.property("school_type"),
	isFaculty: function() {
		if (this.get("school_type") == 2)
			return true;
		else
			return false;
	}.property("school_type"),
	
	isUniversity: function() {
		if (this.get("school_type") == 3)
			return true;
		else
			return false;
	}.property("school_type")
});
