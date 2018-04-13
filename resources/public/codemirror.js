if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function(Ea,ea){"object"===typeof exports&&"undefined"!==typeof module?module.exports=ea():"function"===typeof define&&define.amd?define(ea):Ea.CodeMirror=ea()})(this,function(){function Ea(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function ea(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function Z(a,b){return ea(a).appendChild(b)}function u(a,b,c,d){a=document.createElement(a);c&&(a.className=c);d&&(a.style.cssText=d);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(c=0;c<b.length;++c)a.appendChild(b[c]);return a}function $a(a,b,c,d){a=u(a,b,c,d);a.setAttribute("role","presentation");return a}function wa(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function sa(){var a;try{a=document.activeElement}catch(b){a=document.body||null}for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;return a}function Fa(a,b){var c=a.className;Ea(b).test(c)||
(a.className+=(c?" ":"")+b)}function Mc(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!Ea(c[d]).test(b)&&(b+=" "+c[d]);return b}function Nc(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Ga(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||!1===c&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function fa(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));d=d||0;for(e=e||0;;){var f=a.indexOf("\t",d);if(0>f||f>=b)return e+
(b-d);e+=f-d;e+=c-e%c;d=f+1}}function L(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function Oc(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("\t",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);e+=f-d;e+=c-e%c;d=f+1;if(e>=b)return d}}function Pc(a){for(;fc.length<=a;)fc.push(z(fc)+" ");return fc[a]}function z(a){return a[a.length-1]}function gc(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function gg(a,b,c){for(var d=0,e=c(b);d<a.length&&
c(a[d])<=e;)d++;a.splice(d,0,b)}function Vd(){}function Wd(a,b){var c;Object.create?c=Object.create(a):(Vd.prototype=a,c=new Vd);b&&Ga(b,c);return c}function Qc(a){return/\w/.test(a)||""<a&&(a.toUpperCase()!=a.toLowerCase()||hg.test(a))}function hc(a,b){return b?-1<b.source.indexOf("\\w")&&Qc(a)?!0:b.test(a):Qc(a)}function Xd(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function Rc(a){return 768<=a.charCodeAt(0)&&ig.test(a)}function Yd(a,b,c){for(;(0>c?0<b:b<a.length)&&Rc(a.charAt(b));)b+=
c;return b}function rb(a,b,c){for(var d=b>c?-1:1;;){if(b==c)return b;var e=(b+c)/2,e=0>d?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:c;a(e)?c=e:b=e+d}}function jg(a,b,c){this.input=c;this.scrollbarFiller=u("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=u("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=$a("div",null,"CodeMirror-code");this.selectionDiv=u("div",null,
null,"position: relative; z-index: 1");this.cursorDiv=u("div",null,"CodeMirror-cursors");this.measure=u("div",null,"CodeMirror-measure");this.lineMeasure=u("div",null,"CodeMirror-measure");this.lineSpace=$a("div",[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var d=$a("div",[this.lineSpace],"CodeMirror-lines");this.mover=u("div",[d],null,"position: relative");this.sizer=u("div",[this.mover],"CodeMirror-sizer");this.sizerWidth=
null;this.heightForcer=u("div",null,null,"position: absolute; height: 30px; width: 1px;");this.gutters=u("div",null,"CodeMirror-gutters");this.lineGutter=null;this.scroller=u("div",[this.sizer,this.heightForcer,this.gutters],"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=u("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");B&&8>D&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);P||xa&&sb||(this.scroller.draggable=!0);a&&(a.appendChild?
a.appendChild(this.wrapper):a(this.wrapper));this.reportedViewFrom=this.reportedViewTo=this.viewFrom=this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=null;this.lastWrapHeight=this.lastWrapWidth=this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=
null;this.maxLineLength=0;this.maxLineChanged=!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;c.init(this)}function t(a,b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(b<f){c=e;break}b-=f}return c.lines[b]}function Ha(a,b,c){var d=[],e=b.line;a.iter(b.line,c.line+1,function(a){a=a.text;e==c.line&&
(a=a.slice(0,c.ch));e==b.line&&(a=a.slice(b.ch));d.push(a);++e});return d}function Sc(a,b,c){var d=[];a.iter(b,c,function(a){d.push(a.text)});return d}function ma(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function C(a){if(null==a.parent)return null;var b=a.parent;a=L(b.lines,a);for(var c=b.parent;c;b=c,c=c.parent)for(var d=0;c.children[d]!=b;++d)a+=c.children[d].chunkSize();return a+b.first}function Ia(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],
f=e.height;if(b<f){a=e;continue a}b-=f;c+=e.chunkSize()}return c}while(!a.lines);for(d=0;d<a.lines.length;++d){e=a.lines[d].height;if(b<e)break;b-=e}return c+d}function tb(a,b){return b>=a.first&&b<a.first+a.size}function Tc(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function p(a,b,c){void 0===c&&(c=null);if(!(this instanceof p))return new p(a,b,c);this.line=a;this.ch=b;this.sticky=c}function y(a,b){return a.line-b.line||a.ch-b.ch}function Uc(a,b){return a.sticky==b.sticky&&0==
y(a,b)}function Vc(a){return p(a.line,a.ch)}function ic(a,b){return 0>y(a,b)?b:a}function jc(a,b){return 0>y(a,b)?a:b}function w(a,b){if(b.line<a.first)return p(a.first,0);var c=a.first+a.size-1;if(b.line>c)return p(c,t(a,c).text.length);var c=t(a,b.line).text.length,d=b.ch,c=null==d||d>c?p(b.line,c):0>d?p(b.line,0):b;return c}function Zd(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=w(a,b[d]);return c}function kc(a,b,c){this.marker=a;this.from=b;this.to=c}function ub(a,b){if(a)for(var c=0;c<a.length;++c){var d=
a[c];if(d.marker==b)return d}}function Wc(a,b){if(b.full)return null;var c=tb(a,b.from.line)&&t(a,b.from.line).markedSpans,d=tb(a,b.to.line)&&t(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==y(b.from,b.to),h;if(c)for(var k=0;k<c.length;++k){var l=c[k],m=l.marker;if(null==l.from||(m.inclusiveLeft?l.from<=e:l.from<e)||!(l.from!=e||"bookmark"!=m.type||g&&l.marker.insertLeft)){var q=null==l.to||(m.inclusiveRight?l.to>=e:l.to>e);(h||(h=[])).push(new kc(m,l.from,q?null:l.to))}}var c=
h,n;if(d)for(h=0;h<d.length;++h)if(k=d[h],l=k.marker,null==k.to||(l.inclusiveRight?k.to>=f:k.to>f)||k.from==f&&"bookmark"==l.type&&(!g||k.marker.insertLeft))m=null==k.from||(l.inclusiveLeft?k.from<=f:k.from<f),(n||(n=[])).push(new kc(l,m?null:k.from-f,null==k.to?null:k.to-f));d=n;f=1==b.text.length;g=z(b.text).length+(f?e:0);if(c)for(n=0;n<c.length;++n)if(h=c[n],null==h.to)(k=ub(d,h.marker),k)?f&&(h.to=null==k.to?null:k.to+g):h.to=e;if(d)for(e=0;e<d.length;++e)n=d[e],null!=n.to&&(n.to+=g),null==n.from?
ub(c,n.marker)||(n.from=g,f&&(c||(c=[])).push(n)):(n.from+=g,f&&(c||(c=[])).push(n));c&&(c=$d(c));d&&d!=c&&(d=$d(d));e=[c];if(!f){var f=b.text.length-2,r;if(0<f&&c)for(g=0;g<c.length;++g)null==c[g].to&&(r||(r=[])).push(new kc(c[g].marker,null,null));for(c=0;c<f;++c)e.push(r);e.push(d)}return e}function $d(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&!1!==c.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?a:null}function kg(a,b,c){var d=null;a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=
0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=L(d,c)||(d||(d=[])).push(c)}});if(!d)return null;a=[{from:b,to:c}];for(b=0;b<d.length;++b){c=d[b];for(var e=c.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>y(g.to,e.from)||0<y(g.from,e.to))){var h=[f,1],k=y(g.from,e.from),l=y(g.to,e.to);(0>k||!c.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!c.inclusiveRight&&!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function ae(a){var b=
a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function be(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function ce(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var c=a.find(),d=b.find(),e=y(c.from,d.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(c=y(c.to,d.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?1:0))?c:b.id-a.id}function Ja(a,b){var c=ya&&a.markedSpans,d;if(c)for(var e=void 0,
f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||0>ce(d,e.marker))&&(d=e.marker);return d}function de(a,b,c,d,e){a=t(a,b);if(a=ya&&a.markedSpans)for(b=0;b<a.length;++b){var f=a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=y(g.from,c)||(f.marker.inclusiveLeft?-1:0)-(e.inclusiveLeft?-1:0),k=y(g.to,d)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0<=y(g.to,c):0<y(g.to,c))||0<=h&&(f.marker.inclusiveRight&&
e.inclusiveLeft?0>=y(g.from,d):0>y(g.from,d))))return!0}}}function na(a){for(var b;b=Ja(a,!0);)a=b.find(-1,!0).line;return a}function Xc(a,b){var c=t(a,b),d=na(c);return c==d?b:C(d)}function ee(a,b){if(b>a.lastLine())return b;var c=t(a,b),d;if(!Ka(a,c))return b;for(;d=Ja(c,!1);)c=d.find(1,!0).line;return C(c)+1}function Ka(a,b){var c=ya&&b.markedSpans;if(c)for(var d=void 0,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed&&(null==d.from||!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&Yc(a,
b,d)))return!0}function Yc(a,b,c){if(null==c.to)return b=c.marker.find(1,!0),Yc(a,b.line,ub(b.line.markedSpans,c.marker));if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var d=void 0,e=0;e<b.markedSpans.length;++e)if(d=b.markedSpans[e],d.marker.collapsed&&!d.marker.widgetNode&&d.from==c.to&&(null==d.to||d.to!=c.from)&&(d.marker.inclusiveLeft||c.marker.inclusiveRight)&&Yc(a,b,d))return!0}function oa(a){a=na(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;
else b+=e.height}for(a=c.parent;a;c=a,a=c.parent)for(d=0;d<a.children.length&&(e=a.children[d],e!=c);++d)b+=e.height;return b}function lc(a){if(0==a.height)return 0;for(var b=a.text.length,c,d=a;c=Ja(d,!0);)c=c.find(0,!0),d=c.from.line,b+=c.from.ch-c.to.ch;for(d=a;c=Ja(d,!1);)a=c.find(0,!0),b-=d.text.length-a.from.ch,d=a.to.line,b+=d.text.length-a.to.ch;return b}function Zc(a){var b=a.display;a=a.doc;b.maxLine=t(a,a.first);b.maxLineLength=lc(b.maxLine);b.maxLineChanged=!0;a.iter(function(a){var d=
lc(a);d>b.maxLineLength&&(b.maxLineLength=d,b.maxLine=a)})}function lg(a,b,c,d){if(!a)return d(b,c,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<c&&g.to>b||b==c&&g.to==b)d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr",f),e=!0}e||d(b,c,"ltr")}function vb(a,b,c){var d;wb=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;f.to==b&&(f.from!=f.to&&"before"==c?d=e:wb=e);f.from==b&&(f.from!=f.to&&"before"!=c?d=e:wb=e)}return null!=d?d:wb}function ta(a,
b){var c=a.order;null==c&&(c=a.order=mg(a.text,b));return c}function aa(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=(a=a._handlers)&&a[b];d&&(c=L(d,c),-1<c&&(a[b]=d.slice(0,c).concat(d.slice(c+1))))}}function F(a,b){var c=a._handlers&&a._handlers[b]||mc;if(c.length)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)}function I(a,b,c){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=
!0}});F(a,c||b.type,a,b);return $c(b)||b.codemirrorIgnore}function fe(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var c=0;c<b.length;++c)-1==L(a,b[c])&&a.push(b[c])}}function ga(a,b){return 0<(a._handlers&&a._handlers[b]||mc).length}function ab(a){a.prototype.on=function(a,c){v(this,a,c)};a.prototype.off=function(a,c){aa(this,a,c)}}function Q(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function ge(a){a.stopPropagation?
a.stopPropagation():a.cancelBubble=!0}function $c(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function xb(a){Q(a);ge(a)}function he(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ha&&a.ctrlKey&&1==b&&(b=3);return b}function ng(a){if(null==ad){var b=u("span","​");Z(a,u("span",[b,document.createTextNode("x")]));0!=a.firstChild.offsetHeight&&(ad=1>=b.offsetWidth&&2<b.offsetHeight&&!(B&&8>D))}a=ad?u("span","​"):u("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");
a.setAttribute("cm-text","");return a}function og(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2));bd[a]=b}function nc(a){if("string"==typeof a&&bb.hasOwnProperty(a))a=bb[a];else if(a&&"string"==typeof a.name&&bb.hasOwnProperty(a.name)){var b=bb[a.name];"string"==typeof b&&(b={name:b});a=Wd(b,a);a.name=b.name}else{if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return nc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return nc("application/json")}return"string"==
typeof a?{name:a}:a||{name:"null"}}function cd(a,b){b=nc(b);var c=bd[b.name];if(!c)return cd(a,"text/plain");c=c(a,b);if(cb.hasOwnProperty(b.name)){var d=cb[b.name],e;for(e in d)d.hasOwnProperty(e)&&(c.hasOwnProperty(e)&&(c["_"+e]=c[e]),c[e]=d[e])}c.name=b.name;b.helperType&&(c.helperType=b.helperType);if(b.modeProps)for(var f in b.modeProps)c[f]=b.modeProps[f];return c}function pg(a,b){var c=cb.hasOwnProperty(a)?cb[a]:cb[a]={};Ga(b,c)}function La(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);
var c={},d;for(d in b){var e=b[d];e instanceof Array&&(e=e.concat([]));c[d]=e}return c}function dd(a,b){for(var c;a.innerMode;){c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state;a=c.mode}return c||{mode:a,state:b}}function ie(a,b,c){return a.startState?a.startState(b,c):!0}function je(a,b,c,d){var e=[a.state.modeGen],f={};ke(a,b.text,a.doc.mode,c,function(a,b){return e.push(a,b)},f,d);var g=c.state;d=function(d){c.baseTokens=e;var h=a.state.overlays[d],m=1,q=0;c.state=!0;ke(a,b.text,h.mode,c,function(a,
b){for(var d=m;q<a;){var c=e[m];c>a&&e.splice(m,1,a,e[m+1],c);m+=2;q=Math.min(a,c)}if(b)if(h.opaque)e.splice(d,m-d,a,"overlay "+b),m=d+2;else for(;d<m;d+=2)c=e[d+1],e[d+1]=(c?c+" ":"")+"overlay "+b},f);c.state=g;c.baseTokens=null;c.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)d(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function le(a,b,c){if(!b.styles||b.styles[0]!=a.state.modeGen){var d=yb(a,C(b)),e=b.text.length>a.options.maxHighlightLength&&La(a.doc.mode,d.state),f=
je(a,b,d);e&&(d.state=e);b.stateAfter=d.save(!e);b.styles=f.styles;f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);c===a.doc.highlightFrontier&&(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function yb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return new pa(d,!0,b);var f=qg(a,b,c),g=f>d.first&&t(d,f-1).stateAfter,h=g?pa.fromSaved(d,g,f):new pa(d,ie(d.mode),f);d.iter(f,b,function(d){ed(a,d.text,h);var c=h.line;d.stateAfter=
c==b-1||0==c%5||c>=e.viewFrom&&c<e.viewTo?h.save():null;h.nextLine()});c&&(d.modeFrontier=h.line);return h}function ed(a,b,c,d){var e=a.doc.mode;a=new G(b,a.options.tabSize,c);a.start=a.pos=d||0;for(""==b&&me(e,c.state);!a.eol();)fd(e,a,c.state),a.start=a.pos}function me(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=dd(a,b);if(c.mode.blankLine)return c.mode.blankLine(c.state)}}function fd(a,b,c,d){for(var e=0;10>e;e++){d&&(d[0]=dd(a,c).mode);var f=a.token(b,c);if(b.pos>b.start)return f}throw Error("Mode "+
a.name+" failed to advance stream.");}function ne(a,b,c,d){var e=a.doc,f=e.mode,g;b=w(e,b);var h=t(e,b.line);c=yb(a,b.line,c);a=new G(h.text,a.options.tabSize,c);var k;for(d&&(k=[]);(d||a.pos<b.ch)&&!a.eol();)a.start=a.pos,g=fd(f,a,c.state),d&&k.push(new oe(a,g,La(e.mode,c.state)));return d?k:new oe(a,g,c.state)}function pe(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?
b[d]=c[2]:(new RegExp("(?:^|s)"+c[2]+"(?:$|s)")).test(b[d])||(b[d]+=" "+c[2])}return a}function ke(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var k=0,l=null,m=new G(b,a.options.tabSize,d),q,n=a.options.addModeClass&&[null];for(""==b&&pe(me(c,d.state),f);!m.eol();){m.pos>a.options.maxHighlightLength?(h=!1,g&&ed(a,b,d,m.pos),m.pos=b.length,q=null):q=pe(fd(c,m,d.state,n),f);if(n){var r=n[0].name;r&&(q="m-"+(q?r+" "+q:r))}if(!h||l!=q){for(;k<m.start;)k=Math.min(m.start,k+
5E3),e(k,l);l=q}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,k+5E3),e(a,l),k=a}function qg(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=f.first)return f.first;var h=t(f,b-1),k=h.stateAfter;if(k&&(!c||b+(k instanceof oc?k.lookAhead:0)<=f.modeFrontier))return b;h=fa(h.text,null,a.options.tabSize);if(null==e||d>h)e=b-1,d=h}return e}function rg(a,b){a.modeFrontier=Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<b-10)){for(var c=a.first,d=b-1;d>c;d--){var e=t(a,
d).stateAfter;if(e&&(!(e instanceof oc)||d+e.lookAhead<b)){c=d+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,c)}}function qe(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?sg:tg;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$\x26"))}function re(a,b){var c=$a("span",null,null,P?"padding-right: .1px":null),c={pre:$a("pre",[c],"CodeMirror-line"),content:c,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:(B||P)&&a.getOption("lineWrapping")};b.measure={};for(var d=0;d<=(b.rest?b.rest.length:
0);d++){var e=d?b.rest[d-1]:b.line,f=void 0;c.pos=0;c.addToken=ug;var g;g=a.display.measure;if(null!=gd)g=gd;else{var h=Z(g,document.createTextNode("AخA")),k=db(h,0,1).getBoundingClientRect(),h=db(h,1,2).getBoundingClientRect();ea(g);g=k&&k.left!=k.right?gd=3>h.right-k.right:!1}g&&(f=ta(e,a.doc.direction))&&(c.addToken=vg(c.addToken,f));c.map=[];g=b!=a.display.externalMeasured&&C(e);a:{f=c;g=le(a,e,g);var l=e.markedSpans,k=e.text,h=0;if(l)for(var m=k.length,q=0,n=1,r="",W=void 0,p=void 0,t=0,u=void 0,
v=void 0,y=void 0,w=void 0,R=void 0;;){if(t==q){for(var u=v=y=w=p="",R=null,t=Infinity,A=[],X=void 0,z=0;z<l.length;++z){var M=l[z],x=M.marker;"bookmark"==x.type&&M.from==q&&x.widgetNode?A.push(x):M.from<=q&&(null==M.to||M.to>q||x.collapsed&&M.to==q&&M.from==q)?(null!=M.to&&M.to!=q&&t>M.to&&(t=M.to,v=""),x.className&&(u+=" "+x.className),x.css&&(p=(p?p+";":"")+x.css),x.startStyle&&M.from==q&&(y+=" "+x.startStyle),x.endStyle&&M.to==t&&(X||(X=[])).push(x.endStyle,M.to),x.title&&!w&&(w=x.title),x.collapsed&&
(!R||0>ce(R.marker,x))&&(R=M)):M.from>q&&t>M.from&&(t=M.from)}if(X)for(z=0;z<X.length;z+=2)X[z+1]==t&&(v+=" "+X[z]);if(!R||R.from==q)for(X=0;X<A.length;++X)se(f,0,A[X]);if(R&&(R.from||0)==q){se(f,(null==R.to?m+1:R.to)-q,R.marker,null==R.from);if(null==R.to)break a;R.to==q&&(R=!1)}}if(q>=m)break;for(A=Math.min(m,t);;){if(r){X=q+r.length;R||(z=X>A?r.slice(0,A-q):r,f.addToken(f,z,W?W+u:u,y,q+z.length==t?v:"",w,p));if(X>=A){r=r.slice(A-q);q=A;break}q=X;y=""}r=k.slice(h,h=g[n++]);W=qe(g[n++],f.cm.options)}}else for(l=
1;l<g.length;l+=2)f.addToken(f,k.slice(h,h=g[l]),qe(g[l+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(c.bgClass=Mc(e.styleClasses.bgClass,c.bgClass||"")),e.styleClasses.textClass&&(c.textClass=Mc(e.styleClasses.textClass,c.textClass||"")));0==c.map.length&&c.map.push(0,0,c.content.appendChild(ng(a.display.measure)));0==d?(b.measure.map=c.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(c.map),(b.measure.caches||(b.measure.caches=[])).push({}))}P&&(d=c.content.lastChild,
/\bcm-tab\b/.test(d.className)||d.querySelector&&d.querySelector(".cm-tab"))&&(c.content.className="cm-tab-wrap-hack");F(a,"renderLine",a,b.line,c.pre);c.pre.className&&(c.textClass=Mc(c.pre.className,c.textClass||""));return c}function wg(a){var b=u("span","•","cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);b.setAttribute("aria-label",b.title);return b}function ug(a,b,c,d,e,f,g){if(b){var h;if(a.splitSpaces)if(h=a.trailingSpace,1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=
b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m=" ");k+=m;h=" "==m}h=k}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var q=0;;){l.lastIndex=q;var n=l.exec(b),r=n?n.index-q:b.length-q;if(r){var W=document.createTextNode(k.slice(q,q+r));B&&9>D?h.appendChild(u("span",[W])):h.appendChild(W);a.map.push(a.pos,a.pos+r,W);a.col+=r;a.pos+=r}if(!n)break;q+=r+1;r=void 0;"\t"==n[0]?(n=a.cm.options.tabSize,n-=a.col%n,r=h.appendChild(u("span",
Pc(n),"cm-tab")),r.setAttribute("role","presentation"),r.setAttribute("cm-text","\t"),a.col+=n):("\r"==n[0]||"\n"==n[0]?(r=h.appendChild(u("span","\r"==n[0]?"␍":"␤","cm-invalidchar")),r.setAttribute("cm-text",n[0])):(r=a.cm.options.specialCharPlaceholder(n[0]),r.setAttribute("cm-text",n[0]),B&&9>D?h.appendChild(u("span",[r])):h.appendChild(r)),a.col+=1);a.map.push(a.pos,a.pos+1,r);a.pos++}}else a.col+=b.length,h=document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),B&&9>D&&(m=!0),a.pos+=b.length;
a.trailingSpace=32==k.charCodeAt(b.length-1);if(c||d||e||m||g)return b=c||"",d&&(b+=d),e&&(b+=e),d=u("span",[h],b,g),f&&(d.title=f),a.content.appendChild(d);a.content.appendChild(h)}}function vg(a,b){return function(c,d,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=c.pos,m=l+d.length;;){for(var q=void 0,n=0;n<b.length&&!(q=b[n],q.to>l&&q.from<=l);n++);if(q.to>=m)return a(c,d,e,f,g,h,k);a(c,d.slice(0,q.to-l),e,f,null,h,k);f=null;d=d.slice(q.to-l);l=q.to}}}function se(a,b,c,d){var e=
!d&&c.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!d&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",c.id));e&&(a.cm.display.input.setUneditable(e),a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function te(a,b,c){for(var d=this.line=b,e;d=Ja(d,!1);)d=d.find(1,!0).line,(e||(e=[])).push(d);this.size=(this.rest=e)?C(z(this.rest))-c+1:1;this.node=this.text=null;this.hidden=Ka(a,b)}function pc(a,b,c){var d=[],e;for(e=
b;e<c;)b=new te(a.doc,t(a.doc,e),e),e+=b.size,d.push(b);return d}function xg(a,b){var c=a.ownsGroup;if(c)try{var d=c.delayedCallbacks,e=0;do{for(;e<d.length;e++)d[e].call(null);for(var f=0;f<c.ops.length;f++){var g=c.ops[f];if(g.cursorActivityHandlers)for(;g.cursorActivityCalled<g.cursorActivityHandlers.length;)g.cursorActivityHandlers[g.cursorActivityCalled++].call(null,g.cm)}}while(e<d.length)}finally{eb=null,b(c)}}function N(a,b){var c=a._handlers&&a._handlers[b]||mc;if(c.length){var d=Array.prototype.slice.call(arguments,
2),e;eb?e=eb.delayedCallbacks:zb?e=zb:(e=zb=[],setTimeout(yg,0));for(var f=function(a){e.push(function(){return c[a].apply(null,d)})},g=0;g<c.length;++g)f(g)}}function yg(){var a=zb;zb=null;for(var b=0;b<a.length;++b)a[b]()}function ue(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){var f=a,g=b,h=g.text.className,k=ve(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=
k.bgClass,g.textClass=k.textClass,hd(f,g)):h&&(g.text.className=h)}else if("gutter"==f)we(a,b,c,d);else if("class"==f)hd(a,b);else if("widget"==f){f=a;g=b;h=d;g.alignable&&(g.alignable=null);for(var k=g.node.firstChild,l=void 0;k;k=l)l=k.nextSibling,"CodeMirror-linewidget"==k.className&&g.node.removeChild(k);xe(f,g,h)}}b.changes=null}function Ab(a){a.node==a.text&&(a.node=u("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),
B&&8>D&&(a.node.style.zIndex=2));return a.node}function ve(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):re(a,b)}function hd(a,b){var c=b.bgClass?b.bgClass+" "+(b.line.bgClass||""):b.line.bgClass;c&&(c+=" CodeMirror-linebackground");if(b.background)c?b.background.className=c:(b.background.parentNode.removeChild(b.background),b.background=null);else if(c){var d=Ab(b);b.background=d.insertBefore(u("div",null,c),d.firstChild);
a.display.input.setUneditable(b.background)}b.line.wrapClass?Ab(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function we(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null);if(b.line.gutterClass){var e=Ab(b);b.gutterBackground=u("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,
"left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px; width: "+d.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=Ab(b),g=b.gutter=u("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||
e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(u("div",Tc(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px")));if(e)for(b=0;b<a.options.gutters.length;++b)c=a.options.gutters[b],(f=e.hasOwnProperty(c)&&e[c])&&g.appendChild(u("div",[f],"CodeMirror-gutter-elt","left: "+d.gutterLeft[c]+"px; width: "+d.gutterWidth[c]+"px"))}}function zg(a,b,c,d){var e=ve(a,b);b.text=b.node=e.pre;e.bgClass&&
(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);hd(a,b);we(a,b,c,d);xe(a,b,d);return b.node}function xe(a,b,c){ye(a,b.line,b,c,!0);if(b.rest)for(var d=0;d<b.rest.length;d++)ye(a,b.rest[d],b,c,!1)}function ye(a,b,c,d,e){if(b.widgets){var f=Ab(c),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=u("div",[h.node],"CodeMirror-linewidget");h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,q=d;if(l.noHScroll){(c.alignable||(c.alignable=[])).push(m);var n=q.wrapperWidth;
m.style.left=q.fixedPos+"px";l.coverGutter||(n-=q.gutterTotalWidth,m.style.paddingLeft=q.gutterTotalWidth+"px");m.style.width=n+"px"}l.coverGutter&&(m.style.zIndex=5,m.style.position="relative",l.noHScroll||(m.style.marginLeft=-q.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,c.gutter||c.text):f.appendChild(k);N(h,"redraw")}}}function Bb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!wa(document.body,a.node)){var c="position: relative;";
a.coverGutter&&(c+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(c+="width: "+b.display.wrapper.clientWidth+"px;");Z(b.display.measure,u("div",[a.node],null,c))}return a.height=a.node.parentNode.offsetHeight}function ua(a,b){for(var c=b.target||b.srcElement;c!=a.wrapper;c=c.parentNode)if(!c||1==c.nodeType&&"true"==c.getAttribute("cm-ignore-events")||c.parentNode==a.sizer&&c!=a.mover)return!0}function id(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function ze(a){if(a.cachedPaddingH)return a.cachedPaddingH;
var b=Z(a.measure,u("pre","x")),b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,b={left:parseInt(b.paddingLeft),right:parseInt(b.paddingRight)};isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function qa(a){return 30-a.display.nativeBarWidth}function Ma(a){return a.display.scroller.clientWidth-qa(a)-a.display.barWidth}function jd(a){return a.display.scroller.clientHeight-qa(a)-a.display.barHeight}function Ae(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};
for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(b=0;b<a.rest.length;b++)if(C(a.rest[b])>c)return{map:a.measure.maps[b],cache:a.measure.caches[b],before:!0}}function kd(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[Na(a,b)];var c=a.display.externalMeasured;if(c&&b>=c.lineN&&b<c.lineN+c.size)return c}function Oa(a,b){var c=C(b),d=kd(a,c);d&&!d.text?d=null:d&&d.changes&&(ue(a,d,c,ld(a)),a.curOp.forceUpdate=!0);if(!d){var e;
e=na(b);d=C(e);e=a.display.externalMeasured=new te(a.doc,e,d);e.lineN=d;d=e.built=re(a,e);e.text=d.pre;Z(a.display.lineMeasure,d.pre);d=e}c=Ae(d,b,c);return{line:b,view:d,rect:null,map:c.map,cache:c.cache,before:c.before,hasHeights:!1}}function ia(a,b,c,d,e){b.before&&(c=-1);var f=c+(d||"");if(b.cache.hasOwnProperty(f))a=b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&Ma(a);if(!g.measure.heights||k&&g.measure.width!=
l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),k=0;k<g.length-1;k++){var l=g[k],q=g[k+1];2<Math.abs(l.bottom-q.bottom)&&m.push((l.bottom+q.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=d;g=Be(b.map,c,m);d=g.node;h=g.start;k=g.end;c=g.collapse;var n;if(3==d.nodeType){for(var r=0;4>r;r++){for(;h&&Rc(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&Rc(b.line.text.charAt(g.coverStart+k));)++k;if(B&&9>D&&0==h&&k==g.coverEnd-
g.coverStart)n=d.parentNode.getBoundingClientRect();else{n=db(d,h,k).getClientRects();k=Ce;if("left"==m)for(l=0;l<n.length&&(k=n[l]).left==k.right;l++);else for(l=n.length-1;0<=l&&(k=n[l]).left==k.right;l--);n=k}if(n.left||n.right||0==h)break;k=h;--h;c="right"}B&&11>D&&((r=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI)||(null!=md?r=md:(m=Z(a.display.measure,u("span","x")),r=m.getBoundingClientRect(),m=db(m,0,1).getBoundingClientRect(),r=md=1<Math.abs(r.left-m.left)),
r=!r),r||(r=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,n={left:n.left*r,right:n.right*r,top:n.top*m,bottom:n.bottom*m}))}else 0<h&&(c=m="right"),n=a.options.lineWrapping&&1<(r=d.getClientRects()).length?r["right"==m?r.length-1:0]:d.getBoundingClientRect();!(B&&9>D)||h||n&&(n.left||n.right)||(n=(n=d.parentNode.getClientRects()[0])?{left:n.left,right:n.left+Cb(a.display),top:n.top,bottom:n.bottom}:Ce);d=n.top-b.rect.top;h=n.bottom-b.rect.top;r=(d+h)/2;m=b.view.measure.heights;
for(g=0;g<m.length-1&&!(r<m[g]);g++);c={left:("right"==c?n.right:n.left)-b.rect.left,right:("left"==c?n.left:n.right)-b.rect.left,top:g?m[g-1]:0,bottom:m[g]};n.left||n.right||(c.bogus=!0);a.options.singleCursorHeightPerLine||(c.rtop=d,c.rbottom=h);a=c;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}function Be(a,b,c){for(var d,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-
3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){d=a[l+2];h==k&&c==(d.insertLeft?"left":"right")&&(g=c);if("left"==c&&0==e)for(;l&&a[l-2]==a[l-3]&&a[l-1].insertLeft;)d=a[(l-=3)+2],g="left";if("right"==c&&e==k-h)for(;l<a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)d=a[(l+=3)+2],g="right";break}}return{node:d,start:e,end:f,collapse:g,coverStart:h,coverEnd:k}}function De(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]=
{}}function Ee(a){a.display.externalMeasure=null;ea(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)De(a.display.view[b])}function Db(a){Ee(a);a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function Fe(){return qc&&rc?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}
function Ge(){return qc&&rc?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function nd(a){var b=0;if(a.widgets)for(var c=0;c<a.widgets.length;++c)a.widgets[c].above&&(b+=Bb(a.widgets[c]));return b}function sc(a,b,c,d,e){e||(e=nd(b),c.top+=e,c.bottom+=e);if("line"==d)return c;d||(d="local");b=oa(b);b="local"==d?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==d||
"window"==d)a=a.display.lineSpace.getBoundingClientRect(),b+=a.top+("window"==d?0:Ge()),d=a.left+("window"==d?0:Fe()),c.left+=d,c.right+=d;c.top+=b;c.bottom+=b;return c}function He(a,b,c){if("div"==c)return b;var d=b.left;b=b.top;"page"==c?(d-=Fe(),b-=Ge()):"local"!=c&&c||(c=a.display.sizer.getBoundingClientRect(),d+=c.left,b+=c.top);a=a.display.lineSpace.getBoundingClientRect();return{left:d-a.left,top:b-a.top}}function od(a,b,c,d,e){d||(d=t(a.doc,b.line));var f=d;b=b.ch;d=ia(a,Oa(a,d),b,e);return sc(a,
f,d,c)}function ja(a,b,c,d,e,f){function g(b,g){var h=ia(a,e,b,g?"right":"left",f);g?h.left=h.right:h.right=h.left;return sc(a,d,h,c)}function h(a,b,d){return g(d?a-1:a,1==k[b].level!=d)}d=d||t(a.doc,b.line);e||(e=Oa(a,d));var k=ta(d,a.doc.direction),l=b.ch;b=b.sticky;l>=d.text.length?(l=d.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==b);var m=vb(k,l,b),q=wb,m=h(l,m,"before"==b);null!=q&&(m.other=h(l,q,"before"!=b));return m}function Ie(a,b){var c=0;b=w(a.doc,
b);a.options.lineWrapping||(c=Cb(a.display)*b.ch);var d=t(a.doc,b.line),e=oa(d)+a.display.lineSpace.offsetTop;return{left:c,right:c,top:e,bottom:e+d.height}}function pd(a,b,c,d,e){a=p(a,b,c);a.xRel=e;d&&(a.outside=!0);return a}function qd(a,b,c){var d=a.doc;c+=a.display.viewOffset;if(0>c)return pd(d.first,0,null,!0,-1);var e=Ia(d,c),f=d.first+d.size-1;if(e>f)return pd(d.first+d.size-1,t(d,f).text.length,null,!0,1);0>b&&(b=0);for(d=t(d,e);;)if(e=Ag(a,d,e,b,c),f=(d=Ja(d,!1))&&d.find(0,!0),d&&(e.ch>
f.from.ch||e.ch==f.from.ch&&0<e.xRel))e=C(d=f.to.line);else return e}function Je(a,b,c,d){d-=nd(b);b=b.text.length;var e=rb(function(b){return ia(a,c,b-1).bottom<=d},b,0);b=rb(function(b){return ia(a,c,b).top>d},e,b);return{begin:e,end:b}}function Ke(a,b,c,d){c||(c=Oa(a,b));d=sc(a,b,ia(a,c,d),"line").top;return Je(a,b,c,d)}function rd(a,b,c,d){return a.bottom<=c?!1:a.top>c?!0:(d?a.left:a.right)>b}function Ag(a,b,c,d,e){e-=oa(b);var f=Oa(a,b),g=nd(b),h=0,k=b.text.length,l=!0,m=ta(b,a.doc.direction);
m&&(m=(a.options.lineWrapping?Bg:Cg)(a,b,c,f,m,d,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var q=null,n=null,m=rb(function(b){var c=ia(a,f,b);c.top+=g;c.bottom+=g;if(!rd(c,d,e,!1))return!1;c.top<=e&&c.left<=d&&(q=b,n=c);return!0},h,k),r=!1;n?(h=d-n.left<n.right-d,l=h==l,m=q+(l?0:1),l=l?"after":"before",h=h?n.left:n.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":ia(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",r=ja(a,p(c,m,l),"line",b,f),h=r.left,r=e<r.top||e>=r.bottom);
m=Yd(b.text,m,1);return pd(c,m,l,r,d-h)}function Cg(a,b,c,d,e,f,g){var h=rb(function(h){h=e[h];var k=1!=h.level;return rd(ja(a,p(c,k?h.to:h.from,k?"before":"after"),"line",b,d),f,g,!0)},0,e.length-1),k=e[h];if(0<h){var l=1!=k.level,l=ja(a,p(c,l?k.from:k.to,l?"after":"before"),"line",b,d);rd(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Bg(a,b,c,d,e,f,g){g=Je(a,b,d,g);c=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=b=null,k=0;k<e.length;k++){var l=e[k];if(!(l.from>=g||l.to<=c)){var m=
ia(a,d,1!=l.level?Math.min(g,l.to)-1:Math.max(c,l.from)).right,m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<c&&(b={from:c,to:b.to,level:b.level});b.to>g&&(b={from:b.from,to:g,level:b.level});return b}function Pa(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==Qa){Qa=u("pre");for(var b=0;49>b;++b)Qa.appendChild(document.createTextNode("x")),Qa.appendChild(u("br"));Qa.appendChild(document.createTextNode("x"))}Z(a.measure,Qa);b=Qa.offsetHeight/50;3<b&&(a.cachedTextHeight=
b);ea(a.measure);return b||1}function Cb(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=u("span","xxxxxxxxxx"),c=u("pre",[b]);Z(a.measure,c);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function ld(a){for(var b=a.display,c={},d={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g)c[a.options.gutters[g]]=f.offsetLeft+f.clientLeft+e,d[a.options.gutters[g]]=f.clientWidth;return{fixedPos:sd(b),gutterTotalWidth:b.gutters.offsetWidth,
gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function sd(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function Le(a){var b=Pa(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/Cb(a.display)-3);return function(e){if(Ka(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function td(a){var b=
a.doc,c=Le(a);b.iter(function(a){var b=c(a);b!=a.height&&ma(a,b)})}function Ra(a,b,c,d){var e=a.display;if(!c&&"true"==(b.target||b.srcElement).getAttribute("cm-not-content"))return null;var f,g;c=e.lineSpace.getBoundingClientRect();try{f=b.clientX-c.left,g=b.clientY-c.top}catch(k){return null}b=qd(a,f,g);var h;d&&1==b.xRel&&(h=t(a.doc,b.line).text).length==b.ch&&(d=fa(h,h.length,a.options.tabSize)-h.length,b=p(b.line,Math.max(0,Math.round((f-ze(a.display).left)/Cb(a.display))-d)));return b}function Na(a,
b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function Eb(a){a.display.input.showSelection(a.display.input.prepareSelection())}function Me(a,b){void 0===b&&(b=!0);for(var c=a.doc,d={},e=d.cursors=document.createDocumentFragment(),f=d.selection=document.createDocumentFragment(),g=0;g<c.sel.ranges.length;g++)if(b||g!=c.sel.primIndex){var h=c.sel.ranges[g];if(!(h.from().line>=a.display.viewTo||h.to().line<
a.display.viewFrom)){var k=h.empty();(k||a.options.showCursorWhenSelecting)&&Ne(a,h.head,e);k||Dg(a,h,f)}}return d}function Ne(a,b,c){b=ja(a,b,"div",null,null,!a.options.singleCursorHeightPerLine);var d=c.appendChild(u("div"," ","CodeMirror-cursor"));d.style.left=b.left+"px";d.style.top=b.top+"px";d.style.height=Math.max(0,b.bottom-b.top)*a.options.cursorHeight+"px";b.other&&(a=c.appendChild(u("div"," ","CodeMirror-cursor CodeMirror-secondarycursor")),a.style.display="",a.style.left=b.other.left+
"px",a.style.top=b.other.top+"px",a.style.height=.85*(b.other.bottom-b.other.top)+"px")}function tc(a,b){return a.top-b.top||a.left-b.left}function Dg(a,b,c){function d(a,b,c,d){0>b&&(b=0);b=Math.round(b);d=Math.round(d);h.appendChild(u("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px;\n                             top: "+b+"px; width: "+(null==c?m-a:c)+"px;\n                             height: "+(d-b)+"px"))}function e(b,c,e){function f(c,d){return od(a,p(b,c),"div",k,d)}function h(b,
c,d){b=Ke(a,k,null,b);c="ltr"==c==("after"==d)?"left":"right";d="after"==d?b.begin:b.end-(/\s/.test(k.text.charAt(b.end-1))?2:1);return f(d,c)[c]}var k=t(g,b),n=k.text.length,u,v,y=ta(k,g.direction);lg(y,c||0,null==e?n:e,function(a,b,g,k){var r="ltr"==g,p=f(a,r?"left":"right"),t=f(b-1,r?"right":"left"),w=null==c&&0==a,x=null==e&&b==n,z=0==k;k=!y||k==y.length-1;3>=t.top-p.top?(b=(q?w:x)&&z?l:(r?p:t).left,d(b,p.top,((q?x:w)&&k?m:(r?t:p).right)-b,p.bottom)):(r?(r=q&&w&&z?l:p.left,w=q?m:h(a,g,"before"),
a=q?l:h(b,g,"after"),x=q&&x&&k?m:t.right):(r=q?h(a,g,"before"):l,w=!q&&w&&z?m:p.right,a=!q&&x&&k?l:t.left,x=q?h(b,g,"after"):m),d(r,p.top,w-r,p.bottom),p.bottom<t.top&&d(l,p.bottom,null,t.top),d(a,t.top,x-a,t.bottom));if(!u||0>tc(p,u))u=p;0>tc(t,u)&&(u=t);if(!v||0>tc(p,v))v=p;0>tc(t,v)&&(v=t)});return{start:u,end:v}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=ze(a.display),l=k.left,m=Math.max(f.sizerWidth,Ma(a)-f.sizer.offsetLeft)-k.right,q="ltr"==g.direction,f=b.from();b=b.to();
if(f.line==b.line)e(f.line,f.ch,b.ch);else{var n=t(g,f.line),k=t(g,b.line),k=na(n)==na(k),f=e(f.line,f.ch,k?n.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(d(f.right,f.top,null,f.bottom),d(l,b.top,b.left,b.bottom)):d(f.right,f.top,b.left-f.right,f.bottom));f.bottom<b.top&&d(l,f.bottom,null,b.top)}c.appendChild(h)}function ud(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?b.blinker=setInterval(function(){return b.cursorDiv.style.visibility=
(c=!c)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function Oe(a){a.state.focused||(a.display.input.focus(),vd(a))}function Pe(a){a.state.delayingBlurEvent=!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,Fb(a))},100)}function vd(a,b){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(F(a,"focus",a,b),a.state.focused=!0,Fa(a.display.wrapper,"CodeMirror-focused"),
a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),P&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),ud(a))}function Fb(a,b){a.state.delayingBlurEvent||(a.state.focused&&(F(a,"blur",a,b),a.state.focused=!1,Sa(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function uc(a){a=a.display;for(var b=a.lineDiv.offsetTop,c=0;c<a.view.length;c++){var d=
a.view[c],e=void 0;if(!d.hidden){if(B&&8>D)var f=d.node.offsetTop+d.node.offsetHeight,e=f-b,b=f;else e=d.node.getBoundingClientRect(),e=e.bottom-e.top;f=d.line.height-e;2>e&&(e=Pa(a));if(.005<f||-.005>f)if(ma(d.line,e),Qe(d.line),d.rest)for(e=0;e<d.rest.length;e++)Qe(d.rest[e])}}}function Qe(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.parentNode.offsetHeight}function wd(a,b,c){var d=c&&null!=c.top?Math.max(0,c.top):a.scroller.scrollTop,d=Math.floor(d-a.lineSpace.offsetTop),
e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,d=Ia(b,d),e=Ia(b,e);if(c&&c.ensure){var f=c.ensure.from.line;c=c.ensure.to.line;f<d?(d=f,e=Ia(b,oa(t(b,f))+a.wrapper.clientHeight)):Math.min(c,b.lastLine())>=e&&(d=Ia(b,oa(t(b,c))-a.wrapper.clientHeight),e=c)}return{from:d,to:Math.max(e,d+1)}}function Re(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=sd(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&
(c[g].gutter&&(c[g].gutter.style.left=f),c[g].gutterBackground&&(c[g].gutterBackground.style.left=f));var h=c[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function Se(a){if(!a.options.lineNumbers)return!1;var b=a.doc,b=Tc(a.options,b.first+b.size-1),c=a.display;if(b.length!=c.lineNumChars){var d=c.measure.appendChild(u("div",[u("div",b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),e=d.firstChild.offsetWidth,d=d.offsetWidth-
e;c.lineGutter.style.width="";c.lineNumInnerWidth=Math.max(e,c.lineGutter.offsetWidth-d)+1;c.lineNumWidth=c.lineNumInnerWidth+d;c.lineNumChars=c.lineNumInnerWidth?b.length:-1;c.lineGutter.style.width=c.lineNumWidth+"px";xd(a);return!0}return!1}function yd(a,b){var c=a.display,d=Pa(a.display);0>b.top&&(b.top=0);var e=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:c.scroller.scrollTop,f=jd(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=a.doc.height+id(c),k=b.top<d,d=b.bottom>h-d;b.top<e?g.scrollTop=
k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(d?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:c.scroller.scrollLeft;c=Ma(a)-(a.options.fixedGutter?c.gutters.offsetWidth:0);if(f=b.right-b.left>c)b.right=b.left+c;10>b.left?g.scrollLeft=0:b.left<e?g.scrollLeft=Math.max(0,b.left-(f?0:10)):b.right>c+e-3&&(g.scrollLeft=b.right+(f?0:10)-c);return g}function vc(a,b){null!=b&&(wc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+b)}
function fb(a){wc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Gb(a,b,c){null==b&&null==c||wc(a);null!=b&&(a.curOp.scrollLeft=b);null!=c&&(a.curOp.scrollTop=c)}function wc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=Ie(a,b.from),d=Ie(a,b.to);Te(a,c,d,b.margin)}}function Te(a,b,c,d){b=yd(a,{left:Math.min(b.left,c.left),top:Math.min(b.top,c.top)-d,right:Math.max(b.right,c.right),bottom:Math.max(b.bottom,c.bottom)+d});Gb(a,
b.scrollLeft,b.scrollTop)}function Hb(a,b){2>Math.abs(a.doc.scrollTop-b)||(xa||zd(a,{top:b}),Ue(a,b,!0),xa&&zd(a),Ib(a,100))}function Ue(a,b,c){b=Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b);if(a.display.scroller.scrollTop!=b||c)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),a.display.scroller.scrollTop!=b&&(a.display.scroller.scrollTop=b)}function Ta(a,b,c,d){b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth);(c?b==a.doc.scrollLeft:
2>Math.abs(a.doc.scrollLeft-b))&&!d||(a.doc.scrollLeft=b,Re(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Jb(a){var b=a.display,c=b.gutters.offsetWidth,d=Math.round(a.doc.height+id(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?c:0,docHeight:d,scrollHeight:d+
qa(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:c}}function gb(a,b){b||(b=Jb(a));var c=a.display.barWidth,d=a.display.barHeight;Ve(a,b);for(var e=0;4>e&&c!=a.display.barWidth||d!=a.display.barHeight;e++)c!=a.display.barWidth&&a.options.lineWrapping&&uc(a),Ve(a,Jb(a)),c=a.display.barWidth,d=a.display.barHeight}function Ve(a,b){var c=a.display,d=c.scrollbars.update(b);c.sizer.style.paddingRight=(c.barWidth=d.right)+"px";c.sizer.style.paddingBottom=(c.barHeight=d.bottom)+"px";c.heightForcer.style.borderBottom=
d.bottom+"px solid transparent";d.right&&d.bottom?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=d.bottom+"px",c.scrollbarFiller.style.width=d.right+"px"):c.scrollbarFiller.style.display="";d.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=d.bottom+"px",c.gutterFiller.style.width=b.gutterWidth+"px"):c.gutterFiller.style.display=""}function We(a){a.display.scrollbars&&(a.display.scrollbars.clear(),
a.display.scrollbars.addClass&&Sa(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new Xe[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);v(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},0)});b.setAttribute("cm-not-content","true")},function(b,c){"horizontal"==c?Ta(a,b):Hb(a,b)},a);a.display.scrollbars.addClass&&Fa(a.display.wrapper,a.display.scrollbars.addClass)}function Ua(a){a.curOp=
{cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Eg};a=a.curOp;eb?eb.ops.push(a):a.ownsGroup=eb={ops:[a],delayedCallbacks:[]}}function Va(a){xg(a.curOp,function(a){for(var c=0;c<a.ops.length;c++)a.ops[c].cm.curOp=null;a=a.ops;for(c=0;c<a.length;c++){var d=a[c],e=d.cm,f=e.display,g=e.display;!g.scrollbarsClipped&&
g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=qa(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=qa(e)+"px",g.scrollbarsClipped=!0);d.updateMaxLine&&Zc(e);d.mustUpdate=d.viewChanged||d.forceUpdate||null!=d.scrollTop||d.scrollToPos&&(d.scrollToPos.from.line<f.viewFrom||d.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;d.update=d.mustUpdate&&new xc(e,d.mustUpdate&&
{top:d.scrollTop,ensure:d.scrollToPos},d.forceUpdate)}for(c=0;c<a.length;c++)d=a[c],d.updatedDisplay=d.mustUpdate&&Ad(d.cm,d.update);for(c=0;c<a.length;c++)if(d=a[c],e=d.cm,f=e.display,d.updatedDisplay&&uc(e),d.barMeasure=Jb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=void 0,g=f.maxLine.text.length,g=ia(e,Oa(e,f.maxLine),g,void 0),d.adjustWidthTo=g.left+3,e.display.sizerWidth=d.adjustWidthTo,d.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+d.adjustWidthTo+qa(e)+e.display.barWidth),
d.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+d.adjustWidthTo-Ma(e))),d.updatedDisplay||d.selectionChanged)d.preparedSelection=f.input.prepareSelection();for(c=0;c<a.length;c++)d=a[c],e=d.cm,null!=d.adjustWidthTo&&(e.display.sizer.style.minWidth=d.adjustWidthTo+"px",d.maxScrollLeft<e.doc.scrollLeft&&Ta(e,Math.min(e.display.scroller.scrollLeft,d.maxScrollLeft),!0),e.display.maxLineChanged=!1),f=d.focus&&d.focus==sa(),d.preparedSelection&&e.display.input.showSelection(d.preparedSelection,f),(d.updatedDisplay||
d.startHeight!=e.doc.height)&&gb(e,d.barMeasure),d.updatedDisplay&&Bd(e,d.barMeasure),d.selectionChanged&&ud(e),e.state.focused&&d.updateInput&&e.display.input.reset(d.typing),f&&Oe(d.cm);for(c=0;c<a.length;c++){d=a[c];e=d.cm;f=e.display;g=e.doc;d.updatedDisplay&&Ye(e,d.update);null==f.wheelStartX||null==d.scrollTop&&null==d.scrollLeft&&!d.scrollToPos||(f.wheelStartX=f.wheelStartY=null);null!=d.scrollTop&&Ue(e,d.scrollTop,d.forceScroll);null!=d.scrollLeft&&Ta(e,d.scrollLeft,!0,!0);if(d.scrollToPos){var h=
w(g,d.scrollToPos.from),k=w(g,d.scrollToPos.to),l=d.scrollToPos.margin;null==l&&(l=0);var m=void 0;e.options.lineWrapping||h!=k||(h=h.ch?p(h.line,"before"==h.sticky?h.ch-1:h.ch,"after"):h,k="before"==h.sticky?p(h.line,h.ch+1,"before"):h);for(var q=0;5>q;q++){var n=!1,m=ja(e,h),r=k&&k!=h?ja(e,k):m,m={left:Math.min(m.left,r.left),top:Math.min(m.top,r.top)-l,right:Math.max(m.left,r.left),bottom:Math.max(m.bottom,r.bottom)+l},r=yd(e,m),W=e.doc.scrollTop,t=e.doc.scrollLeft;null!=r.scrollTop&&(Hb(e,r.scrollTop),
1<Math.abs(e.doc.scrollTop-W)&&(n=!0));null!=r.scrollLeft&&(Ta(e,r.scrollLeft),1<Math.abs(e.doc.scrollLeft-t)&&(n=!0));if(!n)break}k=m;I(e,"scrollCursorIntoView")||(l=e.display,q=l.sizer.getBoundingClientRect(),h=null,0>k.top+q.top?h=!0:k.bottom+q.top>(window.innerHeight||document.documentElement.clientHeight)&&(h=!1),null==h||Fg||(k=u("div","​",null,"position: absolute;\n                         top: "+(k.top-l.viewOffset-e.display.lineSpace.offsetTop)+"px;\n                         height: "+(k.bottom-
k.top+qa(e)+l.barHeight)+"px;\n                         left: "+k.left+"px; width: "+Math.max(2,k.right-k.left)+"px;"),e.display.lineSpace.appendChild(k),k.scrollIntoView(h),e.display.lineSpace.removeChild(k)))}k=d.maybeHiddenMarkers;h=d.maybeUnhiddenMarkers;if(k)for(l=0;l<k.length;++l)k[l].lines.length||F(k[l],"hide");if(h)for(k=0;k<h.length;++k)h[k].lines.length&&F(h[k],"unhide");f.wrapper.offsetHeight&&(g.scrollTop=e.display.scroller.scrollTop);d.changeObjs&&F(e,"changes",e,d.changeObjs);d.update&&
d.update.finish()}})}function Y(a,b){if(a.curOp)return b();Ua(a);try{return b()}finally{Va(a)}}function J(a,b){return function(){if(a.curOp)return b.apply(a,arguments);Ua(a);try{return b.apply(a,arguments)}finally{Va(a)}}}function S(a){return function(){if(this.curOp)return a.apply(this,arguments);Ua(this);try{return a.apply(this,arguments)}finally{Va(this)}}}function K(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);Ua(b);try{return a.apply(this,arguments)}finally{Va(b)}}}
function U(a,b,c,d){null==b&&(b=a.doc.first);null==c&&(c=a.doc.first+a.doc.size);d||(d=0);var e=a.display;d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=!0;if(b>=e.viewTo)ya&&Xc(a.doc,b)<e.viewTo&&za(a);else if(c<=e.viewFrom)ya&&ee(a.doc,c+d)>e.viewFrom?za(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)za(a);else if(b<=e.viewFrom){var f=yc(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):za(a)}else if(c>=
e.viewTo)(f=yc(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):za(a);else{var f=yc(a,b,b,-1),g=yc(a,c,c+d,1);f&&g?(e.view=e.view.slice(0,f.index).concat(pc(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),e.viewTo+=d):za(a)}if(a=e.externalMeasured)c<a.lineN?a.lineN+=d:b<a.lineN+a.size&&(e.externalMeasured=null)}function Aa(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null);b<d.viewFrom||b>=d.viewTo||(a=
d.view[Na(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==L(a,c)&&a.push(c)))}function za(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function yc(a,b,c,d){var e=Na(a,b),f=a.display.view;if(!ya||c==a.doc.first+a.doc.size)return{index:e,lineN:c};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=f[h].size;if(g!=b){if(0<d){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;c+=b}for(;Xc(a.doc,c)!=c;){if(e==(0>d?0:f.length-1))return null;c+=d*f[e-
(0>d?1:0)].size;e+=d}return{index:e,lineN:c}}function Ze(a){a=a.display.view;for(var b=0,c=0;c<a.length;c++){var d=a[c];d.hidden||d.node&&!d.changes||++b}return b}function Ib(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,Nc(Gg,a))}function Gg(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=yb(a,b.highlightFrontier),e=[];b.iter(d.line,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(d.line>=a.display.viewFrom){var g=
f.styles,h=f.text.length>a.options.maxHighlightLength?La(b.mode,d.state):null,k=je(a,f,d,!0);h&&(d.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(d.line);f.stateAfter=d.save()}else f.text.length<=a.options.maxHighlightLength&&ed(a,f.text,d),f.stateAfter=0==d.line%5?d.save():null;d.nextLine();if(+new Date>
c)return Ib(a,a.options.workDelay),!0});b.highlightFrontier=d.line;b.modeFrontier=Math.max(b.modeFrontier,d.line);e.length&&Y(a,function(){for(var b=0;b<e.length;b++)Aa(a,e[b],"text")})}}function Ad(a,b){var c=a.display,d=a.doc;if(b.editorIsHidden)return za(a),!1;if(!b.force&&b.visible.from>=c.viewFrom&&b.visible.to<=c.viewTo&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo)&&c.renderedView==c.view&&0==Ze(a))return!1;Se(a)&&(za(a),b.dims=ld(a));var e=d.first+d.size,f=Math.max(b.visible.from-
a.options.viewportMargin,d.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);c.viewFrom<f&&20>f-c.viewFrom&&(f=Math.max(d.first,c.viewFrom));c.viewTo>g&&20>c.viewTo-g&&(g=Math.min(e,c.viewTo));ya&&(f=Xc(a.doc,f),g=ee(a.doc,g));d=f!=c.viewFrom||g!=c.viewTo||c.lastWrapHeight!=b.wrapperHeight||c.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=pc(a,f,g),e.viewFrom=f):(e.viewFrom>f?e.view=pc(a,f,e.viewFrom).concat(e.view):e.viewFrom<f&&(e.view=e.view.slice(Na(a,
f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(pc(a,e.viewTo,g)):e.viewTo>g&&(e.view=e.view.slice(0,Na(a,g))));e.viewTo=g;c.viewOffset=oa(t(a.doc,c.viewFrom));a.display.mover.style.top=c.viewOffset+"px";g=Ze(a);if(!d&&0==g&&!b.force&&c.renderedView==c.view&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo))return!1;a.hasFocus()?f=null:(f=sa())&&wa(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&(e=window.getSelection(),e.anchorNode&&e.extend&&wa(a.display.lineDiv,e.anchorNode)&&
(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,f.focusNode=e.focusNode,f.focusOffset=e.focusOffset))):f=null;4<g&&(c.lineDiv.style.display="none");Hg(a,c.updateLineNumbers,b.dims);4<g&&(c.lineDiv.style.display="");c.renderedView=c.view;(g=f)&&g.activeElt&&g.activeElt!=sa()&&(g.activeElt.focus(),g.anchorNode&&wa(document.body,g.anchorNode)&&wa(document.body,g.focusNode)&&(f=window.getSelection(),e=document.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),e.collapse(!1),f.removeAllRanges(),
f.addRange(e),f.extend(g.focusNode,g.focusOffset)));ea(c.cursorDiv);ea(c.selectionDiv);c.gutters.style.height=c.sizer.style.minHeight=0;d&&(c.lastWrapHeight=b.wrapperHeight,c.lastWrapWidth=b.wrapperWidth,Ib(a,400));c.updateLineNumbers=null;return!0}function Ye(a,b){for(var c=b.viewport,d=!0;;d=!1){if(!d||!a.options.lineWrapping||b.oldDisplayWidth==Ma(a))if(c&&null!=c.top&&(c={top:Math.min(a.doc.height+id(a.display)-jd(a),c.top)}),b.visible=wd(a.display,a.doc,c),b.visible.from>=a.display.viewFrom&&
b.visible.to<=a.display.viewTo)break;if(!Ad(a,b))break;uc(a);d=Jb(a);Eb(a);gb(a,d);Bd(a,d);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo}function zd(a,b){var c=new xc(a,b);if(Ad(a,c)){uc(a);Ye(a,c);var d=Jb(a);Eb(a);gb(a,d);Bd(a,d);c.finish()}}function Hg(a,b,c){function d(b){var c=
b.nextSibling;P&&ha&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b);return c}for(var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view,e=e.viewFrom,l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=d(h);h=f&&null!=b&&b<=e&&m.lineNumber;m.changes&&(-1<L(m.changes,"gutter")&&(h=!1),ue(a,m,e,c));h&&(ea(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(Tc(a.options,e))));h=m.node.nextSibling}else{var q=
zg(a,m,e,c);g.insertBefore(q,h)}e+=m.size}for(;h;)h=d(h)}function xd(a){a.display.sizer.style.marginLeft=a.display.gutters.offsetWidth+"px"}function Bd(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=b.docHeight+a.display.barHeight+qa(a)+"px"}function $e(a){var b=a.display.gutters,c=a.options.gutters;ea(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(u("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==
e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none";xd(a)}function Cd(a){var b=L(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):-1<b&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function af(a){var b=a.wheelDeltaX,c=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==c&&a.detail&&a.axis==a.VERTICAL_AXIS?c=a.detail:null==c&&(c=a.wheelDelta);
return{x:b,y:c}}function Ig(a){a=af(a);a.x*=ba;a.y*=ba;return a}function bf(a,b){var c=af(b),d=c.x,c=c.y,e=a.display,f=e.scroller,g=f.scrollWidth>f.clientWidth,h=f.scrollHeight>f.clientHeight;if(d&&g||c&&h){if(c&&ha&&P){var g=b.target,k=e.view;a:for(;g!=f;g=g.parentNode)for(var l=0;l<k.length;l++)if(k[l].node==g){a.display.currentWheelTarget=g;break a}}!d||xa||ka||null==ba?(c&&null!=ba&&(h=c*ba,g=a.doc.scrollTop,k=g+e.wrapper.clientHeight,0>h?g=Math.max(0,g+h-50):k=Math.min(a.doc.height,k+h+50),zd(a,
{top:g,bottom:k})),20>zc&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=d,e.wheelDY=c,setTimeout(function(){if(null!=e.wheelStartX){var a=f.scrollLeft-e.wheelStartX,b=f.scrollTop-e.wheelStartY,a=b&&e.wheelDY&&b/e.wheelDY||a&&e.wheelDX&&a/e.wheelDX;e.wheelStartX=e.wheelStartY=null;a&&(ba=(ba*zc+a)/(zc+1),++zc)}},200)):(e.wheelDX+=d,e.wheelDY+=c))):(c&&h&&Hb(a,Math.max(0,f.scrollTop+c*ba)),Ta(a,Math.max(0,f.scrollLeft+d*ba)),(!c||c&&h)&&Q(b),e.wheelStartX=null)}}
function la(a,b){var c=a[b];a.sort(function(a,b){return y(a.from(),b.from())});b=L(a,c);for(c=1;c<a.length;c++){var d=a[c],e=a[c-1];if(0<=y(e.to(),d.from())){var f=jc(e.from(),d.from()),g=ic(e.to(),d.to()),d=e.empty()?d.from()==d.head:e.from()==e.head;c<=b&&--b;a.splice(--c,2,new A(d?g:f,d?f:g))}}return new ca(a,b)}function va(a,b){return new ca([new A(a,b||a)],0)}function Ba(a){return a.text?p(a.from.line+a.text.length-1,z(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function cf(a,b){if(0>
y(a,b.from))return a;if(0>=y(a,b.to))return Ba(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;a.line==b.to.line&&(d+=Ba(b).ch-b.to.ch);return p(c,d)}function Dd(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new A(cf(e.anchor,b),cf(e.head,b)))}return la(c,a.sel.primIndex)}function df(a,b,c){return a.line==b.line?p(c.line,a.ch-b.ch+c.ch):p(c.line+(a.line-b.line),a.ch)}function Ed(a){a.doc.mode=cd(a.options,a.doc.modeOption);Kb(a)}function Kb(a){a.doc.iter(function(a){a.stateAfter&&
(a.stateAfter=null);a.styles&&(a.styles=null)});a.doc.modeFrontier=a.doc.highlightFrontier=a.doc.first;Ib(a,100);a.state.modeGen++;a.curOp&&U(a)}function ef(a,b){return 0==b.from.ch&&0==b.to.ch&&""==z(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Fd(a,b,c,d){function e(a,c,e){a.text=c;a.stateAfter&&(a.stateAfter=null);a.styles&&(a.styles=null);null!=a.order&&(a.order=null);ae(a);be(a,e);c=d?d(a):1;c!=a.height&&ma(a,c);N(a,"change",a,b)}function f(a,b){for(var e=[],f=a;f<b;++f)e.push(new hb(k[f],
c?c[f]:null,d));return e}var g=b.from,h=b.to,k=b.text,l=t(a,g.line),m=t(a,h.line),q=z(k),n=c?c[k.length-1]:null,r=h.line-g.line;b.full?(a.insert(0,f(0,k.length)),a.remove(k.length,a.size-k.length)):ef(a,b)?(h=f(0,k.length-1),e(m,m.text,n),r&&a.remove(g.line,r),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+q+l.text.slice(h.ch),n):(r=f(1,k.length-1),r.push(new hb(q+l.text.slice(h.ch),n,d)),e(l,l.text.slice(0,g.ch)+k[0],c?c[0]:null),a.insert(g.line+1,r)):1==k.length?(e(l,l.text.slice(0,
g.ch)+k[0]+m.text.slice(h.ch),c?c[0]:null),a.remove(g.line+1,r)):(e(l,l.text.slice(0,g.ch)+k[0],c?c[0]:null),e(m,q+m.text.slice(h.ch),n),n=f(1,k.length-1),1<r&&a.remove(g.line+1,r-1),a.insert(g.line+1,n));N(a,"change",a,b)}function Wa(a,b,c){function d(a,f,g){if(a.linked)for(var h=0;h<a.linked.length;++h){var k=a.linked[h];if(k.doc!=f){var l=g&&k.sharedHist;if(!c||l)b(k.doc,l),d(k.doc,a,l)}}}d(a,null,!0)}function ff(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;td(a);
Ed(a);gf(a);a.options.lineWrapping||Zc(a);a.options.mode=b.modeOption;U(a)}function gf(a){("rtl"==a.doc.direction?Fa:Sa)(a.display.lineDiv,"CodeMirror-rtl")}function Jg(a){Y(a,function(){gf(a);U(a)})}function Ac(a){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a||1}function Gd(a,b){var c={from:Vc(b.from),to:Ba(b),text:Ha(a,b.from,b.to)};hf(a,c,b.from.line,
b.to.line+1);Wa(a,function(a){return hf(a,c,b.from.line,b.to.line+1)},!0);return c}function jf(a){for(;a.length;)if(z(a).ranges)a.pop();else break}function kf(a,b,c,d){var e=a.history;e.undone.length=0;var f=+new Date,g,h,k;if(k=e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))e.lastOp==d?(jf(e.done),g=z(e.done)):e.done.length&&!z(e.done).ranges?g=z(e.done):1<e.done.length&&!e.done[e.done.length-
2].ranges?(e.done.pop(),g=z(e.done)):g=void 0,k=g;if(k)h=z(g.changes),0==y(b.from,b.to)&&0==y(b.from,h.to)?h.to=Ba(b):g.changes.push(Gd(a,b));else for((g=z(e.done))&&g.ranges||Bc(a.sel,e.done),g={changes:[Gd(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(c);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=d;e.lastOrigin=e.lastSelOrigin=b.origin;h||F(a,"historyAdded")}function Bc(a,
b){var c=z(b);c&&c.ranges&&c.equals(a)||b.push(a)}function hf(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans);++f})}function Kg(a){if(!a)return null;for(var b,c=0;c<a.length;++c)a[c].marker.explicitlyCleared?b||(b=a.slice(0,c)):b&&b.push(a[c]);return b?b.length?b:null:a}function lf(a,b){var c;if(c=b["spans_"+a.id]){for(var d=[],e=0;e<b.text.length;++e)d.push(Kg(c[e]));c=d}else c=null;
d=Wc(a,b);if(!c)return d;if(!d)return c;for(e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g){var h=0;a:for(;h<g.length;++h){for(var k=g[h],l=0;l<f.length;++l)if(f[l].marker==k.marker)continue a;f.push(k)}}else g&&(c[e]=g)}return c}function ib(a,b,c){for(var d=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)d.push(c?ca.prototype.deepCopy.call(f):f);else{var f=f.changes,g=[];d.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l=void 0;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=
m.match(/^spans_(\d+)$/))&&-1<L(b,Number(l[1]))&&(z(g)[m]=k[m],delete k[m])}}}return d}function Hd(a,b,c,d){return d?(a=a.anchor,c&&(d=0>y(b,a),d!=0>y(c,a)?(a=b,b=c):d!=0>y(b,c)&&(b=c)),new A(a,b)):new A(c||b,b)}function Cc(a,b,c,d,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));O(a,new ca([Hd(a.sel.primary(),b,c,e)],0),d)}function mf(a,b,c){for(var d=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)d[f]=Hd(a.sel.ranges[f],b[f],null,e);b=la(d,a.sel.primIndex);O(a,b,c)}
function Id(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c;O(a,la(e,a.sel.primIndex),d)}function Lg(a,b,c){c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new A(w(a,b[c].anchor),w(a,b[c].head))},origin:c&&c.origin};F(a,"beforeSelectionChange",a,c);a.cm&&F(a.cm,"beforeSelectionChange",a.cm,c);return c.ranges!=b.ranges?la(c.ranges,c.ranges.length-1):b}function nf(a,b,c){var d=a.history.done,e=z(d);e&&e.ranges?(d[d.length-1]=b,Dc(a,b,c)):O(a,b,c)}function O(a,
b,c){Dc(a,b,c);b=a.sel;var d=a.cm?a.cm.curOp.id:NaN,e=a.history,f=c&&c.origin,g;if(!(g=d==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==e.lastSelTime&&e.lastOrigin==f)){g=z(e.done);var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Bc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=d;c&&!1!==c.clearRedo&&
jf(e.undone)}function Dc(a,b,c){if(ga(a,"beforeSelectionChange")||a.cm&&ga(a.cm,"beforeSelectionChange"))b=Lg(a,b,c);var d=c&&c.bias||(0>y(b.primary().head,a.sel.primary().head)?-1:1);of(a,pf(a,b,d,!0));c&&!1===c.scroll||!a.cm||fb(a.cm)}function of(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,fe(a.cm)),N(a,"cursorActivity",a))}function qf(a){of(a,pf(a,a.sel,null,!1))}function pf(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=b.ranges.length==
a.sel.ranges.length&&a.sel.ranges[f],k=Jd(a,g.anchor,h&&h.anchor,c,d),h=Jd(a,g.head,h&&h.head,c,d);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,f)),e[f]=new A(k,h)}return e?la(e,b.primIndex):b}function jb(a,b,c,d,e){var f=t(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker;if((null==h.from||(k.inclusiveLeft?h.from<=b.ch:h.from<b.ch))&&(null==h.to||(k.inclusiveRight?h.to>=b.ch:h.to>b.ch))){if(e&&(F(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;
continue}else break;if(k.atomic){if(c){g=k.find(0>d?1:-1);h=void 0;if(0>d?k.inclusiveRight:k.inclusiveLeft)g=rf(a,g,-d,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=y(g,c))&&(0>d?0>h:0<h))return jb(a,g,b,d,e)}c=k.find(0>d?-1:1);if(0>d?k.inclusiveLeft:k.inclusiveRight)c=rf(a,c,d,c.line==b.line?f:null);return c?jb(a,c,b,d,e):null}}}return b}function Jd(a,b,c,d,e){d=d||1;b=jb(a,b,c,d,e)||!e&&jb(a,b,c,d,!0)||jb(a,b,c,-d,e)||!e&&jb(a,b,c,-d,!0);return b?b:(a.cantEdit=!0,p(a.first,0))}function rf(a,
b,c,d){return 0>c&&0==b.ch?b.line>a.first?w(a,p(b.line-1)):null:0<c&&b.ch==(d||t(a,b.line)).text.length?b.line<a.first+a.size-1?p(b.line+1,0):null:new p(b.line,b.ch+c)}function sf(a){a.setSelection(p(a.firstLine(),0),p(a.lastLine()),ra)}function tf(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return d.canceled=!0}};c&&(d.update=function(b,c,g,h){b&&(d.from=w(a,b));c&&(d.to=w(a,c));g&&(d.text=g);void 0!==h&&(d.origin=h)});F(a,"beforeChange",a,d);a.cm&&
F(a.cm,"beforeChange",a.cm,d);return d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function kb(a,b,c){if(a.cm){if(!a.cm.curOp)return J(a.cm,kb)(a,b,c);if(a.cm.state.suppressEdits)return}if(ga(a,"beforeChange")||a.cm&&ga(a.cm,"beforeChange"))if(b=tf(a,b,!0),!b)return;if(c=uf&&!c&&kg(a,b.from,b.to))for(var d=c.length-1;0<=d;--d)vf(a,{from:c[d].from,to:c[d].to,text:d?[""]:b.text,origin:b.origin});else vf(a,b)}function vf(a,b){if(1!=b.text.length||""!=b.text[0]||0!=y(b.from,b.to)){var c=
Dd(a,b);kf(a,b,c,a.cm?a.cm.curOp.id:NaN);Lb(a,b,c,Wc(a,b));var d=[];Wa(a,function(a,c){c||-1!=L(d,a.history)||(wf(a.history,b),d.push(a.history));Lb(a,b,null,Wc(a,b))})}}function Ec(a,b,c){if(!a.cm||!a.cm.state.suppressEdits||c){for(var d=a.history,e,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,k=0;k<g.length&&(e=g[k],c?!e.ranges||e.equals(a.sel):e.ranges);k++);if(k!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;;)if(e=g.pop(),e.ranges){Bc(e,h);if(c&&!e.equals(a.sel)){O(a,e,{clearRedo:!1});
return}f=e}else break;var l=[];Bc(f,h);h.push({changes:l,generation:d.generation});d.generation=e.generation||++d.maxGeneration;var m=ga(a,"beforeChange")||a.cm&&ga(a.cm,"beforeChange");c=function(c){var d=e.changes[c];d.origin=b;if(m&&!tf(a,d,!1))return g.length=0,{};l.push(Gd(a,d));var f=c?Dd(a,d):z(g);Lb(a,d,f,lf(a,d));!c&&a.cm&&a.cm.scrollIntoView({from:d.from,to:Ba(d)});var h=[];Wa(a,function(a,b){b||-1!=L(h,a.history)||(wf(a.history,d),h.push(a.history));Lb(a,d,null,lf(a,d))})};for(d=e.changes.length-
1;0<=d;--d)if(f=c(d))return f.v}}}function xf(a,b){if(0!=b&&(a.first+=b,a.sel=new ca(gc(a.sel.ranges,function(a){return new A(p(a.anchor.line+b,a.anchor.ch),p(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){U(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)Aa(a.cm,d,"gutter")}}function Lb(a,b,c,d){if(a.cm&&!a.cm.curOp)return J(a.cm,Lb)(a,b,c,d);if(b.to.line<a.first)xf(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=
b.text.length-1-(a.first-b.from.line);xf(a,e);b={from:p(a.first,0),to:p(b.to.line+e,b.to.ch),text:[z(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:p(e,t(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=Ha(a,b.from,b.to);c||(c=Dd(a,b));a.cm?Mg(a.cm,b,d):Fd(a,b,d);Dc(a,c,ra)}}function Mg(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=C(na(t(d,f.line))),d.iter(k,g.line+1,function(a){if(a==e.maxLine)return h=!0}));-1<d.sel.contains(b.from,
b.to)&&fe(a);Fd(d,b,c,Le(a));a.options.lineWrapping||(d.iter(k,f.line+b.text.length,function(a){var b=lc(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));rg(d,f.line);Ib(a,400);c=b.text.length-(g.line-f.line)-1;b.full?U(a):f.line!=g.line||1!=b.text.length||ef(a.doc,b)?U(a,f.line,g.line+1,c):Aa(a,f.line,"text");c=ga(a,"changes");if((d=ga(a,"change"))||c)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},d&&N(a,"change",a,b),
c&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function lb(a,b,c,d,e){d||(d=c);if(0>y(d,c)){var f;f=[d,c];c=f[0];d=f[1];f}"string"==typeof b&&(b=a.splitLines(b));kb(a,{from:c,to:d,text:b,origin:e})}function yf(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function zf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)yf(f.ranges[g].anchor,b,c,d),yf(f.ranges[g].head,
b,c,d);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(c<k.from.line)k.from=p(k.from.line+d,k.from.ch),k.to=p(k.to.line+d,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function wf(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;zf(a.done,c,d,e);zf(a.undone,c,d,e)}function Mb(a,b,c,d){var e=b,f=b;"number"==typeof b?f=t(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=C(b);if(null==e)return null;d(f,e)&&a.cm&&Aa(a.cm,e,c);return f}function Nb(a){this.lines=
a;this.parent=null;for(var b=0,c=0;c<a.length;++c)a[c].parent=this,b+=a[c].height;this.height=b}function Ob(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d],b=b+e.chunkSize(),c=c+e.height;e.parent=this}this.size=b;this.height=c;this.parent=null}function Ng(a,b,c,d){var e=new Pb(a,c,d),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);Mb(a,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e);e.line=
b;f&&!Ka(a,b)&&(c=oa(b)<a.scrollTop,ma(b,b.height+Bb(e)),c&&vc(f,e.height),f.curOp.forceUpdate=!0);return!0});N(f,"lineWidgetAdded",f,e,"number"==typeof b?b:C(b));return e}function mb(a,b,c,d,e){if(d&&d.shared)return Og(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return J(a.cm,mb)(a,b,c,d,e);var f=new Ca(a,e);e=y(b,c);d&&Ga(d,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=$a("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events",
"true"),d.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(de(a,b.line,b,c,f)||b.line!=c.line&&de(a,c.line,b,c,f))throw Error("Inserting collapsed marker partially overlapping an existing one");ya=!0}f.addToHistory&&kf(a,{from:b,to:c,origin:"markText"},a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,c.line+1,function(a){h&&f.collapsed&&!h.options.lineWrapping&&na(a)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&ma(a,0);var d=new kc(f,g==b.line?b.ch:null,g==c.line?c.ch:null);a.markedSpans=
a.markedSpans?a.markedSpans.concat([d]):[d];d.marker.attachLine(a);++g});f.collapsed&&a.iter(b.line,c.line+1,function(b){Ka(a,b)&&ma(b,0)});f.clearOnEnter&&v(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(uf=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory());f.collapsed&&(f.id=++Af,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)U(h,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle||f.css)for(d=b.line;d<=c.line;d++)Aa(h,d,
"text");f.atomic&&qf(h.doc);N(h,"markerAdded",h,f)}return f}function Og(a,b,c,d,e){d=Ga(d);d.shared=!1;var f=[mb(a,b,c,d,e)],g=f[0],h=d.widgetNode;Wa(a,function(a){h&&(d.widgetNode=h.cloneNode(!0));f.push(mb(a,w(a,b),w(a,c),d,e));for(var l=0;l<a.linked.length;++l)if(a.linked[l].isParent)return;g=z(f)});return new Qb(f,g)}function Bf(a){return a.findMarks(p(a.first,0),a.clipPos(p(a.lastLine())),function(a){return a.parent})}function Pg(a){for(var b=function(b){b=a[b];var c=[b.primary.doc];Wa(b.primary.doc,
function(a){return c.push(a)});for(var f=0;f<b.markers.length;f++){var g=b.markers[f];-1==L(c,g.doc)&&(g.parent=null,b.markers.splice(f--,1))}},c=0;c<a.length;c++)b(c)}function Qg(a){var b=this;Cf(b);if(!I(b,a)&&!ua(b.display,a)){Q(a);B&&(Df=+new Date);var c=Ra(b,a,!0),d=a.dataTransfer.files;if(c&&!b.isReadOnly())if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,f=Array(e),g=0,h=function(a,d){if(!b.options.allowDropFileTypes||-1!=L(b.options.allowDropFileTypes,a.type)){var h=new FileReader;
h.onload=J(b,function(){var a=h.result;/[\x00-\x08\x0e-\x1f]{2}/.test(a)&&(a="");f[d]=a;++g==e&&(c=w(b.doc,c),a={from:c,to:c,text:b.doc.splitLines(f.join(b.doc.lineSeparator())),origin:"paste"},kb(b.doc,a),nf(b.doc,va(c,Ba(a))))});h.readAsText(a)}},k=0;k<e;++k)h(d[k],k);else if(b.state.draggingText&&-1<b.doc.sel.contains(c))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(h=a.dataTransfer.getData("Text")){b.state.draggingText&&!b.state.draggingText.copy&&
(k=b.listSelections());Dc(b.doc,va(c,c));if(k)for(d=0;d<k.length;++d)lb(b.doc,"",k[d].anchor,k[d].head,"drag");b.replaceSelection(h,"around","paste");b.display.input.focus()}}catch(l){}}}function Cf(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Ef(a){if(document.getElementsByClassName)for(var b=document.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function Rg(){var a;v(window,"resize",
function(){null==a&&(a=setTimeout(function(){a=null;Ef(Sg)},100))});v(window,"blur",function(){return Ef(Fb)})}function Sg(a){var b=a.display;if(b.lastWrapHeight!=b.wrapper.clientHeight||b.lastWrapWidth!=b.wrapper.clientWidth)b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,b.scrollbarsClipped=!1,a.setSize()}function Tg(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var c,d,e,f,g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))c=!0;else if(/^(c|ctrl|control)$/i.test(h))d=
!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}c&&(a="Alt-"+a);d&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}function Ug(a){var b={},c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!/^(name|fallthrough|(de|at)tach)$/.test(c)){if("..."!=d)for(var e=gc(c.split(" "),Tg),f=0;f<e.length;f++){var g=void 0,h=void 0;f==e.length-1?(h=e.join(" "),g=d):(h=e.slice(0,f+1).join(" "),g="...");var k=b[h];if(!k)b[h]=g;else if(k!=g)throw Error("Inconsistent bindings for "+
h);}delete a[c]}}for(var l in b)a[l]=b[l];return a}function nb(a,b,c,d){b=Fc(b);var e=b.call?b.call(a,d):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";if(null!=e&&c(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return nb(a,b.fallthrough,c,d);for(e=0;e<b.fallthrough.length;e++){var f=nb(a,b.fallthrough[e],c,d);if(f)return f}}}function Ff(a){a="string"==typeof a?a:Da[a.keyCode];return"Ctrl"==a||"Alt"==a||"Shift"==a||"Mod"==a}function Gf(a,
b,c){var d=a;b.altKey&&"Alt"!=d&&(a="Alt-"+a);(Hf?b.metaKey:b.ctrlKey)&&"Ctrl"!=d&&(a="Ctrl-"+a);(Hf?b.ctrlKey:b.metaKey)&&"Cmd"!=d&&(a="Cmd-"+a);!c&&b.shiftKey&&"Shift"!=d&&(a="Shift-"+a);return a}function If(a,b){if(ka&&34==a.keyCode&&a["char"])return!1;var c=Da[a.keyCode];return null==c||a.altGraphKey?!1:Gf(c,a,b)}function Fc(a){return"string"==typeof a?Rb[a]:a}function ob(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&0>=y(f.from,z(d).to);){var g=d.pop();
if(0>y(g.from,f.from)){f.from=g.from;break}}d.push(f)}Y(a,function(){for(var b=d.length-1;0<=b;b--)lb(a.doc,"",d[b].from,d[b].to,"+delete");fb(a)})}function Kd(a,b,c){b=Yd(a.text,b+c,c);return 0>b||b>a.text.length?null:b}function Ld(a,b,c){a=Kd(a,b.ch,c);return null==a?null:new p(b.line,a,0>c?"after":"before")}function Md(a,b,c,d,e){if(a&&(a=ta(c,b.doc.direction))){a=0>e?z(a):a[0];var f=0>e==(1==a.level)?"after":"before",g;if(0<a.level||"rtl"==b.doc.direction){var h=Oa(b,c);g=0>e?c.text.length-1:
0;var k=ia(b,h,g).top;g=rb(function(a){return ia(b,h,a).top==k},0>e==(1==a.level)?a.from:a.to-1,g);"before"==f&&(g=Kd(c,g,1))}else g=0>e?a.to:a.from;return new p(d,g,f)}return new p(d,0>e?c.text.length:0,0>e?"before":"after")}function Vg(a,b,c,d){var e=ta(b,a.doc.direction);if(!e)return Ld(b,c,d);c.ch>=b.text.length?(c.ch=b.text.length,c.sticky="before"):0>=c.ch&&(c.ch=0,c.sticky="after");var f=vb(e,c.ch,c.sticky),g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<d?g.to>c.ch:g.from<c.ch))return Ld(b,
c,d);var h=function(a,c){return Kd(b,a instanceof p?a.ch:a,c)},k,l=function(c){if(!a.options.lineWrapping)return{begin:0,end:b.text.length};k=k||Oa(a,b);return Ke(a,b,k,c)},m=l("before"==c.sticky?h(c,-1):c.ch);if("rtl"==a.doc.direction||1==g.level){var q=1==g.level==0>d,n=h(c,q?1:-1);if(null!=n&&(q?n<=g.to&&n<=m.end:n>=g.from&&n>=m.begin))return new p(c.line,n,q?"before":"after")}g=function(a,b,d){for(var f=function(a,b){return b?new p(c.line,h(a,1),"before"):new p(c.line,a,"after")};0<=a&&a<e.length;a+=
b){var g=e[a],k=0<b==(1!=g.level),l=k?d.begin:h(d.end,-1);if(g.from<=l&&l<g.to)return f(l,k);l=k?g.from:h(g.to,-1);if(d.begin<=l&&l<d.end)return f(l,k)}};if(f=g(f+d,d,m))return f;m=0<d?m.end:h(m.begin,-1);return null==m||0<d&&m==b.text.length||!(f=g(0<d?0:e.length-1,d,l(m)))?null:f}function Jf(a,b){var c=t(a.doc,b),d=na(c);d!=c&&(b=C(d));return Md(!0,a,d,b,1)}function Kf(a,b){var c=Jf(a,b.line),d=t(a.doc,c.line),e=ta(d,a.doc.direction);return e&&0!=e[0].level?c:(d=Math.max(0,d.text.search(/\S/)),
p(c.line,b.line==c.line&&b.ch<=d&&b.ch?0:d,c.sticky))}function Gc(a,b,c){if("string"==typeof b&&(b=Sb[b],!b))return!1;a.display.input.ensurePolled();var d=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=Hc}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function Wg(a,b,c){for(var d=0;d<a.state.keyMaps.length;d++){var e=nb(b,a.state.keyMaps[d],c,a);if(e)return e}return a.options.extraKeys&&nb(b,a.options.extraKeys,c,a)||nb(b,a.options.keyMap,
c,a)}function Tb(a,b,c,d){var e=a.state.keySeq;if(e){if(Ff(b))return"handled";Xg.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});b=e+" "+b}d=Wg(a,b,d);"multi"==d&&(a.state.keySeq=b);"handled"==d&&N(a,"keyHandled",a,b,c);if("handled"==d||"multi"==d)Q(c),ud(a);return e&&!d&&/\'$/.test(b)?(Q(c),!0):!!d}function Lf(a,b){var c=If(b,!0);return c?b.shiftKey&&!a.state.keySeq?Tb(a,"Shift-"+c,b,function(b){return Gc(a,b,!0)})||Tb(a,c,b,function(b){if("string"==typeof b?
/^go[A-Z]/.test(b):b.motion)return Gc(a,b)}):Tb(a,c,b,function(b){return Gc(a,b)}):!1}function Yg(a,b,c){return Tb(a,"'"+c+"'",b,function(b){return Gc(a,b,!0)})}function Mf(a){this.curOp.focus=sa();if(!I(this,a)){B&&11>D&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||a.shiftKey;var c=Lf(this,a);ka&&(Nd=c?b:null,!c&&88==b&&!Zg&&(ha?a.metaKey:a.ctrlKey)&&this.replaceSelection("",null,"cut"));18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||$g(this)}}
function $g(a){function b(a){18!=a.keyCode&&a.altKey||(Sa(c,"CodeMirror-crosshair"),aa(document,"keyup",b),aa(document,"mouseover",b))}var c=a.display.lineDiv;Fa(c,"CodeMirror-crosshair");v(document,"keyup",b);v(document,"mouseover",b)}function Nf(a){16==a.keyCode&&(this.doc.sel.shift=!1);I(this,a)}function Of(a){if(!(ua(this.display,a)||I(this,a)||a.ctrlKey&&!a.altKey||ha&&a.metaKey)){var b=a.keyCode,c=a.charCode;if(ka&&b==Nd)Nd=null,Q(a);else if(!ka||a.which&&!(10>a.which)||!Lf(this,a))if(b=String.fromCharCode(null==
c?b:c),"\b"!=b&&!Yg(this,a,b))this.display.input.onKeyPress(a)}}function ah(a,b){var c=+new Date;if(Ub&&Ub.compare(c,a,b))return Vb=Ub=null,"triple";if(Vb&&Vb.compare(c,a,b))return Ub=new Od(c,a,b),Vb=null,"double";Vb=new Od(c,a,b);Ub=null;return"single"}function Pf(a){var b=this.display;if(!(I(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=a.shiftKey,ua(b,a))P||(b.scroller.draggable=!1,setTimeout(function(){return b.scroller.draggable=!0},100));else if(!Ic(this,
a,"gutterClick",!0)){var c=Ra(this,a),d=he(a),e=c?ah(c,d):"single";window.focus();1==d&&this.state.selectingText&&this.state.selectingText(a);c&&bh(this,d,c,e,a)||(1==d?c?ch(this,c,e,a):(a.target||a.srcElement)==b.scroller&&Q(a):2==d?(c&&Cc(this.doc,c),setTimeout(function(){return b.input.focus()},20)):3==d&&(Pd?Qf(this,a):Pe(this)))}}function bh(a,b,c,d,e){var f="Click";"double"==d?f="Double"+f:"triple"==d&&(f="Triple"+f);return Tb(a,Gf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(b){"string"==
typeof b&&(b=Sb[b]);if(!b)return!1;var d=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),d=b(a,c)!=Hc}finally{a.state.suppressEdits=!1}return d})}function ch(a,b,c,d){B?setTimeout(Nc(Oe,a),0):a.curOp.focus=sa();var e=a.getOption("configureMouse"),e=e?e(a,c,d):{};null==e.unit&&(e.unit=(dh?d.shiftKey&&d.metaKey:d.altKey)?"rectangle":"single"==c?"char":"double"==c?"word":"line");if(null==e.extend||a.doc.extend)e.extend=a.doc.extend||d.shiftKey;null==e.addNew&&(e.addNew=ha?d.metaKey:d.ctrlKey);null==
e.moveOnDrag&&(e.moveOnDrag=!(ha?d.altKey:d.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&eh&&!a.isReadOnly()&&"single"==c&&-1<(g=f.contains(b))&&(0>y((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<y(g.to(),b)||0>b.xRel)?fh(a,d,b,e):gh(a,d,b,e)}function fh(a,b,c,d){var e=a.display,f=!1,g=J(a,function(b){P&&(e.scroller.draggable=!1);a.state.draggingText=!1;aa(document,"mouseup",g);aa(document,"mousemove",h);aa(e.scroller,"dragstart",k);aa(e.scroller,"drop",g);f||(Q(b),d.addNew||Cc(a.doc,c,null,null,d.extend),
P||B&&9==D?setTimeout(function(){document.body.focus();e.input.focus()},20):e.input.focus())}),h=function(a){f=f||10<=Math.abs(b.clientX-a.clientX)+Math.abs(b.clientY-a.clientY)},k=function(){return f=!0};P&&(e.scroller.draggable=!0);a.state.draggingText=g;g.copy=!d.moveOnDrag;e.scroller.dragDrop&&e.scroller.dragDrop();v(document,"mouseup",g);v(document,"mousemove",h);v(e.scroller,"dragstart",k);v(e.scroller,"drop",g);Pe(a);setTimeout(function(){return e.input.focus()},20)}function Rf(a,b,c){if("char"==
c)return new A(b,b);if("word"==c)return a.findWordAt(b);if("line"==c)return new A(p(b.line,0),w(a.doc,p(b.line+1,0)));a=c(a,b);return new A(a.from,a.to)}function gh(a,b,c,d){function e(b){if(0!=y(r,b))if(r=b,"rectangle"==d.unit){for(var e=[],f=a.options.tabSize,g=fa(t(k,c.line).text,c.ch,f),h=fa(t(k,b.line).text,b.ch,f),n=Math.min(g,h),g=Math.max(g,h),h=Math.min(c.line,b.line),u=Math.min(a.lastLine(),Math.max(c.line,b.line));h<=u;h++){var v=t(k,h).text,W=Oc(v,n,f);n==g?e.push(new A(p(h,W),p(h,W))):
v.length>W&&e.push(new A(p(h,W),p(h,Oc(v,g,f))))}e.length||e.push(new A(c,c));O(k,la(q.ranges.slice(0,m).concat(e),m),{origin:"*mouse",scroll:!1});a.scrollIntoView(b)}else e=l,n=Rf(a,b,d.unit),b=e.anchor,0<y(n.anchor,b)?(f=n.head,b=jc(e.from(),n.anchor)):(f=n.anchor,b=ic(e.to(),n.head)),e=q.ranges.slice(0),e[m]=hh(a,new A(w(k,b),f)),O(k,la(e,m),Qd)}function f(b){var c=++x,g=Ra(a,b,!0,"rectangle"==d.unit);if(g)if(0!=y(g,r)){a.curOp.focus=sa();e(g);var l=wd(h,k);(g.line>=l.to||g.line<l.from)&&setTimeout(J(a,
function(){x==c&&f(b)}),150)}else{var m=b.clientY<u.top?-20:b.clientY>u.bottom?20:0;m&&setTimeout(J(a,function(){x==c&&(h.scroller.scrollTop+=m,f(b))}),50)}}function g(b){a.state.selectingText=!1;x=Infinity;Q(b);h.input.focus();aa(document,"mousemove",z);aa(document,"mouseup",B);k.history.lastSelOrigin=null}var h=a.display,k=a.doc;Q(b);var l,m,q=k.sel,n=q.ranges;d.addNew&&!d.extend?(m=k.sel.contains(c),l=-1<m?n[m]:new A(c,c)):(l=k.sel.primary(),m=k.sel.primIndex);"rectangle"==d.unit?(d.addNew||(l=
new A(c,c)),c=Ra(a,b,!0,!0),m=-1):(b=Rf(a,c,d.unit),l=d.extend?Hd(l,b.anchor,b.head,d.extend):b);d.addNew?-1==m?(m=n.length,O(k,la(n.concat([l]),m),{scroll:!1,origin:"*mouse"})):1<n.length&&n[m].empty()&&"char"==d.unit&&!d.extend?(O(k,la(n.slice(0,m).concat(n.slice(m+1)),0),{scroll:!1,origin:"*mouse"}),q=k.sel):Id(k,m,l,Qd):(m=0,O(k,new ca([l],0),Qd),q=k.sel);var r=c,u=h.wrapper.getBoundingClientRect(),x=0,z=J(a,function(a){he(a)?f(a):g(a)}),B=J(a,g);a.state.selectingText=B;v(document,"mousemove",
z);v(document,"mouseup",B)}function hh(a,b){var c=b.anchor,d=b.head,e=t(a.doc,c.line);if(0==y(c,d)&&c.sticky==d.sticky)return b;e=ta(e);if(!e)return b;var f=vb(e,c.ch,c.sticky),g=e[f];if(g.from!=c.ch&&g.to!=c.ch)return b;var h=f+(g.from==c.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;var k;d.line!=c.line?k=0<(d.line-c.line)*("ltr"==a.doc.direction?1:-1):(k=vb(e,d.ch,d.sticky),f=k-f||(d.ch-c.ch)*(1==g.level?-1:1),k=k==h-1||k==h?0>f:0<f);e=e[h+(k?-1:0)];e=(h=k==(1==e.level))?e.from:e.to;h=h?
"after":"before";return c.ch==e&&c.sticky==h?b:new A(new p(c.line,e,h),d)}function Ic(a,b,c,d){var e,f;if(b.touches)e=b.touches[0].clientX,f=b.touches[0].clientY;else try{e=b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&Q(b);d=a.display;var g=d.lineDiv.getBoundingClientRect();if(f>g.bottom||!ga(a,c))return $c(b);f-=g.top-d.viewOffset;for(g=0;g<a.options.gutters.length;++g){var h=d.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=
e)return e=Ia(a.doc,f),F(a,c,a,e,a.options.gutters[g],b),$c(b)}}function Qf(a,b){var c;(c=ua(a.display,b))||(c=ga(a,"gutterContextMenu")?Ic(a,b,"gutterContextMenu",!1):!1);if(!c&&!I(a,b,"contextmenu"))a.display.input.onContextMenu(b)}function Sf(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Db(a)}function Wb(a){$e(a);U(a);Re(a)}function ih(a,b,c){!b!=!(c&&c!=pb)&&(c=a.display.dragFunctions,b=b?v:aa,b(a.display.scroller,
"dragstart",c.start),b(a.display.scroller,"dragenter",c.enter),b(a.display.scroller,"dragover",c.over),b(a.display.scroller,"dragleave",c.leave),b(a.display.scroller,"drop",c.drop))}function jh(a){a.options.lineWrapping?(Fa(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(Sa(a.display.wrapper,"CodeMirror-wrap"),Zc(a));td(a);U(a);Db(a);setTimeout(function(){return gb(a)},100)}function E(a,b){var c=this;if(!(this instanceof E))return new E(a,b);this.options=
b=b?Ga(b):{};Ga(Tf,b,!1);Cd(b);var d=b.value;"string"==typeof d&&(d=new V(d,b.mode,null,b.lineSeparator,b.direction));this.doc=d;var e=new E.inputStyles[b.inputStyle](this),e=this.display=new jg(a,d,e);e.wrapper.CodeMirror=this;$e(this);Sf(this);b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");We(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Xa,
keySeq:null,specialChars:null};b.autofocus&&!sb&&e.input.focus();B&&11>D&&setTimeout(function(){return c.display.input.reset(!0)},20);kh(this);Uf||(Rg(),Uf=!0);Ua(this);this.curOp.forceUpdate=!0;ff(this,d);b.autofocus&&!sb||this.hasFocus()?setTimeout(Nc(vd,this),20):Fb(this);for(var f in Jc)if(Jc.hasOwnProperty(f))Jc[f](c,b[f],pb);Se(this);b.finishInit&&b.finishInit(this);for(d=0;d<Rd.length;++d)Rd[d](c);Va(this);P&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(e.lineDiv).textRendering&&
(e.lineDiv.style.textRendering="auto")}function kh(a){function b(){d.activeTouch&&(e=setTimeout(function(){return d.activeTouch=null},1E3),f=d.activeTouch,f.end=+new Date)}function c(a,b){if(null==b.left)return!0;var c=b.left-a.left,d=b.top-a.top;return 400<c*c+d*d}var d=a.display;v(d.scroller,"mousedown",J(a,Pf));B&&11>D?v(d.scroller,"dblclick",J(a,function(b){if(!I(a,b)){var c=Ra(a,b);!c||Ic(a,b,"gutterClick",!0)||ua(a.display,b)||(Q(b),b=a.findWordAt(c),Cc(a.doc,b.anchor,b.head))}})):v(d.scroller,
"dblclick",function(b){return I(a,b)||Q(b)});Pd||v(d.scroller,"contextmenu",function(b){return Qf(a,b)});var e,f={end:0};v(d.scroller,"touchstart",function(b){var c;if(c=!I(a,b))1!=b.touches.length?c=!1:(c=b.touches[0],c=1>=c.radiusX&&1>=c.radiusY),c=!c;c&&!Ic(a,b,"gutterClick",!0)&&(d.input.ensurePolled(),clearTimeout(e),c=+new Date,d.activeTouch={start:c,moved:!1,prev:300>=c-f.end?f:null},1==b.touches.length&&(d.activeTouch.left=b.touches[0].pageX,d.activeTouch.top=b.touches[0].pageY))});v(d.scroller,
"touchmove",function(){d.activeTouch&&(d.activeTouch.moved=!0)});v(d.scroller,"touchend",function(e){var f=d.activeTouch;if(f&&!ua(d,e)&&null!=f.left&&!f.moved&&300>new Date-f.start){var g=a.coordsChar(d.activeTouch,"page"),f=!f.prev||c(f,f.prev)?new A(g,g):!f.prev.prev||c(f,f.prev.prev)?a.findWordAt(g):new A(p(g.line,0),w(a.doc,p(g.line+1,0)));a.setSelection(f.anchor,f.head);a.focus();Q(e)}b()});v(d.scroller,"touchcancel",b);v(d.scroller,"scroll",function(){d.scroller.clientHeight&&(Hb(a,d.scroller.scrollTop),
Ta(a,d.scroller.scrollLeft,!0),F(a,"scroll",a))});v(d.scroller,"mousewheel",function(b){return bf(a,b)});v(d.scroller,"DOMMouseScroll",function(b){return bf(a,b)});v(d.wrapper,"scroll",function(){return d.wrapper.scrollTop=d.wrapper.scrollLeft=0});d.dragFunctions={enter:function(b){I(a,b)||xb(b)},over:function(b){if(!I(a,b)){var c=Ra(a,b);if(c){var d=document.createDocumentFragment();Ne(a,c,d);a.display.dragCursor||(a.display.dragCursor=u("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,
a.display.cursorDiv));Z(a.display.dragCursor,d)}xb(b)}},start:function(b){if(B&&(!a.state.draggingText||100>+new Date-Df))xb(b);else if(!I(a,b)&&!ua(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.effectAllowed="copyMove",b.dataTransfer.setDragImage&&!Vf)){var c=u("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d";ka&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=
c.offsetTop);b.dataTransfer.setDragImage(c,0,0);ka&&c.parentNode.removeChild(c)}},drop:J(a,Qg),leave:function(b){I(a,b)||Cf(a)}};var g=d.input.getField();v(g,"keyup",function(b){return Nf.call(a,b)});v(g,"keydown",J(a,Mf));v(g,"keypress",J(a,Of));v(g,"focus",function(b){return vd(a,b)});v(g,"blur",function(b){return Fb(a,b)})}function Xb(a,b,c,d){var e=a.doc,f;null==c&&(c="add");"smart"==c&&(e.mode.indent?f=yb(a,b).state:c="prev");var g=a.options.tabSize,h=t(e,b),k=fa(h.text,null,g);h.stateAfter&&
(h.stateAfter=null);var l=h.text.match(/^\s*/)[0],m;if(!d&&!/\S/.test(h.text))m=0,c="not";else if("smart"==c&&(m=e.mode.indent(f,h.text.slice(l.length),h.text),m==Hc||150<m)){if(!d)return;c="prev"}"prev"==c?m=b>e.first?fa(t(e,b-1).text,null,g):0:"add"==c?m=k+a.options.indentUnit:"subtract"==c?m=k-a.options.indentUnit:"number"==typeof c&&(m=k+c);m=Math.max(0,m);c="";d=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)d+=g,c+="\t";d<m&&(c+=Pc(m-d));if(c!=l)return lb(e,c,p(b,0),p(b,l.length),
"+input"),h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<l.length){b=p(b,l.length);Id(e,g,new A(b,b));break}}function Wf(a){da=a}function Sd(a,b,c,d,e){var f=a.doc;a.display.shift=!1;d||(d=f.sel);var g=a.state.pasteIncoming||"paste"==e,h=Td(b),k=null;if(g&&1<d.ranges.length)if(da&&da.text.join("\n")==b){if(0==d.ranges.length%da.text.length)for(var k=[],l=0;l<da.text.length;l++)k.push(f.splitLines(da.text[l]))}else h.length==d.ranges.length&&a.options.pasteLinesPerSelection&&
(k=gc(h,function(a){return[a]}));for(var m,l=d.ranges.length-1;0<=l;l--){m=d.ranges[l];var q=m.from(),n=m.to();m.empty()&&(c&&0<c?q=p(q.line,q.ch-c):a.state.overwrite&&!g?n=p(n.line,Math.min(t(f,n.line).text.length,n.ch+z(h).length)):da&&da.lineWise&&da.text.join("\n")==b&&(q=n=p(q.line,0)));m=a.curOp.updateInput;q={from:q,to:n,text:k?k[l%k.length]:h,origin:e||(g?"paste":a.state.cutIncoming?"cut":"+input")};kb(a.doc,q);N(a,"inputRead",a,q)}b&&!g&&Xf(a,b);fb(a);a.curOp.updateInput=m;a.curOp.typing=
!0;a.state.pasteIncoming=a.state.cutIncoming=!1}function Yf(a,b){var c=a.clipboardData&&a.clipboardData.getData("Text");if(c)return a.preventDefault(),b.isReadOnly()||b.options.disableInput||Y(b,function(){return Sd(b,c,0,null,"paste")}),!0}function Xf(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var c=a.doc.sel,d=c.ranges.length-1;0<=d;d--){var e=c.ranges[d];if(!(100<e.head.ch||d&&c.ranges[d-1].head.line==e.head.line)){var f=a.getModeAt(e.head),g=!1;if(f.electricChars)for(var h=0;h<
f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=Xb(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(t(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=Xb(a,e.head.line,"smart"));g&&N(a,"electricInput",a,e.head.line)}}}function Zf(a){for(var b=[],c=[],d=0;d<a.doc.sel.ranges.length;d++){var e=a.doc.sel.ranges[d].head.line,e={anchor:p(e,0),head:p(e+1,0)};c.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,ranges:c}}function $f(a,b){a.setAttribute("autocorrect",
"off");a.setAttribute("autocapitalize","off");a.setAttribute("spellcheck",!!b)}function ag(){var a=u("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),b=u("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");P?a.style.width="1000px":a.setAttribute("wrap","off");Yb&&(a.style.border="1px solid black");$f(a);return b}function Ud(a,b,c,d,e){function f(d){var f;f=e?Vg(a.cm,k,b,c):Ld(k,b,c);if(null==f){if(d=!d)d=b.line+
c,d<a.first||d>=a.first+a.size?d=!1:(b=new p(d,b.ch,b.sticky),d=k=t(a,d));if(d)b=Md(e,a.cm,k,b.line,c);else return!1}else b=f;return!0}var g=b,h=c,k=t(a,b.line);if("char"==d)f();else if("column"==d)f(!0);else if("word"==d||"group"==d){var l=null;d="group"==d;for(var m=a.cm&&a.cm.getHelper(b,"wordChars"),q=!0;!(0>c)||f(!q);q=!1){var n=k.text.charAt(b.ch)||"\n",n=hc(n,m)?"w":d&&"\n"==n?"n":!d||/\s/.test(n)?null:"p";!d||q||n||(n="s");if(l&&l!=n){0>c&&(c=1,f(),b.sticky="after");break}n&&(l=n);if(0<c&&
!f(!q))break}}h=Jd(a,b,g,h,!0);Uc(g,h)&&(h.hitSide=!0);return h}function bg(a,b,c,d){var e=a.doc,f=b.left,g;"page"==d?(g=Math.max(Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)-.5*Pa(a.display),3),g=(0<c?b.bottom:b.top)+c*g):"line"==d&&(g=0<c?b.bottom+3:b.top-3);for(;;){b=qd(a,f,g);if(!b.outside)break;if(0>c?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*c}return b}function cg(a,b){var c=kd(a,b.line);if(!c||c.hidden)return null;var d=t(a.doc,b.line),
c=Ae(c,d,b.line),d=ta(d,a.doc.direction),e="left";d&&(e=vb(d,b.ch)%2?"right":"left");c=Be(c.map,b.ch,e);c.offset="right"==c.collapse?c.end:c.start;return c}function lh(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;return!1}function qb(a,b){b&&(a.bad=!0);return a}function mh(a,b,c,d,e){function f(a){return function(b){return b.id==a}}function g(a){a&&(l&&(k+=m,l=!1),k+=a)}function h(b){if(1==b.nodeType){var c=b.getAttribute("cm-text");if(null!=c)g(c||b.textContent.replace(/\u200b/g,
""));else{var c=b.getAttribute("cm-marker"),r;if(c)b=a.findMarks(p(d,0),p(e+1,0),f(+c)),b.length&&(r=b[0].find(0))&&g(Ha(a.doc,r.from,r.to).join(m));else if("false"!=b.getAttribute("contenteditable")){(r=/^(pre|div|p)$/i.test(b.nodeName))&&l&&(k+=m,l=!1);for(c=0;c<b.childNodes.length;c++)h(b.childNodes[c]);r&&(l=!0)}}}else 3==b.nodeType&&g(b.nodeValue)}for(var k="",l=!1,m=a.doc.lineSeparator();;){h(b);if(b==c)break;b=b.nextSibling}return k}function Kc(a,b,c){var d;if(b==a.display.lineDiv){d=a.display.lineDiv.childNodes[c];
if(!d)return qb(a.clipPos(p(a.display.viewTo-1)),!0);b=null;c=0}else for(d=b;;d=d.parentNode){if(!d||d==a.display.lineDiv)return null;if(d.parentNode&&d.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==d)return nh(f,b,c)}}function nh(a,b,c){function d(b,c,d){for(var e=-1;e<(l?l.length:0);e++)for(var f=0>e?k.map:l[e],g=0;g<f.length;g+=3){var h=f[g+2];if(h==b||h==c){c=C(0>e?a.line:a.rest[e]);e=f[g]+d;if(0>d||h!=b)e=f[g+(d?1:0)];return p(c,
e)}}}var e=a.text.firstChild,f=!1;if(!b||!wa(e,b))return qb(p(C(a.line),0),!0);if(b==e&&(f=!0,b=e.childNodes[c],c=0,!b))return c=a.rest?z(a.rest):a.line,qb(p(C(c),c.text.length),f);var g=3==b.nodeType?b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,c&&(c=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=d(g,h,c))return qb(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-c:0;e;e=e.nextSibling){if(b=d(e,e.firstChild,0))return qb(p(b.line,
b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=d(h,h.firstChild,-1))return qb(p(b.line,b.ch+c),f);c+=h.textContent.length}}var T=navigator.userAgent,dg=navigator.platform,xa=/gecko\/\d/i.test(T),eg=/MSIE \d/.test(T),fg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(T),Zb=/Edge\/(\d+)/.exec(T),B=eg||fg||Zb,D=B&&(eg?document.documentMode||6:+(Zb||fg)[1]),P=!Zb&&/WebKit\//.test(T),oh=P&&/Qt\/\d+\.\d+/.test(T),qc=!Zb&&/Chrome\//.test(T),ka=/Opera\//.test(T),Vf=/Apple Computer/.test(navigator.vendor),
ph=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(T),Fg=/PhantomJS/.test(T),Yb=!Zb&&/AppleWebKit/.test(T)&&/Mobile\/\w+/.test(T),rc=/Android/.test(T),sb=Yb||rc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(T),ha=Yb||/Mac/.test(dg),dh=/\bCrOS\b/.test(T),qh=/win/i.test(dg),Ya=ka&&T.match(/Version\/(\d*\.\d*)/);Ya&&(Ya=Number(Ya[1]));Ya&&15<=Ya&&(ka=!1,P=!0);var Hf=ha&&(oh||ka&&(null==Ya||12.11>Ya)),Pd=xa||B&&9<=D,Sa=function(a,b){var c=a.className,d=Ea(b).exec(c);if(d){var e=c.slice(d.index+d[0].length);
a.className=c.slice(0,d.index)+(e?d[1]+e:"")}},db;db=document.createRange?function(a,b,c,d){var e=document.createRange();e.setEnd(d||a,c);e.setStart(a,b);return e}:function(a,b,c){var d=document.body.createTextRange();try{d.moveToElementText(a.parentNode)}catch(e){return d}d.collapse(!0);d.moveEnd("character",c);d.moveStart("character",b);return d};var $b=function(a){a.select()};Yb?$b=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:B&&($b=function(a){try{a.select()}catch(b){}});var Xa=
function(){this.id=null};Xa.prototype.set=function(a,b){clearTimeout(this.id);this.id=setTimeout(b,a)};var Hc={toString:function(){return"CodeMirror.Pass"}},ra={scroll:!1},Qd={origin:"*mouse"},ac={origin:"+move"},fc=[""],hg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,ig=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
uf=!1,ya=!1,wb=null,mg=function(){function a(a){return 247>=a?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(a):1424<=a&&1524>=a?"R":1536<=a&&1785>=a?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(a-
1536):1774<=a&&2220>=a?"r":8192<=a&&8203>=a?"w":8204==a?"b":"L"}function b(a,b,c){this.level=a;this.from=b;this.to=c}var c=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,d=/[stwN]/,e=/[LRr]/,f=/[Lb1n]/,g=/[1n]/;return function(h,k){var l="ltr"==k?"L":"R";if(0==h.length||"ltr"==k&&!c.test(h))return!1;for(var m=h.length,q=[],n=0;n<m;++n)q.push(a(h.charCodeAt(n)));for(var n=0,r=l;n<m;++n){var p=q[n];"m"==p?q[n]=r:r=p}n=0;for(r=l;n<m;++n)p=q[n],"1"==p&&"r"==r?q[n]="n":e.test(p)&&(r=p,"r"==p&&(q[n]="R"));
n=1;for(r=q[0];n<m-1;++n)p=q[n],"+"==p&&"1"==r&&"1"==q[n+1]?q[n]="1":","!=p||r!=q[n+1]||"1"!=r&&"n"!=r||(q[n]=r),r=p;for(n=0;n<m;++n)if(r=q[n],","==r)q[n]="N";else if("%"==r){r=void 0;for(r=n+1;r<m&&"%"==q[r];++r);for(p=n&&"!"==q[n-1]||r<m&&"1"==q[r]?"1":"N";n<r;++n)q[n]=p;n=r-1}n=0;for(r=l;n<m;++n)p=q[n],"L"==r&&"1"==p?q[n]="L":e.test(p)&&(r=p);for(r=0;r<m;++r)if(d.test(q[r])){n=void 0;for(n=r+1;n<m&&d.test(q[n]);++n);p="L"==(r?q[r-1]:l);for(p=p==("L"==(n<m?q[n]:l))?p?"L":"R":l;r<n;++r)q[r]=p;r=
n-1}for(var l=[],t,n=0;n<m;)if(f.test(q[n])){r=n;for(++n;n<m&&f.test(q[n]);++n);l.push(new b(0,r,n))}else{var u=n,r=l.length;for(++n;n<m&&"L"!=q[n];++n);for(p=u;p<n;)if(g.test(q[p])){u<p&&l.splice(r,0,new b(1,u,p));u=p;for(++p;p<n&&g.test(q[p]);++p);l.splice(r,0,new b(2,u,p));u=p}else++p;u<n&&l.splice(r,0,new b(1,u,n))}"ltr"==k&&(1==l[0].level&&(t=h.match(/^\s+/))&&(l[0].from=t[0].length,l.unshift(new b(0,0,t[0].length))),1==z(l).level&&(t=h.match(/\s+$/))&&(z(l).to-=t[0].length,l.push(new b(0,m-
t[0].length,m))));return"rtl"==k?l.reverse():l}}(),mc=[],v=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||mc).concat(c))},eh=function(){if(B&&9>D)return!1;var a=u("div");return"draggable"in a||"dragDrop"in a}(),ad,gd,Td=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;b<=d;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=
g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},rh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){var b;try{b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},Zg=function(){var a=u("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),md=null,bd={},bb={},cb={},G=function(a,
b,c){this.pos=this.start=0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=c};G.prototype.eol=function(){return this.pos>=this.string.length};G.prototype.sol=function(){return this.pos==this.lineStart};G.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};G.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};G.prototype.eat=function(a){var b=this.string.charAt(this.pos);if("string"==
typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b};G.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};G.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};G.prototype.skipToEnd=function(){this.pos=this.string.length};G.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};G.prototype.backUp=function(a){this.pos-=a};G.prototype.column=function(){this.lastColumnPos<
this.start&&(this.lastColumnValue=fa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?fa(this.string,this.lineStart,this.tabSize):0)};G.prototype.indentation=function(){return fa(this.string,null,this.tabSize)-(this.lineStart?fa(this.string,this.lineStart,this.tabSize):0)};G.prototype.match=function(a,b,c){if("string"==typeof a){var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,
a.length);if(d(e)==d(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};G.prototype.current=function(){return this.string.slice(this.start,this.pos)};G.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};G.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};G.prototype.baseToken=function(){var a=this.lineOracle;return a&&
a.baseToken(this.pos)};var oc=function(a,b){this.state=a;this.lookAhead=b},pa=function(a,b,c,d){this.state=b;this.doc=a;this.line=c;this.maxLookAhead=d||0;this.baseTokens=null;this.baseTokenPos=1};pa.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};pa.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};pa.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};pa.fromSaved=function(a,b,c){return b instanceof oc?new pa(a,La(a.mode,b.state),c,b.lookAhead):new pa(a,La(a.mode,b),c)};pa.prototype.save=function(a){a=!1!==a?La(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new oc(a,this.maxLookAhead):a};var oe=function(a,b,c){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=c},hb=function(a,b,c){this.text=a;be(this,b);this.height=c?c(this):1};hb.prototype.lineNo=function(){return C(this)};ab(hb);var tg={},sg={},eb=null,zb=null,Ce={left:0,right:0,top:0,bottom:0},Qa,Za=function(a,b,c){this.cm=c;var d=this.vert=u("div",[u("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=u("div",[u("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");a(d);a(e);v(d,"scroll",function(){d.clientHeight&&b(d.scrollTop,
"vertical")});v(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;B&&8>D&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};Za.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,c=a.scrollHeight>a.clientHeight+1,d=a.nativeBarWidth;c?(this.vert.style.display="block",this.vert.style.bottom=b?d+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-(b?d:0)))+"px"):(this.vert.style.display=
"",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=c?d+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(c?d:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==d&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:c?d:0,bottom:b?d:0}};Za.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=
a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};Za.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};Za.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ha&&!ph?"12px":"18px";this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none";this.disableHoriz=new Xa;this.disableVert=new Xa};Za.prototype.enableZeroWidthBar=
function(a,b,c){function d(){var e=a.getBoundingClientRect();("vert"==c?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.pointerEvents="none":b.set(1E3,d)}a.style.pointerEvents="auto";b.set(1E3,d)};Za.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var bc=function(){};bc.prototype.update=function(){return{bottom:0,right:0}};bc.prototype.setScrollLeft=function(){};
bc.prototype.setScrollTop=function(){};bc.prototype.clear=function(){};var Xe={"native":Za,"null":bc},Eg=0,xc=function(a,b,c){var d=a.display;this.viewport=b;this.visible=wd(d,a.doc,b);this.editorIsHidden=!d.wrapper.offsetWidth;this.wrapperHeight=d.wrapper.clientHeight;this.wrapperWidth=d.wrapper.clientWidth;this.oldDisplayWidth=Ma(a);this.force=c;this.dims=ld(a);this.events=[]};xc.prototype.signal=function(a,b){ga(a,b)&&this.events.push(arguments)};xc.prototype.finish=function(){for(var a=0;a<this.events.length;a++)F.apply(null,
this.events[a])};var zc=0,ba=null;B?ba=-.53:xa?ba=15:qc?ba=-.7:Vf&&(ba=-1/3);var ca=function(a,b){this.ranges=a;this.primIndex=b};ca.prototype.primary=function(){return this.ranges[this.primIndex]};ca.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(!Uc(c.anchor,d.anchor)||!Uc(c.head,d.head))return!1}return!0};ca.prototype.deepCopy=function(){for(var a=
[],b=0;b<this.ranges.length;b++)a[b]=new A(Vc(this.ranges[b].anchor),Vc(this.ranges[b].head));return new ca(a,this.primIndex)};ca.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};ca.prototype.contains=function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(0<=y(b,d.from())&&0>=y(a,d.to()))return c}return-1};var A=function(a,b){this.anchor=a;this.head=b};A.prototype.from=function(){return jc(this.anchor,
this.head)};A.prototype.to=function(){return ic(this.anchor,this.head)};A.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};Nb.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;c<d;++c){var e=this.lines[c];this.height-=e.height;var f=e;f.parent=null;ae(f);N(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c;this.lines=this.lines.slice(0,
a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,c){for(b=a+b;a<b;++a)if(c(this.lines[a]))return!0}};Ob.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(a<e){var f=Math.min(b,e-a),g=d.height;d.removeInner(a,f);this.height-=g-d.height;e==f&&(this.children.splice(c--,1),d.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-
b&&(1<this.children.length||!(this.children[0]instanceof Nb))&&(c=[],this.collapse(c),this.children=[new Nb(c)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length;this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(a<=f){e.insertInner(a,b,c);if(e.lines&&50<e.lines.length){for(b=a=e.lines.length%25+25;b<e.lines.length;)c=new Nb(e.lines.slice(b,
b+=25)),e.height-=c.height,this.children.splice(++d,0,c),c.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5),b=new Ob(b);if(a.parent){a.size-=b.size;a.height-=b.height;var c=L(a.parent.children,a);a.parent.children.splice(c+1,0,b)}else c=new Ob(a.children),c.parent=a,a.children=[c,b],a=c;b.parent=a.parent}while(10<a.children.length);a.parent.maybeSpill()}},iterN:function(a,
b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,c))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var Pb=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.doc=a;this.node=b};Pb.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,c=this.line,d=C(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=Bb(this);ma(c,Math.max(0,c.height-f));
a&&(Y(a,function(){var b=-f;oa(c)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&vc(a,b);Aa(a,d,"widget")}),N(a,"lineWidgetCleared",a,this,d))}};Pb.prototype.changed=function(){var a=this,b=this.height,c=this.doc.cm,d=this.line;this.height=null;var e=Bb(this)-b;e&&(ma(d,d.height+e),c&&Y(c,function(){c.curOp.forceUpdate=!0;oa(d)<(c.curOp&&c.curOp.scrollTop||c.doc.scrollTop)&&vc(c,e);N(c,"lineWidgetChanged",c,a,C(d))}))};ab(Pb);var Af=0,Ca=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=
++Af};Ca.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&Ua(a);if(ga(this,"clear")){var c=this.find();c&&N(this,"clear",c.from,c.to)}for(var d=c=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=ub(f.markedSpans,this);a&&!this.collapsed?Aa(a,C(f),"text"):a&&(null!=g.to&&(d=C(f)),null!=g.from&&(c=C(f)));for(var h=f,k=f.markedSpans,l=g,m=void 0,p=0;p<k.length;++p)k[p]!=l&&(m||(m=[])).push(k[p]);h.markedSpans=m;null==g.from&&this.collapsed&&!Ka(this.doc,
f)&&a&&ma(f,Pa(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=na(this.lines[e]),g=lc(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=c&&a&&this.collapsed&&U(a,c,d+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&qf(a.doc));a&&N(a,"markerCleared",a,this,c,d);b&&Va(a);this.parent&&this.parent.clear()}};Ca.prototype.find=function(a,b){null==
a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=ub(f.markedSpans,this);if(null!=g.from&&(c=p(b?f:C(f),g.from),-1==a))return c;if(null!=g.to&&(d=p(b?f:C(f),g.to),1==a))return d}return c&&{from:c,to:d}};Ca.prototype.changed=function(){var a=this,b=this.find(-1,!0),c=this,d=this.doc.cm;b&&d&&Y(d,function(){var e=b.line,f=C(b.line);if(f=kd(d,f))De(f),d.curOp.selectionChanged=d.curOp.forceUpdate=!0;d.curOp.updateMaxLine=!0;Ka(c.doc,e)||null==c.height||(f=
c.height,c.height=null,(f=Bb(c)-f)&&ma(e,e.height+f));N(d,"markerChanged",d,a)})};Ca.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=L(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Ca.prototype.detachLine=function(a){this.lines.splice(L(this.lines,a),1);!this.lines.length&&this.doc.cm&&(a=this.doc.cm.curOp,(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};
ab(Ca);var Qb=function(a,b){this.markers=a;this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};Qb.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();N(this,"clear")}};Qb.prototype.find=function(a,b){return this.primary.find(a,b)};ab(Qb);var sh=0,V=function(a,b,c,d,e){if(!(this instanceof V))return new V(a,b,c,d,e);null==c&&(c=0);Ob.call(this,[new Nb([new hb("",null)])]);this.first=c;this.scrollTop=
this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=c;c=p(c,0);this.sel=va(c);this.history=new Ac(null);this.id=++sh;this.modeOption=b;this.lineSep=d;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));Fd(this,{from:c,to:c,text:a});O(this,va(c),ra)};V.prototype=Wd(Ob.prototype,{constructor:V,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,
b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=Sc(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:K(function(a){var b=p(this.first,0),c=this.first+this.size-1;kb(this,{from:b,to:p(c,t(this,c).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&Gb(this.cm,0,0);O(this,va(b),ra)}),replaceRange:function(a,b,c,d){b=
w(this,b);c=c?w(this,c):b;lb(this,a,b,c,d)},getRange:function(a,b,c){a=Ha(this,w(this,a),w(this,b));return!1===c?a:a.join(c||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(tb(this,a))return t(this,a)},getLineNumber:function(a){return C(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=t(this,a));return na(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+
this.size-1},clipPos:function(a){return w(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:K(function(a,b,c){a=w(this,"number"==typeof a?p(a,b||0):a);O(this,va(a,null),c)}),setSelection:K(function(a,b,c){var d=w(this,a);a=w(this,b||a);O(this,va(d,a),c)}),extendSelection:K(function(a,
b,c){Cc(this,w(this,a),b&&w(this,b),c)}),extendSelections:K(function(a,b){mf(this,Zd(this,a),b)}),extendSelectionsBy:K(function(a,b){var c=gc(this.sel.ranges,a);mf(this,Zd(this,c),b)}),setSelections:K(function(a,b,c){if(a.length){for(var d=[],e=0;e<a.length;e++)d[e]=new A(w(this,a[e].anchor),w(this,a[e].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));O(this,la(d,b),c)}}),addSelection:K(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new A(w(this,a),w(this,b||a)));O(this,la(d,d.length-
1),c)}),getSelection:function(a){for(var b=this.sel.ranges,c,d=0;d<b.length;d++){var e=Ha(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return!1===a?c:c.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=Ha(this,c[d].from(),c[d].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:K(function(a,
b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:c}}if(a=b&&"end"!=b){a=[];e=c=p(this.first,0);for(f=0;f<d.length;f++){var h=d[f],g=df(h.from,c,e),k=df(Ba(h),c,e);c=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>y(h.head,h.anchor),a[f]=new A(h?k:g,h?g:k)):a[f]=new A(g,g)}a=new ca(a,this.sel.primIndex)}b=a;for(a=d.length-1;0<=a;a--)kb(this,d[a]);b?nf(this,b):this.cm&&fb(this.cm)}),undo:K(function(){Ec(this,"undo")}),
redo:K(function(){Ec(this,"redo")}),undoSelection:K(function(){Ec(this,"undo",!0)}),redoSelection:K(function(){Ec(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new Ac(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=
this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:ib(this.history.done),undone:ib(this.history.undone)}},setHistory:function(a){var b=this.history=new Ac(this.history.maxGeneration);b.done=ib(a.done.slice(0),null,!0);b.undone=ib(a.undone.slice(0),null,!0)},setGutterMarker:K(function(a,
b,c){return Mb(this,a,"gutter",function(a){var e=a.gutterMarkers||(a.gutterMarkers={});e[b]=c;!c&&Xd(e)&&(a.gutterMarkers=null);return!0})}),clearGutter:K(function(a){var b=this;this.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&Mb(b,c,"gutter",function(){c.gutterMarkers[a]=null;Xd(c.gutterMarkers)&&(c.gutterMarkers=null);return!0})})}),lineInfo:function(a){var b;if("number"==typeof a){if(!tb(this,a))return null;b=a;a=t(this,a);if(!a)return null}else if(b=C(a),null==b)return null;return{line:b,
handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:K(function(a,b,c){return Mb(this,a,"gutter"==b?"gutter":"class",function(a){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(a[e]){if(Ea(c).test(a[e]))return!1;a[e]+=" "+c}else a[e]=c;return!0})}),removeLineClass:K(function(a,b,c){return Mb(this,a,"gutter"==b?"gutter":"class",function(a){var e="text"==b?"textClass":
"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=a[e];if(f)if(null==c)a[e]=null;else{var g=f.match(Ea(c));if(!g)return!1;var h=g.index+g[0].length;a[e]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:K(function(a,b,c){return Ng(this,a,b,c)}),removeLineWidget:function(a){a.clear()},markText:function(a,b,c){return mb(this,w(this,a),w(this,b),c,c&&c.type||"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?
b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=w(this,a);return mb(this,a,a,c,"bookmark")},findMarksAt:function(a){a=w(this,a);var b=[],c=t(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=w(this,a);b=w(this,b);var d=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=
0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||c&&!c(h.marker)||d.push(h.marker.parent||h.marker)}++e});return d},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var c=0;c<b.length;++c)null!=b[c].from&&a.push(b[c].marker)});return a},posFromIndex:function(a){var b,c=this.first,d=this.lineSeparator().length;this.iter(function(e){e=e.text.length+d;if(e>a)return b=a,!0;a-=e;++c});return w(this,
p(c,b))},indexFromPos:function(a){a=w(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var c=this.lineSeparator().length;this.iter(this.first,a.line,function(a){b+=a.text.length+c});return b},copy:function(a){var b=new V(Sc(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||
(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<c&&(c=a.to);b=new V(Sc(this,b,c),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Bf(this);for(c=0;c<a.length;c++){var d=a[c],e=d.find(),f=b.clipPos(e.from),e=b.clipPos(e.to);y(f,e)&&(f=mb(b,f,e,d.primary,d.primary.type),d.markers.push(f),
f.parent=d)}return b},unlinkDoc:function(a){a instanceof E&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);Pg(Bf(this));break}if(a.history==this.history){var c=[a.id];Wa(a,function(a){return c.push(a.id)},!0);a.history=new Ac(null);a.history.done=ib(this.history.done,c);a.history.undone=ib(this.history.undone,c)}},iterLinkedDocs:function(a){Wa(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},
splitLines:function(a){return this.lineSep?a.split(this.lineSep):Td(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:K(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(a){return a.order=null}),this.cm&&Jg(this.cm))})});V.prototype.eachLine=V.prototype.iter;for(var Df=0,Uf=!1,Da={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",
37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"\x3d",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"\x3d",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"\x3d",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},cc=0;10>cc;cc++)Da[cc+48]=Da[cc+96]=String(cc);for(var Lc=65;90>=Lc;Lc++)Da[Lc]=String.fromCharCode(Lc);
for(var dc=1;12>=dc;dc++)Da[dc+111]=Da[dc+63235]="F"+dc;var Rb={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo",
"Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection",
"Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo",
"Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft",
"Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};Rb["default"]=ha?Rb.macDefault:Rb.pcDefault;var Sb={selectAll:sf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),ra)},killLine:function(a){return ob(a,function(b){if(b.empty()){var c=t(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:p(b.head.line+
1,0)}:{from:b.head,to:p(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return ob(a,function(b){return{from:p(b.from().line,0),to:w(a.doc,p(b.to().line+1,0))}})},delLineLeft:function(a){return ob(a,function(a){return{from:p(a.from().line,0),to:a.from()}})},delWrappedLineLeft:function(a){return ob(a,function(b){var c=a.charCoords(b.head,"div").top+5;return{from:a.coordsChar({left:0,top:c},"div"),to:b.from()}})},delWrappedLineRight:function(a){return ob(a,function(b){var c=
a.charCoords(b.head,"div").top+5,c=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div");return{from:b.from(),to:c}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(p(a.firstLine(),0))},goDocEnd:function(a){return a.extendSelection(p(a.lastLine()))},goLineStart:function(a){return a.extendSelectionsBy(function(b){return Jf(a,
b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return Kf(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var c=t(a.doc,b),d;d=c;for(var e;e=Ja(d,!1);)d=e.find(1,!0).line;d!=c&&(b=C(d));return Md(!0,a,c,b,-1)},{origin:"+move",bias:-1})},goLineRight:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+
100,top:b},"div")},ac)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},ac)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var c=a.cursorCoords(b.head,"div").top+5,c=a.coordsChar({left:0,top:c},"div");return c.ch<a.getLine(c.line).search(/\S/)?Kf(a,b.head):c},ac)},goLineUp:function(a){return a.moveV(-1,"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,
"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,"group")},goGroupLeft:function(a){return a.moveH(-1,"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,
"char")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},indentMore:function(a){return a.indentSelection("add")},indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},
insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),f=fa(a.getLine(f.line),f.ch,d);b.push(Pc(d-f%d))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return Y(a,function(){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++)if(b[d].empty()){var e=b[d].head,f=t(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new p(e.line,e.ch-1)),0<e.ch)e=
new p(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),p(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=t(a.doc,e.line-1).text;g&&(e=new p(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),p(e.line-1,g.length-1),e,"+transpose"))}c.push(new A(e,e))}a.setSelections(c)})},newlineAndIndent:function(a){return Y(a,function(){for(var b=a.listSelections(),c=b.length-1;0<=c;c--)a.replaceRange(a.doc.lineSeparator(),b[c].anchor,b[c].head,"+input");
b=a.listSelections();for(c=0;c<b.length;c++)a.indentLine(b[c].from().line,null,!0);fb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},Xg=new Xa,Nd=null,Od=function(a,b,c){this.time=a;this.pos=b;this.button=c};Od.prototype.compare=function(a,b,c){return this.time+400>a&&0==y(b,this.pos)&&c==this.button};var Vb,Ub,pb={toString:function(){return"CodeMirror.Init"}},Tf={},Jc={};E.defaults=Tf;E.optionHandlers=Jc;var Rd=[];E.defineInitHook=
function(a){return Rd.push(a)};var da=null,x=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Xa;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};x.prototype.init=function(a){function b(a){if(!I(e,a)){if(e.somethingSelected())Wf({lineWise:!1,text:e.getSelections()}),"cut"==a.type&&e.replaceSelection("",null,"cut");else if(e.options.lineWiseCopyCut){var b=Zf(e);Wf({lineWise:!0,text:b.text});"cut"==a.type&&
e.operation(function(){e.setSelections(b.ranges,0,ra);e.replaceSelection("",null,"cut")})}else return;if(a.clipboardData){a.clipboardData.clearData();var c=da.text.join("\n");a.clipboardData.setData("Text",c);if(a.clipboardData.getData("Text")==c){a.preventDefault();return}}var l=ag();a=l.firstChild;e.display.lineSpace.insertBefore(l,e.display.lineSpace.firstChild);a.value=da.text.join("\n");var m=document.activeElement;$b(a);setTimeout(function(){e.display.lineSpace.removeChild(l);m.focus();m==f&&
d.showPrimarySelection()},50)}}var c=this,d=this,e=d.cm,f=d.div=a.lineDiv;$f(f,e.options.spellcheck);v(f,"paste",function(a){I(e,a)||Yf(a,e)||11>=D&&setTimeout(J(e,function(){return c.updateFromDOM()}),20)});v(f,"compositionstart",function(a){c.composing={data:a.data,done:!1}});v(f,"compositionupdate",function(a){c.composing||(c.composing={data:a.data,done:!1})});v(f,"compositionend",function(a){c.composing&&(a.data!=c.composing.data&&c.readFromDOMSoon(),c.composing.done=!0)});v(f,"touchstart",function(){return d.forceCompositionEnd()});
v(f,"input",function(){c.composing||c.readFromDOMSoon()});v(f,"copy",b);v(f,"cut",b)};x.prototype.prepareSelection=function(){var a=Me(this.cm,!1);a.focus=this.cm.state.focused;return a};x.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};x.prototype.showPrimarySelection=function(){var a=window.getSelection(),b=this.cm,c=b.doc.sel.primary(),d=c.from(),c=c.to();if(b.display.viewTo==b.display.viewFrom||d.line>=
b.display.viewTo||c.line<b.display.viewFrom)a.removeAllRanges();else{var e=Kc(b,a.anchorNode,a.anchorOffset),f=Kc(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=y(jc(e,f),d)||0!=y(ic(e,f),c))if(e=b.display.view,d=d.line>=b.display.viewFrom&&cg(b,d)||{node:e[0].measure.map[2],offset:0},c=c.line<b.display.viewTo&&cg(b,c),c||(c=e[e.length-1].measure,c=c.maps?c.maps[c.maps.length-1]:c.map,c={node:c[c.length-1],offset:c[c.length-2]-c[c.length-3]}),d&&c){var e=a.rangeCount&&a.getRangeAt(0),g;
try{g=db(d.node,d.offset,c.offset,c.node)}catch(h){}g&&(!xa&&b.state.focused?(a.collapse(d.node,d.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):xa&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};x.prototype.startGracePeriod=function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=
!0})},20)};x.prototype.showMultipleSelections=function(a){Z(this.cm.display.cursorDiv,a.cursors);Z(this.cm.display.selectionDiv,a.selection)};x.prototype.rememberSelection=function(){var a=window.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;this.lastFocusOffset=a.focusOffset};x.prototype.selectionInEditor=function(){var a=window.getSelection();if(!a.rangeCount)return!1;a=a.getRangeAt(0).commonAncestorContainer;return wa(this.div,
a)};x.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())};x.prototype.blur=function(){this.div.blur()};x.prototype.getField=function(){return this.div};x.prototype.supportsTouch=function(){return!0};x.prototype.receivedFocus=function(){function a(){b.cm.state.focused&&(b.pollSelection(),b.polling.set(b.cm.options.pollInterval,a))}var b=this;this.selectionInEditor()?this.pollSelection():Y(this.cm,
function(){return b.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};x.prototype.selectionChanged=function(){var a=window.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};x.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=window.getSelection(),b=this.cm;if(rc&&qc&&this.cm.options.gutters.length&&
lh(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var c=Kc(b,a.anchorNode,a.anchorOffset),d=Kc(b,a.focusNode,a.focusOffset);c&&d&&Y(b,function(){O(b.doc,va(c,d),ra);if(c.bad||d.bad)b.curOp.selectionChanged=!0})}}};x.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var a=this.cm,b=a.display,c=a.doc.sel.primary(),
d=c.from(),e=c.to();0==d.ch&&d.line>a.firstLine()&&(d=p(d.line-1,t(a.doc,d.line-1).length));e.ch==t(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=p(e.line+1,0));if(d.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;d.line==b.viewFrom||0==(f=Na(a,d.line))?(c=C(b.view[0].line),f=b.view[0].node):(c=C(b.view[f].line),f=b.view[f-1].node.nextSibling);var g=Na(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):(e=C(b.view[g+1].line)-1,b=b.view[g+1].node.previousSibling);if(!f)return!1;
b=a.doc.splitLines(mh(a,f,b,c,e));for(f=Ha(a.doc,p(c,0),p(e,t(a.doc,e).text.length));1<b.length&&1<f.length;)if(z(b)==z(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),c++;else break;for(var h=0,g=0,k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=z(b);l=z(f);for(m=Math.min(k.length-(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)++g;if(1==b.length&&1==f.length&&c==d.line)for(;h&&h>d.ch&&
k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");d=p(c,h);c=p(e,f.length?z(f).length-g:0);if(1<b.length||b[0]||y(d,c))return lb(a.doc,b,d,c,"+input"),!0};x.prototype.ensurePolled=function(){this.forceCompositionEnd()};x.prototype.reset=function(){this.forceCompositionEnd()};x.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,
this.updateFromDOM(),this.div.blur(),this.div.focus())};x.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};x.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&this.pollContent()||Y(this.cm,function(){return U(a.cm)})};x.prototype.setUneditable=function(a){a.contentEditable="false"};x.prototype.onKeyPress=
function(a){0!=a.charCode&&(a.preventDefault(),this.cm.isReadOnly()||J(this.cm,Sd)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};x.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};x.prototype.onContextMenu=function(){};x.prototype.resetPosition=function(){};x.prototype.needsContentAttribute=!0;var H=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Xa;this.hasSelection=!1;this.composing=null};H.prototype.init=
function(a){function b(a){if(!I(e,a)){if(e.somethingSelected())da={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var b=Zf(e);da={lineWise:!0,text:b.text};"cut"==a.type?e.setSelections(b.ranges,null,ra):(d.prevInput="",g.value=b.text.join("\n"),$b(g))}else return;"cut"==a.type&&(e.state.cutIncoming=!0)}}var c=this,d=this,e=this.cm,f=this.wrapper=ag(),g=this.textarea=f.firstChild;a.wrapper.insertBefore(f,a.wrapper.firstChild);Yb&&(g.style.width="0px");v(g,"input",function(){B&&
9<=D&&c.hasSelection&&(c.hasSelection=null);d.poll()});v(g,"paste",function(a){I(e,a)||Yf(a,e)||(e.state.pasteIncoming=!0,d.fastPoll())});v(g,"cut",b);v(g,"copy",b);v(a.scroller,"paste",function(b){ua(a,b)||I(e,b)||(e.state.pasteIncoming=!0,d.focus())});v(a.lineSpace,"selectstart",function(b){ua(a,b)||Q(b)});v(g,"compositionstart",function(){var a=e.getCursor("from");d.composing&&d.composing.range.clear();d.composing={start:a,range:e.markText(a,e.getCursor("to"),{className:"CodeMirror-composing"})}});
v(g,"compositionend",function(){d.composing&&(d.poll(),d.composing.range.clear(),d.composing=null)})};H.prototype.prepareSelection=function(){var a=this.cm,b=a.display,c=a.doc,d=Me(a);if(a.options.moveInputWithCursor){var a=ja(a,c.sel.primary().head,"div"),c=b.wrapper.getBoundingClientRect(),e=b.lineDiv.getBoundingClientRect();d.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-c.top));d.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-c.left))}return d};H.prototype.showSelection=
function(a){var b=this.cm.display;Z(b.cursorDiv,a.cursors);Z(b.selectionDiv,a.selection);null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")};H.prototype.reset=function(a){if(!this.contextMenuPending&&!this.composing){var b=this.cm;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&$b(this.textarea),B&&9<=D&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",B&&9<=D&&(this.hasSelection=null))}};H.prototype.getField=
function(){return this.textarea};H.prototype.supportsTouch=function(){return!1};H.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!sb||sa()!=this.textarea))try{this.textarea.focus()}catch(a){}};H.prototype.blur=function(){this.textarea.blur()};H.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};H.prototype.receivedFocus=function(){this.slowPoll()};H.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,
function(){a.poll();a.cm.state.focused&&a.slowPoll()})};H.prototype.fastPoll=function(){function a(){c.poll()||b?(c.pollingFast=!1,c.slowPoll()):(b=!0,c.polling.set(60,a))}var b=!1,c=this;c.pollingFast=!0;c.polling.set(20,a)};H.prototype.poll=function(){var a=this,b=this.cm,c=this.textarea,d=this.prevInput;if(this.contextMenuPending||!b.state.focused||rh(c)&&!d&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=c.value;if(e==d&&!b.somethingSelected())return!1;
if(B&&9<=D&&this.hasSelection===e||ha&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),!1;if(b.doc.sel==b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||d||(d="​");if(8666==f)return this.reset(),this.cm.execCommand("undo")}for(var g=0,f=Math.min(d.length,e.length);g<f&&d.charCodeAt(g)==e.charCodeAt(g);)++g;Y(b,function(){Sd(b,e.slice(g),d.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?c.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),
a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});return!0};H.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};H.prototype.onKeyPress=function(){B&&9<=D&&(this.hasSelection=null);this.fastPoll()};H.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var a=e.somethingSelected(),b="​"+(a?g.value:"");g.value="⇚";g.value=b;d.prevInput=a?"":"​";g.selectionStart=1;g.selectionEnd=b.length;
f.selForContextMenu=e.doc.sel}}function c(){d.contextMenuPending=!1;d.wrapper.style.cssText=m;g.style.cssText=l;B&&9>D&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k);if(null!=g.selectionStart){(!B||B&&9>D)&&b();var a=0,c=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"​"==d.prevInput?J(e,sf)(e):10>a++?f.detectingSelectAll=setTimeout(c,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(c,200)}}var d=this,e=d.cm,f=e.display,g=d.textarea,
h=Ra(e,a),k=f.scroller.scrollTop;if(h&&!ka){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&J(e,O)(e.doc,va(h),ra);var l=g.style.cssText,m=d.wrapper.style.cssText;d.wrapper.style.cssText="position: absolute";h=d.wrapper.getBoundingClientRect();g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(B?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity\x3d5);";
var p;P&&(p=window.scrollY);f.input.focus();P&&window.scrollTo(null,p);f.input.reset();e.somethingSelected()||(g.value=d.prevInput=" ");d.contextMenuPending=!0;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);B&&9<=D&&b();if(Pd){xb(a);var n=function(){aa(window,"mouseup",n);setTimeout(c,20)};v(window,"mouseup",n)}else setTimeout(c,50)}};H.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a};H.prototype.setUneditable=function(){};H.prototype.needsContentAttribute=
!1;(function(a){function b(b,e,f,g){a.defaults[b]=e;f&&(c[b]=g?function(a,b,c){c!=pb&&f(a,b,c)}:f)}var c=a.optionHandlers;a.defineOption=b;a.Init=pb;b("value","",function(a,b){return a.setValue(b)},!0);b("mode",null,function(a,b){a.doc.modeOption=b;Ed(a)},!0);b("indentUnit",2,Ed,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(a){Kb(a);Db(a);U(a)},!0);b("lineSeparator",null,function(a,b){if(a.doc.lineSep=b){var c=[],g=a.doc.first;a.doc.iter(function(a){for(var d=0;;){var h=a.text.indexOf(b,
d);if(-1==h)break;d=h+b.length;c.push(p(g,h))}g++});for(var h=c.length-1;0<=h;h--)lb(a.doc,b,c[h],p(c[h].line,c[h].ch+b.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(a,b,c){a.state.specialChars=new RegExp(b.source+(b.test("\t")?"":"|\t"),"g");c!=pb&&a.refresh()});b("specialCharPlaceholder",wg,function(a){return a.refresh()},!0);b("electricChars",!0);b("inputStyle",sb?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");
},!0);b("spellcheck",!1,function(a,b){return a.getInputField().spellcheck=b},!0);b("rtlMoveVisually",!qh);b("wholeLineUpdateBefore",!0);b("theme","default",function(a){Sf(a);Wb(a)},!0);b("keyMap","default",function(a,b,c){b=Fc(b);(c=c!=pb&&Fc(c))&&c.detach&&c.detach(a,b);b.attach&&b.attach(a,c||null)});b("extraKeys",null);b("configureMouse",null);b("lineWrapping",!1,jh,!0);b("gutters",[],function(a){Cd(a.options);Wb(a)},!0);b("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?sd(a.display)+
"px":"0";a.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(a){return gb(a)},!0);b("scrollbarStyle","native",function(a){We(a);gb(a);a.display.scrollbars.setScrollTop(a.doc.scrollTop);a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)},!0);b("lineNumbers",!1,function(a){Cd(a.options);Wb(a)},!0);b("firstLineNumber",1,Wb,!0);b("lineNumberFormatter",function(a){return a},Wb,!0);b("showCursorWhenSelecting",!1,Eb,!0);b("resetSelectionOnContextMenu",!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",
!0);b("readOnly",!1,function(a,b){"nocursor"==b&&(Fb(a),a.display.input.blur());a.display.input.readOnlyChanged(b)});b("disableInput",!1,function(a,b){b||a.display.input.reset()},!0);b("dragDrop",!0,ih);b("allowDropFileTypes",null);b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Eb,!0);b("singleCursorHeightPerLine",!0,Eb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,Kb,!0);b("addModeClass",!1,Kb,!0);b("pollInterval",100);b("undoDepth",200,function(a,b){return a.doc.history.undoDepth=
b});b("historyEventDelay",1250);b("viewportMargin",10,function(a){return a.refresh()},!0);b("maxHighlightLength",1E4,Kb,!0);b("moveInputWithCursor",!0,function(a,b){b||a.display.input.resetPosition()});b("tabindex",null,function(a,b){return a.display.input.getField().tabIndex=b||""});b("autofocus",null);b("direction","ltr",function(a,b){return a.doc.setDirection(b)},!0)})(E);(function(a){var b=a.optionHandlers,c=a.helpers={};a.prototype={constructor:a,focus:function(){window.focus();this.display.input.focus()},
setOption:function(a,c){var f=this.options,g=f[a];if(f[a]!=c||"mode"==a)f[a]=c,b.hasOwnProperty(a)&&J(this,b[a])(this,c,g),F(this,"optionChange",this,a)},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](Fc(a))},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||b[c].name==a)return b.splice(c,1),!0},addOverlay:S(function(b,c){var f=b.token?b:a.getMode(this.options,b);if(f.startState)throw Error("Overlays may not be stateful.");
gg(this.state.overlays,{mode:f,modeSpec:b,opaque:c&&c.opaque,priority:c&&c.priority||0},function(a){return a.priority});this.state.modeGen++;U(this)}),removeOverlay:S(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var g=b[c].modeSpec;if(g==a||"string"==typeof a&&g.name==a){b.splice(c,1);this.state.modeGen++;U(this);break}}}),indentLine:S(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract");tb(this.doc,a)&&Xb(this,
a,b,c)}),indentSelection:S(function(a){for(var b=this.doc.sel.ranges,c=-1,g=0;g<b.length;g++){var h=b[g];if(h.empty())h.head.line>c&&(Xb(this,h.head.line,a,!0),c=h.head.line,g==this.doc.sel.primIndex&&fb(this));else{for(var k=h.from(),h=h.to(),l=Math.max(c,k.line),c=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1,h=l;h<c;++h)Xb(this,h,a);h=this.doc.sel.ranges;0==k.ch&&b.length==h.length&&0<h[g].from().ch&&Id(this.doc,g,new A(k,h[g].to()),ra)}}}),getTokenAt:function(a,b){return ne(this,a,b)},getLineTokens:function(a,
b){return ne(this,p(a),b,!0)},getTokenTypeAt:function(a){a=w(this.doc,a);var b=le(this,t(this.doc,a.line)),c=0,g=(b.length-1)/2;a=a.ch;if(0==a)b=b[2];else for(;;){var h=c+g>>1;if((h?b[2*h-1]:0)>=a)g=h;else if(b[2*h+1]<a)c=h+1;else{b=b[2*h+2];break}}c=b?b.indexOf("overlay "):-1;return 0>c?b:0==c?null:b.slice(0,c-1)},getModeAt:function(b){var c=this.doc.mode;return c.innerMode?a.innerMode(c,this.getTokenAt(b).state).mode:c},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,
b){var f=[];if(!c.hasOwnProperty(b))return f;var g=c[b],h=this.getModeAt(a);if("string"==typeof h[b])g[h[b]]&&f.push(g[h[b]]);else if(h[b])for(var k=0;k<h[b].length;k++){var l=g[h[b][k]];l&&f.push(l)}else h.helperType&&g[h.helperType]?f.push(g[h.helperType]):g[h.name]&&f.push(g[h.name]);for(k=0;k<g._global.length;k++)l=g._global[k],l.pred(h,this)&&-1==L(f,l.val)&&f.push(l.val);return f},getStateAfter:function(a,b){var c=this.doc;a=Math.max(c.first,Math.min(null==a?c.first+c.size-1:a,c.first+c.size-
1));return yb(this,a+1,b).state},cursorCoords:function(a,b){var c;c=this.doc.sel.primary();c=null==a?c.head:"object"==typeof a?w(this.doc,a):a?c.from():c.to();return ja(this,c,b||"page")},charCoords:function(a,b){return od(this,w(this.doc,a),b||"page")},coordsChar:function(a,b){a=He(this,a,b||"page");return qd(this,a.left,a.top)},lineAtHeight:function(a,b){a=He(this,{top:a,left:0},b||"page").top;return Ia(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b,c){var g=!1;if("number"==typeof a){var h=
this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>h&&(a=h,g=!0);a=t(this.doc,a)}return sc(this,a,{top:0,left:0},b||"page",c||g).top+(g?this.doc.height-oa(a):0)},defaultTextHeight:function(){return Pa(this.display)},defaultCharWidth:function(){return Cb(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,g,h){var k=this.display;a=ja(this,w(this.doc,a));var l=a.bottom,m=a.left;b.style.position="absolute";b.setAttribute("cm-ignore-events",
"true");this.display.input.setUneditable(b);k.sizer.appendChild(b);if("over"==g)l=a.top;else if("above"==g||"near"==g){var p=Math.max(k.wrapper.clientHeight,this.doc.height),n=Math.max(k.sizer.clientWidth,k.lineSpace.clientWidth);("above"==g||a.bottom+b.offsetHeight>p)&&a.top>b.offsetHeight?l=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=p&&(l=a.bottom);m+b.offsetWidth>n&&(m=n-b.offsetWidth)}b.style.top=l+"px";b.style.left=b.style.right="";"right"==h?(m=k.sizer.clientWidth-b.offsetWidth,b.style.right=
"0px"):("left"==h?m=0:"middle"==h&&(m=(k.sizer.clientWidth-b.offsetWidth)/2),b.style.left=m+"px");c&&(a=yd(this,{left:m,top:l,right:m+b.offsetWidth,bottom:l+b.offsetHeight}),null!=a.scrollTop&&Hb(this,a.scrollTop),null!=a.scrollLeft&&Ta(this,a.scrollLeft))},triggerOnKeyDown:S(Mf),triggerOnKeyPress:S(Of),triggerOnKeyUp:Nf,triggerOnMouseDown:S(Pf),execCommand:function(a){if(Sb.hasOwnProperty(a))return Sb[a].call(null,this)},triggerElectric:S(function(a){Xf(this,a)}),findPosH:function(a,b,c,g){var h=
1;0>b&&(h=-1,b=-b);a=w(this.doc,a);for(var k=0;k<b&&(a=Ud(this.doc,a,h,c,g),!a.hitSide);++k);return a},moveH:S(function(a,b){var c=this;this.extendSelectionsBy(function(g){return c.display.shift||c.doc.extend||g.empty()?Ud(c.doc,g.head,a,b,c.options.rtlMoveVisually):0>a?g.from():g.to()},ac)}),deleteH:S(function(a,b){var c=this.doc;this.doc.sel.somethingSelected()?c.replaceSelection("",null,"+delete"):ob(this,function(g){var h=Ud(c,g.head,a,b,!1);return 0>a?{from:h,to:g.head}:{from:g.head,to:h}})}),
findPosV:function(a,b,c,g){var h=1;0>b&&(h=-1,b=-b);var k=w(this.doc,a);for(a=0;a<b&&(k=ja(this,k,"div"),null==g?g=k.left:k.left=g,k=bg(this,k,h,c),!k.hitSide);++a);return k},moveV:S(function(a,b){var c=this,g=this.doc,h=[],k=!this.display.shift&&!g.extend&&g.sel.somethingSelected();g.extendSelectionsBy(function(l){if(k)return 0>a?l.from():l.to();var p=ja(c,l.head,"div");null!=l.goalColumn&&(p.left=l.goalColumn);h.push(p.left);var n=bg(c,p,a,b);"page"==b&&l==g.sel.primary()&&vc(c,od(c,n,"div").top-
p.top);return n},ac);if(h.length)for(var l=0;l<g.sel.ranges.length;l++)g.sel.ranges[l].goalColumn=h[l]}),findWordAt:function(a){var b=t(this.doc,a.line).text,c=a.ch,g=a.ch;if(b){var h=this.getHelper(a,"wordChars");"before"!=a.sticky&&g!=b.length||!c?++g:--c;for(var k=b.charAt(c),k=hc(k,h)?function(a){return hc(a,h)}:/\s/.test(k)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!hc(a)};0<c&&k(b.charAt(c-1));)--c;for(;g<b.length&&k(b.charAt(g));)++g}return new A(p(a.line,c),p(a.line,
g))},toggleOverwrite:function(a){if(null==a||a!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Fa(this.display.cursorDiv,"CodeMirror-overwrite"):Sa(this.display.cursorDiv,"CodeMirror-overwrite"),F(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==sa()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:S(function(a,b){Gb(this,a,b)}),getScrollInfo:function(){var a=this.display.scroller;return{left:a.scrollLeft,
top:a.scrollTop,height:a.scrollHeight-qa(this)-this.display.barHeight,width:a.scrollWidth-qa(this)-this.display.barWidth,clientHeight:jd(this),clientWidth:Ma(this)}},scrollIntoView:S(function(a,b){null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:p(a,0),to:null}:null==a.from&&(a={from:a,to:null});a.to||(a.to=a.from);a.margin=b||0;if(null!=a.from.line){var c=a;wc(this);this.curOp.scrollToPos=c}else Te(this,a.from,a.to,a.margin)}),
setSize:S(function(a,b){var c=this,g=function(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a};null!=a&&(this.display.wrapper.style.width=g(a));null!=b&&(this.display.wrapper.style.height=g(b));this.options.lineWrapping&&Ee(this);var h=this.display.viewFrom;this.doc.iter(h,this.display.viewTo,function(a){if(a.widgets)for(var b=0;b<a.widgets.length;b++)if(a.widgets[b].noHScroll){Aa(c,h,"widget");break}++h});this.curOp.forceUpdate=!0;F(this,"refresh",this)}),operation:function(a){return Y(this,
a)},startOperation:function(){return Ua(this)},endOperation:function(){return Va(this)},refresh:S(function(){var a=this.display.cachedTextHeight;U(this);this.curOp.forceUpdate=!0;Db(this);Gb(this,this.doc.scrollLeft,this.doc.scrollTop);xd(this);(null==a||.5<Math.abs(a-Pa(this.display)))&&td(this);F(this,"refresh",this)}),swapDoc:S(function(a){var b=this.doc;b.cm=null;ff(this,a);Db(this);this.display.input.reset();Gb(this,a.scrollLeft,a.scrollTop);this.curOp.forceScroll=!0;N(this,"swapDoc",this,b);
return b}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};ab(a);a.registerHelper=function(b,e,f){c.hasOwnProperty(b)||(c[b]=a[b]={_global:[]});c[b][e]=f};a.registerGlobalHelper=function(b,e,f,g){a.registerHelper(b,e,g);c[b]._global.push({pred:f,val:g})}})(E);var th="iter insert remove copy getEditor constructor".split(" "),
ec;for(ec in V.prototype)V.prototype.hasOwnProperty(ec)&&0>L(th,ec)&&(E.prototype[ec]=function(a){return function(){return a.apply(this.doc,arguments)}}(V.prototype[ec]));ab(V);E.inputStyles={textarea:H,contenteditable:x};E.defineMode=function(a){E.defaults.mode||"null"==a||(E.defaults.mode=a);og.apply(this,arguments)};E.defineMIME=function(a,b){bb[a]=b};E.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});E.defineMIME("text/plain","null");E.defineExtension=function(a,
b){E.prototype[a]=b};E.defineDocExtension=function(a,b){V.prototype[a]=b};E.fromTextArea=function(a,b){function c(){a.value=h.getValue()}b=b?Ga(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var d=sa();b.autofocus=d==a||null!=a.getAttribute("autofocus")&&d==document.body}var e;if(a.form&&(v(a.form,"submit",c),!b.leaveSubmitMethodAlone)){var f=a.form;e=f.submit;try{var g=f.submit=function(){c();
f.submit=e;f.submit();f.submit=g}}catch(k){}}b.finishInit=function(b){b.save=c;b.getTextArea=function(){return a};b.toTextArea=function(){b.toTextArea=isNaN;c();a.parentNode.removeChild(b.getWrapperElement());a.style.display="";a.form&&(aa(a.form,"submit",c),"function"==typeof a.form.submit&&(a.form.submit=e))}};a.style.display="none";var h=E(function(b){return a.parentNode.insertBefore(b,a.nextSibling)},b);return h};(function(a){a.off=aa;a.on=v;a.wheelEventPixels=Ig;a.Doc=V;a.splitLines=Td;a.countColumn=
fa;a.findColumn=Oc;a.isWordChar=Qc;a.Pass=Hc;a.signal=F;a.Line=hb;a.changeEnd=Ba;a.scrollbarModel=Xe;a.Pos=p;a.cmpPos=y;a.modes=bd;a.mimeModes=bb;a.resolveMode=nc;a.getMode=cd;a.modeExtensions=cb;a.extendMode=pg;a.copyState=La;a.startState=ie;a.innerMode=dd;a.commands=Sb;a.keyMap=Rb;a.keyName=If;a.isModifierKey=Ff;a.lookupKey=nb;a.normalizeKeyMap=Ug;a.StringStream=G;a.SharedTextMarker=Qb;a.TextMarker=Ca;a.LineWidget=Pb;a.e_preventDefault=Q;a.e_stopPropagation=ge;a.e_stop=xb;a.addClass=Fa;a.contains=
wa;a.rmClass=Sa;a.keyNames=Da})(E);E.version="5.31.0";return E});
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]+/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if ((ch == "u" && stream.match(/rl(-prefix)?\(/)) ||
               (ch == "d" && stream.match("omain(")) ||
               (ch == "r" && stream.match("egexp("))) {
      stream.backUp(1);
      state.tokenize = tokenParenthesized;
      return ret("property", "word");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = "string-2";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      if (type != "comment")
        state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
    "background", "background-attachment", "background-blend-mode", "background-clip",
    "background-color", "background-image", "background-origin", "background-position",
    "background-repeat", "background-size", "baseline-shift", "binding",
    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
    "bookmark-target", "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color",
    "border-left-style", "border-left-width", "border-radius", "border-right",
    "border-right-color", "border-right-style", "border-right-width",
    "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "bottom", "box-decoration-break",
    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
    "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count",
    "column-fill", "column-gap", "column-rule", "column-rule-color",
    "column-rule-style", "column-rule-width", "column-span", "column-width",
    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
    "cue-after", "cue-before", "cursor", "direction", "display",
    "dominant-baseline", "drop-initial-after-adjust",
    "drop-initial-after-align", "drop-initial-before-adjust",
    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-synthesis", "font-variant",
    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
    "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap",
    "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap",
    "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
    "icon", "image-orientation", "image-rendering", "image-resolution",
    "inline-box-align", "justify-content", "justify-items", "justify-self", "left", "letter-spacing",
    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marks", "marquee-direction", "marquee-loop",
    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
    "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index",
    "nav-left", "nav-right", "nav-up", "object-fit", "object-position",
    "opacity", "order", "orphans", "outline",
    "outline-color", "outline-offset", "outline-style", "outline-width",
    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page", "page-break-after", "page-break-before", "page-break-inside",
    "page-policy", "pause", "pause-after", "pause-before", "perspective",
    "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position",
    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
    "region-break-before", "region-break-inside", "region-fragment",
    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
    "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin",
    "shape-outside", "size", "speak", "speak-as", "speak-header",
    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
    "tab-size", "table-layout", "target", "target-name", "target-new",
    "target-position", "text-align", "text-align-last", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-style", "text-emphasis", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "text-height",
    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
    "text-wrap", "top", "transform", "transform-origin", "transform-style",
    "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "unicode-bidi",
    "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration",
    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
    "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break",
    "word-spacing", "word-wrap", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode"
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
    "searchfield-results-decoration", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
    "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub",
    "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*\{/, false))
          return [null, null]
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("sql", function(config, parserConfig) {
  "use strict";

  var client         = parserConfig.client || {},
      atoms          = parserConfig.atoms || {"false": true, "true": true, "null": true},
      builtin        = parserConfig.builtin || {},
      keywords       = parserConfig.keywords || {},
      operatorChars  = parserConfig.operatorChars || /^[*+\-%<>!=&|~^]/,
      support        = parserConfig.support || {},
      hooks          = parserConfig.hooks || {},
      dateSQL        = parserConfig.dateSQL || {"date" : true, "time" : true, "timestamp" : true};

  function tokenBase(stream, state) {
    var ch = stream.next();

    // call hooks from the mime type
    if (hooks[ch]) {
      var result = hooks[ch](stream, state);
      if (result !== false) return result;
    }

    if (support.hexNumber &&
      ((ch == "0" && stream.match(/^[xX][0-9a-fA-F]+/))
      || (ch == "x" || ch == "X") && stream.match(/^'[0-9a-fA-F]+'/))) {
      // hex
      // ref: http://dev.mysql.com/doc/refman/5.5/en/hexadecimal-literals.html
      return "number";
    } else if (support.binaryNumber &&
      (((ch == "b" || ch == "B") && stream.match(/^'[01]+'/))
      || (ch == "0" && stream.match(/^b[01]+/)))) {
      // bitstring
      // ref: http://dev.mysql.com/doc/refman/5.5/en/bit-field-literals.html
      return "number";
    } else if (ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58) {
      // numbers
      // ref: http://dev.mysql.com/doc/refman/5.5/en/number-literals.html
      stream.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/);
      support.decimallessFloat && stream.match(/^\.(?!\.)/);
      return "number";
    } else if (ch == "?" && (stream.eatSpace() || stream.eol() || stream.eat(";"))) {
      // placeholders
      return "variable-3";
    } else if (ch == "'" || (ch == '"' && support.doubleQuote)) {
      // strings
      // ref: http://dev.mysql.com/doc/refman/5.5/en/string-literals.html
      state.tokenize = tokenLiteral(ch);
      return state.tokenize(stream, state);
    } else if ((((support.nCharCast && (ch == "n" || ch == "N"))
        || (support.charsetCast && ch == "_" && stream.match(/[a-z][a-z0-9]*/i)))
        && (stream.peek() == "'" || stream.peek() == '"'))) {
      // charset casting: _utf8'str', N'str', n'str'
      // ref: http://dev.mysql.com/doc/refman/5.5/en/string-literals.html
      return "keyword";
    } else if (/^[\(\),\;\[\]]/.test(ch)) {
      // no highlighting
      return null;
    } else if (support.commentSlashSlash && ch == "/" && stream.eat("/")) {
      // 1-line comment
      stream.skipToEnd();
      return "comment";
    } else if ((support.commentHash && ch == "#")
        || (ch == "-" && stream.eat("-") && (!support.commentSpaceRequired || stream.eat(" ")))) {
      // 1-line comments
      // ref: https://kb.askmonty.org/en/comment-syntax/
      stream.skipToEnd();
      return "comment";
    } else if (ch == "/" && stream.eat("*")) {
      // multi-line comments
      // ref: https://kb.askmonty.org/en/comment-syntax/
      state.tokenize = tokenComment(1);
      return state.tokenize(stream, state);
    } else if (ch == ".") {
      // .1 for 0.1
      if (support.zerolessFloat && stream.match(/^(?:\d+(?:e[+-]?\d+)?)/i))
        return "number";
      if (stream.match(/^\.+/))
        return null
      // .table_name (ODBC)
      // // ref: http://dev.mysql.com/doc/refman/5.6/en/identifier-qualifiers.html
      if (support.ODBCdotTable && stream.match(/^[\w\d_]+/))
        return "variable-2";
    } else if (operatorChars.test(ch)) {
      // operators
      stream.eatWhile(operatorChars);
      return null;
    } else if (ch == '{' &&
        (stream.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || stream.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) {
      // dates (weird ODBC syntax)
      // ref: http://dev.mysql.com/doc/refman/5.5/en/date-and-time-literals.html
      return "number";
    } else {
      stream.eatWhile(/^[_\w\d]/);
      var word = stream.current().toLowerCase();
      // dates (standard SQL syntax)
      // ref: http://dev.mysql.com/doc/refman/5.5/en/date-and-time-literals.html
      if (dateSQL.hasOwnProperty(word) && (stream.match(/^( )+'[^']*'/) || stream.match(/^( )+"[^"]*"/)))
        return "number";
      if (atoms.hasOwnProperty(word)) return "atom";
      if (builtin.hasOwnProperty(word)) return "builtin";
      if (keywords.hasOwnProperty(word)) return "keyword";
      if (client.hasOwnProperty(word)) return "string-2";
      return null;
    }
  }

  // 'string', with char specified in quote escaped by '\'
  function tokenLiteral(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          state.tokenize = tokenBase;
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      return "string";
    };
  }
  function tokenComment(depth) {
    return function(stream, state) {
      var m = stream.match(/^.*?(\/\*|\*\/)/)
      if (!m) stream.skipToEnd()
      else if (m[1] == "/*") state.tokenize = tokenComment(depth + 1)
      else if (depth > 1) state.tokenize = tokenComment(depth - 1)
      else state.tokenize = tokenBase
      return "comment"
    }
  }

  function pushContext(stream, state, type) {
    state.context = {
      prev: state.context,
      indent: stream.indentation(),
      col: stream.column(),
      type: type
    };
  }

  function popContext(state) {
    state.indent = state.context.indent;
    state.context = state.context.prev;
  }

  return {
    startState: function() {
      return {tokenize: tokenBase, context: null};
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (state.context && state.context.align == null)
          state.context.align = false;
      }
      if (state.tokenize == tokenBase && stream.eatSpace()) return null;

      var style = state.tokenize(stream, state);
      if (style == "comment") return style;

      if (state.context && state.context.align == null)
        state.context.align = true;

      var tok = stream.current();
      if (tok == "(")
        pushContext(stream, state, ")");
      else if (tok == "[")
        pushContext(stream, state, "]");
      else if (state.context && state.context.type == tok)
        popContext(state);
      return style;
    },

    indent: function(state, textAfter) {
      var cx = state.context;
      if (!cx) return CodeMirror.Pass;
      var closing = textAfter.charAt(0) == cx.type;
      if (cx.align) return cx.col + (closing ? 0 : 1);
      else return cx.indent + (closing ? 0 : config.indentUnit);
    },

    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    lineComment: support.commentSlashSlash ? "//" : support.commentHash ? "#" : "--"
  };
});

(function() {
  "use strict";

  // `identifier`
  function hookIdentifier(stream) {
    // MySQL/MariaDB identifiers
    // ref: http://dev.mysql.com/doc/refman/5.6/en/identifier-qualifiers.html
    var ch;
    while ((ch = stream.next()) != null) {
      if (ch == "`" && !stream.eat("`")) return "variable-2";
    }
    stream.backUp(stream.current().length - 1);
    return stream.eatWhile(/\w/) ? "variable-2" : null;
  }

  // "identifier"
  function hookIdentifierDoublequote(stream) {
    // Standard SQL /SQLite identifiers
    // ref: http://web.archive.org/web/20160813185132/http://savage.net.au/SQL/sql-99.bnf.html#delimited%20identifier
    // ref: http://sqlite.org/lang_keywords.html
    var ch;
    while ((ch = stream.next()) != null) {
      if (ch == "\"" && !stream.eat("\"")) return "variable-2";
    }
    stream.backUp(stream.current().length - 1);
    return stream.eatWhile(/\w/) ? "variable-2" : null;
  }

  // variable token
  function hookVar(stream) {
    // variables
    // @@prefix.varName @varName
    // varName can be quoted with ` or ' or "
    // ref: http://dev.mysql.com/doc/refman/5.5/en/user-variables.html
    if (stream.eat("@")) {
      stream.match(/^session\./);
      stream.match(/^local\./);
      stream.match(/^global\./);
    }

    if (stream.eat("'")) {
      stream.match(/^.*'/);
      return "variable-2";
    } else if (stream.eat('"')) {
      stream.match(/^.*"/);
      return "variable-2";
    } else if (stream.eat("`")) {
      stream.match(/^.*`/);
      return "variable-2";
    } else if (stream.match(/^[0-9a-zA-Z$\.\_]+/)) {
      return "variable-2";
    }
    return null;
  };

  // short client keyword token
  function hookClient(stream) {
    // \N means NULL
    // ref: http://dev.mysql.com/doc/refman/5.5/en/null-values.html
    if (stream.eat("N")) {
        return "atom";
    }
    // \g, etc
    // ref: http://dev.mysql.com/doc/refman/5.5/en/mysql-commands.html
    return stream.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null;
  }

  // these keywords are used by all SQL dialects (however, a mode can still overwrite it)
  var sqlKeywords = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";

  // turn a space-separated list into an array
  function set(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }

  // A generic SQL Mode. It's not a standard, it just try to support what is generally supported
  CodeMirror.defineMIME("text/x-sql", {
    name: "sql",
    keywords: set(sqlKeywords + "begin"),
    builtin: set("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=]/,
    dateSQL: set("date time timestamp"),
    support: set("ODBCdotTable doubleQuote binaryNumber hexNumber")
  });

  CodeMirror.defineMIME("text/x-mssql", {
    name: "sql",
    client: set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
    keywords: set(sqlKeywords + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec"),
    builtin: set("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=]/,
    dateSQL: set("date datetimeoffset datetime2 smalldatetime datetime time"),
    hooks: {
      "@":   hookVar
    }
  });

  CodeMirror.defineMIME("text/x-mysql", {
    name: "sql",
    client: set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
    keywords: set(sqlKeywords + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
    builtin: set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=&|^]/,
    dateSQL: set("date time timestamp"),
    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
    hooks: {
      "@":   hookVar,
      "`":   hookIdentifier,
      "\\":  hookClient
    }
  });

  CodeMirror.defineMIME("text/x-mariadb", {
    name: "sql",
    client: set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
    keywords: set(sqlKeywords + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
    builtin: set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=&|^]/,
    dateSQL: set("date time timestamp"),
    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
    hooks: {
      "@":   hookVar,
      "`":   hookIdentifier,
      "\\":  hookClient
    }
  });

  // provided by the phpLiteAdmin project - phpliteadmin.org
  CodeMirror.defineMIME("text/x-sqlite", {
    name: "sql",
    // commands of the official SQLite client, ref: https://www.sqlite.org/cli.html#dotcmd
    client: set("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),
    // ref: http://sqlite.org/lang_keywords.html
    keywords: set(sqlKeywords + "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),
    // SQLite is weakly typed, ref: http://sqlite.org/datatype3.html. This is just a list of some common types.
    builtin: set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),
    // ref: http://sqlite.org/syntax/literal-value.html
    atoms: set("null current_date current_time current_timestamp"),
    // ref: http://sqlite.org/lang_expr.html#binaryops
    operatorChars: /^[*+\-%<>!=&|/~]/,
    // SQLite is weakly typed, ref: http://sqlite.org/datatype3.html. This is just a list of some common types.
    dateSQL: set("date time timestamp datetime"),
    support: set("decimallessFloat zerolessFloat"),
    identifierQuote: "\"",  //ref: http://sqlite.org/lang_keywords.html
    hooks: {
      // bind-parameters ref:http://sqlite.org/lang_expr.html#varparam
      "@":   hookVar,
      ":":   hookVar,
      "?":   hookVar,
      "$":   hookVar,
      // The preferred way to escape Identifiers is using double quotes, ref: http://sqlite.org/lang_keywords.html
      "\"":   hookIdentifierDoublequote,
      // there is also support for backtics, ref: http://sqlite.org/lang_keywords.html
      "`":   hookIdentifier
    }
  });

  // the query language used by Apache Cassandra is called CQL, but this mime type
  // is called Cassandra to avoid confusion with Contextual Query Language
  CodeMirror.defineMIME("text/x-cassandra", {
    name: "sql",
    client: { },
    keywords: set("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
    builtin: set("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
    atoms: set("false true infinity NaN"),
    operatorChars: /^[<>=]/,
    dateSQL: { },
    support: set("commentSlashSlash decimallessFloat"),
    hooks: { }
  });

  // this is based on Peter Raganitsch's 'plsql' mode
  CodeMirror.defineMIME("text/x-plsql", {
    name:       "sql",
    client:     set("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
    keywords:   set("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
    builtin:    set("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
    operatorChars: /^[*+\-%<>!=~]/,
    dateSQL:    set("date time timestamp"),
    support:    set("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
  });

  // Created to support specific hive keywords
  CodeMirror.defineMIME("text/x-hive", {
    name: "sql",
    keywords: set("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),
    builtin: set("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=]/,
    dateSQL: set("date timestamp"),
    support: set("ODBCdotTable doubleQuote binaryNumber hexNumber")
  });

  CodeMirror.defineMIME("text/x-pgsql", {
    name: "sql",
    client: set("source"),
    // https://www.postgresql.org/docs/10/static/sql-keywords-appendix.html
    keywords: set(sqlKeywords + "a abort abs absent absolute access according action ada add admin after aggregate all allocate also always analyse analyze any are array array_agg array_max_cardinality asensitive assertion assignment asymmetric at atomic attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli binary bit_length blob blocked bom both breadth c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain characteristics characters character_length character_set_catalog character_set_name character_set_schema char_length check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column columns column_name command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constraint constraints constraint_catalog constraint_name constraint_schema constructor contains content continue control conversion convert copy corr corresponding cost covar_pop covar_samp cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datetime_interval_code datetime_interval_precision day db deallocate dec declare default defaults deferrable deferred defined definer degree delimiter delimiters dense_rank depth deref derived describe descriptor deterministic diagnostics dictionary disable discard disconnect dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain dynamic dynamic_function dynamic_function_code each element else empty enable encoding encrypted end end-exec end_frame end_partition enforced enum equals escape event every except exception exclude excluding exclusive exec execute exists exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreign fortran forward found frame_row free freeze fs full function functions fusion g general generated get global go goto grant granted greatest grouping groups handler header hex hierarchy hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import including increment indent index indexes indicator inherit inherits initially inline inner inout input insensitive instance instantiable instead integrity intersect intersection invoker isnull isolation k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like_regex link listen ln load local localtime localtimestamp location locator lock locked logged lower m map mapping match matched materialized max maxvalue max_cardinality member merge message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized nothing notify notnull nowait nth_value ntile null nullable nullif nulls number object occurrences_regex octets octet_length of off offset oids old only open operator option options ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password percent percentile_cont percentile_disc percent_rank period permission placing plans pli policy portion position position_regex power precedes preceding prepare prepared preserve primary prior privileges procedural procedure program public quote range rank read reads reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict restricted result return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns revoke right role rollback rollup routine routine_catalog routine_name routine_schema row rows row_count row_number rule savepoint scale schema schema_name scope scope_catalog scope_name scope_schema scroll search second section security selective self sensitive sequence sequences serializable server server_name session session_user setof sets share show similar simple size skip snapshot some source space specific specifictype specific_name sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset substring substring_regex succeeds sum symmetric sysid system system_time system_user t tables tablesample tablespace table_name temp template temporary then ties timezone_hour timezone_minute to token top_level_count trailing transaction transactions_committed transactions_rolled_back transaction_active transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted unique unknown unlink unlisten unlogged unnamed unnest until untyped upper uri usage user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of varbinary variadic var_pop var_samp verbose version versioning view views volatile when whenever whitespace width_bucket window within work wrapper write xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes loop repeat attach path depends detach zone"),
    // https://www.postgresql.org/docs/10/static/datatype.html
    builtin: set("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
    dateSQL: set("date time timestamp"),
    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
  });

  // Google's SQL-like query language, GQL
  CodeMirror.defineMIME("text/x-gql", {
    name: "sql",
    keywords: set("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
    atoms: set("false true"),
    builtin: set("blob datetime first key __key__ string integer double boolean null"),
    operatorChars: /^[*+\-%<>!=]/
  });

  // Greenplum
  CodeMirror.defineMIME("text/x-gpsql", {
    name: "sql",
    client: set("source"),
    //https://github.com/greenplum-db/gpdb/blob/master/src/include/parser/kwlist.h
    keywords: set("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),
    builtin: set("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
    atoms: set("false true null unknown"),
    operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
    dateSQL: set("date time timestamp"),
    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
  });

  // Spark SQL
  CodeMirror.defineMIME("text/x-sparksql", {
    name: "sql",
    keywords: set("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),
    builtin: set("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),
    atoms: set("false true null"),
    operatorChars: /^[*+\-%<>!=~&|^]/,
    dateSQL: set("date time timestamp"),
    support: set("ODBCdotTable doubleQuote zerolessFloat")
  });

  // Esper
  CodeMirror.defineMIME("text/x-esper", {
    name: "sql",
    client: set("source"),
    // http://www.espertech.com/esper/release-5.5.0/esper-reference/html/appendix_keywords.html
    keywords: set("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
    builtin: {},
    atoms: set("false true null"),
    operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
    dateSQL: set("time"),
    support: set("decimallessFloat zerolessFloat binaryNumber hexNumber")
  });
}());

});

/*
  How Properties of Mime Types are used by SQL Mode
  =================================================

  keywords:
    A list of keywords you want to be highlighted.
  builtin:
    A list of builtin types you want to be highlighted (if you want types to be of class "builtin" instead of "keyword").
  operatorChars:
    All characters that must be handled as operators.
  client:
    Commands parsed and executed by the client (not the server).
  support:
    A list of supported syntaxes which are not common, but are supported by more than 1 DBMS.
    * ODBCdotTable: .tableName
    * zerolessFloat: .1
    * doubleQuote
    * nCharCast: N'string'
    * charsetCast: _utf8'string'
    * commentHash: use # char for comments
    * commentSlashSlash: use // for comments
    * commentSpaceRequired: require a space after -- for comments
  atoms:
    Keywords that must be highlighted as atoms,. Some DBMS's support more atoms than others:
    UNKNOWN, INFINITY, UNDERFLOW, NaN...
  dateSQL:
    Used for date/time SQL standard syntax, because not all DBMS's support same temporal types.
*/

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    var jsKeywords = {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };

    // Extend the 'normal' keywords with the TypeScript language extensions
    if (isTS) {
      var type = {type: "variable", style: "type"};
      var tsKeywords = {
        // object-like things
        "interface": kw("class"),
        "implements": C,
        "namespace": C,
        "module": kw("module"),
        "enum": kw("module"),

        // scope modifiers
        "public": kw("modifier"),
        "private": kw("modifier"),
        "protected": kw("modifier"),
        "abstract": kw("modifier"),
        "readonly": kw("modifier"),

        // types
        "string": type, "number": type, "boolean": type, "any": type
      };

      for (var attr in tsKeywords) {
        jsKeywords[attr] = tsKeywords[attr];
      }
    }

    return jsKeywords;
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/o/i)) {
      stream.eatWhile(/[0-7]/i);
      return ret("number", "number");
    } else if (ch == "0" && stream.eat(/b/i)) {
      stream.eatWhile(/[01]/i);
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^\s*[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    function inList(list) {
      for (var v = list; v; v = v.next)
        if (v.name == varname) return true;
      return false;
    }
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (inList(state.localVars)) return;
      state.localVars = {name: varname, next: state.localVars};
    } else {
      if (inList(state.globalVars)) return;
      if (parserConfig.globalVars)
        state.globalVars = {name: varname, next: state.globalVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
    cx.state.localVars = defaultVars;
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value.length), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "variable") {
      if (isTS && value == "type") {
        cx.marked = "keyword"
        return cont(typeexpr, expect("operator"), typeexpr, expect(";"));
      } if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"),
                                      block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                     statement, poplex, popcontext);
    if (type == "class") return cont(pushlex("form"), className, poplex);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "module") return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    return expressionInner(type, false);
  }
  function expressionNoComma(type) {
    return expressionInner(type, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class") return cont(pushlex("form"), classExpression, poplex);
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (type == "modifier") {
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function typeexpr(type, value) {
    if (type == "variable" || value == "void") {
      if (value == "keyof") {
        cx.marked = "keyword"
        return cont(typeexpr)
      } else {
        cx.marked = "type"
        return cont(afterType)
      }
    }
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), typeprop)
    }
  }
  function typearg(type) {
    if (type == "variable") return cont(typearg)
    else if (type == ":") return cont(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == ".") return cont(typeexpr)
    if (type == "[") return cont(expect("]"), afterType)
    if (value == "extends") return cont(typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function vardef() {
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (type == "modifier") return cont(pattern)
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(pattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    return cont(expect(":"), pattern, maybeAssign);
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type) {
    if (type == "(") return cont(pushlex(")"), forspec1, expect(")"), poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, expect(";"), forspec2);
    if (type == ";") return cont(forspec2);
    if (type == "variable") return cont(formaybeinof);
    return pass(expression, expect(";"), forspec2);
  }
  function formaybeinof(_type, value) {
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return cont(maybeoperatorComma, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression); }
    return pass(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, maybetype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, functiondef)
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread" || type == "modifier") return cont(funarg);
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ","))
      return cont(isTS ? typeexpr : expression, classNameAfter);
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "modifier" || type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set") &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (type == "[")
      return cont(expression, expect("]"), isTS ? classfield : functiondef, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == ";") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    return pass(functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && {vars: parserConfig.localVars},
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../meta"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

  var htmlMode = CodeMirror.getMode(cmCfg, "text/html");
  var htmlModeMissing = htmlMode.name == "null"

  function getMode(name) {
    if (CodeMirror.findModeByName) {
      var found = CodeMirror.findModeByName(name);
      if (found) name = found.mime || found.mimes[0];
    }
    var mode = CodeMirror.getMode(cmCfg, name);
    return mode.name == "null" ? null : mode;
  }

  // Should characters that affect highlighting be highlighted separate?
  // Does not include characters that will be output (such as `1.` and `-` for lists)
  if (modeCfg.highlightFormatting === undefined)
    modeCfg.highlightFormatting = false;

  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
  // Excess `>` will emit `error` token.
  if (modeCfg.maxBlockquoteDepth === undefined)
    modeCfg.maxBlockquoteDepth = 0;

  // Turn on task lists? ("- [ ] " and "- [x] ")
  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

  // Turn on strikethrough syntax
  if (modeCfg.strikethrough === undefined)
    modeCfg.strikethrough = false;

  if (modeCfg.emoji === undefined)
    modeCfg.emoji = false;

  if (modeCfg.fencedCodeBlockHighlighting === undefined)
    modeCfg.fencedCodeBlockHighlighting = true;

  if (modeCfg.xml === undefined)
    modeCfg.xml = true;

  // Allow token types to be overridden by user-provided token types.
  if (modeCfg.tokenTypeOverrides === undefined)
    modeCfg.tokenTypeOverrides = {};

  var tokenTypes = {
    header: "header",
    code: "comment",
    quote: "quote",
    list1: "variable-2",
    list2: "variable-3",
    list3: "keyword",
    hr: "hr",
    image: "image",
    imageAltText: "image-alt-text",
    imageMarker: "image-marker",
    formatting: "formatting",
    linkInline: "link",
    linkEmail: "link",
    linkText: "link",
    linkHref: "string",
    em: "em",
    strong: "strong",
    strikethrough: "strikethrough",
    emoji: "builtin"
  };

  for (var tokenType in tokenTypes) {
    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
    }
  }

  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
  ,   listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/
  ,   taskListRE = /^\[(x| )\](?=\s)/i // Must follow listRE
  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
  ,   textRE = /^[^#!\[\]*_\\<>` "'(~:]+/
  ,   fencedCodeRE = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/
  ,   linkDefRE = /^\s*\[[^\]]+?\]:\s*\S+(\s*\S*\s*)?$/ // naive link-definition
  ,   punctuation = /[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~—]/
  ,   expandedTab = "    " // CommonMark specifies tab as 4 spaces

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }

  function lineIsEmpty(line) {
    return !line || !/\S/.test(line.string)
  }

  // Blocks

  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    // Reset EM state
    state.em = false;
    // Reset STRONG state
    state.strong = false;
    // Reset strikethrough state
    state.strikethrough = false;
    // Reset state.quote
    state.quote = 0;
    // Reset state.indentedCode
    state.indentedCode = false;
    if (state.f == htmlBlock) {
      state.f = inlineNormal;
      state.block = blockNormal;
    }
    // Reset state.trailingSpace
    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false;
    // Mark this line as blank
    state.prevLine = state.thisLine
    state.thisLine = {stream: null}
    return null;
  }

  function blockNormal(stream, state) {
    var firstTokenOnLine = stream.column() === state.indentation;
    var prevLineLineIsEmpty = lineIsEmpty(state.prevLine.stream);
    var prevLineIsIndentedCode = state.indentedCode;
    var prevLineIsHr = state.prevLine.hr;
    var prevLineIsList = state.list !== false;
    var maxNonCodeIndentation = (state.listStack[state.listStack.length - 1] || 0) + 3;

    state.indentedCode = false;

    var lineIndentation = state.indentation;
    // compute once per line (on first token)
    if (state.indentationDiff === null) {
      state.indentationDiff = state.indentation;
      if (prevLineIsList) {
        state.list = null;
        // While this list item's marker's indentation is less than the deepest
        //  list item's content's indentation,pop the deepest list item
        //  indentation off the stack, and update block indentation state
        while (lineIndentation < state.listStack[state.listStack.length - 1]) {
          state.listStack.pop();
          if (state.listStack.length) {
            state.indentation = state.listStack[state.listStack.length - 1];
          // less than the first list's indent -> the line is no longer a list
          } else {
            state.list = false;
          }
        }
        if (state.list !== false) {
          state.indentationDiff = lineIndentation - state.listStack[state.listStack.length - 1]
        }
      }
    }

    // not comprehensive (currently only for setext detection purposes)
    var allowsInlineContinuation = (
        !prevLineLineIsEmpty && !prevLineIsHr && !state.prevLine.header &&
        (!prevLineIsList || !prevLineIsIndentedCode) &&
        !state.prevLine.fencedCodeEnd
    );

    var isHr = (state.list === false || prevLineIsHr || prevLineLineIsEmpty) &&
      state.indentation <= maxNonCodeIndentation && stream.match(hrRE);

    var match = null;
    if (state.indentationDiff >= 4 && (prevLineIsIndentedCode || state.prevLine.fencedCodeEnd ||
         state.prevLine.header || prevLineLineIsEmpty)) {
      stream.skipToEnd();
      state.indentedCode = true;
      return tokenTypes.code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
      state.quote = 0;
      state.header = match[1].length;
      state.thisLine.header = true;
      if (modeCfg.highlightFormatting) state.formatting = "header";
      state.f = state.inline;
      return getType(state);
    } else if (state.indentation <= maxNonCodeIndentation && stream.eat('>')) {
      state.quote = firstTokenOnLine ? 1 : state.quote + 1;
      if (modeCfg.highlightFormatting) state.formatting = "quote";
      stream.eatSpace();
      return getType(state);
    } else if (!isHr && !state.setext && firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(listRE))) {
      var listType = match[1] ? "ol" : "ul";

      state.indentation = lineIndentation + stream.current().length;
      state.list = true;
      state.quote = 0;

      // Add this list item's content's indentation to the stack
      state.listStack.push(state.indentation);

      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }
      state.f = state.inline;
      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
      return getType(state);
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(fencedCodeRE, true))) {
      state.quote = 0;
      state.fencedEndRE = new RegExp(match[1] + "+ *$");
      // try switching mode
      state.localMode = modeCfg.fencedCodeBlockHighlighting && getMode(match[2]);
      if (state.localMode) state.localState = CodeMirror.startState(state.localMode);
      state.f = state.block = local;
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      state.code = -1
      return getType(state);
    // SETEXT has lowest block-scope precedence after HR, so check it after
    //  the others (code, blockquote, list...)
    } else if (
      // if setext set, indicates line after ---/===
      state.setext || (
        // line before ---/===
        (!allowsInlineContinuation || !prevLineIsList) && !state.quote && state.list === false &&
        !state.code && !isHr && !linkDefRE.test(stream.string) &&
        (match = stream.lookAhead(1)) && (match = match.match(setextHeaderRE))
      )
    ) {
      if ( !state.setext ) {
        state.header = match[0].charAt(0) == '=' ? 1 : 2;
        state.setext = state.header;
      } else {
        state.header = state.setext;
        // has no effect on type so we can reset it now
        state.setext = 0;
        stream.skipToEnd();
        if (modeCfg.highlightFormatting) state.formatting = "header";
      }
      state.thisLine.header = true;
      state.f = state.inline;
      return getType(state);
    } else if (isHr) {
      stream.skipToEnd();
      state.hr = true;
      state.thisLine.hr = true;
      return tokenTypes.hr;
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (!htmlModeMissing) {
      var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
      if ((inner.mode.name == "xml" && inner.state.tagStart === null &&
           (!inner.state.context && inner.state.tokenize.isInText)) ||
          (state.md_inside && stream.current().indexOf(">") > -1)) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }
    return style;
  }

  function local(stream, state) {
    var currListInd = state.listStack[state.listStack.length - 1] || 0;
    var hasExitedList = state.indentation < currListInd;
    var maxFencedEndInd = currListInd + 3;
    if (state.fencedEndRE && state.indentation <= maxFencedEndInd && (hasExitedList || stream.match(state.fencedEndRE))) {
      if (modeCfg.highlightFormatting) state.formatting = "code-block";
      var returnType;
      if (!hasExitedList) returnType = getType(state)
      state.localMode = state.localState = null;
      state.block = blockNormal;
      state.f = inlineNormal;
      state.fencedEndRE = null;
      state.code = 0
      state.thisLine.fencedCodeEnd = true;
      if (hasExitedList) return switchBlock(stream, state, state.block);
      return returnType;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return tokenTypes.code;
    }
  }

  // Inline
  function getType(state) {
    var styles = [];

    if (state.formatting) {
      styles.push(tokenTypes.formatting);

      if (typeof state.formatting === "string") state.formatting = [state.formatting];

      for (var i = 0; i < state.formatting.length; i++) {
        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

        if (state.formatting[i] === "header") {
          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
        }

        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
        // Add `error` instead if the maximum blockquote nesting depth is passed
        if (state.formatting[i] === "quote") {
          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
          } else {
            styles.push("error");
          }
        }
      }
    }

    if (state.taskOpen) {
      styles.push("meta");
      return styles.length ? styles.join(' ') : null;
    }
    if (state.taskClosed) {
      styles.push("property");
      return styles.length ? styles.join(' ') : null;
    }

    if (state.linkHref) {
      styles.push(tokenTypes.linkHref, "url");
    } else { // Only apply inline styles to non-url text
      if (state.strong) { styles.push(tokenTypes.strong); }
      if (state.em) { styles.push(tokenTypes.em); }
      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
      if (state.emoji) { styles.push(tokenTypes.emoji); }
      if (state.linkText) { styles.push(tokenTypes.linkText); }
      if (state.code) { styles.push(tokenTypes.code); }
      if (state.image) { styles.push(tokenTypes.image); }
      if (state.imageAltText) { styles.push(tokenTypes.imageAltText, "link"); }
      if (state.imageMarker) { styles.push(tokenTypes.imageMarker); }
    }

    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

    if (state.quote) {
      styles.push(tokenTypes.quote);

      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
        styles.push(tokenTypes.quote + "-" + state.quote);
      } else {
        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
      }
    }

    if (state.list !== false) {
      var listMod = (state.listStack.length - 1) % 3;
      if (!listMod) {
        styles.push(tokenTypes.list1);
      } else if (listMod === 1) {
        styles.push(tokenTypes.list2);
      } else {
        styles.push(tokenTypes.list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push("trailing-space-new-line");
    } else if (state.trailingSpace) {
      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }
    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);
    if (typeof style !== 'undefined')
      return style;

    if (state.list) { // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] === " ";
      if (taskOpen) state.taskOpen = true;
      else state.taskClosed = true;
      if (modeCfg.highlightFormatting) state.formatting = "task";
      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    if (state.header && stream.match(/^#+$/, true)) {
      if (modeCfg.highlightFormatting) state.formatting = "header";
      return getType(state);
    }

    var ch = stream.next();

    // Matches link titles present on next line
    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;
      if (ch === '(') {
        matchCh = ')';
      }
      matchCh = (matchCh+'').replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1");
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
      if (stream.match(new RegExp(regex), true)) {
        return tokenTypes.linkHref;
      }
    }

    // If this block is changed, it may need to be updated in GFM mode
    if (ch === '`') {
      var previousFormatting = state.formatting;
      if (modeCfg.highlightFormatting) state.formatting = "code";
      stream.eatWhile('`');
      var count = stream.current().length
      if (state.code == 0 && (!state.quote || count == 1)) {
        state.code = count
        return getType(state)
      } else if (count == state.code) { // Must be exact
        var t = getType(state)
        state.code = 0
        return t
      } else {
        state.formatting = previousFormatting
        return getType(state)
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '\\') {
      stream.next();
      if (modeCfg.highlightFormatting) {
        var type = getType(state);
        var formattingEscape = tokenTypes.formatting + "-escape";
        return type ? type + " " + formattingEscape : formattingEscape;
      }
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      state.imageMarker = true;
      state.image = true;
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
      state.imageMarker = false;
      state.imageAltText = true
      if (modeCfg.highlightFormatting) state.formatting = "image";
      return getType(state);
    }

    if (ch === ']' && state.imageAltText) {
      if (modeCfg.highlightFormatting) state.formatting = "image";
      var type = getType(state);
      state.imageAltText = false;
      state.image = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '[' && !state.image) {
      state.linkText = true;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = stream.match(/\(.*?\)| ?\[.*?\]/, false) ? linkHref : inlineNormal
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkEmail;
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i, false)) {
      var end = stream.string.indexOf(">", stream.pos);
      if (end != -1) {
        var atts = stream.string.substring(stream.start, end);
        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
      }
      stream.backUp(1);
      state.htmlState = CodeMirror.startState(htmlMode);
      return switchBlock(stream, state, htmlBlock);
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return "tag";
    } else if (ch === "*" || ch === "_") {
      var len = 1, before = stream.pos == 1 ? " " : stream.string.charAt(stream.pos - 2)
      while (len < 3 && stream.eat(ch)) len++
      var after = stream.peek() || " "
      // See http://spec.commonmark.org/0.27/#emphasis-and-strong-emphasis
      var leftFlanking = !/\s/.test(after) && (!punctuation.test(after) || /\s/.test(before) || punctuation.test(before))
      var rightFlanking = !/\s/.test(before) && (!punctuation.test(before) || /\s/.test(after) || punctuation.test(after))
      var setEm = null, setStrong = null
      if (len % 2) { // Em
        if (!state.em && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setEm = true
        else if (state.em == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setEm = false
      }
      if (len > 1) { // Strong
        if (!state.strong && leftFlanking && (ch === "*" || !rightFlanking || punctuation.test(before)))
          setStrong = true
        else if (state.strong == ch && rightFlanking && (ch === "*" || !leftFlanking || punctuation.test(after)))
          setStrong = false
      }
      if (setStrong != null || setEm != null) {
        if (modeCfg.highlightFormatting) state.formatting = setEm == null ? "strong" : setStrong == null ? "em" : "strong em"
        if (setEm === true) state.em = ch
        if (setStrong === true) state.strong = ch
        var t = getType(state)
        if (setEm === false) state.em = false
        if (setStrong === false) state.strong = false
        return t
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
          return getType(state);
        } else { // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (modeCfg.strikethrough) {
      if (ch === '~' && stream.eatWhile(ch)) {
        if (state.strikethrough) {// Remove strikethrough
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          var t = getType(state);
          state.strikethrough = false;
          return t;
        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
          state.strikethrough = true;
          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
          return getType(state);
        }
      } else if (ch === ' ') {
        if (stream.match(/^~~/, true)) { // Probably surrounded by space
          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
            return getType(state);
          } else { // Not surrounded by spaces, back up pointer
            stream.backUp(2);
          }
        }
      }
    }

    if (modeCfg.emoji && ch === ":" && stream.match(/^[a-z_\d+-]+:/)) {
      state.emoji = true;
      if (modeCfg.highlightFormatting) state.formatting = "emoji";
      var retType = getType(state);
      state.emoji = false;
      return retType;
    }

    if (ch === ' ') {
      if (stream.match(/ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkInline(stream, state) {
    var ch = stream.next();

    if (ch === ">") {
      state.f = state.inline = inlineNormal;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var type = getType(state);
      if (type){
        type += " ";
      } else {
        type = "";
      }
      return type + tokenTypes.linkInline;
    }

    stream.match(/^[^>]+/, true);

    return tokenTypes.linkInline;
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    var ch = stream.next();
    if (ch === '(' || ch === '[') {
      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]");
      if (modeCfg.highlightFormatting) state.formatting = "link-string";
      state.linkHref = true;
      return getType(state);
    }
    return 'error';
  }

  var linkRE = {
    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
  }

  function getLinkHrefInside(endChar) {
    return function(stream, state) {
      var ch = stream.next();

      if (ch === endChar) {
        state.f = state.inline = inlineNormal;
        if (modeCfg.highlightFormatting) state.formatting = "link-string";
        var returnState = getType(state);
        state.linkHref = false;
        return returnState;
      }

      stream.match(linkRE[endChar])
      state.linkHref = true;
      return getType(state);
    };
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
      state.f = footnoteLinkInside;
      stream.next(); // Consume [
      if (modeCfg.highlightFormatting) state.formatting = "link";
      state.linkText = true;
      return getType(state);
    }
    return switchInline(stream, state, inlineNormal);
  }

  function footnoteLinkInside(stream, state) {
    if (stream.match(/^\]:/, true)) {
      state.f = state.inline = footnoteUrl;
      if (modeCfg.highlightFormatting) state.formatting = "link";
      var returnType = getType(state);
      state.linkText = false;
      return returnType;
    }

    stream.match(/^([^\]\\]|\\.)+/, true);

    return tokenTypes.linkText;
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if(stream.eatSpace()){
      return null;
    }
    // Match URL
    stream.match(/^[^\s]+/, true);
    // Check for link title
    if (stream.peek() === undefined) { // End of line, set flag to check next line
      state.linkTitle = true;
    } else { // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }
    state.f = state.inline = inlineNormal;
    return tokenTypes.linkHref + " url";
  }

  var mode = {
    startState: function() {
      return {
        f: blockNormal,

        prevLine: {stream: null},
        thisLine: {stream: null},

        block: blockNormal,
        htmlState: null,
        indentation: 0,

        inline: inlineNormal,
        text: handleText,

        formatting: false,
        linkText: false,
        linkHref: false,
        linkTitle: false,
        code: 0,
        em: false,
        strong: false,
        header: 0,
        setext: 0,
        hr: false,
        taskList: false,
        list: false,
        listStack: [],
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false,
        strikethrough: false,
        emoji: false,
        fencedEndRE: null
      };
    },

    copyState: function(s) {
      return {
        f: s.f,

        prevLine: s.prevLine,
        thisLine: s.thisLine,

        block: s.block,
        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
        indentation: s.indentation,

        localMode: s.localMode,
        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

        inline: s.inline,
        text: s.text,
        formatting: false,
        linkText: s.linkText,
        linkTitle: s.linkTitle,
        code: s.code,
        em: s.em,
        strong: s.strong,
        strikethrough: s.strikethrough,
        emoji: s.emoji,
        header: s.header,
        setext: s.setext,
        hr: s.hr,
        taskList: s.taskList,
        list: s.list,
        listStack: s.listStack.slice(0),
        quote: s.quote,
        indentedCode: s.indentedCode,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside,
        fencedEndRE: s.fencedEndRE
      };
    },

    token: function(stream, state) {

      // Reset state.formatting
      state.formatting = false;

      if (stream != state.thisLine.stream) {
        state.header = 0;
        state.hr = false;

        if (stream.match(/^\s*$/, true)) {
          blankLine(state);
          return null;
        }

        state.prevLine = state.thisLine
        state.thisLine = {stream: stream}

        // Reset state.taskList
        state.taskList = false;

        // Reset state.trailingSpace
        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        if (!state.localState) {
          state.f = state.block;
          if (state.f != htmlBlock) {
            var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, expandedTab).length;
            state.indentation = indentation;
            state.indentationDiff = null;
            if (indentation > 0) return null;
          }
        }
      }
      return state.f(stream, state);
    },

    innerMode: function(state) {
      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
      if (state.localState) return {state: state.localState, mode: state.localMode};
      return {state: state, mode: mode};
    },

    indent: function(state, textAfter, line) {
      if (state.block == htmlBlock && htmlMode.indent) return htmlMode.indent(state.htmlState, textAfter, line)
      if (state.localState && state.localMode.indent) return state.localMode.indent(state.localState, textAfter, line)
      return CodeMirror.Pass
    },

    blankLine: blankLine,

    getType: getType,

    closeBrackets: "()[]{}''\"\"``",
    fold: "markdown"
  };
  return mode;
}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode('shell', function() {

  var words = {};
  function define(style, string) {
    var split = string.split(' ');
    for(var i = 0; i < split.length; i++) {
      words[split[i]] = style;
    }
  };

  // Atoms
  define('atom', 'true false');

  // Keywords
  define('keyword', 'if then do else elif while until for in esac fi fin ' +
    'fil done exit set unset export function');

  // Commands
  define('builtin', 'ab awk bash beep cat cc cd chown chmod chroot clear cp ' +
    'curl cut diff echo find gawk gcc get git grep hg kill killall ln ls make ' +
    'mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh ' +
    'shopt shred source sort sleep ssh start stop su sudo svn tee telnet top ' +
    'touch vi vim wall wc wget who write yes zsh');

  function tokenBase(stream, state) {
    if (stream.eatSpace()) return null;

    var sol = stream.sol();
    var ch = stream.next();

    if (ch === '\\') {
      stream.next();
      return null;
    }
    if (ch === '\'' || ch === '"' || ch === '`') {
      state.tokens.unshift(tokenString(ch, ch === "`" ? "quote" : "string"));
      return tokenize(stream, state);
    }
    if (ch === '#') {
      if (sol && stream.eat('!')) {
        stream.skipToEnd();
        return 'meta'; // 'comment'?
      }
      stream.skipToEnd();
      return 'comment';
    }
    if (ch === '$') {
      state.tokens.unshift(tokenDollar);
      return tokenize(stream, state);
    }
    if (ch === '+' || ch === '=') {
      return 'operator';
    }
    if (ch === '-') {
      stream.eat('-');
      stream.eatWhile(/\w/);
      return 'attribute';
    }
    if (/\d/.test(ch)) {
      stream.eatWhile(/\d/);
      if(stream.eol() || !/\w/.test(stream.peek())) {
        return 'number';
      }
    }
    stream.eatWhile(/[\w-]/);
    var cur = stream.current();
    if (stream.peek() === '=' && /\w+/.test(cur)) return 'def';
    return words.hasOwnProperty(cur) ? words[cur] : null;
  }

  function tokenString(quote, style) {
    var close = quote == "(" ? ")" : quote == "{" ? "}" : quote
    return function(stream, state) {
      var next, end = false, escaped = false;
      while ((next = stream.next()) != null) {
        if (next === close && !escaped) {
          end = true;
          break;
        }
        if (next === '$' && !escaped && quote !== "'") {
          escaped = true;
          stream.backUp(1);
          state.tokens.unshift(tokenDollar);
          break;
        }
        if (!escaped && next === quote && quote !== close) {
          state.tokens.unshift(tokenString(quote, style))
          return tokenize(stream, state)
        }
        escaped = !escaped && next === '\\';
      }
      if (end) state.tokens.shift();
      return style;
    };
  };

  var tokenDollar = function(stream, state) {
    if (state.tokens.length > 1) stream.eat('$');
    var ch = stream.next()
    if (/['"({]/.test(ch)) {
      state.tokens[0] = tokenString(ch, ch == "(" ? "quote" : ch == "{" ? "def" : "string");
      return tokenize(stream, state);
    }
    if (!/\d/.test(ch)) stream.eatWhile(/\w/);
    state.tokens.shift();
    return 'def';
  };

  function tokenize(stream, state) {
    return (state.tokens[0] || tokenBase) (stream, state);
  };

  return {
    startState: function() {return {tokens:[]};},
    token: function(stream, state) {
      return tokenize(stream, state);
    },
    closeBrackets: "()[]{}''\"\"``",
    lineComment: '#',
    fold: "brace"
  };
});

CodeMirror.defineMIME('text/x-sh', 'shell');
// Apache uses a slightly different Media Type for Shell scripts
// http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
CodeMirror.defineMIME('application/x-sh', 'shell');

});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("sass", function(config) {
  var cssMode = CodeMirror.mimeModes["text/css"];
  var propertyKeywords = cssMode.propertyKeywords || {},
      colorKeywords = cssMode.colorKeywords || {},
      valueKeywords = cssMode.valueKeywords || {},
      fontProperties = cssMode.fontProperties || {};

  function tokenRegexp(words) {
    return new RegExp("^" + words.join("|"));
  }

  var keywords = ["true", "false", "null", "auto"];
  var keywordsRegexp = new RegExp("^" + keywords.join("|"));

  var operators = ["\\(", "\\)", "=", ">", "<", "==", ">=", "<=", "\\+", "-",
                   "\\!=", "/", "\\*", "%", "and", "or", "not", ";","\\{","\\}",":"];
  var opRegexp = tokenRegexp(operators);

  var pseudoElementsRegexp = /^::?[a-zA-Z_][\w\-]*/;

  var word;

  function isEndLine(stream) {
    return !stream.peek() || stream.match(/\s+$/, false);
  }

  function urlTokens(stream, state) {
    var ch = stream.peek();

    if (ch === ")") {
      stream.next();
      state.tokenizer = tokenBase;
      return "operator";
    } else if (ch === "(") {
      stream.next();
      stream.eatSpace();

      return "operator";
    } else if (ch === "'" || ch === '"') {
      state.tokenizer = buildStringTokenizer(stream.next());
      return "string";
    } else {
      state.tokenizer = buildStringTokenizer(")", false);
      return "string";
    }
  }
  function comment(indentation, multiLine) {
    return function(stream, state) {
      if (stream.sol() && stream.indentation() <= indentation) {
        state.tokenizer = tokenBase;
        return tokenBase(stream, state);
      }

      if (multiLine && stream.skipTo("*/")) {
        stream.next();
        stream.next();
        state.tokenizer = tokenBase;
      } else {
        stream.skipToEnd();
      }

      return "comment";
    };
  }

  function buildStringTokenizer(quote, greedy) {
    if (greedy == null) { greedy = true; }

    function stringTokenizer(stream, state) {
      var nextChar = stream.next();
      var peekChar = stream.peek();
      var previousChar = stream.string.charAt(stream.pos-2);

      var endingString = ((nextChar !== "\\" && peekChar === quote) || (nextChar === quote && previousChar !== "\\"));

      if (endingString) {
        if (nextChar !== quote && greedy) { stream.next(); }
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        state.tokenizer = tokenBase;
        return "string";
      } else if (nextChar === "#" && peekChar === "{") {
        state.tokenizer = buildInterpolationTokenizer(stringTokenizer);
        stream.next();
        return "operator";
      } else {
        return "string";
      }
    }

    return stringTokenizer;
  }

  function buildInterpolationTokenizer(currentTokenizer) {
    return function(stream, state) {
      if (stream.peek() === "}") {
        stream.next();
        state.tokenizer = currentTokenizer;
        return "operator";
      } else {
        return tokenBase(stream, state);
      }
    };
  }

  function indent(state) {
    if (state.indentCount == 0) {
      state.indentCount++;
      var lastScopeOffset = state.scopes[0].offset;
      var currentOffset = lastScopeOffset + config.indentUnit;
      state.scopes.unshift({ offset:currentOffset });
    }
  }

  function dedent(state) {
    if (state.scopes.length == 1) return;

    state.scopes.shift();
  }

  function tokenBase(stream, state) {
    var ch = stream.peek();

    // Comment
    if (stream.match("/*")) {
      state.tokenizer = comment(stream.indentation(), true);
      return state.tokenizer(stream, state);
    }
    if (stream.match("//")) {
      state.tokenizer = comment(stream.indentation(), false);
      return state.tokenizer(stream, state);
    }

    // Interpolation
    if (stream.match("#{")) {
      state.tokenizer = buildInterpolationTokenizer(tokenBase);
      return "operator";
    }

    // Strings
    if (ch === '"' || ch === "'") {
      stream.next();
      state.tokenizer = buildStringTokenizer(ch);
      return "string";
    }

    if(!state.cursorHalf){// state.cursorHalf === 0
    // first half i.e. before : for key-value pairs
    // including selectors

      if (ch === "-") {
        if (stream.match(/^-\w+-/)) {
          return "meta";
        }
      }

      if (ch === ".") {
        stream.next();
        if (stream.match(/^[\w-]+/)) {
          indent(state);
          return "qualifier";
        } else if (stream.peek() === "#") {
          indent(state);
          return "tag";
        }
      }

      if (ch === "#") {
        stream.next();
        // ID selectors
        if (stream.match(/^[\w-]+/)) {
          indent(state);
          return "builtin";
        }
        if (stream.peek() === "#") {
          indent(state);
          return "tag";
        }
      }

      // Variables
      if (ch === "$") {
        stream.next();
        stream.eatWhile(/[\w-]/);
        return "variable-2";
      }

      // Numbers
      if (stream.match(/^-?[0-9\.]+/))
        return "number";

      // Units
      if (stream.match(/^(px|em|in)\b/))
        return "unit";

      if (stream.match(keywordsRegexp))
        return "keyword";

      if (stream.match(/^url/) && stream.peek() === "(") {
        state.tokenizer = urlTokens;
        return "atom";
      }

      if (ch === "=") {
        // Match shortcut mixin definition
        if (stream.match(/^=[\w-]+/)) {
          indent(state);
          return "meta";
        }
      }

      if (ch === "+") {
        // Match shortcut mixin definition
        if (stream.match(/^\+[\w-]+/)){
          return "variable-3";
        }
      }

      if(ch === "@"){
        if(stream.match(/@extend/)){
          if(!stream.match(/\s*[\w]/))
            dedent(state);
        }
      }


      // Indent Directives
      if (stream.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) {
        indent(state);
        return "def";
      }

      // Other Directives
      if (ch === "@") {
        stream.next();
        stream.eatWhile(/[\w-]/);
        return "def";
      }

      if (stream.eatWhile(/[\w-]/)){
        if(stream.match(/ *: *[\w-\+\$#!\("']/,false)){
          word = stream.current().toLowerCase();
          var prop = state.prevProp + "-" + word;
          if (propertyKeywords.hasOwnProperty(prop)) {
            return "property";
          } else if (propertyKeywords.hasOwnProperty(word)) {
            state.prevProp = word;
            return "property";
          } else if (fontProperties.hasOwnProperty(word)) {
            return "property";
          }
          return "tag";
        }
        else if(stream.match(/ *:/,false)){
          indent(state);
          state.cursorHalf = 1;
          state.prevProp = stream.current().toLowerCase();
          return "property";
        }
        else if(stream.match(/ *,/,false)){
          return "tag";
        }
        else{
          indent(state);
          return "tag";
        }
      }

      if(ch === ":"){
        if (stream.match(pseudoElementsRegexp)){ // could be a pseudo-element
          return "variable-3";
        }
        stream.next();
        state.cursorHalf=1;
        return "operator";
      }

    } // cursorHalf===0 ends here
    else{

      if (ch === "#") {
        stream.next();
        // Hex numbers
        if (stream.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)){
          if (isEndLine(stream)) {
            state.cursorHalf = 0;
          }
          return "number";
        }
      }

      // Numbers
      if (stream.match(/^-?[0-9\.]+/)){
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "number";
      }

      // Units
      if (stream.match(/^(px|em|in)\b/)){
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "unit";
      }

      if (stream.match(keywordsRegexp)){
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "keyword";
      }

      if (stream.match(/^url/) && stream.peek() === "(") {
        state.tokenizer = urlTokens;
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "atom";
      }

      // Variables
      if (ch === "$") {
        stream.next();
        stream.eatWhile(/[\w-]/);
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "variable-2";
      }

      // bang character for !important, !default, etc.
      if (ch === "!") {
        stream.next();
        state.cursorHalf = 0;
        return stream.match(/^[\w]+/) ? "keyword": "operator";
      }

      if (stream.match(opRegexp)){
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        return "operator";
      }

      // attributes
      if (stream.eatWhile(/[\w-]/)) {
        if (isEndLine(stream)) {
          state.cursorHalf = 0;
        }
        word = stream.current().toLowerCase();
        if (valueKeywords.hasOwnProperty(word)) {
          return "atom";
        } else if (colorKeywords.hasOwnProperty(word)) {
          return "keyword";
        } else if (propertyKeywords.hasOwnProperty(word)) {
          state.prevProp = stream.current().toLowerCase();
          return "property";
        } else {
          return "tag";
        }
      }

      //stream.eatSpace();
      if (isEndLine(stream)) {
        state.cursorHalf = 0;
        return null;
      }

    } // else ends here

    if (stream.match(opRegexp))
      return "operator";

    // If we haven't returned by now, we move 1 character
    // and return an error
    stream.next();
    return null;
  }

  function tokenLexer(stream, state) {
    if (stream.sol()) state.indentCount = 0;
    var style = state.tokenizer(stream, state);
    var current = stream.current();

    if (current === "@return" || current === "}"){
      dedent(state);
    }

    if (style !== null) {
      var startOfToken = stream.pos - current.length;

      var withCurrentIndent = startOfToken + (config.indentUnit * state.indentCount);

      var newScopes = [];

      for (var i = 0; i < state.scopes.length; i++) {
        var scope = state.scopes[i];

        if (scope.offset <= withCurrentIndent)
          newScopes.push(scope);
      }

      state.scopes = newScopes;
    }


    return style;
  }

  return {
    startState: function() {
      return {
        tokenizer: tokenBase,
        scopes: [{offset: 0, type: "sass"}],
        indentCount: 0,
        cursorHalf: 0,  // cursor half tells us if cursor lies after (1)
                        // or before (0) colon (well... more or less)
        definedVars: [],
        definedMixins: []
      };
    },
    token: function(stream, state) {
      var style = tokenLexer(stream, state);

      state.lastToken = { style: style, content: stream.current() };

      return style;
    },

    indent: function(state) {
      return state.scopes[0].offset;
    }
  };
}, "css");

CodeMirror.defineMIME("text/x-sass", "sass");

});

;(function(){
var f,ca=this;
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var da="closure_uid_"+(1E9*Math.random()>>>0),fa=0;var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ja(a,b){return a<b?-1:a>b?1:0};function ka(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function ma(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};function na(a,b){this.I=[];this.J=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.I[d]=e,c=!1)}}var pa={};function ra(a){if(-128<=a&&128>a){var b=pa[a];if(b)return b}b=new na([a|0],0>a?-1:0);-128<=a&&128>a&&(pa[a]=b);return b}function sa(a){if(isNaN(a)||!isFinite(a))return ta;if(0>a)return ua(sa(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=xa;return new na(b,0)}var xa=4294967296,ta=ra(0),za=ra(1),Aa=ra(16777216);
function Ba(a){if(-1==a.J)return-Ba(ua(a));for(var b=0,c=1,d=0;d<a.I.length;d++){var e=v(a,d);b+=(0<=e?e:xa+e)*c;c*=xa}return b}f=na.prototype;f.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(Ca(this))return"0";if(-1==this.J)return"-"+ua(this).toString(a);for(var b=sa(Math.pow(a,6)),c=this,d="";;){var e=Da(c,b),g=e.multiply(b);c=c.add(ua(g));g=((0<c.I.length?c.I[0]:c.J)>>>0).toString(a);c=e;if(Ca(c))return g+d;for(;6>g.length;)g="0"+g;d=""+g+d}};
function v(a,b){return 0>b?0:b<a.I.length?a.I[b]:a.J}function Ca(a){if(0!=a.J)return!1;for(var b=0;b<a.I.length;b++)if(0!=a.I[b])return!1;return!0}f.equals=function(a){if(this.J!=a.J)return!1;for(var b=Math.max(this.I.length,a.I.length),c=0;c<b;c++)if(v(this,c)!=v(a,c))return!1;return!0};f.compare=function(a){a=this.add(ua(a));return-1==a.J?-1:Ca(a)?0:1};function ua(a){for(var b=a.I.length,c=[],d=0;d<b;d++)c[d]=~a.I[d];return(new na(c,~a.J)).add(za)}
f.add=function(a){for(var b=Math.max(this.I.length,a.I.length),c=[],d=0,e=0;e<=b;e++){var g=d+(v(this,e)&65535)+(v(a,e)&65535),h=(g>>>16)+(v(this,e)>>>16)+(v(a,e)>>>16);d=h>>>16;g&=65535;h&=65535;c[e]=h<<16|g}return new na(c,c[c.length-1]&-2147483648?-1:0)};
f.multiply=function(a){if(Ca(this)||Ca(a))return ta;if(-1==this.J)return-1==a.J?ua(this).multiply(ua(a)):ua(ua(this).multiply(a));if(-1==a.J)return ua(this.multiply(ua(a)));if(0>this.compare(Aa)&&0>a.compare(Aa))return sa(Ba(this)*Ba(a));for(var b=this.I.length+a.I.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.I.length;d++)for(var e=0;e<a.I.length;e++){var g=v(this,d)>>>16,h=v(this,d)&65535,k=v(a,e)>>>16,l=v(a,e)&65535;c[2*d+2*e]+=h*l;Ea(c,2*d+2*e);c[2*d+2*e+1]+=g*l;Ea(c,2*d+2*e+1);c[2*d+2*e+1]+=
h*k;Ea(c,2*d+2*e+1);c[2*d+2*e+2]+=g*k;Ea(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new na(c,0)};function Ea(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++}
function Da(a,b){if(Ca(b))throw Error("division by zero");if(Ca(a))return ta;if(-1==a.J)return-1==b.J?Da(ua(a),ua(b)):ua(Da(ua(a),b));if(-1==b.J)return ua(Da(a,ua(b)));if(30<a.I.length){if(-1==a.J||-1==b.J)throw Error("slowDivide_ only works with positive integers.");for(var c=za;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Ga(c,1),e=Ga(b,1);b=Ga(b,2);for(c=Ga(c,2);!Ca(b);){var g=e.add(b);0>=g.compare(a)&&(d=d.add(c),e=g);b=Ga(b,1);c=Ga(c,1)}return d}for(c=ta;0<=a.compare(b);){d=Math.max(1,
Math.floor(Ba(a)/Ba(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);g=sa(d);for(var h=g.multiply(b);-1==h.J||0<h.compare(a);)d-=e,g=sa(d),h=g.multiply(b);Ca(g)&&(g=za);c=c.add(g);a=a.add(ua(h))}return c}f.and=function(a){for(var b=Math.max(this.I.length,a.I.length),c=[],d=0;d<b;d++)c[d]=v(this,d)&v(a,d);return new na(c,this.J&a.J)};f.or=function(a){for(var b=Math.max(this.I.length,a.I.length),c=[],d=0;d<b;d++)c[d]=v(this,d)|v(a,d);return new na(c,this.J|a.J)};
f.xor=function(a){for(var b=Math.max(this.I.length,a.I.length),c=[],d=0;d<b;d++)c[d]=v(this,d)^v(a,d);return new na(c,this.J^a.J)};f.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.I.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?v(this,e-b)<<a|v(this,e-b-1)>>>32-a:v(this,e-b);return new na(d,this.J)};function Ga(a,b){var c=b>>5;b%=32;for(var d=a.I.length-c,e=[],g=0;g<d;g++)e[g]=0<b?v(a,g+c)>>>b|v(a,g+c+1)<<32-b:v(a,g+c);return new na(e,a.J)};function Ha(a,b){null!=a&&this.append.apply(this,arguments)}f=Ha.prototype;f.Na="";f.set=function(a){this.Na=""+a};f.append=function(a,b,c){this.Na+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.Na+=arguments[d];return this};f.clear=function(){this.Na=""};f.toString=function(){return this.Na};function Ja(a,b){var c=Ka;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var La;if("undefined"===typeof y)var y={};if("undefined"===typeof Ma)var Ma=null;if("undefined"===typeof Na)var Na=null;var Oa=null;if("undefined"===typeof Pa)var Pa=null;function Qa(){return new Sa(null,5,[Ta,!0,Va,!0,Wa,!1,Xa,!1,Ya,null],null)}function z(a){return null!=a&&!1!==a}function Za(a){return a instanceof Array}function A(a,b){return a[r(null==b?null:b)]?!0:a._?!0:!1}
function D(a,b){var c=null==b?null:b.constructor;c=z(z(c)?c.rb:c)?c.fb:r(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function $a(a){var b=a.fb;return z(b)?b:[E.c(a)].join("")}var ab="undefined"!==typeof Symbol&&"function"===r(Symbol)?Symbol.iterator:"@@iterator";function bb(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function cb(){}
var db=function db(a){if(null!=a&&null!=a.ba)return a.ba(a);var c=db[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=db._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("ICounted.-count",a);};function eb(){}var fb=function fb(a,b){if(null!=a&&null!=a.X)return a.X(a,b);var d=fb[r(null==a?null:a)];if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);d=fb._;if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);throw D("ICollection.-conj",a);};function hb(){}
var G=function G(a){switch(arguments.length){case 2:return G.f(arguments[0],arguments[1]);case 3:return G.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",E.c(arguments.length)].join(""));}};G.f=function(a,b){if(null!=a&&null!=a.N)return a.N(a,b);var c=G[r(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=G._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw D("IIndexed.-nth",a);};
G.l=function(a,b,c){if(null!=a&&null!=a.Y)return a.Y(a,b,c);var d=G[r(null==a?null:a)];if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);d=G._;if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);throw D("IIndexed.-nth",a);};G.R=3;
var H=function H(a){if(null!=a&&null!=a.ea)return a.ea(a);var c=H[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=H._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("ISeq.-first",a);},I=function I(a){if(null!=a&&null!=a.ia)return a.ia(a);var c=I[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=I._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("ISeq.-rest",a);};function ib(){}function jb(){}
var kb=function kb(a){switch(arguments.length){case 2:return kb.f(arguments[0],arguments[1]);case 3:return kb.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",E.c(arguments.length)].join(""));}};kb.f=function(a,b){if(null!=a&&null!=a.O)return a.O(a,b);var c=kb[r(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=kb._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw D("ILookup.-lookup",a);};
kb.l=function(a,b,c){if(null!=a&&null!=a.D)return a.D(a,b,c);var d=kb[r(null==a?null:a)];if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);d=kb._;if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);throw D("ILookup.-lookup",a);};kb.R=3;var lb=function lb(a,b,c){if(null!=a&&null!=a.sa)return a.sa(a,b,c);var e=lb[r(null==a?null:a)];if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);e=lb._;if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);throw D("IAssociative.-assoc",a);};function mb(){}
var nb=function nb(a){if(null!=a&&null!=a.Ab)return a.key;var c=nb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=nb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IMapEntry.-key",a);},ob=function ob(a){if(null!=a&&null!=a.Bb)return a.K;var c=ob[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=ob._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IMapEntry.-val",a);};function pb(){}
var J=function J(a){if(null!=a&&null!=a.ib)return a.ib(a);var c=J[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=J._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IDeref.-deref",a);};function qb(){}
var sb=function sb(a){if(null!=a&&null!=a.P)return a.P(a);var c=sb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=sb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IMeta.-meta",a);},tb=function tb(a,b){if(null!=a&&null!=a.V)return a.V(a,b);var d=tb[r(null==a?null:a)];if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);d=tb._;if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);throw D("IWithMeta.-with-meta",a);};function ub(){}
var vb=function vb(a){switch(arguments.length){case 2:return vb.f(arguments[0],arguments[1]);case 3:return vb.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",E.c(arguments.length)].join(""));}};vb.f=function(a,b){if(null!=a&&null!=a.da)return a.da(a,b);var c=vb[r(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=vb._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw D("IReduce.-reduce",a);};
vb.l=function(a,b,c){if(null!=a&&null!=a.$)return a.$(a,b,c);var d=vb[r(null==a?null:a)];if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);d=vb._;if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);throw D("IReduce.-reduce",a);};vb.R=3;function wb(){}
var xb=function xb(a,b,c){if(null!=a&&null!=a.bb)return a.bb(a,b,c);var e=xb[r(null==a?null:a)];if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);e=xb._;if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);throw D("IKVReduce.-kv-reduce",a);},yb=function yb(a,b){if(null!=a&&null!=a.w)return a.w(a,b);var d=yb[r(null==a?null:a)];if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);d=yb._;if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);throw D("IEquiv.-equiv",a);},zb=function zb(a){if(null!=a&&null!=a.M)return a.M(a);
var c=zb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=zb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IHash.-hash",a);};function Ab(){}var Bb=function Bb(a){if(null!=a&&null!=a.L)return a.L(a);var c=Bb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Bb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("ISeqable.-seq",a);};function Cb(){}function Eb(){}function Fb(){}
var L=function L(a,b){if(null!=a&&null!=a.qb)return a.qb(a,b);var d=L[r(null==a?null:a)];if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);d=L._;if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);throw D("IWriter.-write",a);},Gb=function Gb(a,b,c){if(null!=a&&null!=a.pb)return a.pb(a,b,c);var e=Gb[r(null==a?null:a)];if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);e=Gb._;if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);throw D("IWatchable.-notify-watches",a);},Hb=function Hb(a){if(null!=a&&null!=
a.Ta)return a.Ta(a);var c=Hb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Hb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IEditableCollection.-as-transient",a);},Ib=function Ib(a,b){if(null!=a&&null!=a.Va)return a.Va(a,b);var d=Ib[r(null==a?null:a)];if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);d=Ib._;if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);throw D("ITransientCollection.-conj!",a);},Jb=function Jb(a){if(null!=a&&null!=a.eb)return a.eb(a);var c=Jb[r(null==a?
null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Jb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("ITransientCollection.-persistent!",a);},Kb=function Kb(a,b,c){if(null!=a&&null!=a.Ja)return a.Ja(a,b,c);var e=Kb[r(null==a?null:a)];if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);e=Kb._;if(null!=e)return e.l?e.l(a,b,c):e.call(null,a,b,c);throw D("ITransientAssociative.-assoc!",a);},Lb=function Lb(a){if(null!=a&&null!=a.lb)return a.lb(a);var c=Lb[r(null==a?null:a)];if(null!=c)return c.c?
c.c(a):c.call(null,a);c=Lb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IChunk.-drop-first",a);},Mb=function Mb(a){if(null!=a&&null!=a.hb)return a.hb(a);var c=Mb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Mb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IChunkedSeq.-chunked-first",a);},Ob=function Ob(a){if(null!=a&&null!=a.ab)return a.ab(a);var c=Ob[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Ob._;if(null!=c)return c.c?c.c(a):c.call(null,
a);throw D("IChunkedSeq.-chunked-rest",a);},Pb=function Pb(a,b){if(null!=a&&null!=a.Eb)return a.Eb(a,b);var d=Pb[r(null==a?null:a)];if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);d=Pb._;if(null!=d)return d.f?d.f(a,b):d.call(null,a,b);throw D("IReset.-reset!",a);},M=function M(a){switch(arguments.length){case 2:return M.f(arguments[0],arguments[1]);case 3:return M.l(arguments[0],arguments[1],arguments[2]);case 4:return M.C(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return M.T(arguments[0],
arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error(["Invalid arity: ",E.c(arguments.length)].join(""));}};M.f=function(a,b){if(null!=a&&null!=a.Gb)return a.Gb(a,b);var c=M[r(null==a?null:a)];if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);c=M._;if(null!=c)return c.f?c.f(a,b):c.call(null,a,b);throw D("ISwap.-swap!",a);};
M.l=function(a,b,c){if(null!=a&&null!=a.Hb)return a.Hb(a,b,c);var d=M[r(null==a?null:a)];if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);d=M._;if(null!=d)return d.l?d.l(a,b,c):d.call(null,a,b,c);throw D("ISwap.-swap!",a);};M.C=function(a,b,c,d){if(null!=a&&null!=a.Ib)return a.Ib(a,b,c,d);var e=M[r(null==a?null:a)];if(null!=e)return e.C?e.C(a,b,c,d):e.call(null,a,b,c,d);e=M._;if(null!=e)return e.C?e.C(a,b,c,d):e.call(null,a,b,c,d);throw D("ISwap.-swap!",a);};
M.T=function(a,b,c,d,e){if(null!=a&&null!=a.Jb)return a.Jb(a,b,c,d,e);var g=M[r(null==a?null:a)];if(null!=g)return g.T?g.T(a,b,c,d,e):g.call(null,a,b,c,d,e);g=M._;if(null!=g)return g.T?g.T(a,b,c,d,e):g.call(null,a,b,c,d,e);throw D("ISwap.-swap!",a);};M.R=5;function Qb(){}var Rb=function Rb(a){if(null!=a&&null!=a.Ha)return a.Ha(a);var c=Rb[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Rb._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IIterable.-iterator",a);};
function Sb(a){this.Nb=a;this.o=1073741824;this.A=0}Sb.prototype.qb=function(a,b){return this.Nb.append(b)};function Tb(a){var b=new Ha;a.U(new Sb(b),Qa());return[E.c(b)].join("")}var Ub="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function Vb(a){a=Ub(a|0,-862048943);return Ub(a<<15|a>>>-15,461845907)}
function Wb(a,b){a=(a|0)^(b|0);return Ub(a<<13|a>>>-13,5)+-430675100|0}function Xb(a,b){a=(a|0)^b;a=Ub(a^a>>>16,-2048144789);a=Ub(a^a>>>13,-1028477387);return a^a>>>16}function Yb(a){a:{var b=1;for(var c=0;;)if(b<a.length){var d=b+2;c=Wb(c,Vb(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^Vb(a.charCodeAt(a.length-1)):b;return Xb(b,Ub(2,a.length))}var Zb={},$b=0;
function ac(a){255<$b&&(Zb={},$b=0);if(null==a)return 0;var b=Zb[a];if("number"===typeof b)a=b;else{a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b){var e=c+1;d=Ub(31,d)+a.charCodeAt(c);c=e}else{b=d;break a}else b=0;else b=0;Zb[a]=b;$b+=1;a=b}return a}
function bc(a){if(null!=a&&(a.o&4194304||y===a.Ub))return a.M(null)^0;if("number"===typeof a){if(z(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1231:!1===a?a=1237:"string"===typeof a?(a=ac(a),0!==a&&(a=Vb(a),a=Wb(0,a),a=Xb(a,4))):a=a instanceof Date?a.valueOf()^0:null==a?0:zb(a)^0,a}function cc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function dc(a,b,c,d,e){this.$a=a;this.name=b;this.Ma=c;this.Qa=d;this.ja=e;this.o=2154168321;this.A=4096}f=dc.prototype;f.toString=function(){return this.Ma};f.equiv=function(a){return this.w(null,a)};f.w=function(a,b){return b instanceof dc?this.Ma===b.Ma:!1};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return N.f(c,this);case 3:return N.l(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return N.f(c,this)};a.l=function(a,c,d){return N.l(c,this,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return N.f(a,this)};f.f=function(a,b){return N.l(a,this,b)};f.P=function(){return this.ja};
f.V=function(a,b){return new dc(this.$a,this.name,this.Ma,this.Qa,b)};f.M=function(){var a=this.Qa;return null!=a?a:this.Qa=a=cc(Yb(this.name),ac(this.$a))};f.U=function(a){return L(a,this.Ma)};function O(a){if(null==a)return null;if(null!=a&&(a.o&8388608||y===a.Fb))return a.L(null);if(Za(a)||"string"===typeof a)return 0===a.length?null:new P(a,0,null);if(A(Ab,a))return Bb(a);throw Error([E.c(a)," is not ISeqable"].join(""));}
function Q(a){if(null==a)return null;if(null!=a&&(a.o&64||y===a.Ua))return a.ea(null);a=O(a);return null==a?null:H(a)}function ec(a){return null!=a?null!=a&&(a.o&64||y===a.Ua)?a.ia(null):(a=O(a))?I(a):fc:fc}function R(a){return null==a?null:null!=a&&(a.o&128||y===a.cb)?a.ca():O(ec(a))}
var S=function S(a){switch(arguments.length){case 1:return S.c(arguments[0]);case 2:return S.f(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return S.F(arguments[0],arguments[1],new P(c.slice(2),0,null))}};S.c=function(){return!0};S.f=function(a,b){return null==a?null==b:a===b||yb(a,b)};S.F=function(a,b,c){for(;;)if(S.f(a,b))if(R(c))a=b,b=Q(c),c=R(c);else return S.f(b,Q(c));else return!1};
S.W=function(a){var b=Q(a),c=R(a);a=Q(c);c=R(c);return this.F(b,a,c)};S.R=2;function gc(a){this.s=a}gc.prototype.next=function(){if(null!=this.s){var a=Q(this.s);this.s=R(this.s);return{value:a,done:!1}}return{value:null,done:!0}};function hc(a){return new gc(O(a))}function ic(a,b){a=Vb(a);a=Wb(0,a);return Xb(a,b)}function jc(a){var b=0,c=1;for(a=O(a);;)if(null!=a)b+=1,c=Ub(31,c)+bc(Q(a))|0,a=R(a);else return ic(c,b)}var lc=ic(1,0);
function mc(a){var b=0,c=0;for(a=O(a);;)if(null!=a)b+=1,c=c+bc(Q(a))|0,a=R(a);else return ic(c,b)}var nc=ic(0,0);cb["null"]=!0;db["null"]=function(){return 0};Date.prototype.w=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};yb.number=function(a,b){return a===b};qb["function"]=!0;sb["function"]=function(){return null};zb._=function(a){return a[da]||(a[da]=++fa)};function oc(){this.K=!1;this.o=32768;this.A=0}oc.prototype.ib=function(){return this.K};
function pc(a){return a instanceof oc}function qc(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var g=a[c];e=b.f?b.f(e,g):b.call(null,e,g);if(pc(e))return J(e);c+=1}else return e}function rc(a,b,c,d){for(var e=a.length;;)if(d<e){var g=a[d];c=b.f?b.f(c,g):b.call(null,c,g);if(pc(c))return J(c);d+=1}else return c}function sc(a){return null!=a?a.o&2||y===a.ub?!0:a.o?!1:A(cb,a):A(cb,a)}function tc(a){return null!=a?a.o&16||y===a.nb?!0:a.o?!1:A(hb,a):A(hb,a)}
function T(a,b,c){var d=U(a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(S.f(uc(a,c),b))return c;c+=1}else return-1}function V(a,b,c){var d=U(a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(S.f(uc(a,c),b))return c;--c}else return-1}function vc(a,b){this.h=a;this.i=b}vc.prototype.ga=function(){return this.i<this.h.length};vc.prototype.next=function(){var a=this.h[this.i];this.i+=1;return a};
function P(a,b,c){this.h=a;this.i=b;this.meta=c;this.o=166592766;this.A=139264}f=P.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.N=function(a,b){a=b+this.i;if(0<=a&&a<this.h.length)return this.h[a];throw Error("Index out of bounds");};f.Y=function(a,b,c){a=b+this.i;return 0<=a&&a<this.h.length?this.h[a]:c};f.Ha=function(){return new vc(this.h,this.i)};
f.P=function(){return this.meta};f.ca=function(){return this.i+1<this.h.length?new P(this.h,this.i+1,null):null};f.ba=function(){var a=this.h.length-this.i;return 0>a?0:a};f.M=function(){return jc(this)};f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return rc(this.h,b,this.h[this.i],this.i+1)};f.$=function(a,b,c){return rc(this.h,b,c,this.i)};f.ea=function(){return this.h[this.i]};f.ia=function(){return this.i+1<this.h.length?new P(this.h,this.i+1,null):fc};
f.L=function(){return this.i<this.h.length?this:null};f.V=function(a,b){return new P(this.h,this.i,b)};f.X=function(a,b){return W(b,this)};P.prototype[ab]=function(){return hc(this)};function xc(a){return 0<a.length?new P(a,0,null):null}yb._=function(a,b){return a===b};
var yc=function yc(a){switch(arguments.length){case 0:return yc.H();case 1:return yc.c(arguments[0]);case 2:return yc.f(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return yc.F(arguments[0],arguments[1],new P(c.slice(2),0,null))}};yc.H=function(){return zc};yc.c=function(a){return a};yc.f=function(a,b){return null!=a?fb(a,b):new Ac(null,b,null,1,null)};
yc.F=function(a,b,c){for(;;)if(z(c))a=yc.f(a,b),b=Q(c),c=R(c);else return yc.f(a,b)};yc.W=function(a){var b=Q(a),c=R(a);a=Q(c);c=R(c);return this.F(b,a,c)};yc.R=2;function U(a){if(null!=a)if(null!=a&&(a.o&2||y===a.ub))a=a.ba(null);else if(Za(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.o&8388608||y===a.Fb))a:{a=O(a);for(var b=0;;){if(sc(a)){a=b+db(a);break a}a=R(a);b+=1}}else a=db(a);else a=0;return a}
function Bc(a,b){for(var c=null;;){if(null==a)return c;if(0===b)return O(a)?Q(a):c;if(tc(a))return G.l(a,b,c);if(O(a))a=R(a),--b;else return c}}
function uc(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.o&16||y===a.nb))return a.N(null,b);if(Za(a)){if(0<=b&&b<a.length)return a[b];throw Error("Index out of bounds");}if("string"===typeof a){if(0<=b&&b<a.length)return a.charAt(b);throw Error("Index out of bounds");}if(null!=a&&(a.o&64||y===a.Ua)||null!=a&&(a.o&16777216||y===a.ob)){a:for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(O(a)){a=Q(a);break a}throw Error("Index out of bounds");
}if(tc(a)){a=G.f(a,b);break a}if(O(a))a=R(a),--b;else throw Error("Index out of bounds");}return a}if(A(hb,a))return G.f(a,b);throw Error(["nth not supported on this type ",E.c($a(null==a?null:a.constructor))].join(""));}
function Cc(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number.");if(null==a)return null;if(null!=a&&(a.o&16||y===a.nb))return a.Y(null,b,null);if(Za(a))return 0<=b&&b<a.length?a[b]:null;if("string"===typeof a)return 0<=b&&b<a.length?a.charAt(b):null;if(null!=a&&(a.o&64||y===a.Ua)||null!=a&&(a.o&16777216||y===a.ob))return Bc(a,b);if(A(hb,a))return G.l(a,b,null);throw Error(["nth not supported on this type ",E.c($a(null==a?null:a.constructor))].join(""));}
var N=function N(a){switch(arguments.length){case 2:return N.f(arguments[0],arguments[1]);case 3:return N.l(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",E.c(arguments.length)].join(""));}};N.f=function(a,b){return null==a?null:null!=a&&(a.o&256||y===a.yb)?a.O(null,b):Za(a)?null!=b&&b<a.length?a[b|0]:null:"string"===typeof a?null!=b&&b<a.length?a.charAt(b|0):null:A(jb,a)?kb.f(a,b):null};
N.l=function(a,b,c){return null!=a?null!=a&&(a.o&256||y===a.yb)?a.D(null,b,c):Za(a)?null!=b&&0<=b&&b<a.length?a[b|0]:c:"string"===typeof a?null!=b&&0<=b&&b<a.length?a.charAt(b|0):c:A(jb,a)?kb.l(a,b,c):c:c};N.R=3;var Dc=function Dc(a){switch(arguments.length){case 3:return Dc.l(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Dc.F(arguments[0],arguments[1],arguments[2],new P(c.slice(3),0,null))}};
Dc.l=function(a,b,c){if(null!=a)a=lb(a,b,c);else{a=[b,c];b=[];for(c=0;;)if(c<a.length){var d=a[c],e=a[c+1],g=Ec(b,d);-1===g?(g=b,g.push(d),g.push(e)):b[g+1]=e;c+=2}else break;a=new Sa(null,b.length/2,b,null)}return a};Dc.F=function(a,b,c,d){for(;;)if(a=Dc.l(a,b,c),z(d))b=Q(d),c=Q(R(d)),d=R(R(d));else return a};Dc.W=function(a){var b=Q(a),c=R(a);a=Q(c);var d=R(c);c=Q(d);d=R(d);return this.F(b,a,c,d)};Dc.R=3;function Fc(a,b){this.j=a;this.meta=b;this.o=393217;this.A=0}f=Fc.prototype;f.P=function(){return this.meta};
f.V=function(a,b){return new Fc(this.j,b)};
f.call=function(){function a(a,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K,C,aa){return Hc(this.j,b,c,d,e,xc([g,h,k,l,p,m,n,q,t,u,w,x,B,F,K,C,aa]))}function b(a,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K,C){a=this;return a.j.Da?a.j.Da(b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K,C):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K,C)}function c(a,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K){a=this;return a.j.Ca?a.j.Ca(b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F,K)}function d(a,
b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F){a=this;return a.j.Ba?a.j.Ba(b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B,F)}function e(a,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B){a=this;return a.j.Aa?a.j.Aa(b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x,B)}function g(a,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x){a=this;return a.j.za?a.j.za(b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w,x)}function h(a,b,c,d,e,g,h,k,l,p,m,n,
q,t,u,w){a=this;return a.j.ya?a.j.ya(b,c,d,e,g,h,k,l,p,m,n,q,t,u,w):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u,w)}function k(a,b,c,d,e,g,h,k,l,p,m,n,q,t,u){a=this;return a.j.xa?a.j.xa(b,c,d,e,g,h,k,l,p,m,n,q,t,u):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t,u)}function l(a,b,c,d,e,g,h,k,l,p,m,n,q,t){a=this;return a.j.wa?a.j.wa(b,c,d,e,g,h,k,l,p,m,n,q,t):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n,q,t)}function m(a,b,c,d,e,g,h,k,l,p,m,n,q){a=this;return a.j.va?a.j.va(b,c,d,e,g,h,k,l,p,m,n,q):a.j.call(null,b,c,d,
e,g,h,k,l,p,m,n,q)}function n(a,b,c,d,e,g,h,k,l,p,m,n){a=this;return a.j.ua?a.j.ua(b,c,d,e,g,h,k,l,p,m,n):a.j.call(null,b,c,d,e,g,h,k,l,p,m,n)}function p(a,b,c,d,e,g,h,k,l,p,m){a=this;return a.j.ta?a.j.ta(b,c,d,e,g,h,k,l,p,m):a.j.call(null,b,c,d,e,g,h,k,l,p,m)}function q(a,b,c,d,e,g,h,k,l,p){a=this;return a.j.Ga?a.j.Ga(b,c,d,e,g,h,k,l,p):a.j.call(null,b,c,d,e,g,h,k,l,p)}function t(a,b,c,d,e,g,h,k,l){a=this;return a.j.Fa?a.j.Fa(b,c,d,e,g,h,k,l):a.j.call(null,b,c,d,e,g,h,k,l)}function u(a,b,c,d,e,g,
h,k){a=this;return a.j.Ea?a.j.Ea(b,c,d,e,g,h,k):a.j.call(null,b,c,d,e,g,h,k)}function w(a,b,c,d,e,g,h){a=this;return a.j.la?a.j.la(b,c,d,e,g,h):a.j.call(null,b,c,d,e,g,h)}function x(a,b,c,d,e,g){a=this;return a.j.T?a.j.T(b,c,d,e,g):a.j.call(null,b,c,d,e,g)}function B(a,b,c,d,e){a=this;return a.j.C?a.j.C(b,c,d,e):a.j.call(null,b,c,d,e)}function F(a,b,c,d){a=this;return a.j.l?a.j.l(b,c,d):a.j.call(null,b,c,d)}function K(a,b,c){a=this;return a.j.f?a.j.f(b,c):a.j.call(null,b,c)}function aa(a,b){a=this;
return a.j.c?a.j.c(b):a.j.call(null,b)}function wa(a){a=this;return a.j.H?a.j.H():a.j.call(null)}var C=null;C=function(C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb,kc,Gc,od,ie,df){switch(arguments.length){case 1:return wa.call(this,C);case 2:return aa.call(this,C,ba);case 3:return K.call(this,C,ba,ea);case 4:return F.call(this,C,ba,ea,ia);case 5:return B.call(this,C,ba,ea,ia,la);case 6:return x.call(this,C,ba,ea,ia,la,oa);case 7:return w.call(this,C,ba,ea,ia,la,oa,qa);case 8:return u.call(this,
C,ba,ea,ia,la,oa,qa,va);case 9:return t.call(this,C,ba,ea,ia,la,oa,qa,va,ya);case 10:return q.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa);case 11:return p.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia);case 12:return n.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra);case 13:return m.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua);case 14:return l.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb);case 15:return k.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb);case 16:return h.call(this,C,ba,ea,ia,
la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db);case 17:return g.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb);case 18:return e.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb,kc);case 19:return d.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb,kc,Gc);case 20:return c.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb,kc,Gc,od);case 21:return b.call(this,C,ba,ea,ia,la,oa,qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb,kc,Gc,od,ie);case 22:return a.call(this,C,ba,ea,ia,la,oa,
qa,va,ya,Fa,Ia,Ra,Ua,gb,rb,Db,Nb,kc,Gc,od,ie,df)}throw Error("Invalid arity: "+(arguments.length-1));};C.c=wa;C.f=aa;C.l=K;C.C=F;C.T=B;C.la=x;C.Ea=w;C.Fa=u;C.Ga=t;C.ta=q;C.ua=p;C.va=n;C.wa=m;C.xa=l;C.ya=k;C.za=h;C.Aa=g;C.Ba=e;C.Ca=d;C.Da=c;C.xb=b;C.Tb=a;return C}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.H=function(){return this.j.H?this.j.H():this.j.call(null)};f.c=function(a){return this.j.c?this.j.c(a):this.j.call(null,a)};
f.f=function(a,b){return this.j.f?this.j.f(a,b):this.j.call(null,a,b)};f.l=function(a,b,c){return this.j.l?this.j.l(a,b,c):this.j.call(null,a,b,c)};f.C=function(a,b,c,d){return this.j.C?this.j.C(a,b,c,d):this.j.call(null,a,b,c,d)};f.T=function(a,b,c,d,e){return this.j.T?this.j.T(a,b,c,d,e):this.j.call(null,a,b,c,d,e)};f.la=function(a,b,c,d,e,g){return this.j.la?this.j.la(a,b,c,d,e,g):this.j.call(null,a,b,c,d,e,g)};
f.Ea=function(a,b,c,d,e,g,h){return this.j.Ea?this.j.Ea(a,b,c,d,e,g,h):this.j.call(null,a,b,c,d,e,g,h)};f.Fa=function(a,b,c,d,e,g,h,k){return this.j.Fa?this.j.Fa(a,b,c,d,e,g,h,k):this.j.call(null,a,b,c,d,e,g,h,k)};f.Ga=function(a,b,c,d,e,g,h,k,l){return this.j.Ga?this.j.Ga(a,b,c,d,e,g,h,k,l):this.j.call(null,a,b,c,d,e,g,h,k,l)};f.ta=function(a,b,c,d,e,g,h,k,l,m){return this.j.ta?this.j.ta(a,b,c,d,e,g,h,k,l,m):this.j.call(null,a,b,c,d,e,g,h,k,l,m)};
f.ua=function(a,b,c,d,e,g,h,k,l,m,n){return this.j.ua?this.j.ua(a,b,c,d,e,g,h,k,l,m,n):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n)};f.va=function(a,b,c,d,e,g,h,k,l,m,n,p){return this.j.va?this.j.va(a,b,c,d,e,g,h,k,l,m,n,p):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p)};f.wa=function(a,b,c,d,e,g,h,k,l,m,n,p,q){return this.j.wa?this.j.wa(a,b,c,d,e,g,h,k,l,m,n,p,q):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q)};
f.xa=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t){return this.j.xa?this.j.xa(a,b,c,d,e,g,h,k,l,m,n,p,q,t):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t)};f.ya=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u){return this.j.ya?this.j.ya(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t,u)};f.za=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w){return this.j.za?this.j.za(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w)};
f.Aa=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x){return this.j.Aa?this.j.Aa(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x)};f.Ba=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B){return this.j.Ba?this.j.Ba(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B)};
f.Ca=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F){return this.j.Ca?this.j.Ca(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F)};f.Da=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K){return this.j.Da?this.j.Da(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K):this.j.call(null,a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K)};f.xb=function(a,b,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K,aa){return Hc(this.j,a,b,c,d,xc([e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K,aa]))};
function Ic(a){var b=null!=a;return(b?null!=a?a.o&131072||y===a.Cb||(a.o?0:A(qb,a)):A(qb,a):b)?sb(a):null}function Jc(a){return null!=a?a.o&16777216||y===a.ob?!0:a.o?!1:A(Cb,a):A(Cb,a)}function Kc(a){return null==a?!1:null!=a?a.o&1024||y===a.Yb?!0:a.o?!1:A(mb,a):A(mb,a)}function Lc(a){return null!=a?a.o&67108864||y===a.Zb?!0:a.o?!1:A(Fb,a):A(Fb,a)}function Mc(a){return null!=a?a.o&16384||y===a.ac?!0:a.o?!1:A(pb,a):A(pb,a)}function Nc(a){return null!=a?a.A&512||y===a.Qb?!0:!1:!1}
function Oc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var Pc={};function Qc(a){return null==a?!1:!1===a?!1:!0}function Rc(a,b){return(b=O(b))?Sc(a,Q(b),R(b)):a.H?a.H():a.call(null)}function Tc(a,b,c){for(c=O(c);;)if(c){var d=Q(c);b=a.f?a.f(b,d):a.call(null,b,d);if(pc(b))return J(b);c=R(c)}else return b}function Uc(a,b,c){for(a=Rb(a);;)if(a.ga()){var d=a.next();c=b.f?b.f(c,d):b.call(null,c,d);if(pc(c))return J(c)}else return c}
function Sc(a,b,c){return a=null!=c&&(c.o&524288||y===c.$b)?c.$(null,a,b):Za(c)?qc(c,a,b):"string"===typeof c?qc(c,a,b):A(ub,c)?vb.l(c,a,b):(null!=c?c.A&131072||y===c.Vb||(c.A?0:A(Qb,c)):A(Qb,c))?Uc(c,a,b):Tc(a,b,c)}function Vc(a,b){return null!=b?xb(b,a,!0):!0}function Wc(a){return a}function Xc(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function Yc(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}
var E=function E(a){switch(arguments.length){case 0:return E.H();case 1:return E.c(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return E.F(arguments[0],new P(c.slice(1),0,null))}};E.H=function(){return""};E.c=function(a){return null==a?"":[a].join("")};E.F=function(a,b){for(a=new Ha([E.c(a)].join(""));;)if(z(b))a=a.append([E.c(Q(b))].join("")),b=R(b);else return a.toString()};E.W=function(a){var b=Q(a);a=R(a);return this.F(b,a)};E.R=1;
function wc(a,b){if(Jc(b))if(sc(a)&&sc(b)&&U(a)!==U(b))a=!1;else a:for(a=O(a),b=O(b);;){if(null==a){a=null==b;break a}if(null!=b&&S.f(Q(a),Q(b)))a=R(a),b=R(b);else{a=!1;break a}}else a=null;return Qc(a)}function Ac(a,b,c,d,e){this.meta=a;this.first=b;this.Ia=c;this.count=d;this.v=e;this.o=65937646;this.A=8192}f=Ac.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};
f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,this.count)}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){return 1===this.count?null:this.Ia};f.ba=function(){return this.count};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};
f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return this.first};f.ia=function(){return 1===this.count?fc:this.Ia};f.L=function(){return this};f.V=function(a,b){return new Ac(b,this.first,this.Ia,this.count,this.v)};f.X=function(a,b){return new Ac(this.meta,b,this,this.count+1,null)};Ac.prototype[ab]=function(){return hc(this)};function Zc(a){this.meta=a;this.o=65937614;this.A=8192}f=Zc.prototype;f.toString=function(){return Tb(this)};
f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){return null};f.ba=function(){return 0};f.M=function(){return lc};f.w=function(a,b){return(null!=b?b.o&33554432||y===b.Xb||(b.o?0:A(Eb,b)):A(Eb,b))||Jc(b)?null==O(b):!1};
f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return null};f.ia=function(){return fc};f.L=function(){return null};f.V=function(a,b){return new Zc(b)};f.X=function(a,b){return new Ac(this.meta,b,null,1,null)};var fc=new Zc(null);Zc.prototype[ab]=function(){return hc(this)};function $c(a,b,c,d){this.meta=a;this.first=b;this.Ia=c;this.v=d;this.o=65929452;this.A=8192}f=$c.prototype;f.toString=function(){return Tb(this)};
f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){return null==this.Ia?null:O(this.Ia)};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};
f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return this.first};f.ia=function(){return null==this.Ia?fc:this.Ia};f.L=function(){return this};f.V=function(a,b){return new $c(b,this.first,this.Ia,this.v)};f.X=function(a,b){return new $c(null,b,this,null)};$c.prototype[ab]=function(){return hc(this)};function W(a,b){return null==b||null!=b&&(b.o&64||y===b.Ua)?new $c(null,a,b,null):new $c(null,a,O(b),null)}
function X(a,b,c,d){this.$a=a;this.name=b;this.La=c;this.Qa=d;this.o=2153775105;this.A=4096}f=X.prototype;f.toString=function(){return[":",E.c(this.La)].join("")};f.equiv=function(a){return this.w(null,a)};f.w=function(a,b){return b instanceof X?this.La===b.La:!1};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return N.f(c,this);case 3:return N.l(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return N.f(c,this)};a.l=function(a,c,d){return N.l(c,this,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return N.f(a,this)};f.f=function(a,b){return N.l(a,this,b)};
f.M=function(){var a=this.Qa;return null!=a?a:this.Qa=a=cc(Yb(this.name),ac(this.$a))+2654435769|0};f.U=function(a){return L(a,[":",E.c(this.La)].join(""))};var ad=function ad(a){switch(arguments.length){case 1:return ad.c(arguments[0]);case 2:return ad.f(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",E.c(arguments.length)].join(""));}};
ad.c=function(a){if(a instanceof X)return a;if(a instanceof dc){if(null!=a&&(a.A&4096||y===a.Db))var b=a.$a;else throw Error(["Doesn't support namespace: ",E.c(a)].join(""));return new X(b,bd(a),a.Ma,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new X(b[0],b[1],a,null):new X(null,b[0],a,null)):null};
ad.f=function(a,b){a=a instanceof X?bd(a):a instanceof dc?bd(a):a;b=b instanceof X?bd(b):b instanceof dc?bd(b):b;return new X(a,b,[E.c(z(a)?[E.c(a),"/"].join(""):null),E.c(b)].join(""),null)};ad.R=2;function cd(a,b,c){this.meta=a;this.Wa=b;this.s=null;this.v=c;this.o=32374988;this.A=1}f=cd.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};function dd(a){null!=a.Wa&&(a.s=a.Wa.H?a.Wa.H():a.Wa.call(null),a.Wa=null);return a.s}
f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){this.L(null);return null==this.s?null:R(this.s)};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};f.w=function(a,b){return wc(this,b)};
f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){this.L(null);return null==this.s?null:Q(this.s)};f.ia=function(){this.L(null);return null!=this.s?ec(this.s):fc};f.L=function(){dd(this);if(null==this.s)return null;for(var a=this.s;;)if(a instanceof cd)a=dd(a);else return this.s=a,O(this.s)};f.V=function(a,b){return new cd(b,function(a){return function(){return a.L(null)}}(this),this.v)};f.X=function(a,b){return W(b,this)};cd.prototype[ab]=function(){return hc(this)};
function ed(a){this.gb=a;this.end=0;this.o=2;this.A=0}ed.prototype.add=function(a){this.gb[this.end]=a;return this.end+=1};ed.prototype.ra=function(){var a=new fd(this.gb,0,this.end);this.gb=null;return a};ed.prototype.ba=function(){return this.end};function fd(a,b,c){this.h=a;this.off=b;this.end=c;this.o=524306;this.A=0}f=fd.prototype;f.ba=function(){return this.end-this.off};f.N=function(a,b){return this.h[this.off+b]};f.Y=function(a,b,c){return 0<=b&&b<this.end-this.off?this.h[this.off+b]:c};
f.lb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new fd(this.h,this.off+1,this.end)};f.da=function(a,b){return rc(this.h,b,this.h[this.off],this.off+1)};f.$=function(a,b,c){return rc(this.h,b,c,this.off)};function gd(a,b,c,d){this.ra=a;this.qa=b;this.meta=c;this.v=d;this.o=31850732;this.A=1536}f=gd.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};
f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){if(1<db(this.ra))return new gd(Lb(this.ra),this.qa,this.meta,null);var a=Bb(this.qa);return null==a?null:a};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};
f.w=function(a,b){return wc(this,b)};f.ea=function(){return G.f(this.ra,0)};f.ia=function(){return 1<db(this.ra)?new gd(Lb(this.ra),this.qa,this.meta,null):null==this.qa?fc:this.qa};f.L=function(){return this};f.hb=function(){return this.ra};f.ab=function(){return null==this.qa?fc:this.qa};f.V=function(a,b){return new gd(this.ra,this.qa,b,this.v)};f.X=function(a,b){return W(b,this)};f.mb=function(){return null==this.qa?null:this.qa};gd.prototype[ab]=function(){return hc(this)};
function hd(a,b){return 0===db(a)?b:new gd(a,b,null,null)}function id(a,b){a.add(b)}function jd(a,b){if(sc(b))return U(b);var c=0;for(b=O(b);;)if(null!=b&&c<a)c+=1,b=R(b);else return c}
var kd=function kd(a){if(null==a)return null;var c=R(a);return null==c?O(Q(a)):W(Q(a),kd.c?kd.c(c):kd.call(null,c))},ld=function ld(a){switch(arguments.length){case 0:return ld.H();case 1:return ld.c(arguments[0]);case 2:return ld.f(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return ld.F(arguments[0],arguments[1],new P(c.slice(2),0,null))}};ld.H=function(){return Hb(zc)};ld.c=function(a){return a};
ld.f=function(a,b){return Ib(a,b)};ld.F=function(a,b,c){for(;;)if(a=Ib(a,b),z(c))b=Q(c),c=R(c);else return a};ld.W=function(a){var b=Q(a),c=R(a);a=Q(c);c=R(c);return this.F(b,a,c)};ld.R=2;
function md(a,b,c){var d=O(c);if(0===b)return a.H?a.H():a.call(null);c=H(d);var e=I(d);if(1===b)return a.c?a.c(c):a.call(null,c);d=H(e);var g=I(e);if(2===b)return a.f?a.f(c,d):a.call(null,c,d);e=H(g);var h=I(g);if(3===b)return a.l?a.l(c,d,e):a.call(null,c,d,e);g=H(h);var k=I(h);if(4===b)return a.C?a.C(c,d,e,g):a.call(null,c,d,e,g);h=H(k);var l=I(k);if(5===b)return a.T?a.T(c,d,e,g,h):a.call(null,c,d,e,g,h);k=H(l);var m=I(l);if(6===b)return a.la?a.la(c,d,e,g,h,k):a.call(null,c,d,e,g,h,k);l=H(m);var n=
I(m);if(7===b)return a.Ea?a.Ea(c,d,e,g,h,k,l):a.call(null,c,d,e,g,h,k,l);m=H(n);var p=I(n);if(8===b)return a.Fa?a.Fa(c,d,e,g,h,k,l,m):a.call(null,c,d,e,g,h,k,l,m);n=H(p);var q=I(p);if(9===b)return a.Ga?a.Ga(c,d,e,g,h,k,l,m,n):a.call(null,c,d,e,g,h,k,l,m,n);p=H(q);var t=I(q);if(10===b)return a.ta?a.ta(c,d,e,g,h,k,l,m,n,p):a.call(null,c,d,e,g,h,k,l,m,n,p);q=H(t);var u=I(t);if(11===b)return a.ua?a.ua(c,d,e,g,h,k,l,m,n,p,q):a.call(null,c,d,e,g,h,k,l,m,n,p,q);t=H(u);var w=I(u);if(12===b)return a.va?a.va(c,
d,e,g,h,k,l,m,n,p,q,t):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t);u=H(w);var x=I(w);if(13===b)return a.wa?a.wa(c,d,e,g,h,k,l,m,n,p,q,t,u):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u);w=H(x);var B=I(x);if(14===b)return a.xa?a.xa(c,d,e,g,h,k,l,m,n,p,q,t,u,w):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u,w);x=H(B);var F=I(B);if(15===b)return a.ya?a.ya(c,d,e,g,h,k,l,m,n,p,q,t,u,w,x):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x);B=H(F);var K=I(F);if(16===b)return a.za?a.za(c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B):a.call(null,c,d,e,
g,h,k,l,m,n,p,q,t,u,w,x,B);F=H(K);var aa=I(K);if(17===b)return a.Aa?a.Aa(c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F);K=H(aa);var wa=I(aa);if(18===b)return a.Ba?a.Ba(c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K);aa=H(wa);wa=I(wa);if(19===b)return a.Ca?a.Ca(c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K,aa):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K,aa);var C=H(wa);I(wa);if(20===b)return a.Da?a.Da(c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,
B,F,K,aa,C):a.call(null,c,d,e,g,h,k,l,m,n,p,q,t,u,w,x,B,F,K,aa,C);throw Error("Only up to 20 arguments supported on functions");}function nd(a,b,c){if(null==c)a=a.c?a.c(b):a.call(a,b);else{var d=H(c);c=R(c);a=null==c?a.f?a.f(b,d):a.call(a,b,d):pd(a,b,d,H(c),R(c))}return a}function pd(a,b,c,d,e){return null==e?a.l?a.l(b,c,d):a.call(a,b,c,d):qd(a,b,c,d,H(e),R(e))}
function qd(a,b,c,d,e,g){if(null==g)return a.C?a.C(b,c,d,e):a.call(a,b,c,d,e);var h=H(g),k=R(g);if(null==k)return a.T?a.T(b,c,d,e,h):a.call(a,b,c,d,e,h);g=H(k);var l=R(k);if(null==l)return a.la?a.la(b,c,d,e,h,g):a.call(a,b,c,d,e,h,g);k=H(l);var m=R(l);if(null==m)return a.Ea?a.Ea(b,c,d,e,h,g,k):a.call(a,b,c,d,e,h,g,k);l=H(m);var n=R(m);if(null==n)return a.Fa?a.Fa(b,c,d,e,h,g,k,l):a.call(a,b,c,d,e,h,g,k,l);m=H(n);var p=R(n);if(null==p)return a.Ga?a.Ga(b,c,d,e,h,g,k,l,m):a.call(a,b,c,d,e,h,g,k,l,m);
n=H(p);var q=R(p);if(null==q)return a.ta?a.ta(b,c,d,e,h,g,k,l,m,n):a.call(a,b,c,d,e,h,g,k,l,m,n);p=H(q);var t=R(q);if(null==t)return a.ua?a.ua(b,c,d,e,h,g,k,l,m,n,p):a.call(a,b,c,d,e,h,g,k,l,m,n,p);q=H(t);var u=R(t);if(null==u)return a.va?a.va(b,c,d,e,h,g,k,l,m,n,p,q):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q);t=H(u);var w=R(u);if(null==w)return a.wa?a.wa(b,c,d,e,h,g,k,l,m,n,p,q,t):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q,t);u=H(w);var x=R(w);if(null==x)return a.xa?a.xa(b,c,d,e,h,g,k,l,m,n,p,q,t,u):a.call(a,b,c,d,
e,h,g,k,l,m,n,p,q,t,u);w=H(x);var B=R(x);if(null==B)return a.ya?a.ya(b,c,d,e,h,g,k,l,m,n,p,q,t,u,w):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q,t,u,w);x=H(B);var F=R(B);if(null==F)return a.za?a.za(b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x);B=H(F);var K=R(F);if(null==K)return a.Aa?a.Aa(b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B);F=H(K);var aa=R(K);if(null==aa)return a.Ba?a.Ba(b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B,F):a.call(a,b,c,d,e,h,g,k,l,m,n,p,
q,t,u,w,x,B,F);K=H(aa);var wa=R(aa);if(null==wa)return a.Ca?a.Ca(b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B,F,K):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B,F,K);aa=H(wa);wa=R(wa);if(null==wa)return a.Da?a.Da(b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B,F,K,aa):a.call(a,b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B,F,K,aa);b=[b,c,d,e,h,g,k,l,m,n,p,q,t,u,w,x,B,F,K,aa];for(c=wa;;)if(c)b.push(H(c)),c=R(c);else break;return a.apply(a,b)}
function rd(a,b){if(a.W){var c=a.R,d=jd(c+1,b);return d<=c?md(a,d,b):a.W(b)}b=O(b);return null==b?a.H?a.H():a.call(a):nd(a,H(b),R(b))}function Hc(a,b,c,d,e,g){return a.W?(g=kd(g),b=W(b,W(c,W(d,W(e,g)))),c=a.R,g=4+jd(c-3,g),g<=c?md(a,g,b):a.W(b)):qd(a,b,c,d,e,kd(g))}
function sd(){"undefined"===typeof La&&(La=function(a){this.Mb=a;this.o=393216;this.A=0},La.prototype.V=function(a,b){return new La(b)},La.prototype.P=function(){return this.Mb},La.prototype.ga=function(){return!1},La.prototype.next=function(){return Error("No such element")},La.prototype.remove=function(){return Error("Unsupported operation")},La.bc=function(){return new td(null,1,5,ud,[vd],null)},La.rb=!0,La.fb="cljs.core/t_cljs$core3453",La.Kb=function(a){return L(a,"cljs.core/t_cljs$core3453")});
return new La(wd)}function xd(a,b){for(;;){if(null==O(b))return!0;var c=Q(b);c=a.c?a.c(c):a.call(null,c);if(z(c))b=R(b);else return!1}}function yd(){this.state=new Sa(null,2,[zd,"",Ad,null],null);this.tb=this.Pb=this.meta=null;this.A=16386;this.o=6455296}f=yd.prototype;f.equiv=function(a){return this.w(null,a)};f.w=function(a,b){return this===b};f.ib=function(){return this.state};f.P=function(){return this.meta};
f.pb=function(a,b,c){a=O(this.tb);for(var d=null,e=0,g=0;;)if(g<e){var h=d.N(null,g),k=Cc(h,0);h=Cc(h,1);h.C?h.C(k,this,b,c):h.call(null,k,this,b,c);g+=1}else if(a=O(a))Nc(a)?(d=Mb(a),a=Ob(a),k=d,e=U(d),d=k):(d=Q(a),k=Cc(d,0),h=Cc(d,1),h.C?h.C(k,this,b,c):h.call(null,k,this,b,c),a=R(a),d=null,e=0),g=0;else return null};f.M=function(){return this[da]||(this[da]=++fa)};
function Bd(a,b){if(a instanceof yd){var c=a.Pb;if(null!=c&&!z(c.c?c.c(b):c.call(null,b)))throw Error("Validator rejected reference state");c=a.state;a.state=b;null!=a.tb&&Gb(a,c,b);return b}return Pb(a,b)}
var Cd=function Cd(a){switch(arguments.length){case 2:return Cd.f(arguments[0],arguments[1]);case 3:return Cd.l(arguments[0],arguments[1],arguments[2]);case 4:return Cd.C(arguments[0],arguments[1],arguments[2],arguments[3]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Cd.F(arguments[0],arguments[1],arguments[2],arguments[3],new P(c.slice(4),0,null))}};
Cd.f=function(a,b){if(a instanceof yd){var c=a.state;b=b.c?b.c(c):b.call(null,c);a=Bd(a,b)}else a=M.f(a,b);return a};Cd.l=function(a,b,c){if(a instanceof yd){var d=a.state;b=b.f?b.f(d,c):b.call(null,d,c);a=Bd(a,b)}else a=M.l(a,b,c);return a};Cd.C=function(a,b,c,d){if(a instanceof yd){var e=a.state;b=b.l?b.l(e,c,d):b.call(null,e,c,d);a=Bd(a,b)}else a=M.C(a,b,c,d);return a};
Cd.F=function(a,b,c,d,e){if(a instanceof yd){var g=a.state;b.W?(c=W(g,W(c,W(d,e))),d=b.R,e=3+jd(d-2,e),b=e<=d?md(b,e,c):b.W(c)):b=pd(b,g,c,d,O(e));a=Bd(a,b)}else a=M.T(a,b,c,d,e);return a};Cd.W=function(a){var b=Q(a),c=R(a);a=Q(c);var d=R(c);c=Q(d);var e=R(d);d=Q(e);e=R(e);return this.F(b,a,c,d,e)};Cd.R=4;
var Y=function Y(a){switch(arguments.length){case 1:return Y.c(arguments[0]);case 2:return Y.f(arguments[0],arguments[1]);case 3:return Y.l(arguments[0],arguments[1],arguments[2]);case 4:return Y.C(arguments[0],arguments[1],arguments[2],arguments[3]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Y.F(arguments[0],arguments[1],arguments[2],arguments[3],new P(c.slice(4),0,null))}};
Y.c=function(a){return function(b){return function(){function c(c,d){d=a.c?a.c(d):a.call(null,d);return b.f?b.f(c,d):b.call(null,c,d)}function d(a){return b.c?b.c(a):b.call(null,a)}function e(){return b.H?b.H():b.call(null)}var g=null,h=function(){function c(a,b,c){var e=null;if(2<arguments.length){e=0;for(var g=Array(arguments.length-2);e<g.length;)g[e]=arguments[e+2],++e;e=new P(g,0,null)}return d.call(this,a,b,e)}function d(c,d,e){if(a.W){d=W(d,e);var g=a.R;e=jd(g,e)+1;e=e<=g?md(a,e,d):a.W(d)}else e=
nd(a,d,O(e));return b.f?b.f(c,e):b.call(null,c,e)}c.R=2;c.W=function(a){var b=Q(a);a=R(a);var c=Q(a);a=ec(a);return d(b,c,a)};c.F=d;return c}();g=function(a,b,g){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var k=null;if(2<arguments.length){k=0;for(var l=Array(arguments.length-2);k<l.length;)l[k]=arguments[k+2],++k;k=new P(l,0,null)}return h.F(a,b,k)}throw Error("Invalid arity: "+(arguments.length-1));};g.R=2;g.W=h.W;g.H=e;
g.c=d;g.f=c;g.F=h.F;return g}()}};Y.f=function(a,b){return new cd(null,function(){var c=O(b);if(c){if(Nc(c)){for(var d=Mb(c),e=U(d),g=new ed(Array(e)),h=0;;)if(h<e)id(g,function(){var b=G.f(d,h);return a.c?a.c(b):a.call(null,b)}()),h+=1;else break;return hd(g.ra(),Y.f(a,Ob(c)))}return W(function(){var b=Q(c);return a.c?a.c(b):a.call(null,b)}(),Y.f(a,ec(c)))}return null},null)};
Y.l=function(a,b,c){return new cd(null,function(){var d=O(b),e=O(c);if(d&&e){var g=W;var h=Q(d);var k=Q(e);h=a.f?a.f(h,k):a.call(null,h,k);d=g(h,Y.l(a,ec(d),ec(e)))}else d=null;return d},null)};Y.C=function(a,b,c,d){return new cd(null,function(){var e=O(b),g=O(c),h=O(d);if(e&&g&&h){var k=W;var l=Q(e);var m=Q(g),n=Q(h);l=a.l?a.l(l,m,n):a.call(null,l,m,n);e=k(l,Y.C(a,ec(e),ec(g),ec(h)))}else e=null;return e},null)};
Y.F=function(a,b,c,d,e){var g=function l(a){return new cd(null,function(){var b=Y.f(O,a);return xd(Wc,b)?W(Y.f(Q,b),l(Y.f(ec,b))):null},null)};return Y.f(function(){return function(b){return rd(a,b)}}(g),g(yc.F(e,d,xc([c,b]))))};Y.W=function(a){var b=Q(a),c=R(a);a=Q(c);var d=R(c);c=Q(d);var e=R(d);d=Q(e);e=R(e);return this.F(b,a,c,d,e)};Y.R=4;
var Dd=function Dd(a){switch(arguments.length){case 3:return Dd.l(arguments[0],arguments[1],arguments[2]);case 4:return Dd.C(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Dd.T(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);case 6:return Dd.la(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Dd.F(arguments[0],arguments[1],arguments[2],
arguments[3],arguments[4],arguments[5],new P(c.slice(6),0,null))}};Dd.l=function(a,b,c){return Dc.l(a,b,function(){var d=N.f(a,b);return c.c?c.c(d):c.call(null,d)}())};Dd.C=function(a,b,c,d){return Dc.l(a,b,function(){var e=N.f(a,b);return c.f?c.f(e,d):c.call(null,e,d)}())};Dd.T=function(a,b,c,d,e){return Dc.l(a,b,function(){var g=N.f(a,b);return c.l?c.l(g,d,e):c.call(null,g,d,e)}())};Dd.la=function(a,b,c,d,e,g){return Dc.l(a,b,function(){var h=N.f(a,b);return c.C?c.C(h,d,e,g):c.call(null,h,d,e,g)}())};
Dd.F=function(a,b,c,d,e,g,h){return Dc.l(a,b,Hc(c,N.f(a,b),d,e,g,xc([h])))};Dd.W=function(a){var b=Q(a),c=R(a);a=Q(c);var d=R(c);c=Q(d);var e=R(d);d=Q(e);var g=R(e);e=Q(g);var h=R(g);g=Q(h);h=R(h);return this.F(b,a,c,d,e,g,h)};Dd.R=6;function Ed(a,b){this.G=a;this.h=b}function Fd(a){return new Ed(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}
function Gd(a){a=a.m;return 32>a?0:a-1>>>5<<5}function Hd(a,b,c){for(;;){if(0===b)return c;var d=Fd(a);d.h[0]=c;c=d;b-=5}}var Id=function Id(a,b,c,d){var g=new Ed(c.G,bb(c.h)),h=a.m-1>>>b&31;5===b?g.h[h]=d:(c=c.h[h],null!=c?(b-=5,a=Id.C?Id.C(a,b,c,d):Id.call(null,a,b,c,d)):a=Hd(null,b-5,d),g.h[h]=a);return g};function Jd(a,b){throw Error(["No item ",E.c(a)," in vector of length ",E.c(b)].join(""));}
function Kd(a,b){if(b>=Gd(a))return a.fa;var c=a.root;for(a=a.shift;;)if(0<a){var d=a-5;c=c.h[b>>>a&31];a=d}else return c.h}var Ld=function Ld(a,b,c,d,e){var h=new Ed(c.G,bb(c.h));if(0===b)h.h[d&31]=e;else{var k=d>>>b&31;b-=5;c=c.h[k];a=Ld.T?Ld.T(a,b,c,d,e):Ld.call(null,a,b,c,d,e);h.h[k]=a}return h};function Md(a,b,c){this.base=this.i=0;this.h=a;this.Ob=b;this.start=0;this.end=c}Md.prototype.ga=function(){return this.i<this.end};
Md.prototype.next=function(){32===this.i-this.base&&(this.h=Kd(this.Ob,this.i),this.base+=32);var a=this.h[this.i&31];this.i+=1;return a};function Nd(a,b,c,d){return c<d?Od(a,b,uc(a,c),c+1,d):b.H?b.H():b.call(null)}function Od(a,b,c,d,e){var g=c;c=d;for(d=Kd(a,d);;)if(c<e){var h=c&31;d=0===h?Kd(a,c):d;h=d[h];g=b.f?b.f(g,h):b.call(null,g,h);if(pc(g))return J(g);c+=1}else return g}
function td(a,b,c,d,e,g){this.meta=a;this.m=b;this.shift=c;this.root=d;this.fa=e;this.v=g;this.o=167666463;this.A=139268}f=td.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.O=function(a,b){return this.D(null,b,null)};f.D=function(a,b,c){return"number"===typeof b?this.Y(null,b,c):c};
f.bb=function(a,b,c){a=0;for(var d=c;;)if(a<this.m){var e=Kd(this,a);c=e.length;a:for(var g=0;;)if(g<c){var h=g+a,k=e[g];d=b.l?b.l(d,h,k):b.call(null,d,h,k);if(pc(d)){e=d;break a}g+=1}else{e=d;break a}if(pc(e))return J(e);a+=c;d=e}else return d};f.N=function(a,b){return(0<=b&&b<this.m?Kd(this,b):Jd(b,this.m))[b&31]};f.Y=function(a,b,c){return 0<=b&&b<this.m?Kd(this,b)[b&31]:c};
f.jb=function(a,b){if(0<=a&&a<this.m){if(Gd(this)<=a){var c=bb(this.fa);c[a&31]=b;return new td(this.meta,this.m,this.shift,this.root,c,null)}return new td(this.meta,this.m,this.shift,Ld(this,this.shift,this.root,a,b),this.fa,null)}if(a===this.m)return this.X(null,b);throw Error(["Index ",E.c(a)," out of bounds  [0,",E.c(this.m),"]"].join(""));};f.Ha=function(){var a=this.m;return new Md(0<U(this)?Kd(this,0):null,this,a)};f.P=function(){return this.meta};f.ba=function(){return this.m};
f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};f.w=function(a,b){if(b instanceof td)if(this.m===U(b))for(a=this.Ha(null),b=Rb(b);;)if(a.ga()){var c=a.next(),d=b.next();if(!S.f(c,d))return!1}else return!0;else return!1;else return wc(this,b)};
f.Ta=function(){var a=this.m,b=this.shift,c=new Ed({},bb(this.root.h)),d=this.fa,e=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Oc(d,0,e,0,d.length);return new Pd(a,b,c,e)};f.da=function(a,b){return Nd(this,b,0,this.m)};
f.$=function(a,b,c){a=0;for(var d=c;;)if(a<this.m){var e=Kd(this,a);c=e.length;a:for(var g=0;;)if(g<c){var h=e[g];d=b.f?b.f(d,h):b.call(null,d,h);if(pc(d)){e=d;break a}g+=1}else{e=d;break a}if(pc(e))return J(e);a+=c;d=e}else return d};f.sa=function(a,b,c){if("number"===typeof b)return this.jb(b,c);throw Error("Vector's key for assoc must be a number.");};
f.L=function(){if(0===this.m)var a=null;else if(32>=this.m)a=new P(this.fa,0,null);else{a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.h[0];else{a=a.h;break a}}a=new Qd(this,a,0,0,null)}return a};f.V=function(a,b){return new td(b,this.m,this.shift,this.root,this.fa,this.v)};
f.X=function(a,b){if(32>this.m-Gd(this)){a=this.fa.length;for(var c=Array(a+1),d=0;;)if(d<a)c[d]=this.fa[d],d+=1;else break;c[a]=b;return new td(this.meta,this.m+1,this.shift,this.root,c,null)}a=(c=this.m>>>5>1<<this.shift)?this.shift+5:this.shift;c?(c=Fd(null),c.h[0]=this.root,d=Hd(null,this.shift,new Ed(null,this.fa)),c.h[1]=d):c=Id(this,this.shift,this.root,new Ed(null,this.fa));return new td(this.meta,this.m+1,a,c,[b],null)};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.N(null,c);case 3:return this.Y(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.N(null,c)};a.l=function(a,c,d){return this.Y(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.N(null,a)};f.f=function(a,b){return this.Y(null,a,b)};
var ud=new Ed(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),zc=new td(null,0,5,ud,[],lc);td.prototype[ab]=function(){return hc(this)};function Qd(a,b,c,d,e){this.ka=a;this.node=b;this.i=c;this.off=d;this.meta=e;this.v=null;this.o=32375020;this.A=1536}f=Qd.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};
f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){if(this.off+1<this.node.length){var a=new Qd(this.ka,this.node,this.i,this.off+1,null);return null==a?null:a}return this.mb()};
f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Nd(this.ka,b,this.i+this.off,U(this.ka))};f.$=function(a,b,c){return Od(this.ka,b,c,this.i+this.off,U(this.ka))};f.ea=function(){return this.node[this.off]};f.ia=function(){if(this.off+1<this.node.length){var a=new Qd(this.ka,this.node,this.i,this.off+1,null);return null==a?fc:a}return this.ab(null)};f.L=function(){return this};
f.hb=function(){var a=this.node;return new fd(a,this.off,a.length)};f.ab=function(){var a=this.i+this.node.length;return a<db(this.ka)?new Qd(this.ka,Kd(this.ka,a),a,0,null):fc};f.V=function(a,b){return new Qd(this.ka,this.node,this.i,this.off,b)};f.X=function(a,b){return W(b,this)};f.mb=function(){var a=this.i+this.node.length;return a<db(this.ka)?new Qd(this.ka,Kd(this.ka,a),a,0,null):null};Qd.prototype[ab]=function(){return hc(this)};function Rd(a,b){return a===b.G?b:new Ed(a,bb(b.h))}
var Sd=function Sd(a,b,c,d){c=Rd(a.root.G,c);var g=a.m-1>>>b&31;if(5===b)a=d;else{var h=c.h[g];null!=h?(b-=5,a=Sd.C?Sd.C(a,b,h,d):Sd.call(null,a,b,h,d)):a=Hd(a.root.G,b-5,d)}c.h[g]=a;return c};function Pd(a,b,c,d){this.m=a;this.shift=b;this.root=c;this.fa=d;this.A=88;this.o=275}f=Pd.prototype;
f.Va=function(a,b){if(this.root.G){if(32>this.m-Gd(this))this.fa[this.m&31]=b;else{a=new Ed(this.root.G,this.fa);var c=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];c[0]=b;this.fa=c;this.m>>>5>1<<this.shift?(b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],c=this.shift+
5,b[0]=this.root,b[1]=Hd(this.root.G,this.shift,a),this.root=new Ed(this.root.G,b),this.shift=c):this.root=Sd(this,this.shift,this.root,a)}this.m+=1;return this}throw Error("conj! after persistent!");};f.eb=function(){if(this.root.G){this.root.G=null;var a=this.m-Gd(this),b=Array(a);Oc(this.fa,0,b,0,a);return new td(null,this.m,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
f.Ja=function(a,b,c){if("number"===typeof b)return Td(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
function Td(a,b,c){if(a.root.G){if(0<=b&&b<a.m){if(Gd(a)<=b)a.fa[b&31]=c;else{var d=function(){return function(){return function k(d,h){h=Rd(a.root.G,h);if(0===d)h.h[b&31]=c;else{var g=b>>>d&31;d=k(d-5,h.h[g]);h.h[g]=d}return h}}(a)(a.shift,a.root)}();a.root=d}return a}if(b===a.m)return a.Va(null,c);throw Error(["Index ",E.c(b)," out of bounds for TransientVector of length",E.c(a.m)].join(""));}throw Error("assoc! after persistent!");}
f.ba=function(){if(this.root.G)return this.m;throw Error("count after persistent!");};f.N=function(a,b){if(this.root.G)return(0<=b&&b<this.m?Kd(this,b):Jd(b,this.m))[b&31];throw Error("nth after persistent!");};f.Y=function(a,b,c){return 0<=b&&b<this.m?this.N(null,b):c};f.O=function(a,b){return this.D(null,b,null)};f.D=function(a,b,c){return"number"===typeof b?this.Y(null,b,c):c};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.O(null,c);case 3:return this.D(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.O(null,c)};a.l=function(a,c,d){return this.D(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.O(null,a)};f.f=function(a,b){return this.D(null,a,b)};function Ud(){this.o=2097152;this.A=0}
Ud.prototype.equiv=function(a){return this.w(null,a)};Ud.prototype.w=function(){return!1};var Vd=new Ud;function Wd(a,b){return Qc(Kc(b)&&!Lc(b)?U(a)===U(b)?(null!=a?a.o&1048576||y===a.Wb||(a.o?0:A(wb,a)):A(wb,a))?Vc(function(a,d,e){return S.f(N.l(b,d,Vd),e)?!0:new oc},a):xd(function(a){return S.f(N.l(b,Q(a),Vd),Q(R(a)))},a):null:null)}function Xd(a){this.s=a}
Xd.prototype.next=function(){if(null!=this.s){var a=Q(this.s),b=Cc(a,0);a=Cc(a,1);this.s=R(this.s);return{value:[b,a],done:!1}}return{value:null,done:!0}};
function Ec(a,b){if(b instanceof X)a:{var c=a.length;b=b.La;for(var d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof X&&b===a[d].La){a=d;break a}d+=2}}else if("string"==typeof b||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){a=-1;break a}if(b===a[d]){a=d;break a}d+=2}else if(b instanceof dc)a:for(c=a.length,b=b.Ma,d=0;;){if(c<=d){a=-1;break a}if(a[d]instanceof dc&&b===a[d].Ma){a=d;break a}d+=2}else if(null==b)a:for(b=a.length,c=0;;){if(b<=c){a=-1;break a}if(null==a[c]){a=c;break a}c+=2}else a:for(c=
a.length,d=0;;){if(c<=d){a=-1;break a}if(S.f(b,a[d])){a=d;break a}d+=2}return a}function Yd(a,b){this.key=a;this.K=b;this.v=null;this.o=166619935;this.A=0}f=Yd.prototype;f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.O=function(a,b){return this.Y(null,b,null)};f.D=function(a,b,c){return this.Y(null,b,c)};f.N=function(a,b){if(0===b)return this.key;if(1===b)return this.K;throw Error("Index out of bounds");};
f.Y=function(a,b,c){return 0===b?this.key:1===b?this.K:c};f.jb=function(a,b){return(new td(null,2,5,ud,[this.key,this.K],null)).jb(a,b)};f.P=function(){return null};f.ba=function(){return 2};f.Ab=function(){return this.key};f.Bb=function(){return this.K};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};f.w=function(a,b){return wc(this,b)};
f.da=function(a,b){a:if(a=db(this),0===a)b=b.H?b.H():b.call(null);else for(var c=G.f(this,0),d=1;;)if(d<a){var e=G.f(this,d);c=b.f?b.f(c,e):b.call(null,c,e);if(pc(c)){b=J(c);break a}d+=1}else{b=c;break a}return b};f.$=function(a,b,c){a:{a=db(this);var d=c;for(c=0;;)if(c<a){var e=G.f(this,c);d=b.f?b.f(d,e):b.call(null,d,e);if(pc(d)){b=J(d);break a}c+=1}else{b=d;break a}}return b};f.sa=function(a,b,c){return Dc.l(new td(null,2,5,ud,[this.key,this.K],null),b,c)};
f.L=function(){return new P([this.key,this.K],0,null)};f.V=function(a,b){a=new td(null,2,5,ud,[this.key,this.K],null);return"function"==r(a)?new Fc(a,b):null==a?null:tb(a,b)};f.X=function(a,b){return new td(null,3,5,ud,[this.key,this.K,b],null)};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.N(null,c);case 3:return this.Y(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.N(null,c)};a.l=function(a,c,d){return this.Y(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.N(null,a)};f.f=function(a,b){return this.Y(null,a,b)};
function Zd(a,b,c){this.h=a;this.i=b;this.ja=c;this.o=32374990;this.A=0}f=Zd.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.ja};f.ca=function(){return this.i<this.h.length-2?new Zd(this.h,this.i+2,this.ja):null};f.ba=function(){return(this.h.length-this.i)/2};f.M=function(){return jc(this)};
f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return new Yd(this.h[this.i],this.h[this.i+1])};f.ia=function(){return this.i<this.h.length-2?new Zd(this.h,this.i+2,this.ja):fc};f.L=function(){return this};f.V=function(a,b){return new Zd(this.h,this.i,b)};f.X=function(a,b){return W(b,this)};Zd.prototype[ab]=function(){return hc(this)};function $d(a,b){this.h=a;this.i=0;this.m=b}
$d.prototype.ga=function(){return this.i<this.m};$d.prototype.next=function(){var a=new Yd(this.h[this.i],this.h[this.i+1]);this.i+=2;return a};function Sa(a,b,c,d){this.meta=a;this.m=b;this.h=c;this.v=d;this.o=16647951;this.A=139268}f=Sa.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.keys=function(){return hc(ae(this))};f.entries=function(){return new Xd(O(O(this)))};f.values=function(){return hc(be(this))};
f.has=function(a){return N.l(this,a,Pc)===Pc?!1:!0};f.get=function(a,b){return this.D(null,a,b)};f.forEach=function(a){for(var b=O(this),c=null,d=0,e=0;;)if(e<d){var g=c.N(null,e),h=Cc(g,0);g=Cc(g,1);a.f?a.f(g,h):a.call(null,g,h);e+=1}else if(b=O(b))Nc(b)?(c=Mb(b),b=Ob(b),h=c,d=U(c),c=h):(c=Q(b),h=Cc(c,0),g=Cc(c,1),a.f?a.f(g,h):a.call(null,g,h),b=R(b),c=null,d=0),e=0;else return null};f.O=function(a,b){return this.D(null,b,null)};f.D=function(a,b,c){a=Ec(this.h,b);return-1===a?c:this.h[a+1]};
f.bb=function(a,b,c){a=this.h.length;for(var d=0;;)if(d<a){var e=this.h[d],g=this.h[d+1];c=b.l?b.l(c,e,g):b.call(null,c,e,g);if(pc(c))return J(c);d+=2}else return c};f.Ha=function(){return new $d(this.h,2*this.m)};f.P=function(){return this.meta};f.ba=function(){return this.m};f.M=function(){var a=this.v;return null!=a?a:this.v=a=mc(this)};
f.w=function(a,b){if(Kc(b)&&!Lc(b))if(a=this.h.length,this.m===b.ba(null))for(var c=0;;)if(c<a){var d=b.D(null,this.h[c],Pc);if(d!==Pc)if(S.f(this.h[c+1],d))c+=2;else return!1;else return!1}else return!0;else return!1;else return!1};f.Ta=function(){return new ce(this.h.length,bb(this.h))};f.da=function(a,b){a:if(a=Rb(this),z(a.ga()))for(var c=a.next();;)if(a.ga()){var d=a.next();c=b.f?b.f(c,d):b.call(null,c,d);if(pc(c)){b=J(c);break a}}else{b=c;break a}else b=b.H?b.H():b.call(null);return b};
f.$=function(a,b,c){return Uc(this,b,c)};f.sa=function(a,b,c){a=Ec(this.h,b);if(-1===a){if(this.m<de){a=this.h;for(var d=a.length,e=Array(d+2),g=0;;)if(g<d)e[g]=a[g],g+=1;else break;e[d]=b;e[d+1]=c;return new Sa(this.meta,this.m+1,e,null)}a=ee;a=null!=a?null!=a&&(a.A&4||y===a.Sb)?tb(Jb(Sc(Ib,Hb(a),this)),Ic(a)):Sc(fb,a,this):Sc(yc,fc,this);return tb(lb(a,b,c),this.meta)}if(c===this.h[a+1])return this;b=bb(this.h);b[a+1]=c;return new Sa(this.meta,this.m,b,null)};
f.L=function(){var a=this.h;return 0<=a.length-2?new Zd(a,0,null):null};f.V=function(a,b){return new Sa(b,this.m,this.h,this.v)};f.X=function(a,b){if(Mc(b))return this.sa(null,G.f(b,0),G.f(b,1));a=this;for(b=O(b);;){if(null==b)return a;var c=Q(b);if(Mc(c))a=a.sa(null,G.f(c,0),G.f(c,1)),b=R(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.O(null,c);case 3:return this.D(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.O(null,c)};a.l=function(a,c,d){return this.D(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.O(null,a)};f.f=function(a,b){return this.D(null,a,b)};var wd=new Sa(null,0,[],nc),de=8;Sa.prototype[ab]=function(){return hc(this)};
function ce(a,b){this.Ra={};this.Sa=a;this.h=b;this.o=259;this.A=56}f=ce.prototype;f.ba=function(){if(z(this.Ra))return Xc(this.Sa);throw Error("count after persistent!");};f.O=function(a,b){return this.D(null,b,null)};f.D=function(a,b,c){if(z(this.Ra))return a=Ec(this.h,b),-1===a?c:this.h[a+1];throw Error("lookup after persistent!");};
f.Va=function(a,b){if(z(this.Ra)){if(null!=b&&(b.o&2048||y===b.zb))return this.Ja(null,nb(b),ob(b));if(Mc(b))return this.Ja(null,b.c?b.c(0):b.call(null,0),b.c?b.c(1):b.call(null,1));a=O(b);for(b=this;;){var c=Q(a);if(z(c))a=R(a),b=b.Ja(null,nb(c),ob(c));else return b}}else throw Error("conj! after persistent!");};f.eb=function(){if(z(this.Ra))return this.Ra=!1,new Sa(null,Xc(this.Sa),this.h,null);throw Error("persistent! called twice");};
f.Ja=function(a,b,c){if(z(this.Ra)){a=Ec(this.h,b);if(-1===a){if(this.Sa+2<=2*de)return this.Sa+=2,this.h.push(b),this.h.push(c),this;a:{a=this.Sa;var d=this.h;var e=Hb(ee);for(var g=0;;)if(g<a)e=Kb(e,d[g],d[g+1]),g+=2;else break a}return Kb(e,b,c)}c!==this.h[a+1]&&(this.h[a+1]=c);return this}throw Error("assoc! after persistent!");};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.D(null,c,null);case 3:return this.D(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.D(null,c,null)};a.l=function(a,c,d){return this.D(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.D(null,a,null)};f.f=function(a,b){return this.D(null,a,b)};function fe(){this.K=!1}
function ge(a,b){return a===b?!0:a===b||a instanceof X&&b instanceof X&&a.La===b.La?!0:S.f(a,b)}function he(a,b,c){a=bb(a);a[b]=c;return a}function je(a,b,c,d){a=a.Oa(b);a.h[c]=d;return a}function ke(a,b,c){for(var d=a.length,e=0,g=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.l?b.l(g,c,h):b.call(null,g,c,h)}else c=a[e+1],c=null!=c?c.Ya(b,g):g;if(pc(c))return c;e+=2;g=c}else return g}function le(a){this.h=a;this.i=0;this.oa=this.Za=null}
le.prototype.advance=function(){for(var a=this.h.length;;)if(this.i<a){var b=this.h[this.i],c=this.h[this.i+1];null!=b?b=this.Za=new Yd(b,c):null!=c?(b=Rb(c),b=b.ga()?this.oa=b:!1):b=!1;this.i+=2;if(b)return!0}else return!1};le.prototype.ga=function(){var a=null!=this.Za;return a?a:(a=null!=this.oa)?a:this.advance()};
le.prototype.next=function(){if(null!=this.Za){var a=this.Za;this.Za=null;return a}if(null!=this.oa)return a=this.oa.next(),this.oa.ga()||(this.oa=null),a;if(this.advance())return this.next();throw Error("No such element");};le.prototype.remove=function(){return Error("Unsupported operation")};function me(a,b,c){this.G=a;this.S=b;this.h=c;this.A=131072;this.o=0}f=me.prototype;
f.Oa=function(a){if(a===this.G)return this;var b=Yc(this.S),c=Array(0>b?4:2*(b+1));Oc(this.h,0,c,0,2*b);return new me(a,this.S,c)};f.Xa=function(){return ne(this.h,0,null)};f.Ya=function(a,b){return ke(this.h,a,b)};f.Pa=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.S&e))return d;var g=Yc(this.S&e-1);e=this.h[2*g];g=this.h[2*g+1];return null==e?g.Pa(a+5,b,c,d):ge(c,e)?g:d};
f.na=function(a,b,c,d,e,g){var h=1<<(c>>>b&31),k=Yc(this.S&h-1);if(0===(this.S&h)){var l=Yc(this.S);if(2*l<this.h.length){a=this.Oa(a);b=a.h;g.K=!0;a:for(c=2*(l-k),g=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[g];--l;--c;--g}b[2*k]=d;b[2*k+1]=e;a.S|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=oe.na(a,b+5,c,d,e,g);for(e=d=0;;)if(32>d)0===
(this.S>>>d&1)?d+=1:(k[d]=null!=this.h[e]?oe.na(a,b+5,bc(this.h[e]),this.h[e],this.h[e+1],g):this.h[e+1],e+=2,d+=1);else break;return new pe(a,l+1,k)}b=Array(2*(l+4));Oc(this.h,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;Oc(this.h,2*k,b,2*(k+1),2*(l-k));g.K=!0;a=this.Oa(a);a.h=b;a.S|=h;return a}l=this.h[2*k];h=this.h[2*k+1];if(null==l)return l=h.na(a,b+5,c,d,e,g),l===h?this:je(this,a,2*k+1,l);if(ge(d,l))return e===h?this:je(this,a,2*k+1,e);g.K=!0;g=b+5;b=bc(l);if(b===c)e=new qe(null,b,2,[l,h,d,e]);else{var m=
new fe;e=oe.na(a,g,b,l,h,m).na(a,g,c,d,e,m)}d=2*k;k=2*k+1;a=this.Oa(a);a.h[d]=null;a.h[k]=e;return a};
f.ma=function(a,b,c,d,e){var g=1<<(b>>>a&31),h=Yc(this.S&g-1);if(0===(this.S&g)){var k=Yc(this.S);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=oe.ma(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0===(this.S>>>c&1)?c+=1:(h[c]=null!=this.h[d]?oe.ma(a+5,bc(this.h[d]),this.h[d],this.h[d+1],e):this.h[d+1],d+=2,c+=1);else break;return new pe(null,k+1,h)}a=Array(2*(k+1));Oc(this.h,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Oc(this.h,2*h,a,2*(h+1),2*(k-h));e.K=!0;return new me(null,this.S|g,a)}var l=this.h[2*h];g=this.h[2*h+1];if(null==l)return k=g.ma(a+5,b,c,d,e),k===g?this:new me(null,this.S,he(this.h,2*h+1,k));if(ge(c,l))return d===g?this:new me(null,this.S,he(this.h,2*h+1,d));e.K=!0;e=this.S;k=this.h;a+=5;var m=bc(l);if(m===b)c=new qe(null,m,2,[l,g,c,d]);else{var n=new fe;c=oe.ma(a,m,l,g,n).ma(a,b,c,d,n)}a=2*h;h=2*h+1;d=bb(k);d[a]=null;d[h]=c;return new me(null,e,d)};f.Ha=function(){return new le(this.h)};
var oe=new me(null,0,[]);function re(a){this.h=a;this.i=0;this.oa=null}re.prototype.ga=function(){for(var a=this.h.length;;){if(null!=this.oa&&this.oa.ga())return!0;if(this.i<a){var b=this.h[this.i];this.i+=1;null!=b&&(this.oa=Rb(b))}else return!1}};re.prototype.next=function(){if(this.ga())return this.oa.next();throw Error("No such element");};re.prototype.remove=function(){return Error("Unsupported operation")};function pe(a,b,c){this.G=a;this.m=b;this.h=c;this.A=131072;this.o=0}f=pe.prototype;
f.Oa=function(a){return a===this.G?this:new pe(a,this.m,bb(this.h))};f.Xa=function(){return se(this.h,0,null)};f.Ya=function(a,b){for(var c=this.h.length,d=0;;)if(d<c){var e=this.h[d];if(null!=e){b=e.Ya(a,b);if(pc(b))return b;d+=1}else d+=1}else return b};f.Pa=function(a,b,c,d){var e=this.h[b>>>a&31];return null!=e?e.Pa(a+5,b,c,d):d};
f.na=function(a,b,c,d,e,g){var h=c>>>b&31,k=this.h[h];if(null==k)return a=je(this,a,h,oe.na(a,b+5,c,d,e,g)),a.m+=1,a;b=k.na(a,b+5,c,d,e,g);return b===k?this:je(this,a,h,b)};f.ma=function(a,b,c,d,e){var g=b>>>a&31,h=this.h[g];if(null==h)return new pe(null,this.m+1,he(this.h,g,oe.ma(a+5,b,c,d,e)));a=h.ma(a+5,b,c,d,e);return a===h?this:new pe(null,this.m,he(this.h,g,a))};f.Ha=function(){return new re(this.h)};function te(a,b,c){b*=2;for(var d=0;;)if(d<b){if(ge(c,a[d]))return d;d+=2}else return-1}
function qe(a,b,c,d){this.G=a;this.Ka=b;this.m=c;this.h=d;this.A=131072;this.o=0}f=qe.prototype;f.Oa=function(a){if(a===this.G)return this;var b=Array(2*(this.m+1));Oc(this.h,0,b,0,2*this.m);return new qe(a,this.Ka,this.m,b)};f.Xa=function(){return ne(this.h,0,null)};f.Ya=function(a,b){return ke(this.h,a,b)};f.Pa=function(a,b,c,d){a=te(this.h,this.m,c);return 0>a?d:ge(c,this.h[a])?this.h[a+1]:d};
f.na=function(a,b,c,d,e,g){if(c===this.Ka){b=te(this.h,this.m,d);if(-1===b){if(this.h.length>2*this.m)return b=2*this.m,c=2*this.m+1,a=this.Oa(a),a.h[b]=d,a.h[c]=e,g.K=!0,a.m+=1,a;c=this.h.length;b=Array(c+2);Oc(this.h,0,b,0,c);b[c]=d;b[c+1]=e;g.K=!0;d=this.m+1;a===this.G?(this.h=b,this.m=d,a=this):a=new qe(this.G,this.Ka,d,b);return a}return this.h[b+1]===e?this:je(this,a,b+1,e)}return(new me(a,1<<(this.Ka>>>b&31),[null,this,null,null])).na(a,b,c,d,e,g)};
f.ma=function(a,b,c,d,e){return b===this.Ka?(a=te(this.h,this.m,c),-1===a?(a=2*this.m,b=Array(a+2),Oc(this.h,0,b,0,a),b[a]=c,b[a+1]=d,e.K=!0,new qe(null,this.Ka,this.m+1,b)):S.f(this.h[a+1],d)?this:new qe(null,this.Ka,this.m,he(this.h,a+1,d))):(new me(null,1<<(this.Ka>>>a&31),[null,this])).ma(a,b,c,d,e)};f.Ha=function(){return new le(this.h)};function ue(a,b,c,d,e){this.meta=a;this.pa=b;this.i=c;this.s=d;this.v=e;this.o=32374988;this.A=0}f=ue.prototype;f.toString=function(){return Tb(this)};
f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){return null==this.s?ne(this.pa,this.i+2,null):ne(this.pa,this.i,R(this.s))};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};
f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return null==this.s?new Yd(this.pa[this.i],this.pa[this.i+1]):Q(this.s)};f.ia=function(){var a=null==this.s?ne(this.pa,this.i+2,null):ne(this.pa,this.i,R(this.s));return null!=a?a:fc};f.L=function(){return this};f.V=function(a,b){return new ue(b,this.pa,this.i,this.s,this.v)};f.X=function(a,b){return W(b,this)};ue.prototype[ab]=function(){return hc(this)};
function ne(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new ue(null,a,b,null,null);var d=a[b+1];if(z(d)&&(d=d.Xa(),z(d)))return new ue(null,a,b+2,d,null);b+=2}else return null;else return new ue(null,a,b,c,null)}function ve(a,b,c,d,e){this.meta=a;this.pa=b;this.i=c;this.s=d;this.v=e;this.o=32374988;this.A=0}f=ve.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};
f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.meta};f.ca=function(){return se(this.pa,this.i,R(this.s))};f.M=function(){var a=this.v;return null!=a?a:this.v=a=jc(this)};f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};
f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return Q(this.s)};f.ia=function(){var a=se(this.pa,this.i,R(this.s));return null!=a?a:fc};f.L=function(){return this};f.V=function(a,b){return new ve(b,this.pa,this.i,this.s,this.v)};f.X=function(a,b){return W(b,this)};ve.prototype[ab]=function(){return hc(this)};
function se(a,b,c){if(null==c)for(c=a.length;;)if(b<c){var d=a[b];if(z(d)&&(d=d.Xa(),z(d)))return new ve(null,a,b+1,d,null);b+=1}else return null;else return new ve(null,a,b,c,null)}function we(a,b){this.aa=a;this.sb=b;this.kb=!1}we.prototype.ga=function(){return!this.kb||this.sb.ga()};we.prototype.next=function(){if(this.kb)return this.sb.next();this.kb=!0;return new Yd(null,this.aa)};we.prototype.remove=function(){return Error("Unsupported operation")};
function xe(a,b,c,d,e,g){this.meta=a;this.m=b;this.root=c;this.ha=d;this.aa=e;this.v=g;this.o=16123663;this.A=139268}f=xe.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.keys=function(){return hc(ae(this))};f.entries=function(){return new Xd(O(O(this)))};f.values=function(){return hc(be(this))};f.has=function(a){return N.l(this,a,Pc)===Pc?!1:!0};f.get=function(a,b){return this.D(null,a,b)};
f.forEach=function(a){for(var b=O(this),c=null,d=0,e=0;;)if(e<d){var g=c.N(null,e),h=Cc(g,0);g=Cc(g,1);a.f?a.f(g,h):a.call(null,g,h);e+=1}else if(b=O(b))Nc(b)?(c=Mb(b),b=Ob(b),h=c,d=U(c),c=h):(c=Q(b),h=Cc(c,0),g=Cc(c,1),a.f?a.f(g,h):a.call(null,g,h),b=R(b),c=null,d=0),e=0;else return null};f.O=function(a,b){return this.D(null,b,null)};f.D=function(a,b,c){return null==b?this.ha?this.aa:c:null==this.root?c:this.root.Pa(0,bc(b),b,c)};
f.bb=function(a,b,c){a=this.ha?b.l?b.l(c,null,this.aa):b.call(null,c,null,this.aa):c;pc(a)?b=J(a):null!=this.root?(b=this.root.Ya(b,a),b=pc(b)?J(b):b):b=a;return b};f.Ha=function(){var a=this.root?Rb(this.root):sd();return this.ha?new we(this.aa,a):a};f.P=function(){return this.meta};f.ba=function(){return this.m};f.M=function(){var a=this.v;return null!=a?a:this.v=a=mc(this)};f.w=function(a,b){return Wd(this,b)};f.Ta=function(){return new ye(this.root,this.m,this.ha,this.aa)};
f.sa=function(a,b,c){if(null==b)return this.ha&&c===this.aa?this:new xe(this.meta,this.ha?this.m:this.m+1,this.root,!0,c,null);a=new fe;b=(null==this.root?oe:this.root).ma(0,bc(b),b,c,a);return b===this.root?this:new xe(this.meta,a.K?this.m+1:this.m,b,this.ha,this.aa,null)};f.L=function(){if(0<this.m){var a=null!=this.root?this.root.Xa():null;return this.ha?W(new Yd(null,this.aa),a):a}return null};f.V=function(a,b){return new xe(b,this.m,this.root,this.ha,this.aa,this.v)};
f.X=function(a,b){if(Mc(b))return this.sa(null,G.f(b,0),G.f(b,1));a=this;for(b=O(b);;){if(null==b)return a;var c=Q(b);if(Mc(c))a=a.sa(null,G.f(c,0),G.f(c,1)),b=R(b);else throw Error("conj on a map takes map entries or seqables of map entries");}};
f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.O(null,c);case 3:return this.D(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.O(null,c)};a.l=function(a,c,d){return this.D(null,c,d)};return a}();f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.O(null,a)};f.f=function(a,b){return this.D(null,a,b)};var ee=new xe(null,0,null,!1,null,nc);
function ze(){for(var a="js md xml css sass markdown sh html sql".split(" "),b="javascript markdown xml css sass markdown shell xml sql".split(" "),c=a.length,d=0,e=Hb(ee);;)if(d<c){var g=d+1;e=e.Ja(null,a[d],b[d]);d=g}else return Jb(e)}xe.prototype[ab]=function(){return hc(this)};function ye(a,b,c,d){this.G={};this.root=a;this.count=b;this.ha=c;this.aa=d;this.o=259;this.A=56}
function Ae(a,b,c){if(a.G){if(null==b)a.aa!==c&&(a.aa=c),a.ha||(a.count+=1,a.ha=!0);else{var d=new fe;b=(null==a.root?oe:a.root).na(a.G,0,bc(b),b,c,d);b!==a.root&&(a.root=b);d.K&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}f=ye.prototype;f.ba=function(){if(this.G)return this.count;throw Error("count after persistent!");};f.O=function(a,b){return null==b?this.ha?this.aa:null:null==this.root?null:this.root.Pa(0,bc(b),b)};
f.D=function(a,b,c){return null==b?this.ha?this.aa:c:null==this.root?c:this.root.Pa(0,bc(b),b,c)};f.Va=function(a,b){a:if(this.G)if(null!=b&&(b.o&2048||y===b.zb))a=Ae(this,nb(b),ob(b));else if(Mc(b))a=Ae(this,b.c?b.c(0):b.call(null,0),b.c?b.c(1):b.call(null,1));else for(a=O(b),b=this;;){var c=Q(a);if(z(c))a=R(a),b=Ae(b,nb(c),ob(c));else{a=b;break a}}else throw Error("conj! after persistent");return a};
f.eb=function(){if(this.G){this.G=null;var a=new xe(null,this.count,this.root,this.ha,this.aa,null)}else throw Error("persistent! called twice");return a};f.Ja=function(a,b,c){return Ae(this,b,c)};f.call=function(){var a=null;a=function(a,c,d){switch(arguments.length){case 2:return this.O(null,c);case 3:return this.D(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.f=function(a,c){return this.O(null,c)};a.l=function(a,c,d){return this.D(null,c,d)};return a}();
f.apply=function(a,b){return this.call.apply(this,[this].concat(bb(b)))};f.c=function(a){return this.O(null,a)};f.f=function(a,b){return this.D(null,a,b)};var Be=function Be(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Be.F(0<c.length?new P(c.slice(0),0,null):null)};Be.F=function(a){for(var b=O(a),c=Hb(ee);;)if(b){a=R(R(b));var d=Q(b);b=Q(R(b));c=Kb(c,d,b);b=a}else return Jb(c)};Be.R=0;Be.W=function(a){return this.F(O(a))};
function Ce(a,b){this.B=a;this.ja=b;this.o=32374988;this.A=0}f=Ce.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.ja};f.ca=function(){var a=(null!=this.B?this.B.o&128||y===this.B.cb||(this.B.o?0:A(ib,this.B)):A(ib,this.B))?this.B.ca():R(this.B);return null==a?null:new Ce(a,this.ja)};f.M=function(){return jc(this)};
f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return this.B.ea(null).key};f.ia=function(){var a=(null!=this.B?this.B.o&128||y===this.B.cb||(this.B.o?0:A(ib,this.B)):A(ib,this.B))?this.B.ca():R(this.B);return null!=a?new Ce(a,this.ja):fc};f.L=function(){return this};f.V=function(a,b){return new Ce(this.B,b)};f.X=function(a,b){return W(b,this)};Ce.prototype[ab]=function(){return hc(this)};
function ae(a){return(a=O(a))?new Ce(a,null):null}function De(a,b){this.B=a;this.ja=b;this.o=32374988;this.A=0}f=De.prototype;f.toString=function(){return Tb(this)};f.equiv=function(a){return this.w(null,a)};f.indexOf=function(){var a=null;a=function(a,c){switch(arguments.length){case 1:return T(this,a,0);case 2:return T(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.c=function(a){return T(this,a,0)};a.f=function(a,c){return T(this,a,c)};return a}();
f.lastIndexOf=function(){function a(a){return V(this,a,U(this))}var b=null;b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return V(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.c=a;b.f=function(a,b){return V(this,a,b)};return b}();f.P=function(){return this.ja};f.ca=function(){var a=(null!=this.B?this.B.o&128||y===this.B.cb||(this.B.o?0:A(ib,this.B)):A(ib,this.B))?this.B.ca():R(this.B);return null==a?null:new De(a,this.ja)};f.M=function(){return jc(this)};
f.w=function(a,b){return wc(this,b)};f.da=function(a,b){return Rc(b,this)};f.$=function(a,b,c){return Tc(b,c,this)};f.ea=function(){return this.B.ea(null).K};f.ia=function(){var a=(null!=this.B?this.B.o&128||y===this.B.cb||(this.B.o?0:A(ib,this.B)):A(ib,this.B))?this.B.ca():R(this.B);return null!=a?new De(a,this.ja):fc};f.L=function(){return this};f.V=function(a,b){return new De(this.B,b)};f.X=function(a,b){return W(b,this)};De.prototype[ab]=function(){return hc(this)};
function be(a){return(a=O(a))?new De(a,null):null}function bd(a){if(null!=a&&(a.A&4096||y===a.Db))return a.name;if("string"===typeof a)return a;throw Error(["Doesn't support name: ",E.c(a)].join(""));}
function Ee(a,b,c,d,e,g,h){var k=Oa;Oa=null==Oa?null:Oa-1;try{if(null!=Oa&&0>Oa)return L(a,"#");L(a,c);if(0===Ya.c(g))O(h)&&L(a,function(){var a=Fe.c(g);return z(a)?a:"..."}());else{if(O(h)){var l=Q(h);b.l?b.l(l,a,g):b.call(null,l,a,g)}for(var m=R(h),n=Ya.c(g)-1;;)if(!m||null!=n&&0===n){O(m)&&0===n&&(L(a,d),L(a,function(){var a=Fe.c(g);return z(a)?a:"..."}()));break}else{L(a,d);var p=Q(m);c=a;h=g;b.l?b.l(p,c,h):b.call(null,p,c,h);var q=R(m);c=n-1;m=q;n=c}}return L(a,e)}finally{Oa=k}}
function Ge(a,b){b=O(b);for(var c=null,d=0,e=0;;)if(e<d){var g=c.N(null,e);L(a,g);e+=1}else if(b=O(b))c=b,Nc(c)?(b=Mb(c),d=Ob(c),c=b,g=U(b),b=d,d=g):(g=Q(c),L(a,g),b=R(c),c=null,d=0),e=0;else return null}var He={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Ie(a){return[E.c('"'),E.c(a.replace(/[\\"\b\f\n\r\t]/g,function(a){return He[a]})),E.c('"')].join("")}function Je(a,b){return(a=Qc(N.f(a,Wa)))?(a=null!=b?b.o&131072||y===b.Cb?!0:!1:!1)?null!=Ic(b):a:a}
function Ke(a,b,c){if(null==a)return L(b,"nil");Je(c,a)&&(L(b,"^"),Le(Ic(a),b,c),L(b," "));if(a.rb)return a.Kb(b);if(null!=a&&(a.o&2147483648||y===a.Z))return a.U(b,c);if(!0===a||!1===a)return L(b,[E.c(a)].join(""));if("number"===typeof a)return L(b,isNaN(a)?"##NaN":a===Number.POSITIVE_INFINITY?"##Inf":a===Number.NEGATIVE_INFINITY?"##-Inf":[E.c(a)].join(""));if(null!=a&&a.constructor===Object)return L(b,"#js "),Me(Y.f(function(b){var c=/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/;if("string"===typeof b)if(c=
c.exec(b),S.f(Q(c),b))if(1===U(c))c=Q(c);else if(Za(c))b:{var d=c.length;if(32>d)c=new td(null,d,5,ud,c,null);else for(var e=32,l=(new td(null,32,5,ud,c.slice(0,32),null)).Ta(null);;)if(e<d){var m=e+1;l=ld.f(l,c[e]);e=m}else{c=Jb(l);break b}}else c=Jb(Sc(Ib,Hb(zc),c));else c=null;else throw new TypeError("re-matches must match against a string.");return new Yd(null!=c?ad.c(b):b,a[b])},ma(a)),b,c);if(Za(a))return Ee(b,Le,"#js ["," ","]",c,a);if("string"==typeof a)return z(Va.c(c))?L(b,Ie(a)):L(b,a);
if("function"==r(a)){var d=a.name;c=z(function(){var a=null==d;return a?a:/^[\s\xa0]*$/.test(d)}())?"Function":d;return Ge(b,xc(["#object[",c,"","]"]))}if(a instanceof Date)return c=function(a,b){for(a=[E.c(a)].join("");;)if(U(a)<b)a=["0",E.c(a)].join("");else return a},Ge(b,xc(['#inst "',[E.c(a.getUTCFullYear())].join(""),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),3),"-",'00:00"']));
if(a instanceof RegExp)return Ge(b,xc(['#"',a.source,'"']));if(z(function(){var b=null==a?null:a.constructor;return null==b?null:b.fb}()))return Ge(b,xc(["#object[",a.constructor.fb.replace(/\//g,"."),"]"]));d=function(){var b=null==a?null:a.constructor;return null==b?null:b.name}();c=z(function(){var a=null==d;return a?a:/^[\s\xa0]*$/.test(d)}())?"Object":d;return null==a.constructor?Ge(b,xc(["#object[",c,"]"])):Ge(b,xc(["#object[",c," ",[E.c(a)].join(""),"]"]))}
function Le(a,b,c){var d=Ne.c(c);return z(d)?(c=Dc.l(c,Oe,Ke),d.l?d.l(a,b,c):d.call(null,a,b,c)):Ke(a,b,c)}function Pe(a,b){var c=new Ha;a:{var d=new Sb(c);Le(Q(a),d,b);a=O(R(a));for(var e=null,g=0,h=0;;)if(h<g){var k=e.N(null,h);L(d," ");Le(k,d,b);h+=1}else if(a=O(a))e=a,Nc(e)?(a=Mb(e),g=Ob(e),e=a,k=U(a),a=g,g=k):(k=Q(e),L(d," "),Le(k,d,b),a=R(e),e=null,g=0),h=0;else break a}return c}
function Qe(a,b,c,d,e){return Ee(d,function(a,b,d){var e=nb(a);c.l?c.l(e,b,d):c.call(null,e,b,d);L(b," ");a=ob(a);return c.l?c.l(a,b,d):c.call(null,a,b,d)},[E.c(a),"{"].join(""),", ","}",e,O(b))}function Me(a,b,c){var d=Le,e=(Kc(a),null),g=Cc(e,0);e=Cc(e,1);return z(g)?Qe(["#:",E.c(g)].join(""),e,d,b,c):Qe(null,a,d,b,c)}P.prototype.Z=y;P.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};cd.prototype.Z=y;cd.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};Yd.prototype.Z=y;
Yd.prototype.U=function(a,b){return Ee(a,Le,"["," ","]",b,this)};ue.prototype.Z=y;ue.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};Zd.prototype.Z=y;Zd.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};Qd.prototype.Z=y;Qd.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};$c.prototype.Z=y;$c.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};xe.prototype.Z=y;xe.prototype.U=function(a,b){return Me(this,a,b)};ve.prototype.Z=y;
ve.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};gd.prototype.Z=y;gd.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};yd.prototype.Z=y;yd.prototype.U=function(a,b){L(a,"#object [cljs.core.Atom ");Le(new Sa(null,1,[Re,this.state],null),a,b);return L(a,"]")};De.prototype.Z=y;De.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};td.prototype.Z=y;td.prototype.U=function(a,b){return Ee(a,Le,"["," ","]",b,this)};Zc.prototype.Z=y;
Zc.prototype.U=function(a){return L(a,"()")};Sa.prototype.Z=y;Sa.prototype.U=function(a,b){return Me(this,a,b)};Ce.prototype.Z=y;Ce.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};Ac.prototype.Z=y;Ac.prototype.U=function(a,b){return Ee(a,Le,"("," ",")",b,this)};function Se(){}
var Te=function Te(a){if(null!=a&&null!=a.wb)return a.wb(a);var c=Te[r(null==a?null:a)];if(null!=c)return c.c?c.c(a):c.call(null,a);c=Te._;if(null!=c)return c.c?c.c(a):c.call(null,a);throw D("IEncodeJS.-clj-\x3ejs",a);},Ue=function Ue(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return Ue.F(arguments[0],1<c.length?new P(c.slice(1),0,null):null)};
Ue.F=function(a,b){var c=null!=b&&(b.o&64||y===b.Ua)?rd(Be,b):b,d=N.l(c,Ve,bd),e=function(){return function(a){var b=g;if(null!=a?y===a.vb||(a.Lb?0:A(Se,a)):A(Se,a))a=Te(a);else if("string"===typeof a||"number"===typeof a||a instanceof X||a instanceof dc)a=b.c?b.c(a):b.call(null,a);else{a=xc([a]);b=Qa();var c;(c=null==a)||(c=O(a),c=null==c?!0:!1===c?!0:!1);a=c?"":[E.c(Pe(a,b))].join("")}return a}}(b,c,c,d),g=function(a,b,c,d){return function q(a){if(null==a)return null;if(null!=a?y===a.vb||(a.Lb?
0:A(Se,a)):A(Se,a))return Te(a);if(a instanceof X)return d.c?d.c(a):d.call(null,a);if(a instanceof dc)return[E.c(a)].join("");if(Kc(a)){var b={};a=O(a);for(var c=null,g=0,h=0;;)if(h<g){var k=c.N(null,h),l=Cc(k,0),m=Cc(k,1);k=b;l=e(l);m=q(m);k[l]=m;h+=1}else if(a=O(a))Nc(a)?(g=Mb(a),a=Ob(a),c=g,g=U(g)):(c=Q(a),g=Cc(c,0),h=Cc(c,1),c=b,g=e(g),h=q(h),c[g]=h,a=R(a),c=null,g=0),h=0;else break;return b}if(null==a?0:null!=a?a.o&8||y===a.Rb||(a.o?0:A(eb,a)):A(eb,a)){b=[];a=O(Y.f(q,a));c=null;for(h=g=0;;)if(h<
g)k=c.N(null,h),b.push(k),h+=1;else if(a=O(a))c=a,Nc(c)?(a=Mb(c),h=Ob(c),c=a,g=U(a),a=h):(a=Q(c),b.push(a),a=R(c),c=null,g=0),h=0;else break;return b}return a}}(b,c,c,d);return g(a)};Ue.R=1;Ue.W=function(a){var b=Q(a);a=R(a);return this.F(b,a)};if("undefined"===typeof We)var We=null;"undefined"!==typeof console&&(Ma=function(){return console.log.apply(console,ka(arguments))},Na=function(){return console.error.apply(console,ka(arguments))});
if("undefined"===typeof Xe)var Xe=function(){throw Error("cljs.core/*eval* not bound");};var zd=new X(null,"text-content","text-content",-2126072735),Wa=new X(null,"meta","meta",1499536964),Xa=new X(null,"dup","dup",556298533),vd=new dc(null,"meta3454","meta3454",1328929513,null),Ye=new X(null,"value","value",305978217),Ze=new X(null,"mode","mode",654403691),Re=new X(null,"val","val",128701612),Oe=new X(null,"fallback-impl","fallback-impl",-1501286995),Ve=new X(null,"keyword-fn","keyword-fn",-64566675),Ta=new X(null,"flush-on-newline","flush-on-newline",-151457939),Va=new X(null,"readably",
"readably",1129599760),Fe=new X(null,"more-marker","more-marker",-14717935),Ya=new X(null,"print-length","print-length",1931866356),Ad=new X(null,"editor","editor",-989377770),Ne=new X(null,"alt-impl","alt-impl",670969595),$e=new X(null,"lineNumbers","lineNumbers",1374890941);var af;a:{var bf=ca.navigator;if(bf){var cf=bf.userAgent;if(cf){af=cf;break a}}af=""}function Z(a){return-1!=af.indexOf(a)};function ef(){return Z("iPhone")&&!Z("iPod")&&!Z("iPad")};var ff=Z("Opera"),gf=Z("Trident")||Z("MSIE"),hf=Z("Edge"),jf=Z("Gecko")&&!(-1!=af.toLowerCase().indexOf("webkit")&&!Z("Edge"))&&!(Z("Trident")||Z("MSIE"))&&!Z("Edge"),kf=-1!=af.toLowerCase().indexOf("webkit")&&!Z("Edge");kf&&Z("Mobile");Z("Macintosh");Z("Windows");Z("Linux")||Z("CrOS");var lf=ca.navigator||null;lf&&(lf.appVersion||"").indexOf("X11");Z("Android");ef();Z("iPad");Z("iPod");ef()||Z("iPad")||Z("iPod");function mf(){var a=ca.document;return a?a.documentMode:void 0}var nf;
a:{var of="",pf=function(){var a=af;if(jf)return/rv:([^\);]+)(\)|;)/.exec(a);if(hf)return/Edge\/([\d\.]+)/.exec(a);if(gf)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(kf)return/WebKit\/(\S+)/.exec(a);if(ff)return/(?:Version)[ \/]?(\S+)/.exec(a)}();pf&&(of=pf?pf[1]:"");if(gf){var qf=mf();if(null!=qf&&qf>parseFloat(of)){nf=String(qf);break a}}nf=of}var Ka={};
function rf(a){Ja(a,function(){for(var b=0,c=ha(String(nf)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=ja(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||ja(0==h[2].length,0==k[2].length)||ja(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})}var sf;var tf=ca.document;
sf=tf&&gf?mf()||("CSS1Compat"==tf.compatMode?parseInt(nf,10):5):void 0;var uf;if(!(uf=!jf&&!gf)){var vf;if(vf=gf)vf=9<=Number(sf);uf=vf}uf||jf&&rf("1.9.1");gf&&rf("9");function wf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))}};ze();var xf=new yd,yf=document.querySelector("#modal"),zf=function(a){var b=0;return function(c){ca.clearTimeout(b);var d=arguments;b=ca.setTimeout(function(){a.apply(void 0,d)},1E3)}}(function(){return window.java.onautosave()});function Af(){var a=J(xf);a=null==a?null:Ad.c(a);return null==a?null:a.getValue()}function Bf(){Cd.C(xf,Dc,zd,Af());return window.java.onchange()}var Cf=window;Cf.undo=function(){var a=J(xf);a=null==a?null:Ad.c(a);null!=a&&a.undo();return window.java.onautosave()};
Cf.redo=function(){var a=J(xf);a=null==a?null:Ad.c(a);null!=a&&a.redo();return window.java.onautosave()};Cf.canUndo=function(){var a=J(xf);a=null==a?null:Ad.c(a);a=null==a?null:a.historySize();a=null==a?null:a.undo;return null==a?null:0<a};Cf.canRedo=function(){var a=J(xf);a=null==a?null:Ad.c(a);a=null==a?null:a.historySize();a=null==a?null:a.redo;return null==a?null:0<a};Cf.setTextContent=function(a){return wf(document.querySelector("#content"),a)};Cf.getTextContent=Af;Cf.getSavedText=function(){return zd.c(J(xf))};
Cf.getSelectedText=function(){return null};Cf.markClean=Bf;Cf.isClean=function(){var a=J(xf);a=null==a?null:zd.c(a);return null==a?null:S.f(a,Af())};Cf.changeTheme=function(a){var b=J(xf);b=null==b?null:Ad.c(b);return null==b?null:b.setOption("theme",z(a)?"lesser-dark":"default")};Cf.setTextSize=function(a){return document.querySelector(".CodeMirror").style.fontSize=[E.c(a),"px"].join("")};Cf.openModal=function(){return yf.style.display="block"};
Cf.init=function(a){var b=document.querySelector("#content");Cd.C(xf,Dd,Ad,function(b){return function(c){z(c)&&document.body.removeChild(c.getWrapperElement());c=window.CodeMirror(document.body,Ue(new Sa(null,3,[Ye,b.textContent,$e,!0,Ze,ze().c?ze().c(a):ze().call(null,a)],null)));c.on("change",function(){return function(){zf.H?zf.H():zf.call(null);return window.java.onchange()}}(c,b));c.on("beforeChange",function(){return function(a,b){return S.f(yf.style.display,"block")?b.cancel():null}}(c,b));
c.setOption("extraKeys",Ue(new Sa(null,4,["Ctrl-Z",!1,"Cmd-Z",!1,"Shift-Ctrl-Z",!1,"Shift-Cmd-Z",!1],null)));return c}}(b));wf(b,"");return Bf()};window.onload=function(){window.status="MY-MAGIC-VALUE";window.status="";window.java.onload();return window.java.onchange()};
})();
