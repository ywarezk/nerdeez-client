Ember.TEMPLATES["_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                <img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/logo.png\" />\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n    						<i class=\"icon-home\"></i>\n    						<span>Home</span>        					\n    					    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                            <i class=\"icon-info\"></i>\n                            About\n                         ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n							<i class=\"icon-envelope\"></i>\n							Contact Us\n						");
  }

  data.buffer.push("<!--\n\nHolds the html of the application header\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div id=\"header\" class=\"_header\">\n	<div class=\"container\">\n		<div class=\"row\">\n            <div class=\"logo span2\">\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n		\n	        <div class=\"span10 menu\">\n    		    <div class=\"nav-collapse\">\n    			    <ul class=\"nav pull-right\" id=\"main-nav\">\n    				    <li class=\"nav-icon home\">\n    					    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    			    	</li>\n    				\n    				    <li>\n        					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "linkTo", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    				    </li>\n    				    \n    				    	<li>\n						");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "linkTo", "contact", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					</li>\n    				\n    			    </ul>\n    			\n    		    </div> <!-- /.nav-collapse -->\n            </div>\n        </div>\n        \n\n	</div> <!-- /.container -->\n	\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_history-bar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["_left-sidebar-application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["_masthead"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["_search-temp"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["_topbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("<div id=\"topbar\">\n    \n	<div class=\"container\">\n		\n		<div id=\"top-nav\">\n			\n			<ul class=\"pull-right\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "Nerdeez.auth.isLoggedIn", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ul>\n			\n		</div> <!-- /#top-nav -->\n		\n	</div> <!-- /.container -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_wall-header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n						Course Name:\n					");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n						Faculty Name:\n					");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n						University Name:\n					");
  }

  data.buffer.push("<!--\n	Partial for the wall headline\n	\n	Created October 20th, 2013\n	@author: Doron Nachshon\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"wall-main nerdeez-box\">\n	<div class=\"main-action nerdeez-box-action\">\n		<div class=\"pic-content\">\n			<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("model.getIconClass")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n				<i class=\"schoolgroup-img\"></i>\n			</div>\n		</div>\n		<div class=\"text-content\">\n			<div class=\"result-title\">\n				<h3>\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.isCourse", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.isFaculty", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.isUniversity", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</h3>\n				<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n			</div>\n			<div class=\"result-description\">\n				<h5> Description: </h5>\n				<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n			</div>\n		</div>\n	</div>\n	<div class=\"main-footer nerdeez-box-footer\">\n		<div class=\"main-share\">\n			<ul class=\"like-status\">\n				<li>\n					<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incDislike", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n						<i class=\"icon-thumbs-down\"></i>\n					</a>\n				</li>\n				<li>\n					<span class=\"alert alert-danger\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.dislike", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</span>\n				</li>\n				<li><i class=\"vertical-line\"></i></li>\n				<li>\n					<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "incLike", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >\n						<i class=\"icon-thumbs-up\"></i>\n					</a>\n				</li>\n				<li>\n					<span class=\"alert alert-success\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.like", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</span>\n				</li>\n			</ul>\n			<div class=\"fb\">\n				<a class=\"btn_2\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "share", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Share on Facebook</a>\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["add_school_group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["add_school_group/course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["add_school_group/faculty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n");
  
});

Ember.TEMPLATES["add_school_group/uni"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Uni</h1>");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("    \n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "topbar", options) : helperMissing.call(depth0, "partial", "topbar", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "masthead", options) : helperMissing.call(depth0, "partial", "masthead", options))));
  data.buffer.push("\n<div id=\"content\">\n    <div class=\"container\">\n        <div class=\"row\">\n	    	    <div class=\"span2\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "left-sidebar-application", options) : helperMissing.call(depth0, "partial", "left-sidebar-application", options))));
  data.buffer.push("\n			    \n			    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "history-bar", options) : helperMissing.call(depth0, "partial", "history-bar", options))));
  data.buffer.push("\n		    </div>\n		    <div class=\"span10\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n    </div>\n</div>\n<div class=\"push\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["change_password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["components/fb-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("<!--\n\nHolds the html of the contact page\nauthor: Doron Nachshon\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"contact\">\n    <div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Contact</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Let us know your opinion about the site</p>\n    				\n    				<div class=\"field\">\n    					<label>Email Address (not required)</label>\n						");
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

Ember.TEMPLATES["flatpage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["forget_password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("<!--\n	Handlebar for the forget password window\n	\n	Created September 26th, 2013\n	@author: Yariv Katz\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"contact forget_password\">\n    <div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Forgot your password?</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Write the email address of your nerdeez account. Mail will be sent with a link to set your password</p>\n    				\n    				<div class=\"field\">\n    					<label>Email</label>\n						");
  hashContexts = {'valueBinding': depth0,'class': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] nerdeez-inputs"),
    'required': ("true")
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

Ember.TEMPLATES["hws/hw"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("<!--\n	handle bar file for a single h.w page\n	\n	Created October 14th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd. \n-->\n\n<div class=\"hw\">\n	\n	<!-- the upper part with the details -->\n	<div class=\"row\">\n		\n	</div>\n	<!-- end upper part -->\n	\n	<!-- The part that contains the files/comments -->\n	<div class=\"row\">\n		\n		<!-- will hold the comments -->\n		<div class=\"span5 facebook-comments\">\n			");
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
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</div>\n			</div>\n			<!-- end controlls -->\n			\n			\n			<!-- begin the file table -->\n			<div class=\"row\">\n				<div class=\"span5\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "files", {hash:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
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

Ember.TEMPLATES["hws/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n		");
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

  data.buffer.push("<!--\n	this will be the files page for a school group\n	\n	Created October 6th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd.\n-->\n\n<div class=\"schoolgroup-files\">\n	\n	<!-- the upper part with the details -->\n	<div class=\"row\">\n		");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['with'].call(depth0, "schoolGroup", "as", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n	<!-- end of upper part -->\n	\n	<!-- the part for the table actions -->\n	<div class=\"row table-controllers\">\n		<div class=\"span2\">\n			<button class=\"button btn btn-primary btn-large\" ");
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

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n		<div id=\"carousel-data\" class=\"hidden\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		<div class=\"uni-carousel account-container login stacked\">\n			<h3 style=\"\">People from these Universities already uploaded <span class=\"label label-success\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "numFiles", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span> files</h3>\n			<div class=\"\">\n				<div id=\"carousel-example-generic\" class=\"carousel slide\">\n				\n				  <!-- Wrapper for slides -->\n				  <div class=\"carousel-inner\">\n				  	\n				  </div>\n				\n				  <!-- Controls -->\n				  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n					    <i class=\"icon-chevron-left\">\n					    	\n					    </i>\n				  </a>\n				  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n					    <i class=\"icon-chevron-right\">\n					    	\n					    </i>\n				  </a>\n				</div>\n	\n			</div>\n		</div>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
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
    'html': ("<div class=\"item active\"><ul class=\"tumbnails clearfix\">")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.isFirst || depth0.isFirst),stack1 ? stack1.call(depth0, "", "controller.content", options) : helperMissing.call(depth0, "isFirst", "", "controller.content", options))));
  data.buffer.push("\n					  <li class=\"\">\n						  	<div class=\"thumbnail\" align=\"center\">\n						  		<div class=\"image-wrapper\">\n						  			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
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
function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n									<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n									");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n				Donate\n				");
  }

  data.buffer.push("<!--\n	application homepage is defined here\n	\n	Created October 20th, 2013\n	@author: Yariv Katz\n	@version: 2.0\n	@copyright: Nerdeez \n-->\n\n<div class=\"homepage\">\n	\n	<!-- begin quickstart -->\n	<div class=\"row quickstart account-container login stacked\">\n		<div class=\"span10 search\">\n			<div class=\"row\">\n				<form class=\"form-search nerdeez-inputs\">\n					<div class=\"padding-left\">\n						<h3>\n							Quick Start \n						</h3>\n						<p>\n							Type your course number\n						</p>\n					</div>\n					<div class=\"row\">\n						<div class=\"span8 padding-left\">\n						");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("quickStart"),
    'class': ("search-query"),
    'placeholder': ("Ex. 234122")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						<i class=\"icon-search\"></i>\n						</div>\n						<div class=\"span2\">\n							<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSearch", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n								<i class=\"icon-search\"></i>\n								Search\n							</button>\n						</div>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<!-- end quickstart -->\n	\n	<!-- begin diagram -->\n	<div class=\"row diagram\">\n		<div class=\"span10\">\n			<div class=\"diagram-wrapper\">\n				<div class=\"upper-small-baloons\">\n					<div class=\"single-diagram pull-left step1\">\n						<div class=\"explain\">\n							<span>\n								Problem solving your H.W?\n							</span>\n							<br/>\n							<span class=\"pull-right\">\n								Share your solution\n							</span>\n						</div>\n						<div class=\"cool-arrow pull-left\">\n							<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/arrow-left.png\" />\n						</div>\n						<div class=\"diagram-circle\" style=\"\">\n						    <img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/question-nerd.png\" />\n						</div>\n					</div>\n					<div class=\"baloon-arrow pull-left arrow1\">\n						<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/connecting-arrow-left.png\" />\n					</div>\n					<div class=\"single-diagram pull-left step2\">\n						<div class=\"explain\">\n							<span>\n								Invite your friends!\n							</span>\n							<br/>\n							<span >\n								Together rate, comment & upload solutions.\n							</span>\n						</div>\n						<div class=\"cool-arrow pull-left\">\n							<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/arrow-top.png\" />\n						</div>\n						<div class=\"diagram-circle\" style=\"\">\n						    <img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/nerds-chatting.png\" />\n						</div>\n					</div>\n					<div class=\"baloon-arrow pull-left arrow2\">\n						<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/connecting-arrow-right.png\" />\n					</div>\n					<div class=\"single-diagram pull-left step3\">\n						<div class=\"explain\">\n							<span>\n								Learn & Solve. \n							</span>\n							<br/>\n							<span>\n								Together with your friends, <br/> learn and solve your H.W\n							</span>\n						</div>\n						<div class=\"cool-arrow pull-right\">\n							<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/arrow-right.png\"/>\n						</div>\n						<div class=\"diagram-circle\" style=\"\">\n						    <img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/nerd-solving.png\" />\n						</div>\n					</div>\n				</div>\n				<div class=\"bottom-site-logo\">\n					<img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.staticUrl", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("img/moto-baloon.png\" />\n					<span>Nerdeez <br/> Doing H.W Together</span>\n				</div>\n			</div>\n		</div>\n	</div>\n	<!-- end diagram -->\n	\n	\n	\n	<!-- begin carousel -->\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<!-- end carousel -->\n	\n	<!-- begin donation -->\n	<div class=\"row donation account-container login stacked\">\n		<div class=\"span10\">\n			<div class=\"explain\">\n				<h2>\n					Support development by  buying a nerdeez T-Shirt\n				</h2>\n			</div>\n			<div class=\"images\">\n				<div class=\"thumbnail\">\n					<img src=\"");
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
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "donate", options) : helperMissing.call(depth0, "link-to", "donate", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n	<!-- end donation -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!--\n	global state for the application loading state\n	\n	Created October 14th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd.\n-->\n\n<div class=\"loading-hbs\">\n	<i class=\"icon-refresh icon-spin\"></i>\n</div>");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n						    Forgot your password?\n					    ");
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

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the login page\n\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"login\">\n    <div class=\"account-container login stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    		\n    			<h1>Sign In</h1>		\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Sign in using your registered account:</p>\n    				\n    				<div class=\"field\">\n    					<label for=\"username\">Email:</label>\n    					<!--<input type=\"email\" id=\"username\" name=\"username\" value=\"\" placeholder=\"Username\" class=\"login username-field nerdeez-inputs\">-->\n    					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] login username-field nerdeez-inputs"),
    'placeholder': ("Email"),
    'required': ("true"),
    'tabindex': ("1")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				<div class=\"field\">\n    					<label for=\"password\">Password:</label>\n    					<!--<input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"login password-field nerdeez-inputs\">-->\n    					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0,'tabindex': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("password"),
    'class': ("validate[required,minSize[5]] login password-field nerdeez-inputs"),
    'placeholder': ("Password"),
    'required': ("true"),
    'type': ("password"),
    'tabindex': ("2")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /password -->\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    				<span class=\"login-checkbox\">\n    					<!--<input id=\"Field\" name=\"Field\" type=\"checkbox\" class=\"field login-checkbox\" value=\"First Choice\" tabindex=\"4\">-->\n    					");
  hashContexts = {'checkedBinding': depth0,'class': depth0,'tabindex': depth0};
  hashTypes = {'checkedBinding': "STRING",'class': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("isRememberMe"),
    'class': ("field login-checkbox"),
    'tabindex': ("3")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    					<label class=\"choice\" for=\"Field\">Keep me signed in</label>\n    				</span>\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" tabindex=\"4\">Sign In</button>\n    				\n    				<div class=\"forget-password\">\n				    <p>\n					    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "forgetPassword", options) : helperMissing.call(depth0, "link-to", "forgetPassword", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				    </p>\n			    </div>\n    				\n    			</div> <!-- .actions -->\n    			\n    			<div class=\"login-social\">\n    				<p>Sign in using social network:</p>\n    				\n    				<div class=\"twitter\">\n    					<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "twitterLogin", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_1\">Login with Twitter</a>\n    				</div>\n    				\n    				<div class=\"fb\">\n    					<a  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbLogin", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_2\">Login with Facebook</a>\n    				</div>\n    			</div>\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n	    \n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"alert alert-success\">\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the registration page\n\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"register\">\n    <div class=\"account-container register stacked\">\n    	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\">\n    		\n    			<h1>Create Your Account</h1>			\n    			\n    			<div class=\"login-social\">\n    				<p>Sign in using social network:</p>\n    				\n    				<div class=\"twitter\">\n    					<a ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "twitterLogin", {hash:{
    'target': ("controllers.login")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_1\">Login with Twitter</a>				\n    				</div>\n    				\n    				<div class=\"fb\">\n    					<a ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbLogin", {hash:{
    'target': ("controllers.login")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_2\">Login with Facebook</a>				\n    				</div>\n    			</div>\n    			\n    			<div class=\"login-fields\">\n    				\n    				<p>Create your free account:</p>\n    				\n    				<div class=\"field\">\n    					<label for=\"email\">Email Address:</label>\n    					<!--<input type=\"text\" id=\"email\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"login\">-->\n    					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] login nerdeez-inputs"),
    'placeholder': ("Email"),
    'required': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				<div class=\"field\">\n    					<label for=\"password\">Password:</label>\n    					<!--<input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"login\">-->\n    					");
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
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    				<span class=\"login-checkbox\">\n    					<!--<input id=\"Field\" name=\"Field\" type=\"checkbox\" class=\"field login-checkbox\" value=\"First Choice\" tabindex=\"4\">-->\n    					");
  hashContexts = {'class': depth0,'tabindex': depth0,'name': depth0,'id': depth0};
  hashTypes = {'class': "STRING",'tabindex': "STRING",'name': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'class': ("field login-checkbox validate[required]"),
    'tabindex': ("4"),
    'name': ("Field"),
    'id': ("Field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    					<label class=\"choice\" for=\"Field\">I have read and agree with the ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "linkTo", "terms", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</label>\n    				</span>\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "register", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Register</button>\n    				\n    			</div> <!-- .actions -->\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isError", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    \n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isSuccess", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["reset_password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

Ember.TEMPLATES["schoolgroup/about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<!--\n	this will hold the about page of a school group\n	this handlebar already gets a school group\n	\n	Created October 3rd, 2013\n	@author: Doron Nachshon\n	@copyright: Nerdeez Ltd.\n	@version: 1.0\n-->\n\n<div class=\"schoolgroup-about\">\n	<h1>About page ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["schoolgroup/wall"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!--\n	the school group main is located here\n	The top section of this page is shared in the course files page as well\n	so it's a partial\n	\n	Created October 3rd, 2013\n	@author: Doron Nachshon\n	@copyright: Nerdeez Ltd.\n	@version: 1.0\n-->\n\n<div class=\"schoolgroup-wall\">\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "wall-header", options) : helperMissing.call(depth0, "partial", "wall-header", options))));
  data.buffer.push("\n			<div class=\"wall-comments nerdeez-box\">\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fb-comment", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

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
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n							<li >\n								<div class=\"hoveron\" >\n									<div class=\"span5 resultbox\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickResult", "", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n										<div class=\"result-action\">\n											<div class=\"pic-container\">\n												<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("getIconClass")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n													<i class=\"standard-img\"></i>\n													<i class=\"blurred-img\"></i>\n												</div>\n											</div>\n											<div class=\"result-text\">\n												<h5>\n													");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n													");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFaculty", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n													");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isUniversity", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n												</h5>\n												<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n											</div>\n											<div class=\"result-text\">\n													<h5> Description: </h5>\n													<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n											</div>\n											<div class=\"result-text\">\n												<h5> \n													");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n													");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFaculty", {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n												</h5>\n												<span>\n													");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isUniversity", {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n												</span>\n											</div>\n											<div class=\"result-text\">\n												");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n											</div>\n										</div>\n										<div class=\"result-footer\">\n											<ul class=\"entry-info\">\n												<li>\n													");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getRating || depth0.getRating),stack1 ? stack1.call(depth0, "grade", 5, options) : helperMissing.call(depth0, "getRating", "grade", 5, options))));
  data.buffer.push("	\n												</li>\n												<li>\n													<i class=\"icon-user\"></i>\n													<h5>Users: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "num_users", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n												</li>\n												<li>\n													<i class=\"icon-file-text\"></i>\n													<h5>Files: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "num_files", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h5>\n												</li>\n											</ul>\n										</div>\n										<div class=\"hoveron-toggle\">\n											<div class=\"hoveron-main\">\n												");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "schoolgroup.wall", "", options) : helperMissing.call(depth0, "link-to", "schoolgroup.wall", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n												");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "hws.index", "", options) : helperMissing.call(depth0, "link-to", "hws.index", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n											</div>\n											<div class=\"hoveron-blur\"></div>\n										</div>\n									</div>\n								</div>\n							</li>\n						");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n														Course Name:\n													");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n														Faculty Name:\n													");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n														University Name:\n													");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n														Faculty:\n													");
  }

function program16(depth0,data) {
  
  
  data.buffer.push("\n														University:\n													");
  }

function program18(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n														");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n													");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n													<h5> University: </h5>\n													<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "parent.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n												");
  return buffer;
  }

function program22(depth0,data) {
  
  
  data.buffer.push("\n												<div class=\"hoveron-block hoveron-wall\">\n													<div class=\"block-icon wall-icon\">\n														<i class=\"icon-comments\"></i>\n													</div>\n													<div class=\"block-text wall-text\">\n														<h3>Wall</h3>\n													</div>\n												</div>\n												");
  }

function program24(depth0,data) {
  
  
  data.buffer.push("\n												<div class=\"hoveron-block hoveron-files\">\n													<div class=\"block-icon files-icon\">\n														<i class=\"icon-file\"></i>\n													</div>\n													<div class=\"block-text files-text\">\n														<h3>H.W's</h3>\n													</div>\n												</div>\n												");
  }

  data.buffer.push("<!--\n\nHolds the html of the search page\nmake sure to keep bootstrap grid system\n\nauthor: Doron Nechshon\ncopyright: Nerdeez Ltd.\nversion: 1.0\n\n-->\n\n<div class=\"search\">\n	\n	<!-- begin upper controllers -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			\n			<div class=\"row\">\n				<div class=\"span10\">\n					<div class=\"filter-zone pull-left\">\n						<label>Filter</label>\n						<div class=\"styled-select\">\n							");
  hashContexts = {'prompt': depth0,'contentBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'valueBinding': depth0};
  hashTypes = {'prompt': "STRING",'contentBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'prompt': ("All"),
    'contentBinding': ("Nerdeez.SCHOOLGROUP_TYPE"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.title"),
    'valueBinding': ("filterBy")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n							<div class=\"select-icon\">\n								<i class=\"icon-sort\"></i>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			\n			<div class=\"row\">\n				<div class=\"span7\">\n					<form class=\"form-search nerdeez-inputs\">\n						");
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
  data.buffer.push("\n					</form>\n				</div>\n				<div class=\"span3\">\n					<div class=\"sortby pull-right\">\n						<h5>Sort By</h5>\n						<div class=\"dropdown\">\n							<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"> \n								");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.sortName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n								<b class=\"caret\"></b>\n							</a>\n							<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n								");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "Nerdeez.SORTBY_TYPE", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</ul>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<!-- end upper controllers-->\n	\n	<hr />\n	\n	<!-- begin results -->\n	<div class=\"row\">\n		<div class=\"span10\">\n			\n			<div class=\"row\">\n				<div class=\"span10\">\n					<div class=\"result-num\">\n						<i class=\"icon-book\"></i>\n						<p><b>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.resultNum", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</b> Results Found</p>\n					</div>\n				</div>\n			</div>\n			\n			<div class=\"row\">\n					\n					<ol class=\"results\">\n						");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					</ol>\n					\n			</div>\n		</div>\n	</div>\n	<!-- end results-->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["under_construction"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!--\n	handlebar for the under construction page\n	\n	Created October 20th, 2013\n	@author: Yariv Katz\n	@version: 1.0\n	@copyright: Nerdeez Ltd\n-->\n\n<div class=\"under-construction account-container login stacked\">\n	<i class=\"icon-wrench\">\n	</i>\n	<br/>\n	<div class=\"explain\">\n		<span>\n			We are sorry but this page is under construction\n		</span>\n	</div>\n</div>");
  
});