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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction SendMessage(param) {\n    var endOfReferenceRef = param.endOfReferenceRef;\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)(), user = ref.user, Moralis = ref.Moralis;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref1[0], setMessage = ref1[1];\n    var sendMessage = function() {\n        e.preventDefault();\n        if (!message) return;\n        var Message = Moralis.Object.extend(\"Message\");\n        var messages = new Message();\n        messages.save({\n            message: message,\n            username: getUsername(),\n            ethAddress: user.get(\"ethAddress\")\n        }).then(function(message) {\n        // After successful message\n        }), function(error) {\n            console.log(error.message);\n        };\n        endOfMessagesRef.current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n        setMessage(\"\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex fixed bottom-12 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-cyan-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"flex-grow outline-none bg-transparent text-rose-100 placholder-rose-500 pr-5\",\n                type: \"text\",\n                placeholder: \"Enter a message ...\",\n                value: message,\n                onChange: function(e) {\n                    return setMessage(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/SendMessage.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: sendMessage,\n                type: \"submit\",\n                className: \"font-bold text-rose-300\",\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/SendMessage.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hichem/Documents/coding_projects/metaverse-nextjs/components/SendMessage.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n}\n_s(SendMessage, \"QHXBp23Yy2X4A/bKj2m0+f8BU2E=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis\n    ];\n});\n_c = SendMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendMessage);\nvar _c;\n$RefreshReg$(_c, \"SendMessage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbmRNZXNzYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ0c7O1NBRWpDRyxXQUFXLENBQUMsS0FBcUIsRUFBRSxDQUFDO1FBQXRCQyxpQkFBaUIsR0FBbkIsS0FBcUIsQ0FBbkJBLGlCQUFpQjs7SUFDdEMsR0FBSyxDQUFxQkYsR0FBWSxHQUFaQSx5REFBVSxJQUE1QkcsSUFBSSxHQUFjSCxHQUFZLENBQTlCRyxJQUFJLEVBQUVDLE9BQU8sR0FBS0osR0FBWSxDQUF4QkksT0FBTztJQUNyQixHQUFLLENBQXlCTCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDLEdBQUssQ0FBQ1EsV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJDLENBQUMsQ0FBQ0MsY0FBYztRQUVoQixFQUFFLEdBQUdKLE9BQU8sRUFBRSxNQUFNO1FBRXBCLEdBQUssQ0FBQ0ssT0FBTyxHQUFHTixPQUFPLENBQUNPLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQVM7UUFDL0MsR0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDSCxPQUFPO1FBRTVCRyxRQUFRLENBQ0xDLElBQUksQ0FBQyxDQUFDO1lBQ0xULE9BQU8sRUFBRUEsT0FBTztZQUNoQlUsUUFBUSxFQUFFQyxXQUFXO1lBQ3JCQyxVQUFVLEVBQUVkLElBQUksQ0FBQ2UsR0FBRyxDQUFDLENBQVk7UUFDbkMsQ0FBQyxFQUNBQyxJQUFJLENBQUMsUUFBUSxDQUFQZCxPQUFPLEVBQUssQ0FBQztRQUNsQixFQUEyQjtRQUM3QixDQUFDLEdBQ0QsUUFBUSxDQUFQZSxLQUFLLEVBQUssQ0FBQztZQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDZixPQUFPO1FBQzNCLENBQUM7UUFFSGtCLGdCQUFnQixDQUFDQyxPQUFPLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBQUNDLFFBQVEsRUFBRSxDQUFRO1FBQUMsQ0FBQztRQUM5RHBCLFVBQVUsQ0FBQyxDQUFFO0lBQ2YsQ0FBQztJQUVELE1BQU0sNkVBQ0hxQixDQUFJO1FBQUNDLFNBQVMsRUFBQyxDQUFzSDs7d0ZBQ25JQyxDQUFLO2dCQUNKRCxTQUFTLEVBQUMsQ0FBOEU7Z0JBQ3hGRSxJQUFJLEVBQUMsQ0FBTTtnQkFDWEMsV0FBVyxFQUFDLENBQXFCO2dCQUNqQ0MsS0FBSyxFQUFFM0IsT0FBTztnQkFDZDRCLFFBQVEsRUFBRSxRQUFRLENBQVB6QixDQUFDO29CQUFLRixNQUFNLENBQU5BLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDMEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7O3dGQUUzQ0csQ0FBTTtnQkFDTEMsT0FBTyxFQUFFN0IsV0FBVztnQkFDcEJ1QixJQUFJLEVBQUMsQ0FBUTtnQkFDYkYsU0FBUyxFQUFDLENBQXlCOzBCQUNwQyxDQUVEOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBL0NRM0IsV0FBVzs7UUFDUUQscURBQVU7OztLQUQ3QkMsV0FBVztBQWlEcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlbmRNZXNzYWdlLmpzPzY3ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIjtcblxuZnVuY3Rpb24gU2VuZE1lc3NhZ2UoeyBlbmRPZlJlZmVyZW5jZVJlZiB9KSB7XG4gIGNvbnN0IHsgdXNlciwgTW9yYWxpcyB9ID0gdXNlTW9yYWxpcygpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIW1lc3NhZ2UpIHJldHVybjtcblxuICAgIGNvbnN0IE1lc3NhZ2UgPSBNb3JhbGlzLk9iamVjdC5leHRlbmQoXCJNZXNzYWdlXCIpO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UoKTtcblxuICAgIG1lc3NhZ2VzXG4gICAgICAuc2F2ZSh7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIHVzZXJuYW1lOiBnZXRVc2VybmFtZSgpLFxuICAgICAgICBldGhBZGRyZXNzOiB1c2VyLmdldChcImV0aEFkZHJlc3NcIiksXG4gICAgICB9KVxuICAgICAgLnRoZW4oKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgLy8gQWZ0ZXIgc3VjY2Vzc2Z1bCBtZXNzYWdlXG4gICAgICB9KSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIH07XG5cbiAgICBlbmRPZk1lc3NhZ2VzUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmaXhlZCBib3R0b20tMTIgYmctYmxhY2sgb3BhY2l0eS04MCBweC02IHB5LTQgdy0xMS8xMiBtYXgtdy0yeGwgc2hhZG93LXhsIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItY3lhbi00MDBcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3V0bGluZS1ub25lIGJnLXRyYW5zcGFyZW50IHRleHQtcm9zZS0xMDAgcGxhY2hvbGRlci1yb3NlLTUwMCBwci01XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbWVzc2FnZSAuLi5cIlxuICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtcm9zZS0zMDBcIlxuICAgICAgPlxuICAgICAgICBTZW5kXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbmRNZXNzYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VNb3JhbGlzIiwiU2VuZE1lc3NhZ2UiLCJlbmRPZlJlZmVyZW5jZVJlZiIsInVzZXIiLCJNb3JhbGlzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk1lc3NhZ2UiLCJPYmplY3QiLCJleHRlbmQiLCJtZXNzYWdlcyIsInNhdmUiLCJ1c2VybmFtZSIsImdldFVzZXJuYW1lIiwiZXRoQWRkcmVzcyIsImdldCIsInRoZW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlbmRPZk1lc3NhZ2VzUmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SendMessage.js\n");

/***/ })

});