(this["webpackJsonpstore-soares-nicole"]=this["webpackJsonpstore-soares-nicole"]||[]).push([[0],{25:function(e,t,s){},39:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(14),r=s.n(a),o=(s(25),s(4)),i=s(1),l=Object(n.createContext)();function j(e){var t=e.children,s=Object(n.useState)([]),c=Object(o.a)(s,2),a=c[0],r=c[1],j=Object(n.useState)(1),u=Object(o.a)(j,2),d=u[0],b=u[1],O=Object(n.useState)([]),h=Object(o.a)(O,2),p=h[0],x=h[1],m=Object(n.useState)([]),g=Object(o.a)(m,2),v=g[0],f=g[1],N=Object(n.useState)(!1),C=Object(o.a)(N,2),y=C[0],w=C[1],I=Object(n.useState)(""),P=Object(o.a)(I,2),J=P[0],M=P[1],k=Object(n.useState)(""),D=Object(o.a)(k,2),S=D[0],E=D[1],U=Object(n.useState)(""),A=Object(o.a)(U,2),T=A[0],R=A[1],V=Object(n.useState)(""),F=Object(o.a)(V,2),L=F[0],Q=F[1],W=Object(n.useState)(""),z=Object(o.a)(W,2),H=z[0],G=z[1],X=Object(n.useState)(!1),Y=Object(o.a)(X,2),Z=Y[0],q=Y[1],B=Object(n.useState)([]),K=Object(o.a)(B,2),$=K[0],_=K[1];return Object(i.jsx)(l.Provider,{value:{productos:a,setProductos:r,currentPage:d,setCurrentPage:b,precioAlto:p,setPrecioAlto:x,productosTotales:v,setProductosTotales:f,registrar:y,setRegistrar:w,username:J,setUsername:M,password:S,setPassword:E,email:T,setEmail:R,usernameRegistrar:L,setUsernameRegistrar:Q,passwordRegistrar:H,setPasswordRegistrar:G,loggedIn:Z,setLoggedIn:q,user:$,setUser:_},children:t})}var u=s.p+"static/media/aerolab-logo.40b78ac9.svg",d=(s(39),s(12));function b(){var e=Object(n.useContext)(l),t=e.user,s=e.loggedIn;return Object(i.jsx)("header",{children:Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{className:"nav-bar",children:[Object(i.jsx)(d.b,{to:"/tienda-electronica",children:Object(i.jsx)("div",{className:"contenedor-logo",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("img",{src:u,alt:"logo"})})})}),Object(i.jsxs)("div",{className:"contenedor-sesion-moneda",children:[Object(i.jsx)("div",{className:"contenedor-sesion",children:Object(i.jsx)(d.b,{to:"/iniciarsesion",children:Object(i.jsx)("li",{className:"nav-item-sesion",children:s?t.name:"iniciar sesion"})})}),Object(i.jsx)("div",{className:"contenedor-moneda",children:Object(i.jsxs)(d.b,{to:"/monedas",children:[Object(i.jsx)("div",{className:"numero",children:Object(i.jsxs)("li",{className:"nav-item-monedas",children:[" ",s?t.points:"0 monedas"]})}),Object(i.jsx)("div",{className:"moneda",children:Object(i.jsx)("div",{className:"circulo"})})]})})]})]})})})}var O=s(3);s(45);function h(){var e=Object(n.useContext)(l),t=e.productos,s=e.setProductos,c=Object(n.useContext)(l).currentPage,a=Object(n.useContext)(l).productosTotales;return Object(i.jsxs)("div",{className:"contenedor-principal-filtrado",children:[Object(i.jsx)("div",{className:"productos",children:Object(i.jsxs)("span",{children:[" ",Math.min(16*c,t.length)," de"," ",t.length," productos"]})}),Object(i.jsxs)("div",{className:"contenedor-filtros",children:[Object(i.jsx)("span",{className:"sort",children:"Sort by:"}),Object(i.jsx)("button",{className:"recent",onClick:function(){var e=a.filter((function(e){return"Phones"===e.category||"Audio"===e.category}));return s(e)},children:"Most recent"}),Object(i.jsx)("button",{className:"priceLow",onClick:function(){var e=a.filter((function(e){return e.cost<999}));return s(e)},children:"Lowest price"}),Object(i.jsx)("button",{className:"priceHig",onClick:function(){var e=a.filter((function(e){return e.cost>1e3}));return s(e)},children:"Highest price"})]}),Object(i.jsx)("br",{})]})}var p=s(13),x=s.n(p),m=s(15),g=(s(47),s(68)),v=s(19),f=(s(48),s.p+"static/media/buy-blue.13783e2a.svg");function N(e){var t=Object(n.useContext)(l),s=t.user,c=t.setUser,a=t.loggedIn;return Object(i.jsx)("div",{className:"contenedor-principal",children:Object(i.jsxs)("div",{className:"producto",children:[Object(i.jsx)("div",{className:"imagen",children:Object(i.jsx)("img",{src:e.imagen,width:"100%",alt:"producto"})}),Object(i.jsxs)("div",{className:"descripcion",children:[Object(i.jsx)("h4",{children:e.categoria}),Object(i.jsx)("h3",{children:e.nombre})]}),Object(i.jsxs)("div",{className:"transparente",children:[Object(i.jsxs)("div",{className:"precio-moneda",children:[Object(i.jsx)("h3",{className:"precio",children:e.precio}),Object(i.jsx)("div",{className:"circulo-precio"})]}),Object(i.jsx)("div",{children:a?s.points===e.precio||s.points>e.precio?Object(i.jsx)("button",{className:"boton-comprar",onClick:function(){s.points>=e.precio&&c(Object(v.a)(Object(v.a)({},s),{},{points:s.points-e.precio}))},children:"Redeem Now"}):Object(i.jsxs)("p",{children:["you need ",e.precio-s.points]}):Object(i.jsx)("img",{src:f,alt:"bolsa compra"})})]})]})})}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,s=Object(n.useContext)(l),c=s.currentPage,a=s.setCurrentPage,r=Math.ceil(e.length/t);function o(){var s=(c-1)*t,n=s+t;return e.slice(s,n)}function i(){a((function(e){return Math.min(e+1,r)}))}function j(){a((function(e){return Math.max(e-1,1)}))}function u(e){var t=Math.max(1,e);a((function(e){return Math.min(t,r)}))}return{next:i,prev:j,jump:u,currentData:o,currentPage:c,maxPage:r}},y={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ")}};function w(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],a=Object(n.useContext)(l),r=a.productos,j=a.setProductos,u=Object(n.useContext)(l),d=u.currentPage,b=u.setCurrentPage,O=Object(n.useContext)(l).setProductosTotales;function h(){return(h=Object(m.a)(x.a.mark((function e(){var t,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/products",y);case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,console.log(s),O(s),j(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:c(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);var p=Math.ceil(r.length/16),v=C(r,16),f=function(e){b(e),v.jump(e)};return Object(i.jsxs)("div",{className:"contenedor-de-todo",children:[Object(i.jsx)(g.a,{count:p,size:"large",page:d,variant:"outlined",shape:"rounded",onChange:f}),Object(i.jsxs)("div",{className:"grilla",children:[s?"Loading":r.length>0?v.currentData().map((function(e){return Object(i.jsx)("div",{className:"listado",children:Object(i.jsx)(N,{imagen:e.img.url,nombre:e.name,precio:e.cost,categoria:e.category},e.id)})})):Object(i.jsx)(i.Fragment,{}),")"]}),Object(i.jsx)(g.a,{count:p,size:"large",page:d,variant:"outlined",shape:"rounded",onChange:f})]})}var I=s.p+"static/media/header.b6f067c6.png";s(49);function P(){return Object(i.jsxs)("div",{className:"contenedor-imagen",children:[Object(i.jsx)("img",{className:"imagen",src:I,alt:"imagen de cabecera",height:"412px"}),Object(i.jsx)("div",{className:"contenedor-titulo",children:Object(i.jsx)("h3",{className:"titulo",children:"Electronics"})})]})}s(50);var J=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!1),r=Object(o.a)(a,2),j=r[0],u=r[1],d=Object(n.useContext)(l),b=d.loggedIn,O=d.setLoggedIn,h=Object(n.useContext)(l),p=h.username,g=h.setUsername,v=Object(n.useContext)(l),f=v.password,N=v.setPassword,C=Object(n.useContext)(l),y=C.email,w=C.setEmail,I=Object(n.useContext)(l),P=I.usernameRegistrar,J=I.setUsernameRegistrar,M=Object(n.useContext)(l),k=M.passwordRegistrar,D=M.setPasswordRegistrar,S=Object(n.useContext)(l),E=S.user,U=S.setUser,A=function(){var e=Object(m.a)(x.a.mark((function e(){var t,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==f&&""!==p){e.next=4;break}c(!0),e.next=19;break;case 4:return c(!1),e.prev=5,e.next=8,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ")}});case 8:return t=e.sent,e.next=11,t.json();case 11:s=e.sent,U(s),O(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(){return e.apply(this,arguments)}}();return b?Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"boton-desconectarse",onClick:function(){O(!1)},children:"Logout"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:E.name}),Object(i.jsx)("h3",{children:E.points}),Object(i.jsxs)("h3",{children:["Historial de points:",E.redeemHistory]})]}),") )"]})]}):Object(i.jsxs)("div",{className:"flex-container centered",children:[Object(i.jsxs)("div",{className:"card-login ".concat(j?"transparente":""),children:[Object(i.jsxs)("div",{className:"inputContainer",children:[Object(i.jsx)("input",{className:"".concat(s?"hasError":"otra"),autoComplete:"off",placeholder:"username",value:p,name:"username",type:"text",onChange:function(e){g(e.target.value)}}),Object(i.jsx)("span",{className:"".concat(s?"visible":""," error"),children:'Verifica los datos, user no puede ser "username" o vacio'})]}),Object(i.jsxs)("div",{className:"inputContainer",children:[Object(i.jsx)("input",{className:"".concat(s?"hasError":"otra"),value:f,onChange:function(e){N(e.target.value)},placeholder:"password",name:"password",type:"password"}),Object(i.jsx)("span",{className:"".concat(s?"visible":""," error"),children:'Verifica los datos, pass no puede ser "password" o vacio'})]}),Object(i.jsx)("button",{onClick:A,className:"btn",children:"Login"}),Object(i.jsx)("button",{className:"boton-registrarse",onClick:function(){return u(!j)},children:"Registrarse"})]}),Object(i.jsxs)("div",{className:"card-registrar ".concat(j?"visible":" "),children:[Object(i.jsxs)("div",{className:"inputContainer",children:[Object(i.jsx)("input",{className:"".concat(s?"hasError":"otra"),autoComplete:"off",placeholder:"username",value:P,name:"username",type:"text",onChange:function(e){J(e.target.value)}}),Object(i.jsx)("span",{className:"".concat(s?"visible":""," error"),children:'Verifica los datos, user no puede ser "username" o vacio'})]}),Object(i.jsxs)("div",{className:"inputContainer",children:[Object(i.jsx)("input",{className:"".concat(s?"hasError":"otra"),value:k,onChange:function(e){D(e.target.value)},placeholder:"password",name:"password",type:"password"}),Object(i.jsx)("span",{className:"".concat(s?"visible":""," error"),children:'Verifica los datos, pass no puede ser "password" o vacio'})]}),Object(i.jsxs)("div",{className:"inputContainer",children:[Object(i.jsx)("input",{className:"".concat(s?"hasError":"otra"),value:y,onChange:function(e){w(e.target.value)},placeholder:"email",name:"email",type:"email"}),Object(i.jsx)("span",{className:"".concat(s?"visible":""," error"),children:'Verifica los datos, pass no puede ser "password" o vacio'})]}),Object(i.jsx)("button",{className:"btn",children:"Registrarse"}),Object(i.jsx)("button",{className:"boton-volver",onClick:function(){return u(!j)},children:"Volver"})]})]})},M=(s(51),"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ");function k(){var e=Object(n.useContext)(l).loggedIn,t=Object(n.useContext)(l),s=t.user,c=t.setUser,a=Object(n.useState)(0),r=Object(o.a)(a,2),j=r[0],u=r[1];function d(){return(d=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(typeof j),1e3!==j&&5e3!==j&&7500!==j){e.next=18;break}return e.prev=2,console.log("hola"),e.next=6,fetch("https://coding-challenge-api.aerolab.co/user/points",{method:"POST",body:JSON.stringify({amount:j}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(M)}});case 6:return t=e.sent,e.next=9,t.json();case 9:e.sent,c(Object(v.a)({points:s.points+j},s)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:e.next=19;break;case 18:return e.abrupt("return","no es valida esa cantidad de points");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return e?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:["tus monedas disponibles:",Object(i.jsxs)("h1",{children:[" ",s.points]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"Podras elegir entre 1000, 5000 o 7500 points:"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"input-monto",type:"number",id:"barra",onChange:function(e){return u(e.target.valueAsNumber)},value:j,placeholder:"ingresa el monto"}),Object(i.jsx)("button",{className:"boton-busqueda",type:"button",onClick:function(){return d.apply(this,arguments)},children:"Enviar"})]})]}):"tenes que ingresar para ver tus monedas disponibles"}var D=function(){return Object(i.jsx)("main",{className:"main",children:Object(i.jsxs)(O.c,{children:[Object(i.jsxs)(O.a,{path:"/tienda-electronica",children:[Object(i.jsx)(P,{}),Object(i.jsx)(h,{}),Object(i.jsx)(w,{})]}),Object(i.jsx)(O.a,{path:"/iniciarsesion",children:Object(i.jsx)(J,{})}),Object(i.jsx)(O.a,{path:"/monedas",component:k})]})})};var S=function(){return Object(i.jsx)(j,{children:Object(i.jsx)(d.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(b,{}),Object(i.jsx)(D,{})]})})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,69)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(d.a,{children:Object(i.jsx)(S,{})})}),document.getElementById("root")),E()}},[[52,1,2]]]);
//# sourceMappingURL=main.59a4d4fe.chunk.js.map