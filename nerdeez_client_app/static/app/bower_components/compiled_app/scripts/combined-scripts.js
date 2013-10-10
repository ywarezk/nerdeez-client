(function() {

/*global Ember, DS */



/**
 * init application
 */
var Nerdeez = window.Nerdeez = Ember.Application.create({

	//@member {string} constant holds the dom element which the application be injected to
    rootElement: '#wrap'
    
});

/**
 * application constants
 */
Nerdeez.SCHOOLGROUP_TYPE = [
	{id: 1, title: 'Course'},
	{id: 2, title: 'Faculty'},
	{id: 3, title: 'University'}
]

Nerdeez.SORTBY_TYPE = [
	{value: 'null', title: 'Relevance'},
	{value: 'title', title: 'Title'},
	{value: '-grade', title: 'Rating'},
	{value: 'users', title: 'Users'},
	{value: 'files', title: 'Files'}
]

Nerdeez.SEARCH_LIMIT = 20;
/**
* application init function
* will check if the user is logged in upon application start
*/
var readyFunction = function(temp1, temp2, temp3){
	var adapter = Nerdeez.Adapter.current();
	var auth = Nerdeez.Auth.current();
	auth.set('apiKey', $.cookie('apiKey'));
	auth.set('username', $.cookie('username'));
	adapter.set('apiKey', $.cookie('apiKey'));
	adapter.set('username', $.cookie('username'));
	auth.set('userProfile',Nerdeez.Userprofile.find($.cookie('id')));
	auth.set('id',$.cookie('id'));
	Nerdeez.set('auth', auth);
	
	
	
	// adapter.ajax(
        // SERVER_URL + '/api/v1/utilities/is-login/',
        	// 'POST',
        	// {
	        	// success: function(json){
	        		// Nerdeez.get('auth').set('isLoggedIn',json['is_logged_in']);
	        		// //var userProfile = Nerdeez.Userprofile.createRecord(json['user_profile']);
	        		// //userProfile.set('data', {school_groups: json['user_profile'].school_groups})
	        		// //var school_groups = userProfile.get('school_groups');
	        		// //var userProfile = Nerdeez.Userprofile.createRecord(json['user_profile']);
	        		// Nerdeez.get('auth').set('user_profile',Nerdeez.Userprofile.find(json['user_profile'].id));
	        	// },
	        	// error: function(json){
	        		// Nerdeez.get('auth').set('isLoggedIn',false);
	        	// },
	        	// data:{}
        	// }    
    // );
}
Nerdeez.set('ready', readyFunction);



//vendor files


})();

(function() {

/**
 * this file will activate the facebook api
 * 
 * Created July 24th 2013
 * @author Yariv Katz
 * @copyright: nerdeez Ltd
 * @version: 1.0
 * 
 */

window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : FACEBOOK_APP_ID,                        // App ID from the app dashboard
      channelUrl : '/channel/', // Channel file for x-domain comms
      cookie     : true,
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    //Nerdeez.set('isFBLoaded', true); 
    
    FB.getLoginStatus(function(response) {
        // Ember.run(function(){
            // Nerdeez.set('isConnected' , response.status === 'connected');    
        // });
        if(response.status === 'connected'){
	        	var adapter = Nerdeez.Adapter.current();
	        	adapter.ajax(
                SERVER_URL + '/api/v1/utilities/fb-login/',
		        	'POST',
		        	{
			        	success: function(json){
			        	    var auth = Nerdeez.Auth.current();
			        		auth.set('isLoggedIn', json['is_logged_in']);
			        		Nerdeez.set('isLoggedIn', json['is_logged_in']);
			        	},
			        	error: function(json){
			        		console.log('error login to facebook');
			        	},
			        	data:{
			        		access_token: response.authResponse.accessToken,
			        		signed_request: response.authResponse.signedRequest
			        	}
		        	}    
            );
	        	
        }
    });  
    
};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
    
}(document, 'script', 'facebook-jssdk'));

})();

(function() {

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
		} catch(e) {
			return;
		}

		try {
			// If we can't parse the cookie, ignore it, it's unusable.
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));


})();

(function() {

//application files


})();

(function() {

/**
* Global mixins to use with all our ember apps
* @copyright: nerdeez.com Ltd.
* @version: 1.0
**/


/**
  This mixin allows a class to return a singleton, as well as a method to quickly
  read/write attributes on the singleton.


  Example usage:

  ```javascript

    // Define your class and apply the Mixin
    User = Ember.Object.extend({});
    User.reopenClass(Discourse.Singleton);

    // Retrieve the current instance:
    var instance = User.current();

  ```

  Commonly you want to read or write a property on the singleton. There's a
  helper method which is a little nicer than `.current().get()`:

  ```javascript

    // Sets the age to 34
    User.currentProp('age', 34);

    console.log(User.currentProp('age')); // 34

  ```

  If you want to customize how the singleton is created, redefine the `createCurrent`
  method:

  ```javascript

    // Define your class and apply the Mixin
    Foot = Ember.Object.extend({});
    Foot.reopenClass(Discourse.Singleton, {
      createCurrent: function() {
        return Foot.create({toes: 5});
      }
    });

    console.log(Foot.currentProp('toes')); // 5

  ```
**/

//create the namespace if the namespace doesnt exist
if (typeof window.Nerdeez === "undefined"){
	var Nerdeez = Ember.Namespace.create();
}
else{
	var Nerdeez = window.Nerdeez;
}

/**
  @class Discourse.Singleton
  @extends Ember.Mixin
  @namespace Discourse
  @module Discourse
**/
Nerdeez.Singleton = Ember.Mixin.create({

  /**
    Returns the current singleton instance of the class.

    @method current
    @returns {Ember.Object} the instance of the singleton
  **/
  current: function() {
    if (!this._current) {
      this._current = this.createCurrent();
    }

    return this._current;
  },


  /**
    How the singleton instance is created. This can be overridden
    with logic for creating (or even returning null) your instance.

    By default it just calls `create` with an empty object.

    @method createCurrent
    @returns {Ember.Object} the instance that will be your singleton
  **/
  createCurrent: function() {
    return this.create({});
  },

  /**
    Returns or sets a property on the singleton instance.

    @method currentProp
    @param {String} property the property we want to get or set
    @param {String} value the optional value to set the property to
    @returns the value of the property
  **/
  currentProp: function(property, value) {
    var instance = this.current();
    if (!instance) { return; }

    if (typeof(value) !== "undefined") {
      instance.set(property, value);
      return value;
    } else {
      return instance.get(property);
    }
  }

});

/**
 This mixin allows for facebook's "share" capability,
 provided by the share function.

 Properties are provided with default values.
 
 Example Usage (default values):

 ''''javascript

 App.myController = Ember.Controller.extend(Nerdeez.Share);

 ''''handlebars

 <a {{action share}}>

 ''''

 To customize properties' values,
 redefine the shareInit method.
 
 Example:

 '''javascript

 //the controller or view that'll use the mixin
 App.myController = Ember.Controller.extend(Nerdeez.share, {

  //using shareInit hook to customize default values
  shareInit: function() {
    this.set('method', this.get('content.method'));
    this.set('link', "http://www.Nerdeez.com");
  }
 })

**/

/**
  @class Nerdeez.Share
  @extends Ember.Mixin
  @namespace Nerdeez
  @module Nerdeez
**/
Nerdeez.Share = Ember.Mixin.create({

  /**
  * The UI dialog to invoke.
  * @property
  * @public
  * @type {string}
  */
  method: 'feed',
  /**
  * the dialog title
  * @property
  * @public
  * @type {string}
  */
  name: 'Nerdeez',
  /**
  * dialog caption
  * @property
  * @public
  * @type {string}
  */
  caption: 'Nerdeez - Doing homework together',
  /**
  * dialog description
  * @property
  * @public
  * @type {string}
  */
  description: "",
  /**
  * dialog link
  * @property
  * @public
  * @type {string}
  */
  link: window.location.href,
  /**
  * dialog image
  * @property
  * @public
  * @type {string}
  */
  picture: 'https://s3-eu-west-1.amazonaws.com/nerdeez-public/nerdeez-logo.png',

  /**
    Init function, empty by default.

    @method shareInit
  **/
  shareInit: function() {},

  actions: {

    /**
    main function, holds FB.ui, a generic helper method for
    triggering Dialogs which allow the user to take some action.

    @method current
    @returns {Ember.Object} the instance of the singleton
  **/

    fbShare: function() {
      this.shareInit();
      var xthis = this;
      FB.ui(
      {
        method: xthis.get('method'),
        name: xthis.get('name'),
        caption: xthis.get('caption'),
        description: xthis.get('description'),
        link: xthis.get('link'),
        picture: xthis.get('picture')
      },
        function(response) {
          if (response && response.post_id) {
              alert('Post was published.');
          } else {
              alert('Post was not published.');
          }
        }
      );
    }
  }
});

})();

(function() {

/**
* all views in the application will extend this master view
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/


Ember.View.reopen({
    /**
    * holds the static url
    * @type {{string}}
    * @public
    */
    staticUrl: STATIC_URL,
    
    /**
     * common actions when view finish reloading
     */
    didInsertElement: function(){
        this._super();
        
        $('.js-validation').validationEngine();
        
        //fix for the history bar
        //$('.left-sidebar .child.active').closest('.parent').addClass('open')
        
        filepicker.setKey(FILEPICKER_API_KEY);
        
        Ember.run.scheduleOnce('afterRender', this, function(){
            FB.XFBML.parse();
        });
    }
    
    // willDestroyElement: function(){
	    	// this._super();
	    	// $('.left-sidebar .child.active').closest('.parent').addClass('open')
    // }
});

Ember.Select.reopen({
	attributeBindings: ['data-errormessage-value-missing']
});



})();

(function() {

/**
 * the view for the add school group page
 * 
 * Created Septemeber 28th, 2013
 * @copyright: Nerdeez Ltd.
 * @version: 1.0
 * @author: Yariv Katz
 * 
 */

Nerdeez.AddSchoolGroupView = Ember.View.extend({
	actions: {
		
		/**
		 * the user clicks to show th enew uni modal
		 */
		addUniversity: function(){
			$('#new-university').modal('show');
		},
		
		/**
		 * when the user submits the new uni modal
		 */
		newUni: function(){
			if(!$('#new-university .js-validation').validationEngine('validate')) return;
			$('#new-university').modal('hide');
			this.controller.send('newUni');
		},
		
		/**
		 * when the user selects uni and continues to the next step
		 */
		showThirdStep: function(){
			switch(this.get('controller.schoolType')){
				case Nerdeez.SCHOOLGROUP_TYPE[0].id: //course
					if (!$("#faq-2-course-faculty .js-validation").validationEngine('validate')) return;
					$('.faqList li').css('display', 'none');		
					$('#faq-4-course').css('display', 'block');
					break;
				case Nerdeez.SCHOOLGROUP_TYPE[1].id: //faculty
					if (!$("#faq-2-course-faculty .js-validation").validationEngine('validate')) return;
					$('.faqList li').css('display', 'none');		
					$('#faq-3-course-faculty-uni').css('display', 'block');
					break;
				case Nerdeez.SCHOOLGROUP_TYPE[2].id: //uni
					$('.faqList li').css('display', 'none');		
					$('#faq-3-course-faculty-uni').css('display', 'block');
					break;
			}
		}
	}
});

Nerdeez.AddUniFacultyCourseMasterView = Ember.View.extend({
	didInsertElement: function(){
		$('#faq-1').css('display', 'none');
		$('#faq-2-course-faculty').css('display', 'block');
	},
	
	willDestroyElement: function(){
		$('.faqList li').css('display', 'none');
		$('#faq-1').css('display', 'block');
	}
});

Nerdeez.AddSchoolGroupCourseView = Nerdeez.AddUniFacultyCourseMasterView.extend({
	didInsertElement: function(){
		this._super();
		$('#faq-2-course-faculty .tbd').text('Course');
		$('#faq-3-course-faculty-uni .faq-number').text('4');
		$('#faq-3-course-faculty-uni .tbd').text('Course');
	},
	
	actions: {
		addFaculty: function(){
			$('#new-faculty').modal('show');
		},
		
		newFaculty: function(){
			if(!$('#new-faculty .js-validation').validationEngine('validate')) return;
			$('#new-faculty').modal('hide');
			this.controller.send('newFaculty');
		},
		
		showFourthStep: function(){
			if (!$("#faq-4-course .js-validation").validationEngine('validate')) return;
			$('.faqList li').css('display', 'none');		
			$('#faq-3-course-faculty-uni').css('display', 'block');
		}
	}
});

Nerdeez.AddSchoolGroupFacultyView = Nerdeez.AddUniFacultyCourseMasterView.extend({
	didInsertElement: function(){
		this._super();
		$('#faq-2-course-faculty .tbd').text('Faculty');
		$('#faq-3-course-faculty-uni .tbd').text('Faculty');
		$('#faq-3-course-faculty-uni .faq-number').text('3');
	}
});

Nerdeez.AddSchoolGroupUniView = Nerdeez.AddUniFacultyCourseMasterView.extend({
	didInsertElement: function(){
		$('#faq-1').css('display', 'none');
		$('#faq-3-course-faculty-uni').css('display', 'block');
		$('#faq-3-course-faculty-uni .tbd').text('University');
	},
	

});


})();

(function() {

/**
 * the view for the school group files section
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.SchoolgroupFilesView = Ember.View.extend({
	actions: {
		showAddHw: function(){
			$('#new-hw').modal('show');
		},
		
		newHW: function(){
			var onSuccess = function(){
				$('#new-hw').modal('hide');
			}
			this.controller.send('newHW', onSuccess);
		}
	}
});


})();

(function() {

/**
 * holds the model for the schoolgroups
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */


Nerdeez.Schoolgroup = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	school_type: DS.attr('number'),
	parent: DS.belongsTo('Nerdeez.Schoolgroup'),
	grade: DS.attr('number'),
	user: DS.belongsTo('Nerdeez.Userprofile'),
	
	getIconClass: function() {
		a = this.get("school_type");
		if (a == 1)
			return "course-icon";
		else if (a == 2)
			return "faculty-icon";
		else
			return "university-icon";
	}.property("school_type"),
	
	isCourse: function() {
		if (this.get("school_type") == 1)
			return true;
		else
			return false;
	}.property("school_type"),
	isFaculty: function() {
		if (this.get("school_type") == 2)
			return true;
		else
			return false;
	}.property("school_type"),
	
	isUniversity: function() {
		if (this.get("school_type") == 3)
			return true;
		else
			return false;
	}.property("school_type")
});


})();

(function() {

/**
 * holds the model for the flatpage resource
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

/**
 * the flatpage model
 */
Nerdeez.Flatpage = DS.Model.extend({
	title:DS.attr('string'),
	html: DS.attr('string'),
})

})();

(function() {

/**
 * holds the model for the auth as a singleton
 * 
 * @author: Yariv Katz
 * @copyright: nerdeez.com Ltd.
 * @version: 1.0
 * 
 */

Nerdeez.Auth = Ember.Object.extend({
	
	
	/**
	 * holds the user profile model for the loged in user
	 * @type {Nerdeez.UserProfile}
	 */
	userProfile: null,
	
	/**
	 * will hold the user api key
	 * @type {String}
	 */
	apiKey: null,
	
	/**
	 * will hold the username
	 * @type {String}
	 */
	username: null,
	
	/**
	 * holds the id of the user profile
	 * @type {int}
	 */
	id: null,
	
	/**
	 * return true if the user is logged in
	 * @returns: {Boolean}
	 */
	isLoggedIn: function(){
		return this.get('apiKey') != null && this.get('username') != null && this.get('id') != null;
	}.property('apiKey', 'username'),
});
Nerdeez.Auth.reopenClass(Nerdeez.Singleton);
Nerdeez.set('auth', Nerdeez.Auth.current());


})();

(function() {

/**
 * user profile model will be defined here
 * 
 * Created October 4th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Userprofile = DS.Model.extend({
	enrolls: DS.hasMany('Nerdeez.Enroll')
});

})();

(function() {

/**
 * the model for the enroll user to courses will be defined here
 * 
 * Created October 5th, 2013
 * @version: 1.0
 * @author: Yariv Katz
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Enroll = DS.Model.extend({
	// user: DS.belongsTo('Nerdeez.Userprofile'),
	school_group: DS.belongsTo('Nerdeez.Schoolgroup'),
	last_entered: DS.attr('date')
});


})();

(function() {

/**
 * model for the h.w
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.Hw = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	grade: DS.attr('number'),
	school_group: DS.belongsTo('Nerdeez.Schoolgroup'),
	files: DS.hasMany('Nerdeez.File'),
	size: DS.attr('number')
});


})();

(function() {

/**
 * model for the files
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.File = DS.Model.extend({
	title: DS.attr('string'),
	grade: DS.attr('number'),
	hw: DS.belongsTo('Nerdeez.Hw'),
	file: DS.attr('string')
});


})();

(function() {

/**
* the controller for the search page
*
* @copyright: Nerdeez Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

/**
 * abstract controller for the search course and search university
 */
Nerdeez.SearchController = Ember.ArrayController.extend({
	
	/**
	 * the search query
	 * @property
	 * @public
	 * @type {string}
	 */
	searchQuery: null,

	/**
	* the sort query
	* @property
	* @public
	* @type {string}
	*/
	sortBy: null,

	/**
	* the sort value
	* @property
	* @public
	* @type {string}
	*/
	sortName: "Relevance",

	/**
	* the filter query
	* @property
	* @public
	* @type {string}
	*/
	filterBy: null,

	/**
	* number of search results
	* @property
	* @public
	* @type {integer}
	*/
	resultNum: 0,
	
	/**
	* set to true if we are moving to the loading state
	* @property
	* @private
	* @type {boolean}
	*/
	isLoading: false,

	/**
	 * triggers when the users is using the search bar / filter / sort by
	 */
	 search: function(){
	 	var xthis = this;
	 	var searchmsg = {};
	 	$('.result-num').hide();
	 	this.set('isLoading', true);
	 	searchmsg['limit'] = Nerdeez.get('SEARCH_LIMIT');
	 	if (this.get('searchQuery') !== null)
	 		searchmsg['search'] = this.get('searchQuery');
	 	if (this.get('sortBy') !== null)
	 		searchmsg['order_by'] = this.get('sortBy');
	 	if (this.get('filterBy') !== null)
	 		searchmsg['school_type'] = this.get('filterBy');

	 	var srch = Nerdeez.Schoolgroup.find(searchmsg);

		this.set('content', srch);
		srch.one('didLoad', function() {
			xthis.set('isLoading', false);
			xthis.set('resultNum', xthis.get('content.content.length'));
			$('.result-num').show();
		});
		}.observes('searchQuery', 'sortBy', 'filterBy'),

	 actions: {
	 	/**
	 	* set the correct value and name for the sort by search query
	 	* @params array the current presented name and the value of the selected sort
	 	*/
		setSort: function(sortBy) {
			this.set("sortName", sortBy.title);
			this.set("sortBy", sortBy.value);
		},

		share: function(){	
			FB.ui({
				method: 'feed',
				link: 'https://developers.facebook.com/docs/dialogs/',
				caption: 'An example caption',
			}, function(response){});
		},
	}
});

})();

(function() {

/**
* the controller for the login with facebook page
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

var Nerdeez = window.Nerdeez;
Nerdeez.LoginController = Ember.Controller.extend({
    
    /**
     * holds the user input for the email
     * @type {String}
     */ 
    email: null,
    
    /**
     * holds the password the user inputs
     * @type {String}
     */ 
    password: null,
    
    /**
     * save in the cookies the logged in status
     * @type {Boolean}
     */
    isRememberMe: false,
    
    /**
     * if true will show the error box
     * @type {Boolean}
     */
    isError: false,
    
    /**
     * if true will show the success box with the message
     * @type {Boolean}
     */
    isSuccess: false,
    
    /**
     * a string containing a message displayed to the user
     * @type {String}
     */
    message: null,
    
    /**
     * should i display the loading sign
     * @type {Boolean}
     */
    isLoading: false,
    
    /**
     * function that is common for all the logins
     * @param {Object} json object
     */
    commonLogin: function(json){
	    	if(this.get('isRememberMe')){
    			var expires = 7;
    		}
    		else{
    			var expires = 1;
    		}
    		Nerdeez.get('auth').set('username', json['username']);
    		Nerdeez.get('auth').set('apiKey', json['api_key']);
    		var adapter = Nerdeez.Adapter.current();
    		adapter.set('apiKey', json['api_key']);
		adapter.set('username', json['username']);
    		Nerdeez.get('auth').set('userProfile', Nerdeez.Userprofile.find(json['user_profile'].id));
    		$.cookie('username', json['username'], { expires: expires, path: '/' });
    		$.cookie('apiKey', json['api_key'], { expires: expires, path: '/' });
    		$.cookie('id', json['user_profile'].id, { expires: expires, path: '/' });
    		this.set('isLoading', false);
    		this.transitionToRoute('index');
    		
    },
    
    actions: {
        
        /**
         * when the user submits the registration form
         */
        login: function(){
            //if js validation fails then return
            if (!$(".js-validation").validationEngine('validate')) return;
            
            console.log('Submitting the login form');
            
            //get the user params
            var password = this.get('password');
            var email = this.get('email');
            var isRememberMe = this.get('isRememberMe');
            
            //loading
            this.set('isLoading', true);
            
            //make the ajax request
            var adapter = this.get('store.adapter');
            var xthis = this;
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/login/',
		        	'POST',
		        	{
			        	success: function(json){
			        		xthis.commonLogin(json);
			        	},
			        	error: function(json){
			        		var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
			        	},
			        	data:{
			        		email: email,
			        		password: password,
			        		remember_me: isRememberMe
			        	}
		        	}    
            );
        },
        
        /**
         * when the user wants to connect using twitter
         */
        twitterLogin: function(){
            this.set('isLoading', true);
            var xthis = this;
            var adapter = Nerdeez.Adapter.current();
            adapter.ajax(
	            	SERVER_URL + '/api/v1/utilities/twitter-login/',
	            	'POST',
	            	{
	            		success: function(json){
	            			xthis.set('isLoading', false);
	            			xthis.set('isSuccess', true);
	            			xthis.set('message', 'Please authorize the app with your twitter account');
	            			var win=window.open(json['auth_url'], '_blank');
						win.focus();
	            		},
	            		error: function(){
	            			
	            		},
	            		data:{}
	            	}
            );
        },
        
        /**
         * when the user wants to login using facebook
         */
        fbLogin: function(){
            console.log('login using facebook');
            this.set('isLoading', true);
            var xthis = this;
            FB.login(function(response) {
	            if (response.authResponse) {
	                 console.log('inspect auth response');
	                 var accessToken = response.authResponse.accessToken;
	                 var signedRequest = response.authResponse.signedRequest;
					 var adapter = Nerdeez.Adapter.current();
			         adapter.ajax(
		                SERVER_URL + '/api/v1/utilities/fb-login/',
				        	'POST',
				        	{
					        	success: function(json){
					        	    xthis.commonLogin(json);
					        	},
					        	error: function(json){
					        		xthis.set('isError', true);
					        		xthis.set('message', 'Failed to login via facebook');
					        	},
					        	data:{
					        		access_token: response.authResponse.accessToken,
					        		signed_request: response.authResponse.signedRequest
					        	}
				        	}    
		            );
	             } else {
		             
	             }
	         }, {scope: 'email'});
        }
        
    }
});

})();

(function() {

/**
* the controller for registration
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

var Nerdeez = window.Nerdeez;
var Ember = window.Ember;
Nerdeez.RegisterController = Ember.Controller.extend({
    
    /**
     * specify the controllers we need to use 
     */
    needs: ['login'],
    
    /**
     * the email address from the user
     * @type {String}
     */
    email: null,
    
    /**
     * the password from the user
     * @type {String}
     */
    password: null,
    
    /**
     * if true then the loading sign is show
     * @type {Boolean}
     */
    isLoading: false,
    
    /**
     * will display success message to the user
     * @type {Boolean}
     */
    isSuccess: false,
    
    /**
     * will display an error message to the user
     * @type {Boolean}
     */
    isError: false,
    
    /**
     * will display a message to the user
     * @type {String}
     */
    message: null,
    
    
    
    actions: {
        
        /**
         * when the user clicks to register
         */
        register: function(){
            
            //js validation
            if (!$(".js-validation").validationEngine('validate')) return;
            
            console.log('user is registrating');
            
            //put the loading screen on
            this.set('isLoading', true);
            
            //get the params
            var email = this.get('email');
            var password = this.get('password');
            
            //make the ajax request
            var xthis = this;
            adapter = this.get('store.adapter');
            adapter.ajax(
                SERVER_URL + '/api/v1/utilities/register/',
		        	'POST',
		        	{
			        	success: function(json){
			        	    xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
			        	},
			        	error: function(json){
			        	    var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
			        	},
			        	data:{
			        		email: email,
			        		password: password
			        	}
		        	}    
            );
            
        }
        
    }
});


})();

(function() {

/**
* Contact us controller for the application
*
* @copyright: nerdeez.com Ltd.
* @author: Yariv Katz
* @version: 1.0
*/

Nerdeez.ContactController = Ember.Controller.extend({
    
    /**
	 * used to inform on success transaction
	 * @property
	 * @private
	 * @type {boolean}
	 */
    isSuccess: false,

    
    /**
	 * set to true if we are moving to the loading state
	 * @property
	 * @private
	 * @type {boolean}
	 */
    isLoading: false,

    /**
	* used to pass message from server transaction
	* @property
	* @private
	* @type {string}
	*/
    statusMessage: 'test',

    
    /**
	* should i show the transaction status
	* @property
	* @private
	* @type {boolean}
	*/
    isError: false,


    mailContent: null,
    mailAddress: null,

	actions: {
		
		/**
		* when the user submits the contact us form
		* @params string message the message to send
		* @params string name the name of the user sending the message
		* @params string mail the mail of the user
		* @params string the user phone number
		*/
	    submitForm: function(success, error){
		    	//js validation
            if (!$(".js-validation").validationEngine('validate')) return;
	    	
	        this.set('isLoading', true);
	        message = this.get('mailContent');
	        mail = this.get('mailAddress');
	        xthis = this;
	        
	        var success = function(json){
	            xthis.set('isSuccess', json['success']);
	            xthis.set('isError', !json['success']);
	            xthis.set('isLoading', false);
	            xthis.set('statusMessage', json['message']);
	        }
	
	        var error = function(json){
	            if (json.hasOwnProperty('message')){
	                xthis.set('statusMessage', json['message']);
	            }
	            else{
	                xthis.set('statusMessage', 'Server communication error');
	            }
	            xthis.set('isSuccess', false);
	            xthis.set('isError', true)
	            xthis.set('isLoading', false);
	        }
	
			var adapter = Nerdeez.Adapter.current();	
	        adapter.ajax(
				SERVER_URL + '/api/v1/utilities/contact/',
				'POST',
				{
					data: {message: message, mail: mail},
					success: success,
					error: error
				}
			);
	    },	
	}
    
});

})();

(function() {

/**
* the controller for the wall page
*
* @copyright: Nerdeez Ltd.
* @author: Doron Nachshon
* @version: 1.0
*/

Nerdeez.SchoolgroupWallController = Ember.Controller.extend(Nerdeez.Share, {

	/**
	* Init facebook's share function from the Mixin
	**/

	shareInit: function(){
		this.set('name', this.get('content.title'));
		this.set('description', this.get('content.description'));
	}

});

})();

(function() {

/**
 * controller for the change password page
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ChangePasswordController = Ember.Controller.extend({
	
	/**
	 * form param will hold the old password
	 * @type {String}
	 */
	currentPassword: null,
	
	/**
	 * form param will hold the new password
	 * @type {String}
	 */
	newPassword: null,
	
	/**
	 * will determine if the loading thingie is displayed
	 * @type {Boolean}
	 */
	isLoading: false,
	
	/**
	 * will determine if the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will determine if the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will determine the messages in the boxes
	 * @type {String}
	 */
	message: false,
	
	actions: {
		
		/**
		 * when the user submits the form
		 */
		changePassword: function(){
			//js validation
			if (!$(".js-validation").validationEngine('validate')) return;
			
			//get the params
			var currentPassword = this.get('currentPassword');
			var newPassword = this.get('newPassword');
			
			//put the loading screen on
			this.set('isLoading', true);
			
			//submit the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/change-password/',
				'POST',
				{
					success: function(json){
						xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
					},
					data: {
						old_password: currentPassword,
						new_password: newPassword
					}
				}
			);
		}
	}
});


})();

(function() {

/**
 * controller for the forget password page
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ForgetPasswordController = Ember.Controller.extend({
	/**
	 * form param will hold the user's email
	 * @type {String}
	 */
	email: null,
	
	/**
	 * will determine if the loading thingie is displayed
	 * @type {Boolean}
	 */
	isLoading: false,
	
	/**
	 * will determine if the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will determine if the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will determine the messages in the boxes
	 * @type {String}
	 */
	message: false,
	
	actions: {
		
		/**
		 * when the user submits the form to change the password
		 */
		forgotPassword: function(){
			//js validation
			if (!$(".js-validation").validationEngine('validate')) return;
			
			//get the param
			var email = this.get('email');
			
			//loading screen
			this.set('isLoading', true);
			
			//send the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/forget-password/',
				'POST',
				{
					success: function(json){
						xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
					},
					data: {
						email: email
					}
				}
			);
		}
	}
});


})();

(function() {

/**
 * controller for the user to change his password if he forgot it
 * 
 * Created September 26th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: nerdeez Ltd.
 */

Nerdeez.ResetPasswordController = Ember.Controller.extend({
	/**
	 * holds the email from the get params
	 * @type {String}
	 */
	email: null,
	
	/**
	 * holds the hash from the get params
	 * @type {String}
	 */
	hash: null,
	
	/**
	 * holds the password from the submitted form
	 * @type {String}
	 */
	password: null,
	
	/**
	 * will determine if the loading thingie is displayed
	 * @type {Boolean}
	 */
	isLoading: false,
	
	/**
	 * will determine if the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * will determine if the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * will determine the messages in the boxes
	 * @type {String}
	 */
	message: false,
	
	actions: {
		
		/**
		 * when the user submits the change password form
		 */
		changePassword: function(){
			//js validation
			if (!$(".js-validation").validationEngine('validate')) return;
			
			//get the param
			var password = this.get('password');
			var email = this.get('email');
			var hash = this.get('hash');
			
			//loading screen
			this.set('isLoading', true);
			
			//send the request to the server
			var adapter = Nerdeez.Adapter.current();
			var xthis = this;
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/reset-password/',
				'POST',
				{
					success: function(json){
						xthis.set('isSuccess', true);
			        	    xthis.set('isError', false);
			        	    xthis.set('message', json['message']);
			        	    xthis.set('isLoading', false);
					},
					error: function(json){
						var message = $.parseJSON(json.responseText).message;
			        	    xthis.set('isError', true);
			        	    xthis.set('isSuccess', false);
			        	    xthis.set('message', message);
			        	    xthis.set('isLoading', false);
					},
					data: {
						password: password,
						email: email,
						hash: hash
					}
				}
			);
		}
		
	}
});


})();

(function() {

/**
 * The controller for the add school group will be defined here
 * 
 * Created September 28th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright nerdeez Ltd.
 */

Nerdeez.AddSchoolGroupController = Ember.ArrayController.extend({
	/**
	 * need the course controller to populate the content of the faculties upon university choosing
	 */
	needs: ['add_school_group_course'],
	
	/**
	 * will hold the school group type (1) course (2) faculty (3) uni
	 * @type {int}
	 */
	schoolType: null,
	
	/**
	 * the title of the uni in the new uni modal
	 * @type {String}
	 */
	newUniTitle: null,
	
	/**
	 * the description of the uni in the new uni modal
	 * @type {String}
	 */
	newUniDescription: null,
	
	/**
	 * when set to true will put a loading on the new uni modal
	 * @type {Boolean}
	 */
	isNewUniLoading: false,
	
	/**
	 * will hold the university selected for the parent of course/faculty
	 * @type {Nerdeez.Schoolgroup}
	 */
	university: null,
	
	
	/**
	 * if true then the final step loading is activated
	 * @type {Boolean}
	 */
	isSaveLoading: false,
	
	/**
	 * will hold the faculty parent of the course
	 * @type {Nerdeez.Schoolgroup}
	 */
	faculty: null,
	
	/**
	 * if true the error box is displayed
	 * @type {Boolean}
	 */
	isError: false,
	
	/**
	 * if true the success box is displayed
	 * @type {Boolean}
	 */
	isSuccess: false,
	
	/**
	 * The message to display for the user
	 * @type {String}
	 */
	message: false,
	
	/**
	 * holds the title for the new school group
	 * @type {String} 
	 */
	title: null,
	
	/**
	 * holds the descirption for the new school group
	 * @type {String} 
	 */
	description: null,
	
	/**
	 * When we select a university fetch the relevent faculties if necessary 
	 */
	fetchFaculties: function(){
		if(this.get('schoolType') == Nerdeez.SCHOOLGROUP_TYPE[0].id){
			this.get('controllers.add_school_group_course').set('content', Nerdeez.Schoolgroup.find({parent__id__exact: this.get('university.id')}));
		}
	}.observes('university'),
	
	actions: {
		
		/**
		 * when the user submits the new uni modal.
		 * this will query the server to create new university
		 */
		newUni: function(){
			this.set('isNewUniLoading', true);
			var xthis = this;
			var newUni = Nerdeez.Schoolgroup.createRecord();
			newUni.set('title', this.get('newUniTitle'));
			newUni.set('description', this.get('newUniDescription'));
			newUni.set('school_type', Nerdeez.SCHOOLGROUP_TYPE[2].id);
			newUni.transaction.commit();
			newUni.one('didCreate', function(e){
				xthis.set('isNewUniLoading', false);
				xthis.get('content').pushObject(this);
				xthis.set('university', this);
			});
		},
		
		/**
		 * when the user completed the add process and submits the form
		 */
		saveSchoolGroup: function(){
			var xthis = this;
			xthis.set('isSaveLoading', true);
			var newSchoolGroup = Nerdeez.Schoolgroup.createRecord();
			newSchoolGroup.set('title', this.get('title'));
			newSchoolGroup.set('description', this.get('description'));
			newSchoolGroup.set('school_type', this.get('schoolType'));
			switch (this.get('schoolType')){
				case Nerdeez.SCHOOLGROUP_TYPE[0].id: //course
					newSchoolGroup.set('parent', this.get('controllers.add_school_group_course.faculty'));
					break;
				case Nerdeez.SCHOOLGROUP_TYPE[1].id: //course
					newSchoolGroup.set('parent', this.get('university'));
					break;
			}
			newSchoolGroup.transaction.commit();
			newSchoolGroup.one('didCreate', function(){
				xthis.set('isSaveLoading', false);
				xthis.set('isSuccess', true);
				xthis.set('message', 'Success! Redirecting you to the course page');
				var model = this;
				setTimeout(function(){
					Nerdeez.Router.router.transitionTo('schoolgroup.about', model);
				},2000);
			});
		}
	}
	
});

Nerdeez.AddSchoolGroupCourseController = Ember.ArrayController.extend({
	/**
	 * needs access to the parent controller
	 */
	needs: ['add_school_group'],
	
	/**
	 * when set to true will display a loading sign
	 * @type {Boolean}
	 */
	isNewFacultyLoading: false,
	
	/**
	 * holds the faculty name in the new faculty modal
	 * @type {String}
	 */
	newFacultyTitle: null,
	
	/**
	 * holds the faculty description in the new faculty modal
	 * @type {String}
	 */
	newFacultyDescription: null,
	
	/**
	 * the selected faculty
	 * @type {Nerdeez.Schoolgroup}
	 */
	facultyBinding: "Nerdeez.addSchoolGroupController.faculty",
	
	
	actions: {
		newFaculty: function(){
			var xthis = this;
			this.set('isNewFacultyLoading', true);
			console.log('how the fuck do i access the parent controller');
			var newFaculty = Nerdeez.Schoolgroup.createRecord();
			newFaculty.set('title', this.get('newFacultyTitle'));
			newFaculty.set('description', this.get('newFacultyDescription'));
			newFaculty.set('school_type', Nerdeez.SCHOOLGROUP_TYPE[1].id);
			var parentUniId = this.get('controllers.add_school_group.university');
			newFaculty.set('parent', parentUniId);
			newFaculty.transaction.commit();
			newFaculty.one('didCreate', function(){
				xthis.set('isNewFacultyLoading', false);
				xthis.set('faculty', this);
				xthis.get('content').addObject(this);
			});
			
		}
	}
});


})();

(function() {

/**
 * the controller for the school group files page
 * 
 * Created October 6th, 2013
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez Ltd.
 */

Nerdeez.SchoolgroupFilesController = Ember.ObjectController.extend({
	/**
	 * holds the title of a new hw
	 * @type {String}
	 */
	newHwTitle: null,
	
	/**
	 * holds the description for a new hw
	 * @type {String}
	 */
	newHwDescription: null,
	
	/**
	 * holds the files for a new hw
	 * @type {Ember.Array}
	 */
	newHwFiles: Ember.A(),
	
	/**
	 * when true display the error message in the new hw dialog
	 * @type {Boolean} 
	 */
	isNewHwError: false,
	
	/**
	 * will display a status message for the new hw
	 * @type {String}
	 */
	hwMessage: null,
	
	/**
	 * determine if the loading is displayed in the new hw modal
	 * @type {Boolean}
	 */
	isNewHwLoading: false,
	
	actions: {
		
		/**
		 * when the user choose to 
		 */
		uploadHW: function(){
			var xthis = this;
			filepicker.pickAndStore(
				{
					multiple: true,
					extensions: ['.doc', '.docx', '.pdf', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar', '.png', '.jpg', '.jpeg', '.bmp', '.gif'],
					services: ['COMPUTER','DROPBOX', 'GOOGLE_DRIVE', 'SKYDRIVE', 'URL', 'GMAIL','BOX']
				},
				{
					location: 'S3',
					path: '/files/'
				},
				function(inkBlobs){ //success
					inkBlobs.forEach(function(item, index, enumerable){
						var file = Nerdeez.File.createRecord();
						file.set('title', item.filename);
						file.set('file', item.url);
						file.set('size', item.size);
						file.transaction.commit();
						xthis.get('newHwFiles').pushObject(file);	
					})
					
				},
				function(reason){ //error
					xthis.set('isNewHwError', true);
					xthis.set('hwMessage', 'Failed to upload File');
				}
			);
		},
		
		/**
		 * when the user saves the new hw modal
		 * @param {function} use this function on success
		 */	
		newHW: function(onSuccess){
			if(!$('#new-hw .js-validation').validationEngine('validate'))return;
			var xthis = this;
			xthis.set('isNewHwLoading', true);
			var hw = Nerdeez.Hw.createRecord();
			hw.set('title', this.get('newHwTitle')); 
			hw.set('description', this.get('newHwDescription')); 
			hw.set('school_group', this.get('content')); 
			hw.transaction.commit();
			hw.one('didCreate', function(){
				if(xthis.get('newHwFiles.length') > 0 ){
					xthis.get('newHwFiles').forEach(function(item, index, enumerable){
						item.set('hw', this);
						item.transaction.commit();						
					})
					xthis.set('isNewHwLoading', false);
					onSuccess();
				}
				else{
					xthis.set('isNewHwLoading', false);
					onSuccess();
				}
			});
			hw.one('becameError', function(json){
				xthis.set('isNewHwLoading', false);
				xthis.set('hwMessage', json.errors);
			});
		}
	}
});


})();

(function() {

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
    return new Ember.Handlebars.SafeString('<div class="loading"><i class="icon-refresh icon-spin"></i></div>');
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
    var html='';
    var rating = currRating;
    for (var i=1; i<=outOf; i++) {
    	if (i<=currRating)
    		html += '<li><i class="icon-star"></i></li>';
    	else if (rating % 1 !== 0){
    		html += '<li><i class="icon-star-half-empty"></i></li>';
    		rating = 0;
    	}
    	else
    		html += '<li><i class="icon-star-empty"></i></li>';
    }
    return new Handlebars.SafeString(html);
});

Ember.Handlebars.registerBoundHelper('fbComments', function() {
    
    var html='<div id="addfb1"><div class="fb-comments" data-href="window.location.href" data-colorscheme="light" data-numposts="5" data-width="870"></div></div>';
    return new Handlebars.SafeString(html);
});

})();

(function() {

//routes


})();

(function() {

/**
* this file will hold nerdeez application routes
*
* @copyright: nerdeez.com Ltd.
* @version: 1.0
* @author: Yariv Katz
*/

var Nerdeez = window.Nerdeez;
var Ember = window.Ember;

/**
 * define the routes urls here
 */
Nerdeez.Router.map(function () {
	this.route('search');
	this.route('about');
	this.route('terms');
	this.route('privacy');
    this.resource('schoolgroup', { path: '/schoolgroup/:schoolgroup_id' }, function(){
        this.route('wall');
        this.route('files');
        this.route('about');
    });
    this.route('login');
    this.route('logout');
    this.route('register');
    this.route('contact');
    this.route('verifyEmail', {path: '/verify-email/:hash'});
    this.route('changePassword', {path: '/change-password'});
    this.route('forgetPassword', {path: '/forget-password'})
    this.route('resetPassword', {path: '/reset-password/:hash'})
    this.resource('addSchoolGroup', {path: '/add-school-group'}, function(){
	    	this.route('course');
	    	this.route('faculty');
	    	this.route('uni');
    })
});

/**
 * all nerdeez routes will extend this object
 * it will contain common route functions
 */
Nerdeez.NerdeezRoute = Ember.Route.extend({
    
    /**
     * wiil extract the url params
     * @param name String the name of the param to extract
     */
    getURLParameter: function(name){
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.href)||[,null])[1]
        );
    },
    
    /**
     * will grab the get params from the url and return a dictionary with the data
     * @returns {Object} dictionary object from the url
     */
    getUrlParamsAsDisctionary: function(){
	    	var search = location.search.substring(1);
	    	return JSON.parse('{"' + decodeURI(search.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    }
});

/**
 * all the routes that require login will extend this
 * Usage: just extend this class instead of the regular Ember.Route
 */
Nerdeez.LoginRequired = Ember.Route.extend({
    redirect: function(){
        isLoggedIn = Nerdeez.get('auth.isLoggedIn');
        if(!isLoggedIn){
	        	this.transitionTo('login');
        }
    }
});

Nerdeez.LogoutRoute = Ember.Route.extend({
    redirect: function(){
	    var auth = Nerdeez.Auth.current();
	    auth.set('username', null);
	    auth.set('apiKey', null);
	    $.cookie('username', null);
		$.cookie('apiKey', null);
        this.transitionTo('index');
    }
});

Nerdeez.ChangePasswordRoute = Nerdeez.LoginRequired.extend({});

Nerdeez.ResetPasswordRoute = Nerdeez.NerdeezRoute.extend({
	
	/**
	 * will grab the params from the url and set them in the controller 
	 */
	setupController: function(controller, model){
		controller.set('email', this.getURLParameter('email'));
		controller.set('hash',this.getURLParameter('hash'));
	}
});

Nerdeez.ApplicationRoute = Nerdeez.NerdeezRoute.extend({
	enter: function(){
		var xthis = this;
		
		//get the params from twitter if exists
		var oauthToken = this.getURLParameter('oauth_token');
		var oauthVerifier = 	this.getURLParameter('oauth_verifier');
		
		//if got message from twitter then get busy login
		if (oauthToken !== 'null' && oauthVerifier !== 'null'){
			var adapter = Nerdeez.Adapter.current();
			adapter.ajax(
				SERVER_URL + '/api/v1/utilities/twitter-login-callback/',
				'POST',
				{
					success: function(json){
						// var auth = Nerdeez.Auth.current();
			        		// auth.set('isLoggedIn', json['is_logged_in']);
			        		// Nerdeez.set('isLoggedIn', json['is_logged_in']);
			        		xthis.controllerFor('login').commonLogin(json);
					},
					error: function(json){
						console.log('twitter callback error');
					},
					data: {
						oauth_verifier: oauthVerifier,
						oauth_token: oauthToken
					}
				}
			);
		}
	}
	
});


/**
 * the route for the university search, grab the initial data
 */
Nerdeez.SearchRoute = Ember.Route.extend({
	model: function(param){
		return Nerdeez.Schoolgroup.find({limit: 20, order_by: 'title'});
	}
});

/**
 * all the flat pages will extend this route
 */
Nerdeez.FlatPageRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('flatpage');
    }
});

/**
 * route to about page
 */
Nerdeez.AboutRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'about'});
	}
});

/**
 * route to privacy page
 */
Nerdeez.PrivacyRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title' : 'privacy'});
	}
});

/**
 * route to terms page
 */
Nerdeez.TermsRoute = Nerdeez.FlatPageRoute.extend({
	model: function(param){
		return Nerdeez.Flatpage.find({'title': 'terms'});
	}
});

/**
 * the route to a course page
 */
Nerdeez.SchoolgroupRoute = Ember.Route.extend({
    model: function(param){
        return Nerdeez.Schoolgroup.find(param.schoolgroup_id);
    },
    setupController: function(controller, model){
	    	controller.set('content', model);
	    	if(Nerdeez.get('auth.isLoggedIn')){
		    	var enroll = Nerdeez.Enroll.createRecord();
			enroll.set('user', Nerdeez.get('auth.userProfile'));
			enroll.set('school_group', model);
			enroll.transaction.commit();
			
			var enrolls = Nerdeez.get('auth.userProfile.enrolls');
			var isInBar = false;
			enrolls.forEach(function(item, index, enumerable){
				if(item.get('school_group.id') == model.get('id'))isInBar = true;
			});
			if(!isInBar){
				enrolls.insertAt(0,enroll);
			}
		}
    }
});

/**
 * the route to a course wall page
 */
Nerdeez.SchoolgroupWallRoute = Nerdeez.NerdeezRoute.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route to a course files page
 */
Nerdeez.SchoolgroupFilesRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route to a course about page
 */
Nerdeez.SchoolgroupAboutRoute = Nerdeez.LoginRequired.extend({
    model: function(){
        return this.modelFor('schoolgroup');
    }
});

/**
 * the route for the add school group page
 */
Nerdeez.AddSchoolGroupRoute = Nerdeez.NerdeezRoute.extend({
	model: function(param){
		
		//find the id of the university
		var universityId = 0;
		for(var i=0; i < Nerdeez.SCHOOLGROUP_TYPE.length; i++){
			if(Nerdeez.SCHOOLGROUP_TYPE[i].title === 'University'){
				universityId = Nerdeez.SCHOOLGROUP_TYPE[i].id;
			}
		}
		
		//return all the universities
		return Nerdeez.Schoolgroup.find({school_type: universityId});
	},
	
});

Nerdeez.AddSchoolGroupCourseRoute = Nerdeez.NerdeezRoute.extend({
	setupController: function(controller, model){
		this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[0].id);
	}
});

Nerdeez.AddSchoolGroupFacultyRoute = Nerdeez.NerdeezRoute.extend({
	setupController: function(controller, model){
		this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[1].id);
	}
});

Nerdeez.AddSchoolGroupUniRoute = Nerdeez.NerdeezRoute.extend({
	setupController: function(controller, model){
		this.controllerFor('add_school_group').set('schoolType', Nerdeez.SCHOOLGROUP_TYPE[2].id);
	}
});

/**
 * when the user clicks the mail verification link this will lead to this url
 * will redirect to login if all is success
 */
Nerdeez.VerifyEmailRoute = Nerdeez.NerdeezRoute.extend({
    
    /**
     * grab the response from the server to the verification
     */
    model: function(param){
        
        //grab the params
        var email = this.getURLParameter('email');
        var hash = this.getURLParameter('hash');
        
        //query the server
        var adapter = this.get('store.adapter');
        return adapter.ajax(
            SERVER_URL + '/api/v1/utilities/verify-email/',
	        	'POST',
	        	{
		        	success: function(json){
		        	    
		        	},
		        	error: function(json){
		        	    
		        	},
		        	data:{
		        		email: email,
		        		hash: hash
		        	}
	        	}
        );
        
    },
    
    /**
     * success verification now redirect to the login controller
     */
    setupController: function(controller, model){
        this.transitionTo('login');
        var loginController = this.controllerFor('login');
        loginController.set('isSuccess', true);
        loginController.set('message', model.message);
    },
    
    actions: {
	    	
	    	/**
	    	 * when the user fails to activate the account
		 * @param {Object} reason
	    	 */
	    	error: function(reason){
		    	this.transitionTo('register');
		    	var registerController = this.controllerFor('register');
		    	registerController.set('isError', true);
		    	registerController.set('message', 'Account activation failed');
	    	}
    }
});


})();

(function() {

//store


})();

(function() {

/**
 * django-tastypie serializer - used to communicate with a rest server implemented in tastypie
 * usually works with tastypie adapter
 * 
 * Example
 * 
 * ```javascript
 * app.store = DS.Store.create(
 *     {
 * 	       adapter: DS.DjangoTastypieAdapter.extend({
 *              serializer: DS.DjangoTastypieSerializer.extend({
 * 	                . . .
 *              }) 	  	
 *         })
 *     } 	
 * );
 * ```
 * 
 * @requires ember.js
 * @requires ember-data.js
 * @version 1.0
 * @copyright nerdeez.com
 * @author Yariv Katz
 * 
 */

var get = Ember.get, set = Ember.set;

//create the namespace if the namespace doesnt exist
if (typeof window.Nerdeez === "undefined"){
	var Nerdeez = window.Nerdeez = Ember.Namespace.create();
}
else{
	var Nerdeez = window.Nerdeez;
}

/**
 * this class knows how to handle with the json response of a django-tastypie server
 * @class DjangoTastypieSerializer
 * @namespace Nerdeez
 * @extends DS.JSONSerializer
 * @requires ember.js
 * @requires ember-data.js 
 */
Nerdeez.DjangoTastypieSerializer = DS.JSONSerializer.extend({

	type: null,

	/**
	 * @private
	 * from the meta return a url
	 * @param {Object} meta the meta recieved from the server response
	 * @param {number} id
	 * @return {string}
	 */
	getItemUrl: function(meta, id){
	    var url;
	
	    url = get(this, 'adapter').rootForType(meta.type);
	    return ["", get(this, 'namespace'), url, id, ""].join('/');
	},

	/**
	 * @see {DS.Serializer}
	 */
	keyForBelongsTo: function(type, name) {
	    //return this.keyForAttributeName(type, name) + "_id";
	    return this.keyForAttributeName(type, name);
	},

	/**
	 * @see {DS.Serializer}
	 */
	addBelongsTo: function(hash, record, key, relationship) {
	    var id,
	        related = get(record, relationship.key);
	    if(related != null)
	        id = get(related, this.primaryKey(related));
	
	    if (!Ember.isNone(id)) { hash[key] = this.getItemUrl(relationship, id); }
	},

	/**
	 * @see {DS.Serializer}
	 */
	addHasMany: function(hash, record, key, relationship) {
	    var self = this,
	        serializedValues = [],
	        id = null;
	
	    key = this.keyForHasMany(relationship.type, key);
	
	    value = record.get(key) || [];
	
	    value.forEach(function(item) {
	      id = get(item, self.primaryKey(item));
	      serializedValues.push(self.getItemUrl(relationship, id));
	    });
	
	    hash[key] = serializedValues;
	},

	/**
	 * @see {DS.Serializer}
	 */
	extract: function(loader, json, type, record) {
	    this.extractMeta(loader, type, json);
	    this.sideload(loader, type, json);
	
	    if (json) {
	      if (record) { loader.updateId(record, json); }
	      this.extractRecordRepresentation(loader, type, json);
	    }
	},

	/**
	 * @see {DS.Serializer}
	 */
	extractMany: function(loader, json, type, records) {
	    this.sideload(loader, type, json);
	    //this.extractMeta(loader, type, json);
	
	    if (json.objects) {
	      var objects = json.objects, references = [];
	      if (records) { records = records.toArray(); }
	
	      for (var i = 0; i < objects.length; i++) {
	        if (records) { loader.updateId(records[i], objects[i]); }
	        var reference = this.extractRecordRepresentation(loader, type, objects[i]);
	        references.push(reference);
	      }
	      references.set('totalCount', json.meta.total_count);
	      loader.populateArray(references);
	    }
	},

	/**
	 * @see {DS.Serializer}
	 */
	extractMeta: function(loader, type, json) {
	    var meta = json.meta,
	      since = this.extractSince(meta);
	
	    // this registers the id with the store, so it will be passed
	    // into the next call to `findAll`
	    if (since) { loader.sinceForType(type, since); }
	},

	/**
	 * @see {DS.Serializer}
	 */
	extractSince: function(meta) {
	    if (meta) {
	      return meta.next;
	    }
	},
  
	/**
     * Tastypie default does not support sideloading
     */
	sideload: function(loader, type, json, root) {

	},

	/**
     * ASSOCIATIONS: DESERIALIZATION
     * Transforms the association fields from Resource URI django-tastypie format
     */
	_deurlify: function(value) {
	    if (typeof value === "string") {
	      return value.split('/').reverse()[1];
	    } else {
	      return value;
	    }
	},

	/**
	 * @see {DS.Serializer}
	 */
	extractHasMany: function(type, hash, key) {
	    var value,
	      self = this;
	
	    value = hash[key];
	    //var xtype = type;
	    self.typeFromAlias();
	    this.set('type', self.aliases.get(key));
	    if (!!value) {
	      value.forEach(function(item, i, collection) {
	        collection[i] = self._deurlify(item);
	        collection[i].type = self.get('type');
	      });
	    }
	
	    return value;
	},

	/**
	 * @see {DS.Serializer}
	 */
	extractBelongsTo: function(type, hash, key) {
	    var value = hash[key];
	
	    if (!!value) {
	      value = this._deurlify(value);
	    }
	    return value;
	}

});



})();

(function() {

/**
 * ember store adapter for server that returns a django - tastypie response
 * 
 * Example
 * 
 * ```javascript
 * 
 * app.store = DS.Store.create(
 *     {
 * 	       adapter: DS.DjangoTastypieAdapter.extend({
 *              . . .  	
 *         })
 *     } 	
 * );
 * 
 * ``` 
 * 
 * @requires ember.js
 * @requires ember-data.js
 * @requires tastypie_serializer.js
 * @version 1.0
 * @copyright nerdeez.com
 * @author Yariv Katz
 */

var get = Ember.get, set = Ember.set;

//create the namespace if the namespace doesnt exist
if (typeof window.Nerdeez === "undefined"){
	var Nerdeez = Ember.Namespace.create();
}
else{
	var Nerdeez = window.Nerdeez;
}

/**
 * extending the rest adapter - this will create an adapter for django - tastypie
 * @class DjangoTastypieAdapter
 * @extends DS.RESTAdapter
 * @requires ember.js
 * @requires ember-data.js
 * @requires tastypie_serializer.js
 */
Nerdeez.DjangoTastypieAdapter = DS.RESTAdapter.extend({
	
	/**
	 * Set this parameter if you are planning to do cross-site
	 * requests to the destination domain. Remember trailing slash 
	 * @property serverDomain
	 * @public
	 * @type string
	 */
	serverDomain: null,

	/**
	 * This is the default Tastypie namespace found in the documentation.
	 * You may change it if necessary when creating the adapter
	 * @property namespace
	 * @public
	 * @type string 
	 */ 
	namespace: "api/v1",

	/**
	 * Bulk commits are not supported at this time by the adapter.
	 * Changing this setting will not work
	 * @property bulkCommit
	 * @type Boolean
	 * @private 
	 */
	bulkCommit: false,

	/**
	 * Tastypie returns the next URL when all the elements of a type
	 * cannot be fetched inside a single request. Unless you override this
	 * feature in Tastypie, you don't need to change this value. Pagination
	 * will work out of the box for findAll requests
	 * @property since
	 * @type string
	 * @public   
	 */
	since: 'next',

	/**
	 * Serializer object to manage JSON transformations
	 * @property serializer
	 * @type DS.JSONSerializer
	 * @public
	 */
	serializer: Nerdeez.DjangoTastypieSerializer,
	
	/**
	 * will append this to the url for tastypie api key authentication
	 * @property api_key
	 * @type string
	 * @public
	 */
	apiKey: null,
	
	/**
	 * will append this to the url for tastypie authentication
	 * @property username
	 * @type string
	 * @public
	 */
	username: null,
	
	/**
	 * hook for crossDomain communication.
	 * for example you can use Nerdeez.Wormhole (wormhole.js)
	 * if not set the default ajax will be set
	 */
	wormhole: null,
	
	/**
	 * hook to set the loading function to call when ajax starts
	 * @type {Function}
	 * @property
	 * @public 
	 */
	loadingFunction: null,
	
	/**
	 * hook to set the stop loading function to call when ajax finishes
	 * @type {Function}
	 * @property
	 * @public 
	 */
	stopLoadingFunction: null,

	/**
	 * @private
	 * @return void
	 */
	init: function() {
	    var serializer,
	        namespace;
	
	    this._super();
	
	    namespace = get(this, 'namespace');
	    Em.assert("tastypie namespace parameter is mandatory.", !!namespace);
	
	    // Make the adapter available for the serializer
	    serializer = get(this, 'serializer');
	    set(serializer, 'adapter', this);
	    set(serializer, 'namespace', namespace);
	    
	    //create wormhole instance
	    wormhole = this.get('wormhole');
	    if(wormhole != null)
		    this.set('wormhole', wormhole.create({serverUrl: this.get('serverDomain')}));
	},
	
	/**
     * override the ajax for cross domain communications
     * @private
     * @param {string} url ajax url
     * @param {string} type 'POST', 'PUT', 'DELETE'
     * @param {Object} hash {data: {holds the dicionary to post}, success: {holds success function}, error: {holds the error function}}
     * @return void
     */
    ajax: function (url, type, hash) {
    	
		// if the api key and username are set then append them to url	    	
        if(this.get('apiKey') != null && this.get('username') != null && type.toLowerCase() == "get"){
            var api_key = this.get('apiKey');
            var username = this.get('username');
            var url = url + '?username=' + username + '&api_key=' + api_key;
        }
        
        //if its post put request then prepare the data
        pass_data = hash.data;
        if (type.toLowerCase() == "post" || type.toLowerCase() == "put"){
	        	hash.data['username'] = this.get('username');
	        	hash.data['api_key'] = this.get('apiKey');
            pass_data = JSON.stringify(hash.data);
        }
        
        //call wormhole ajax or super ajax if wormhole not set
        if(this.get('wormhole') == null){
	        	return this._super(url, type, hash);
        }
        else{
	        	if(this.get('loadingFunction') != null && this.get('stopLoadingFunction') != null)
		        	this.get('loadingFunction')();
	        return this.get('wormhole').ajax(
		        	{
		        		url: url, 
		        		type: type, 
		        		data: pass_data, 
		        		dataType: 'json', 
		        		contentType: 'application/json', 
		        		successFunction: hash.success, 
		        		failFunction: hash.error, 
		        		alwaysFunction: this.get('stopLoadingFunction')
		        	});	
        }
    },

	/**
	 * create a record in the server - sends a post request
	 * @param {DS.Store} store our store instance
	 * @param {subclass of DS.Model} type
	 * @param {subclass of DS.Model} record the record that called this function
	 * @return void 
	 */
	createRecord: function(store, type, record) {
	    var data,
	        root = this.rootForType(type);
	
	    data = record.serialize();
	    xthis = this;
	    this.ajax(this.buildURL(root), "POST", {
		      data: data,
		      success: function(json) {
		      	if(record.get('id') == null){
			        	record.set('id', json.id);
		        }
		        xthis.didCreateRecord(store, type, record, json);
		      },
		      error: function(xhr){
		      	xthis.didError(store, type, record, xhr);
		      }
	    });
	},

	/**
	 * sends a put update request to the server
	 * @param {DS.Store} store our store instance
	 * @param {subclass of DS.Model} type
	 * @param {subclass of DS.Model} record the record that invoke this function
	 * @return void
	 */  
	updateRecord: function(store, type, record) {
	    var id,
	        data;
	
	    id = Em.get(record, 'id');
	    root = this.rootForType(type);
	
	    data = record.serialize();
	    xthis = this;
	    this.ajax(this.buildURL(root, id), "PUT", {
		    data: data,
		    success: function(json) {
		        xthis.didSaveRecord(store, type, record, json);
		    },
		    error: function(xhr){
			    xthis.didError(store, type, record, xhr);
		    }
	    });
	},

	/**
	 * sends a delete request to the server
	 * @param {DS.Store} store our store instance
	 * @param {subclass of DS.Model} type
	 * @param {subclass of DS.Model} record the record that invoke this function
	 * @return void
	 */
	deleteRecord: function(store, type, record) {
	    var id,
	        root;

	    id = get(record, 'id');
	    root = this.rootForType(type);
	    xthis = this;
	    this.ajax(this.buildURL(root, id), "DELETE", {
		    success: function(json) {
		        xthis.didDeleteRecord(store, type, record, json);
		    },
		    error: function(xhr){
			    xthis.didError(store, type, record, xhr);
		    }
	    });
	},
	
	/**
	 * if we have a has many relationship this will help find
	 * the data from the server based on the ids on the objects
	 * @param {DS.Store} store our store instance
	 * @param {subclass of DS.Model} type
	 * @param {string|Array} ids the id to return
	 * @return void
	 */
	findMany: function(store, type, ids) {
	    var url,
	        root = this.rootForType(type);
	
	    ids = this.serializeIds(ids);
	
	    // FindMany array through subset of resources
	    if (ids instanceof Array) {
	      ids = "set/" + ids.join(";") + '/';
	    }
	
	    url = this.buildURL(root);
	    url += ids;
	    xthis = this;
	    this.ajax(url, "GET", {
	      success: function(json) {
	        xthis.didFindMany(store, type, json);
	      }
	    });
	},

	/**
	 * will return the server api url
	 * @param {subclass of DS.Model} record the url for this record
	 * @param {string} suffix used to append a string to the url
	 * @return {string} the url
	 */
	buildURL: function(record, suffix) {
	    var url = this._super(record, suffix);

	    // Add the trailing slash to avoid setting requirement in Django.settings
	    if (url.charAt(url.length -1) !== '/') {
	      url += '/';
	    }
	
	    // Add the server domain if any
	    if (!!this.serverDomain) {
	      url = this.removeTrailingSlash(this.serverDomain) + url;
	    }
	
	    return url;
	},

	/**
	 * The actual nextUrl is being stored. The offset must be extracted from
	 * the string to do a new call.
	 * When there are remaining objects to be returned, Tastypie returns a
	 * `next` URL that in the meta header. Whenever there are no
	 * more objects to be returned, the `next` paramater value will be null.
	 * Instead of calculating the next `offset` each time, we store the nextUrl
	 * from which the offset will be extrated for the next request 
	 */
	sinceQuery: function(since) {
	    var offsetParam,
	        query;
	
	    query = {};
	
	    if (!!since) {
	      offsetParam = since.match(/offset=(\d+)/);
	      offsetParam = (!!offsetParam && !!offsetParam[1]) ? offsetParam[1] : null;
	      query.offset = offsetParam;
	    }
	
	    return offsetParam ? query : null;
	},

	/**
	 * if there is a slash at the end of the url then remove it
	 * @private
	 * @param {string} url 
	 * @return {string} the new url
	 */
	removeTrailingSlash: function(url) {
	    if (url.charAt(url.length -1) === '/') {
	      return url.slice(0, -1);
	    }
	    return url;
	},

	/**
	 * django-tastypie does not pluralize names for lists 
	 * @param {string} name
	 */
	pluralize: function(name) {
	    return name;
	},
  
	/**
	 * find all records
	 * @param {DS.Store} store
	 * @param {subclass of DS.Model} type
	 * @param {DS.Model} record
	 * @return void
	 */
	findAll: function(store, type, record){
	    var json = {}
	    , root = this.rootForType(type)
	    , plural = this.pluralize(root);
	    xthis = this;
	    this.ajax(this.buildURL(root), "GET", {
	        data: null,
	        success: function(json) {
	                xthis.didFindAll(store, type, json);
	                
	        }
	    });
	},

	/**
	 * pass a query to the server
	 * @param {DS.Store} store
	 * @param {subclass of DS.Model} type
	 * @param {Object} query dictionary to send to the server
	 * @param {Object} recordArray
	 */
    findQuery: function(store, type, query, recordArray) {
        var json = {}
        , root = this.rootForType(type)
        , plural = this.pluralize(root);
        xthis = this;
        data = query;
        this.ajax(this.buildURL(root), "GET", {
            data: data,
            success: function(json) {
                    xthis.didFindQuery(store, type, json, recordArray);
            }
        });
    },
    
    /**
     * 
	 * @param {DS.Store} store
	 * @param {subclass of DS.Model} type
	 * @param {string} id the id of the user we want to return
	 * @return void
     */
    find: function(store, type, id) {
        var json = {}
        , root = this.rootForType(type);
        xthis = this;
        this.ajax(this.buildURL(root, id), "GET", {
            success: function(json) {
                    xthis.didFindRecord(store, type, json, id);
            }
        });
    },
    
    /**
     * will handle the error
     * 
	 * @param {DS.Store} application store
	 * @param {submodule of DS.Model} type the class we are performing the action on
	 * @param {Object} record the problematic record
	 * @param {Object} xhr json response from the server
     */
    didError: function(store, type, record, xhr){
	    	//var json = JSON.parse(xhr.responseText),
	    	//var json = xhr;
		//var serializer = this.get('serializer');
		//errors = serializer.extractValidationErrors(type, json);
		//errors = {error: json.responseText}
		record.set('errors', xhr.responseText);
		store.recordWasError(record);
		//this._super(store, type, record, xhr);
    },
});


})();

(function() {

(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(g){var f=this.prototype;a=true;var e=new this();a=false;for(var d in g){e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){return function(){var k=this._super;this._super=f[h];var j=i.apply(this,arguments);this._super=k;return j}})(d,g[d]):g[d]}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.prototype=e;c.prototype.constructor=c;c.extend=arguments.callee;return c}})();(function(c){var b={trace:function(d){if(c.console!==undefined){c.console.log("Porthole: "+d)}},error:function(d){if(c.console!==undefined){c.console.error("Porthole: "+d)}}};b.WindowProxy=function(){};b.WindowProxy.prototype={post:function(e,d){},addEventListener:function(d){},removeEventListener:function(d){}};b.WindowProxyBase=Class.extend({init:function(d){if(d===undefined){d=""}this.targetWindowName=d;this.origin=c.location.protocol+"//"+c.location.host;this.eventListeners=[]},getTargetWindowName:function(){return this.targetWindowName},getOrigin:function(){return this.origin},getTargetWindow:function(){return b.WindowProxy.getTargetWindow(this.targetWindowName)},post:function(e,d){if(d===undefined){d="*"}this.dispatchMessage({data:e,sourceOrigin:this.getOrigin(),targetOrigin:d,sourceWindowName:c.name,targetWindowName:this.getTargetWindowName()})},addEventListener:function(d){this.eventListeners.push(d);return d},removeEventListener:function(g){var d;try{d=this.eventListeners.indexOf(g);this.eventListeners.splice(d,1)}catch(h){this.eventListeners=[]}},dispatchEvent:function(f){var d;for(d=0;d<this.eventListeners.length;d++){try{this.eventListeners[d](f)}catch(g){}}}});b.WindowProxyLegacy=b.WindowProxyBase.extend({init:function(d,e){this._super(e);if(d!==null){this.proxyIFrameName=this.targetWindowName+"ProxyIFrame";this.proxyIFrameLocation=d;this.proxyIFrameElement=this.createIFrameProxy()}else{this.proxyIFrameElement=null;throw new Error("proxyIFrameUrl can't be null")}},createIFrameProxy:function(){var d=document.createElement("iframe");d.setAttribute("id",this.proxyIFrameName);d.setAttribute("name",this.proxyIFrameName);d.setAttribute("src",this.proxyIFrameLocation);d.setAttribute("frameBorder","1");d.setAttribute("scrolling","auto");d.setAttribute("width",30);d.setAttribute("height",30);d.setAttribute("style","position: absolute; left: -100px; top:0px;");if(d.style.setAttribute){d.style.setAttribute("cssText","position: absolute; left: -100px; top:0px;")}document.body.appendChild(d);return d},dispatchMessage:function(e){var d=c.encodeURIComponent;if(this.proxyIFrameElement){var f=this.proxyIFrameLocation+"#"+d(b.WindowProxy.serialize(e));this.proxyIFrameElement.setAttribute("src",f);this.proxyIFrameElement.height=this.proxyIFrameElement.height>50?50:100}}});b.WindowProxyHTML5=b.WindowProxyBase.extend({init:function(d,e){this._super(e);this.eventListenerCallback=null},dispatchMessage:function(d){this.getTargetWindow().postMessage(b.WindowProxy.serialize(d),d.targetOrigin)},addEventListener:function(e){if(this.eventListeners.length===0){var d=this;this.eventListenerCallback=function(f){d.eventListener(d,f)};c.addEventListener("message",this.eventListenerCallback,false)}return this._super(e)},removeEventListener:function(d){this._super(d);if(this.eventListeners.length===0){c.removeEventListener("message",this.eventListenerCallback);this.eventListenerCallback=null}},eventListener:function(e,d){var f=b.WindowProxy.unserialize(d.data);if(f&&(e.targetWindowName==""||f.sourceWindowName==e.targetWindowName)){e.dispatchEvent(new b.MessageEvent(f.data,d.origin,e))}}});if(typeof c.postMessage!=="function"){b.trace("Using legacy browser support");b.WindowProxy=b.WindowProxyLegacy.extend({})}else{b.trace("Using built-in browser support");b.WindowProxy=b.WindowProxyHTML5.extend({})}b.WindowProxy.serialize=function(d){if(typeof JSON==="undefined"){throw new Error("Porthole serialization depends on JSON!")}return JSON.stringify(d)};b.WindowProxy.unserialize=function(g){if(typeof JSON==="undefined"){throw new Error("Porthole unserialization dependens on JSON!")}try{var d=JSON.parse(g)}catch(f){return false}return d};b.WindowProxy.getTargetWindow=function(d){if(d===""){return top}else{if(d==="top"||d==="parent"){return c[d]}}return parent.frames[d]};b.MessageEvent=function a(f,d,e){this.data=f;this.origin=d;this.source=e};b.WindowProxyDispatcher={forwardMessageEvent:function(i){var g,h=c.decodeURIComponent,f,d;if(document.location.hash.length>0){g=b.WindowProxy.unserialize(h(document.location.hash.substr(1)));f=b.WindowProxy.getTargetWindow(g.targetWindowName);d=b.WindowProxyDispatcher.findWindowProxyObjectInWindow(f,g.sourceWindowName);if(d){if(d.origin===g.targetOrigin||g.targetOrigin==="*"){d.dispatchEvent(new b.MessageEvent(g.data,g.sourceOrigin,d))}else{b.error("Target origin "+d.origin+" does not match desired target of "+g.targetOrigin)}}else{b.error("Could not find window proxy object on the target window")}}},findWindowProxyObjectInWindow:function(d,g){var f;if(d.RuntimeObject){d=d.RuntimeObject()}if(d){for(f in d){if(d.hasOwnProperty(f)){try{if(d[f]!==null&&typeof d[f]==="object"&&d[f] instanceof d.Porthole.WindowProxy&&d[f].getTargetWindowName()===g){return d[f]}}catch(h){}}}}return null},start:function(){if(c.addEventListener){c.addEventListener("resize",b.WindowProxyDispatcher.forwardMessageEvent,false)}else{if(document.body.attachEvent){c.attachEvent("onresize",b.WindowProxyDispatcher.forwardMessageEvent)}else{b.error("Cannot attach resize event")}}}};if(typeof c.exports!=="undefined"){c.exports.Porthole=b}else{c.Porthole=b}})(this);

})();

(function() {

/**
 * creates an ember object for cross domain communication
 * 
 * Example:
 * 
 * ```javascript
 * 
 * wormhole = Nerdeez.Wormhole.create({serverUrl: 'http://foo.com'});
 * wormhole.ajax({url: url, type: type, data: pass_data, dataType: 'json', contentType: 'application/json', successFunction: successFunction, failFunction: failFunction});
 * ```
 * @requires porthole.js
 * @version 1.0
 * @copyright nerdeez.com
 * @author Yariv Katz
 */

//create the namespace if the namespace doesnt exist
if (typeof window.Nerdeez === "undefined"){
	var Nerdeez = window.Nerdeez = Ember.Namespace.create();
}
else{
	var Nerdeez = window.Nerdeez;
}

/**
 * using porthole.js this will be used to create crossdomain ajax communications using iframes
 * 
 * @class Wormhole
 * @namespace Nerdeez
 * @requires porthole.js
 * @extends Ember.Object
 */
Nerdeez.Wormhole = Ember.Object.extend({
	
	/**
	 * did i finish to create the porthole communication
	 * 
	 * @property linked
	 * @type Boolean
	 * @default false
	 * @private
	 */
	linked: false,
	
	/**
	 * if didn't finish iframe communication setup then 
	 * pend the request to use after communication is ready
	 * 
	 * @property pending
	 * @type Array
	 * @private
	 */
    pending: [],
    
    /**
     * pointing head to the current request
     * 
     * @property nextRequest
     * @type Number
     * @private
     */
    nextRequest: 1,
    
    /**
     * hold jquery defered objects
     * @property
     * @private
     * @type Object
     */
    deferreds: {},
    
    /**
     * holds the success functions for an ajax requests
     * @property
     * @private
     * @type Object
     */
    successFunction: {},
    
    /**
     * holds the fail functions for an ajax requests
     * @property
     * @private
     * @type Object
     */
    failFunction: {},
    
    /**
     * holds the ajax always function
     * @property
     * @private
     * @type Object
     */
    alwaysFunction: {},
    
    /**
     * holds the server url
     * set this property to change the default connection url
     * @property
     * @public
     * @type strng
     */
    serverUrl: 'http://localhost:8000/',
    
	/**
	 * @private
	 * 
	 * - creates an iframe
	 * - init porthole to communicate with this iframe
	 * - capture response events
	 * important: set the serverUrl property to change the default server
	 *  
	 * @method init
	 */
    init: function() {
	    	this._super();
    	
        // create the iframe
        var target = "wormhole_iframe";
        this.iframe = $('<iframe id="' + target +
            '" name="' + target +
            '" src="' + this.get('serverUrl') +
            '" style="width: 0; height: 0; border: none; display: none;"></iframe>');
            $('body').append(this.iframe);
            
        // create a porthole.js proxy window to send and receive message from the vault iframe
        this.windowProxy = new Porthole.WindowProxy(this.get('serverUrl'), target);
 
        // handle messages based on their type
        var self = this;
        this.windowProxy.addEventListener(function(message) {
            var data = $.parseJSON(message.data);
            switch (data.type) {
                case "ready": return self.onReady(data);
                case "response":
	                console.log('test response'); 
	                return self.onResponse(data);
                default: throw Error("unknown message type: " + data.type);
            }
        });
        
    },

	/**
	 * creates an ajax request through the porthole to the server
	 * @param {Object} params
	 * @return {Object} the promise for the ajax request
	 */    
    ajax: function(params) {
        var requestId = this.nextRequest;
        this.nextRequest += 1;
 
        var deferred = $.Deferred();
        this.deferreds[requestId] = deferred;
        this.successFunction[requestId] = params.successFunction;
        this.failFunction[requestId] = params.failFunction;
        this.alwaysFunction[requestId] = params.alwaysFunction;
        var request = {requestId: requestId, params: params};
        if (this.linked) {
            this.sendRequest(request);
        } else {
            this.pending.push(request);
        }
        return deferred.promise();
    },
    
    /**
     * send the request through the porthole 
	 * @param {Object} request
     */
    sendRequest: function(request) {
        try{
            this.windowProxy.post(JSON.stringify(request));
        }
        catch(err){
            console.log(err);
        }
    },
 
    /**
     * finished opening communication portal with the server
     * now we can send all the pending requests
	 * @param {Object} data
     */
    onReady: function(data) {
        this.linked = true;
        for (var i = 0; i < this.pending.length; i++) {
            this.sendRequest(this.pending[i]);
            //this.pending = this.pending.splice(i, 1);
            //this.sendRequest(this.pending.pop());
        }
        this.pending = [];
    },
    // handle responses to requests made through the wormhole
    
    /**
     * the server returned an answer run the success or fail function
	 * @param {Object} data
     */
    onResponse: function(data) {
        var deferred = this.deferreds[data.requestId];
        delete this.deferreds[data.requestId];
        
        if (data.success) {
            deferred.resolve(data.data.hash, data.textStatus);
            this.successFunction[data.requestId](data.data.hash);
        } else {
            deferred.reject(data.data.textStatus, data.errorThrown);
            //alert('Communication error');
            this.alwaysFunction[data.requestId]();
            this.failFunction[data.requestId]({status: data.data.jqXHR.status, responseText: data.data.jqXHR.responseText});
        }
        this.alwaysFunction[data.requestId]();
    }
});



})();

(function() {

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
                parent: { embedded: 'load' }
            });
            this.mappings.set( 'Nerdeez.Userprofile', { 
                enrolls: { embedded: 'load' }
            });
            this.mappings.set( 'Nerdeez.Enroll', { 
                school_group: { embedded: 'load' }
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





})();