Nerdeez.SearchResultComponent = Ember.Component.extend({
    actions: {
        gotoCourse: function(faculty){
            this.transitionToRoute('quickstart.course', Nerdeez.Schoolgroup.find({parent__id: faculty.get('id')}));
        }
    }
});
