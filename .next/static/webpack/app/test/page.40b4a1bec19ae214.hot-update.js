"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/test/page",{

/***/ "(app-pages-browser)/./src/app/test/page.js":
/*!******************************!*\
  !*** ./src/app/test/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/test/page.module.css\");\n/* harmony import */ var _tauri_apps_api_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tauri-apps/api/dialog */ \"(app-pages-browser)/./node_modules/@tauri-apps/api/dialog.js\");\n/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! exif-js */ \"(app-pages-browser)/./node_modules/exif-js/exif.js\");\n/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exif_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// import { dialog } from '@tauri-apps/api';\n\n\n\nlet dialog;\nif (true) {\n    dialog = (__webpack_require__(/*! @tauri-apps/api */ \"(app-pages-browser)/./node_modules/@tauri-apps/api/index.cjs\").dialog);\n}\nfunction Home() {\n    _s();\n    const keysToExtract = [\n        \"Make\",\n        \"Model\",\n        \"DateTime\"\n    ];\n    const [metaData, setMetaData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});\n    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"metaData\", JSON.stringify(metaData));\n    }, [\n        metaData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const storedMetaData = localStorage.getItem(\"metaData\");\n        if (storedMetaData) {\n            setMetaData(JSON.parse(storedMetaData));\n        }\n    }, []);\n    const selectDirectory = async ()=>{\n        if (!dialog) return;\n        try {\n            const path = await dialog.open({\n                directory: true\n            });\n            console.log(path);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const readExifData = (imageFile)=>{\n        exif_js__WEBPACK_IMPORTED_MODULE_3___default().getData(imageFile, function() {\n            var allTags = exif_js__WEBPACK_IMPORTED_MODULE_3___default().getAllTags(this);\n            setMetaData(allTags);\n        });\n    };\n    const handleFileChange = (event)=>{\n        setImageFile(event.target.files[0]);\n        readExifData(event.target.files[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _page_module_css__WEBPACK_IMPORTED_MODULE_6__.content,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_6__.title,\n                children: \"Hello World\"\n            }, void 0, false, {\n                fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: _page_module_css__WEBPACK_IMPORTED_MODULE_6__.input\n            }, void 0, false, {\n                fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileChange\n            }, void 0, false, {\n                fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/red\",\n                children: \"Press Me to GO back\"\n            }, void 0, false, {\n                fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Object.entries(metaData)// .filter(([key]) => keysToExtract.includes(key))\n                .map((param)=>{\n                    let [key, value] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            key,\n                            \": \",\n                            typeof value === \"object\" ? JSON.stringify(value) : value\n                        ]\n                    }, key, true, {\n                        fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adnan/SDOrganizer/SDOrganizer/src/app/test/page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mPD0lPnGCCICGiX5k9nntxD87nk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVzdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ1E7QUFDUTtBQUM5Qyw0Q0FBNEM7QUFDakI7QUFDRTtBQUNlO0FBRzVDLElBQUlPO0FBQ0osSUFBSSxJQUFrQixFQUFhO0lBQ2pDQSxTQUFTQyxtSEFBaUM7QUFDNUM7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTUMsZ0JBQWdCO1FBQUM7UUFBUTtRQUFTO0tBQVc7SUFDbkQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSUyxhQUFhQyxPQUFPLENBQUMsWUFBWUMsS0FBS0MsU0FBUyxDQUFDUDtJQUNsRCxHQUFHO1FBQUNBO0tBQVM7SUFFYkwsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxpQkFBaUJKLGFBQWFLLE9BQU8sQ0FBQztRQUM1QyxJQUFJRCxnQkFBZ0I7WUFDbEJQLFlBQVlLLEtBQUtJLEtBQUssQ0FBQ0Y7UUFDekI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNRyxrQkFBa0I7UUFDdEIsSUFBSSxDQUFDZixRQUFRO1FBQ2IsSUFBSTtZQUNGLE1BQU1nQixPQUFPLE1BQU1oQixPQUFPTCxJQUFJLENBQUM7Z0JBQUVzQixXQUFXO1lBQUs7WUFDakRDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDZCxFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEsTUFBTUMsZUFBZSxDQUFDZjtRQUNwQlYsc0RBQVksQ0FBQ1UsV0FBVztZQUN0QixJQUFJaUIsVUFBVTNCLHlEQUFlLENBQUMsSUFBSTtZQUNsQ1MsWUFBWWtCO1FBQ2Q7SUFDRjtJQUVBLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4Qm5CLGFBQWFtQixNQUFNQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDUCxhQUFhSyxNQUFNQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQ3BDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdwQyw2Q0FBTUEsQ0FBQ3FDLE9BQU87OzBCQUM1Qiw4REFBQ0M7Z0JBQUdGLFdBQVdwQyw2Q0FBTUEsQ0FBQ3VDLEtBQUs7MEJBQUU7Ozs7OzswQkFDN0IsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPTCxXQUFXcEMsNkNBQU1BLENBQUN3QyxLQUFLOzs7Ozs7MEJBRTFDLDhEQUFDQTtnQkFBTUMsTUFBSztnQkFBT0MsVUFBVVg7Ozs7OzswQkFDN0IsOERBQUM1QixrREFBSUE7Z0JBQUN3QyxNQUFLOzBCQUFPOzs7Ozs7MEJBQ2xCLDhEQUFDUjswQkFDQVMsT0FBT0MsT0FBTyxDQUFDbkMsU0FDcEIsa0RBQWtEO2lCQUNqRG9DLEdBQUcsQ0FBQzt3QkFBQyxDQUFDQyxLQUFLQyxNQUFNO3lDQUNoQiw4REFBQ2I7OzRCQUNFWTs0QkFBSTs0QkFBRyxPQUFPQyxVQUFVLFdBQVdoQyxLQUFLQyxTQUFTLENBQUMrQixTQUFTQTs7dUJBRHBERDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtHQXZEd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Rlc3QvcGFnZS5qcz9kMGZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCB7IG9wZW4gfSBmcm9tICdAdGF1cmktYXBwcy9hcGkvZGlhbG9nJztcbi8vIGltcG9ydCB7IGRpYWxvZyB9IGZyb20gJ0B0YXVyaS1hcHBzL2FwaSc7XG5pbXBvcnQgRVhJRiBmcm9tICdleGlmLWpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cbmxldCBkaWFsb2c7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGlhbG9nID0gcmVxdWlyZSgnQHRhdXJpLWFwcHMvYXBpJykuZGlhbG9nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBrZXlzVG9FeHRyYWN0ID0gWydNYWtlJywgJ01vZGVsJywgJ0RhdGVUaW1lJ107XG4gIGNvbnN0IFttZXRhRGF0YSwgc2V0TWV0YURhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaW1hZ2VGaWxlLCBzZXRJbWFnZUZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWV0YURhdGEnLCBKU09OLnN0cmluZ2lmeShtZXRhRGF0YSkpO1xuICB9LCBbbWV0YURhdGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZE1ldGFEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21ldGFEYXRhJyk7XG4gICAgaWYgKHN0b3JlZE1ldGFEYXRhKSB7XG4gICAgICBzZXRNZXRhRGF0YShKU09OLnBhcnNlKHN0b3JlZE1ldGFEYXRhKSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IHNlbGVjdERpcmVjdG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWRpYWxvZykgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXRoID0gYXdhaXQgZGlhbG9nLm9wZW4oeyBkaXJlY3Rvcnk6IHRydWUgfSk7XG4gICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlYWRFeGlmRGF0YSA9IChpbWFnZUZpbGUpID0+IHtcbiAgICBFWElGLmdldERhdGEoaW1hZ2VGaWxlLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbGxUYWdzID0gRVhJRi5nZXRBbGxUYWdzKHRoaXMpO1xuICAgICAgc2V0TWV0YURhdGEoYWxsVGFncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldEltYWdlRmlsZShldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgIHJlYWRFeGlmRGF0YShldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SGVsbG8gV29ybGQ8L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IC8+XG4gICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3NlbGVjdERpcmVjdG9yeX0+U2VsZWN0IERpcmVjdG9yeTwvYnV0dG9uPiAqL31cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgPExpbmsgaHJlZj1cIi9yZWRcIj5QcmVzcyBNZSB0byBHTyBiYWNrPC9MaW5rPlxuICAgICAgPGRpdj5cbiAgICAgIHtPYmplY3QuZW50cmllcyhtZXRhRGF0YSlcbiAgLy8gLmZpbHRlcigoW2tleV0pID0+IGtleXNUb0V4dHJhY3QuaW5jbHVkZXMoa2V5KSlcbiAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICB7a2V5fToge3R5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZX1cbiAgICA8L2Rpdj5cbikpfVxuICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwib3BlbiIsIkVYSUYiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkaWFsb2ciLCJyZXF1aXJlIiwiSG9tZSIsImtleXNUb0V4dHJhY3QiLCJtZXRhRGF0YSIsInNldE1ldGFEYXRhIiwiaW1hZ2VGaWxlIiwic2V0SW1hZ2VGaWxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdG9yZWRNZXRhRGF0YSIsImdldEl0ZW0iLCJwYXJzZSIsInNlbGVjdERpcmVjdG9yeSIsInBhdGgiLCJkaXJlY3RvcnkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZWFkRXhpZkRhdGEiLCJnZXREYXRhIiwiYWxsVGFncyIsImdldEFsbFRhZ3MiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJoMSIsInRpdGxlIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJocmVmIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/test/page.js\n"));

/***/ })

});