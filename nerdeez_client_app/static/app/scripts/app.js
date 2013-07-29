/*global Ember, DS */

var Nerdeez = window.Nerdeez = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap',

    server_url: SERVER_URL
    
});

/* Order and include as you please. */
// require('scripts/routes/*');
// require('scripts/controllers/*');
// require('scripts/models/*');
// require('scripts/views/*');

//store
require('scripts/nerdeez-ember/tastypie_serializer');
require('scripts/nerdeez-ember/tastypie_adapter');
require('scripts/nerdeez-ember/porthole.min');
require('scripts/nerdeez-ember/wormhole');
require('scripts/store/nerdeez-store');

//application files
require('scripts/views/nerdeez-view');
require('scripts/views/application-view');
require('scripts/views/flatpage-view');
require('scripts/views/search-view');
require('scripts/views/contact_us-view');
require('scripts/models/schoolgroup-model');
require('scripts/models/flatpage-model');
require('scripts/controllers/search-controller');
require('scripts/controllers/contact_us-controller');

//routes
require('scripts/routes/nerdeez-routes');

//jquery
//require("bower_components/jquery plugins/jquery.validate");
require("bower_components/jquery plugins/jquery.tinylimiter");

