(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum/forum-add-or-update"],{"123c":function(e,t,n){"use strict";n.r(t);var r=n("bed7"),u=n("3984");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("ba0c");var o,i=n("f0c5"),s=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=s.exports},"2a1c":function(e,t,n){"use strict";(function(e){n("5fb2");r(n("66fd"));var t=r(n("123c"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},3984:function(e,t,n){"use strict";n.r(t);var r=n("617c"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},"617c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function i(e){a(o,r,u,i,s,"next",e)}function s(e){a(o,r,u,i,s,"throw",e)}i(void 0)}))}}var i={data:function(){return{forum:{forumContent:"",id:"",forumName:"",forumTypes:null,forumStateTypes:1},index:0,forumTypesOptions:[],username:"",user:{}}},onLoad:function(t){var n=this;return o(r.default.mark((function u(){var a,o,i,s,c,f;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n,o=e.getStorageSync("nowTable"),r.next=4,a.$api.session(o);case 4:if(i=r.sent,a.user=i.data,"yonghu"==o&&(a.yonghuId=a.user.id),!t.id){r.next=13;break}return a.id=t.id,r.next=11,a.$api.info("forum",a.id);case 11:s=r.sent,a.forum=s.data;case 13:return c={page:1,limit:9999,dicCode:"forum_types"},r.next=16,a.$api.page("dictionary",c);case 16:f=r.sent,a.forumTypesOptions=f.data.list,a.styleChange();case 19:case"end":return r.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=this;return o(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.forum.username=e.username,!e.id){t.next=6;break}return t.next=4,e.$api.update("forum",e.forum);case 4:t.next=8;break;case 6:return t.next=8,e.$api.save("forum",e.forum);case 8:e.$utils.msgBack("操作成功");case 9:case"end":return t.stop()}}),t)})))()},setIsDoneTap:function(e){this.index=e.target.value,this.forum.forumTypes=this.forumTypesOptions[this.index].codeIndex,this.forum.forumValue=this.forumTypesOptions[this.index].indexName}}};t.default=i}).call(this,n("543d")["default"])},8236:function(e,t,n){},ba0c:function(e,t,n){"use strict";var r=n("8236"),u=n.n(r);u.a},bed7:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},a=[]}},[["2a1c","common/runtime","common/vendor"]]]);