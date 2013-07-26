/**
 * nerdeez handlebars helper. 
 * register common handlebars that are used alot. 
 * Important note to whomever edits this file: All the programmers are going to use this code throughout the entire application. 
 * this code should be documented like a motherfucker
 * 
 * Created July 26t, 2013
 * @author: Yariv Katz
 * @copyright: Nerdeez Ltd.
 * @verison: 1.0
 * 
 */
 
 /**
 * put this every place you want a loading sign
 * 
 * usage
 * 
 * ```handlebar
 *    {{loading}}
 * ```
 * 
 * @return {Handlebars.SafeString}
 */
Ember.Handlebars.registerBoundHelper('loading', function() {
    return new Ember.Handlebars.SafeString('<div class="loading"><i class="icon-refresh icon-spin"></i></div>');
});