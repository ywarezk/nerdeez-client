/**
 * holds the model for the auth as a singleton
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

Nerdeez.Auth = Ember.Object.extend({
	
	
	/**
	 * holds the user profile model for the loged in user
	 * @type {Nerdeez.UserProfile}
	 */
	userProfile: null,
	
	/**
	 * will hold the user api key
	 * @type {String}
	 */
	apiKey: null,
	
	/**
	 * will hold the username
	 * @type {String}
	 */
	username: null,
	
	/**
	 * holds the id of the user profile
	 * @type {int}
	 */
	id: null,
	
	/**
	 * return true if the user is logged in
	 * @returns: {Boolean}
	 */
	isLoggedIn: function(){
		return this.get('apiKey') != null && this.get('username') != null && this.get('id') != null;
	}.property('apiKey', 'username', 'id'),
});
Nerdeez.Auth.reopenClass(Nerdeez.Singleton);
Nerdeez.set('auth', Nerdeez.Auth.current());
