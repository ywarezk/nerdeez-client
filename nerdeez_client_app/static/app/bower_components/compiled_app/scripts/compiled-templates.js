Ember.TEMPLATES["_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                                <i class=\"icon-search\"></i>\n                            ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push(" Logout ");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/logo.png\" />\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n    						<i class=\"icon-home\"></i>\n    						<span>Home</span>        					\n    					    ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                            <i class=\"icon-info\"></i>\n                            About\n                         ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n							<i class=\"icon-envelope\"></i>\n							Contact Us\n						");
  }

  data.buffer.push("<!--\n\nHolds the html of the application header\nauthor: Doron Nachshon\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n\n\n<div id=\"header\" class=\"_header\">\n    <header>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-4\">\n                    <div class=\"logo\">\n                        <img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/logo.png\">\n                    </div>\n                </div>\n                <div class=\"col-md-5 col-sm-6\">\n                    <form class=\"form-inline\">\n                        <div class=\"form-group\">\n                            ");
  hashContexts = {'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("form-control"),
    'valueBinding': ("searchQuery"),
    'placeholder': ("Search")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col-md-2 col-sm-2 pull-right\">\n                    <div class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" id=\"dropdownMenu1\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-smile-o\"></i>\n                            John Doe\n                            <i class=\"fa fa-caret-down\"></i>\n                        </a>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Account</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Settings</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Privacy</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">About</a></li>\n                            <li role=\"presentation\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "logout", options) : helperMissing.call(depth0, "link-to", "logout", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n</div>\n\n\n<!--<div id=\"header\" class=\"_header\">\n	<div class=\"container\">\n		<div class=\"row\">\n            <div class=\"logo col-md-3\">\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "homepage", options) : helperMissing.call(depth0, "linkTo", "homepage", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n		\n	        <div class=\"col-md-9 menu\">\n    		    <div class=\"nav-collapse\">\n    			    <ul class=\"nav pull-right\" id=\"main-nav\">\n    				    <li class=\"nav-icon\">\n    					    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "homepage", options) : helperMissing.call(depth0, "linkTo", "homepage", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    			    	</li>\n    				\n    				    <li>\n        					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "linkTo", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    				    </li>\n    				    \n    				    	<li>\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "linkTo", "contact", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					</li>\n    				\n    			    </ul>\n    			\n    		    </div> \n            </div>\n        </div>\n        \n\n	</div> \n	\n</div>\n-->");
  return buffer;
  
});

Ember.TEMPLATES["_history-bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n<div class=\"left-sidebar left-sidebar-history\">\n	<ul class=\"nav nav-tabs nav-stacked\">\n		<li class=\"header\">\n			History bar\n		</li>\n	    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "Nerdeez.auth.userProfile.enrolls", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		    <li class=\"parent\">\n			    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "school_group.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n			    <ul class=\"history-submenu\">\n			        <li>\n						");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("child")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "schoolgroup.about", "school_group", options) : helperMissing.call(depth0, "linkTo", "schoolgroup.about", "school_group", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("				          \n			        </li>\n			        <li>\n				        ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("child")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "schoolgroup.wall", "school_group", options) : helperMissing.call(depth0, "linkTo", "schoolgroup.wall", "school_group", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			        </li>\n			        <li>\n				        ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("child")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "hws.index", "school_group", options) : helperMissing.call(depth0, "linkTo", "hws.index", "school_group", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			        </li>\n		        </ul>\n		    </li>\n	    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n						    About\n						    <i class=\"icon-info\"></i>\n					    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n						    Wall\n						    <i class=\"icon-comments\"></i>\n					    ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n						    Hws\n						    <i class=\"icon-file\"></i>\n					    ");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "Nerdeez.auth.isLoggedIn", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_left-sidebar-application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		    		Search\n                    <i class=\"icon-search pull-right\"></i>\n		    	");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n	    <li>\n		    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    </li>\n	    ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n		    		Add course\n                    <i class=\"icon-plus pull-right\"></i>\n		    	");
  }

  data.buffer.push("<div class=\"left-sidebar\">\n	<ul class=\"nav nav-tabs nav-stacked\">\n		<li class=\"header\">\n			Application bar\n		</li>\n	    <li>\n		    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "search", options) : helperMissing.call(depth0, "link-to", "search", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    </li>\n	    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "Nerdeez.auth.isLoggedIn", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_masthead"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model", {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<i class=\"icon-caret-right\">\n					</i>\n				");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "route", "model", options) : helperMissing.call(depth0, "link-to", "route", "model", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						\n						");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						");
  return buffer;
  }

  data.buffer.push("<div id=\"masthead\">\n    \n	<div class=\"container\">\n		\n		<div class=\"masthead-pad\">\n			\n			<div class=\"masthead-text\">\n				<h2></h2>\n				<p>\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "Nerdeez.masthead", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</p>\n			</div> <!-- /.masthead-text -->\n			\n		</div>\n		\n	</div> <!-- /.container -->	\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_search-hover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		<div class=\"hoveron-block hoveron-wall\">\n			<div class=\"block-icon wall-icon\">\n				<i class=\"icon-comments\"></i>\n			</div>\n			<div class=\"block-text wall-text\">\n				<h3>Wall</h3>\n			</div>\n		</div>\n		");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		<div class=\"hoveron-block hoveron-files\">\n			<div class=\"block-icon files-icon\">\n				<i class=\"icon-file\"></i>\n			</div>\n			<div class=\"block-text files-text\">\n				<h3>H.W's</h3>\n			</div>\n		</div>\n		");
  }

  data.buffer.push("<!--\n	the partial for the search result hover affect\n	\n	Created October 25th, 2013\n	@author: Yariv Katz\n	@version: 1.02\n	@copyright: Nerdeez\n-->\n\n<div class=\"hoveron-toggle\">\n	<div class=\"hoveron-main\">\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "schoolgroup.wall", "", options) : helperMissing.call(depth0, "link-to", "schoolgroup.wall", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "hws.index", "", options) : helperMissing.call(depth0, "link-to", "hws.index", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</div>\n	<div class=\"hoveron-blur\"></div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_search-temp"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n				<div class=\"single-schoolgroup row top-buffer\">\n					<div class=\"border\">\n						<div class=\"row\">\n							<div class=\"span2 image-wrapper\">\n								<div class=\"thumbnail\">\n									");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "image", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								</div>\n							</div>\n							<div class=\"details span4\">\n								<h5>\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								</h5>\n								<p>\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								</p>\n							</div>\n						</div>\n					</div>\n				</div>\n				");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n										<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n									");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n										<i class=\"icon-picture\"></i>\n									");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"alert alert-info\">\n	              <strong>No results found</strong>\n	            </div>\n				");
  }

  data.buffer.push("<!-- \n\nholds the search\n	\n-->\n\n\n<div class=\"_search top-buffer\">\n	\n	<!-- begin search input -->\n	<div class=\"search-form\">\n		<div class=\"row\">\n			<div class=\"span7 center\">\n                <div class=\"faq-container\">\n    				<form class=\"faq-search\" ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    \n                        <div class=\"login-fields\">\n    			\n            				<div class=\"field\">\n            					<label for=\"username\">Search:</label>\n                                <i class=\"icon-search nerdeez-search\"></i>\n                                ");
  hashContexts = {'valueBinding': depth0,'placeholder': depth0,'class': depth0,'type': depth0};
  hashTypes = {'valueBinding': "STRING",'placeholder': "STRING",'class': "STRING",'type': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("searchQuery"),
    'placeholder': (""),
    'class': ("nerdeez-search"),
    'type': ("search")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            				</div> <!-- /field -->\n            				\n            			</div>\n    					\n    				</form>\n                </div>\n			</div>\n		</div>\n	</div>\n	<!-- end search input -->\n	\n	<!-- begin result list -->\n	<div class=\"result\">\n		<div class=\"row\">\n			<div class=\"span7 center\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n	<!-- end result list -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_topbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                <li>\n	                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "logout", options) : helperMissing.call(depth0, "linkTo", "logout", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		        </li>\n                <li>\n	                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n		                <i class=\"icon-cog\"></i>\n						Settings\n						<b class=\"caret\"></b>\n					</a>\n					<ul class=\"dropdown-menu\">\n                          <li>\n	                          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "changePassword", options) : helperMissing.call(depth0, "linkTo", "changePassword", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	                      </li>\n                    </ul>\n		        </li>\n		        \n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n		                <i class=\"icon-power-off\"></i>\n		                Logout\n		            ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n		                          Change Password\n	                          ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                <li>\n					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "login", options) : helperMissing.call(depth0, "linkTo", "login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    \n				</li>\n				<li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "register", options) : helperMissing.call(depth0, "linkTo", "register", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"icon-lock\"></i>\n                    Login\n                    ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                                    <i class=\"icon-pencil\"></i>\n                                    Register\n                  ");
  }

  data.buffer.push("<div id=\"topbar\">\n    \n	<div class=\"container\">\n		\n		<div id=\"top-nav\">\n			\n			<!--<div class=\"pull-left fb-like\">\n				<fb:like href=\"https://developers.facebook.com/docs/plugins/\" width=\"200\" height=\"100\" colorscheme=\"light\" layout=\"standard\" action=\"like\" show_faces=\"true\" send=\"false\"></fb:like>\n			</div>-->\n			\n			<ul class=\"pull-right\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "Nerdeez.auth.isLoggedIn", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ul>\n			\n		</div> <!-- /#top-nav -->\n		\n	</div> <!-- /.container -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_wall-header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n						Course Name:\n					");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.isFaculty", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n					");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n							Faculty Name:\n						");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n							");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.isUniversity", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("		\n						");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n								University Name:\n							");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n								Title:\n							");
  }

  data.buffer.push("<!--\n	Partial for the wall headline\n	\n	Created October 20th, 2013\n	@author: Doron Nachshon\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"nerdeez-box wallabout\">\n	<div class=\"nerdeez-box-action wallabout-action\">\n		<div class=\"pic-content\">\n			<div>\n				<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("model.getImageUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n			</div>\n		</div>\n		<div class=\"text-content\">\n			<div class=\"result-line\">\n				<h3>\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "model.isCourse", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</h3>\n				<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n			</div>\n			<div class=\"result-line\">\n				<h5> Description: </h5>\n				<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n			</div>\n		</div>\n	</div>\n	<div class=\"nerdeez-box-footer wallabout-footer\">\n		<div class=\"footer-social\">\n			<ul class=\"like-status\">\n				<li>\n					<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incDislike", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n						<i class=\"icon-thumbs-down\"></i>\n					</a>\n					<span class=\"badge badge-tertiary\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.dislike", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</span>\n				</li>\n				<li><i class=\"vertical-line\"></i></li>\n				<li>\n					<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incLike", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n						<i class=\"icon-thumbs-up\"></i>\n					</a>\n					<span class=\"badge badge-primary\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.like", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</span>\n				</li>\n				<li><i class=\"vertical-line\"></i></li>\n				<li>\n					<div class=\"fb\">\n						<a class=\"btn_2\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "share", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Share on Facebook</a>\n					</div>\n				</li>\n			</ul>\n			\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["add_school_group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n								Course\n								");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n								Faculty\n								");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n								University\n								");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n								        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n							        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n							");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						        <div class=\"alert alert-danger\">\n						          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						        </div>\n						    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						        <div class=\"alert alert-success\">\n						          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						        </div>\n						    ");
  return buffer;
  }

  data.buffer.push("<!--\n	Handlebar for adding a course\n	\n	Created September 26th, 2013\n	@author: Yariv Katz\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"add_school_group contact\">\n	<div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    			<div class=\"faq-container\">\n					<ol class=\"faqList faq-list\">\n						\n						<!-- begin school type -->\n						<li id=\"faq-1\">\n							<div class=\"description\">\n								<div class=\"faq-icon\">\n									<div class=\"faq-number\">1</div>\n								</div>\n								<div class=\"faq-text\">\n									<h4>School Group type?</h4>\n									<p>\n										Select the school group type you want to add.\n									</p>	\n								</div>\n							</div>\n							<div class=\"actions type\">\n								");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.course", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.course", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.faculty", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.faculty", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.uni", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.uni", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n							</div>\n						</li>\n						<!-- end school type -->\n						\n						<!-- begin choose uni -->\n						<li id=\"faq-2-course-faculty\">\n							<form class=\"js-validation\">\n								<div class=\"description\">\n									<div class=\"faq-icon\">\n										<div class=\"faq-number\">2</div>\n									</div>\n									<div class=\"faq-text\">\n										<h4>Choose University</h4>\n										<p>\n											Choose the university that this <span class=\"tbd\"></span> belongs to.\n										</p>	\n									</div>\n								</div>\n								<div class=\"actions type\">\n									");
  hashContexts = {'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'name': depth0,'class': depth0,'prompt': depth0};
  hashTypes = {'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'name': "STRING",'class': "STRING",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("controller.content"),
    'selectionBinding': ("university"),
    'optionLabelPath': ("content.title"),
    'name': ("university"),
    'class': ("nerdeez-select validate[required]"),
    'prompt': ("Select university")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								</div>\n								<div class=\"actions2\">\n									<p>OR</p>\n									<button class=\"button btn btn-primary btn-large\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addUniversity", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n										<i class=\"icon-plus\" style=\"\"></i>\n										Create a new university\n									</button>\n								</div>\n								");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isNewUniLoading", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								<div class=\"clearfix next\">\n									<button class=\"btn pull-right btn-primary btn-large\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showThirdStep", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Next</button>\n								</div>\n							</form>\n						</li>\n						<!-- end choose uni -->\n						\n						<!-- begin modal for new uni -->\n						<div aria-hidden=\"true\" aria-labelledby=\"windowTitleLabel\" role=\"dialog\" tabindex=\"-1\" class=\"modal hide fade\" id=\"new-university\">\n							<form class=\"js-validation\">\n								<div class=\"modal-header\">\n									<a data-dismiss=\"modal\" class=\"close\" href=\"#\">×</a>\n									<h3>New University</h3>\n									</div>\n								<div class=\"modal-body\">\n									<div class=\"field\">\n										<label>University name (Required):</label>\n										");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("University name"),
    'valueBinding': ("newUniTitle"),
    'class': ("nerdeez-inputs validate[required]")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									</div>\n									<div class=\"field\">\n										<label>Description (Optional):</label>\n										");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'placeholder': ("Extra information about the University"),
    'valueBinding': ("newUniDescription"),
    'class': ("nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									</div>\n								</div>\n								<div class=\"modal-footer\">\n							        <button data-dismiss=\"modal\" class=\"btn btn-default\" type=\"button\">Close</button>\n						            <button class=\"btn btn-primary\" type=\"button\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newUni", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save changes</button>\n					            </div>\n							</form>					           \n				        </div>\n						<!-- end modal for new uni -->\n						\n						<!-- begin title description step -->\n						<li id=\"faq-3-course-faculty-uni\">\n							<div class=\"description\">\n								<div class=\"faq-icon\">\n									<div class=\"faq-number\">2</div>\n								</div>\n								<div class=\"faq-text\">\n									<h4>Name/Description</h4>\n									<p>\n										Write the title and description of the <span class=\"tbd\"></span> .\n									</p>	\n								</div>\n							</div>\n							<div class=\"actions type\">\n								<label>Name (Required):</label>\n									");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("name"),
    'valueBinding': ("title"),
    'class': ("nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								<label>Description (Required):</label>\n									");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'placeholder': ("Description"),
    'valueBinding': ("description"),
    'class': ("nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n							</div>\n							");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSaveLoading", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n							\n							\n							<div class=\"clearfix next\">\n								<button class=\"btn pull-right btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveSchoolGroup", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Submit</button>\n							</div>\n							");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						    \n						    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						</li>\n						<!-- end choose uni -->\n						\n						<!-- Begin choose faculty -->\n						<li id=\"faq-4-course\">\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						</li>\n						<!-- end choose faculty -->\n						\n					</ol>		\n				</div>\n    			\n    			\n    		\n    	</div> <!-- /content -->\n    	\n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["add_school_group/course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n	        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	");
  return buffer;
  }

  data.buffer.push("<!-- \n	when the user clicks the add new school group and choose a course to add\n-->\n\n<!-- begin choose faculty -->\n<form class=\"js-validation\">\n	<div class=\"description\">\n		<div class=\"faq-icon\">\n			<div class=\"faq-number\">3</div>\n		</div>\n		<div class=\"faq-text\">\n			<h4>Choose Faculty</h4>\n			<p>\n				Choose the faculty that this course belongs to.\n			</p>	\n		</div>\n	</div>\n	<div class=\"actions type\">\n		");
  hashContexts = {'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'name': depth0,'class': depth0,'prompt': depth0};
  hashTypes = {'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'name': "STRING",'class': "STRING",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("controller.content"),
    'selectionBinding': ("faculty"),
    'optionLabelPath': ("content.title"),
    'name': ("faculty"),
    'class': ("nerdeez-select validate[required]"),
    'prompt': ("Select faculty")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	</div>\n	<div class=\"actions2\">\n		<p>OR</p>\n		<button class=\"button btn btn-primary btn-large\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addFaculty", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n			<i class=\"icon-plus\" style=\"\"></i>\n			Create a new Faculty\n		</button>\n	</div>\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNewFacultyLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<div class=\"clearfix next\">\n		<button class=\"btn pull-right btn-primary btn-large\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showFourthStep", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Next</button>\n	</div>\n</form>\n<!-- end choose uni -->\n						\n<!-- begin modal for new uni -->\n<div aria-hidden=\"true\" aria-labelledby=\"windowTitleLabel\" role=\"dialog\" tabindex=\"-1\" class=\"modal hide fade\" id=\"new-faculty\">\n	<form class=\"js-validation\">\n		<div class=\"modal-header\">\n			<a data-dismiss=\"modal\" class=\"close\" href=\"#\">×</a>\n			<h3>New Faculty</h3>\n			</div>\n		<div class=\"modal-body\">\n			<div class=\"field\">\n				<label>Faculty name (Required):</label>\n				");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("Faculty name"),
    'valueBinding': ("newFacultyTitle"),
    'class': ("nerdeez-inputs validate[required]")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n			<div class=\"field\">\n				<label>Description (Optional):</label>\n				");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'placeholder': ("Extra information about the Faculty"),
    'valueBinding': ("newFacultyDescription"),
    'class': ("nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"modal-footer\">\n	        <button data-dismiss=\"modal\" class=\"btn btn-default\" type=\"button\">Close</button>\n	        <button class=\"btn btn-primary\" type=\"button\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newFaculty", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save changes</button>\n	    </div>\n	</form>\n</div>\n<!-- end modal for new uni -->");
  return buffer;
  
});

Ember.TEMPLATES["add_school_group/faculty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n");
  
});

Ember.TEMPLATES["add_school_group/uni"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Uni</h1>");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("    \n\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n<div class=\"content\" id=\"content\">\n    <div class=\"container\">\n        <div class=\"row\">\n	    	<!--<div class=\"col-md-2\" id=\"left-sidebar-location\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "left-sidebar-application", options) : helperMissing.call(depth0, "partial", "left-sidebar-application", options))));
  data.buffer.push("\n			    \n			    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "history-bar", options) : helperMissing.call(depth0, "partial", "history-bar", options))));
  data.buffer.push("\n		    </div>-->\n		    <div class=\"col-md-12\" id=\"main-outlet\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n    </div>\n</div>\n<div class=\"push\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["change_password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-danger\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n	Handlebar for the change password window\n	\n	Created September 26th, 2013\n	@author: Yariv Katz\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"contact change_password\">\n    <div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Change Password</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Write your current password and the new password you want</p>\n    				\n    				<div class=\"field\">\n    					<label>Current password</label>\n						");
  hashContexts = {'valueBinding': depth0,'type': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'type': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("currentPassword"),
    'type': ("password"),
    'class': ("validate[required,minSize[5]] nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				<div class=\"field\">\n    					<label>New password</label>\n    					");
  hashContexts = {'valueBinding': depth0,'type': depth0,'class': depth0,'name': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'type': "STRING",'class': "STRING",'name': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("newPassword"),
    'type': ("password"),
    'class': ("validate[required,minSize[5]] nerdeez-inputs"),
    'name': ("password"),
    'id': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /password -->\n    				\n    				<div class=\"field\">\n    					<label>Confirm new password</label>\n    					");
  hashContexts = {'type': depth0,'class': depth0};
  hashTypes = {'type': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'type': ("password"),
    'class': ("validate[required,equals[password]] nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /password -->\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePassword", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Change</button>\n    				\n    			</div> <!-- .actions -->\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["choose_course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		<div class=\"row top-buffer search-result\">\n			<ol class=\"results\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "courses", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ol>\n		</div>\n	");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n					");
  hashContexts = {'schoolgroup': depth0};
  hashTypes = {'schoolgroup': "ID"};
  options = {hash:{
    'schoolgroup': ("")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['search-result'] || depth0['search-result']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "search-result", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "search-hover", options) : helperMissing.call(depth0, "partial", "search-hover", options))));
  data.buffer.push("\n					");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		<div class=\"row top-buffer no-results\">\n			<div class=\"span10\">\n				<div class=\"alert alert-info\">\n					<h3>\n						No courses found, Open your course by clicking the button bellow.\n					</h3>\n					");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.course", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.course", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n		");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("\n					Open new faculty\n					");
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n		<div class=\"row top-buffer\">\n			<div class=\"span10\">\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n	");
  return buffer;
  }

  data.buffer.push("<!--\n	the handle bars for the choose your course page\n	\n	Created October 25th, 2013\n	@author: Yariv Katz\n	@version: 1.02\n	@copyright: Nerdeez \n-->\n\n<div class=\"choose-course choose-faculty\">\n	\n	<!-- begin faculty explain -->\n	<div class=\"row top-buffer\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "controller", "as", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	<!-- end faculty explain -->\n	\n	<!-- begin explain -->\n	<div class=\"row explain\">\n		<div class=\"span10 account-container login stacked top-buffer\">\n			<h3>\n				Choose your Course\n			</h3>\n			<p>\n				Pick your course from the list below\n			</p>\n		</div>\n	</div>\n	<!-- end explain -->\n	\n	<!-- begin results -->\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "courses", {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<!-- end results -->\n	\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["choose_faculty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		<div class=\"row top-buffer search-result\">\n			<ol class=\"results\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "faculties", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ol>\n		</div>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n					");
  hashContexts = {'schoolgroup': depth0};
  hashTypes = {'schoolgroup': "ID"};
  options = {hash:{
    'schoolgroup': ("")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['search-result'] || depth0['search-result']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "search-result", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n						");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("linkto-choosecourse")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "chooseCourse", "", options) : helperMissing.call(depth0, "link-to", "chooseCourse", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n						");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		<div class=\"row top-buffer no-results\">\n			<div class=\"span10\">\n				<div class=\"alert alert-info\">\n					<h3>\n						No faculties found, Open your faculty by clicking the button bellow.\n					</h3>\n					");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.faculty", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.faculty", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n		");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n					Open new faculty\n					");
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n		<div class=\"row top-buffer\">\n			<div class=\"span10\">\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n	");
  return buffer;
  }

  data.buffer.push("<!--\n	The handlebars for the choosing faculty\n	\n	Created October 25th, 2013\n	@author: Yariv Katz\n	@version: 1.02\n	@copyright: Nerdeez \n-->\n\n\n<div class=\"choose-faculty\">\n	\n	<!-- begin uni explain -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<!-- end uni explain -->\n	\n	<!-- begin explain -->\n	<div class=\"row explain\">\n		<div class=\"span10 account-container login stacked top-buffer\">\n			<h3>\n				Choose your faculty\n			</h3>\n			<p>\n				Pick your faculty from the list below\n			</p>\n		</div>\n	</div>\n	<!-- end explain -->\n	\n	<!-- begin results -->\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "faculties", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	<!-- end results -->\n	\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/fb-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div class=\"fb-comments\" ");
  hashContexts = {'data-href': depth0};
  hashTypes = {'data-href': "STRING"};
  options = {hash:{
    'data-href': ("dataLink")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashContexts = {'data-colorscheme': depth0};
  hashTypes = {'data-colorscheme': "STRING"};
  options = {hash:{
    'data-colorscheme': ("dataColorScheme")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashContexts = {'data-numposts': depth0};
  hashTypes = {'data-numposts': "STRING"};
  options = {hash:{
    'data-numposts': ("dataNumPosts")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashContexts = {'data-width': depth0};
  hashTypes = {'data-width': "STRING"};
  options = {hash:{
    'data-width': ("dataWidth")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></div>");
  return buffer;
  
});

Ember.TEMPLATES["components/nerdeez-pagination"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	");
  return buffer;
  }

  data.buffer.push("<!--\n	handle bar for the pagination component\n	\n	```handlebars\n	```\n	\n	you need to bind the paginationController to the controller you are changing the content for\n	and also paginationExtraParams should be binded if you want to query on extra things\n	\n	Created October 22nd, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez\n-->\n\n<div class=\"pagination\">\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "paginationIsLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/search-result"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, functionType="function";

function program1(depth0,data) {
  
  
  data.buffer.push("\n							Course Name:\n						");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n							Faculty Name:\n						");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n							University Name:\n						");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n							Faculty:\n						");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n							University:\n						");
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n							");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "schoolgroup.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						<h5> University: </h5>\n						<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "schoolgroup.parent.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n					");
  return buffer;
  }

  data.buffer.push("<!--\n	component for the search page single result box\n	\n	Created October 25th, 2013\n	@author: Yariv Katz\n	@version: 1.02\n	@copyright: Nerdeez \n-->\n\n<li >\n	<div class=\"hoveron\" >\n		<div class=\"span5 resultbox\">\n			<div class=\"result-action\">\n				<div class=\"pic-container\">\n					<div class=\"desc-icon\">\n						<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("schoolgroup.getImageUrl")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" />\n					</div>\n				</div>\n				<div class=\"result-text\">\n					<h5>\n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "schoolgroup.isCourse", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "schoolgroup.isFaculty", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "schoolgroup.isUniversity", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					</h5>\n					<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "schoolgroup.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n				</div>\n				<div class=\"result-text\">\n						<h5> Description: </h5>\n						<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "schoolgroup.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n				</div>\n				<div class=\"result-text\">\n					<h5> \n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "schoolgroup.isCourse", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "schoolgroup.isFaculty", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					</h5>\n					<span>\n						");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "schoolgroup.isUniversity", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					</span>\n				</div>\n				<div class=\"result-text\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "schoolgroup.isCourse", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"result-footer\">\n				<ul class=\"entry-info\">\n					<li>\n						");
  data.buffer.push(escapeExpression(((stack1 = ((stack1 = depth0.schoolgroup),stack1 == null || stack1 === false ? stack1 : stack1.getRating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)));
  data.buffer.push("	\n					</li>\n					<li>\n						<i class=\"icon-user\"></i>\n						<h5>Users: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "schoolgroup.num_users", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n					</li>\n					<li>\n						<i class=\"icon-file-text\"></i>\n						<h5>Files: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "schoolgroup.num_files", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n					</li>\n				</ul>\n			</div>\n			");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		</div>\n	</div>\n</li>");
  return buffer;
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-danger\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the contact page\nauthor: Doron Nachshon\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"contact nerdeez-form\">\n    <div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Contact</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Let us know your opinion about the site</p>\n    				\n    				<div class=\"field\">\n    					<label>Email Address (not required)</label>\n						");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'type': depth0,'name': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'type': "STRING",'name': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("Email"),
    'valueBinding': ("mailAddress"),
    'type': ("email"),
    'name': ("emailinput"),
    'class': ("validate[custom[email]] nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				<div class=\"field\">\n    					<label>Message (required)</label>\n    					");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'name': depth0,'type': depth0,'required': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'name': "STRING",'type': "STRING",'required': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'placeholder': ("Enter your message here"),
    'valueBinding': ("mailContent"),
    'name': ("msginput"),
    'type': ("text"),
    'required': ("true"),
    'class': ("validate[required]")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /password -->\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitForm", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Send</button>\n    				\n    			</div> <!-- .actions -->\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    	\n    </div>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["flatpage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n				<div class=\"account-container login stacked\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "html", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n			");
  return buffer;
  }

  data.buffer.push(" <div class=\"flatpage\">\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["forget_password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-danger\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n	Handlebar for the forget password window\n	\n	Created September 26th, 2013\n	@author: Yariv Katz\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"contact forget_password\">\n    <div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Forgot your password?</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Write the email address of your nerdeez account. Mail will be sent with a link to set your password</p>\n    				\n    				<div class=\"field\">\n    					<label>Email</label>\n						");
  hashContexts = {'valueBinding': depth0,'class': depth0,'required': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'required': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] nerdeez-inputs"),
    'required': ("true"),
    'placeholder': ("Ex. johndue@gmail.com")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "forgotPassword", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Submit</button>\n    				\n    			</div> <!-- .actions -->\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["homepage-orig"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n					<div class=\"row\">\n						<div class=\"span10 padding-left\">\n							<h3>\n								OR \n							</h3>\n							<p>\n								Click on your university\n							</p>\n						</div>\n					</div>\n						\n					<div class=\"row uni-buttons\">\n						<div class=\"span10 padding-right\">\n							<ol>\n								");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</ol>\n						</div>\n					</div>\n				");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n								<li ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uniClicked", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n									<div class=\"uni-button\">\n										\n										<div class=\"pull-left\">\n											");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "image", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n										</div>\n										<div class=\"pull-left details\">\n											<p>\n												<strong>University name:</strong>\n												");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n												\n											</p>\n										</div>\n									</div>\n								</li>\n								");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n												<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n											");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n												<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/university-pic.png\" />\n											");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		<div id=\"carousel-data\" class=\"hidden\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		<div class=\"row\">\n			<div class=\"span10\">\n				<div class=\"uni-carousel account-container login stacked\">\n					<h3 style=\"\">People from these Universities already uploaded <span class=\"label label-success\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "numFiles", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span> files</h3>\n					<div class=\"\">\n						<div id=\"carousel-example-generic\" class=\"carousel slide\">\n						\n						  <!-- Wrapper for slides -->\n						  <div class=\"carousel-inner\">\n						  	\n						  </div>\n						\n						  <!-- Controls -->\n						  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n							    <i class=\"icon-chevron-left\">\n							    	\n							    </i>\n						  </a>\n						  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n							    <i class=\"icon-chevron-right\">\n							    	\n							    </i>\n						  </a>\n						</div>\n			\n					</div>\n				</div>\n			</div>\n		</div>\n	");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n				");
  hashContexts = {'mod': depth0,'html': depth0};
  hashTypes = {'mod': "STRING",'html': "STRING"};
  options = {hash:{
    'mod': ("4"),
    'html': ("</ul></div><div class=\"item\"><ul class=\"tumbnails clearfix\">")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modZeroExcludeFirst || depth0.modZeroExcludeFirst),stack1 ? stack1.call(depth0, "", "controller.content", options) : helperMissing.call(depth0, "modZeroExcludeFirst", "", "controller.content", options))));
  data.buffer.push("\n				  ");
  hashContexts = {'html': depth0};
  hashTypes = {'html': "STRING"};
  options = {hash:{
    'html': ("<div class=\"item active fix-height\"><ul class=\"tumbnails clearfix fix-height\">")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.isFirst || depth0.isFirst),stack1 ? stack1.call(depth0, "", "controller.content", options) : helperMissing.call(depth0, "isFirst", "", "controller.content", options))));
  data.buffer.push("\n					  <li class=\"\">\n						  	<div class=\"thumbnail\" align=\"center\">\n						  		<div class=\"image-wrapper fix-height\">\n						  			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "schoolgroup.about", "", options) : helperMissing.call(depth0, "link-to", "schoolgroup.about", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						        	</div>\n			                </div>\n					  </li>\n				  ");
  hashContexts = {'html': depth0};
  hashTypes = {'html': "STRING"};
  options = {hash:{
    'html': ("</ul></div>")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.isLast || depth0.isLast),stack1 ? stack1.call(depth0, "", "controller.content", options) : helperMissing.call(depth0, "isLast", "", "controller.content", options))));
  data.buffer.push("\n			");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						  			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "image", {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n									");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n										<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n									");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n										<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/university-pic.png\" />\n										<span class=\"uni-title label label-secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n									");
  return buffer;
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n				Donate\n				");
  }

  data.buffer.push("<!--\n	application homepage is defined here\n	\n	Created October 20th, 2013\n	@author: Yariv Katz\n	@version: 2.0\n	@copyright: Nerdeez \n-->\n\n<div class=\"homepage\">\n	\n	<div class=\"row\">\n		<div class=\"span10 search quickstart account-container login stacked\">\n			<form class=\"form-search nerdeez-inputs\">\n				<div class=\"row\">\n					<div class=\"span10 padding-left\">\n						<h3>\n							Quick Start \n						</h3>\n						<p>\n							Type your course number\n						</p>\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"span8 padding-left\">\n					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("quickStart"),
    'class': ("search-query"),
    'placeholder': ("Ex. 234122")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</div>\n					<div class=\"span2 padding-right\">\n						<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSearch", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n							<i class=\"icon-search\"></i>\n							Search\n						</button>\n					</div>\n				</div>\n					\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</form>\n		</div>\n	</div>\n	<!-- end quickstart -->\n	\n	\n	\n	<!-- begin carousel -->\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<!-- end carousel -->\n	\n	<!-- begin donation -->\n	<!--<div class=\"row donation \">\n		<div class=\"span10 account-container login stacked\">\n			<div class=\"explain\">\n				<h2>\n					Support development by  buying a nerdeez T-Shirt\n				</h2>\n			</div>\n			<div class=\"images\">\n				<div class=\"thumbnail\">\n					<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/t-shirt.jpeg\" />\n				</div>\n				<div class=\"thumbnail\">\n					<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/t-shirt.jpeg\" />\n				</div>\n				<div class=\"thumbnail\">\n					<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/t-shirt.jpeg\" />\n				</div>\n			</div>\n			<div class=\"actions\">\n				");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "donate", options) : helperMissing.call(depth0, "link-to", "donate", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>-->\n	<!-- end donation -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["homepage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!--\n	application homepage is defined here\n	\n	Created November 9th, 2013\n	@author: Doron Nachshon\n	@version: 2.0\n	@copyright: Nerdeez \n-->\n\n<div class=\"homepage\">\n	<div class=\"bor\"></div>\n\n    <div class=\"bor\"></div>\n\n    <div class=\"row\">\n		<div class=\"col-md-4\">\n			<div class=\"f-block b-orange\">\n				<a href=\"#\">\n				<i class=\"fa fa-music\"></i>\n				</a>\n				<a href=\"#\">\n				<h4>Morbi Acfelis Ecmauris</h4>\n				</a>\n				<p>Suspendisse potenti. Morbi ac felis nec mauris imperdiet fermentum. Vivamus vel ultricies elit.</p>\n			</div>\n		</div>\n	</div>\n\n	<div class=\"bor\"></div>\n\n	<hr />\n</div>");
  
});

Ember.TEMPLATES["hws/hw"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n					<div class=\"alert alert-danger pull-left top-buffer\">\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</div>\n					");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n					<div class=\"alert alert-success pull-left top-buffer\">\n						");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</div>\n					");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						<table class=\"table table-bordered table-striped table-highlight\">\n							<thead>\n								<tr>\n									<th>\n										File name\n									</th>\n									<th>\n										Size (MB)\n									</th>\n									<th>\n										Grade\n									</th>\n									<th>\n										Date\n									</th>\n									<th>\n										Actions\n									</th>\n								</tr>\n							</thead>\n							<tbody>\n								");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "files", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</tbody>\n						</table>\n					");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n									<tr>\n										<td>\n											<a class=\"nerdeez-tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Download file: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "downloadFile", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n												");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n											</a>\n										</td>\n										<td class=\"center\">\n											");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "getSize", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n										</td>\n										<td class=\"center\">\n											");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getRating || depth0.getRating),stack1 ? stack1.call(depth0, "grade", 5, options) : helperMissing.call(depth0, "getRating", "grade", 5, options))));
  data.buffer.push("\n										</td>\n										<td>\n											");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "getCreationDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n										</td>\n										<td class=\"center\">\n											<table class=\"actions-table\">\n												<tr>\n													<td>\n														<div class=\"single-action\">\n															<a data-container=\"body\" class=\"nerdeez-button nerdeez-tooltip\" data-placement=\"right\" data-toggle=\"tooltip\" title=\"Like\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incLike", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n																<i class=\"icon-thumbs-up-alt\">\n																</i>\n															</a>\n															<span class=\"badge\">\n															");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "like", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n															</span>\n														</div>\n													</td>\n													<td>\n														<div class=\"single-action\">\n															<a class=\"nerdeez-button nerdeez-tooltip\" data-container=\"body\" data-placement=\"right\" data-toggle=\"tooltip\" title=\"Dislike\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incDislike", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n															<i class=\"icon-thumbs-down-alt\">\n															</i>\n															</a>\n															<span class=\"badge\">\n															");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dislike", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n															</span>\n														</div>\n													</td>\n												</tr>\n												<tr>\n													<td>\n														<div class=\"single-action\">\n															<a class=\"nerdeez-button nerdeez-tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Share on facebook\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n																<i class=\"icon-facebook-sign\">\n																</i>\n															</a>\n														</div>\n													</td>\n													<td>\n														<div class=\"single-action\">\n															<a class=\"nerdeez-button nerdeez-tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Download\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "downloadFile", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n																<i class=\"icon-download\"></i>\n															</a>		\n														</div>\n													</td>\n												</tr>\n												<tr>\n													<td colspan=\"2\">\n														<div class=\"single-action\">\n															<a class=\"nerdeez-button nerdeez-tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Flag as violation\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flagFile", "", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n																<i class=\"icon-flag\"></i>\n															</a>	\n														</div>\n													</td>\n												</tr>\n											</table>\n											\n										</td>\n									</tr>\n								");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n						<div class=\"alert alert-info\">\n							<span>\n								No files uploaded. Be the first to post!\n							</span>\n						</div>\n					");
  }

function program12(depth0,data) {
  
  
  data.buffer.push(" Terms ");
  }

  data.buffer.push("<!--\n	handle bar file for a single h.w page\n	\n	Created October 14th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd. \n-->\n\n<div class=\"hw\">\n	\n	<!-- the upper part with the details -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n		</div>		\n	</div>\n	<!-- end upper part -->\n	\n	<!-- The part that contains the files/comments -->\n	<div class=\"row\">\n		\n		<!-- will hold the comments -->\n		<div class=\"span5 facebook-comments top-buffer\">\n			");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fb-comment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		</div>\n		<!-- end comments -->\n		\n		<!-- will hold the files table -->\n		<div class=\"span5\">\n			\n			<!-- will hold the controlls section -->\n			<div class=\"row\">\n				<div class=\"span5\">\n					<div class=\"single-button pull-left\">\n						<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadFiles", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n							Upload H.W\n						</button>\n					</div>\n				</div>\n				<div class=\"span5\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n			<!-- end controlls -->\n			\n			\n			<!-- begin the file table -->\n			<div class=\"row top-buffer\">\n				<div class=\"span5\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "files", {hash:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n			<!-- end the file table -->\n			\n		</div>\n		<!-- end files table -->\n		\n	</div>\n	<!-- end files/comments part -->\n	\n	<!-- begin modal for flag file -->\n	<div aria-hidden=\"true\" aria-labelledby=\"windowTitleLabel\" role=\"dialog\" tabindex=\"-1\" class=\"modal hide fade\" id=\"flag-file\">\n		<form class=\"js-validation\">\n			<div class=\"modal-header\">\n				<a data-dismiss=\"modal\" class=\"close\" href=\"#\">×</a>\n				<h3>Flag File</h3>\n				</div>\n			<div class=\"modal-body\">\n				<p>\n					Please specify why this file Violated your right, Your complaints will be checked, and the file will be removed if it causes a violation in accourdane with our ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "link-to", "terms", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</p>\n				<div class=\"field\">\n					<label>Flag Message</label>\n					");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'placeholder': ("Specify the reason why you flagged this file (Example: Copy right violation, Adult meterial etc.)"),
    'valueBinding': ("flagMessage")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"modal-footer\">\n		        <button data-dismiss=\"modal\" class=\"btn btn-default\" type=\"button\">Close</button>\n		        <button class=\"btn btn-primary\" type=\"button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flagFile", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save changes</button>\n		    </div>\n		</form>\n	</div>\n	<!-- end modal for flag file -->\n	\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["hws/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n	<div class=\"alert alert-success top-buffer pull-left\">\n	    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" \n	</div>\n	");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						<div class=\"single-file\">\n							<i class=\"icon-ok\"></i>\n							");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						</div>\n					");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n				<div class=\"alert alert-danger\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hwMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				</div>\n				");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n				<table class=\"table table-bordered table-striped table-highlight\">\n					<thead>\n						<tr>\n							<th>\n								Title\n							</th>\n							<th>\n								Description\n							</th>\n							<th>\n								Num Files\n							</th>\n							<th>\n								Grade\n							</th>\n							<th>\n								Share\n							</th>\n							<th>\n								Date\n							</th>\n							<!--<th>\n								Download\n							</th>-->\n						</tr>\n					</thead>\n					<tbody>\n						");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller.content", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</tbody>\n				</table>\n			");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n							<tr>\n								<td>\n									");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "hws.hw", "id", options) : helperMissing.call(depth0, "link-to", "hws.hw", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								</td>\n								<td>\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								</td>\n								<td class=\"center\">\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "files.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								</td>\n								<td class=\"center\">\n									");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getRating || depth0.getRating),stack1 ? stack1.call(depth0, "grade", 5, options) : helperMissing.call(depth0, "getRating", "grade", 5, options))));
  data.buffer.push("\n								</td>\n								<td class=\"center\">\n									<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbShare", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n										<i class=\"icon-facebook-sign\">\n										</i>\n									</a>\n								</td>\n								<td>\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "getCreationDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								</td>\n								<!--<td class=\"center\">\n									<a>\n										<i class=\"icon-download\"></i>\n									</a>								\n								</td>-->\n							</tr>\n						");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n				<div class=\"alert alert-info\">\n					<span>\n						No H.W opened here. Be the first to post!\n					</span>\n				</div>\n			");
  }

  data.buffer.push("<!--\n	this will be the files page for a school group\n	\n	Created October 6th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd.\n-->\n\n<div class=\"schoolgroup-files\">\n	\n	<!-- the upper part with the details -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "schoolGroup", "as", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	<!-- end of upper part -->\n	\n	<!-- the part for the table actions -->\n	<div class=\"row table-controllers\">\n		<div class=\"span2\">\n			<button class=\"button btn btn-primary btn-large\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAddHw", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n				<i class=\"icon-plus\"></i>\n				Add H.W\n			</button>\n		</div>\n	</div>\n	<!-- end table actions -->\n	\n	<!-- begin status -->\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<!-- end status -->\n	\n	<!-- begin modal for new hw -->\n	<div aria-hidden=\"true\" aria-labelledby=\"windowTitleLabel\" role=\"dialog\" tabindex=\"-1\" class=\"modal hide fade\" id=\"new-hw\">\n		<form class=\"js-validation\">\n			<div class=\"modal-header\">\n				<a data-dismiss=\"modal\" class=\"close\" href=\"#\">×</a>\n				<h3>New H.W</h3>\n				</div>\n			<div class=\"modal-body\">\n				<div class=\"field\">\n					<label>Title (Required):</label>\n					");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("Example: H.W1 - UML"),
    'valueBinding': ("newHwTitle"),
    'class': ("nerdeez-inputs validate[required]")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				</div>\n				<div class=\"field\">\n					<label>Description (Optional):</label>\n					");
  hashContexts = {'placeholder': depth0,'valueBinding': depth0,'class': depth0};
  hashTypes = {'placeholder': "STRING",'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'placeholder': ("Example: H.W1 for semester Spring 2013"),
    'valueBinding': ("newHwDescription"),
    'class': ("nerdeez-inputs")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				</div>\n				<div class=\"field center\">\n					<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadHW", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n						<i class=\"icon-upload\"></i>\n						Upload H.W files\n					</button>\n				</div>\n				<div class=\"uploaded-files\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "newHwFiles", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"modal-footer\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNewHwError", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isNewHwLoading", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		        <button data-dismiss=\"modal\" class=\"btn btn-default\" type=\"button\">Close</button>\n		        <button class=\"btn btn-primary\" type=\"button\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newHW", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save changes</button>\n		    </div>\n		</form>\n	</div>\n	<!-- end modal for new hw -->\n	\n	<!-- begin files table -->\n	<div class=\"row top-buffer hw-table\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller.content", {hash:{},inverse:self.program(15, program15, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n	<!-- end files table -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("\n<div class=\"landing-page\">\n	<header>\n		<div class=\"container top-buffer\">\n			<div class=\"row center\">\n				<div class=\"col-md-12\">\n					<h2> Homework Made Easy </h2>\n					<h3> Find and share homework, all in one place </h3>\n					<div class=\"bor\"></div>\n					<p>\n					<button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#sign-up-modal\">\n						Sign up\n					</button>\n					</p>\n					<p>\n						or\n						<a href=\"#\" data-toggle=\"modal\" data-target=\"#log-in-modal\">\n							Log in\n						</a>\n					</p>\n					<div class=\"bor\"></div>\n					<hr>\n					<h5>Sign in using</h5>\n					<div class=\"bor\"></div>\n					<ul class=\"nav nav-pills\">\n						<li>\n							<i class=\"fa fa-twitter\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "twitterLogin", {hash:{
    'target': ("controllers.login")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n						</li>\n						<li>\n							<i class=\"fa fa-facebook\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbLogin", {hash:{
    'target': ("controllers.login")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n						</li>\n					</ul>\n					<hr>\n				</div>\n			</div>\n		</div>\n	</header>\n	<div class=\"container\">\n		<div class=\"bor\"></div>\n		<div class=\"row\">\n			<div class=\"col-md-7 col-md-offset-3\">\n				<div class=\"service-icon red\">\n					<i class=\"fa fa-camera\"></i>\n				</div>\n				<div class=\"service-content\">\n					<h5>We Design Websites</h5>\n					<p>Aenean sodales augue ac lacus hendrerit sed rhoncus erat hendrerit. Vivamus vel ultricies elit.</p>\n				</div>\n				<hr>\n				<div class=\"service-icon orange\">\n					<i class=\"fa fa-desktop\"></i>\n				</div>\n				<div class=\"service-content\">\n					<h5>Our Designs are Responsive</h5>\n					<p>Aenean sodales augue ac lacus hendrerit sed rhoncus erat hendrerit. Vivamus vel ultricies elit.</p>\n				</div>\n				<hr>\n				<div class=\"service-icon lblue\">\n					<i class=\"fa fa-cloud\"></i>\n				</div>\n				<div class=\"service-content\">\n					<h5>Everything in Cloud</h5>\n					<p>Aenean sodales augue ac lacus hendrerit sed rhoncus erat hendrerit. Vivamus vel ultricies elit.</p>\n					<hr>\n				</div>\n				<div class=\"service-icon purple\">\n					<i class=\"fa fa-user\"></i>\n				</div>\n				<div class=\"service-content\">\n					<h5>Top Notch Support</h5>\n					<p>Aenean sodales augue ac lacus hendrerit sed rhoncus erat hendrerit. Vivamus vel ultricies elit.</p>\n				</div>\n				<br>\n				<div class=\"clearfix\"></div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<!-- Sign up Modal -->\n<div class=\"modal fade\" id=\"sign-up-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n		    <div class=\"modal-header\">\n		        <button class=\"close\" aria-hidden=\"true\" data-dismiss=\"modal\" type=\"button\">×</button>\n		        <h4 class=\"modal-title\" id=\"myModalLabel\" tabindex=\"1\">Sign up</h4>\n		    </div>\n			<div class=\"modal-body\">\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "register", "register", options) : helperMissing.call(depth0, "render", "register", "register", options))));
  data.buffer.push("\n			</div>\n		</div><!-- /.modal-content -->\n	</div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<!-- Sign in Modal -->\n<div class=\"row\">\n	<div class=\"col-md-8\">\n		<div class=\"modal fade\" id=\"log-in-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n			<div class=\"modal-dialog\">\n				<div class=\"modal-content\">\n				    <div class=\"modal-header\">\n				    	<button class=\"close\" aria-hidden=\"true\" data-dismiss=\"modal\" type=\"button\">×</button>\n				        <h4 class=\"modal-title\" id=\"myModalLabel\" tabindex=\"2\">Log in</h4>\n				    </div>\n					<div class=\"modal-body\">\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "login", "login", options) : helperMissing.call(depth0, "render", "login", "login", options))));
  data.buffer.push("\n					</div>\n				</div><!-- /.modal-content -->\n			</div><!-- /.modal-dialog -->\n		</div><!-- /.modal -->\n	</div>\n</div>\n\n<!-- Activation Modal -->\n<div class=\"modal fade\" id=\"activation-modal\" tabindex=\"-1\" rolde=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<h3 class=\"modal-title\" id=\"myModalLabel\">Success!</h3>\n				<h4>  Now Activate Your Account </h4>\n			</div>\n			<div class=\"modal-body\">\n				<h5> A verification mail was sent to your email address </h5>\n			</div>\n			<div class=\"modal-footer\">\n        		<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Got it</button>\n      		</div>\n		</div> \n	</div> \n</div> \n\n<!-- Twitter Activation Modal -->\n<div class=\"modal fade\" id=\"twitter-activation-modal\" tabindex=\"-1\" rolde=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<h3 class=\"modal-title\" id=\"myModalLabel\">Success!</h3>\n				<h4>  Please authorize the app with your twitter account, and then log in using your Twitter account </h4>\n			</div>\n			<div class=\"modal-footer\">\n        		<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Got it</button>\n      		</div>\n		</div> \n	</div> \n</div> ");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!--\n	global state for the application loading state\n	\n	Created October 14th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd.\n-->\n\n<div class=\"loading-hbs\">\n	<i class=\"icon-refresh icon-spin\"></i>\n</div>");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-danger\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "statusMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the login page\n\nauthor: Doron Nachshon\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"lrform\">\n    <div class=\"form\">\n        <form class=\"form-horizontal js-validation\">\n            <div class=\"form-group\">\n                <label class=\"control-label col-md-3\" for=\"email\">Email</label>\n                <div class=\"col-md-5\">\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] form-control"),
    'placeholder': ("Email"),
    'required': ("true"),
    'tabindex': ("7")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label col-md-3\" for=\"password\">Password</label>\n                <div class=\"col-md-5\">\n                    ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("password"),
    'class': ("validate[required,minSize[5]] form-control"),
    'placeholder': ("Password"),
    'required': ("true"),
    'type': ("password"),
    'tabindex': ("8")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-5 col-md-offset-3\">\n                    <label class=\"checkbox-inline\">\n                        ");
  hashContexts = {'checkedBinding': depth0,'tabindex': depth0};
  hashTypes = {'checkedBinding': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("isRememberMe"),
    'tabindex': ("9")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        Remember me\n                    </label>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-5 col-md-offset-3\">\n                    <button type=\"submit\" class=\"btn btn-default\" tabindex=\"10\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Login</button>\n                </div>\n            </div>\n        </form>\n    </div>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["privacy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n					Nerdeez - contact page\n					");
  }

  data.buffer.push(" <div class=\"flatpage\">\n	<div class=\"row\">\n		<div class=\"span10\">\n			<div class=\"account-container login stacked\">\n				<h1>\n					Privacy Policy\n				</h1>\n				<p>\n					  This Privacy Policy governs the manner in which Nerdeez collects, uses, maintains and discloses information collected from users (each, a \"User\") of the\n					  <a href=\"http://Nerdeez.com\">http://Nerdeez.com</a>\n					   website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Nerdeez. \n				</p>\n				<h3>\n					Personal identification information\n				</h3>\n				<p>\n					We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.\n				</p>\n				<h3>\n					Non-personal identification information\n				</h3>\n				<p>\n					We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.\n				</p>\n				<h3>\n					Web browser cookies\n				</h3>\n				<p>\n					Our Site may use \"cookies\" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.\n				</p>\n				<h3>\n					How we use collected information\n				</h3>\n				<p>\n					Nerdeez may collect and use Users personal information for the following purposes:\n					<ul>\n						<li>\n							To improve customer service\nInformation you provide helps us respond to your customer service requests and support needs more efficiently.\n						</li>\n						<li>\n							To personalize user experience\nWe may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.\n						</li>\n						<li>\n							To improve our Site\nWe may use feedback you provide to improve our products and services.\n						</li>\n						<li>\n							To process payments\nWe may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.\n						</li>\n						<li>\n							To run a promotion, contest, survey or other Site feature\nTo send Users information they agreed to receive about topics we think will be of interest to them.\n						</li>\n						<li>\n							To send periodic emails\n							We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.\n						</li>\n					</ul>\n				</p>\n				<h3>\n					How we protect your information\n				</h3>\n				<p>\n					We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.\n\nSensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.\n\n				</p>\n				<h3>\n					Sharing your personal information\n				</h3>\n				<p>\n					We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.\n				</p>\n				<h3>\n					Third party websites\n				</h3>\n				<p>\n					Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.\n				</p>\n				<h3>\n					Advertising\n				</h3>\n				<p>\n					Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.\n				</p>\n				<h3>\n					Google Adsense\n				</h3>\n				<p>\n					Some of the ads may be served by Google. Google's use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses \"non personally identifiable information\" and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at\n					 \n					<a href=\"http://www.google.com/privacy_ads.html\">http://www.google.com/privacy_ads.html</a>\n				</p>\n				<h3>\n					Changes to this privacy policy\n				</h3>\n				<p>\n					Nerdeez has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.\n				</p>\n				<h3>\n					Your acceptance of these terms\n				</h3>\n				<p>\n					By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.\n				</p>\n				<h3>\n					Contacting us\n\n				</h3>\n				<p>\n					If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:\n					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</p>\n				<p>\n					This document was last updated on October 22nd, 2012\n				</p>\n				\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["quickstart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!--\n	The handlebars for the choosing faculty\n	\n	Created October 25th, 2013\n	@author: Yariv Katz\n	@version: 1.02\n	@copyright: Nerdeez \n-->\n\n\n<div class=\"choose-faculty\">\n	\n	<!-- begin uni explain -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<!-- end uni explain -->\n	\n	\n	<!-- begin explain -->\n	<div class=\"row explain\">\n		<div class=\"span10 account-container login stacked top-buffer\">\n			<h3>\n				Choose your ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "chooseTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</h3>\n			<p>\n				Pick your ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "chooseTitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" from the list below\n			</p>\n		</div>\n	</div>\n	<!-- end explain -->\n	\n	<!-- begin results -->\n	");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	<!-- end results -->\n	\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["quickstart/course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		<div class=\"row top-buffer search-result\">\n			<ol class=\"results\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ol>\n		</div>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n					");
  hashContexts = {'schoolgroup': depth0};
  hashTypes = {'schoolgroup': "ID"};
  options = {hash:{
    'schoolgroup': ("")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['search-result'] || depth0['search-result']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "search-result", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "search-hover", options) : helperMissing.call(depth0, "partial", "search-hover", options))));
  data.buffer.push("\n					");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		<div class=\"row top-buffer no-results\">\n			<div class=\"span10\">\n				<div class=\"alert alert-info\">\n					<h3>\n						No courses found, Open your course by clicking the button bellow.\n					</h3>\n					");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.course", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.course", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n	");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n					Open new faculty\n					");
  }

  data.buffer.push("<!-- begin results -->\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller", {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<!-- end results -->");
  return buffer;
  
});

Ember.TEMPLATES["quickstart/faculty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		<div class=\"row top-buffer search-result\">\n			<ol class=\"results\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ol>\n		</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n					");
  hashContexts = {'schoolgroup': depth0};
  hashTypes = {'schoolgroup': "ID"};
  options = {hash:{
    'schoolgroup': ("")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['search-result'] || depth0['search-result']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "search-result", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n						");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("linkto-choosecourse")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "quickstart.course", "", options) : helperMissing.call(depth0, "link-to", "quickstart.course", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push(" \n						");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n	<div class=\"row top-buffer no-results\">\n		<div class=\"span10\">\n			<div class=\"alert alert-info\">\n				<h3>\n					No faculties found, Open your faculty by clicking the button bellow.\n				</h3>\n				");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("button btn btn-primary btn-large")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "addSchoolGroup.faculty", options) : helperMissing.call(depth0, "link-to", "addSchoolGroup.faculty", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n				Open new faculty\n				");
  }

  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Terms of Use.");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-danger\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the registration page\n\nauthor: Doron Nachshon\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"register\">\n    <div class=\"lrform\">\n        <div class=\"form\">\n            <!-- Register form (not working)-->\n            <form class=\"form-horizontal js-validation\">\n            <!-- Name -->\n                <div class=\"form-group\">\n                    <label for=\"name\" class=\"control-label col-md-3\">Full Name</label>\n                    <div class=\"col-md-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("name"),
    'class': ("validate[required, custom[onlyLetterSp, minSize[2], maxSize[50]]] form-control"),
    'placeholder': ("Full Name"),
    'required': ("true"),
    'tabindex': ("3")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>   \n                <!-- Email -->\n                <div class=\"form-group\">\n                    <label for=\"email\" class=\"control-label col-md-3\">Email</label>\n                    <div class=\"col-md-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] form-control"),
    'placeholder': ("Email"),
    'required': ("true"),
    'tabindex': ("4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>                                       \n                <!-- Password -->\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"control-label col-md-3\">Password</label>\n                    <div class=\"col-md-6\">\n                        ");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0,'name': depth0,'id': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING",'name': "STRING",'id': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("password"),
    'class': ("validate[required,minSize[5]] form-control"),
    'placeholder': ("Password"),
    'required': ("true"),
    'type': ("password"),
    'name': ("password"),
    'id': ("password"),
    'tabindex': ("5")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    </div>\n                </div>\n                <!-- Checkbox -->\n                <div class=\"form-group\">\n                    <div class=\"col-md-6 col-md-offset-3\">\n                        <label class=\"checkbox-inline\">\n                            ");
  hashContexts = {'class': depth0,'tabindex': depth0,'name': depth0,'id': depth0};
  hashTypes = {'class': "STRING",'tabindex': "STRING",'name': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'class': ("field login-checkbox validate[required]"),
    'tabindex': ("6"),
    'name': ("Field"),
    'id': ("inlineCheckbox1")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            I agree with the ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "linkTo", "terms", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        </label>\n                    </div>\n                </div> \n\n                <!-- Buttons -->\n                <div class=\"form-group\">\n                <!-- Buttons -->\n                    <div class=\"col-md-6 col-md-offset-3\"> \n                        <button class=\"btn btn-default\" tabindex=\"5\" type=\"submit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "register", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Sign up</button>\n                    </div>\n                </div>\n            </form>\n        </div> \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["reset_password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-danger\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n	Handlebar for the forget password window\n	\n	Created September 26th, 2013\n	@author: Yariv Katz\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"contact forget_password\">\n    <div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Reset your password</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Write your new password for your nerdeez account</p>\n    				\n    				<div class=\"field\">\n    					<label for=\"password\">Password:</label>\n    					<!--<input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"login\">-->\n    					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0,'name': depth0,'id': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING",'name': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("password"),
    'class': ("validate[required,minSize[5]] login nerdeez-inputs"),
    'placeholder': ("Password"),
    'required': ("true"),
    'type': ("password"),
    'name': ("password"),
    'id': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				<div class=\"field\">\n    					<label for=\"confirm_password\">Confirm Password:</label>\n    					\n    					<!--<input type=\"password\" id=\"confirm_password\" name=\"confirm_password\" value=\"\" placeholder=\"Confirm Password\" class=\"login\">-->\n    					");
  hashContexts = {'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("validate[required,equals[password]] login nerdeez-inputs"),
    'placeholder': ("Confirm password"),
    'required': ("true"),
    'type': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePassword", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Submit</button>\n    				\n    			</div> <!-- .actions -->\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["schoolgroup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});

Ember.TEMPLATES["schoolgroup/about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n								<span> Course </span>\n								");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n								<span> Faculty </span>\n								");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n								<span> University </span>\n								");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n								<p> \n									<span> Faculty: </span> \n									<span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n								</p>\n								<p> \n									<span> University: </span>\n									<span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.parent.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n								</p>\n							");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n								<p> <span> University: </span>\n									<span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n								</p>\n							");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n								<i class=\"icon-comments\"></i>\n								");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("'s wall\n							");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n								<i class=\"icon-file\"></i>\n								");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("'s h.w page\n							");
  return buffer;
  }

  data.buffer.push("<!--\n	this will hold the about page of a school group\n	this handlebar already gets a school group\n	\n	Created October 3rd, 2013\n	@author: Doron Nachshon\n	@copyright: Nerdeez Ltd.\n	@version: 1.0\n-->\n\n\n<div class=\"schoolgroup schoolgroup-about\">\n	<div class=\"row\">\n		<div class=\"span10\">\n			<div class=\"nerdeez-box wallabout schoolgroup-about\">\n				<div class=\"nerdeez-box-action wallabout-action schoolgroup-action\">\n					<div class=\"span2\">\n						<div class=\"avatar-box\">\n							<div class=\"avatar-action\">\n								<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("model.getImageURL")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></img>\n							</div>\n							<div class=\"avatar-footer\">\n								<h4> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </h4>\n							</div>\n						</div>\n					</div>\n					<div class=\"span7\">\n						<h5>\n							<p> \n								<span> Description: </span>\n								<span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span> \n							</p>\n							<p>\n								<span> Type: </span>\n								");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFaculty", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isUniversity", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n							</p>\n							");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.isCourse", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n							");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.isFaculty", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n							<div class=\"about-grade\">\n								<table>\n									<tr>\n										<td> <h5> Grade: </h5> </td>\n										<td> ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getRating || depth0.getRating),stack1 ? stack1.call(depth0, "model.grade", 5, options) : helperMissing.call(depth0, "getRating", "model.grade", 5, options))));
  data.buffer.push(" </td>\n									</tr>\n								</table>\n							</div>\n							<p> \n								<span> No. of Users: </span>\n								<span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.num_users", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n							</p>\n							<p>\n								<span> No. of Files: </span>\n								<span> ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.num_files", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span>\n							</p>\n						</h5>\n					</div>\n				</div>\n				<div class=\"nerdeez-box-footer wallabout-footer schoolgroup-footer\">\n					<div class=\"span5 pull-right\">\n						<div class=\"footer-social\">\n							<ul class=\"like-status\">\n								<li>\n									<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incDislike", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n										<i class=\"icon-thumbs-down\"></i>\n									</a>\n									<span class=\"badge badge-tertiary\">\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.dislike", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									</span>\n								</li>\n								<li><i class=\"vertical-line\"></i></li>\n								<li>\n									<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incLike", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n										<i class=\"icon-thumbs-up\"></i>\n									</a>\n									<span class=\"badge badge-primary\">\n									");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.like", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									</span>\n								</li>\n								<li><i class=\"vertical-line\"></i></li>\n								<li>\n									<div class=\"fb\">\n										<a class=\"btn_2\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "share", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Share on Facebook</a>\n									</div>\n								</li>\n							</ul>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"span3\">\n			<table class=\"table table-bordered table-striped\">\n				<thead>\n					<tr>								\n						<th>Related Pages</th>								\n					</tr>\n				</thead>\n				<tbody>\n					<tr>\n						<td class=\"description\">\n							");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "schoolgroup.wall", "", options) : helperMissing.call(depth0, "link-to", "schoolgroup.wall", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						</td>\n					</tr>\n					<tr>\n						<td class=\"description\">\n							");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "hws.index", "", options) : helperMissing.call(depth0, "link-to", "hws.index", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						</td>\n					</tr>		\n				</tbody>\n			</table>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["schoolgroup/wall"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!--\n	the school group main is located here\n	The top section of this page is shared in the course files page as well\n	so it's a partial\n	\n	Created October 3rd, 2013\n	@author: Doron Nachshon\n	@copyright: Nerdeez Ltd.\n	@version: 1.0\n-->\n\n<div class=\"schoolgroup\">\n	<div class=\"schoolgroup-wall\">\n		<div class=\"row\">\n			<div class=\"span10\">\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"row top-buffer\">\n			<div class=\"span10\">\n				<div class=\"wall-comments nerdeez-box\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fb-comment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n							");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n							<i class=\"icon-search\"></i>\n						");
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n									<li><a href=\"#\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSort", "", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n								");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n						");
  hashContexts = {'schoolgroup': depth0};
  hashTypes = {'schoolgroup': "ID"};
  options = {hash:{
    'schoolgroup': ("")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['search-result'] || depth0['search-result']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "search-result", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n							");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "search-hover", options) : helperMissing.call(depth0, "partial", "search-hover", options))));
  data.buffer.push("\n						");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the search page\nmake sure to keep bootstrap grid system\n\nauthor: Doron Nechshon\ncopyright: Nerdeez Ltd.\nversion: 1.0\n\n-->\n\n<div class=\"search\">\n	<!-- begin upper controllers -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			<div class=\"row\">\n				<div class=\"span10\">\n					<div class=\"filter-zone pull-left\">\n						<label>Filter</label>\n						<div class=\"styled-select\">\n							");
  hashContexts = {'prompt': depth0,'contentBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'valueBinding': depth0};
  hashTypes = {'prompt': "STRING",'contentBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'prompt': ("All"),
    'contentBinding': ("Nerdeez.SCHOOLGROUP_TYPE"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.title"),
    'valueBinding': ("filterBy")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n							<div class=\"select-icon\">\n								<i class=\"icon-sort\"></i>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			\n			<div class=\"row\">\n				<div class=\"span7\">\n					<div class=\"nerdeez-inputs\">\n						");
  hashContexts = {'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("search-query"),
    'valueBinding': ("searchQuery"),
    'placeholder': ("Search")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</div>\n				</div>\n				<div class=\"span3\">\n					<div class=\"sortby pull-right\">\n						<h5>Sort By</h5>\n						<div class=\"dropdown\">\n							<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"> \n								");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.sortName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								<b class=\"caret\"></b>\n							</a>\n							<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n								");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "Nerdeez.SORTBY_TYPE", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</ul>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<!-- end upper controllers-->\n	\n	<hr />\n	\n	<!-- begin results -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			<div class=\"row\">\n				<div class=\"span10\">\n					<div class=\"result-num\">\n						<i class=\"icon-book\"></i>\n						<p><b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.resultNum", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b> Results Found</p>\n					</div>\n				</div>\n			</div>\n			\n			<div class=\"row search-result\">\n				<ol class=\"results\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</ol>\n				");
  hashContexts = {'paginationController': depth0,'paginationExtraParams': depth0,'paginationPage': depth0,'paginationTotalResult': depth0};
  hashTypes = {'paginationController': "ID",'paginationExtraParams': "ID",'paginationPage': "ID",'paginationTotalResult': "ID"};
  options = {hash:{
    'paginationController': (""),
    'paginationExtraParams': ("extraParams"),
    'paginationPage': ("page"),
    'paginationTotalResult': ("resultNum")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['nerdeez-pagination'] || depth0['nerdeez-pagination']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "nerdeez-pagination", options))));
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n	<!-- end results-->\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["terms"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"flatpage\">\n	<div class=\"row\">\n		<div class=\"span10\">\n			<div class=\"account-container login stacked\">\n				<h1>\n					Nerdeez Terms of Service \n				</h1>\n				<p>\n					Last Modified: October 22nd, 2013\n				</p>\n				<p>\n					Thank you for using Nerdeez! These terms of service (the \"Terms\") govern your access to and use of Nerdeez (\"we\" or \"our\") websites and services (the \"Services\"), so please carefully read them before using the Services. By using the Services you agree to be bound by these Terms. If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these terms. In that case, \"you\" and \"your\" will refer to that organization. You may use the Services only in compliance with these Terms. You may use the Services only if you have the power to form a contract with Nerdeez and are not barred under any applicable laws from doing so. The Services may continue to change over time as we refine and add more features. We may stop, suspend, or modify the Services at any time without prior notice to you. We may also remove any content from our Services at our discretion. \n				</p>\n				<h3>\n					Your Stuff & Your Privacy\n				</h3>\n				<p>\n					By using our Services you provide us with information, files,pictures,grade sheet, and resum'e that you submit to Nerdeez (together, \"your stuff\"). We may dispense your resume and grade sheet to third parties according to the option that is set in the setting section of the site. Other files you publish will be publically excessible to all system users. You are solely responsible for your conduct, the content of your files and folders, and your communications with others while using the Services. For example, it's your responsibility to ensure that you have the rights or permission needed to comply with these Terms. We may choose to review public content for compliance with our community guidelines, but you acknowledge that Nerdeez has no obligation to monitor any information on the Services. We are not responsible for the accuracy, completeness, appropriateness, or legality of files, user posts, or any other information you may be able to access using the Services. \n				</p>\n				<h3>\n					Sharing Your Stuff\n				</h3>\n				<p>\n					The Services provide features that allow you to share your stuff with others or to make it public. There are many things that users may do with that stuff (for example, copy it, modify it, re-share it). Please consider carefully what you choose to share or make public. Nerdeez has no responsibility for that activity. \n				</p>\n				<h3>\n					Your Responsibilities\n				</h3>\n				<p>\n					Files and other content in the Services may be protected by intellectual property rights of others. Please do not copy, upload, download, or share files unless you have the right to do so. You, not Nerdeez, will be fully responsible and liable for what you copy, share, upload, download or otherwise use while using the Services. You must not upload spyware or any other malicious software to the Service. You, and not Nerdeez, are responsible for maintaining and protecting all of your stuff. Nerdeez will not be liable for any loss or corruption of your stuff, or for any costs or expenses associated with backing up or restoring any of your stuff. If your contact information, or other information related to your account, changes, you must notify us promptly and keep your information current. The Services are not intended for use by you if you are under 13 years of age. By agreeing to these Terms, you are representing to us that you are over 13. \n				</p>\n				<h3>\n					Account Security\n				</h3>\n				<p>\n					You are responsible for safeguarding the password that you use to access the Services and you agree not to disclose your password to any third party. You are responsible for any activity using your account, whether or not you authorized that activity. You should immediately notify Nerdeez of any unauthorized use of your account. You acknowledge that if you wish to protect your transmission of data or files to Nerdeez, it is your responsibility to use a secure encrypted connection to communicate with the Services. \n				</p>\n				<h3>\n					Nerdeez Property and Feedback\n				</h3>\n				<p>\n					These terms do not grant you any right, title, or interest in the Services, Software, or the content in the Services. While we appreciate it when users send us feedback, please be aware that we may use any feedback, comments, or suggestions you send us or post in our forums without any obligation to you. The Software and other technology we use to provide the Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. These Terms do not grant you any rights to use the Nerdeez trademarks, logos, domain names, or other brand features. \n				</p>\n				<h3>\n					Acceptable Use Policy\n				</h3>\n				<p>\n					You will not, and will not attempt to, misuse the Services, and will use the Services only in a manner consistent with the Nerdeez Acceptable Use Policy. \n				</p>\n				<h3>\n					Copyright\n				</h3>\n				<p>\n					Nerdeez respects others' intellectual property and asks that you do too. We will respond to notices of alleged copyright infringement if they comply with the law and are properly provided to us. Such notices should be reported using our DMCA Process. We reserve the right to delete or disable content alleged to be infringing and to terminate repeat infringers. The Services may contain links to third-party websites or resources. Nerdeez does not endorse and is not responsible or liable for their availability, accuracy, the related content, products, or services. You are solely responsible for your use of any such websites or resources. Also, if we provide you with any software under an open source license, there may be provisions in those licenses that expressly conflict with these Terms, in which case the open source provisions will apply. \n				</p>\n				<h3>\n					Termination\n				</h3>\n				<p>\n					Though we'd much rather you stay, you can stop using our Services any time. We reserve the right to suspend or end the Services at any time, with or without cause, and with or without notice. For example, we may suspend or terminate your use if you are not complying with these Terms, or use the Services in any way that would cause us legal liability or disrupt others' use of the Services. If we suspend or terminate your use, we will try to let you know in advance and help you retrieve data, though there may be some cases (for example, repeatedly or flagrantly violating these Terms, a court order, or danger to other users) where we may suspend immediately. \n				</p>\n				<h3>\n					Nerdeez is Available \"AS-IS\"\n				</h3>\n				<p>\n					Though we want to provide a great service, there are certain things about the service we can't promise. For example, THE SERVICES AND SOFTWARE ARE PROVIDED \"AS IS\", AT YOUR OWN RISK, WITHOUT EXPRESS OR IMPLIED WARRANTY OR CONDITION OF ANY KIND. WE ALSO DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. (We are not shouting- it's just that these disclaimers are really important, so we want to highlight them). Nerdeez will have no responsibility for any harm to your computer system, loss or corruption of data, or other harm that results from your access to or use of the Services or Software. Some states do not allow the types of disclaimers in this paragraph, so they may not apply to you. \n				</p>\n				<h3>\n					Limitation of Liability\n				</h3>\n				<p>\n					TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL Nerdeez, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS OR LICENSORS BE LIABLE FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL (INCLUDING LOSS OF USE, DATA, BUSINESS, OR PROFITS) DAMAGES, REGARDLESS OF LEGAL THEORY, WHETHER OR NOT Nerdeez HAS BEEN WARNED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE; (B) AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES MORE THAN THE GREATER OF $20 OR THE AMOUNTS PAID BY YOU TO Nerdeez FOR THE PAST THREE MONTHS OF THE SERVICES IN QUESTION. Some states do not allow the types of limitations in this paragraph, so they may not apply to you. \n				</p>\n				<h3>\n					Modifications\n				</h3>\n				<p>\n					We may revise these Terms from time to time and the most current version will always be posted on our website. If a revision, in our sole discretion, is material we will notify you (for example via email to the email address associated with your account). Other changes may be posted to our blog or terms page, so please check those pages regularly. By continuing to access or use the Services after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new terms, please stop using the Services. \n				</p>\n				<h3>\n					Miscellaneous Legal Terms\n				</h3>\n				<p>\n					THESE TERMS AND THE USE OF THE SERVICES AND SOFTWARE WILL BE GOVERNED BY CALIFORNIA LAW EXCEPT FOR ITS CONFLICTS OF LAWS PRINCIPLES. ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES OR SOFTWARE MUST BE LITIGATED EXCLUSIVELY IN THE FEDERAL OR STATE COURTS OF SAN FRANCISCO COUNTY, CALIFORNIA, AND BOTH PARTIES CONSENT TO VENUE AND PERSONAL JURISDICTION THERE. These Terms constitute the entire and exclusive agreement between you and Nerdeez with respect to the Services, and supersede and replace any other agreements, terms and conditions applicable to the Services. These Terms create no third party beneficiary rights. Nerdeez's failure to enforce a provision is not a waiver of its right to do so later. If a provision is found unenforceable the remaining provisions of the Agreement will remain in full effect and an enforceable term will be substituted reflecting our intent as closely as possible. You may not assign any of your rights in these Terms, and any such attempt is void, but Nerdeez may assign its rights to any of its affiliates or subsidiaries, or to any successor in interest of any business associated with the Services. Nerdeez and you are not legal partners or agents; instead, our relationship is that of independent contractors. \n				</p>\n			</div>\n		</div>\n	</div>\n</div>");
  
});

Ember.TEMPLATES["under_construction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!--\n	handlebar for the under construction page\n	\n	Created October 20th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd\n-->\n\n<div class=\"under-construction account-container login stacked\">\n	<i class=\"icon-wrench\">\n	</i>\n	<br/>\n	<div class=\"explain\">\n		<span>\n			We are sorry but this page is under construction\n		</span>\n	</div>\n</div>");
  
});

Ember.TEMPLATES["welcome"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n				<div class=\"col-md-3\">\n					<div class=\"f-block b-orange\">\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "schoolgroup.about", "", options) : helperMissing.call(depth0, "link-to", "schoolgroup.about", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					</div>\n				</div>\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n							<h4>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h4>\n						");
  return buffer;
  }

  data.buffer.push("<div class=\"welcome\">\n	<header>\n		<div class=\"container top-buffer\">\n			<div class=\"row center\">\n				<div class=\"col-md-12\">\n					<h2> Welcome to Nerdeez </h2>\n					<h3> Let's get you to your classroom </h3>\n					<div class=\"bor\"></div>\n					<hr>\n				</div>\n			</div>\n		</div>\n	</header>\n	<div class=\"container\">\n		<div class=\"bor\"></div>\n		<div class=\"row center\">\n			<h4>Select your University</h4>\n			<div class=\"bor\"></div>\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n</div>");
  return buffer;
  
});