/**
 * component to add pagination to a page
 * 
 * 
 * Created October 22nd, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez
 */

Nerdeez.NerdeezPaginationComponent = Ember.Component.extend({
    /**
     * holds the current page we are in
     * @type {int}
     */
    paginationPage: 0,
    
    /**
     * default amount in a single page
     * @type {int}
     */
    paginationOffset: 20,
    
    /**
     * if the pagination is loading then this will be true
     * @type {Boolean}
     */
    paginationIsLoading: false,
    
    /**
     * the controller that we are changing the content of
     * @type {subclass on Ember.ArrayController}
     */
    paginationController: null,
    
    /**
     * if we need to pass extra param to the server query this hook will provide this
     * @type {Object}
     */
    paginationExtraParams: {},
    
    didInsertElement: function(){
        var xthis = this;
        $(window).scroll(function(e) {
            if (xthis.get('paginationIsLoading')) return;
            if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
                xthis.set('paginationIsLoading', true);
                var page = xthis.get('paginationPage');
                var offset = xthis.get('paginationOffset');
                var model = xthis.get('paginationController.content.type');
                var controller = xthis.get('paginationController');
                var content = xthis.get('paginationController.content');
                var extraParams = xthis.get('paginationExtraParams');
                page = page + 1;
                if (extraParams == null) extraParams = {};
                extraParams['limit'] = offset;
                extraParams['offset'] = offset * page;
                xthis.set('paginationPage', page);
                var newObjects = model.find(extraParams);
                newObjects.on('didLoad', function(){
                    xthis.set('paginationIsLoading', false);
                    content.addObjects(this);
                    controller.set('content', content);
                });
            }
        });
    }
    
    
})
