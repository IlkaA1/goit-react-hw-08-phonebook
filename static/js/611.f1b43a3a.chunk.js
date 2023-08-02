"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[611],{2611:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(9434),i=t(3634),u="NOT_FOUND";var a=function(e,n){return e===n};function o(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?a:r,o=t.maxSize,c=void 0===o?1:o,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),f=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(n,i){r(n)===u&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function c(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var u,a=0,o={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(o=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=o,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],h=c(r),v=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(m,{resultFunc:s,memoizedResultFunc:v,dependencies:h,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var l=s(o),f=function(e){return e.form},p=l([function(e){return e.form.items},function(e){return e.filter.serchName}],(function(e,n){console.log(e);var t=n.toLowerCase().toString();return n===n?e.filter((function(e){return e.name.toLowerCase().includes(t)})):e})),d="form_container__2xgjh",h="form_addContact__bhsBb",v=t(184),m=function(){var e=(0,r.I0)(),n=(0,r.v9)(f).items;return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,u=r.elements,a=u.name,o=u.number,c={name:a.value,phone:o.value},s=a.value;if(n.find((function(e){return e.name===s})))return alert("".concat(s," is already in contacts"));e((0,i.uK)(c)),r.reset()},className:d,children:[(0,v.jsxs)("label",{children:["Name",(0,v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{children:["Number",(0,v.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})})},y="list_list__0nfR6",x="list_li__nON-X",j="list_phone__-hrxU",b=function(){var e=(0,r.v9)(p),n=(0,r.I0)();return(0,v.jsx)("ul",{className:y,children:e.map((function(e){return(0,v.jsxs)("li",{className:x,children:[e.name,": ",(0,v.jsx)("div",{className:j,children:e.phone}),(0,v.jsx)("button",{onClick:function(){return t=e.id,void n((0,i.GK)(t));var t},children:"Delete"})]},e.id)}))})},g="filter_input__sX944",_=t(4808),k=function(){var e=(0,r.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("label",{children:["Find contacts by name",(0,v.jsx)("input",{type:"text",onChange:function(n){var t=n.currentTarget.value;e((0,_.W)(t))},className:g})]})})},w=t(2791),C=function(){var e=(0,r.I0)(),n=(0,r.v9)(f),t=n.items,u=n.isLoading,a=n.error;return(0,w.useEffect)((function(){e((0,i.Jv)())}),[e]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(m,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)("p",{children:t&&(0,v.jsx)(k,{})}),(0,v.jsxs)("div",{children:[u&&!a&&(0,v.jsx)("b",{children:"Request in progress..."}),a&&(0,v.jsx)("p",{children:a}),t&&(0,v.jsx)(b,{})]})]})}}}]);
//# sourceMappingURL=611.f1b43a3a.chunk.js.map