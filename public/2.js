(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{OMW7:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return a}));var r=function(e){return!!e||"Wajib diisi"},a=function(e){return/.+@.+\..+/.test(e)||"E-mail tidak valid"}},bR8p:function(e,t,s){"use strict";s.r(t);var r=s("o0o1"),a=s.n(r),n=s("OMW7");function o(e,t,s,r,a,n,o){try{var i=e[n](o),c=i.value}catch(e){return void s(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var i={name:"ChangePasswordDialog",props:{value:{required:!0,type:Boolean}},data:function(){return{changePasswordOnProgress:!1,oldPassword:null,showOldPassword:null,newPassword:null,showNewPassword:null,newPassword_confirmation:null,required:n.b}},methods:{changePassword:function(){var e,t=this;return(e=a.a.mark((function e(){var s,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.changePasswordOnProgress=!0,s={oldPassword:t.oldPassword,newPassword:t.newPassword,newPassword_confirmation:t.newPassword_confirmation},t.$refs.changePasswordForm.reset(),t.$refs.changePasswordForm.resetValidation(),e.prev=4,e.next=7,window.axios.put("/api/auth/user/change-password",s);case 7:r=e.sent,n=r.data.message,t.$emit("notice",{message:n,type:"success"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),t.$emit("noticeError",e.t0);case 15:t.$emit("input",!1),t.changePasswordOnProgress=!1;case 17:case"end":return e.stop()}}),e,null,[[4,12]])})),function(){var t=this,s=arguments;return new Promise((function(r,a){var n=e.apply(t,s);function i(e){o(n,r,a,i,c,"next",e)}function c(e){o(n,r,a,i,c,"throw",e)}i(void 0)}))})()}}},c=s("KHd+");function l(e,t,s,r,a,n,o){try{var i=e[n](o),c=i.value}catch(e){return void s(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var d={name:"AccountSettings",data:function(){return{showChangePasswordDialog:!1}},computed:{verified:function(){return this.$store.getters.userVerified}},methods:{sendEmailVerification:function(){var e,t=this;return(e=a.a.mark((function e(){var s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("contentLoading",!0),e.prev=1,e.next=4,window.axios("/verify/resend");case 4:s=e.sent,r=s.data.message,t.$emit("notice",{message:r,type:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.$emit("noticeError",e.t0);case 12:t.$store.commit("contentLoading",!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,s=arguments;return new Promise((function(r,a){var n=e.apply(t,s);function o(e){l(n,r,a,o,i,"next",e)}function i(e){l(n,r,a,o,i,"throw",e)}o(void 0)}))})()}},components:{ChangePasswordDialog:Object(c.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{value:e.value,width:"450","max-width":"100%",persistent:e.changePasswordOnProgress},on:{input:function(t){return e.$emit("input",t)}}},[s("v-card",[e.changePasswordOnProgress?e._e():s("v-card-title",[e._v("Ubah Password")]),e._v(" "),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[e.changePasswordOnProgress?s("v-progress-circular",{attrs:{indeterminate:e.changePasswordOnProgress}}):s("v-col",[s("v-form",{ref:"changePasswordForm"},[s("v-text-field",{attrs:{label:"Password Lama",type:e.showOldPassword?"text":"password","append-icon":e.showOldPassword?"mdi-eye":"mdi-eye-off",rules:[e.required]},on:{"click:append":function(t){e.showOldPassword=!e.showOldPassword}},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}}),e._v(" "),s("v-text-field",{attrs:{label:"Password baru",type:e.showNewPassword?"text":"password","append-icon":e.showNewPassword?"mdi-eye":"mdi-eye-off",rules:[e.required]},on:{"click:append":function(t){e.showNewPassword=!e.showNewPassword}},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),e._v(" "),s("v-text-field",{attrs:{label:"Ulangi password baru",type:e.showNewPassword?"text":"password",rules:[e.required]},model:{value:e.newPassword_confirmation,callback:function(t){e.newPassword_confirmation=t},expression:"newPassword_confirmation"}})],1)],1)],1)],1)],1),e._v(" "),e.changePasswordOnProgress?e._e():s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("Close")]),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.changePassword}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null).exports}},v=Object(c.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{staticClass:"pa-10",attrs:{align:"center",justify:"center"}},[s("v-card",{attrs:{width:"100%","max-width":"650"}},[s("v-list",[s("v-list-item",{class:[e.verified?"success":"error","lighten-5","pa-4"]},[s("v-list-item-avatar",[e.verified?s("v-icon",{attrs:{color:"success"}},[e._v("mdi-check")]):s("v-icon",{attrs:{color:"error"}},[e._v("mdi-close")])],1),e._v(" "),s("v-list-item-content",[e.verified?s("v-list-item-title",[e._v("Terverifikasi")]):s("v-list-item-title",[e._v("Belum terverifikasi")]),e._v(" "),e.verified?e._e():s("v-list-item-subtitle",[s("v-btn",{attrs:{text:"","x-small":""},on:{click:e.sendEmailVerification}},[e._v("Kirim email verifikasi")])],1)],1)],1),e._v(" "),s("v-list-item",{attrs:{ripple:""}},[s("v-list-item-content",[s("v-row",{staticClass:"px-6"},[s("v-col",{staticClass:"grey--text text--darken-1",attrs:{sm:"3"}},[e._v("Email")]),e._v(" "),s("v-col",{staticClass:"text-right grey--text"},[e._v(e._s(e.$store.getters.userEmail))])],1)],1)],1),e._v(" "),s("v-list-item",{attrs:{ripple:""}},[s("v-list-item-content",[s("v-row",{staticClass:"px-6"},[s("v-col",{staticClass:"grey--text text--darken-1",attrs:{sm:"3"}},[e._v("Username")]),e._v(" "),s("v-col",{staticClass:"text-right"},[e._v(e._s(e.$store.getters.userName))])],1)],1)],1),e._v(" "),s("v-list-item",[s("v-list-item-content",[s("v-row",{staticClass:"px-6",attrs:{align:"center"}},[s("v-col",{staticClass:"grey--text text--darken-1",attrs:{sm:"3"}},[e._v("Password")]),e._v(" "),s("v-col",{staticClass:"text-right"},[s("v-btn",{attrs:{text:"",small:"",color:"grey darken-2"},on:{click:function(t){e.showChangePasswordDialog=!e.showChangePasswordDialog}}},[s("v-icon",{attrs:{small:""}},[e._v("mdi-pencil")]),e._v("\r\n                                Ubah password\r\n                            ")],1)],1)],1)],1)],1)],1)],1),e._v(" "),s("change-password-dialog",{on:{notice:function(t){return e.$emit("notice",t)},noticeError:function(t){return e.$emit("noticeError",t)}},model:{value:e.showChangePasswordDialog,callback:function(t){e.showChangePasswordDialog=t},expression:"showChangePasswordDialog"}})],1)}),[],!1,null,null,null);t.default=v.exports}}]);