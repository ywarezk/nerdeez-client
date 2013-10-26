

Nerdeez.QuickstartRoute = Nerdeez.NerdeezRoute.extend({
    model: function(param){
        return Nerdeez.Schoolgroup.find(param.uniId);
    },
    
     serialize: function(model){
        return {uniId: model.get('id')};
    }
});
