/**
 * holds the model for the auth as a singleton
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

Nerdeez.Auth = Ember.Object.extend({
	isLoggedIn: false
});
Nerdeez.Auth.reopenClass(Nerdeez.Singleton);
Nerdeez.set('auth', Nerdeez.Auth.current());
