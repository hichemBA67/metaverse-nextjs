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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Message(param) {\n    var key = param.key, message = param.message;\n    _s();\n    var user = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)().user;\n    var isUserMessage = message.get(\"ethAddress\") === user.get(\"ethAddress\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex item-end space-x-2 relative \".concat(isUserMessage && \"justify-end\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                username: \"{message.get('username')}\"\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 p-3 rounded-lg \".concat(isUserMessage ? \"rounded-br-none bg-pink-300\" : \"rounded-br-none br-cyan-400 \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: message.get(\"message\")\n                }, void 0, false, {\n                    fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/Message.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(Message, \"M2A4laB+thYVM+Le85mSUlyZ/Xs=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNiOztTQUVwQkUsT0FBTyxDQUFDLEtBQWdCLEVBQUUsQ0FBQztRQUFqQkMsR0FBRyxHQUFMLEtBQWdCLENBQWRBLEdBQUcsRUFBRUMsT0FBTyxHQUFkLEtBQWdCLENBQVRBLE9BQU87O0lBQzdCLEdBQUssQ0FBR0MsSUFBSSxHQUFLTCx5REFBVSxHQUFuQkssSUFBSTtJQUVaLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRixPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFZLGlCQUFNRixJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFZO0lBRXpFLE1BQU0sNkVBQ0hDLENBQUc7UUFDRkMsU0FBUyxFQUFHLENBQWlDLG1DQUU1QyxPQURDSCxhQUFhLElBQUksQ0FBYTs7d0ZBRy9CTCwrQ0FBTTtnQkFBQ1MsUUFBUSxFQUFDLENBQTJCOzs7Ozs7d0ZBQzNDRixDQUFHO2dCQUNGQyxTQUFTLEVBQUcsQ0FBOEIsZ0NBSXpDLE9BSENILGFBQWEsR0FDVCxDQUE2QiwrQkFDN0IsQ0FBOEI7c0dBR25DSyxDQUFDOzhCQUFFUCxPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQyxDQUFDO0dBdkJRTCxPQUFPOztRQUNHRixxREFBVTs7O0tBRHBCRSxPQUFPO0FBeUJoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZS5qcz80ODkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1vcmFsaXMgfSBmcm9tIFwicmVhY3QtbW9yYWxpc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi9BdmF0YXJcIjtcblxuZnVuY3Rpb24gTWVzc2FnZSh7IGtleSwgbWVzc2FnZSB9KSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlTW9yYWxpcygpO1xuXG4gIGNvbnN0IGlzVXNlck1lc3NhZ2UgPSBtZXNzYWdlLmdldChcImV0aEFkZHJlc3NcIikgPT09IHVzZXIuZ2V0KFwiZXRoQWRkcmVzc1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbS1lbmQgc3BhY2UteC0yIHJlbGF0aXZlICR7XG4gICAgICAgIGlzVXNlck1lc3NhZ2UgJiYgXCJqdXN0aWZ5LWVuZFwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8QXZhdGFyIHVzZXJuYW1lPVwie21lc3NhZ2UuZ2V0KCd1c2VybmFtZScpfVwiIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggc3BhY2UteC00IHAtMyByb3VuZGVkLWxnICR7XG4gICAgICAgICAgaXNVc2VyTWVzc2FnZVxuICAgICAgICAgICAgPyBcInJvdW5kZWQtYnItbm9uZSBiZy1waW5rLTMwMFwiXG4gICAgICAgICAgICA6IFwicm91bmRlZC1ici1ub25lIGJyLWN5YW4tNDAwIFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8cD57bWVzc2FnZS5nZXQoXCJtZXNzYWdlXCIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIl0sIm5hbWVzIjpbInVzZU1vcmFsaXMiLCJBdmF0YXIiLCJNZXNzYWdlIiwia2V5IiwibWVzc2FnZSIsInVzZXIiLCJpc1VzZXJNZXNzYWdlIiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlcm5hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Message.js\n");

/***/ })

});