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

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Message(param) {\n    var key = param.key, message = param.message;\n    _s();\n    var user = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)().user;\n    var isUserMessage = message.get(\"ethAddress\") === user.get(\"ethAddress\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex item-end space-x-2 relative \".concat(isUserMessage && \"justify-end\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    username: message.get(\"username\")\n                }, void 0, false, {\n                    fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 p-3 rounded-lg \".concat(isUserMessage ? \"rounded-br-none bg-pink-300\" : \"rounded-br-none br-cyan-400 \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: message.get(\"message\")\n                }, void 0, false, {\n                    fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(Message, \"M2A4laB+thYVM+Le85mSUlyZ/Xs=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNiOztTQUVwQkUsT0FBTyxDQUFDLEtBQWdCLEVBQUUsQ0FBQztRQUFqQkMsR0FBRyxHQUFMLEtBQWdCLENBQWRBLEdBQUcsRUFBRUMsT0FBTyxHQUFkLEtBQWdCLENBQVRBLE9BQU87O0lBQzdCLEdBQUssQ0FBR0MsSUFBSSxHQUFLTCx5REFBVSxHQUFuQkssSUFBSTtJQUVaLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFZLGlCQUFNRixJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFZO0lBRXpFLE1BQU0sNkVBQ0hDLENBQUc7UUFDRkMsU0FBUyxFQUFHLENBQWlDLG1DQUU1QyxPQURDSCxhQUFhLElBQUksQ0FBYTs7d0ZBRy9CRSxDQUFHO3NHQUNEUCwrQ0FBTTtvQkFBQ1MsUUFBUSxFQUFFTixPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFVOzs7Ozs7Ozs7Ozt3RkFHekNDLENBQUc7Z0JBQ0ZDLFNBQVMsRUFBRyxDQUE4QixnQ0FJekMsT0FIQ0gsYUFBYSxHQUNULENBQTZCLCtCQUM3QixDQUE4QjtzR0FHbkNLLENBQUM7OEJBQUVQLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDLENBQUM7R0ExQlFMLE9BQU87O1FBQ0dGLHFEQUFVOzs7S0FEcEJFLE9BQU87QUE0QmhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzPzQ4OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuL0F2YXRhclwiO1xuXG5mdW5jdGlvbiBNZXNzYWdlKHsga2V5LCBtZXNzYWdlIH0pIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VNb3JhbGlzKCk7XG5cbiAgY29uc3QgaXNVc2VyTWVzc2FnZSA9IG1lc3NhZ2UuZ2V0KFwiZXRoQWRkcmVzc1wiKSA9PT0gdXNlci5nZXQoXCJldGhBZGRyZXNzXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtLWVuZCBzcGFjZS14LTIgcmVsYXRpdmUgJHtcbiAgICAgICAgaXNVc2VyTWVzc2FnZSAmJiBcImp1c3RpZnktZW5kXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBdmF0YXIgdXNlcm5hbWU9e21lc3NhZ2UuZ2V0KFwidXNlcm5hbWVcIil9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHNwYWNlLXgtNCBwLTMgcm91bmRlZC1sZyAke1xuICAgICAgICAgIGlzVXNlck1lc3NhZ2VcbiAgICAgICAgICAgID8gXCJyb3VuZGVkLWJyLW5vbmUgYmctcGluay0zMDBcIlxuICAgICAgICAgICAgOiBcInJvdW5kZWQtYnItbm9uZSBici1jeWFuLTQwMCBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPHA+e21lc3NhZ2UuZ2V0KFwibWVzc2FnZVwiKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiJdLCJuYW1lcyI6WyJ1c2VNb3JhbGlzIiwiQXZhdGFyIiwiTWVzc2FnZSIsImtleSIsIm1lc3NhZ2UiLCJ1c2VyIiwiaXNVc2VyTWVzc2FnZSIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsInVzZXJuYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Message.js\n");

/***/ })

});