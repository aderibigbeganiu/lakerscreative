(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+7A0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("h4O3");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("NBI0");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r("uG3I");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))},"6vc4":function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r("j8BX")),i=n(r("xK7m")),a=n(r("0jh0")),c=n(r("q1tI")),u=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,i=void 0===o?[]:o,a=e.datePublished,s=e.dateCreated,l=e.dateModified,f=void 0===l?a:l,p=e.authorType,b=void 0===p?"Person":p,y=e.authorName,O=e.description,v=e.publisherName,g=e.publisherLogo,j=e.body,m=e.overrides,h=e.keywords,P=e.speakable,w=e.defer,_=void 0!==w&&w,k=d({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:i,datePublished:a,dateModified:f,dateCreated:s,author:{"@type":b,name:y},publisher:{"@type":"Organization",name:v,logo:{"@type":"ImageObject",url:g}},description:O,articleBody:j,speakable:P?P.map((function(e){return d({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(h)?h.join(", "):h},m);return c.default.createElement(u.JsonLd,{defer:_,json:k})};t.ArticleJsonLd=l;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,a=e.publisherLogo,u=void 0===a?"":a,s=e.publisherName,f=void 0===s?"":s,p=(0,i.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(l,(0,o.default)({defer:n,publisherName:f,publisherLogo:u},p,{overrides:d(d({},t),{},{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,a=void 0!==n&&n,u=(0,i.default)(e,["overrides","section","defer"]);return c.default.createElement(l,(0,o.default)({defer:a},u,{overrides:d(d({articleSection:r},t),{},{"@type":"NewsArticle"})}))}},Bcl6:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r("q1tI")),i=r("rid2");t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(i.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},HBJX:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r("0jh0")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},NBI0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("6vc4");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("uTMJ");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r("lAea");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=r("jA7+");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var c=r("r+KM");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var u=r("SKRr");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var s=r("HBJX");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var d=r("Bcl6");Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var l=r("yBkl");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var f=r("ujHY");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=r("ye2j");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var b=r("krMq");Object.keys(b).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}})}));var y=r("clPB");Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})}))},SKRr:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r("0jh0")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,u=e.providerName,s=e.providerUrl,d=e.overrides,l=void 0===d?{}:d,f=e.defer,p=void 0!==f&&f,b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:u?{"@type":"Organization",name:u,sameAs:s}:void 0},l);return i.default.createElement(a.JsonLd,{defer:p,json:b})}},alxG:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r("q1tI")),i=r("2+in");t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,a=e.description,c=e.facebook,u=e.language,s=e.languageAlternates,d=e.mobileAlternate,l=e.nofollow,f=e.noindex,p=e.openGraph,b=e.title,y=e.titleTemplate,O=e.twitter;return o.default.createElement(i.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:a,facebook:c,language:u,languageAlternates:s,mobileAlternate:d,nofollow:l,noindex:f,openGraph:p,title:b,titleTemplate:y,twitter:O})}},clPB:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r("0jh0")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},h4O3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("2+in");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("alxG");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},"jA7+":function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r("0jh0")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},krMq:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r("q1tI")),i=r("rid2");t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,a=e.sameAs,c=void 0===a?[]:a,u=e.defer,s=void 0!==u&&u,d='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(i.Helmet,{defer:s},o.default.createElement("script",{type:"application/ld+json"},d))}},lAea:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r("xK7m")),i=n(r("0jh0")),a=n(r("q1tI")),c=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,i=e.workExample,u=void 0===i?[]:i,d=e.id,l=e.sameAs,f=e.overrides,p=void 0===f?{}:f,b=e.defer,y=void 0!==b&&b,O=s({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":d,sameAs:l,author:s({"@type":"Person"},r),workExample:u.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,i=e.author,a=(0,o.default)(e,["bookFormat","potentialAction","author"]);return s(s({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},a),{},{person:s({"@type":"Person"},i),potentialAction:s({"@type":"ReadAction"},n)})}))},p);return a.default.createElement(c.JsonLd,{defer:y,json:O})}},"r+KM":function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r("q1tI")),i=r("rid2"),a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,u=void 0!==c&&c,s='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(a(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(a(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(i.Helmet,{defer:u},o.default.createElement("script",{type:"application/ld+json"},s))}},uG3I:function(e,t,r){},uTMJ:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r("0jh0")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,s=e.datePublished,d=e.dateModified,l=void 0===d?null:d,f=e.authorName,p=e.authorType,b=void 0===p?"Person":p,y=e.keywords,O=e.description,v=e.publisherName,g=e.publisherLogo,j=e.posts,m=void 0===j?[]:j,h=e.issn,P=e.overrides,w=void 0===P?{}:P,_=e.defer,k=void 0!==_&&_,E=u({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:y,issn:h,image:c,datePublished:s,dateModified:null!=l?l:s,description:O,author:f?{"@type":b,name:f}:void 0,publisher:v?{"@type":"Organization",name:v,logo:g?{"@type":"ImageObject",url:g}:void 0}:void 0,blogPost:m.map((function(e){return u({"@type":"BlogPosting"},e)}))},w);return i.default.createElement(a.JsonLd,{defer:k,json:E})}},ujHY:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r("0jh0")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,u=void 0===n?{}:n,s=e.defer,d=void 0!==s&&s,l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},u);return i.default.createElement(a.JsonLd,{defer:d,json:l})}},yBkl:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r("0jh0")),i=n(r("xK7m")),a=n(r("q1tI")),c=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},l=function(e){var t;return"http://schema.org/".concat(null!==(t=d[e])&&void 0!==t?t:e)},f=function(e){return e?Array.isArray(e)?e.map(l):l(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,i.default)(e,["dayOfWeek"]);return s({"@type":"OpeningHoursSpecification",dayOfWeek:f(t)},r)})):s(s({"@type":"OpeningHoursSpecification"},e),{},{dayOfWeek:f(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,i=e.url,u=e.telephone,d=e.address,l=e.geo,f=e.images,b=e.openingHours,y=e.rating,O=e.priceRange,v=e.overrides,g=void 0===v?{}:v,j=e.defer,m=void 0!==j&&j,h=s({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:i,telephone:u,priceRange:O,image:f,geo:s({"@type":"GeoCoordinates"},l),address:s({"@type":"PostalAddress"},d),aggregateRating:y?s({"@type":"AggregateRating"},y):void 0,openingHoursSpecification:p(b)},g);return a.default.createElement(c.JsonLd,{defer:m,json:h})}},ye2j:function(e,t,r){"use strict";var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r("xK7m")),i=n(r("0jh0")),a=n(r("q1tI")),c=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},l={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,i=e.name,u=e.productName,f=e.images,p=void 0===f?[]:f,b=e.description,y=e.sku,O=e.gtin12,v=e.gtin,g=e.gtin8,j=e.gtin13,m=e.gtin14,h=e.mpn,P=e.brand,w=e.reviews,_=void 0===w?[]:w,k=e.aggregateRating,E=e.offers,S=e.offersType,L=void 0===S?"Offer":S,J=e.overrides,M=void 0===J?{}:J,D=e.defer,A=void 0!==D&&D,B=s({"@context":"https://schema.org","@type":"Product",name:null!=i?i:u,image:p,sku:y,gtin:v,gtin8:g,gtin12:O,gtin13:j,gtin14:m,mpn:h,brand:P?{"@type":"Brand",name:P}:void 0,description:b,review:_.map((function(e){var t=e.reviewRating;return s(s({"@type":"Review"},(0,o.default)(e,["reviewRating"])),{},{reviewRating:s({"@type":"Rating"},t)})})),aggregateRating:k?s({"@type":"AggregateRating"},k):void 0,offers:E?s(s({"@type":L},E),{},{availability:(n=E.availability,n?d[n]:void 0),itemCondition:(r=E.itemCondition,r?l[r]:void 0),seller:E.seller?{"@type":null!==(t=E.seller.type)&&void 0!==t?t:"Organization",name:E.seller.name}:void 0}):void 0},M);return a.default.createElement(c.JsonLd,{defer:A,json:B})}}}]);
//# sourceMappingURL=f852f27f345b6562f5df614888c0705dbfbf808f-c7677d6bf3de155713c1.js.map