/**
 * the view for the add school group page
 * 
 * Created Septemeber 28th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Yariv Katz
 * 
 */

Nerdeez.AddSchoolGroupView = Ember.View.extend({
	actions: {
		
		/**
		 * the user clicks to show th enew uni modal
		 */
		addUniversity: function(){
			$('#new-university').modal('show');
		},
		
		/**
		 * when the user submits the new uni modal
		 */
		newUni: function(){
			if(!$('#new-university .js-validation').validationEngine('validate')) return;
			$('#new-university').modal('hide');
			this.controller.send('newUni');
		},
		
		/**
		 * when the user selects uni and continues to the next step
		 */
		showThirdStep: function(){
			switch(this.get('controller.schoolType')){
				case Nerdeez.SCHOOLGROUP_TYPE[0].id: //course
					if (!$("#faq-2-course-faculty .js-validation").validationEngine('validate')) return;
					$('.faqList li').css('display', 'none');		
					$('#faq-4-course').css('display', 'block');
					break;
				case Nerdeez.SCHOOLGROUP_TYPE[1].id: //faculty
					if (!$("#faq-2-course-faculty .js-validation").validationEngine('validate')) return;
					$('.faqList li').css('display', 'none');		
					$('#faq-3-course-faculty-uni').css('display', 'block');
					break;
				case Nerdeez.SCHOOLGROUP_TYPE[2].id: //uni
					$('.faqList li').css('display', 'none');		
					$('#faq-3-course-faculty-uni').css('display', 'block');
					break;
			}
		}
	}
});

Nerdeez.AddUniFacultyCourseMasterView = Ember.View.extend({
	didInsertElement: function(){
		$('#faq-1').css('display', 'none');
		$('#faq-2-course-faculty').css('display', 'block');
	},
	
	willDestroyElement: function(){
		$('.faqList li').css('display', 'none');
		$('#faq-1').css('display', 'block');
	}
});

Nerdeez.AddSchoolGroupCourseView = Nerdeez.AddUniFacultyCourseMasterView.extend({
	didInsertElement: function(){
		this._super();
		$('#faq-2-course-faculty .tbd').text('Course');
		$('#faq-3-course-faculty-uni .faq-number').text('4');
		$('#faq-3-course-faculty-uni .tbd').text('Course');
	},
	
	actions: {
		addFaculty: function(){
			$('#new-faculty').modal('show');
		},
		
		newFaculty: function(){
			if(!$('#new-faculty .js-validation').validationEngine('validate')) return;
			$('#new-faculty').modal('hide');
			this.controller.send('newFaculty');
		},
		
		showFourthStep: function(){
			if (!$("#faq-4-course .js-validation").validationEngine('validate')) return;
			$('.faqList li').css('display', 'none');		
			$('#faq-3-course-faculty-uni').css('display', 'block');
		}
	}
});

Nerdeez.AddSchoolGroupFacultyView = Nerdeez.AddUniFacultyCourseMasterView.extend({
	didInsertElement: function(){
		this._super();
		$('#faq-2-course-faculty .tbd').text('Faculty');
		$('#faq-3-course-faculty-uni .tbd').text('Faculty');
		$('#faq-3-course-faculty-uni .faq-number').text('3');
	}
});

Nerdeez.AddSchoolGroupUniView = Nerdeez.AddUniFacultyCourseMasterView.extend({
	didInsertElement: function(){
		$('#faq-1').css('display', 'none');
		$('#faq-3-course-faculty-uni').css('display', 'block');
		$('#faq-3-course-faculty-uni .tbd').text('University');
	},
	

});
