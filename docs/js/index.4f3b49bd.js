(function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-auto-storage/",r(r.s=0)})({0:function(e,t,r){e.exports=r("c31f")},"42b1":function(e,t,r){"use strict";var o=r("e417"),a=r.n(o);a.a},"5f72":function(e,t){e.exports=ELEMENT},"8bbf":function(e,t){e.exports=Vue},c31f:function(e,t,r){"use strict";r.r(t);var o=r("8bbf"),a=r.n(o),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"container"},[r("el-header",{attrs:{height:"auto"}},[r("h1",[e._v("\n      Vue Auto Storage\n\n      "),r("a",{staticClass:"star",attrs:{href:"https://github.com/zh-rocco/vue-auto-storage",target:"_blank",title:"Go to Star"}},[r("i",{staticClass:"el-icon-star-on",staticStyle:{float:"right"}})])])]),r("el-main",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-row",{staticClass:"center"},[r("h2",[e._v("Persistent Form")])]),r("el-form",{ref:"persistentForm",attrs:{model:e.persistentForm,"label-width":"130px","label-suffix":" :"}},[r("el-form-item",{attrs:{label:"Activity name"}},[r("el-input",{model:{value:e.persistentForm.name,callback:function(t){e.$set(e.persistentForm,"name",t)},expression:"persistentForm.name"}})],1),r("el-form-item",{attrs:{label:"Activity zone"}},[r("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.persistentForm.region,callback:function(t){e.$set(e.persistentForm,"region",t)},expression:"persistentForm.region"}},[r("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),r("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"Activity time"}},[r("el-col",{attrs:{span:11}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.persistentForm.date1,callback:function(t){e.$set(e.persistentForm,"date1",t)},expression:"persistentForm.date1"}})],1),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),r("el-col",{attrs:{span:11}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:e.persistentForm.date2,callback:function(t){e.$set(e.persistentForm,"date2",t)},expression:"persistentForm.date2"}})],1)],1),r("el-form-item",{attrs:{label:"Instant delivery"}},[r("el-switch",{model:{value:e.persistentForm.delivery,callback:function(t){e.$set(e.persistentForm,"delivery",t)},expression:"persistentForm.delivery"}})],1),r("el-form-item",{attrs:{label:"Activity type"}},[r("el-checkbox-group",{model:{value:e.persistentForm.type,callback:function(t){e.$set(e.persistentForm,"type",t)},expression:"persistentForm.type"}},[r("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"Resources"}},[r("el-radio-group",{model:{value:e.persistentForm.resource,callback:function(t){e.$set(e.persistentForm,"resource",t)},expression:"persistentForm.resource"}},[r("el-radio",{attrs:{label:"Sponsor"}}),r("el-radio",{attrs:{label:"Venue"}})],1)],1),r("el-form-item",{attrs:{label:"Activity form"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.persistentForm.desc,callback:function(t){e.$set(e.persistentForm,"desc",t)},expression:"persistentForm.desc"}})],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-row",{staticClass:"center"},[r("h2",[e._v("Normal Form")])]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"130px","label-suffix":" :"}},[r("el-form-item",{attrs:{label:"Activity name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Activity zone"}},[r("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[r("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),r("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"Activity time"}},[r("el-col",{attrs:{span:11}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),r("el-col",{attrs:{span:11}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),r("el-form-item",{attrs:{label:"Instant delivery"}},[r("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),r("el-form-item",{attrs:{label:"Activity type"}},[r("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"Resources"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"Sponsor"}}),r("el-radio",{attrs:{label:"Venue"}})],1)],1),r("el-form-item",{attrs:{label:"Activity form"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1)],1)],1),r("el-row",{staticClass:"mt-l center"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleReload}},[e._v("Test Persistence (Reload Page)")]),r("el-button",{on:{click:e.handleClearCurrent}},[e._v("Clear Stroage")])],1)],1)],1)},n=[],i={name:"App",autoStorage:["persistentForm"],data(){return{persistentForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{handleClearCurrent(){this.$autoStorage.clear("persistentForm")},handleReload(){location.reload()}}},l=i;r("42b1");function c(e,t,r,o,a,s,n,i){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),n?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=l):a&&(l=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(e,t){return l.call(t),m(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var m=c(l,s,n,!1,null,null,null),u=m.exports,p=r("5f72"),f=r.n(p);const d=Symbol("STORAGE"),b=Symbol("UNWATCH_FNS"),h=Symbol("PREFIX"),v=Symbol("DEBOUNCE_TIME");function y(e){try{return e.setItem("@@",1),1!==e.getItem("@@")?!1:(e.removeItem("@@"),!0)}catch(e){return!1}}function g(e){return Object.prototype.toString.call(e).slice(8,-1)}function _(e){const t=/(\[\w+\])$/g;if(t.test(e)){const t=e.lastIndexOf("[");return[e.slice(0,t),e.slice(t+1,-1)]}{const t=e.lastIndexOf(".");return[e.slice(0,t),e.slice(t+1)]}}function x(e,t=300){let r;return function(...o){r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,o)},t)}}function S(e,t,r){t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const o=t.split(".");for(const a of o){if(!(a in e))return r;e=e[a]}return e}const $="__AUTO_STORAGE__";class O{constructor(e){this.$vm=e,this[b]=Object.create(null),this[d]=e.__AUTO_STORAGE_OPTIONS__.storage,this[v]=e.__AUTO_STORAGE_OPTIONS__.debounce,this[h]=$+e.$options.name.toUpperCase()+"__"}getName(e){return this[h]+e.toUpperCase()}getItem(e){return this[d].getItem(this.getName(e))}watch(e){e&&(this[b][e]||(this[b][e]=this.$vm.$watch(e,x(t=>{this[d].setItem(this.getName(e),t)},this[v]),{deep:!0})))}unwatch(e){if(void 0===e){for(const e in this[b])this[b][e]();delete this[b],this[b]=Object.create(null)}else e&&e in this[b]&&(this[b][e](),delete this[b][e])}clear(e){e?this[d].removeItem(this.getName(e)):this[d].clear($)}destroy(){this.unwatch(),delete this.$vm,delete this[h],delete this[d],delete this[v]}}const k=/(\.|\[|\])/g;function w(e){"Array"===g(e.$options.autoStorage)&&e.$options.name&&(e.$autoStorage||(e.$autoStorage=new O(e),C(e),T(e)))}function F(e){e.$autoStorage&&(e.$autoStorage.destroy(),delete e.$autoStorage)}function C(e){const t=e.$options.autoStorage;for(const r of t){const t=e.$autoStorage.getItem(r);void 0!==t&&I(e,r,t)}}function I(e,t,r){if(k.test(t)){const[o,a]=_(t),s=S(e,o);s[a]=r}else e[t]=r}function T(e){const t=e.$options.autoStorage;for(const r of t)void 0!==S(e,r)&&e.$autoStorage.watch(r)}var A={created(){try{w(this)}catch(e){console.error(e)}},beforeDestroy(){F(this)}};const P=window.localStorage;var E={setItem(e,t){P.setItem(e,JSON.stringify(void 0===t?null:t))},getItem(e){const t=P[e];return void 0===t?void 0:JSON.parse(t)},removeItem(e){P.removeItem(e)},clear(e){if(e)for(const t of Object.keys(P))-1!==t.indexOf(e)&&P.removeItem(t);else P.clear()}};const N={debounce:300,storage:E},R={install(e,t={}){for(const r in t)N[r]=t[r];if(!y(N.storage))throw new Error("Invalid storage instance given");Object.defineProperty(e.prototype,"__AUTO_STORAGE_OPTIONS__",{value:N}),e.mixin(A)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(R);var j=R;a.a.config.productionTip=!1,a.a.use(f.a),a.a.use(j),new a.a({render:e=>e(u)}).$mount("#app")},e417:function(e,t,r){}});
//# sourceMappingURL=index.4f3b49bd.js.map