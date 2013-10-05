/**
 * the model for the enroll user to courses will be defined here
 * 
 * Created October 5th, 2013
 * @version: 1.0
 * @author: Yariv Katz
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Enroll = DS.Model.extend({
	// user: DS.belongsTo('Nerdeez.Userprofile'),
	school_group: DS.belongsTo('Nerdeez.Schoolgroup'),
	last_entered: DS.attr('date')
});
