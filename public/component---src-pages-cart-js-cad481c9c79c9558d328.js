(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{BP8U:function(e,t,r){var n=r("XKFU"),a=r("PKUr");n(n.S+n.F*(Number.parseInt!=a),"Number",{parseInt:a})},PKUr:function(e,t,r){var n=r("dyZX").parseInt,a=r("qncB").trim,c=r("/e88"),l=/^[-+]?0[xX]/;e.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(e,t){var r=a(String(e),3);return n(r,t>>>0||(l.test(r)?16:10))}:n},d5pJ:function(e,t,r){"use strict";r.r(t);r("91GP"),r("xfY5"),r("BP8U"),r("pIFo"),r("f3/d");var n=r("q1tI"),a=r("qKvR"),c=r("Bl7J"),l=r("vrFN"),o=r("k5+f");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.id,r=e.name,n=e.price,c=e.qty,l=e.removeItem,i=n.replace("$","");return Object(a.a)("li",{css:p},Object(a.a)("h4",null,r),Object(a.a)("div",null),Object(a.a)("span",null,Object(a.a)(o.a,{price:i}))," ","x ",Object(a.a)("span",null,c)," ="," ",Object(a.a)("span",null,Object(a.a)(o.a,{price:i*c})),Object(a.a)("label",{className:"removeItem",href:"",onClick:function(){return l(t)}},"Remove"))},s={name:"qbubgm",styles:"margin-left:0;"},p={name:"ek7787",styles:"margin-bottom:30px;list-style:none;font-size:0.9rem;.removeItem{margin-left:2rem;color:grey;text-decoration:underline;cursor:pointer;}h4{margin-bottom:0.5rem;font-size:20px;color:hsl(270,50%,40%);}"};t.default=function(){var e=Object(n.useState)([]),t=e[0],r=e[1];function p(e){var n=t.filter((function(t){return t.id!=e}));localStorage.setItem("cart",JSON.stringify(n)),r(n)}Object(n.useEffect)((function(){var e=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):null;null!=e&&r(e)}),[]);var b=0;return Object(a.a)(c.a,null,Object(a.a)(l.a,{title:"Cart"}),Object(a.a)("h1",null,"Cart"),Object(a.a)("ul",{css:s},t.map((function(e){return b+=Number.parseInt(e.price.replace("$",""))*e.qty,Object(a.a)(u,i({key:e.id},e,{removeItem:p}))}))),Object(a.a)("hr",null),Object(a.a)("p",null,"Total: ",Object(a.a)(o.a,{price:b})))}}}]);
//# sourceMappingURL=component---src-pages-cart-js-cad481c9c79c9558d328.js.map