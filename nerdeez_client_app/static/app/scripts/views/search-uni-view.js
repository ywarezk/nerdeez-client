/**
 * the view for the search uni page
 * /#/search/university
 */
 
Nerdeez.SearchUniversityView = Nerdeez.NerdeezView.extend({
    searchMessage: 'Search university',
    didInsertElement: function(){
        $('.left-sidebar li').removeClass('active');
        $('.left-sidebar li:nth-of-type(1)').addClass('active');
        $('#' + this.elementId + ' input[type="search"]').attr('placeholder', 'Search university');
    }
});