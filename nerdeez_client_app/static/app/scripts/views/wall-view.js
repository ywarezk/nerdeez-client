/**
 * the view for a course wall
 * 
 * Created July 27th, 2013
 * @author: Yariv Katz
 * @copyright: nerdeez Ltd.
 * @version: 1.0
 * 
 */

/**
 * the view for the wall
 */
Nerdeez.CourseWallView = Nerdeez.NerdeezView.extend({
    didInsertElement: function(){
        FB.XFBML.parse();
    }
});
 
 

 