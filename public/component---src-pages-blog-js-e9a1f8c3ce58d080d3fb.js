(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3dmn":function(e,a,t){e.exports={container:"layout-module--container--1bx4w",content:"layout-module--content--3ZRcJ",layoutJumbotron:"layout-module--layoutJumbotron--3QNvX"}},"6xyR":function(e,a,t){"use strict";var r=t("k1TG"),n=t("8o2o"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=t("YdCC"),m=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},u=t("Wzyw"),b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,d=e.as,m=void 0===d?"img":d,u=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(t,"card-img");return s.a.createElement(m,Object(r.a)({ref:a,className:l()(o?b+"-"+o:b,c)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=m("h5"),y=m("h6"),E=Object(d.a)("card-body"),h=Object(d.a)("card-title",{Component:v}),p=Object(d.a)("card-subtitle",{Component:y}),x=Object(d.a)("card-link",{Component:"a"}),j=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),O=Object(d.a)("card-footer"),g=Object(d.a)("card-img-overlay"),w=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,m=e.text,b=e.border,f=e.body,v=e.children,y=e.as,h=void 0===y?"div":y,p=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(t,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return s.a.createElement(u.a.Provider,{value:j},s.a.createElement(h,Object(r.a)({ref:a},p,{className:l()(c,x,d&&"bg-"+d,m&&"text-"+m,b&&"border-"+b)}),f?s.a.createElement(E,null,v):v))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=f,w.Title=h,w.Subtitle=p,w.Body=E,w.Link=x,w.Text=j,w.Header=N,w.Footer=O,w.ImgOverlay=g;a.a=w},JLE3:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),c=t("NFDa"),l=t("tPvr"),o=t("xXt2"),s=t("3dmn"),i=t.n(s),d=t("qhky");a.a=function(e){return Object(r.useEffect)((function(){document.title=e.name+" · LakersCreative"})),n.a.createElement("div",{className:i.a.container},n.a.createElement(d.a,null,n.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",integrity:"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==",crossorigin:"anonymous"})),n.a.createElement(o.a,{className:i.a.layoutJumbotron},n.a.createElement(l.a,null),n.a.createElement("h1",{className:"text-center pt-5 text-white"},e.name)),n.a.createElement("div",{className:i.a.content},e.children),n.a.createElement(c.a,null))}},uG1v:function(e,a,t){"use strict";var r=t("YdCC");a.a=Object(r.a)("card-deck")},vx99:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("JLE3"),l=t("Wbzz"),o=t("uG1v"),s=t("6xyR");a.default=function(){var e=Object(l.useStaticQuery)("3367038478");return n.a.createElement(c.a,{name:"Blog"},e.allWordpressPost.nodes.length>=1?n.a.createElement(o.a,null,e.allWordpressPost.nodes.map((function(e){return n.a.createElement(s.a,{key:e.id},n.a.createElement(l.Link,{to:e.slug,style:{textDecoration:"none",color:"#000000"}},n.a.createElement(s.a.Img,{variant:"left",src:e.featured_media.source_url,height:"150",width:"100%"}),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,e.title),n.a.createElement(s.a.Text,null,n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.excerpt}}),n.a.createElement("small",null,"Written by ",e.author.name," on ",e.date)))))}))):"")}}}]);
//# sourceMappingURL=component---src-pages-blog-js-e9a1f8c3ce58d080d3fb.js.map