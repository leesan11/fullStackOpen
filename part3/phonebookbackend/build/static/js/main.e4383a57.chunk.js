(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=t(2),i=function(e){var n=e.setSearch;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:function(e){return n(e.target.value)}}))},m=t(15),s=t(4),l=t(3),d=t.n(l),f=function(){return d.a.get("/persons").then(function(e){return e.data})},b=function(e){return d.a.post("/persons",e).then(function(e){return e.data})},h=function(e){return d.a.delete("/persons"+"/".concat(e)).then(function(e){return e.data})},p=function(e,n){return d.a.put("/persons"+"/".concat(e),n).then(function(e){return e.data})},w=function(e){var n=e.persons,t=e.newName,a=e.newNumber,u=e.setPersons,c=e.setNewName,o=e.setNumber,i=e.setMessage;return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),-1===n.map(function(e){return e.name}).indexOf(t))b({name:t,number:a}).then(function(e){u([].concat(Object(s.a)(n),[e])),i("Added ".concat(t)),setTimeout(function(){return i("")},5e3)});else if(window.confirm("".concat(t," is already added to the phonebook, replace the old number with new one?"))){var r="";n.forEach(function(e){r=e.name===t?e.id:r}),p(r,{id:r,name:t,number:a}).then(function(e){u([].concat(Object(s.a)(n.filter(function(e){return e.id!==r})),[Object(m.a)({},e,{name:t,number:a})])),i("Changed number of ".concat(t)),setTimeout(function(){return i("")},5e3)}).catch(function(e){i("Information of ".concat(t," has already been removed from the server")),setTimeout(function(){return i("")},5e3)})}}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.persons,t=e.newSearch,a=e.setPersons;return n.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)}).map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("span",null,"name: ",e.name," number: ",e.number),r.a.createElement("button",{"data-name":e.name,"data-id":e.id,onClick:function(e){return function(e){var t=window.confirm(e.target.dataset.name),r=e.target.dataset.id;t&&h(r).then(function(e){a(n.filter(function(e){return e.id!==r}))})}(e)}},"delete"))})},v=function(e){var n=e.newMessage;return r.a.createElement("div",{style:{border:"2px solid red",color:"red",textAlign:"center",padding:"10px"}},r.a.createElement("h3",null,n))},g=function(){var e=Object(a.useState)([{name:"Arto Hellas",number:"040-123456"},{name:"Ada Lovelace",number:"39-44-5323523"},{name:"Dan Abramov",number:"12-43-234345"},{name:"Mary Poppendieck",number:"39-23-6423122"}]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),s=m[0],l=m[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),h=b[0],p=b[1],g=Object(a.useState)(""),O=Object(o.a)(g,2),j=O[0],N=O[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),y=k[0],x=k[1];return Object(a.useEffect)(function(){f().then(function(e){u(e)})},[t]),r.a.createElement("div",null,y?r.a.createElement(v,{newMessage:y}):null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{setSearch:N}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(w,{persons:t,newName:s,newNumber:h,setPersons:u,setNewName:l,setNumber:p,setMessage:x}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:t,newSearch:j,setPersons:u}))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e4383a57.chunk.js.map