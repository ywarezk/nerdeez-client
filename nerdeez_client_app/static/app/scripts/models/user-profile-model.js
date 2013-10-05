/**
 * user profile model will be defined here
 * 
 * Created October 4th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Userprofile = DS.Model.extend({
	enrolls: DS.hasMany('Nerdeez.Enroll')
});