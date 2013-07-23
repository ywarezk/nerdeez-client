/**
 * holds the model for the flatpage resource
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * the flatpage model
 */
Nerdeez.Flatpage = DS.Model.extend({
	title:DS.attr('string'),
	html: DS.attr('string'),
})