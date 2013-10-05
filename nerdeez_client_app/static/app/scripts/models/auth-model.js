/**
 * holds the model for the auth as a singleton
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

Nerdeez.Auth = Ember.Object.extend({
	isLoggedIn: false,
	
	/**
	 * holds the user profile model for the loged in user
	 * @type {Nerdeez.UserProfile}
	 */
	user_profile: null
});
Nerdeez.Auth.reopenClass(Nerdeez.Singleton);
Nerdeez.set('auth', Nerdeez.Auth.current());
