
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([5],{223:function(e,t,a){e.exports=a(224)},224:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(28),r=n(l),u=a(34),s=n(u),o=a(115),c=n(o),d=a(1),f=n(d),i=a(109),m=n(i),h=a(74),p=n(h),w=a(117),x=n(w),v=function(e){var t=e.show;return f.default.createElement("li",{key:t.id},f.default.createElement(m.default,{as:"/p/"+t.id,href:"/post?id="+t.id},f.default.createElement("a",null,t.name)))},E=function(e){return f.default.createElement(p.default,null,f.default.createElement("h1",{className:"jsx-2477714983"},"Batman TV Shows"),f.default.createElement("ul",{className:"jsx-2477714983"},e.shows.map(function(e){var t=e.show;return f.default.createElement(v,{key:t.id,show:t})})),f.default.createElement(c.default,{styleId:"2477714983",css:['h1,a{font-family:"Arial";}',"ul{padding:0;}","li{list-style:none;margin:5px 0;}","a{text-decoration:none;color:blue;}","a:hover{opacity:0.6;}"]}))};E.getInitialProps=(0,s.default)(r.default.mark(function e(){var t,a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.default)("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,console.log("Show data fetched. Count: "+a.length),e.abrupt("return",{shows:a});case 8:case"end":return e.stop()}},e,this)})),t.default=E}},[223]);
            return { page: comp.default }
          })
        