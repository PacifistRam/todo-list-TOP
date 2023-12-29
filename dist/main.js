(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),d=t(667),s=t.n(d),c=new URL(t(380),t.b),l=i()(r());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap);"]);var u=s()(c);l.push([n.id,`*,*::after,*::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\nli {\n    list-style: none;\n}\ninput {\n    border:none;\n    background-image:none;\n    background-color:transparent;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    padding:0;\n    display: inline-block;\n}\nselect {\n    background: none;\n    margin: none;\n    outline: none;\n    \n}\nbutton {\n    background: none;\n    padding: 0;\n    outline: none;\n    border: none;\n}\n.button {\n    font-size: 1rem;\n    padding: 0.5rem 1.2rem;\n    border: lightgray;\n    background-color: #d9f99d;\n    border-radius: 5px;\n    width: 120px;\n\n}\nmain {\n    display: grid;\n    grid-template-columns: auto 2fr;\n    grid-template-rows: auto 2fr;\n    gap: 1rem;\n    position: relative;\n    max-width: 1150px;\n    width: 90%;\n    min-height: calc(100vh - 1rem);\n    margin-inline: auto;\n    margin-top: 1rem;\n    grid-template-areas: \n    'main-header main-header main-header'\n    'categories  task        task';\n}\n\n.main-header {\n    grid-area: main-header;\n    background-color: #fef9c3;\n}\n\n.category-container {\n    grid-area: categories;\n    background-color: #d9f99d;\n    padding: 1rem 1.5rem;\n   \n    \n}\n.sorted-category {\n    padding-block: 1rem;\n}\n.sorted-category li,.project-category li {\n    padding: 0.5rem 1rem ;\n    cursor: pointer;\n}\n.add-category-input {\n    border-bottom: 1px solid lightgray;\n    max-width: 200px;\n    padding-inline: 0.5rem;\n    font-size: 1rem;\n    \n}\n.add-category-input:focus {\n    outline: none;\n    border-color: rgb(224, 228, 230);\n}\n.add-category-btn {\n   font-size: 1.8rem;\n   transition: all 0.2s ease-in;\n   cursor: pointer;\n}\n.add-category-btn:hover {\n    color: rgb(21, 190, 247);\n} \n\n.task-list-container {\n    grid-area: task;\n    background-color: #a7f3d0;\n}\n.task {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 1.1rem 1.2rem;\n    text-align: left;\n    border: none;\n}\n\n.todo-item-header {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n    align-items: center;\n}\n.todo-item-header > * {\n    flex: 1;\n}\n.todo-item-header .delete-button {\n    flex: 0;\n}\n.delete-button {\n    outline: 0;\n    border: 0;\n   font-size: 1.5rem;\n   cursor: pointer;\n   background: none;\n   color: rgb(240, 23, 23);\n}\n.delete-button:hover {\n    color: rgb(243, 116, 116);\n}\n.todo-item-header::after {\n    content: "\\25BE";\n    font-size: 2rem;\n    position:absolute;\n    right: 1rem;\n   \n   \n}\n.todo-priority {\n   margin-left: 2rem;\n    \n}\n.more-info {\n    padding: 0 1.1rem;\n    background-color: white;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n   \n}\n\n.active, .todo-item-header:hover{\n    background-color: #ccc;\n}\n.add-todo-button-wrapper{\n    position: relative;\n}\n.add-todo-button {\n    background-image: url(${u});\n    width: 3rem;\n    height: 3rem;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 2rem;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    transition: transform 0.3s ease-in-out;\n   \n    \n}\n.add-todo-button-wrapper:after{\n    content: 'ADD TODOS';\n    position: absolute;\n    top: 50%;\n    margin-left: 2px;\n   \n    /* padding: 0 0.5rem; */\n    max-width: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    border-bottom:1px solid #0284c7 ;\n    transition: max-width 0.3s ease-in;\n}\n.add-todo-button-wrapper:hover::after {\n    max-width: 120px;\n    \n}\n\n.add-todo-button:hover {\n    transform: rotate(90deg) ;\n}\n\n.add-todo-form {\n   \n    display: inline-block;\n    min-width: 300px;\n    width:60%;\n    font-size: 1rem;\n}\n.add-todo-form > *{\n    padding: 1rem 0.5rem;\n    margin-bottom: 1rem;\n    \n}\n.add-todo-form input {\n    \n    height: 2rem;\n    border-bottom: 1px solid lightgray;\n    outline: 0;\n    padding: 1.2rem 0.5rem;\n}\n.add-todo-form select {\n    width: 50%;\n    padding: 8px;\n    font-size: 1rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n   \n}\n\n.add-todo-form .button {\n    margin-right: 1rem;\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n}\n.add-todo-form .button:hover{\n    background-color: #a4f311;\n    color: rgb(80, 82, 85);\n}\n\n.wrapper{\n    box-sizing: border-box;\n    padding: 2rem 2.5rem;\n    width: 100%;\n    position: relative;\n    transition: all 0.2s ease;\n\n}\n.close-button {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 24px;\n    cursor: pointer;\n    color: #b11b1b; \n  }\n  .close-button:hover {\n    color: #e73838;\n  }\ndialog {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    max-width:40ch;\n    border: 0;\n    box-shadow: 0 1rem 0 0.5 black;\n    margin: 0 auto;\n    \n}\ndialog::backdrop {\n   opacity: 0.9;\n   background-color: lightgray;\n   backdrop-filter: blur(15px);\n}`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=o.base?s[0]+o.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var s=o(n,r),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},380:n=>{n.exports="data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27utf-8%27%3F%3E%3Csvg width=%27100px%27 height=%27100px%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle opacity=%270.5%27 cx=%2712%27 cy=%2712%27 r=%2710%27 stroke=%27%233b82f6%27 stroke-width=%271.5%27/%3E%3Cpath d=%27M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15%27 stroke=%27%233b82f6%27 stroke-width=%271.5%27 stroke-linecap=%27round%27/%3E%3C/svg%3E"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),d=t(565),s=t.n(d),c=t(216),l=t.n(c),u=t(589),p=t.n(u),m=t(426),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const f=[];function h(n,e,t,o){this.title=n,this.description=e,this.dueDate=t,this.priority=o,this.isDone=!1,this.toggleDone=function(){this.isDone=!this.isDone}}function b(n){this.name=n,this.todoList=[],this.addTodoItem=function(n,e,t,o){const r=new h(n,e,t,o);this.todoList.push(r)}}function v(n){if(function(n){return f.some((e=>e.name==n))}(n))console.log(`category with "${n} already exists"`);else{const e=new b(n);f.push(e),console.log(`Category "${n}" created`)}}const y=document.querySelector(".project-category"),x=()=>{y.textContent="",f.forEach(((n,e)=>{!function(n,e,t){const o=document.createElement("li"),r=document.createElement("span"),a=document.createElement("button");r.textContent=e.name,a.className="delete-button",a.textContent="🗑",((n,e)=>{n.addEventListener("click",(()=>{f.splice(e,1),x(),console.log(f)}))})(a,t),o.append(r,a),n.appendChild(o)}(y,n,e)}))},w=document.querySelector(".task");(()=>{const n=document.querySelector(".add-category"),e=document.querySelector(".add-category-input");n.addEventListener("submit",(n=>{n.preventDefault();const t=e.value;""!=t?(console.log(t),v(t),x(),console.log(f),e.value=""):console.log("Field can't be empty")}))})(),v("shopping"),function(n,e,t,o,r){const a=f.find((e=>e.name===n));a?(a.addTodoItem("buy clothes","need to buy some new shirts","30-12-2023","mid"),console.log(`ToDo added to category "${n}"`)):console.log(`Category "${n}" doesn't Exist`)}("shopping"),x(),document.querySelector(".project-category").addEventListener("click",(n=>{const e=n.target.closest("span");if(e){const n=e.textContent;console.log(e.textContent),(n=>{const e=f.find((e=>e.name===n));w.textContent="",e.todoList.forEach(((e,t)=>{!function(n,e,t,o){const r=document.createElement("div");r.classList.add("todo-item");const a=document.createElement("div");a.classList.add("todo-item-header");const i=document.createElement("div");i.classList.add("more-info");const d=document.createElement("span");d.classList.add("checkbox-span");const s=document.createElement("input");s.type="checkbox",s.checked=t.isDone,s.id=`checkbox-${o}`;const c=document.createElement("label");c.textContent=t.title,c.setAttribute("for",`checkbox-${o}`),s.addEventListener("change",(()=>{t.toggleDone(),renderTodoList(e)}));const l=document.createElement("button");l.classList.add("delete-button"),l.textContent="🗑";const u=document.createElement("p");u.classList.add("todo-description");const p=document.createElement("p");p.classList.add("todo-due-date");const m=document.createElement("p");m.classList.add("todo-priority"),u.textContent=t.description,p.textContent=t.dueDate,m.textContent=`"Priority:${t.priority}"`,d.append(s,c),a.append(d,m,l),i.append(u,p),r.appendChild(a),r.appendChild(i),n.appendChild(r),console.log(t.title),t.isDone&&(c.style.textDecoration="line-through",r.style.backgroundColor="lightgray",r.style.opacity="0.5")}(w,n,e,t)}))})(n)}})),console.log(f)})()})();