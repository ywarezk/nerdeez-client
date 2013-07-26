/**
 * will contain the auth model availabel one in the entire application
 * 
 * Created July 26th, 2013
 * @author: Yariv Katz
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * 
 */

/**
 * user facebook details will be here
 */
Nerdeez.Auth = Ember.Object.extend({
    isFBLoaded: false
});
Nerdeez.auth = Nerdeez.Auth.create();