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
  data.buffer.push("\n            </div>\n		\n	        <div class=\"span3 menu pull-right\">\n    		    <div class=\"nav-collapse\">\n    			    <ul class=\"nav pull-right\" id=\"main-nav\">\n    				    <li class=\"nav-icon home\">\n    					    ");
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

Ember.TEMPLATES["_left-sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  data.buffer.push("<div class=\"left-sidebar\">\n	<ul class=\"nav nav-tabs nav-stacked\">\n	    <li>\n		    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "search", options) : helperMissing.call(depth0, "link-to", "search", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    </li>\n	    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "Nerdeez.isLoggedIn", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_masthead"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"masthead\">\n    \n	<div class=\"container\">\n		\n		<div class=\"masthead-pad\">\n			\n			<div class=\"masthead-text\">\n				<h2></h2>\n				<p></p>\n			</div> <!-- /.masthead-text -->\n			\n		</div>\n		\n	</div> <!-- /.container -->	\n	\n</div>");
  
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
  stack1 = helpers['if'].call(depth0, "Nerdeez.isLoggedIn", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ul>\n			\n		</div> <!-- /#top-nav -->\n		\n	</div> <!-- /.container -->\n	\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["add_school_group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n									<button class=\"button btn btn-primary btn-large\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "schoolgroupTypeClicked", "", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n										");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									</button>\n								");
  return buffer;
  }

  data.buffer.push("<!--\n	Handlebar for adding a course\n	\n	Created September 26th, 2013\n	@author: Yariv Katz\n	@copyright: nerdeez.com\n	@version: 1.0\n-->\n\n<div class=\"add_school_group contact\">\n	<div class=\"account-container register stacked\">\n	\n    	<div class=\"content clearfix\">\n    		\n    		<form class=\"js-validation\" >\n    			<div class=\"faq-container\">\n					<ol class=\"faqList faq-list\">\n						\n						<!-- begin school type -->\n						<li id=\"faq-1\">\n							<div class=\"description\">\n								<div class=\"faq-icon\">\n									<div class=\"faq-number\">1</div>\n								</div>\n								<div class=\"faq-text\">\n									<h4>School Group type?</h4>\n									<p>\n										Select the school group type you want to add.\n									</p>	\n								</div>\n							</div>\n							<div class=\"actions type\">\n								");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "Nerdeez.SCHOOLGROUP_TYPE", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n							</div>\n						</li>\n						<!-- end school type -->\n						\n						<li id=\"faq-2-course\">\n							<div class=\"description\">\n								<div class=\"faq-icon\">\n									<div class=\"faq-number\">2</div>\n								</div>\n								<div class=\"faq-text\">\n									<h4>Choose University &amp; Faculty</h4>\n									<p>\n										Choose the university and faculty that this course is part of.\n									</p>	\n								</div>\n							</div>\n							<div class=\"actions type\">\n								<label for=\"university\">University:</label>\n								");
  hashContexts = {'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'name': depth0,'class': depth0};
  hashTypes = {'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'name': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("controller.content"),
    'selectionBinding': ("university"),
    'optionLabelPath': ("content.title"),
    'name': ("university"),
    'class': ("nerdeez-select")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n							</div>\n						</li>\n						\n						\n						\n					</ol>		\n				</div>\n    			\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    	\n    </div>\n</div>");
  return buffer;
  
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
  data.buffer.push("\n<div id=\"content\">\n    <div class=\"container\">\n        <div class=\"row\">\n    	    <div class=\"span2\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "left-sidebar", options) : helperMissing.call(depth0, "partial", "left-sidebar", options))));
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

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Homepage</h1>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
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
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] login username-field nerdeez-inputs"),
    'placeholder': ("Email"),
    'required': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /field -->\n    				\n    				<div class=\"field\">\n    					<label for=\"password\">Password:</label>\n    					<!--<input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"login password-field nerdeez-inputs\">-->\n    					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("password"),
    'class': ("validate[required,minSize[5]] login password-field nerdeez-inputs"),
    'placeholder': ("Password"),
    'required': ("true"),
    'type': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    				</div> <!-- /password -->\n    				\n    			</div> <!-- /login-fields -->\n    			\n    			<div class=\"login-actions\">\n    				\n    				<span class=\"login-checkbox\">\n    					<!--<input id=\"Field\" name=\"Field\" type=\"checkbox\" class=\"field login-checkbox\" value=\"First Choice\" tabindex=\"4\">-->\n    					");
  hashContexts = {'checkedBinding': depth0,'class': depth0,'tabindex': depth0};
  hashTypes = {'checkedBinding': "STRING",'class': "STRING",'tabindex': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("isRememberMe"),
    'class': ("field login-checkbox"),
    'tabindex': ("4")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    					<label class=\"choice\" for=\"Field\">Keep me signed in</label>\n    				</span>\n    									\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Sign In</button>\n    				\n    				<div class=\"forget-password\">\n				    <p>\n					    ");
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

Ember.TEMPLATES["schoolgroup/files"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Files page</h1>");
  
});

Ember.TEMPLATES["schoolgroup/wall"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<hr/>\n<div class=\"wall top-buffer\">\n    <div class=\"fb-comments\" data-href=\"http://nerdeez-client.ywarezk.c9.io/#/course/1/wall\" data-width=\"470\" data-num-posts=\"20\">\n    </div>\n</div>");
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n				<li>\n					<div class=\"span5 resultbox\">\n						<div class=\"result-action\">\n							<div class=\"pic-container\">\n								<i ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("getIconClass")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></i>\n							</div>\n							<div class=\"result-text\">\n								<h5>\n									");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n									");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFaculty", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n									");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isUniversity", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								</h5>\n								<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n							</div>\n							<div class=\"result-text\">\n									<h5> Description: </h5>\n									<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n							</div>\n							<div class=\"result-text\">\n								<h5> \n									");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n									");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isFaculty", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								</h5>\n								<span>\n									");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isUniversity", {hash:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n								</span>\n							</div>\n							<div class=\"result-text\">\n								");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isCourse", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n							</div>\n						</div>\n						<div class=\"result-footer\">\n							<ul class=\"rating\">\n								<li>\n									<i class=\"icon-star\"></i>\n								</li>\n								<li>\n									<i class=\"icon-star\"></i>\n								</li>\n								<li>\n									<i class=\"icon-star\"></i>\n								</li>\n								<li>\n									<i class=\"icon-star\"></i>\n								</li>\n								<li>\n									<i class=\"icon-star\"></i>\n								</li>\n							</ul>\n							<ul class=\"entry-info\">\n								<li class=\"iconproperties\">\n									<i class=\"icon-user\"></i>\n								</li>\n								<li>\n									<h5>Users: ... </h5>\n								</li>\n								<li>\n									<i class=\"verticalLine\"></i>\n								</li>\n								<li class=\"iconproperties\">\n									<i class=\"icon-file-text\"></i>\n								</li>\n								<li>\n									<h5>Files: ... </h5>\n								</li>\n							</ul>\n						</div>\n					</div>\n				</li>\n			");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n										Course Number:\n									");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n										Faculty Name:\n									");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n										University Name:\n									");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n										Faculty:\n									");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n										University:\n									");
  }

function program12(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n										");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n									");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n									<h5> University: </h5>\n									<span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "parent.parent.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n								");
  return buffer;
  }

  data.buffer.push("<!--\n\nHolds the html of the search page\nmake sure to keep bootstrap grid system\n\nauthor: Doron Nechshon\ncopyright: Nerdeez Ltd.\nversion: 1.0\n\n-->\n\n<div class=\"search\">\n	<div class=\"row\">\n		<div class=\"span7\">\n			<form class=\"form-search\">\n				<div class=\"input-append\">\n					");
  hashContexts = {'class': depth0,'valueBinding': depth0,'placeholder': depth0};
  hashTypes = {'class': "STRING",'valueBinding': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("nerdeez-inputs search-query"),
    'valueBinding': ("searchQuery"),
    'placeholder': ("Search")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					<i class=\"icon-search\"></i>\n				</div>\n			</form>\n		</div>\n		<div class=\"span3 sortby\">\n			<h5>Sort By</h5>\n			<div class=\"dropdown\">\n				<!-- Link or button to toggle dropdown -->\n				<b class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"> \n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.selectedSort", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					<b class=\"caret\"></b>\n				</b>\n				<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n				    <li ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "manageSort", "byRelevance", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Relevance</li>\n				    <li ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "manageSort", "byGrades", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Grades</li>\n				    <li ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "manageSort", "byUsers", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">No. of Users</li>\n				    <li ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "manageSort", "byFiles", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">No. of Files</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n	<hr />\n	<div class=\"row\">\n		<ol class=\"results\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</ol>\n	</div>\n</div>");
  return buffer;
  
});