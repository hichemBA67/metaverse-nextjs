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

/***/ "./components/ChangeUsername.js":
/*!**************************************!*\
  !*** ./components/ChangeUsername.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction ChangeUsername() {\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis)(), setUserData = ref.setUserData, isUserUpdating = ref.isUserUpdating, userError = ref.userError, user = ref.user;\n    var setUsername = function() {\n        var username = prompt(\"Enter you new username (current: \".concat(user.getUsername(), \")\"));\n        if (!username) return;\n        setUserData({\n            username: username\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-sm absolute top-5 right-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            disabled: isUserUpdating,\n            onClick: setUsername,\n            className: \"hover:text-rose-500 bg-red-600 p-2 rounded-md\",\n            children: \"Change username\"\n        }, void 0, false, {\n            fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/ChangeUsername.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/ChangeUsername.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_s(ChangeUsername, \"1KDhm6kGgIB15jQmb7QWVloqRkA=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_1__.useMoralis\n    ];\n});\n_c = ChangeUsername;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChangeUsername);\nvar _c;\n$RefreshReg$(_c, \"ChangeUsername\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYW5nZVVzZXJuYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQzs7U0FFakNDLGNBQWMsR0FBRyxDQUFDOztJQUN6QixHQUFLLENBQW9ERCxHQUFZLEdBQVpBLHlEQUFVLElBQTNERSxXQUFXLEdBQXNDRixHQUFZLENBQTdERSxXQUFXLEVBQUVDLGNBQWMsR0FBc0JILEdBQVksQ0FBaERHLGNBQWMsRUFBRUMsU0FBUyxHQUFXSixHQUFZLENBQWhDSSxTQUFTLEVBQUVDLElBQUksR0FBS0wsR0FBWSxDQUFyQkssSUFBSTtJQUVwRCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3pCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHQyxNQUFNLENBQ3BCLENBQWlDLG1DQUFxQixNQUFDLENBQXBCSCxJQUFJLENBQUNJLFdBQVcsSUFBRyxDQUFDO1FBRzFELEVBQUUsR0FBR0YsUUFBUSxFQUFFLE1BQU07UUFFckJMLFdBQVcsQ0FBQyxDQUFDO1lBQUNLLFFBQVEsRUFBUkEsUUFBUTtRQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWdDOzhGQUM1Q0MsQ0FBTTtZQUNMQyxRQUFRLEVBQUVWLGNBQWM7WUFDeEJXLE9BQU8sRUFBRVIsV0FBVztZQUNwQkssU0FBUyxFQUFDLENBQStDO3NCQUMxRCxDQUVEOzs7Ozs7Ozs7OztBQUdOLENBQUM7R0F4QlFWLGNBQWM7O1FBQ29DRCxxREFBVTs7O0tBRDVEQyxjQUFjO0FBMEJ2QiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhbmdlVXNlcm5hbWUuanM/ZTZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIjtcblxuZnVuY3Rpb24gQ2hhbmdlVXNlcm5hbWUoKSB7XG4gIGNvbnN0IHsgc2V0VXNlckRhdGEsIGlzVXNlclVwZGF0aW5nLCB1c2VyRXJyb3IsIHVzZXIgfSA9IHVzZU1vcmFsaXMoKTtcblxuICBjb25zdCBzZXRVc2VybmFtZSA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHByb21wdChcbiAgICAgIGBFbnRlciB5b3UgbmV3IHVzZXJuYW1lIChjdXJyZW50OiAke3VzZXIuZ2V0VXNlcm5hbWUoKX0pYFxuICAgICk7XG5cbiAgICBpZiAoIXVzZXJuYW1lKSByZXR1cm47XG5cbiAgICBzZXRVc2VyRGF0YSh7IHVzZXJuYW1lIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGFic29sdXRlIHRvcC01IHJpZ2h0LTVcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2lzVXNlclVwZGF0aW5nfVxuICAgICAgICBvbkNsaWNrPXtzZXRVc2VybmFtZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1yb3NlLTUwMCBiZy1yZWQtNjAwIHAtMiByb3VuZGVkLW1kXCJcbiAgICAgID5cbiAgICAgICAgQ2hhbmdlIHVzZXJuYW1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlVXNlcm5hbWU7XG4iXSwibmFtZXMiOlsidXNlTW9yYWxpcyIsIkNoYW5nZVVzZXJuYW1lIiwic2V0VXNlckRhdGEiLCJpc1VzZXJVcGRhdGluZyIsInVzZXJFcnJvciIsInVzZXIiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lIiwicHJvbXB0IiwiZ2V0VXNlcm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChangeUsername.js\n");

/***/ })

});