module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-bootstrap-buttons/dist/react-bootstrap-buttons.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-buttons/dist/react-bootstrap-buttons.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Footer/Footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Footer/Footer.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__1_KSh",
	"repo": "Footer_repo__2kYFa",
	"repoAnchor": "Footer_repoAnchor__MwijZ",
	"socialLinks": "Footer_socialLinks__jd9nr"
};


/***/ }),

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ajayl\\Desktop\\repos\\bet-you-dont-know-frontend\\src\\components\\Footer\\Footer.tsx";



const Footer = () => {
  const imgPath = "https://ajayliu.com/img";
  const projectRepoLink = "https://github.com/troygamedev/bet-you-dont-know";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://ajayliu.com",
          children: "Ajay Liu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), ". All Rights Reserved \u2022", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@ajayliu.com",
          children: "contact@ajayliu.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.socialLinks,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://ajayliu.com",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: imgPath + "/web_icon.svg",
            alt: "website logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/AjayLiu",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: imgPath + "/github.svg",
            alt: "github logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.linkedin.com/in/ajayliu/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: imgPath + "/linkedin.svg",
            alt: "linkedin logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.youtube.com/channel/UClr6XCaguPeM0g7UL6Lvs3g",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: imgPath + "/youtube.svg",
            alt: "youtube logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.repo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: projectRepoLink,
          className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.repoAnchor,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: imgPath + "/repo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), "View this project on Github"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header/Header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/Header.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Header_container__3xeH-",
	"wrapper": "Header_wrapper__1cgXS",
	"logoImg": "Header_logoImg__2O4nX",
	"text": "Header_text__1BckP"
};


/***/ }),

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ajayl\\Desktop\\repos\\bet-you-dont-know-frontend\\src\\components\\Header\\Header.tsx";




const Header = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handleClick = e => {
    if (props.alertLeave) {
      e.preventDefault();
      e.stopPropagation();
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
        title: "Leave Warning",
        text: "Are you sure you want to leave the lobby - you will lose all your progress!",
        icon: "warning",
        buttons: {
          leave: {
            text: "Leave",
            value: "leave"
          },
          cancel: true
        }
      }).then(buttonVal => {
        switch (buttonVal) {
          case "leave":
            router.push(window.location.origin);
            break;

          case "cancel":
            break;
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: e => handleClick(e),
    style: {
      cursor: props.alertLeave && "pointer"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/img/logo.svg",
          alt: "logo",
          className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logoImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: props.headerText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Layout_main__3m1yK"
};


/***/ }),

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Header/Header */ "./src/components/Header/Header.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_SocketContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @context/SocketContext */ "./src/context/SocketContext.tsx");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\ajayl\\Desktop\\repos\\bet-you-dont-know-frontend\\src\\components\\Layout\\Layout.tsx";







const Layout = props => {
  const socket = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_SocketContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: isConnected,
    1: setIsConnected
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (socket.active) {
      setIsConnected(true);
    }

    socket.on("connect", () => {
      setIsConnected(true);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Bet You Don't Know"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "a simple multiplayer game of wits, deception, and bets!\r "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Bet You Don't Know"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "a simple multiplayer game of wits, deception, and bets!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://bet-you-dont-know.herokuapp.com/img/bet-you-dont-know-logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: "Bet You Don't Know"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:description",
        content: "a simple multiplayer game of wits, deception, and bets!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: "https://bet-you-dont-know.herokuapp.com/img/bet-you-dont-know-logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headerText: "Bet You Don't Know",
        alertLeave: props.alertLeave
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), isConnected ? props.children : "Loading..."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/LobbyList/LobbyList.module.scss":
/*!********************************************************!*\
  !*** ./src/components/LobbyList/LobbyList.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LobbyList_container__xYR3l",
	"lobbyCountLabel": "LobbyList_lobbyCountLabel__28mYp",
	"publicLobbyList": "LobbyList_publicLobbyList__3hquP",
	"labelRow": "LobbyList_labelRow__3E3At",
	"lobbyItem": "LobbyList_lobbyItem__2tkW6",
	"joinButton": "LobbyList_joinButton__H8KrX",
	"createLobbyButton": "LobbyList_createLobbyButton__2kRVe"
};


/***/ }),

/***/ "./src/components/LobbyList/LobbyList.tsx":
/*!************************************************!*\
  !*** ./src/components/LobbyList/LobbyList.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SocketContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @context/SocketContext */ "./src/context/SocketContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LobbyList.module.scss */ "./src/components/LobbyList/LobbyList.module.scss");
/* harmony import */ var _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap-buttons */ "react-bootstrap-buttons");
/* harmony import */ var react_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_buttons_dist_react_bootstrap_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap-buttons/dist/react-bootstrap-buttons.css */ "./node_modules/react-bootstrap-buttons/dist/react-bootstrap-buttons.css");
/* harmony import */ var react_bootstrap_buttons_dist_react_bootstrap_buttons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_buttons_dist_react_bootstrap_buttons_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\ajayl\\Desktop\\repos\\bet-you-dont-know-frontend\\src\\components\\LobbyList\\LobbyList.tsx";







const LobbyList = () => {
  const socket = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_SocketContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const {
    0: lobbyList,
    1: setLobbyList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: numInGame,
    1: setNumInGame
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    socket.on("updatePublicLobbyList", lobbies => {
      setLobbyList(lobbies);
    });
    socket.on("lobbyCreated", newLobbyID => {
      router.push("/lobby/" + newLobbyID);
    });
    socket.on("numInGameChanged", newNum => {
      setNumInGame(newNum);
    });
    socket.emit("refetchPublicLobbyList");
  }, []);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const onJoinLobbyClick = lobbyID => {
    router.push("/lobby/" + lobbyID);
  };

  const onCreateLobbyClick = () => {
    socket.emit("createLobby");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: lobbyList && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: ["Players In-Game: ", numInGame]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.lobbyCountLabel,
        children: ["Public Lobbies: ", lobbyList.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), lobbyList.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.publicLobbyList,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.labelRow,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.lobbyNameLabel,
            children: "Lobby Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playerCountLabel,
            children: "Players in lobby:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, undefined), lobbyList.map((lobby, idx) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.lobbyItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.lobbyName,
              children: lobby.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playerCount,
              children: lobby.users.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 21
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              sm: true,
              btnStyle: "primary",
              onClick: () => {
                onJoinLobbyClick(lobby.id);
              },
              className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.joinButton,
              children: "Join"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, undefined)]
          }, idx, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 19
          }, undefined);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        sm: true,
        className: _LobbyList_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.createLobbyButton,
        onClick: () => onCreateLobbyClick(),
        children: "Create new lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (LobbyList);

/***/ }),

/***/ "./src/context/SocketContext.tsx":
/*!***************************************!*\
  !*** ./src/context/SocketContext.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (SocketContext);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LobbyList_LobbyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/LobbyList/LobbyList */ "./src/components/LobbyList/LobbyList.tsx");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layout/Layout */ "./src/components/Layout/Layout.tsx");


var _jsxFileName = "C:\\Users\\ajayl\\Desktop\\repos\\bet-you-dont-know-frontend\\src\\pages\\index.tsx";



const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Bet You Don't Know",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LobbyList_LobbyList__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap-buttons":
/*!******************************************!*\
  !*** external "react-bootstrap-buttons" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-buttons");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9iYnlMaXN0L0xvYmJ5TGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2JieUxpc3QvTG9iYnlMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Tb2NrZXRDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtYnV0dG9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnRcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJpbWdQYXRoIiwicHJvamVjdFJlcG9MaW5rIiwic3R5bGVzIiwiZm9vdGVyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic29jaWFsTGlua3MiLCJyZXBvIiwicmVwb0FuY2hvciIsIkhlYWRlciIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwiYWxlcnRMZWF2ZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJidXR0b25zIiwibGVhdmUiLCJ2YWx1ZSIsImNhbmNlbCIsInRoZW4iLCJidXR0b25WYWwiLCJwdXNoIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjdXJzb3IiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwibG9nb0ltZyIsImhlYWRlclRleHQiLCJMYXlvdXQiLCJzb2NrZXQiLCJ1c2VDb250ZXh0IiwiU29ja2V0Q29udGV4dCIsImlzQ29ubmVjdGVkIiwic2V0SXNDb25uZWN0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFjdGl2ZSIsIm9uIiwibWFpbiIsImNoaWxkcmVuIiwiTG9iYnlMaXN0IiwibG9iYnlMaXN0Iiwic2V0TG9iYnlMaXN0IiwibnVtSW5HYW1lIiwic2V0TnVtSW5HYW1lIiwibG9iYmllcyIsIm5ld0xvYmJ5SUQiLCJuZXdOdW0iLCJlbWl0Iiwib25Kb2luTG9iYnlDbGljayIsImxvYmJ5SUQiLCJvbkNyZWF0ZUxvYmJ5Q2xpY2siLCJsb2JieUNvdW50TGFiZWwiLCJsZW5ndGgiLCJwdWJsaWNMb2JieUxpc3QiLCJsYWJlbFJvdyIsImxvYmJ5TmFtZUxhYmVsIiwicGxheWVyQ291bnRMYWJlbCIsIm1hcCIsImxvYmJ5IiwiaWR4IiwibG9iYnlJdGVtIiwibG9iYnlOYW1lIiwibmFtZSIsInBsYXllckNvdW50IiwidXNlcnMiLCJpZCIsImpvaW5CdXR0b24iLCJjcmVhdGVMb2JieUJ1dHRvbiIsImNyZWF0ZUNvbnRleHQiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUNBLE1BQU1BLE1BQWdCLEdBQUcsTUFBTTtBQUM3QixRQUFNQyxPQUFPLEdBQUcseUJBQWhCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLGtEQUF4QjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBUSxlQUFTLEVBQUVDLDBEQUFNLENBQUNDLE1BQTFCO0FBQUEsOEJBQ0U7QUFBQSw0QkFDSyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFETCxFQUMrQixHQUQvQixlQUVFO0FBQUcsY0FBSSxFQUFDLHFCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGtDQUVvRSxHQUZwRSxlQUdFO0FBQUcsY0FBSSxFQUFDLG1FQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFO0FBQUssVUFBRSxFQUFFSCwwREFBTSxDQUFDSSxXQUFoQjtBQUFBLGdDQUNFO0FBQUcsY0FBSSxFQUFDLHFCQUFSO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVOLE9BQU8sR0FBRyxlQUFwQjtBQUFxQyxlQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLGNBQUksRUFBQyw0QkFBUjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFQSxPQUFPLEdBQUcsYUFBcEI7QUFBbUMsZUFBRyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBT0U7QUFBRyxjQUFJLEVBQUMsc0NBQVI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRUEsT0FBTyxHQUFHLGVBQXBCO0FBQXFDLGVBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVVFO0FBQUcsY0FBSSxFQUFDLDBEQUFSO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVBLE9BQU8sR0FBRyxjQUFwQjtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBc0JFO0FBQUssaUJBQVMsRUFBRUUsMERBQU0sQ0FBQ0ssSUFBdkI7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBRU4sZUFBVDtBQUEwQixtQkFBUyxFQUFFQywwREFBTSxDQUFDTSxVQUE1QztBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFFUixPQUFPLEdBQUc7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlDRCxDQXBDRDs7QUFzQ2VELHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTVUsTUFBdUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3pDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsV0FBVyxHQUFJQyxDQUFELElBQXFEO0FBQ3ZFLFFBQUlKLEtBQUssQ0FBQ0ssVUFBVixFQUFzQjtBQUNwQkQsT0FBQyxDQUFDRSxjQUFGO0FBQ0FGLE9BQUMsQ0FBQ0csZUFBRjtBQUNBQyx1REFBSSxDQUFDO0FBQ0hDLGFBQUssRUFBRSxlQURKO0FBRUhDLFlBQUksRUFBRSw2RUFGSDtBQUdIQyxZQUFJLEVBQUUsU0FISDtBQUlIQyxlQUFPLEVBQUU7QUFDUEMsZUFBSyxFQUFFO0FBQ0xILGdCQUFJLEVBQUUsT0FERDtBQUVMSSxpQkFBSyxFQUFFO0FBRkYsV0FEQTtBQUtQQyxnQkFBTSxFQUFFO0FBTEQ7QUFKTixPQUFELENBQUosQ0FXR0MsSUFYSCxDQVdTQyxTQUFELElBQXVCO0FBQzdCLGdCQUFRQSxTQUFSO0FBQ0UsZUFBSyxPQUFMO0FBQ0VoQixrQkFBTSxDQUFDaUIsSUFBUCxDQUFZQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQTVCO0FBQ0E7O0FBQ0YsZUFBSyxRQUFMO0FBQ0U7QUFMSjtBQU9ELE9BbkJEO0FBb0JEO0FBQ0YsR0F6QkQ7O0FBMkJBLHNCQUNFO0FBQ0UsV0FBTyxFQUFHakIsQ0FBRCxJQUFPRCxXQUFXLENBQUNDLENBQUQsQ0FEN0I7QUFFRSxTQUFLLEVBQUU7QUFBRWtCLFlBQU0sRUFBRXRCLEtBQUssQ0FBQ0ssVUFBTixJQUFvQjtBQUE5QixLQUZUO0FBQUEsMkJBSUU7QUFBSyxlQUFTLEVBQUViLDBEQUFNLENBQUMrQixTQUF2QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRS9CLDBEQUFNLENBQUNnQyxPQUF2QjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFDLGVBQVQ7QUFBeUIsYUFBRyxFQUFDLE1BQTdCO0FBQW9DLG1CQUFTLEVBQUVoQywwREFBTSxDQUFDaUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRWpDLDBEQUFNLENBQUNrQixJQUF2QjtBQUFBLGlDQUNFO0FBQUEsc0JBQUtWLEtBQUssQ0FBQzBCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQTdDRDs7QUErQ2UzQixxRUFBZixFOzs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxNQUFNNEIsTUFBdUIsR0FBSTNCLEtBQUQsSUFBVztBQUN6QyxRQUFNNEIsTUFBTSxHQUFHQyx3REFBVSxDQUFDQyw4REFBRCxDQUF6QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlOLE1BQU0sQ0FBQ08sTUFBWCxFQUFtQjtBQUNqQkgsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRDs7QUFDREosVUFBTSxDQUFDUSxFQUFQLENBQVUsU0FBVixFQUFxQixNQUFNO0FBQ3pCSixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBUUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVNFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBVUU7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFXRTtBQUNFLGdCQUFRLEVBQUMsZ0JBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLGVBZUU7QUFDRSxnQkFBUSxFQUFDLFVBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBb0JFO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZUFBTyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGLGVBcUJFO0FBQ0UsWUFBSSxFQUFDLHFCQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkYsZUF5QkU7QUFDRSxZQUFJLEVBQUMsZUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQStCRTtBQUFNLGVBQVMsRUFBRXhDLDBEQUFNLENBQUM2QyxJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVEsa0JBQVUsRUFBQyxvQkFBbkI7QUFBd0Msa0JBQVUsRUFBRXJDLEtBQUssQ0FBQ0s7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHMEIsV0FBVyxHQUFHL0IsS0FBSyxDQUFDc0MsUUFBVCxHQUFvQixZQUZsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGLGVBbUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkNGO0FBQUEsa0JBREY7QUF1Q0QsQ0FsREQ7O0FBb0RlWCxxRUFBZixFOzs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1ZLFNBQW1CLEdBQUcsTUFBTTtBQUNoQyxRQUFNWCxNQUFNLEdBQUdDLHdEQUFVLENBQUNDLDhEQUFELENBQXpCO0FBRUEsUUFBTTtBQUFBLE9BQUNVLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCUixzREFBUSxFQUExQztBQUNBLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsc0RBQVEsQ0FBQyxDQUFELENBQTFDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkTixVQUFNLENBQUNRLEVBQVAsQ0FBVSx1QkFBVixFQUFvQ1EsT0FBRCxJQUEyQjtBQUM1REgsa0JBQVksQ0FBQ0csT0FBRCxDQUFaO0FBQ0QsS0FGRDtBQUlBaEIsVUFBTSxDQUFDUSxFQUFQLENBQVUsY0FBVixFQUEyQlMsVUFBRCxJQUF3QjtBQUNoRDVDLFlBQU0sQ0FBQ2lCLElBQVAsQ0FBWSxZQUFZMkIsVUFBeEI7QUFDRCxLQUZEO0FBSUFqQixVQUFNLENBQUNRLEVBQVAsQ0FBVSxrQkFBVixFQUErQlUsTUFBRCxJQUFvQjtBQUNoREgsa0JBQVksQ0FBQ0csTUFBRCxDQUFaO0FBQ0QsS0FGRDtBQUlBbEIsVUFBTSxDQUFDbUIsSUFBUCxDQUFZLHdCQUFaO0FBQ0QsR0FkUSxFQWNOLEVBZE0sQ0FBVDtBQWdCQSxRQUFNOUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNOEMsZ0JBQWdCLEdBQUlDLE9BQUQsSUFBcUI7QUFDNUNoRCxVQUFNLENBQUNpQixJQUFQLENBQVksWUFBWStCLE9BQXhCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CdEIsVUFBTSxDQUFDbUIsSUFBUCxDQUFZLGFBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsY0FDR1AsU0FBUyxpQkFDUjtBQUFLLGVBQVMsRUFBRWhELDZEQUFNLENBQUMrQixTQUF2QjtBQUFBLDhCQUNFO0FBQUEsd0NBQXVCbUIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFFbEQsNkRBQU0sQ0FBQzJELGVBQXZCO0FBQUEsdUNBQ21CWCxTQUFTLENBQUNZLE1BRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUtHWixTQUFTLENBQUNZLE1BQVYsR0FBbUIsQ0FBbkIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFFNUQsNkRBQU0sQ0FBQzZELGVBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFN0QsNkRBQU0sQ0FBQzhELFFBQXZCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFOUQsNkRBQU0sQ0FBQytELGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFL0QsNkRBQU0sQ0FBQ2dFLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBTUdoQixTQUFTLENBQUNpQixHQUFWLENBQWMsQ0FBQ0MsS0FBRCxFQUFlQyxHQUFmLEtBQXVCO0FBQ3BDLDhCQUNFO0FBQWUscUJBQVMsRUFBRW5FLDZEQUFNLENBQUNvRSxTQUFqQztBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRXBFLDZEQUFNLENBQUNxRSxTQUF2QjtBQUFBLHdCQUFtQ0gsS0FBSyxDQUFDSTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFFdEUsNkRBQU0sQ0FBQ3VFLFdBQXZCO0FBQUEsd0JBQ0dMLEtBQUssQ0FBQ00sS0FBTixDQUFZWjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFLRSxxRUFBQyw4REFBRDtBQUNFLGdCQUFFLE1BREo7QUFFRSxzQkFBUSxFQUFDLFNBRlg7QUFHRSxxQkFBTyxFQUFFLE1BQU07QUFDYkosZ0NBQWdCLENBQUNVLEtBQUssQ0FBQ08sRUFBUCxDQUFoQjtBQUNELGVBTEg7QUFNRSx1QkFBUyxFQUFFekUsNkRBQU0sQ0FBQzBFLFVBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUEsYUFBVVAsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBa0JELFNBbkJBLENBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBa0NFLHFFQUFDLDhEQUFEO0FBQ0UsVUFBRSxNQURKO0FBRUUsaUJBQVMsRUFBRW5FLDZEQUFNLENBQUMyRSxpQkFGcEI7QUFHRSxlQUFPLEVBQUUsTUFBTWpCLGtCQUFrQixFQUhuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUFnREQsQ0FoRkQ7O0FBa0ZlWCx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQUE7QUFHQSxNQUFNVCxhQUFhLGdCQUFHc0MsMkRBQWEsQ0FBUyxJQUFULENBQW5DO0FBRWV0Qyw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUEsTUFBTXVDLElBQWMsR0FBRyxNQUFNO0FBQzNCLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsaUVBQUQ7QUFBUSxXQUFLLEVBQUMsb0JBQWQ7QUFBQSw2QkFDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQ0FSRDs7QUFVZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNiQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzFfS1NoXCIsXG5cdFwicmVwb1wiOiBcIkZvb3Rlcl9yZXBvX18ya1lGYVwiLFxuXHRcInJlcG9BbmNob3JcIjogXCJGb290ZXJfcmVwb0FuY2hvcl9fTXdpalpcIixcblx0XCJzb2NpYWxMaW5rc1wiOiBcIkZvb3Rlcl9zb2NpYWxMaW5rc19famQ5bnJcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Gb290ZXIubW9kdWxlLnNjc3NcIjtcclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBpbWdQYXRoID0gXCJodHRwczovL2FqYXlsaXUuY29tL2ltZ1wiO1xyXG4gIGNvbnN0IHByb2plY3RSZXBvTGluayA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3Ryb3lnYW1lZGV2L2JldC15b3UtZG9udC1rbm93XCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9e1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWpheWxpdS5jb21cIj5BamF5IExpdTwvYT4uIEFsbCBSaWdodHMgUmVzZXJ2ZWQg4oCie1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFpbC5nb29nbGUuY29tL21haWwvP3ZpZXc9Y20mZnM9MSZ0bz1jb250YWN0QGFqYXlsaXUuY29tXCI+XHJcbiAgICAgICAgICAgIGNvbnRhY3RAYWpheWxpdS5jb21cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNvY2lhbExpbmtzfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FqYXlsaXUuY29tXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQYXRoICsgXCIvd2ViX2ljb24uc3ZnXCJ9IGFsdD1cIndlYnNpdGUgbG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FqYXlMaXVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGggKyBcIi9naXRodWIuc3ZnXCJ9IGFsdD1cImdpdGh1YiBsb2dvXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWpheWxpdS9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGggKyBcIi9saW5rZWRpbi5zdmdcIn0gYWx0PVwibGlua2VkaW4gbG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2xyNlhDYWd1UGVNMGc3VUw2THZzM2dcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGggKyBcIi95b3V0dWJlLnN2Z1wifSBhbHQ9XCJ5b3V0dWJlIGxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVwb30+XHJcbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0UmVwb0xpbmt9IGNsYXNzTmFtZT17c3R5bGVzLnJlcG9BbmNob3J9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aCArIFwiL3JlcG8uc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgIFZpZXcgdGhpcyBwcm9qZWN0IG9uIEdpdGh1YlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfXzN4ZUgtXCIsXG5cdFwid3JhcHBlclwiOiBcIkhlYWRlcl93cmFwcGVyX18xY2dYU1wiLFxuXHRcImxvZ29JbWdcIjogXCJIZWFkZXJfbG9nb0ltZ19fMk80blhcIixcblx0XCJ0ZXh0XCI6IFwiSGVhZGVyX3RleHRfXzFCY2tQXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaGVhZGVyVGV4dDogc3RyaW5nO1xyXG4gIGFsZXJ0TGVhdmU/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICBpZiAocHJvcHMuYWxlcnRMZWF2ZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgIHRpdGxlOiBcIkxlYXZlIFdhcm5pbmdcIixcclxuICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZSB0aGUgbG9iYnkgLSB5b3Ugd2lsbCBsb3NlIGFsbCB5b3VyIHByb2dyZXNzIVwiLFxyXG4gICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgIGxlYXZlOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiTGVhdmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwibGVhdmVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYW5jZWw6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkudGhlbigoYnV0dG9uVmFsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvblZhbCkge1xyXG4gICAgICAgICAgY2FzZSBcImxlYXZlXCI6XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgIHN0eWxlPXt7IGN1cnNvcjogcHJvcHMuYWxlcnRMZWF2ZSAmJiBcInBvaW50ZXJcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvSW1nfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgPGgxPntwcm9wcy5oZWFkZXJUZXh0fTwvaDE+XHJcbiAgICAgICAgICAgIHsvKiA8aDI+YSBzaW1wbGUgbXVsdGlwbGF5ZXIgZ2FtZSBvZiB3aXRzLCBkZWNlcHRpb24sIGFuZCBiZXRzITwvaDI+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkxheW91dF9tYWluX18zbTF5S1wiXG59O1xuIiwiaW1wb3J0IEZvb3RlciBmcm9tIFwiQGNvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU29ja2V0Q29udGV4dCBmcm9tIFwiQGNvbnRleHQvU29ja2V0Q29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG9wZW5HcmFwaFRpdGxlPzogc3RyaW5nO1xyXG4gIGFsZXJ0TGVhdmU/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XHJcbiAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xyXG4gICAgfVxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmV0IFlvdSBEb24ndCBLbm93PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiYSBzaW1wbGUgbXVsdGlwbGF5ZXIgZ2FtZSBvZiB3aXRzLCBkZWNlcHRpb24sIGFuZCBiZXRzIVxyXG4gICAgICAgIFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQmV0IFlvdSBEb24ndCBLbm93XCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cImEgc2ltcGxlIG11bHRpcGxheWVyIGdhbWUgb2Ygd2l0cywgZGVjZXB0aW9uLCBhbmQgYmV0cyFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYmV0LXlvdS1kb250LWtub3cuaGVyb2t1YXBwLmNvbS9pbWcvYmV0LXlvdS1kb250LWtub3ctbG9nby5wbmdcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkJldCBZb3UgRG9uJ3QgS25vd1wiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJhIHNpbXBsZSBtdWx0aXBsYXllciBnYW1lIG9mIHdpdHMsIGRlY2VwdGlvbiwgYW5kIGJldHMhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9iZXQteW91LWRvbnQta25vdy5oZXJva3VhcHAuY29tL2ltZy9iZXQteW91LWRvbnQta25vdy1sb2dvLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8SGVhZGVyIGhlYWRlclRleHQ9XCJCZXQgWW91IERvbid0IEtub3dcIiBhbGVydExlYXZlPXtwcm9wcy5hbGVydExlYXZlfSAvPlxyXG4gICAgICAgIHtpc0Nvbm5lY3RlZCA/IHByb3BzLmNoaWxkcmVuIDogXCJMb2FkaW5nLi4uXCJ9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTG9iYnlMaXN0X2NvbnRhaW5lcl9feFlSM2xcIixcblx0XCJsb2JieUNvdW50TGFiZWxcIjogXCJMb2JieUxpc3RfbG9iYnlDb3VudExhYmVsX18yOG1ZcFwiLFxuXHRcInB1YmxpY0xvYmJ5TGlzdFwiOiBcIkxvYmJ5TGlzdF9wdWJsaWNMb2JieUxpc3RfXzNocXVQXCIsXG5cdFwibGFiZWxSb3dcIjogXCJMb2JieUxpc3RfbGFiZWxSb3dfXzNFM0F0XCIsXG5cdFwibG9iYnlJdGVtXCI6IFwiTG9iYnlMaXN0X2xvYmJ5SXRlbV9fMnRrVzZcIixcblx0XCJqb2luQnV0dG9uXCI6IFwiTG9iYnlMaXN0X2pvaW5CdXR0b25fX0g4S3JYXCIsXG5cdFwiY3JlYXRlTG9iYnlCdXR0b25cIjogXCJMb2JieUxpc3RfY3JlYXRlTG9iYnlCdXR0b25fXzJrUlZlXCJcbn07XG4iLCJpbXBvcnQgU29ja2V0Q29udGV4dCBmcm9tIFwiQGNvbnRleHQvU29ja2V0Q29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYmJ5IH0gZnJvbSBcIkBzaGFyZWQvdHlwZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Mb2JieUxpc3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtYnV0dG9uc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1ib290c3RyYXAtYnV0dG9ucy9kaXN0L3JlYWN0LWJvb3RzdHJhcC1idXR0b25zLmNzc1wiO1xyXG5cclxuY29uc3QgTG9iYnlMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBzb2NrZXQgPSB1c2VDb250ZXh0KFNvY2tldENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbbG9iYnlMaXN0LCBzZXRMb2JieUxpc3RdID0gdXNlU3RhdGU8QXJyYXk8TG9iYnk+PigpO1xyXG4gIGNvbnN0IFtudW1JbkdhbWUsIHNldE51bUluR2FtZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbihcInVwZGF0ZVB1YmxpY0xvYmJ5TGlzdFwiLCAobG9iYmllczogQXJyYXk8TG9iYnk+KSA9PiB7XHJcbiAgICAgIHNldExvYmJ5TGlzdChsb2JiaWVzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNvY2tldC5vbihcImxvYmJ5Q3JlYXRlZFwiLCAobmV3TG9iYnlJRDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvYmJ5L1wiICsgbmV3TG9iYnlJRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzb2NrZXQub24oXCJudW1JbkdhbWVDaGFuZ2VkXCIsIChuZXdOdW06IG51bWJlcikgPT4ge1xyXG4gICAgICBzZXROdW1JbkdhbWUobmV3TnVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNvY2tldC5lbWl0KFwicmVmZXRjaFB1YmxpY0xvYmJ5TGlzdFwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBvbkpvaW5Mb2JieUNsaWNrID0gKGxvYmJ5SUQ6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9iYnkvXCIgKyBsb2JieUlEKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZUxvYmJ5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzb2NrZXQuZW1pdChcImNyZWF0ZUxvYmJ5XCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9iYnlMaXN0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2PlBsYXllcnMgSW4tR2FtZToge251bUluR2FtZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9iYnlDb3VudExhYmVsfT5cclxuICAgICAgICAgICAgUHVibGljIExvYmJpZXM6IHtsb2JieUxpc3QubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7bG9iYnlMaXN0Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB1YmxpY0xvYmJ5TGlzdH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFJvd30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYmJ5TmFtZUxhYmVsfT5Mb2JieSBOYW1lOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb3VudExhYmVsfT5QbGF5ZXJzIGluIGxvYmJ5OjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7bG9iYnlMaXN0Lm1hcCgobG9iYnk6IExvYmJ5LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT17c3R5bGVzLmxvYmJ5SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2JieU5hbWV9Pntsb2JieS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xvYmJ5LnVzZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnRuU3R5bGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Kb2luTG9iYnlDbGljayhsb2JieS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuam9pbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBKb2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVMb2JieUJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DcmVhdGVMb2JieUNsaWNrKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBuZXcgbG9iYnlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYmJ5TGlzdDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3QgU29ja2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U29ja2V0PihudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2tldENvbnRleHQ7XHJcbiIsImltcG9ydCBMb2JieUxpc3QgZnJvbSBcIkBjb21wb25lbnRzL0xvYmJ5TGlzdC9Mb2JieUxpc3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJCZXQgWW91IERvbid0IEtub3dcIj5cclxuICAgICAgICA8TG9iYnlMaXN0IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAtYnV0dG9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydFwiKTsiXSwic291cmNlUm9vdCI6IiJ9