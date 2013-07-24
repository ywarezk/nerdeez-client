/*global Ember, DS */

var Nerdeez = window.Nerdeez = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap'
    
});

//vendor files
require('bower_components/facebook/facebook');

//application files
require('scripts/views/nerdeez-view');
require('scripts/views/application-view');
require('scripts/views/flatpage-view');
require('scripts/views/search-view');
require('scripts/models/schoolgroup-model');
require('scripts/models/flatpage-model');
require('scripts/controllers/search-controller');

//routes
require('scripts/routes/nerdeez-routes');


//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store/nerdeez-store');

