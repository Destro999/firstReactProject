"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import { data } from '../../../SpeakerData';\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    })\n;\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"GET /api/speakers status: 200\");\n        }\n    } catch (e) {\n        console.log(\"/api/speakers error\", e);\n        res.status(404).send(\"File Not Found on server\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxFQUE4QztBQUN2QjtBQUNKO0FBRW5CLEtBQUssQ0FBQyxDQUFDLENBQUNFLFNBQVMsRUFBQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsa0JBQU07QUFDcEMsS0FBSyxDQUFDQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0Qsb0RBQVc7QUFDdEMsS0FBSyxDQUFDSSxLQUFLLElBQUlDLEVBQUUsR0FDZixHQUFHLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxHQUFLLENBQUM7UUFDeEJDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixFQUFFO0lBQ3hCLENBQUM7O0FBRVksZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEVBQXNEO0lBRXRELEtBQUssQ0FBQ0MsUUFBUSxHQUFHYixtREFBWSxDQUFDLENBQUksS0FBRSxDQUFTO0lBQzdDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDYyxZQUFZLEdBQUcsS0FBSyxDQUFDVixRQUFRLENBQUNTLFFBQVE7UUFDNUMsS0FBSyxDQUFDUixLQUFLLENBQUMsSUFBSTtRQUNoQixLQUFLLENBQUNVLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksRUFBRUMsUUFBUTtRQUNsRCxFQUFFLEVBQUVBLFFBQVEsRUFBRSxDQUFDO1lBQ2JILEdBQUcsQ0FBQ00sU0FBUyxDQUFDLENBQWMsZUFBRSxDQUFrQjtZQUNoRE4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNKLElBQUksQ0FBQ0ssU0FBUyxDQUFDTixRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDckRPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQStCO1FBQzdDLENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUNYRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUMsQ0FBQztRQUNwQ1osR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBMEI7SUFDakQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdFJlYWN0UHJvamVjdC8uL3BhZ2VzL2FwaS9zcGVha2Vycy9pbmRleC5qcz83ZDlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uLy4uLy4uL1NwZWFrZXJEYXRhJztcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuXHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICBpZiAoc3BlYWtlcnMpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJzLCBudWxsLCAyKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR0VUIC9hcGkvc3BlYWtlcnMgc3RhdHVzOiAyMDBcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCIvYXBpL3NwZWFrZXJzIGVycm9yXCIsIGUpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJGaWxlIE5vdCBGb3VuZCBvbiBzZXJ2ZXJcIik7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInBhdGgiLCJmcyIsInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInNldEhlYWRlciIsInN0YXR1cyIsInNlbmQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();