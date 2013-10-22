/**
 * component to add pagination to a page
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.Pagination = Ember.Component.extend({
    /**
     * holds the current page we are in
     * @type {int}
     */
    page: 0,
    
    /**
     * default amount in a single page
     * @type {int}
     */
    offset: 20,
    
    
})
