(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a.n(r),i=a(3),s=a(6),o=a(1),c=a(8),l=a(2),u=(a(15),a(10)),d=a.n(u),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],p={titleErrorMessage:"",userErrorMessage:""},x={title:"",userId:0};function v(e){return f.find((function(t){return e===t.id}))||null}function g(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(c.a)(t))+1}var I=function(){var e=O.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:v(e.userId)})})),t=Object(l.useState)(e),a=Object(s.a)(t,2),r=a[0],n=a[1],u=Object(l.useState)(x),d=Object(s.a)(u,2),j=d[0],b=d[1],I=Object(l.useState)(p),y=Object(s.a)(I,2),M=y[0],E=y[1],S=function(e,t){b((function(a){return Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},e,t))}))},N=function(e,t){E((function(a){return Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},e,t))}))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),j.title.trim()||N("titleErrorMessage","Please enter a title"),j.userId||N("userErrorMessage","Please choose a user"),j.title.trim()&&j.userId&&(!function(e){var t=Object(o.a)(Object(o.a)({},e),{},{user:v(e.userId)});n((function(e){return[].concat(Object(c.a)(e),[t])}))}({id:g(r),title:j.title,completed:!1,userId:j.userId}),b(x),E(p))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"todo-form-title",children:"Title: "}),Object(m.jsx)("input",{type:"text",id:"todo-form-title","data-cy":"titleInput",onChange:function(e){S("title",e.target.value),N("titleErrorMessage","")},value:j.title,placeholder:"Enter a title"}),M.titleErrorMessage&&Object(m.jsx)("span",{className:"error",children:M.titleErrorMessage})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"todo-form-user",children:"User: "}),Object(m.jsxs)("select",{id:"todo-form-user","data-cy":"userSelect",onChange:function(e){S("userId",+e.target.value),N("userErrorMessage","")},value:j.userId,children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),f.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),M.userErrorMessage&&Object(m.jsx)("span",{className:"error",children:M.userErrorMessage})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:r})]})};n.a.render(Object(m.jsx)(I,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.74f0e150.chunk.js.map