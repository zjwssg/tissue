"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************************!*\
  !*** D:/phpstudy/WWW/tissue/main.js?{"page":"pages%2Fhs-scancode%2Fhs-scancode"} ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_hs_scancode_hs_scancode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/hs-scancode/hs-scancode.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_hs_scancode_hs_scancode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_hs_scancode_hs_scancode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/hs-scancode/hs-scancode'\n        _pages_hs_scancode_hs_scancode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_hs_scancode_hs_scancode_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsdUZBQUc7QUFDWCxRQUFRLHVGQUFHO0FBQ1gsUUFBUSx1RkFBRztBQUNYLGdCQUFnQix1RkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9ocy1zY2FuY29kZS9ocy1zY2FuY29kZS5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2hzLXNjYW5jb2RlL2hzLXNjYW5jb2RlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************!*\
  !*** D:/phpstudy/WWW/tissue/main.js?{"type":"appStyle"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************!*\
  !*** D:/phpstudy/WWW/tissue/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpstudy/WWW/tissue/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "width": 100,
    "minHeight": 100,
    "background": "#f5f6fa"
  },
  "boxShadow": {
    "boxShadow": "inset 0upx 0upx 80upx #473876"
  },
  "background_fafafa": {
    "width": 100,
    "minHeight": 100,
    "overflow": "hidden",
    "background": "#fafafa"
  },
  "background_ffffff": {
    "width": 100,
    "minHeight": 100,
    "overflow": "hidden",
    "background": "#ffffff"
  },
  "yichuyincang": {
    "whiteSpace": "nowrap",
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "color0": {
    "color": "#000000"
  },
  "colorF": {
    "color": "#ffffff"
  },
  "color3": {
    "color": "#333333"
  },
  "color6": {
    "color": "#666666"
  },
  "color9": {
    "color": "#999999"
  },
  "Size16": {
    "fontSize": "16upx"
  },
  "Size18": {
    "fontSize": "18upx"
  },
  "Size20": {
    "fontSize": "20upx"
  },
  "Size22": {
    "fontSize": "22upx"
  },
  "Size24": {
    "fontSize": "24upx"
  },
  "Size26": {
    "fontSize": "26upx"
  },
  "Size28": {
    "fontSize": "28upx"
  },
  "Size32": {
    "fontSize": "32upx"
  },
  "Size34": {
    "fontSize": "34upx"
  },
  "Size36": {
    "fontSize": "36upx"
  },
  "Size38": {
    "fontSize": "38upx"
  },
  "Size48": {
    "fontSize": "48upx"
  },
  "Size52": {
    "fontSize": "52upx"
  },
  "Size50": {
    "fontSize": "48upx"
  },
  "img100": {
    "width": 100,
    "height": 100
  },
  "borderRadius": {
    "borderRadius": 50
  },
  "weight600": {
    "fontWeight": "600"
  },
  "weight900": {
    "fontWeight": "900"
  },
  "diandi3": {
    "width": 100,
    "height": "3upx"
  },
  "diandi5": {
    "width": 100,
    "height": "5upx"
  },
  "diandi10": {
    "width": 100,
    "height": "10upx"
  },
  "diandi15": {
    "width": 100,
    "height": "15upx"
  },
  "diandi20": {
    "width": 100,
    "height": "20upx"
  },
  "diandi30": {
    "width": 100,
    "height": "30upx"
  },
  "diandi40": {
    "width": 100,
    "height": "40upx"
  },
  "diandi50": {
    "width": 100,
    "height": "50upx"
  },
  "diandi60": {
    "width": 100,
    "height": "60upx"
  },
  "diandi80": {
    "width": 100,
    "height": "80upx"
  },
  "diandi88": {
    "width": 100,
    "height": "88upx"
  },
  "diandi98": {
    "width": 100,
    "height": "98upx"
  },
  "diandi100": {
    "width": 100,
    "height": "100upx"
  },
  "displayFlex_center": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "displayFlex_fen": {
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "displayFlex_left": {
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "displayFlex_right": {
    "display": "flex",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "Margin010": {
    "marginTop": 0,
    "marginRight": "10upx",
    "marginBottom": 0,
    "marginLeft": "10upx"
  },
  "Margin020": {
    "marginTop": 0,
    "marginRight": "20upx",
    "marginBottom": 0,
    "marginLeft": "20upx"
  },
  "Margin025": {
    "marginTop": 0,
    "marginRight": "25upx",
    "marginBottom": 0,
    "marginLeft": "25upx"
  },
  "Margin030": {
    "marginTop": 0,
    "marginRight": "30upx",
    "marginBottom": 0,
    "marginLeft": "30upx"
  },
  "Margin040": {
    "marginTop": 0,
    "marginRight": "40upx",
    "marginBottom": 0,
    "marginLeft": "40upx"
  },
  "Margin050": {
    "marginTop": 0,
    "marginRight": "50upx",
    "marginBottom": 0,
    "marginLeft": "50upx"
  },
  "Margin060": {
    "marginTop": 0,
    "marginRight": "60upx",
    "marginBottom": 0,
    "marginLeft": "60upx"
  },
  "Margin080": {
    "marginTop": 0,
    "marginRight": "80upx",
    "marginBottom": 0,
    "marginLeft": "80upx"
  },
  "Margin0100": {
    "marginTop": 0,
    "marginRight": "100upx",
    "marginBottom": 0,
    "marginLeft": "100upx"
  },
  "Margin0160": {
    "marginTop": 0,
    "marginRight": "160upx",
    "marginBottom": 0,
    "marginLeft": "160upx"
  },
  "Margin200": {
    "marginTop": "20upx",
    "marginRight": "0upx",
    "marginBottom": "20upx",
    "marginLeft": "0upx"
  },
  "Margin300": {
    "marginTop": "30upx",
    "marginRight": "0upx",
    "marginBottom": "30upx",
    "marginLeft": "0upx"
  },
  "textAlignCenter": {
    "textAlign": "center"
  },
  "textAlignLeft": {
    "textAlign": "left"
  },
  "textAlignRight": {
    "textAlign": "right"
  },
  "fontWeight600": {
    "fontWeight": "600"
  },
  "fontWeight900": {
    "fontWeight": "900"
  },
  "widths": {
    "width": 100
  },
  "heights": {
    "height": 100
  }
}

/***/ }),
/* 4 */
/*!*****************************************************************************!*\
  !*** D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hs-scancode.nvue?vue&type=template&id=e46a71e4&scoped=true&mpType=page */ 5);\n/* harmony import */ var _hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hs-scancode.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./hs-scancode.nvue?vue&type=style&index=0&id=e46a71e4&scoped=true&lang=css&mpType=page */ 13).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./hs-scancode.nvue?vue&type=style&index=0&id=e46a71e4&scoped=true&lang=css&mpType=page */ 13).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e46a71e4\",\n  \"cd24e4b0\",\n  false,\n  _hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/hs-scancode/hs-scancode.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0o7QUFDaEo7QUFDMkU7QUFDTDtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdHQUF3RjtBQUM1SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0dBQXdGO0FBQ2pKOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDZGQUFNO0FBQ1IsRUFBRSw4R0FBTTtBQUNSLEVBQUUsdUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ocy1zY2FuY29kZS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0NmE3MWU0JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ocy1zY2FuY29kZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hzLXNjYW5jb2RlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2hzLXNjYW5jb2RlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNDZhNzFlNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9ocy1zY2FuY29kZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTQ2YTcxZTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlNDZhNzFlNFwiLFxuICBcImNkMjRlNGIwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2hzLXNjYW5jb2RlL2hzLXNjYW5jb2RlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***********************************************************************************************************************!*\
  !*** D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?vue&type=template&id=e46a71e4&scoped=true&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./hs-scancode.nvue?vue&type=template&id=e46a71e4&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_template_id_e46a71e4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?vue&type=template&id=e46a71e4&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["page"], style: { height: _vm.height + "px" } },
        [
          _c("barcode", {
            ref: "barcode",
            staticClass: ["barcode"],
            style: { height: _vm.height + "px" },
            attrs: {
              id: "hs-scan",
              autostart: true,
              frameColor: "#0cff00",
              scanbarColor: "#0cff00",
              background: "#000000",
              filters: _vm.fil
            },
            on: { marked: _vm.success, error: _vm.error }
          }),
          _c(
            "view",
            {
              staticClass: ["back"],
              attrs: { hoverClass: "css-hover" },
              on: { click: _vm.back }
            },
            [
              _c("u-image", {
                staticStyle: { width: "28px", height: "28px" },
                attrs: { src: _vm.scan_img.back }
              })
            ],
            1
          ),
          _c("view", { staticClass: ["msg"] }, [
            _c("view", { staticStyle: { margin: "0 30upx 0 30upx" } }, [
              _c(
                "view",
                { staticClass: ["msg_1"] },
                [
                  _c("u-image", {
                    staticClass: ["img100"],
                    staticStyle: {
                      borderRadius: "30upx",
                      width: "690upx",
                      height: "240upx"
                    },
                    attrs: {
                      src: "../../static/6f25700c29258a9f.jpg",
                      mode: ""
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _c(
            "view",
            {
              staticClass: ["flash"],
              style: { bottom: _vm.height / 2 - 120 + "px" },
              attrs: { hoverClass: "css-hover" },
              on: {
                click: function($event) {
                  _vm.toFlash()
                }
              }
            },
            [
              _c("u-image", {
                staticClass: ["flash-img"],
                staticStyle: { width: "30px", height: "30px" },
                attrs: { src: _vm.flash_img }
              }),
              _c(
                "u-text",
                {
                  staticClass: ["flash-text"],
                  class: _vm.flash ? "flash-on" : ""
                },
                [_vm._v(_vm._s(_vm.flash ? "轻触关闭" : "轻触点亮"))]
              )
            ],
            1
          ),
          _c("view", { staticClass: ["msgs"] }, [
            _c("view", { staticStyle: { margin: "0 30upx 0 30upx" } }, [
              _c(
                "view",
                { staticClass: ["msg_1"] },
                [
                  _c("u-image", {
                    staticClass: ["img100"],
                    staticStyle: {
                      borderRadius: "30upx",
                      width: "690upx",
                      height: "240upx"
                    },
                    attrs: {
                      src: "../../static/6f25700c29258a9f.jpg",
                      mode: ""
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _c(
            "view",
            {
              staticClass: ["album"],
              attrs: { hoverClass: "css-hover" },
              on: { click: _vm.toScan }
            },
            [
              _c("u-image", {
                staticStyle: { height: "26px", width: "26px" },
                attrs: { src: _vm.scan_img.album }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*****************************************************************************************************!*\
  !*** D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./hs-scancode.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStiLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ocy1zY2FuY29kZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ocy1zY2FuY29kZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));var _SCAN_MAPS;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i[\"return\"] != null) _i[\"return\"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _image = {\n  flash_off: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABSElEQVRoge2UMS9DYRRAP20MdOhuEIOIFbXZGAw2xMpiM0vslf6Cpt1MJBabxSLEJuEPiMEiFsSKY3mSG9K+vtfvvit1T3K39+49p2kbguM4/wugBqwrzCJQ0pZfRZe6dsCacsC+akASMQMsKcwC2l8hxxpgA7hWnEPtgJ3Yv9of3BQZcAWcRZpni4CpiHsvPaDHQwMVsBJpZwW4KypgGfhMjr0CtT73DQOn4kM5juXa7eimiHgBZnPuKQMnQv4CGInt2+n4rjj8BEzn2NEUO26BqoZrN4GGEHgAJjK8uyfevQfGFFU7SgwBLfrjEZgsXF5ElICjnPJvwLyZvIiYE1LnQDtlvv8A2tbuIYRfAVs9PP+ePNsswi8VD7DGA6zxAGs8wBoPsMYDrPEAawYt4ADYTpmPvxyQBQ+IAjCaRGSdcWt3xwkhfAHeC7+Yzq/O8QAAAABJRU5ErkJggg==',\n  flash_on: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABi0lEQVRoge2WPyhFYRiHT0n5k4GyuINRWe5gYrqJQiyKzYRJsir/VgMx3JgMjOyGmyxSVqOSwU0pumVg4zHc9+bonO9c5/rOfTu376lv+r2d9/fU+erzPIej/gBTQB5oqTK3BbwBuYiZduAcWLJeNGLpLWX2qsxdydxaxMyhzNzYb2peOi1Lv4DxiLmKwLohn/V9ZzS5xuHLj2X5E9BlmDEKAD3Ai+QHyTcOFugEHqXApmHmTPL5kGxVsgegI/nGIQA54BoYMuTdwCTQFJL1AkfAQPJNGxFgGHgGShbOqYbAMvYoOoEaBBYtCtxrCLRSvgcjFk5f3QVEYhCYsXDatATGLPw+BZXyPonCP8p/AlltgawUqYUT1fIV+HnYxeEdyGh39zzP84CMFIrDtnbvXwA7McqXMDzB1QAmYghcavcN4AS0MQhcAPsEL3gqBF6BZsk20ihw58sWnEDSNKJA0ZetpFEAYBeYA4ppFTDhBKzjBLRxAto4AW2cgDZOQBugH/j4o0Beu6/DIXwDQ+8GvfIPRuwAAAAASUVORK5CYII=',\n  back: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADjElEQVRoge2aW08TQRiGh4QYwg0iSv0fEKAChaRNKychIVj1Qv+UGqOXGhJCDEoiaEwTwqWmGg+pRq64IB5impa0C9vT40W30G6325nulgXDm+xNd3fmfWa+mZ2Zr0Kc6z8V0AH0GleH135sBVwF7gHPgK9AmnqljXtPgbuAz2vTHcAs8BooAjmgYGHcrILxbBHYBGZOvIcM4z8MMzKm7WAKwHdg+iSM9wPrRqUlB8bNKlHukRfA5XaZDwB/Ad1F42bpwB9g1G3z88jHuFMVDJA5N827HTLNVDLqnHVqfpxyy3ulHHCtVfM+yjFf9BCgSHlMXGkFYIP2DlhZHQLrquav423Lm1UEQrLmO4BvnD6AL8h8sYEbKEyXOzs7bG1tUSrJT1L5fJ5YLMbu7q4qxIwMwFskWz+RSNDV1YUQgmg0Sj6fb/qOpmmEw2GEEPT09LC3tycLUAA2mpn3yZoHWF5eRghxdC0tLdlCaJpGKBSqeScWi8lWV4FovNQA7qAw82SzWQYGBqQgrMwHg0GpXquSDty0A3gCKJWYTqfx+/01xqampjg8PDx6Zn9/n9HR0Zpn5ubm0HXlWToHPLID+KxaIkAmkyEQCFhCuGi+oo92AJlWS00mkwwODtYYXVxcJBgM1oVNNptttRqA/UbmLzgpFco9MTExUWPYxZavVqcVwCU3Sm4E4aJ5gN62AVgNaiEEkUiEg4MDN6qABgCOQ6iR+TZA1IeQ00FsFTqRSIShoaGa3+bn552GkvUgNgA+tVKiVcsvLCyQy+XIZDJMTk7W3AuHw0564oMdwGMUd2DJZLLua1wxX1EjCE3TVM3ngId2AFEUlhK6rjf8gJmVSqUYHh6uAy0WlVbtOWDRDqAPhaX0yspKjaHp6WlL83YQ29vbKgB54GJDAAPiDZIr0ng8Tmdnp5T5aoiRkRGEEHR3d6vsCQrAK1vzBoDShiYej7O2tqa0qtQ0jdXVVRKJhPQ7KGxozvaW0oAY52QPspqpBIxJma+CeM7pOFbRgRUl8wZAH/Abb0OpAPzEau0jCTFGee71IpxKlFvf35L5Koize7hrgqikhdqtIm4er1dBBCgftCovYBSkAb9wO8FRBdEPvMR5bsysSu+u0a4UkwnE7SRfgpNI8pkgKmnWTY7TrDLriTzH6aoNvEizWsD4gNvAA+A9kLIwngLeAfeBW3id6G4mztJfDc7lQP8ALX0r5IbFIHwAAAAASUVORK5CYII=',\n  album: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACgklEQVRoge3YO2gUURiG4WgUMeINQ7xgFZDYiIWilSBesbQTxSKFNipi4Q0URIkgWEhsLAUbsUiTwl6xSCFGIWorIghRRLyLyWMxZ/G4zk5ms7szK+wHpznzH/733ZnZOTNdXZ100kknbRv0YR8GcbTgMRh6980GvB+jmFZ+piUs/XnhN2GyXObUTGLTTPDL8DZadBc7MSA5K0WOgdD7bsTzFsuyBC5Exefruu5aGJyNuC5kFT4NRc8wt0DGzGBuxDaeVfg5FA1XzS/GTXwKx59ge6vBqxhuhN5fsooquRrNdeORfzONvYXQJxyXo97pV0cNgf0p8JU8/h8ErmQITKG73QVOZghMFgHfqMBKvKshcKntBcL8Hryvgr+H+YXQdzUoEI6txjHJQ6Wwf5+of2MCZadtBDAPt/AKJ+pY1zYC56rupW0515UvgDX+bEcqGcOcHGvbQuC29BzKsbZcAWxV+w3vNXoKFcAqOZ8DmIOHNeArOV2YAK5Hv9zaHAIHZoCHD+htuQC2VTUenQF+ib9fU7Nyq6UCkkthLKXxvozGQznh4Rc2tFLgYI3GL6TcD1iHH3UIwP2WCKBHcs3XyqmUNSN1wlfyz16rGQLVT9DqfMSqqH7PLOHhOeY1TQC9kn+JmTKCBZKd68sGBGCwmQLDdTT+LrkZG80bLKpX4FsouBHNDeBnE4Bmk4sRx80w9zUVPhRNhKKxaO5MKehJ7kQcj8PcRJbAtWjx4TC3EDuwq+CxE0sDw5GIayhLoM+fd98pyZahH8tLGusDw1RgmsSKmgJBYje+pp/RUvNd3s+Zkq3veMnAcR5gcy74KpEtOC75ElHGGMTGusE76aSTTgrLbyY65XbJ3W1oAAAAAElFTkSuQmCC' };\n\nvar SCAN_MAPS = (_SCAN_MAPS = {}, _defineProperty(_SCAN_MAPS,\n0, \"QR_CODE\"), _defineProperty(_SCAN_MAPS,\n1, \"EAN_13\"), _defineProperty(_SCAN_MAPS,\n2, \"EAN_8\"), _defineProperty(_SCAN_MAPS,\n3, \"AZTEC\"), _defineProperty(_SCAN_MAPS,\n4, \"DATA_MATRIX\"), _defineProperty(_SCAN_MAPS,\n5, \"UPC_A\"), _defineProperty(_SCAN_MAPS,\n6, \"UPC_E\"), _defineProperty(_SCAN_MAPS,\n7, \"CODABAR\"), _defineProperty(_SCAN_MAPS,\n8, \"CODE_39\"), _defineProperty(_SCAN_MAPS,\n9, \"CODE_93\"), _defineProperty(_SCAN_MAPS,\n10, \"CODE_128\"), _defineProperty(_SCAN_MAPS,\n11, \"CODE_25\"), _defineProperty(_SCAN_MAPS,\n13, \"PDF_417\"), _defineProperty(_SCAN_MAPS,\n14, \"RSS_14\"), _defineProperty(_SCAN_MAPS,\n15, \"RSSEXPANDED\"), _SCAN_MAPS);var _default =\n\n{\n  data: {\n    // evalName: \"hs-scancode\", //扫码回调监听事件\n    // flash: false, //手电筒\n    // vibrate: true, //震动\n    // sound: \"none\", //声音 none default\n    // fil: [0, 1, 2], //条码类型\n    // msg: \"扫码\", //提示文本\n    // height: 600, //高度\n    // isDark: null, //状态栏前景色 黑色\n    // fullScreen: false, //是否全屏\n  },\n  computed: {\n    scan_img: function scan_img() {\n      return _image;\n    },\n    flash_img: function flash_img() {\n      return this.flash ? _image.flash_on : _image.flash_off;\n    }\n    // i18n() {\n    //     return this.$t('message');\n    // }\n  },\n  onLoad: function onLoad(p) {var _this = this;\n    /* const user_id = uni.getStorageSync('user_id');\n                                                console.log(user_id);\n                                                if(user_id == \"\" || user_id == 'undefined'){\n                                                \tuni.navigateTo({\n                                                \t    url: '../logon/logon'\n                                                \t});\n                                                }; */\n    //参数\n    if (p.evalName) this.evalName = p.evalName;\n    if (p.flash) this.flash = p.flash == 'true';\n    if (p.vibrate) this.vibrate = p.vibrate == 'true';\n    if (p.sound) this.sound = p.sound;\n    if (p.msg) this.msg = p.msg;\n    if (p.fil) this.fil = p.fil.split(',').map(function (x) {return parseInt(x);});\n    if (p.fullScreen) this.fullScreen = p.fullScreen == 'true';\n\n    this.setFullOrStatus(true);\n    uni.getSystemInfo({\n      success: function success(res) {return _this.height = res.windowHeight;} });\n\n    setTimeout(function () {\n      _this.toStart();\n      _this.webviewInit();\n    }, 100);\n  },\n  onUnload: function onUnload() {\n    this.setFullOrStatus(false);\n    this.toFlash(false);\n    uni.$off(this.evalName);\n  },\n  onBackPress: function onBackPress(e) {\n    if (e.from === 'backbutton') this.back(0);else\n    this.setFullOrStatus(false);\n  },\n\n  methods: {\n    webviewInit: function webviewInit() {var _this2 = this;\n      var pages = getCurrentPages();\n      var currentWebview = pages[pages.length - 1].$getAppWebview();\n      //ios 左滑关闭\n      currentWebview.addEventListener('popGesture', function (e) {\n        var type = e.type,\n        result = e.result;\n        if (type === 'start') {\n          _this2.setFullOrStatus(false);\n          _this2.toFlash(false);\n          _this2.toCancel();\n        } else if (type === 'end' && result) {\n          _this2.back(0);\n        } else if (type === 'end' && !result) {\n          _this2.setFullOrStatus(true);\n          _this2.toStart();\n        }\n      });\n    },\n    success: function success(e) {\n      var date = new Date().getTime();\n\n      //if(e.detail.message != \"\")this->asd();\n      uni.$emit(this.evalName, [null, {\n\n        \"hsScanCode\": true,\n        \"result\": e.detail.message,\n        \"scanType\": SCAN_MAPS[e.detail.code],\n        \"charSet\": \"utf8\",\n        \"path\": e.detail.file || \"\",\n        \"errMsg\": \"scanCode:ok\" }]);\n\n\n      //console.log(e.detail.message),\n      var obj = {\n        \"cmd\": 1000,\n        \"data\": { digital: 1, msg: \"run\" },\n        \"sn\": e.detail.message,\n        \"nonceStr\": date };\n\n      var user_id = uni.getStorageSync('user_id');\n      uni.request({\n        url: \"http://47.98.243.156:8090/api/user/tissue_restrict\",\n        data: {\n          user_id: user_id },\n\n        method: 'POST',\n        dataType: 'json',\n        success: function success(res) {\n          if (res.code == 200) {\n            //console.log(JSON.stringify(obj));\n            uni.request({\n              url: \"http://47.98.243.156:8090/api/equipment/directive_issue\",\n              data: {\n                \"data\": JSON.stringify(obj) },\n\n              method: 'POST',\n              dataType: 'json',\n              success: function success(res) {\n                __f__(\"log\", res, \" at pages/hs-scancode/hs-scancode.nvue:179\");\n                if (res.data.errorCode == 0) {\n                  var objs = {\n                    \"cmdId\": res.data.data,\n                    \"nonceStr\": 16516 };\n\n                  //console.log(JSON.stringify(objs))\n                  uni.request({\n                    url: \"http://47.98.243.156:8090/api/equipment/directive_result\",\n                    data: {\n                      \"data\": JSON.stringify(objs) },\n\n                    method: 'GET',\n                    dataType: 'json',\n                    success: function success(msg) {\n                      __f__(\"log\", msg, \" at pages/hs-scancode/hs-scancode.nvue:194\");\n                      if (msg.data.errorCode == 0) {\n                        uni.request({\n                          url: \"http://47.98.243.156:8090/api/user/get_states\",\n                          data: {\n                            user_id: user_id,\n                            sn: e.detail.message },\n\n                          method: 'POST',\n                          dataType: 'json',\n                          success: function success(data) {\n                            __f__(\"log\", data, \" at pages/hs-scancode/hs-scancode.nvue:205\");\n                          } });\n\n                        uni.redirectTo({\n                          url: '../index/Successful' });\n\n\n                      }\n                    } });\n\n                }\n              } });\n\n\n          } else if (res.code == 200) {\n            uni.showToast({\n              title: '今日已领取',\n              duration: 2000 });\n\n          }\n        } });\n\n\n    },\n    error: function error(e, cancel) {\n      uni.$emit(this.evalName, [{\n        \"hsScanCode\": true,\n        \"errMsg\": cancel === true ? \"scanCode:fail cancel\" : \"scanCode:fail\" },\n      null]);\n      if (!cancel) this.toStart();\n    },\n    asd: function asd() {\n      var obj = {\n        \"cmd\": 1000,\n        \"data\": { digital: 1, msg: \"run\" },\n        \"sn\": \"ookkma\",\n        \"nonceStr\": \"135\" };\n\n      this.$emit('obj', obj);\n\n    },\n    toStart: function toStart() {\n      this.$refs.barcode && this.$refs.barcode.start({\n        conserve: false,\n        vibrate: this.vibrate,\n        sound: this.sound });\n\n    },\n    toCancel: function toCancel() {\n      this.$refs.barcode.cancel();\n    },\n    toFlash: function toFlash(t) {\n      this.flash = t == null ? !this.flash : t;\n      this.$refs.barcode.setFlash(this.flash);\n    },\n    toScan: function () {var _toScan = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _this3 = this;var _yield$uni$chooseImag, _yield$uni$chooseImag2, e, res, barcodeModule;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                this.toCancel();_context.next = 3;return (\n                  uni.chooseImage({\n                    count: 1,\n                    sizeType: ['original'],\n                    sourceType: ['album'] }));case 3:_yield$uni$chooseImag = _context.sent;_yield$uni$chooseImag2 = _slicedToArray(_yield$uni$chooseImag, 2);e = _yield$uni$chooseImag2[0];res = _yield$uni$chooseImag2[1];\n\n                if (res && res.tempFilePaths.length > 0) {\n                  barcodeModule = __webpack_provided_uni_dot_requireNativePlugin('barcodeScan');\n                  barcodeModule.scan(res.tempFilePaths[0], function (e) {\n                    if (e.detail.type === \"success\") {\n                      _this3.success(e);\n                    } else {\n                      _this3.error(e);\n                    }\n                    _this3.toStart();\n                  });\n                } else {\n                  this.toStart();\n                }case 8:case \"end\":return _context.stop();}}}, _callee, this);}));function toScan() {return _toScan.apply(this, arguments);}return toScan;}(),\n\n    back: function back(t) {\n      var p = {\n        delta: 1 };\n\n      this.setFullOrStatus(false);\n      this.toCancel();\n      this.toFlash(false);\n      if (t !== 0) uni.navigateBack(p);\n    },\n    setFullOrStatus: function setFullOrStatus(t) {\n      if (this.isDark == null) this.isDark = this.getStatusBarStyle() !== 'light';\n      this.isDark && plus.navigator.setStatusBarStyle(t ? \"light\" : \"dark\");\n      this.fullScreen && plus.navigator.setFullscreen(t);\n    },\n    getStatusBarStyle: function getStatusBarStyle() {\n      var style = plus.navigator.getStatusBarStyle();\n      if (style === 'UIStatusBarStyleBlackTranslucent' || style === 'UIStatusBarStyleBlackOpaque' || style === 'null') {\n        style = 'light';\n      } else if (style === 'UIStatusBarStyleDefault') {\n        style = 'dark';\n      }\n      return style;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaHMtc2NhbmNvZGUvaHMtc2NhbmNvZGUubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQSx5aUJBREE7QUFFQSxnb0JBRkE7QUFHQSx3eUNBSEE7QUFJQSxxOEJBSkE7O0FBTUE7QUFDQSxDQURBLEVBQ0EsU0FEQTtBQUVBLENBRkEsRUFFQSxRQUZBO0FBR0EsQ0FIQSxFQUdBLE9BSEE7QUFJQSxDQUpBLEVBSUEsT0FKQTtBQUtBLENBTEEsRUFLQSxhQUxBO0FBTUEsQ0FOQSxFQU1BLE9BTkE7QUFPQSxDQVBBLEVBT0EsT0FQQTtBQVFBLENBUkEsRUFRQSxTQVJBO0FBU0EsQ0FUQSxFQVNBLFNBVEE7QUFVQSxDQVZBLEVBVUEsU0FWQTtBQVdBLEVBWEEsRUFXQSxVQVhBO0FBWUEsRUFaQSxFQVlBLFNBWkE7QUFhQSxFQWJBLEVBYUEsU0FiQTtBQWNBLEVBZEEsRUFjQSxRQWRBO0FBZUEsRUFmQSxFQWVBLGFBZkEsZTs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBLEdBREE7QUFZQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxhQUpBLHVCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBLEdBWkE7QUF1QkEsUUF2QkEsa0JBdUJBLENBdkJBLEVBdUJBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUhBLEVBR0EsR0FIQTtBQUlBLEdBaERBO0FBaURBLFVBakRBLHNCQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBckRBO0FBc0RBLGFBdERBLHVCQXNEQSxDQXREQSxFQXNEQTtBQUNBO0FBQ0E7QUFDQSxHQXpEQTs7QUEyREE7QUFDQSxlQURBLHlCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BYkE7QUFjQSxLQW5CQTtBQW9CQSxXQXBCQSxtQkFvQkEsQ0FwQkEsRUFvQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUZBO0FBR0Esa0NBSEE7QUFJQSw0Q0FKQTtBQUtBLHlCQUxBO0FBTUEsbUNBTkE7QUFPQSwrQkFQQTs7O0FBVUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsMENBRkE7QUFHQSw4QkFIQTtBQUlBLHdCQUpBOztBQU1BO0FBQ0E7QUFDQSxpRUFEQTtBQUVBO0FBQ0EsMEJBREEsRUFGQTs7QUFLQSxzQkFMQTtBQU1BLHdCQU5BO0FBT0EsZUFQQSxtQkFPQSxHQVBBLEVBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFEQTtBQUVBO0FBQ0EsMkNBREEsRUFGQTs7QUFLQSw0QkFMQTtBQU1BLDhCQU5BO0FBT0EscUJBUEEsbUJBT0EsR0FQQSxFQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBREE7QUFFQSxxQ0FGQTs7QUFJQTtBQUNBO0FBQ0EsbUZBREE7QUFFQTtBQUNBLGtEQURBLEVBRkE7O0FBS0EsaUNBTEE7QUFNQSxvQ0FOQTtBQU9BLDJCQVBBLG1CQU9BLEdBUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQURBO0FBRUE7QUFDQSw0Q0FEQTtBQUVBLGdEQUZBLEVBRkE7O0FBTUEsd0NBTkE7QUFPQSwwQ0FQQTtBQVFBLGlDQVJBLG1CQVFBLElBUkEsRUFRQTtBQUNBO0FBQ0EsMkJBVkE7O0FBWUE7QUFDQSxvREFEQTs7O0FBSUE7QUFDQSxxQkEzQkE7O0FBNkJBO0FBQ0EsZUE3Q0E7OztBQWdEQSxXQWxEQSxNQWtEQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSw0QkFGQTs7QUFJQTtBQUNBLFNBaEVBOzs7QUFtRUEsS0E3R0E7QUE4R0EsU0E5R0EsaUJBOEdBLENBOUdBLEVBOEdBLE1BOUdBLEVBOEdBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDRFQUZBO0FBR0EsVUFIQTtBQUlBO0FBQ0EsS0FwSEE7QUFxSEE7QUFDQTtBQUNBLG1CQURBO0FBRUEsMENBRkE7QUFHQSxzQkFIQTtBQUlBLHlCQUpBOztBQU1BOztBQUVBLEtBOUhBO0FBK0hBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLDZCQUZBO0FBR0EseUJBSEE7O0FBS0EsS0FySUE7QUFzSUE7QUFDQTtBQUNBLEtBeElBO0FBeUlBO0FBQ0E7QUFDQTtBQUNBLEtBNUlBO0FBNklBO0FBQ0EsZ0NBREE7QUFFQTtBQUNBLDRCQURBO0FBRUEsMENBRkE7QUFHQSx5Q0FIQSxHQUZBLGlIQUVBLENBRkEsNkJBRUEsR0FGQTs7QUFPQTtBQUNBLCtCQURBLEdBQ0EsNkRBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBUEE7QUFRQSxpQkFWQSxNQVVBO0FBQ0E7QUFDQSxpQkFuQkEsNElBN0lBOztBQWtLQSxRQWxLQSxnQkFrS0EsQ0FsS0EsRUFrS0E7QUFDQTtBQUNBLGdCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExS0E7QUEyS0EsbUJBM0tBLDJCQTJLQSxDQTNLQSxFQTJLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0tBO0FBZ0xBLHFCQWhMQSwrQkFnTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhMQSxFQTNEQSxFIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwYWdlXCIgOnN0eWxlPVwie2hlaWdodDogaGVpZ2h0KydweCd9XCI+XHJcblx0XHQ8YmFyY29kZSA6c3R5bGU9XCJ7aGVpZ2h0OiBoZWlnaHQrJ3B4J31cIiBpZD1cImhzLXNjYW5cIiBjbGFzcz1cImJhcmNvZGVcIiByZWY9XCJiYXJjb2RlXCIgYXV0b3N0YXJ0IGZyYW1lQ29sb3I9XCIjMGNmZjAwXCJcclxuXHRcdCBzY2FuYmFyQ29sb3I9XCIjMGNmZjAwXCIgYmFja2dyb3VuZD1cIiMwMDAwMDBcIiA6ZmlsdGVycz1cImZpbFwiIEBtYXJrZWQ9XCJzdWNjZXNzXCIgQGVycm9yPVwiZXJyb3JcIj5cclxuXHRcdDwvYmFyY29kZT5cclxuXHRcdDx2aWV3IEBjbGljaz1cImJhY2tcIiBjbGFzcz1cImJhY2tcIiBob3Zlci1jbGFzcz1cImNzcy1ob3ZlclwiPlxyXG5cdFx0XHQ8aW1hZ2UgOnNyYz1cInNjYW5faW1nLmJhY2tcIiBzdHlsZT1cIndpZHRoOiAyOHB4O2hlaWdodDogMjhweDtcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtc2dcIj5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW46IDAgMzB1cHggMCAzMHVweFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibXNnXzFcIj48aW1hZ2UgY2xhc3M9XCJpbWcxMDBcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDMwdXB4O3dpZHRoOiA2OTB1cHg7aGVpZ2h0OiAyNDB1cHg7XCIgc3JjPVwiLi4vLi4vc3RhdGljLzZmMjU3MDBjMjkyNThhOWYuanBnXCIgbW9kZT1cIlwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZsYXNoXCIgOnN0eWxlPVwie2JvdHRvbTogKGhlaWdodC8yIC0gMTIwKSsncHgnfVwiIEBjbGljaz1cInRvRmxhc2goKVwiIGhvdmVyLWNsYXNzPVwiY3NzLWhvdmVyXCI+XHJcblx0XHRcdDxpbWFnZSBjbGFzcz1cImZsYXNoLWltZ1wiIDpzcmM9XCJmbGFzaF9pbWdcIiBzdHlsZT1cIndpZHRoOiAzMHB4O2hlaWdodDogMzBweDtcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImZsYXNoLXRleHRcIiA6Y2xhc3M9XCJmbGFzaD8nZmxhc2gtb24nOicnXCI+e3tmbGFzaD9cIui9u+inpuWFs+mXrVwiOlwi6L276Kem54K55LquXCJ9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtc2dzXCI+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luOiAwIDMwdXB4IDAgMzB1cHhcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1zZ18xXCI+PGltYWdlIGNsYXNzPVwiaW1nMTAwXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAzMHVweDt3aWR0aDogNjkwdXB4O2hlaWdodDogMjQwdXB4O1wiIHNyYz1cIi4uLy4uL3N0YXRpYy82ZjI1NzAwYzI5MjU4YTlmLmpwZ1wiIG1vZGU9XCJcIj48L2ltYWdlPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PiBcclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFxyXG5cdFx0PHZpZXcgQGNsaWNrPVwidG9TY2FuXCIgY2xhc3M9XCJhbGJ1bVwiIGhvdmVyLWNsYXNzPVwiY3NzLWhvdmVyXCI+XHJcblx0XHRcdDxpbWFnZSA6c3JjPVwic2Nhbl9pbWcuYWxidW1cIiBzdHlsZT1cImhlaWdodDogMjZweDt3aWR0aDogMjZweDtcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgX2ltYWdlID0ge1xyXG5cdFx0Zmxhc2hfb2ZmOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQlNFbEVRVlJvZ2UyVU1TOURZUlJBUDIwTWRPaHVFSU9JRmJYWkdBdzJ4TXBpTTB2c2xmNkNwdDFNSkJhYnhTTEVKdUVQaU1FaUZzU0tZM21TRzlLK3Z0ZnZ2aXQxVDNLMzkrNDlwMmtiZ3VNNC93dWdCcXdyekNKUTBwWmZSWmU2ZHNDYWNzQytha0FTTVFNc0tjd0MybDhoeHhwZ0E3aFduRVB0Z0ozWXY5b2YzQlFaY0FXY1JacG5pNENwaUhzdlBhREhRd01Wc0JKcFp3VzRLeXBnR2ZoTWpyMEN0VDczRFFPbjRrTTVqdVhhN2VpbWlIZ0JablB1S1FNblF2NENHSW50MituNHJqajhCRXpuMk5FVU8yNkJxb1pyTjRHR0VIZ0FKaks4dXlmZXZRZkdGRlU3U2d3QkxmcmpFWmdzWEY1RWxJQ2puUEp2d0x5WnZJaVlFMUxuUUR0bHZ2OEEydGJ1SVlSZkFWczlQUCtlUE5zc3dpOFZEN0RHQTZ6eEFHczh3Qm9Qc01ZRHJQRUFhd1l0NEFEWVRwbVB2eHlRQlErSUFqQ2FSR1NkY1d0M3h3a2hmQUhlQzcrWXpxL084UUFBQUFCSlJVNUVya0pnZ2c9PScsXHJcblx0XHRmbGFzaF9vbjogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUJpMGxFUVZSb2dlMldQeWhGWVJpSFQwbjVrNEd5dUlOUldlNWdZcnFKUWl5S3pZUkpzaXIvVmdNeDNKZ01qT3lHbXl4U1ZxT1N3VTBwdW1WZzR6SGM5K2Jvbk85YzUvck9mVHUzNzZsdityMmQ5L2ZVK2VyelBJZWovZ0JUUUI1b3FUSzNCYndCdVlpWmR1QWNXTEplTkdMcExXWDJxc3hkeWR4YXhNeWh6TnpZYjJwZU9pMUx2NER4aUxtS3dMb2huL1Y5WnpTNXh1SExqMlg1RTlCbG1ERUtBRDNBaStRSHlUY09GdWdFSHFYQXBtSG1UUEw1a0d4VnNnZWdJL25HSVFBNTRCb1lNdVRkd0NUUUZKTDFBa2ZBUVBKTkd4RmdHSGdHU2hiT3FZYkFNdllvT29FYUJCWXRDdHhyQ0xSU3ZnY2pGazVmM1FWRVloQ1lzWERhdEFUR0xQdytCWlh5UG9uQ1A4cC9BbGx0Z2F3VXFZVVQxZklWK0huWXhlRWR5R2gzOXp6UDg0Q01GSXJEdG5idlh3QTdNY3FYTUR6QjFRQW1ZZ2hjYXZjTjRBUzBNUWhjQVBzRUwzZ3FCRjZCWnNrMjBpaHc1OHNXbkVEU05LSkEwWmV0cEZFQVlCZVlBNHBwRlREaEJLempCTFJ4QXRvNEFXMmNnRFpPUUJ1Z0gvajRvMEJldTYvRElYd0RRKzhHdmZJUFJ1d0FBQUFBU1VWT1JLNUNZSUk9JyxcclxuXHRcdGJhY2s6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFEakVsRVFWUm9nZTJhVzA4VFFSaUdoNFFZd2cwaVN2MGZFS0FDaGFSTkt5Y2hJVmoxUXYrVUdxT1hHaEpDREVvaWFFd1R3cVdtR2crcFJxNjRJQjVpbXBhMEM5dlQ0MFczMEc2MzI1bnVsZ1hEbSt4TmQzZm1mV2ErbVoyWnIwS2M2ejhWMEFIMEdsZUgxMzVzQlZ3RjdnSFBnSzlBbW5xbGpYdFBnYnVBejJ2VEhjQXM4Qm9vQWptZ1lHSGNySUx4YkJIWUJHWk92SWNNNHo4TU16S203V0FLd0hkZytpU005d1ByUnFVbEI4Yk5LbEh1a1JmQTVYYVpEd0IvQWQxRjQyYnB3QjlnMUczejg4akh1Rk1WREpBNU44MjdIVExOVkRMcW5IVnFmcHh5eTN1bEhIQ3RWZk0reWpGZjlCQ2dTSGxNWEdrRllJUDJEbGhaSFFMcnF1YXY0MjNMbTFVRVFyTG1PNEJ2bkQ2QUw4aDhzWUViS0V5WE96czdiRzF0VVNySlQxTDVmSjVZTE1idTdxNHF4SXdNd0Zza1d6K1JTTkRWMVlVUWdtZzBTajZmYi9xT3BtbUV3MkdFRVBUMDlMQzN0eWNMVUFBMm1wbjN5Wm9IV0Y1ZVJnaHhkQzB0TGRsQ2FKcEdLQlNxZVNjV2k4bFdWNEZvdk5RQTdxQXc4MlN6V1FZR0JxUWdyTXdIZzBHcFhxdVNEdHkwQTNnQ0tKV1lUcWZ4Ky8wMXhxYW1wamc4UER4NlpuOS9uOUhSMFpwbjV1Ym0wSFhsV1RvSFBMSUQrS3hhSWtBbWt5RVFDRmhDdUdpK29vOTJBSmxXUzAwbWt3d09EdFlZWFZ4Y0pCZ00xb1ZOTnB0dHRScUEvVWJtTHpncEZjbzlNVEV4VVdQWXhaYXZWcWNWd0NVM1NtNEU0YUo1Z042MkFWZ05haUVFa1VpRWc0TURONnFBQmdDT1E2aVIrVFpBMUllUTAwRnNGVHFSU0lTaG9hR2EzK2JuNTUyR2t2VWdOZ0ErdFZLaVZjc3ZMQ3lReStYSVpESk1UazdXM0F1SHcwNTY0b01kd0dNVWQyREpaTEx1YTF3eFgxRWpDRTNUVk0zbmdJZDJBRkVVbGhLNnJqZjhnSm1WU3FVWUhoNnVBeTBXbFZidE9XRFJEcUFQaGFYMHlzcEtqYUhwNldsTDgzWVEyOXZiS2dCNTRHSkRBQVBpRFpJcjBuZzhUbWRucDVUNWFvaVJrUkdFRUhSM2Q2dnNDUXJBSzF2ekJvRFNoaVllajdPMnRxYTBxdFEwamRYVlZSS0poUFE3S0d4b3p2YVcwb0FZNTJRUHNwcXBCSXhKbWErQ2VNN3BPRmJSZ1JVbDh3WkFIL0FiYjBPcEFQekVhdTBqQ1RGR2VlNzFJcHhLbEZ2ZjM1TDVLb2l6ZTdocmdxaWtoZHF0SW00ZXIxZEJCQ2dmdENvdllCU2tBYjl3TzhGUkJkRVB2TVI1YnN5c1N1K3UwYTRVa3duRTdTUmZncE5JOHBrZ0ttbldUWTdUckRMcmlUekg2YW9OdkVpeldzRDRnTnZBQStBOWtMSXduZ0xlQWZlQlczaWQ2RzRtenRKZkRjN2xRUDhBTFgwcjVJYkZJSHdBQUFBQVNVVk9SSzVDWUlJPScsXHJcblx0XHRhbGJ1bTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUNna2xFUVZSb2dlM1lPMmdVVVJpRzRXZ1VNZUlOUTd4Z0ZaRFlpSVdpbFNCZXNiUVR4U0tGTmlwaTRRMFVSSWtnV0Voc0xBVWJzVWlUd2w2eFNDRkdJV29ySWdoUlJMeUx5V014Wi9HNHprNW1zN3N6Syt3SHB6bnpILzczM1puWk9UTmRYWjEwMGtrbmJSdjBZUjhHY2JUZ01SaDY5ODBHdkIram1GWitwaVVzL1huaE4yR3lYT2JVVEdMVFRQREw4RFphZEJjN01TQTVLMFdPZ2REN2JzVHpGc3V5QkM1RXhlZnJ1dTVhR0p5TnVDNWtGVDROUmM4d3QwREd6R0J1eERhZVZmZzVGQTFYelMvR1RYd0t4NTlnZTZ2QnF4aHVoTjVmc29vcXVSck5kZU9SZnpPTnZZWFFKeHlYbzk3cFYwY05nZjBwOEpVOC9oOEVybVFJVEtHNzNRVk9aZ2hNRmdIZnFNQkt2S3NoY0tudEJjTDhIcnl2Z3IrSCtZWFFkelVvRUk2dHhqSEpRNld3ZjUrb2YyTUNaYWR0QkRBUHQvQUtKK3BZMXpZQzU2cnVwVzA1MTVVdmdEWCtiRWNxR2NPY0hHdmJRdUMyOUJ6S3NiWmNBV3hWK3czdk5Yb0tGY0FxT1o4RG1JT0hOZUFyT1YyWUFLNUh2OXphSEFJSFpvQ0hEK2h0dVFDMlZUVWVuUUYraWI5ZlU3TnlxNlVDa2t0aExLWHh2b3pHUXpuaDRSYzJ0RkxnWUkzR0w2VGNEMWlISDNVSXdQMldDS0JIY3MzWHlxbVVOU04xd2xmeXoxNnJHUUxWVDlEcWZNU3FxSDdQTE9IaE9lWTFUUUM5a24rSm1US0NCWktkNjhzR0JHQ3dtUUxEZFRUK0xya1pHODBiTEtwWDRGc291QkhORGVCbkU0Qm1rNHNSeDgwdzl6VVZQaFJOaEtLeGFPNU1LZWhKN2tRY2o4UGNSSmJBdFdqeDRUQzNFRHV3cStDeEUwc0R3NUdJYXloTG9NK2ZkOThweVphaEg4dExHdXNEdzFSZ21zU0ttZ0pCWWplK3BwL1JVdk5kM3MrWmtxM3ZlTW5BY1I1Z2N5NzRLcEV0T0M3NUVsSEdHTVRHdXNFNzZhU1RUZ3JMYnlZNjVYYkozVzFvQUFBQUFFbEZUa1N1UW1DQycsXHJcblx0fTtcclxuXHRjb25zdCBTQ0FOX01BUFMgPSB7XHJcblx0XHRbMF06IFwiUVJfQ09ERVwiLFxyXG5cdFx0WzFdOiBcIkVBTl8xM1wiLFxyXG5cdFx0WzJdOiBcIkVBTl84XCIsXHJcblx0XHRbM106IFwiQVpURUNcIixcclxuXHRcdFs0XTogXCJEQVRBX01BVFJJWFwiLFxyXG5cdFx0WzVdOiBcIlVQQ19BXCIsXHJcblx0XHRbNl06IFwiVVBDX0VcIixcclxuXHRcdFs3XTogXCJDT0RBQkFSXCIsXHJcblx0XHRbOF06IFwiQ09ERV8zOVwiLFxyXG5cdFx0WzldOiBcIkNPREVfOTNcIixcclxuXHRcdFsxMF06IFwiQ09ERV8xMjhcIixcclxuXHRcdFsxMV06IFwiQ09ERV8yNVwiLFxyXG5cdFx0WzEzXTogXCJQREZfNDE3XCIsXHJcblx0XHRbMTRdOiBcIlJTU18xNFwiLFxyXG5cdFx0WzE1XTogXCJSU1NFWFBBTkRFRFwiXHJcblx0fTtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdC8vIGV2YWxOYW1lOiBcImhzLXNjYW5jb2RlXCIsIC8v5omr56CB5Zue6LCD55uR5ZCs5LqL5Lu2XHJcblx0XHRcdC8vIGZsYXNoOiBmYWxzZSwgLy/miYvnlLXnrZJcclxuXHRcdFx0Ly8gdmlicmF0ZTogdHJ1ZSwgLy/pnIfliqhcclxuXHRcdFx0Ly8gc291bmQ6IFwibm9uZVwiLCAvL+WjsOmfsyBub25lIGRlZmF1bHRcclxuXHRcdFx0Ly8gZmlsOiBbMCwgMSwgMl0sIC8v5p2h56CB57G75Z6LXHJcblx0XHRcdC8vIG1zZzogXCLmiavnoIFcIiwgLy/mj5DnpLrmlofmnKxcclxuXHRcdFx0Ly8gaGVpZ2h0OiA2MDAsIC8v6auY5bqmXHJcblx0XHRcdC8vIGlzRGFyazogbnVsbCwgLy/nirbmgIHmoI/liY3mma/oibIg6buR6ImyXHJcblx0XHRcdC8vIGZ1bGxTY3JlZW46IGZhbHNlLCAvL+aYr+WQpuWFqOWxj1xyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHNjYW5faW1nKCkge1xyXG5cdFx0XHRcdHJldHVybiBfaW1hZ2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Zmxhc2hfaW1nKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZsYXNoID8gX2ltYWdlLmZsYXNoX29uIDogX2ltYWdlLmZsYXNoX29mZjtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gaTE4bigpIHtcclxuXHRcdFx0Ly8gICAgIHJldHVybiB0aGlzLiR0KCdtZXNzYWdlJyk7XHJcblx0XHRcdC8vIH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQocCkge1xyXG5cdFx0XHQvKiBjb25zdCB1c2VyX2lkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyX2lkJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHVzZXJfaWQpO1xyXG5cdFx0XHRpZih1c2VyX2lkID09IFwiXCIgfHwgdXNlcl9pZCA9PSAndW5kZWZpbmVkJyl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdCAgICB1cmw6ICcuLi9sb2dvbi9sb2dvbidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTsgKi9cclxuXHRcdFx0Ly/lj4LmlbBcclxuXHRcdFx0aWYgKHAuZXZhbE5hbWUpIHRoaXMuZXZhbE5hbWUgPSBwLmV2YWxOYW1lO1xyXG5cdFx0XHRpZiAocC5mbGFzaCkgdGhpcy5mbGFzaCA9IHAuZmxhc2ggPT0gJ3RydWUnO1xyXG5cdFx0XHRpZiAocC52aWJyYXRlKSB0aGlzLnZpYnJhdGUgPSBwLnZpYnJhdGUgPT0gJ3RydWUnO1xyXG5cdFx0XHRpZiAocC5zb3VuZCkgdGhpcy5zb3VuZCA9IHAuc291bmQ7XHJcblx0XHRcdGlmIChwLm1zZykgdGhpcy5tc2cgPSBwLm1zZztcclxuXHRcdFx0aWYgKHAuZmlsKSB0aGlzLmZpbCA9IHAuZmlsLnNwbGl0KCcsJykubWFwKHggPT4gcGFyc2VJbnQoeCkpO1xyXG5cdFx0XHRpZiAocC5mdWxsU2NyZWVuKSB0aGlzLmZ1bGxTY3JlZW4gPSBwLmZ1bGxTY3JlZW4gPT0gJ3RydWUnO1xyXG5cclxuXHRcdFx0dGhpcy5zZXRGdWxsT3JTdGF0dXModHJ1ZSk7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4gdGhpcy5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnRvU3RhcnQoKTtcclxuXHRcdFx0XHR0aGlzLndlYnZpZXdJbml0KCk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdHRoaXMuc2V0RnVsbE9yU3RhdHVzKGZhbHNlKTtcclxuXHRcdFx0dGhpcy50b0ZsYXNoKGZhbHNlKTtcclxuXHRcdFx0dW5pLiRvZmYodGhpcy5ldmFsTmFtZSk7XHJcblx0XHR9LFxyXG5cdFx0b25CYWNrUHJlc3MoZSkge1xyXG5cdFx0XHRpZiAoZS5mcm9tID09PSAnYmFja2J1dHRvbicpIHRoaXMuYmFjaygwKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNldEZ1bGxPclN0YXR1cyhmYWxzZSk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHdlYnZpZXdJbml0KCkge1xyXG5cdFx0XHRcdHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50V2VidmlldyA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLiRnZXRBcHBXZWJ2aWV3KCk7XHJcblx0XHRcdFx0Ly9pb3Mg5bem5ruR5YWz6ZetXHJcblx0XHRcdFx0Y3VycmVudFdlYnZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncG9wR2VzdHVyZScsIGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdHlwZSA9IGUudHlwZSxcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gZS5yZXN1bHQ7XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gJ3N0YXJ0Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldEZ1bGxPclN0YXR1cyhmYWxzZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMudG9GbGFzaChmYWxzZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMudG9DYW5jZWwoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gJ2VuZCcgJiYgcmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYmFjaygwKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSAnZW5kJyAmJiAhcmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0RnVsbE9yU3RhdHVzKHRydWUpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvU3RhcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzcyhlKSB7XHJcblx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL2lmKGUuZGV0YWlsLm1lc3NhZ2UgIT0gXCJcIil0aGlzLT5hc2QoKTtcclxuXHRcdFx0XHR1bmkuJGVtaXQodGhpcy5ldmFsTmFtZSwgW251bGwsIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XCJoc1NjYW5Db2RlXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInJlc3VsdFwiOiBlLmRldGFpbC5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XCJzY2FuVHlwZVwiOiBTQ0FOX01BUFNbZS5kZXRhaWwuY29kZV0sXHJcblx0XHRcdFx0XHRcImNoYXJTZXRcIjogXCJ1dGY4XCIsXHJcblx0XHRcdFx0XHRcInBhdGhcIjogZS5kZXRhaWwuZmlsZSB8fCBcIlwiLFxyXG5cdFx0XHRcdFx0XCJlcnJNc2dcIjogXCJzY2FuQ29kZTpva1wiLFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fV0pO1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coZS5kZXRhaWwubWVzc2FnZSksXHJcblx0XHRcdFx0bGV0IG9iaiA9IHtcclxuXHRcdFx0XHRcdFwiY21kXCI6IDEwMDAsXHJcblx0XHRcdFx0XHRcImRhdGFcIjoge2RpZ2l0YWw6IDEsbXNnOiBcInJ1blwiIH0sIFxyXG5cdFx0XHRcdFx0XCJzblwiOiBlLmRldGFpbC5tZXNzYWdlLCBcclxuXHRcdFx0XHRcdFwibm9uY2VTdHJcIjogZGF0ZVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc3QgdXNlcl9pZCA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcl9pZCcpO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDpcImh0dHA6Ly80Ny45OC4yNDMuMTU2OjgwOTAvYXBpL3VzZXIvdGlzc3VlX3Jlc3RyaWN0XCIsXHJcblx0XHRcdFx0XHRkYXRhOntcclxuXHRcdFx0XHRcdFx0dXNlcl9pZDp1c2VyX2lkLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6J2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYocmVzLmNvZGUgPT0gMjAwKXtcclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDpcImh0dHA6Ly80Ny45OC4yNDMuMTU2OjgwOTAvYXBpL2VxdWlwbWVudC9kaXJlY3RpdmVfaXNzdWVcIixcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImRhdGFcIiA6SlNPTi5zdHJpbmdpZnkob2JqKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGU6J2pzb24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5lcnJvckNvZGUgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IG9ianMgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImNtZElkXCI6cmVzLmRhdGEuZGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwibm9uY2VTdHJcIjoxNjUxNixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvYmpzKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6XCJodHRwOi8vNDcuOTguMjQzLjE1Njo4MDkwL2FwaS9lcXVpcG1lbnQvZGlyZWN0aXZlX3Jlc3VsdFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiZGF0YVwiOkpTT04uc3RyaW5naWZ5KG9ianMpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZTonanNvbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKG1zZykge1x0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobXNnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYobXNnLmRhdGEuZXJyb3JDb2RlID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybDpcImh0dHA6Ly80Ny45OC4yNDMuMTU2OjgwOTAvYXBpL3VzZXIvZ2V0X3N0YXRlc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YTp7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfaWQ6dXNlcl9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c246ZS5kZXRhaWwubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZTonanNvbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnJlZGlyZWN0VG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgICB1cmw6ICcuLi9pbmRleC9TdWNjZXNzZnVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYocmVzLmNvZGUgPT0gMjAwKXtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LuK5pel5bey6aKG5Y+WJyxcclxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IoZSwgY2FuY2VsKSB7XHJcblx0XHRcdFx0dW5pLiRlbWl0KHRoaXMuZXZhbE5hbWUsIFt7XHJcblx0XHRcdFx0XHRcImhzU2NhbkNvZGVcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwiZXJyTXNnXCI6IGNhbmNlbCA9PT0gdHJ1ZSA/IFwic2NhbkNvZGU6ZmFpbCBjYW5jZWxcIiA6IFwic2NhbkNvZGU6ZmFpbFwiXHJcblx0XHRcdFx0fSwgbnVsbF0pO1xyXG5cdFx0XHRcdGlmICghY2FuY2VsKSB0aGlzLnRvU3RhcnQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXNkOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCBvYmogPSB7XHJcblx0XHRcdFx0XHRcImNtZFwiOiAxMDAwLFxyXG5cdFx0XHRcdFx0XCJkYXRhXCI6IHtkaWdpdGFsOiAxLG1zZzogXCJydW5cIiB9LCBcclxuXHRcdFx0XHRcdFwic25cIjogXCJvb2trbWFcIiwgXHJcblx0XHRcdFx0XHRcIm5vbmNlU3RyXCI6IFwiMTM1XCIsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ29iaicsb2JqKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1N0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUgJiYgdGhpcy4kcmVmcy5iYXJjb2RlLnN0YXJ0KHtcclxuXHRcdFx0XHRcdGNvbnNlcnZlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHZpYnJhdGU6IHRoaXMudmlicmF0ZSxcclxuXHRcdFx0XHRcdHNvdW5kOiB0aGlzLnNvdW5kLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0NhbmNlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5iYXJjb2RlLmNhbmNlbCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0ZsYXNoOiBmdW5jdGlvbih0KSB7XHJcblx0XHRcdFx0dGhpcy5mbGFzaCA9IHQgPT0gbnVsbCA/ICF0aGlzLmZsYXNoIDogdDtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUuc2V0Rmxhc2godGhpcy5mbGFzaCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvU2NhbjogYXN5bmMgZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRcdHRoaXMudG9DYW5jZWwoKTtcclxuXHRcdFx0XHRjb25zdCBbZSwgcmVzXSA9IGF3YWl0IHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdFx0XHRjb3VudDogMSxcclxuXHRcdFx0XHRcdHNpemVUeXBlOiBbJ29yaWdpbmFsJ10sXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJ11cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAocmVzICYmIHJlcy50ZW1wRmlsZVBhdGhzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGNvbnN0IGJhcmNvZGVNb2R1bGUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYmFyY29kZVNjYW4nKTtcclxuXHRcdFx0XHRcdGJhcmNvZGVNb2R1bGUuc2NhbihyZXMudGVtcEZpbGVQYXRoc1swXSwgZSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlLmRldGFpbC50eXBlID09PSBcInN1Y2Nlc3NcIikge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3VjY2VzcyhlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yKGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMudG9TdGFydCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMudG9TdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YmFjayh0KSB7XHJcblx0XHRcdFx0Y29uc3QgcCA9IHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0RnVsbE9yU3RhdHVzKGZhbHNlKTtcclxuXHRcdFx0XHR0aGlzLnRvQ2FuY2VsKCk7XHJcblx0XHRcdFx0dGhpcy50b0ZsYXNoKGZhbHNlKTtcclxuXHRcdFx0XHRpZiAodCAhPT0gMCkgdW5pLm5hdmlnYXRlQmFjayhwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0RnVsbE9yU3RhdHVzKHQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0RhcmsgPT0gbnVsbCkgdGhpcy5pc0RhcmsgPSB0aGlzLmdldFN0YXR1c0JhclN0eWxlKCkgIT09ICdsaWdodCc7XHJcblx0XHRcdFx0dGhpcy5pc0RhcmsgJiYgcGx1cy5uYXZpZ2F0b3Iuc2V0U3RhdHVzQmFyU3R5bGUodCA/IFwibGlnaHRcIiA6IFwiZGFya1wiKTtcclxuXHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW4gJiYgcGx1cy5uYXZpZ2F0b3Iuc2V0RnVsbHNjcmVlbih0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTdGF0dXNCYXJTdHlsZSgpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSBwbHVzLm5hdmlnYXRvci5nZXRTdGF0dXNCYXJTdHlsZSgpXHJcblx0XHRcdFx0aWYgKHN0eWxlID09PSAnVUlTdGF0dXNCYXJTdHlsZUJsYWNrVHJhbnNsdWNlbnQnIHx8IHN0eWxlID09PSAnVUlTdGF0dXNCYXJTdHlsZUJsYWNrT3BhcXVlJyB8fCBzdHlsZSA9PT0gJ251bGwnKSB7XHJcblx0XHRcdFx0XHRzdHlsZSA9ICdsaWdodCdcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0eWxlID09PSAnVUlTdGF0dXNCYXJTdHlsZURlZmF1bHQnKSB7XHJcblx0XHRcdFx0XHRzdHlsZSA9ICdkYXJrJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnBhZ2Uge1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiA1cHg7XHJcblx0XHR0b3A6IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MDtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0fVxyXG5cclxuXHQubXNnIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogOTBweDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDI0MHVweDtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDgxRkY7ICovXHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHR9XHJcblx0Lm1zZ18xe1xyXG5cdFx0d2lkdGg6NjkwdXB4O1xyXG5cdFx0aGVpZ2h0OiAyNDB1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCQkI0O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDMwdXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzB1cHg7XHJcblx0fVxyXG5cdC8qIC5tc2dfMSBpbWFnZXtcclxuXHRcdHdpZHRoOiA2OTB1cHg7XHJcblx0XHRoZWlnaHQ6IDI0MHVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwdXB4O1xyXG5cdH0gKi9cclxuXHRcclxuXHQubXNnc3tcclxuXHRcdFxyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOjg1cHg7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyNDB1cHg7XHJcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MUZGOyAqL1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0fVxyXG5cclxuXHQuY3NzLWhvdmVyIHtcclxuXHRcdG9wYWNpdHk6IC40O1xyXG5cdH1cclxuXHJcblx0LmJhcmNvZGUge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0fVxyXG5cclxuXHQuZmxhc2gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtNTAwcnB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogOHB4O1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogIzY3MzlCNjsgKi9cclxuXHR9XHJcblxyXG5cdC5mbGFzaC10ZXh0IHtcclxuXHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdGNvbG9yOiAjYmZiZmJmO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHJcblx0LmZsYXNoLW9uIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmFsYnVtIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJvdHRvbTogMjBweDtcclxuXHRcdHJpZ2h0OiAzMHB4O1xyXG5cdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdFx0d2lkdGg6IDQycHg7XHJcblx0XHRwYWRkaW5nOiAxNnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTcsIDE1NywgMTU3LCAuMyk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 12);

/***/ }),
/* 12 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 13 */
/*!*************************************************************************************************************************************!*\
  !*** D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?vue&type=style&index=0&id=e46a71e4&scoped=true&lang=css&mpType=page ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_style_index_0_id_e46a71e4_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./hs-scancode.nvue?vue&type=style&index=0&id=e46a71e4&scoped=true&lang=css&mpType=page */ 14);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_style_index_0_id_e46a71e4_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_style_index_0_id_e46a71e4_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_style_index_0_id_e46a71e4_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_style_index_0_id_e46a71e4_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hs_scancode_nvue_vue_type_style_index_0_id_e46a71e4_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/phpstudy/WWW/tissue/pages/hs-scancode/hs-scancode.nvue?vue&type=style&index=0&id=e46a71e4&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "top": 0,
    "position": "fixed",
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#000000"
  },
  "back": {
    "position": "fixed",
    "left": "5",
    "top": "20",
    "borderRadius": 50,
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15"
  },
  "msg": {
    "position": "fixed",
    "top": "90",
    "width": "750rpx",
    "height": "240upx",
    "textAlign": "center",
    "color": "#FFFFFF",
    "fontSize": "16"
  },
  "msg_1": {
    "width": "690upx",
    "height": "240upx",
    "backgroundColor": "#1CBBB4",
    "marginLeft": "30upx",
    "borderRadius": "30upx"
  },
  "msgs": {
    "position": "fixed",
    "bottom": "85",
    "width": "750rpx",
    "height": "240upx",
    "textAlign": "center",
    "color": "#FFFFFF",
    "fontSize": "16"
  },
  "css-hover": {
    "opacity": 0.4
  },
  "barcode": {
    "width": "750rpx",
    "height": 100,
    "backgroundColor": "#000000"
  },
  "flash": {
    "position": "absolute",
    "bottom": "-500rpx",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": "8",
    "paddingRight": "8",
    "paddingBottom": "8",
    "paddingLeft": "8"
  },
  "flash-text": {
    "marginTop": "3",
    "color": "#bfbfbf",
    "fontSize": "12"
  },
  "flash-on": {
    "color": "#FFFFFF"
  },
  "album": {
    "position": "fixed",
    "bottom": "20",
    "right": "30",
    "height": "42",
    "width": "42",
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16",
    "backgroundColor": "rgba(157,157,157,0.3)",
    "borderRadius": 50,
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);