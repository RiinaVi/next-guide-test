webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/swr/esm/config.js":
false,

/***/ "./node_modules/swr/esm/index.js":
false,

/***/ "./node_modules/swr/esm/libs/hash.js":
false,

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
false,

/***/ "./node_modules/swr/esm/libs/is-online.js":
false,

/***/ "./node_modules/swr/esm/libs/throttle.js":
false,

/***/ "./node_modules/swr/esm/swr-config-context.js":
false,

/***/ "./node_modules/swr/esm/use-swr-pages.js":
false,

/***/ "./node_modules/swr/esm/use-swr.js":
false,

/***/ "./node_modules/swr/node_modules/fast-deep-equal/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\arink\\Desktop\\next-guide-test\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    className: "jsx-2153337053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-2153337053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2153337053",
    __self: _this
  }, "li.jsx-2153337053{list-style:none;margin:5px 0;}a.jsx-2153337053{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-2153337053:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXJpbmtcXERlc2t0b3BcXG5leHQtZ3VpZGUtdGVzdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCb0IsQUFHeUIsQUFJSyxBQUtULFlBQ2QsSUFUZSxhQUNmLHFCQUdhLFdBQ1Msb0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXJpbmtcXERlc2t0b3BcXG5leHQtZ3VpZGUtdGVzdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxyXG4gICAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcclxuICAgICAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvcC9baWRdXCJ9IGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\arink\\\\Desktop\\\\next-guide-test\\\\pages\\\\index.js */"));
};

function Blog() {
  var _this2 = this;

  return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2457931151",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "My Blog"), __jsx("ul", {
    className: "jsx-2457931151",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, getPosts().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2457931151",
    __self: this
  }, "h1.jsx-2457931151,a.jsx-2457931151{font-family:'Arial';}ul.jsx-2457931151{padding:0;}li.jsx-2457931151{list-style:none;margin:5px 0;}a.jsx-2457931151{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2457931151:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXJpbmtcXERlc2t0b3BcXG5leHQtZ3VpZGUtdGVzdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDd0IsQUFJK0IsQUFHVixBQUdNLEFBSUssQUFJVCxVQVZkLEVBV0EsSUFSZSxJQU5mLFNBT0EscUJBR2EsV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXGFyaW5rXFxEZXNrdG9wXFxuZXh0LWd1aWRlLXRlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcclxuICAgICAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXHJcbiAgICAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3AvW2lkXVwifSBhcz17YC9wLyR7cG9zdC5pZH1gfT5cclxuICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICB9XHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\arink\\\\Desktop\\\\next-guide-test\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.770f4481c4ba2de3f752.hot-update.js.map