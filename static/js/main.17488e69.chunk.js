(this["webpackJsonpdaily-check"]=this["webpackJsonpdaily-check"]||[]).push([[0],{20:function(e,t,n){},3:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(14),r=n.n(s),i=(n(20),n(3),n(0));var l=function(){return Object(i.jsx)("div",{className:"wrapper-header",children:Object(i.jsxs)("header",{className:"header",children:["How are you feeling",Object(i.jsx)("span",{children:"today?"})]})})},j=n(5),o=n(15),u=n.n(o);var b=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),l=r[0],o=r[1];return Object(i.jsx)("div",{className:"container-survey",children:Object(i.jsx)("div",{className:"wrapper-survey",children:Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)("label",{className:"label",children:"Date"}),Object(i.jsx)("input",{className:"input",type:"date",onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("label",{className:"label",children:"Mood"}),Object(i.jsx)("input",{className:"input",type:"text",onChange:function(e){return o(e.target.value)}}),Object(i.jsx)("div",{className:"buttonWrapper",children:Object(i.jsx)("button",{onClick:function(e){e.preventDefault();var t={date:n,mood:l};u.a.post("https://sheet.best/api/sheets/5eb84415-bab5-467b-a005-8a4caa4766f3",t).then((function(e){alert("Thank you for checking in today!")}))},children:"submit"})})]})})})};var d=function(){return Object(i.jsx)("div",{className:"wrapper-footer",children:"2021, Katarzyna-KW."})};var h=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(b,{}),Object(i.jsx)(d,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.17488e69.chunk.js.map