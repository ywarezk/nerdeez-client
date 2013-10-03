/**
 * The controller for the add school group will be defined here
 * 
 * Created September 28th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright nerdeez Ltd.
 */

Nerdeez.AddSchoolGroupController = Ember.ArrayController.extend({
	/**
	 * need the course controller to populate the content of the faculties upon university choosing
	 */
	needs: ['add_school_group_course'],
	
	/**
	 * will hold the school group type (1) course (2) faculty (3) uni
	 * @type {int}
	 */
	schoolType: null,
	
	/**
	 * the title of the uni in the new uni modal
	 * @type {String}
	 */
	newUniTitle: null,
	
	/**
	 * the description of the uni in the new uni modal
	 * @type {String}
	 */
	newUniDescription: null,
	
	/**
	 * when set to true will put a loading on the new uni modal
	 * @type {Boolean}
	 */
	isNewUniLoading: false,
	
	/**
	 * will hold the university selected for the parent of course/faculty
	 * @type {Nerdeez.Schoolgroup}
	 */
	university: null,
	
	
	/**
	 * if true then the final step loading is activated
	 * @type {Boolean}
	 */
	isSaveLoading: false,
	
	/**
	 * will hold the faculty parent of the course
	 * @type {Nerdeez.Schoolgroup}
	 */
	faculty: null,
	
	/**
	 * if true the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * if true the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * The message to display for the user
	 * @type {String}
	 */
	message: false,
	
	/**
	 * holds the title for the new school group
	 * @type {String} 
	 */
	title: null,
	
	/**
	 * holds the descirption for the new school group
	 * @type {String} 
	 */
	description: null,
	
	/**
	 * When we select a university fetch the relevent faculties if necessary 
	 */
	fetchFaculties: function(){
		if(this.get('schoolType') == Nerdeez.SCHOOLGROUP_TYPE[0].id){
			this.get('controllers.add_school_group_course').set('content', Nerdeez.Schoolgroup.find({parent__id__exact: this.get('university.id')}));
		}
	}.observes('university'),
	
	actions: {
		
		/**
		 * when the user submits the new uni modal.
		 * this will query the server to create new university
		 */
		newUni: function(){
			this.set('isNewUniLoading', true);
			var xthis = this;
			var newUni = Nerdeez.Schoolgroup.createRecord();
			newUni.set('title', this.get('newUniTitle'));
			newUni.set('description', this.get('newUniDescription'));
			newUni.set('school_type', Nerdeez.SCHOOLGROUP_TYPE[2].id);
			newUni.transaction.commit();
			newUni.one('didCreate', function(e){
				xthis.set('isNewUniLoading', false);
				xthis.get('content').pushObject(this);
				xthis.set('university', this);
			});
		},
		
		/**
		 * when the user completed the add process and submits the form
		 */
		saveSchoolGroup: function(){
			var xthis = this;
			xthis.set('isSaveLoading', true);
			var newSchoolGroup = Nerdeez.Schoolgroup.createRecord();
			newSchoolGroup.set('title', this.get('title'));
			newSchoolGroup.set('description', this.get('description'));
			newSchoolGroup.set('school_type', this.get('schoolType'));
			switch (this.get('schoolType')){
				case Nerdeez.SCHOOLGROUP_TYPE[0].id: //course
					newSchoolGroup.set('parent', this.get('controllers.add_school_group_course.faculty'));
					break;
				case Nerdeez.SCHOOLGROUP_TYPE[1].id: //course
					newSchoolGroup.set('parent', this.get('university'));
					break;
			}
			newSchoolGroup.transaction.commit();
			newSchoolGroup.one('didCreate', function(){
				xthis.set('isSaveLoading', false);
				xthis.set('isSuccess', true);
				xthis.set('message', 'Success! Redirecting you to the course page');
				var model = this;
				setTimeout(function(){
					Nerdeez.Router.router.transitionTo('schoolgroup.about', model);
				},2000);
			});
		}
	}
	
});

Nerdeez.AddSchoolGroupCourseController = Ember.ArrayController.extend({
	/**
	 * needs access to the parent controller
	 */
	needs: ['add_school_group'],
	
	/**
	 * when set to true will display a loading sign
	 * @type {Boolean}
	 */
	isNewFacultyLoading: false,
	
	/**
	 * holds the faculty name in the new faculty modal
	 * @type {String}
	 */
	newFacultyTitle: null,
	
	/**
	 * holds the faculty description in the new faculty modal
	 * @type {String}
	 */
	newFacultyDescription: null,
	
	/**
	 * the selected faculty
	 * @type {Nerdeez.Schoolgroup}
	 */
	facultyBinding: "Nerdeez.addSchoolGroupController.faculty",
	
	
	actions: {
		newFaculty: function(){
			var xthis = this;
			this.set('isNewFacultyLoading', true);
			console.log('how the fuck do i access the parent controller');
			var newFaculty = Nerdeez.Schoolgroup.createRecord();
			newFaculty.set('title', this.get('newFacultyTitle'));
			newFaculty.set('description', this.get('newFacultyDescription'));
			newFaculty.set('school_type', Nerdeez.SCHOOLGROUP_TYPE[1].id);
			var parentUniId = this.get('controllers.add_school_group.university');
			newFaculty.set('parent', parentUniId);
			newFaculty.transaction.commit();
			newFaculty.one('didCreate', function(){
				xthis.set('isNewFacultyLoading', false);
				xthis.set('faculty', this);
				xthis.get('content').addObject(this);
			});
			
		}
	}
});
