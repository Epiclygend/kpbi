(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProfileCard */ "./resources/js/components/ProfileCard.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MyProfile',
  data: function data() {
    return {
      profileLoading: false,
      profileData: {}
    };
  },
  computed: {
    currentUserId: function currentUserId() {
      return this.$store.getters.userId;
    },
    pageTitle: function pageTitle() {
      var _this$profileData$jen, _this$profileData$nam, _this$profileData$pt$, _this$profileData$pt;

      return "".concat((_this$profileData$jen = this.profileData.jenjang) !== null && _this$profileData$jen !== void 0 ? _this$profileData$jen : '', " ").concat((_this$profileData$nam = this.profileData.nama_prodi) !== null && _this$profileData$nam !== void 0 ? _this$profileData$nam : '', " ").concat((_this$profileData$pt$ = (_this$profileData$pt = this.profileData.pt) === null || _this$profileData$pt === void 0 ? void 0 : _this$profileData$pt.lengkap) !== null && _this$profileData$pt$ !== void 0 ? _this$profileData$pt$ : '');
    }
  },
  methods: {
    getProfileData: function getProfileData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$window$axios, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.profileLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return window.axios('/api/kpbi/profile');

              case 4:
                _yield$window$axios = _context.sent;
                data = _yield$window$axios.data;
                _this.profileData = data;
                if ('warn' in data) _this.$emit('notice', {
                  message: data.warn,
                  type: 'warning'
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

                _this.$emit('noticeError', _context.t0);

              case 13:
                _this.profileLoading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    save: function save(_ref) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var bio, newImg, update, uploaded, upload, _uploaded, _upload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                bio = _ref.bio, newImg = _ref.newImg;

                _this2.$store.commit('contentLoading', true); // Update Biodata


                _context2.prev = 2;
                _context2.next = 5;
                return window.axios.put('/api/kpbi/profile', bio);

              case 5:
                update = _context2.sent;

                _this2.$emit('notice', {
                  message: update.data.message,
                  type: 'success'
                });

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);

                _this2.$emit('noticeError', _context2.t0);

              case 12:
                if (!newImg.pt) {
                  _context2.next = 24;
                  break;
                }

                uploaded = new FormData();
                uploaded.append('pt_img', newImg.pt);
                _context2.prev = 15;
                _context2.next = 18;
                return window.axios.post('/api/kpbi/profile/pt-image', uploaded, {
                  'Content-Type': 'multipart/form-data'
                });

              case 18:
                upload = _context2.sent;
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t1 = _context2["catch"](15);

                _this2.$emit('noticeError', _context2.t1);

              case 24:
                if (!newImg.kaprodi) {
                  _context2.next = 36;
                  break;
                }

                _uploaded = new FormData();

                _uploaded.append('kaprodi_img', newImg.kaprodi);

                _context2.prev = 27;
                _context2.next = 30;
                return window.axios.post('/api/kpbi/profile/kaprodi-image', _uploaded, {
                  'Content-Type': 'multipart/form-data'
                });

              case 30:
                _upload = _context2.sent;
                _context2.next = 36;
                break;

              case 33:
                _context2.prev = 33;
                _context2.t2 = _context2["catch"](27);

                _this2.$emit('noticeError', _context2.t2);

              case 36:
                _this2.getProfileData();

                _this2.$store.commit('contentLoading', false);

              case 38:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9], [15, 21], [27, 33]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.getProfileData();
  },
  watch: {
    currentUserId: function currentUserId() {
      this.getProfileData();
    }
  },
  components: {
    ProfileCard: _components_ProfileCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c("v-row", { attrs: { justify: "center" } }, [
        _c("h1", { staticClass: "text-h5 my-6" }, [
          _vm._v(_vm._s(_vm.pageTitle))
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c("ProfileCard", {
            attrs: {
              "can-edit": true,
              profileData: _vm.profileData,
              isLoading: _vm.profileLoading
            },
            on: { "profile-update": _vm.save }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/MyProfile.vue":
/*!******************************************!*\
  !*** ./resources/js/views/MyProfile.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyProfile_vue_vue_type_template_id_8e9c9464___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=template&id=8e9c9464& */ "./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464&");
/* harmony import */ var _MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/MyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyProfile_vue_vue_type_template_id_8e9c9464___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyProfile_vue_vue_type_template_id_8e9c9464___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MyProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/MyProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_8e9c9464___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfile.vue?vue&type=template&id=8e9c9464& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyProfile.vue?vue&type=template&id=8e9c9464&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_8e9c9464___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_8e9c9464___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);