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
		schoolgroupTypeClicked: function(type){
			//set school group param
			this.controller.set('schoolType', type.id);
			
			//make this li invisible and show the next step
			$('#faq-1').fadeOut('normal', function(){
				if(type.title === 'Course'){
					$('#faq-2-course').fadeIn('normal');
				}				
			});
		}
	}
});
