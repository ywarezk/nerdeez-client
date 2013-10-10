/**
* this file will hold store settings for proper communication with the backend
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
* @copyright: nerdeez.com Ltd.
*/

var Nerdeez = window.Nerdeez;
var SERVER_URL = window.SERVER_URL;
var DS = window.DS;

/**
 * configure our adapter as a singleton
 */
Nerdeez.Adapter = Nerdeez.DjangoTastypieAdapter.extend({
    /**
     * adapter hook to set the server url
     */
    serverDomain : SERVER_URL,
    
    /**
     * hook if we want to use cross domain communication
     */
    wormhole: Nerdeez.Wormhole,
    
    loadingFunction: function(){
        
    },
    
    stopLoadingFunction: function(){
        
    },
    
    apiKey: Nerdeez.get('auth.apiKey'),
    username: Nerdeez.get('auth.username'),
    
    /**
     * our serializer
     */
    serializer: Nerdeez.DjangoTastypieSerializer.extend({
        init: function(){
            this._super();
            this.mappings.set( 'Nerdeez.Schoolgroup', { 
                parent: { embedded: 'load' },
                hws: { embedded: 'load' }
            });
            this.mappings.set( 'Nerdeez.Userprofile', { 
                enrolls: { embedded: 'load' }
            });
            this.mappings.set( 'Nerdeez.Enroll', { 
                school_group: { embedded: 'load' }
            });
            this.mappings.set( 'Nerdeez.Hw', { 
                files: { embedded: 'load' },
                school_group: { embedded: 'load' },
            });
            this.mappings.set( 'Nerdeez.File', { 
                hw: { embedded: 'load' }
            });
        }
    })
    
})
Nerdeez.Adapter.reopenClass(Nerdeez.Singleton);

/**
 * handles backend communication
 */
Nerdeez.Store = DS.Store.extend({
	
	/**
	 * our adapter
	 */
	adapter: Nerdeez.Adapter.current()
	
});



