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
	hws: DS.hasMany('Nerdeez.Hw'),
	user: DS.belongsTo('Nerdeez.Userprofile'),
	like: DS.attr('number'),
	dislike: DS.attr('number'),
	num_users: DS.attr('number'),
	num_files: DS.attr('number'),
	image: DS.attr('string'),
	
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
	}.property("school_type"),

	getImageURL: function() {
		var count = this.get('school_type');
		var depthString = "";
		while (count<4) {
			if (this.get(depthString + ".image"))
				return this.get(depthString + ".image");
			else {
				depthString += ".parent";
				count++;
			}
		}
		if (this.get('isCourse')) {
			return STATIC_URL + "img/course-pic.png";
		}
		if (this.get('isFaculty')) {
			return STATIC_URL + "img/Faculty-pic.png";
		}
		if (this.get('isUniversity')) {
			return STATIC_URL + "img/University-pic.png";
		}
	}.property("school_type")
});
