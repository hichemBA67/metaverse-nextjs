"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SendMessage.js":
/*!***********************************!*\
  !*** ./components/SendMessage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction SendMessage() {\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)(), user = ref.user, Moralis = ref.Moralis;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref1[0], setMessage = ref1[1];\n    var sendMessage = function() {\n        e.preventDefault();\n        if (!message) return;\n        var Message = Moralis.Object.extend(\"Messages\");\n        var messages = new Messages();\n        messages.save();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex fixed bottom-12 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-cyan-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"flex-grow outline-none bg-transparent text-rose-100 placholder-rose-500 pr-5\",\n                type: \"text\",\n                placeholder: \"Enter a message ...\",\n                value: message,\n                onChange: function(e) {\n                    return setMessage(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/SendMessage.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: sendMessage,\n                type: \"submit\",\n                className: \"font-bold text-rose-300\",\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/SendMessage.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/SendMessage.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n}\n_s(SendMessage, \"QHXBp23Yy2X4A/bKj2m0+f8BU2E=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis\n    ];\n});\n_c = SendMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendMessage);\nvar _c;\n$RefreshReg$(_c, \"SendMessage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbmRNZXNzYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ0c7O1NBRWpDRyxXQUFXLEdBQUcsQ0FBQzs7SUFDdEIsR0FBSyxDQUFxQkQsR0FBWSxHQUFaQSx5REFBVSxJQUE1QkUsSUFBSSxHQUFjRixHQUFZLENBQTlCRSxJQUFJLEVBQUVDLE9BQU8sR0FBS0gsR0FBWSxDQUF4QkcsT0FBTztJQUNyQixHQUFLLENBQXlCSixJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ0ssT0FBTyxHQUFnQkwsSUFBWSxLQUExQk0sVUFBVSxHQUFJTixJQUFZO0lBRTFDLEdBQUssQ0FBQ08sV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJDLENBQUMsQ0FBQ0MsY0FBYztRQUVoQixFQUFFLEdBQUdKLE9BQU8sRUFBRSxNQUFNO1FBRXBCLEdBQUssQ0FBQ0ssT0FBTyxHQUFHTixPQUFPLENBQUNPLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQVU7UUFDaEQsR0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDQyxRQUFRO1FBRTdCRCxRQUFRLENBQUNFLElBQUk7SUFDZixDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBc0g7O3dGQUNuSUMsQ0FBSztnQkFDSkQsU0FBUyxFQUFDLENBQThFO2dCQUN4RkUsSUFBSSxFQUFDLENBQU07Z0JBQ1hDLFdBQVcsRUFBQyxDQUFxQjtnQkFDakNDLEtBQUssRUFBRWhCLE9BQU87Z0JBQ2RpQixRQUFRLEVBQUUsUUFBUSxDQUFQZCxDQUFDO29CQUFLRixNQUFNLENBQU5BLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDZSxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7d0ZBRTNDRyxDQUFNO2dCQUNMQyxPQUFPLEVBQUVsQixXQUFXO2dCQUNwQlksSUFBSSxFQUFDLENBQVE7Z0JBQ2JGLFNBQVMsRUFBQyxDQUF5QjswQkFDcEMsQ0FFRDs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztHQWpDUWYsV0FBVzs7UUFDUUQscURBQVU7OztLQUQ3QkMsV0FBVztBQW1DcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlbmRNZXNzYWdlLmpzPzY3ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIjtcblxuZnVuY3Rpb24gU2VuZE1lc3NhZ2UoKSB7XG4gIGNvbnN0IHsgdXNlciwgTW9yYWxpcyB9ID0gdXNlTW9yYWxpcygpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIW1lc3NhZ2UpIHJldHVybjtcblxuICAgIGNvbnN0IE1lc3NhZ2UgPSBNb3JhbGlzLk9iamVjdC5leHRlbmQoXCJNZXNzYWdlc1wiKTtcbiAgICBjb25zdCBtZXNzYWdlcyA9IG5ldyBNZXNzYWdlcygpO1xuXG4gICAgbWVzc2FnZXMuc2F2ZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmaXhlZCBib3R0b20tMTIgYmctYmxhY2sgb3BhY2l0eS04MCBweC02IHB5LTQgdy0xMS8xMiBtYXgtdy0yeGwgc2hhZG93LXhsIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItY3lhbi00MDBcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3V0bGluZS1ub25lIGJnLXRyYW5zcGFyZW50IHRleHQtcm9zZS0xMDAgcGxhY2hvbGRlci1yb3NlLTUwMCBwci01XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZSAuLi5cIlxuICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtcm9zZS0zMDBcIlxuICAgICAgPlxuICAgICAgICBTZW5kXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbmRNZXNzYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VNb3JhbGlzIiwiU2VuZE1lc3NhZ2UiLCJ1c2VyIiwiTW9yYWxpcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJNZXNzYWdlIiwiT2JqZWN0IiwiZXh0ZW5kIiwibWVzc2FnZXMiLCJNZXNzYWdlcyIsInNhdmUiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SendMessage.js\n");

/***/ })

});