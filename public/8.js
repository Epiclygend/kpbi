(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{e19l:function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),n=a.n(r);function i(t,e,a,r,n,i,o){try{var s=t[i](o),l=s.value}catch(t){return void a(t)}s.done?e(l):Promise.resolve(l).then(r,n)}var o={name:"Members",data:function(){return{headers:[{text:"#",value:"no",sortable:!1},{text:"JENJANG",align:"start",sortable:!0,value:"jenjang"},{text:"PRODI",value:"nama_prodi"},{text:"PERGURUAN TINGGI",value:"pt.lengkap"},{text:"WEBSITE PRODI",value:"web_prodi",sortable:!1},{text:"AKSI",value:"actions",sortable:!1}],members:[],isLoading:!1,search:null,detailDialog:!1,currentProfileShow:{}}},computed:{dialogTitle:function(){var t,e,a,r,n=this.currentProfileShow;return"".concat(null!==(t=n.jenjang)&&void 0!==t?t:""," ").concat(null!==(e=n.nama_prodi)&&void 0!==e?e:""," ").concat(null!==(a=null===(r=n.pt)||void 0===r?void 0:r.lengkap)&&void 0!==a?a:"")}},methods:{getUsers:function(){var t,e=this;return(t=n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,window.axios("/api/kpbi/profiles");case 4:a=t.sent,r=a.data,e.members=r,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.$emit("noticeError",t.t0);case 12:e.isLoading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})),function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function s(t){i(o,r,n,s,l,"next",t)}function l(t){i(o,r,n,s,l,"throw",t)}s(void 0)}))})()},seeDetails:function(t){this.currentProfileShow=t,this.detailDialog=!0}},created:function(){this.getUsers()},components:{ProfileCard:a("SJBf").a}},s=a("KHd+"),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"start",align:"stretch"}},[a("v-col",[a("v-card",{attrs:{elevation:"3"}},[a("v-card-title",{staticClass:"px-8 py-3"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{fab:"",icon:"",loading:t.isLoading,disabled:t.isLoading},on:{click:function(e){return e.stopPropagation(),t.getUsers(e)}}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-refresh")])],1)]}}])},[t._v(" "),a("span",[t._v("Refresh Data")])]),t._v(" "),a("h1",{staticClass:"text-h5"},[t._v("Anggota KPBI")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.members,search:t.search,loading:t.isLoading,"fixed-header":"",height:"65vh"},scopedSlots:t._u([{key:"item.web_prodi",fn:function(e){var r=e.item;return[a("a",{attrs:{href:r.web_prodi,target:"_blank"}},[t._v(t._s(r.web_prodi))])]}},{key:"item.actions",fn:function(e){var r=e.item;return[a("v-btn",{attrs:{outlined:"",small:"",color:"green darken-2"},on:{click:function(e){return t.seeDetails(r)}}},[t._v("Details")])]}}])})],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"700","max-width":"100%",scrollable:""},model:{value:t.detailDialog,callback:function(e){t.detailDialog=e},expression:"detailDialog"}},[a("v-card",[a("v-card-title",{staticClass:"light-green white--text"},[t._v(t._s(t.dialogTitle))]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("profile-card",{attrs:{profileData:t.currentProfileShow,editMode:!1}})],1)],1)],1),t._v(" "),a("v-card-actions",{staticClass:"light-green lighten-4"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.detailDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);