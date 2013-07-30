/**
 * the view for the search course page
 * /#/search/course
 */
 
Nerdeez.SearchCourseView = Nerdeez.NerdeezView.extend({
    searchMessage: 'Search course by title/number',
    didInsertElement: function(){
        $('.left-sidebar li').removeClass('active');
        $('.left-sidebar li:nth-of-type(2)').addClass('active');
        $('#' + this.elementId + ' input[type="search"]').attr('placeholder', 'Search course by title/number');
    }
});