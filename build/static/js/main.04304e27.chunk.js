(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),a=t(3),o=t(2),u=t(4),i=t.n(u),d="/api/persons",l={getAll:function(){return i.a.get(d).then((function(e){return e.data}))},add:function(e){return i.a.post(d,e).then((function(e){return e.data}))},remove:function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e}))},update:function(e,n){return i.a.put("".concat(d,"/").concat(e),n).then((function(e){return e}))}},s=t(0),f=function(e,n,t){e([n,t]),setTimeout((function(){e(null)}),4e3)},b=function(e){var n=e.foundPersons,t=e.removePerson;return Object(s.jsx)("div",{children:n.map((function(e){return Object(s.jsxs)("div",{children:[" ",e.name," ",e.number," ",Object(s.jsx)("button",{onClick:function(){return t(e.id)},children:" delete "})]},e.id)}))})},j=function(e){var n=e.name,t=e.value,r=e.changeHandler;return Object(s.jsxs)("div",{children:[n,": ",Object(s.jsx)("input",{value:t,onChange:r})]})},h={color:"green",backround:"lightgrey",borderStyle:"solid",padding:10,fontStyle:"cursive",fontSize:20},m={color:"red",backround:"lightgrey",borderStyle:"solid",padding:10,fontStyle:"bold",fontSize:20},v=function(e){return null===e.message?null:e.message[1]?Object(s.jsx)("div",{style:m,children:e.message[0]}):Object(s.jsx)("div",{style:h,children:e.message[0]})},O=function(e,n){return n.filter((function(n){return n.name.match(e)}))},g=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),u=Object(a.a)(c,2),i=u[0],d=u[1],h=Object(o.useState)(""),m=Object(a.a)(h,2),g=m[0],p=m[1],x=Object(o.useState)(""),S=Object(a.a)(x,2),y=S[0],w=S[1],k=Object(o.useState)(t),P=Object(a.a)(k,2),H=P[0],A=P[1],D=Object(o.useState)(null),z=Object(a.a)(D,2),C=z[0],E=z[1],I=function(e){return d(e.target.value)},J=function(e){return p(e.target.value)};Object(o.useEffect)((function(){l.getAll().then((function(e){r(e)}))}),[]);var B=function(e){if(e.preventDefault(),t.find((function(e){return e.name===i})))N();else{var n={name:i,number:g};l.add(n).then((function(e){r(t.concat(e)),A(O(y,t.concat(e))),f(E,"Added ".concat(n.name),!1)})).catch((function(e){f(E,e.response.data.error,!0)})),d(""),p("")}},N=function(){if(window.confirm("".concat(i," is already added to phonebook, replace the old number with new one?"))){var e={name:i,number:g};l.update(t.find((function(e){return i===e.name})).id,e).then((function(n){var c=t.map((function(e){return e.name===n.data.name?n.data:e}));r(c),A(O(y,c)),f(E,"Updated number of ".concat(e.name),!1)})),d(""),p("")}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(v,{message:C}),Object(s.jsx)(j,{name:"filter shown with",value:y,changeHandler:function(e){w(e.target.value),A(O(e.target.value,t))}}),Object(s.jsx)("h2",{children:"add a new"}),Object(s.jsxs)("form",{onSubmit:B,children:[Object(s.jsx)(j,{name:"name",value:i,changeHandler:I}),Object(s.jsx)(j,{name:"number",value:g,changeHandler:J}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(b,{foundPersons:H,removePerson:function(e){var n=H.find((function(n){return n.id===e})).name;window.confirm("Delete ".concat(n))&&(l.remove(e).then((function(e){f(E,"Deleted ".concat(n),!1)})).catch((function(e){f(E,"Information of  ".concat(n," has already been removed from server"),!0)})),r(t.filter((function(n){return n.id!==e}))),A(H.filter((function(n){return n.id!==e}))))}})]})};c.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.04304e27.chunk.js.map