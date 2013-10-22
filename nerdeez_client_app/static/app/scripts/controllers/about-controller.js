/**
 * The controller for the about page
 * 
 * Created October 21st, 2013
 * @author: Doron Nachshon
 * @version: 1.0
 * @copyright nerdeez Ltd.
 */

Nerdeez.SchoolgroupAboutController = Ember.Controller.extend({

	imageURL: null,
	
	getImageURL: function() {
		var count = this.get('school_type');
		var depthString = "content";
		while (count>0) {
			if (this.get(depthString))
				this.set(this.get('imageURL'), this.get(depthString + ".image"));
			else {
				depthString += ".parent";
				count--;
			}
		}
		if (this.get('content.isCourse')) {
			this.set(this.get('imageURL'), STATIC_URL + "img/course-pic.png");
		}
		if (this.get('content.isFaculty')) {
			this.set(this.get('imageURL'), STATIC_URL + "img/Faculty-pic.png");
		}
		if (this.get('content.isUniversity')) {
			this.set(this.get('imageURL'), STATIC_URL + "img/University-pic.png");
		}
	}.property('content')
});