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
    return new Ember.Handlebars.SafeString('<div class="loading"><i class="fa fa-spinner fa-spin"></i></div>');
});

/**
* produces a star rating
* @param {Object} currRating - the current star rating (full or half stars)
* @param {Object} outOf - the total amount of stars
* usage
* '''handlebar
* {{getRating 3.5 5}} //will produce 3.5 full stars out of 5 stars
* '''
*
* @return {Handlebars.SafeString}
*/
Ember.Handlebars.registerBoundHelper('getRating', function(currRating, outOf, options) {
    var html='<div class="rating"><ul>';
    var rating = currRating;
    for (var i=1; i<=outOf; i++) {
    	if (i<=currRating)
    		html += '<li><i class="fa fa-star"></i></li>';
    	else if (rating % 1 !== 0){
    		html += '<li><i class="fa fa-star-half-empty"></i></li>';
    		rating = 0;
    	}
    	else
    		html += '<li><i class="fa fa-star-empty"></i></li>';
    }
    html +="</ul></div>";
    return new Handlebars.SafeString(html);
});

Ember.Handlebars.registerBoundHelper('fbComments', function() {
    
    var html='<div id="addfb1"><div class="fb-comments" data-href=' + window.location.href + ' data-colorscheme="light" data-numposts="5" data-width="870"></div></div>';
    return new Handlebars.SafeString(html);
});