Ember.TEMPLATES["_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
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

function program7(depth0,data) {
  
  
  data.buffer.push("\n                            <i class=\"icon-dollar\"></i>\n                            Bank application\n                            ");
  }

  data.buffer.push("<!--\n\nHolds the html of the application header\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div id=\"header\" class=\"_header\">\n	<div class=\"container\">\n		<div class=\"row\">\n            <div class=\"logo span2\">\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </div>\n		\n	        <div class=\"span3 menu pull-right\">\n    		    <div class=\"nav-collapse\">\n    			    <ul class=\"nav pull-right\" id=\"main-nav\">\n    				    <li class=\"nav-icon home\">\n    					    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    			    	</li>\n    				\n    				    <li>\n        					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "linkTo", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    				    </li>\n    				    <li>\n        					");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "banks", options) : helperMissing.call(depth0, "linkTo", "banks", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    				    </li>\n    				\n    			    </ul>\n    			\n    		    </div> <!-- /.nav-collapse -->\n            </div>\n        </div>\n        \n\n	</div> <!-- /.container -->\n	\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_left-sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		    		UNIVERSITIES\n                    <i class=\"icon-search pull-right\"></i>\n		    	");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		    		COURSES\n                    <i class=\"icon-search pull-right\"></i>\n		    	");
  }

  data.buffer.push("<div class=\"left-sidebar\">\n	<ul class=\"nav nav-tabs nav-stacked\">\n	    <li>\n		    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "search.university", options) : helperMissing.call(depth0, "linkTo", "search.university", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    </li>\n	    <li>\n		    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "search.course", options) : helperMissing.call(depth0, "linkTo", "search.course", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	    </li>\n    </ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["_masthead"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"masthead\">\n    \n	<div class=\"container\">\n		\n		<div class=\"masthead-pad\">\n			\n			<div class=\"masthead-text\">\n				<h2></h2>\n				<p></p>\n			</div> <!-- /.masthead-text -->\n			\n		</div>\n		\n	</div> <!-- /.container -->	\n	\n</div>");
  
});

Ember.TEMPLATES["_search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
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
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n				<li><a href=\"javascript:;\"><i class=\"icon-user\"></i> Logged in as John Doe</a></li>\n                <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "logout", options) : helperMissing.call(depth0, "linkTo", "logout", options));
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
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "login", options) : helperMissing.call(depth0, "linkTo", "login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</li>\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n                    <i class=\"icon-lock\"></i>\n                    Login\n                    ");
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
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("    \n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "topbar", options) : helperMissing.call(depth0, "partial", "topbar", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "masthead", options) : helperMissing.call(depth0, "partial", "masthead", options))));
  data.buffer.push("\n<div id=\"content\">\n    <div class=\"container\">\n        <div class=\"row\">\n		    <div class=\"span12\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n		</div>\n    </div>\n</div>\n<div class=\"push\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["banks"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"banks\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"span12\">\n                <h1>אפליקציית השוואות בנקים</h1>\n            </div>                \n        </div>\n        <div class=\"row\">\n            <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                <div class=\"faq-container\">\n                    <ol class=\"faqList faq-list\">\n                        <li class=\"span4 pull-right\">\n                            <div class=\"faq-icon\">\n                                <div class=\"faq-number\">1</div>\n                            </div>\n                            <div class=\"faq-text\">\n                                <div class=\"details register\">\n                                    <h4>הכנס פרטים אישיים</h4>\n                                    <p>הפרטים שלך נותרים חסויים ומטרתם לאמת אז זהותך</p>\n                                    <div class=\"login-fields\">\n                                    \n                        				<div class=\"field\">\n                        					<label for=\"name\">שם:</label>\n                                            ");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("שם"),
    'valueBinding': ("name"),
    'required': ("true"),
    'name': ("name")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                        				\n                        				<div class=\"field\">\n                        					<label for=\"id\">ת.ז:</label>	\n                        					");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("ת.ז"),
    'valueBinding': ("id"),
    'required': ("true"),
    'name': ("id")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                                        \n                        				<div class=\"field\">\n                        					<label for=\"phone\">טלפון:</label>	\n                        					");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("טלפון"),
    'valueBinding': ("phone"),
    'required': ("true"),
    'name': ("phone")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                                        \n                        			</div>\n                                </div>\n                            </div>\n                        </li>\n                        \n                        <li class=\"span4 pull-right\">\n                            <div class=\"faq-icon\">\n                                <div class=\"faq-number\">2</div>\n                            </div>\n                            <div class=\"faq-text\">\n                                <div class=\"details register\">\n                                    <h4>הכנס פרטי הוצאות\\הכנסות</h4>\n                                    <p>הפרטים נותרים חסויים ומטרתם לאפשר לבנקים להתאים לך הצעות לתוכניות אפשריות</p>\n                                    <div class=\"login-fields\">\n                                    \n                        				<div class=\"field\">\n                        					<label for=\"savings\">חסכונות:</label>\n                                            ");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("חסכונות"),
    'valueBinding': ("savings"),
    'required': ("true"),
    'name': ("savings")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                        				\n                        				<div class=\"field\">\n                        					<label for=\"salary\">משכורת:</label>	\n                        					");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("משכורת"),
    'valueBinding': ("salary"),
    'required': ("true"),
    'name': ("salary")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                                        \n                        				<div class=\"field\">\n                        					<label for=\"loans\">הלוואות:</label>	\n                        					");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("הלוואות"),
    'valueBinding': ("loans"),
    'required': ("true"),
    'name': ("loans")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                                        \n                        				<div class=\"credit\">\n                        					<label for=\"loans\">הלוואות:</label>	\n                        					");
  hashContexts = {'class': depth0,'placeholder': depth0,'valueBinding': depth0,'required': depth0,'name': depth0};
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING",'required': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'class': ("login"),
    'placeholder': ("מסגרת אשראי"),
    'valueBinding': ("credit"),
    'required': ("true"),
    'name': ("loans")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                        				</div> <!-- /field -->\n                                        \n                        			</div>\n                                </div>\n                            </div>\n                        </li>\n                        \n                        <li class=\"span3 pull-right\">\n                            <div class=\"faq-icon\">\n                                <div class=\"faq-number\">3</div>\n                            </div>\n                            <div class=\"faq-text\">\n                                <div class=\"details register\">\n                                    <h4>לחץ  לחיפוש</h4>\n                                    <div class=\"login-fields\">\n                        				<button type=\"submit\" class=\"button btn btn-primary btn-large\">\n                                            <i class=\"icon-search\"></i>\n                                            חפש תוכניות\n                                        </button>\n                        			</div>\n                                </div>\n                            </div>\n                        </li>\n                    </ol>\n                </div>\n            </form>\n        </div>\n        \n        <div class=\"row results\">\n            <div class=\"container\">    		\n        	<div class=\"row\">			\n        	    <div class=\"span12\">				\n        		    <div class=\"pricing-plans plans-4\">						\n        		        <div class=\"plan-container best-value\">\n        		            <div class=\"plan\">\n        			            <div class=\"plan-header\">				                \n        			                <div class=\"plan-title\">\n        					        	בנק הפועלים	        		\n        				            </div> <!-- /plan-title -->				                \n        		                    <div class=\"plan-price\">\n                                        <div class=\"thumbnail\">\n        				                    <img src=\"http://www.myavne.co.il/sites/yavne/UserContent/images/Yavne%20Irya/2013/12.06.13/poalim.jpg\">       	\n                                        </div>\n        				            </div> <!-- /plan-price -->\n        								\n        					    </div> <!-- /plan-header -->       \n        					        \n        					<div class=\"plan-features\">\n        						<ul>\n									<li>\n                                    <strong>\n                                    דמי ניהול\n                                    <strong>\n                                    12\n                                    &#8362;\n                                    /\n                                    חודש\n                                    </li>\n									<li>\n                                    <strong>\n                                    ריבית בפיקדון\n                                    </strong>\n                                    3%\n                                    </li>\n									<li>\n                                    <strong>מסגרת משכורת</strong>\n                                    חינם\n                                    </li>\n									<li><strong>ריבית הלוואה</strong>\n                                    3%\n                                    </li>\n									<li>\n                                        מבצע למצטרפים מהאפליקצייה.\n                                        המבצע תקף בהתאם\n                                        \n                                        \n                                    </li>\n        								</ul>\n        							</div> <!-- /plan-features -->\n        							\n        							<div class=\"plan-actions\">				\n        								<a class=\"btn\" href=\"javascript:;\">Purchase Now</a>				\n        							</div> <!-- /plan-actions -->\n        				\n        						</div> <!-- /plan -->\n        				    </div> <!-- /plan-container -->\n        				    \n        				    <div class=\"plan-container\">\n        				        <div class=\"plan\">\n        					        <div class=\"plan-header\">\n        				                \n        					        	<div class=\"plan-title\">\n        					        		Starter	        		\n        				        		</div> <!-- /plan-title -->\n        				                \n        					            <div class=\"plan-price\">\n        				                	<span class=\"note\">$</span>35<span class=\"term\">Per Month</span>\n        								</div> <!-- /plan-price -->\n        								\n        					        </div> <!-- /plan-header -->       \n        					        \n        					        <div class=\"plan-features\">\n        								<ul>\n        									<li><strong>Free</strong> setup</li>\n        									<li><strong>5</strong> Website</li>\n        									<li><strong>10</strong> Projects</li>\n        									<li><strong>5GB</strong> Storage</li>\n        									<li><strong>$35</strong> Google Adwords Credit</li>\n        								</ul>\n        							</div> <!-- /plan-features -->\n        							\n        							<div class=\"plan-actions\">				\n        								<a class=\"btn\" href=\"javascript:;\">Purchase Now</a>				\n        							</div> <!-- /plan-actions -->\n        				\n        						</div> <!-- /plan -->\n        				    </div> <!-- /plan-container -->\n        				    \n        				    <div class=\"plan-container best-value\">\n        				        <div class=\"plan\">\n        					        <div class=\"plan-header\">\n        				                \n        					        	<div class=\"plan-title\">\n        					        		Business	        		\n        				        		</div> <!-- /plan-title -->\n        				                \n        					            <div class=\"plan-price\">\n        				                	<span class=\"note\">$</span>75<span class=\"term\">Per Month</span>\n        								</div> <!-- /plan-price -->\n        								\n        					        </div> <!-- /plan-header -->	          \n        					        \n        					        <div class=\"plan-features\">\n        								<ul>					\n        									<li><strong>Free</strong> setup</li>\n        									<li><strong>20</strong> Website</li>\n        									<li><strong>35</strong> Projects</li>\n        									<li><strong>Unlimited</strong> Storage</li>\n        									<li><strong>$150</strong> Google Adwords Credit</li>\n        								</ul>\n        							</div> <!-- /plan-features -->\n        							\n        							<div class=\"plan-actions\">				\n        								<a class=\"btn\" href=\"javascript:;\">Purchase Now</a>				\n        							</div> <!-- /plan-actions -->\n        				\n        						</div> <!-- /plan -->\n        				    </div> <!-- /plan-container -->\n        				    \n        				    <div class=\"plan-container\">\n        				        <div class=\"plan\">\n        					        <div class=\"plan-header\">\n        				                \n        					        	<div class=\"plan-title\">\n        					        		Enterprise	        		\n        				        		</div> <!-- /plan-title -->\n        				                \n        					            <div class=\"plan-price\">\n        				                	<span class=\"note\">$</span>125<span class=\"term\">Per Month</span>\n        								</div> <!-- /plan-price -->\n        								\n        					        </div> <!-- /plan-header -->	       \n        					        \n        					        <div class=\"plan-features\">\n        								<ul>\n        									<li><strong>Free</strong> setup</li>\n        									<li><strong>Unlimited</strong> Website</li>\n        									<li><strong>Unlimited</strong> Projects</li>\n        									<li><strong>Unlimited</strong> Storage</li>\n        									<li><strong>$250</strong> Google Adwords Credit</li>\n        								</ul>\n        							</div> <!-- /plan-features -->\n        							\n        							<div class=\"plan-actions\">				\n        								<a class=\"btn\" href=\"javascript:;\">Purchase Now</a>				\n        							</div> <!-- /plan-actions -->\n        				\n        						</div> <!-- /plan -->\n        						\n        				    </div> <!-- /plan-container -->\n        				    \n        				</div>\n        				\n        			</div> <!-- /.span12 -->\n        			\n        		</div> <!-- /.row -->\n        		\n        		\n        	</div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n					<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n				");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n					<i class=\"icon-picture\"></i>\n				");
  }

  data.buffer.push("<div class=\"course\">\n    <div class=\"row\">\n        <div class=\"span2 image-wrapper\">\n			<div class=\"thumbnail\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "image", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</div>\n        </div>\n        <div class=\"span8 details\">\n            <h5>\n                Title\n            </h5>\n            <p>\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </p>\n            <h5>\n                Description\n            </h5>\n            <p>\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </p>\n            <h5>\n                University\n            </h5>\n            <p>\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "university.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" - ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "university.description", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </p>\n        </div>\n    </div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["course/wall"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"wall\">\n    <div class=\"fb-comments\" data-href=\"http://nerdeez-client.ywarezk.c9.io/#/course/1/wall\" data-width=\"470\" data-num-posts=\"20\">\n    </div>\n</div>");
  
});

Ember.TEMPLATES["flatpage"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n				<div class=\"hero-unit\">");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "html", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n			");
  return buffer;
  }

  data.buffer.push("<div class=\"flatpage\">\n	<div class=\"row\">\n		<div class=\"span10\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Homepage</h1>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
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
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "terms", options) : helperMissing.call(depth0, "linkTo", "terms", options));
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

Ember.TEMPLATES["search/course"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!--\n\nHolds the html of the course search page\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"\">\n	<div class=\"row\">\n		<div class=\"span6 offset2\">\n			<h1>Search Course</h1>\n		</div>\n	</div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "search", options) : helperMissing.call(depth0, "partial", "search", options))));
  return buffer;
  
});

Ember.TEMPLATES["search/university"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!--\n\nHolds the html of the university search page\nauthor: Yariv Katz\ncopyright: nerdeez.com\nversion: 1.0\n\n-->\n\n<div class=\"\">\n	<div class=\"row\">\n		<div class=\"span6 offset2\">\n			<h1>Search University</h1>\n		</div>\n	</div>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "search", options) : helperMissing.call(depth0, "partial", "search", options))));
  return buffer;
  
});