(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(40),r=n(7),o=n(41),u=n.n(o);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null)," Keeper"," "))};var m=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("em",null," Made by Suneel. Copyright \u24d2 ",(new Date).getFullYear()," ")))},f=n(42),d=n.n(f),s=n(82);var E=function(e){var t=Object(a.useState)(e.strike),n=Object(r.a)(t,2),c=n[0],o=n[1];return l.a.createElement("div",{className:"note"},l.a.createElement("h1",{onClick:function(){fetch("/strike/"+e.id,{method:"PUT"}).then(function(){return o(!c)})},style:{textDecoration:c?"line-through":null}},e.title),l.a.createElement("p",null,e.content),l.a.createElement(s.a,{onClick:function(){e.onDelete(e.id)}},l.a.createElement(d.a,null)))},h=n(5),p=n(43),b=n(44),v=n.n(b),j=n(83);var O=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(r.a)(t,2),c=n[0],o=n[1];function u(e){var t=e.target,n=t.name,a=t.value;o(function(e){return Object(p.a)({},e,Object(h.a)({},n,a))})}var i=Object(a.useState)(!1),m=Object(r.a)(i,2),f=m[0],d=m[1];return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},l.a.createElement("input",{style:{display:f?"":"none"},name:"title",onChange:u,value:c.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){d(!0)},onChange:u,value:c.content,placeholder:"Take a note...",rows:f?"3":"1"}),l.a.createElement(j.a,{in:f},l.a.createElement(s.a,{onClick:function(t){e.onAdd(c),o({title:"",content:""}),t.preventDefault()}},l.a.createElement(v.a,null)," "))))};var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),f=u[0],d=u[1];function s(e){fetch("/delete/"+e,{method:"DELETE"}).then(function(){return d(!f)})}return Object(a.useEffect)(function(){fetch("/all").then(function(e){return e.json()}).then(function(e){c(e.notes)})},[f]),l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(O,{onAdd:function(e){fetch("/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title,content:e.content,strike:!1})}).then(function(){return d(!f)})}}),n.map(function(e){return l.a.createElement(E,{key:e.id,id:e.id,title:e.title,content:e.content,strike:e.strike,onDelete:s})}),l.a.createElement(m,null))};Object(c.createRoot)(document.getElementById("root")).render(l.a.createElement(k,null))}},[[50,2,1]]]);
//# sourceMappingURL=main.07d61865.chunk.js.map