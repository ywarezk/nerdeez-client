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
  
  
  data.buffer.push("\n                            <i class=\"icon-info\"></i>\n                            About\n                            ");
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
  data.buffer.push("\n    			    	</li>\n    				\n    				    <li>\n        					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "linkTo", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    				    </li>\n    				\n    			    </ul>\n    			\n    		    </div> <!-- /.nav-collapse -->\n            </div>\n        </div>\n        \n\n	</div> <!-- /.container -->\n	\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_left-sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		    		Search\n                    <i class=\"icon-search pull-right\"></i>\n		    	");
  }

  data.buffer.push("<div class=\"left-sidebar\">\n	<ul class=\"nav nav-tabs nav-stacked\">\n	    <li>\n		    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "search", options) : helperMissing.call(depth0, "linkTo", "search", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    </li>\n    </ul>\n</div>\n");
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
  data.buffer.push("\n				<li><a href=\"javascript:;\"><i class=\"icon-user\"></i> Logged in as John Doe</a></li>\n                <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "logout", options) : helperMissing.call(depth0, "linkTo", "logout", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n                <i class=\"icon-power-off\"></i>\n                Logout");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n                <li>\n					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "login", options) : helperMissing.call(depth0, "linkTo", "login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    \n				</li>\n				<li>\n                  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "register", options) : helperMissing.call(depth0, "linkTo", "register", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"icon-lock\"></i>\n                    Login\n                    ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                                    <i class=\"icon-pencil\"></i>\n                                    Register\n                  ");
  }

  data.buffer.push("<div id=\"topbar\">\n    \n	<div class=\"container\">\n		\n		<div id=\"top-nav\">\n			\n			<ul class=\"pull-right\">\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "Nerdeez.isConnected", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ul>\n			\n		</div> <!-- /#top-nav -->\n		\n	</div> <!-- /.container -->\n	\n</div>");
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

Ember.TEMPLATES["login-temp"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Terms & Conditions");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"alert alert-success pull-left\">\n                <i class=\"icon-check-sign\"></i>\n                <span>You are logged in</span>\n                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isRedirect", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n                <span>You are being redirected...</span>\n                ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-error pull-left\">\n                <i class=\"icon-remove-sign\"></i>\n                <span>You are not logged in</span>\n            </div>\n            ");
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "loading", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"pull-right\">\n                <a class=\"btn primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <span>\n                        Login with Facebook\n                    </span>\n                </a>\n            </div>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"login span3 offset1\">\n    <h1>Login page</h1>\n    <div class=\"modal\">\n        <div class=\"modal-body\">\n        You need to login to continue.\n        By clicking login you agree to our ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "linkTo", "terms", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n        <div class=\"modal-footer\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "Nerdeez.isConnected", {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoading", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "Nerdeez.isConnected", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


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
  data.buffer.push(">Sign In</button>\n    				\n    			</div> <!-- .actions -->\n    			\n    			<div class=\"login-social\">\n    				<p>Sign in using social network:</p>\n    				\n    				<div class=\"twitter\">\n    					<a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "twitterLogin", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_1\">Login with Twitter</a>\n    				</div>\n    				\n    				<div class=\"fb\">\n    					<a  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbLogin", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_2\">Login with Facebook</a>\n    				</div>\n    			</div>\n    			\n    		</form>\n    		\n    	</div> <!-- /content -->\n    	\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Terms of Use.");
  }

  data.buffer.push("<!--\r\n\r\nHolds the html of the registration page\r\n\r\nauthor: Yariv Katz\r\ncopyright: nerdeez.com\r\nversion: 1.0\r\n\r\n-->\r\n\r\n<div class=\"register\">\r\n    <div class=\"account-container register stacked\">\r\n    	\r\n    	<div class=\"content clearfix\">\r\n    		\r\n    		<form class=\"js-validation\">\r\n    		\r\n    			<h1>Create Your Account</h1>			\r\n    			\r\n    			<div class=\"login-social\">\r\n    				<p>Sign in using social network:</p>\r\n    				\r\n    				<div class=\"twitter\">\r\n    					<a ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "twitterLogin", {hash:{
    'target': ("controllers.login")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_1\">Login with Twitter</a>				\r\n    				</div>\r\n    				\r\n    				<div class=\"fb\">\r\n    					<a ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbLogin", {hash:{
    'target': ("controllers.login")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn_2\">Login with Facebook</a>				\r\n    				</div>\r\n    			</div>\r\n    			\r\n    			<div class=\"login-fields\">\r\n    				\r\n    				<p>Create your free account:</p>\r\n    				\r\n    				<div class=\"field\">\r\n    					<label for=\"email\">Email Address:</label>\r\n    					<!--<input type=\"text\" id=\"email\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"login\">-->\r\n    					");
  hashContexts = {'valueBinding': depth0,'class': depth0,'placeholder': depth0,'required': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING",'required': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("email"),
    'class': ("validate[required,custom[email]] login nerdeez-inputs"),
    'placeholder': ("Email"),
    'required': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n    				</div> <!-- /field -->\r\n    				\r\n    				<div class=\"field\">\r\n    					<label for=\"password\">Password:</label>\r\n    					<!--<input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"login\">-->\r\n    					");
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
  data.buffer.push("\r\n    				</div> <!-- /field -->\r\n    				\r\n    				<div class=\"field\">\r\n    					<label for=\"confirm_password\">Confirm Password:</label>\r\n    					\r\n    					<!--<input type=\"password\" id=\"confirm_password\" name=\"confirm_password\" value=\"\" placeholder=\"Confirm Password\" class=\"login\">-->\r\n    					");
  hashContexts = {'class': depth0,'placeholder': depth0,'required': depth0,'type': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'required': "STRING",'type': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("validate[required,equals[password]] login nerdeez-inputs"),
    'placeholder': ("Confirm password"),
    'required': ("true"),
    'type': ("password")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n    				</div> <!-- /field -->\r\n    				\r\n    			</div> <!-- /login-fields -->\r\n    			\r\n    			<div class=\"login-actions\">\r\n    				\r\n    				<span class=\"login-checkbox\">\r\n    					<!--<input id=\"Field\" name=\"Field\" type=\"checkbox\" class=\"field login-checkbox\" value=\"First Choice\" tabindex=\"4\">-->\r\n    					");
  hashContexts = {'class': depth0,'tabindex': depth0,'name': depth0,'id': depth0};
  hashTypes = {'class': "STRING",'tabindex': "STRING",'name': "STRING",'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'class': ("field login-checkbox validate[required]"),
    'tabindex': ("4"),
    'name': ("Field"),
    'id': ("Field")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n    					<label class=\"choice\" for=\"Field\">I have read and agree with the ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "linkTo", "terms", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</label>\r\n    				</span>\r\n    									\r\n    				<button class=\"button btn btn-primary btn-large\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "register", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Register</button>\r\n    				\r\n    			</div> <!-- .actions -->\r\n    			\r\n    		</form>\r\n    		\r\n    	</div> <!-- /content -->\r\n    	\r\n    </div>\r\n</div>");
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
  


  data.buffer.push("<!--\n\nHolds the html of the search page\nmake sure to keep bootstrap grid system\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"search\">\n	\n</div>\n");
  
});