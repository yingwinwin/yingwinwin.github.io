(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{166:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),m=t(178),i=t(186),c=t(173);var s=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(c.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(179);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,c=Object(l.default)().siteConfig.title,u=a.blogDescription,g=a.blogTitle,d="/"===a.permalink?c:g;return r.a.createElement(m.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(s,{metadata:a})))))}},179:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(170),m=t(173),i=t(55),c=t.n(i);function s(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(m.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},186:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(170),m=t(169),i=t(22),c=t(173),s=t(189),o=t(174),u=t(56),g=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,E,v=e.children,p=e.frontMatter,b=e.metadata,N=e.truncated,_=e.isBlogPostPage,h=void 0!==_&&_,f=b.date,k=b.permalink,w=b.tags,y=b.readingTime,I=p.author,M=p.title,T=p.image,L=p.keywords,O=p.author_url||p.authorURL,P=p.author_title||p.authorTitle,j=p.author_image_url||p.authorImageURL,J=Object(o.a)(T,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,L&&L.length&&r.a.createElement("meta",{name:"keywords",content:L.join(",")}),T&&r.a.createElement("meta",{property:"og:image",content:J}),T&&r.a.createElement("meta",{name:"twitter:image",content:J}),T&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],u=d[parseInt(t[1],10)-1],E=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},h?M:r.a.createElement(c.a,{to:k},M)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:g.a.blogPostDate},u," ",E,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},j&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:j,alt:I})),r.a.createElement("div",{className:"avatar__intro"},I&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},I)),r.a.createElement("small",{className:"avatar__subtitle"},P)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:s.a},v)),(w.length>0||N)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),N&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:b.permalink,"aria-label":"Read more about "+M},r.a.createElement("strong",null,"Read More"))))))}}}]);