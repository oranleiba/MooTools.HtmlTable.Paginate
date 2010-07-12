//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More={version:"1.2.4.4",build:"6f6057dc645fdb7547689183b2311063bd653ddf"};Class.refactor=function(b,a){$each(a,function(e,d){var c=b.prototype[d];
if(c&&(c=c._origin)&&typeof e=="function"){b.implement(d,function(){var f=this.previous;this.previous=c;var g=e.apply(this,arguments);this.previous=f;return g;
});}else{b.implement(d,e);}});return b;};Class.Occlude=new Class({occlude:function(c,b){b=document.id(b||this.element);var a=b.retrieve(c||this.property);
if(a&&!$defined(this.occluded)){return this.occluded=a;}this.occluded=false;b.store(c||this.property,this);return this.occluded;}});var HtmlTable=new Class({Implements:[Options,Events,Class.Occlude],options:{properties:{cellpadding:0,cellspacing:0,border:0},rows:[],headers:[],footers:[]},property:"HtmlTable",initialize:function(){var a=Array.link(arguments,{options:Object.type,table:Element.type});
this.setOptions(a.options);this.element=a.table||new Element("table",this.options.properties);if(this.occlude()){return this.occluded;}this.build();},build:function(){this.element.store("HtmlTable",this);
this.body=document.id(this.element.tBodies[0])||new Element("tbody").inject(this.element);$$(this.body.rows);if(this.options.headers.length){this.setHeaders(this.options.headers);
}else{this.thead=document.id(this.element.tHead);}if(this.thead){this.head=document.id(this.thead.rows[0]);}if(this.options.footers.length){this.setFooters(this.options.footers);
}this.tfoot=document.id(this.element.tFoot);if(this.tfoot){this.foot=document.id(this.thead.rows[0]);}this.options.rows.each(function(a){this.push(a);},this);
["adopt","inject","wraps","grab","replaces","dispose"].each(function(a){this[a]=this.element[a].bind(this.element);},this);},toElement:function(){return this.element;
},empty:function(){this.body.empty();return this;},set:function(d,a){var c=(d=="headers")?"tHead":"tFoot";this[c.toLowerCase()]=(document.id(this.element[c])||new Element(c.toLowerCase()).inject(this.element,"top")).empty();
var b=this.push(a,{},this[c.toLowerCase()],d=="headers"?"th":"td");if(d=="headers"){this.head=document.id(this.thead.rows[0]);}else{this.foot=document.id(this.thead.rows[0]);
}return b;},setHeaders:function(a){this.set("headers",a);return this;},setFooters:function(a){this.set("footers",a);return this;},push:function(e,b,d,a){var c=e.map(function(h){var i=new Element(a||"td",h.properties),g=h.content||h||"",f=document.id(g);
if($type(g)!="string"&&f){i.adopt(f);}else{i.set("html",g);}return i;});return{tr:new Element("tr",b).inject(d||this.body).adopt(c),tds:c};}});