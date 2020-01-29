(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- //NOTE APP COMPONENT WILL AUTO REDIRECT TO LOGIN -->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/checking/checking.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/checking/checking.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"checking\" class=\"account\">\n    <h1>Checking Accounts</h1>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Checking Accounts</th>\n                <th scope=\"col\">$3,782.01</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Account Name</td>\n            <td>Available Balance</td>\n        </tr>\n        <tr>\n            <td><a [routerLink]=\"['/dashboard/checking/id']\">Checking -8349</a></td>\n            <td>$3,782.01</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<a [routerLink]=\"['/dashboard/home']\">Back to All Accounts</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/checking/one-checking/one-checking.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/checking/one-checking/one-checking.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"checking\" class=\"account\">\n    <h1>Checking Accounts</h1>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Checking -8349</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Account Name</td>\n            <td>Available Balance</td>\n        </tr>\n        <tr>\n            <td>Checking -8349</td>\n            <td>$3,782.01</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<a [routerLink]=\"['/dashboard/home']\">Back to All Accounts</a>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/credit/credit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/credit/credit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"cc\" class=\"account\">\n    <h1>Credit Cards</h1>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Credit Cards</th>\n                <th scope=\"col\">  </th>\n                <th scope=\"col\">$15,000.00</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Account Name</td>\n            <td>Available Credit</td>\n            <td>Current Balance</td>\n        </tr>\n        <tr>\n            <td><a [routerLink]=\"['/dashboard/credit', credit._id]\">Credit Card -4207</a></td>\n            <td>$13,387.56</td>\n            <td>$1,612.44</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<a [routerLink]=\"['/dashboard/home']\">Back to All Accounts</a>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/credit/one-credit/one-credit.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/credit/one-credit/one-credit.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>one-credit works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Banking App</title>\n</head>\n<body>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">BBC BANK</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        \n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">PERSONAL<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">BUSINESS</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <a href=\"/\"><img src=\"assets/images/search.png\" alt=\"search\"></a>\n            </form>\n            <span class=\"navbar-text\">\n                <a [routerLink]=\"['/']\">Chat with us</a>\n            </span>\n        </div>\n    </nav>\n    <div class=\"subnav\">\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">CHECKING & SAVINGS</li>\n            <li class=\"list-inline-item\">CREDIT CARDS</li>\n            <li class=\"list-inline-item\">LOANS</li>\n        </ul>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div id=\"sidebar\" class=\"col-md-2\">\n                <h4>Links</h4>\n                <p>Open an Account</p>\n                <p>Online Statements</p>\n            </div>\n            <div id=\"main\" class=\"col-md-8\">\n                <router-outlet></router-outlet>\n            </div>\n            <div class=\"col-md-2\">\n                <h4>Transfer Money</h4>\n                <form (submit)=\"transferMoney()\" class=\"form1\">\n                    <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"trans_from\">\n                        <option  disabled selected>From Account</option>\n                        <option>Checking -8349</option>\n                        <option>Savings -2537</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <select class=\"form-control\" id=\"trans_to\">\n                        <option  disabled selected>To Account</option>\n                        <option>Checking -8349</option>\n                        <option>Savings -2537</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"amount\">Amount</label>\n                        <input type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" class=\"form-control\">\n                    </div>\n                    <button type=\"submit\" [routerLink]=\"['/dashboard']\" class=\"btn btn-light\" value=\"Create Task\" id=\"login_btn\">Transfer</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome, Breanne</h1>\n<div id=\"checking\" class=\"account\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr id=\"top\">\n                <th scope=\"col\"><a [routerLink]=\"['/dashboard/checking']\">Checking Accounts</a></th>\n                <th scope=\"col\">$3,782.01</th>\n            </tr>\n            <tr>\n                <td><span>Account Name</span></td>\n                <td><span>Available Balance</span></td>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Checking -8349</td>\n            <td>$3,782.01</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<div id=\"saving\" class=\"account\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr id=\"top\">\n                <th scope=\"col\"><a [routerLink]=\"['/dashboard/savings']\">Savings Accounts</a></th>\n                <th scope=\"col\">$27,900.00</th>\n            </tr>\n            <tr>\n                <td><span>Account Name</span></td>\n                <td><span>Available Balance</span></td>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Savings -2537</td>\n            <td>$27,900.00</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<div id=\"cc\" class=\"account\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr id=\"top\">\n                <th scope=\"col\"><a [routerLink]=\"['/dashboard/credit']\">Credit Cards</a></th>\n                <th scope=\"col\">  </th>\n                <th scope=\"col\">$15,000.00</th>\n            </tr>\n            <tr>\n                <td><span>Account Name</span></td>\n                <td><span>Available Credit</span></td>\n                <td><span>Current Balance</span></td>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Credit Card -4207</td>\n            <td>$13,387.56</td>\n            <td>$1,612.44</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<div id=\"loan\" class=\"account\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr id=\"top\">\n                <th scope=\"col\"><a [routerLink]=\"['/dashboard/loans']\">Loans</a></th>\n                <th scope=\"col\">  </th>\n                <th scope=\"col\">$25,000.00</th>\n            </tr>\n            <tr>\n                <td><span>Account Name</span></td>\n                <td><span>Original Amount</span></td>\n                <td><span>Remaining Balance</span></td>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Loan -1289</td>\n            <td>$25,000.00</td>\n            <td>$5,876.21</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/loans/loans.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/loans/loans.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"loan\" class=\"account\">\n    <h1>Loans</h1>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Loans</th>\n                <th scope=\"col\">  </th>\n                <th scope=\"col\">$25,000.00</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Account Name</td>\n            <td>Original Amount</td>\n            <td>Remaining Balance</td>\n        </tr>\n        <tr>\n            <td><a [routerLink]=\"['/dashboard/loan', loan._id]\">Loan -1289</a></td>\n            <td>$25,000.00</td>\n            <td>$5,876.21</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<a [routerLink]=\"['/dashboard/home']\">Back to All Accounts</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/loans/one-loan/one-loan.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/loans/one-loan/one-loan.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>one-loan works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/savings/one-savings/one-savings.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/savings/one-savings/one-savings.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>one-savings works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/savings/savings.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/savings/savings.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"saving\" class=\"account\">\n    <h1>Savings Accounts</h1>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\"><a [routerLink]=\"['/dashboard/savings']\">Savings Accounts</a></th>\n                <th scope=\"col\">$27,900.00</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Account Name</td>\n            <td>Available Balance</td>\n        </tr>\n        <tr>\n            <td><a [routerLink]=\"['/dashboard/savings', savings._id]\">Savings -2537</a></td>\n            <td>$27,900.00</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<a [routerLink]=\"['/dashboard/home']\">Back to All Accounts</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload/file-upload.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload/file-upload.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>file-upload works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>BBC Bank</title>\n</head>\n<body>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">BBC BANK</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">PERSONAL<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">BUSINESS</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <a href=\"/\"><img src=\"assets/images/search.png\" alt=\"search\"></a>\n            </form>\n            <span class=\"navbar-text\">\n                <a [routerLink]=\"['/registration']\">REGISTER</a>\n            </span>\n        </div>\n    </nav>\n    <div class=\"subnav\">\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">CHECKING & SAVINGS</li>\n            <li class=\"list-inline-item\">CREDIT CARDS</li>\n            <li class=\"list-inline-item\">LOANS</li>        \n        </ul>\n    </div>\n    <div class=\"container-fluid\" [ngStyle]=\"{background: 'url(assets/images/sky.jpg)'}\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <h1>Welcome to BBC BANK</h1>\n                <span><h3>The sky is the limit.</h3></span>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"login\">\n                    <h2>LOG IN</h2>\n                    <form (submit)=\"onSubmit()\" class=\"form1\">\n                        <div class=\"form-group\">\n                            <label for=\"user.email\">Email</label>\n                            <input type=\"text\" [(ngModel)]=\"user.email\" name=\"user.email\" id=\"user.email\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"user.password\">Password</label>\n                            <input type=\"password\" [(ngModel)]=\"user.password\" name=\"user.password\" id=\"user.password\" class=\"form-control\">\n                        </div>\n                        <button type=\"submit\" [routerLink]=\"['/dashboard/home']\" class=\"btn btn-light\" value=\"Create Task\" id=\"login_btn\">LOGIN</button>\n                    </form>\n                    <span><p><a [routerLink]=\"['/registration']\">Need an account? Register here</a></p></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>BBC Bank</title>\n</head>\n<body>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">BBC BANK</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">PERSONAL<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">BUSINESS</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <a href=\"/\"><img src=\"assets/images/search.png\" alt=\"search\"></a>\n            </form>\n            <span class=\"navbar-text\">\n                <a [routerLink]=\"['/login']\">LOG IN</a>\n            </span>\n        </div>\n    </nav>\n    <div class=\"subnav\">\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">CHECKING & SAVINGS</li>\n            <li class=\"list-inline-item\">CREDIT CARDS</li>\n            <li class=\"list-inline-item\">LOANS</li>        \n        </ul>\n    </div>\n    <div class=\"container-fluid\" [ngStyle]=\"{background: 'url(assets/images/sky.jpg)'}\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"login\">\n                    <h2>REGISTER</h2>\n                    <form (submit)=\"onSubmit()\" class=\"form1\">\n                        <div class=\"form-group row\">\n                            <label for=\"newUser.firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"newUser.firstName\" name=\"firstName\" id=\"newUser.firstName\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"newUser.lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"newUser.lastName\" name=\"newUser.lastName\" id=\"newUser.lastName\" class=\"form-control\">\n                            </div>                        \n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"newUser.birthday\" class=\"col-sm-2 col-form-label\">Birthday</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"date\" [(ngModel)]=\"newUser.birthday\" name=\"newUser.birthday\" id=\"newUser.birthday\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"newUser.email\" class=\"col-sm-2 col-form-label\">Email</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"newUser.email\" name=\"newUser.email\" id=\"newUser.email\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"newUser.password\" class=\"col-sm-2 col-form-label\">Password</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"password\" [(ngModel)]=\"newUser.password\" name=\"newUser.password\" id=\"newUser.password\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <button type=\"submit\" [routerLink]=\"['/dashboard/home']\" class=\"btn btn-light\" value=\"Create Task\" id=\"login_btn\">REGISTER</button>\n                    </form>\n                    <span><p><a [routerLink]=\"['/login']\">Back to Log In</a></p></span>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n        </div>\n    </div>\n</body>\n</html>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_checking_checking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/checking/checking.component */ "./src/app/dashboard/checking/checking.component.ts");
/* harmony import */ var _dashboard_checking_one_checking_one_checking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/checking/one-checking/one-checking.component */ "./src/app/dashboard/checking/one-checking/one-checking.component.ts");
/* harmony import */ var _dashboard_savings_savings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/savings/savings.component */ "./src/app/dashboard/savings/savings.component.ts");
/* harmony import */ var _dashboard_savings_one_savings_one_savings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/savings/one-savings/one-savings.component */ "./src/app/dashboard/savings/one-savings/one-savings.component.ts");
/* harmony import */ var _dashboard_loans_loans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/loans/loans.component */ "./src/app/dashboard/loans/loans.component.ts");
/* harmony import */ var _dashboard_loans_one_loan_one_loan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/loans/one-loan/one-loan.component */ "./src/app/dashboard/loans/one-loan/one-loan.component.ts");
/* harmony import */ var _dashboard_credit_credit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/credit/credit.component */ "./src/app/dashboard/credit/credit.component.ts");
/* harmony import */ var _dashboard_credit_one_credit_one_credit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/credit/one-credit/one-credit.component */ "./src/app/dashboard/credit/one-credit/one-credit.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");















const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], children: [
            { path: 'home', component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
            { path: 'checking', component: _dashboard_checking_checking_component__WEBPACK_IMPORTED_MODULE_5__["CheckingComponent"], children: [
                    { path: 'id', component: _dashboard_checking_one_checking_one_checking_component__WEBPACK_IMPORTED_MODULE_6__["OneCheckingComponent"] }
                ] },
            { path: 'savings', component: _dashboard_savings_savings_component__WEBPACK_IMPORTED_MODULE_7__["SavingsComponent"], children: [
                    { path: ':id', component: _dashboard_savings_one_savings_one_savings_component__WEBPACK_IMPORTED_MODULE_8__["OneSavingsComponent"] }
                ] },
            { path: 'loans', component: _dashboard_loans_loans_component__WEBPACK_IMPORTED_MODULE_9__["LoansComponent"], children: [
                    { path: ':id', component: _dashboard_loans_one_loan_one_loan_component__WEBPACK_IMPORTED_MODULE_10__["OneLoanComponent"] }
                ] },
            { path: 'credit', component: _dashboard_credit_credit_component__WEBPACK_IMPORTED_MODULE_11__["CreditComponent"], children: [
                    { path: ':id', component: _dashboard_credit_one_credit_one_credit_component__WEBPACK_IMPORTED_MODULE_12__["OneCreditComponent"] }
                ] },
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");




let AppComponent = class AppComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'public';
    }
    ngOnInit() {
        this.goLogin();
    }
    goLogin() {
        this._router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_checking_checking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/checking/checking.component */ "./src/app/dashboard/checking/checking.component.ts");
/* harmony import */ var _dashboard_savings_savings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/savings/savings.component */ "./src/app/dashboard/savings/savings.component.ts");
/* harmony import */ var _dashboard_credit_credit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/credit/credit.component */ "./src/app/dashboard/credit/credit.component.ts");
/* harmony import */ var _dashboard_loans_loans_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/loans/loans.component */ "./src/app/dashboard/loans/loans.component.ts");
/* harmony import */ var _dashboard_checking_one_checking_one_checking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/checking/one-checking/one-checking.component */ "./src/app/dashboard/checking/one-checking/one-checking.component.ts");
/* harmony import */ var _dashboard_credit_one_credit_one_credit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/credit/one-credit/one-credit.component */ "./src/app/dashboard/credit/one-credit/one-credit.component.ts");
/* harmony import */ var _dashboard_loans_one_loan_one_loan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/loans/one-loan/one-loan.component */ "./src/app/dashboard/loans/one-loan/one-loan.component.ts");
/* harmony import */ var _dashboard_savings_one_savings_one_savings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/savings/one-savings/one-savings.component */ "./src/app/dashboard/savings/one-savings/one-savings.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _dashboard_checking_checking_component__WEBPACK_IMPORTED_MODULE_10__["CheckingComponent"],
            _dashboard_savings_savings_component__WEBPACK_IMPORTED_MODULE_11__["SavingsComponent"],
            _dashboard_credit_credit_component__WEBPACK_IMPORTED_MODULE_12__["CreditComponent"],
            _dashboard_loans_loans_component__WEBPACK_IMPORTED_MODULE_13__["LoansComponent"],
            _dashboard_checking_one_checking_one_checking_component__WEBPACK_IMPORTED_MODULE_14__["OneCheckingComponent"],
            _dashboard_credit_one_credit_one_credit_component__WEBPACK_IMPORTED_MODULE_15__["OneCreditComponent"],
            _dashboard_loans_one_loan_one_loan_component__WEBPACK_IMPORTED_MODULE_16__["OneLoanComponent"],
            _dashboard_savings_one_savings_one_savings_component__WEBPACK_IMPORTED_MODULE_17__["OneSavingsComponent"],
            _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_18__["FileUploadComponent"],
            _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/checking/checking.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/checking/checking.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th a{\n    color: white;\n    letter-spacing: .5pt;\n}\n.table.table-striped{\n    margin-top: 20px;\n    border: 1px #888888 solid;\n    box-shadow: 1px 1px 1px #888888;\n}\nth{\n    letter-spacing: .5pt;\n}\nh1{\n    color: #333333;\n    font-size: 30pt;\n    font-weight: normal;\n}\nthead{\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#0072bc),to(#3599da));\n    background-image: linear-gradient(#0072bc,#3599da);\n}\nth{\n    color: white;\n}\na{\n    color: #333333\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NoZWNraW5nL2NoZWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMEZBQWtEO0lBQWxELGtEQUFrRDtBQUN0RDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jaGVja2luZy9jaGVja2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGggYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XG59XG4udGFibGUudGFibGUtc3RyaXBlZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4ICM4ODg4ODggc29saWQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzg4ODg4ODtcbn1cbnRoe1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB0O1xufVxuaDF7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAzMHB0O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG50aGVhZHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNzJiYywjMzU5OWRhKTtcbn1cbnRoe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmF7XG4gICAgY29sb3I6ICMzMzMzMzNcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/checking/checking.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/checking/checking.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingComponent", function() { return CheckingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckingComponent = class CheckingComponent {
    constructor() { }
    ngOnInit() {
    }
};
CheckingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/checking/checking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checking.component.css */ "./src/app/dashboard/checking/checking.component.css")).default]
    })
], CheckingComponent);



/***/ }),

/***/ "./src/app/dashboard/checking/one-checking/one-checking.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/checking/one-checking/one-checking.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jaGVja2luZy9vbmUtY2hlY2tpbmcvb25lLWNoZWNraW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/checking/one-checking/one-checking.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/checking/one-checking/one-checking.component.ts ***!
  \***************************************************************************/
/*! exports provided: OneCheckingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneCheckingComponent", function() { return OneCheckingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OneCheckingComponent = class OneCheckingComponent {
    constructor() { }
    ngOnInit() {
    }
};
OneCheckingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-checking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one-checking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/checking/one-checking/one-checking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one-checking.component.css */ "./src/app/dashboard/checking/one-checking/one-checking.component.css")).default]
    })
], OneCheckingComponent);



/***/ }),

/***/ "./src/app/dashboard/credit/credit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/credit/credit.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th a{\n    color: white;\n    letter-spacing: .5pt;\n}\n.table.table-striped{\n    margin-top: 20px;\n    border: 1px #888888 solid;\n    box-shadow: 1px 1px 1px #888888;\n}\nth{\n    letter-spacing: .5pt;\n}\nh1{\n    color: #333333;\n    font-size: 30pt;\n    font-weight: normal;\n}\nthead{\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#0072bc),to(#3599da));\n    background-image: linear-gradient(#0072bc,#3599da);\n}\nth{\n    color: white;\n}\na{\n    color: #333333\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwwRkFBa0Q7SUFBbEQsa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIGF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB0O1xufVxuLnRhYmxlLnRhYmxlLXN0cmlwZWR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXI6IDFweCAjODg4ODg4IHNvbGlkO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM4ODg4ODg7XG59XG50aHtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVwdDtcbn1cbmgxe1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtc2l6ZTogMzBwdDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxudGhlYWR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDcyYmMsIzM1OTlkYSk7XG59XG50aHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5he1xuICAgIGNvbG9yOiAjMzMzMzMzXG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/credit/credit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/credit/credit.component.ts ***!
  \******************************************************/
/*! exports provided: CreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditComponent", function() { return CreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreditComponent = class CreditComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-credit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/credit/credit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./credit.component.css */ "./src/app/dashboard/credit/credit.component.css")).default]
    })
], CreditComponent);



/***/ }),

/***/ "./src/app/dashboard/credit/one-credit/one-credit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/credit/one-credit/one-credit.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcmVkaXQvb25lLWNyZWRpdC9vbmUtY3JlZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/credit/one-credit/one-credit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/credit/one-credit/one-credit.component.ts ***!
  \*********************************************************************/
/*! exports provided: OneCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneCreditComponent", function() { return OneCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OneCreditComponent = class OneCreditComponent {
    constructor() { }
    ngOnInit() {
    }
};
OneCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-credit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/credit/one-credit/one-credit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one-credit.component.css */ "./src/app/dashboard/credit/one-credit/one-credit.component.css")).default]
    })
], OneCreditComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\n    background: none;\n    background-color: #e6f2fd;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light{\n    background-color:#0072bc!important;\n    padding: 8px 50px;\n}\na.nav-link{\n    color: white!important;\n    /* font-weight: bold; */\n    letter-spacing: 1pt;\n    margin-right: 10px;\n}\na.navbar-brand{\n    color: white!important;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light img{\n    width: 25px;\n    margin: 5px;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light span a{\n    color: white!important;\n    /* font-weight: bold; */\n    letter-spacing: 1pt;\n    margin-left: 10px;\n}\n.subnav{\n    width: auto;\n    height: 50px;\n    border-bottom: 2px #c9c8c8 solid;\n    padding: 15px;\n    font-size: 10pt;\n    letter-spacing: 1pt;\n    color: #333333\n}\n.col-md-8 span{\n    color: white;\n    letter-spacing: 0.5pt;\n    font-size: 10pt;\n}\n.subnav li{\n    padding-left: 40px;\n}\n.container-fluid{\n    padding: 40px 120px;\n    background-color: #e6f2fd;\n    background-size: cover;\n    min-height: 1000px;\n}\n.col-md-8{\n    padding: 0px 30px;\n}\n/* form{\n    width: 200px;\n} */\nh4{\n    font-weight: normal;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZDtcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItbGlnaHQuYmctbGlnaHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3MmJjIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA4cHggNTBweDtcbn1cbmEubmF2LWxpbmt7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMXB0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmEubmF2YmFyLWJyYW5ke1xuICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLWxpZ2h0LmJnLWxpZ2h0IGltZ3tcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItbGlnaHQuYmctbGlnaHQgc3BhbiBhe1xuICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFwdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zdWJuYXZ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCAjYzljOGM4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XG4gICAgY29sb3I6ICMzMzMzMzNcbn1cbi5jb2wtbWQtOCBzcGFue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHQ7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuLnN1Ym5hdiBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDQwcHggMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcbn1cbi5jb2wtbWQtOHtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbn1cbi8qIGZvcm17XG4gICAgd2lkdGg6IDIwMHB4O1xufSAqL1xuaDR7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th a{\n    color: white;\n    letter-spacing: .5pt;\n}\n.table.table-striped{\n    margin-top: 20px;\n    border: 1px #888888 solid;\n    box-shadow: 1px 1px 1px #888888;\n}\nth{\n    letter-spacing: .5pt;\n}\nh1{\n    color: #333333;\n    font-size: 30pt;\n    font-weight: normal;\n}\n#top{\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#0072bc),to(#3599da));\n    background-image: linear-gradient(#0072bc,#3599da);\n}\nth{\n    color: white;\n}\ntd span{\n    font-weight: bold;\n    color: #4d4c4c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDBGQUFrRDtJQUFsRCxrREFBa0Q7QUFDdEQ7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGggYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XG59XG4udGFibGUudGFibGUtc3RyaXBlZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4ICM4ODg4ODggc29saWQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzg4ODg4ODtcbn1cbnRoe1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB0O1xufVxuaDF7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAzMHB0O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4jdG9we1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDA3MmJjLCMzNTk5ZGEpO1xufVxudGh7XG4gICAgY29sb3I6IHdoaXRlO1xufVxudGQgc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzRkNGM0Yztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/dashboard/loans/loans.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/loans/loans.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th a{\n    color: white;\n    letter-spacing: .5pt;\n}\n.table.table-striped{\n    margin-top: 20px;\n    border: 1px #888888 solid;\n    box-shadow: 1px 1px 1px #888888;\n}\nth{\n    letter-spacing: .5pt;\n}\nh1{\n    color: #333333;\n    font-size: 30pt;\n    font-weight: normal;\n}\nthead{\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#0072bc),to(#3599da));\n    background-image: linear-gradient(#0072bc,#3599da);\n}\nth{\n    color: white;\n}\na{\n    color: #333333\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xvYW5zL2xvYW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMEZBQWtEO0lBQWxELGtEQUFrRDtBQUN0RDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2Fucy9sb2Fucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGggYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XG59XG4udGFibGUudGFibGUtc3RyaXBlZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4ICM4ODg4ODggc29saWQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzg4ODg4ODtcbn1cbnRoe1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB0O1xufVxuaDF7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAzMHB0O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG50aGVhZHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNzJiYywjMzU5OWRhKTtcbn1cbnRoe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmF7XG4gICAgY29sb3I6ICMzMzMzMzNcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/loans/loans.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/loans/loans.component.ts ***!
  \****************************************************/
/*! exports provided: LoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansComponent", function() { return LoansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoansComponent = class LoansComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loans',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/loans/loans.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loans.component.css */ "./src/app/dashboard/loans/loans.component.css")).default]
    })
], LoansComponent);



/***/ }),

/***/ "./src/app/dashboard/loans/one-loan/one-loan.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/loans/one-loan/one-loan.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2Fucy9vbmUtbG9hbi9vbmUtbG9hbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dashboard/loans/one-loan/one-loan.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/loans/one-loan/one-loan.component.ts ***!
  \****************************************************************/
/*! exports provided: OneLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneLoanComponent", function() { return OneLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OneLoanComponent = class OneLoanComponent {
    constructor() { }
    ngOnInit() {
    }
};
OneLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/loans/one-loan/one-loan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one-loan.component.css */ "./src/app/dashboard/loans/one-loan/one-loan.component.css")).default]
    })
], OneLoanComponent);



/***/ }),

/***/ "./src/app/dashboard/savings/one-savings/one-savings.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/savings/one-savings/one-savings.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zYXZpbmdzL29uZS1zYXZpbmdzL29uZS1zYXZpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/savings/one-savings/one-savings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/savings/one-savings/one-savings.component.ts ***!
  \************************************************************************/
/*! exports provided: OneSavingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSavingsComponent", function() { return OneSavingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OneSavingsComponent = class OneSavingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
OneSavingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-savings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one-savings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/savings/one-savings/one-savings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one-savings.component.css */ "./src/app/dashboard/savings/one-savings/one-savings.component.css")).default]
    })
], OneSavingsComponent);



/***/ }),

/***/ "./src/app/dashboard/savings/savings.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/savings/savings.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th a{\n    color: white;\n    letter-spacing: .5pt;\n}\n.table.table-striped{\n    margin-top: 20px;\n    border: 1px #888888 solid;\n    box-shadow: 1px 1px 1px #888888;\n}\nth{\n    letter-spacing: .5pt;\n}\nh1{\n    color: #333333;\n    font-size: 30pt;\n    font-weight: normal;\n}\nthead{\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#0072bc),to(#3599da));\n    background-image: linear-gradient(#0072bc,#3599da);\n}\nth{\n    color: white;\n}\na{\n    color: #333333\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NhdmluZ3Mvc2F2aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDBGQUFrRDtJQUFsRCxrREFBa0Q7QUFDdEQ7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2F2aW5ncy9zYXZpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVwdDtcbn1cbi50YWJsZS50YWJsZS1zdHJpcGVke1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggIzg4ODg4OCBzb2xpZDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjODg4ODg4O1xufVxudGh7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XG59XG5oMXtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXNpemU6IDMwcHQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbnRoZWFke1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDA3MmJjLCMzNTk5ZGEpO1xufVxudGh7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuYXtcbiAgICBjb2xvcjogIzMzMzMzM1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/savings/savings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/savings/savings.component.ts ***!
  \********************************************************/
/*! exports provided: SavingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsComponent", function() { return SavingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SavingsComponent = class SavingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SavingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-savings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./savings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/savings/savings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./savings.component.css */ "./src/app/dashboard/savings/savings.component.css")).default]
    })
], SavingsComponent);



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let FileUploadComponent = class FileUploadComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-upload/file-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-upload.component.css */ "./src/app/file-upload/file-upload.component.css")).default]
    })
], FileUploadComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    createUser(newUser) {
        console.log("**http service_Create User**", newUser);
        return this._http.post('/app/users/create', newUser);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar.navbar-expand-lg.navbar-light.bg-light{\n    background-color:#0072bc!important;\n    padding: 8px 50px;\n}\na.nav-link{\n    color: white!important;\n    /* font-weight: bold; */\n    letter-spacing: 1pt;\n    margin-right: 10px;\n}\na.navbar-brand{\n    color: white!important;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light img{\n    width: 25px;\n    margin: 5px;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light span a{\n    color: white!important;\n    /* font-weight: bold; */\n    letter-spacing: 1pt;\n    margin-left: 10px;\n}\n.subnav{\n    width: auto;\n    height: 50px;\n    border-bottom: 2px #c9c8c8 solid;\n    padding: 15px;\n    font-size: 10pt;\n    letter-spacing: 1pt;\n    color: #333333\n}\n.col-md-8 span{\n    color: white;\n    letter-spacing: 0.5pt;\n    font-size: 10pt;\n}\n.subnav li{\n    padding-left: 40px;\n}\n.container-fluid{\n    padding: 40px 120px;\n    background-color: #e6f2fd;\n    background-size: cover;\n    min-height: 1000px;\n}\n.login{\n    background-color:#0072bc;\n    color: white;\n    border-radius: 10px;\n    padding: 30px;\n}\n.login span a{\n    font-size: 10pt;\n    color: white;\n}\n.login h2{\n    color: white;\n    letter-spacing: 1pt;\n}\n#login_btn{\n    margin: 10px 0px;\n    background-color:#fdb244;\n    letter-spacing: 1pt;\n    font-weight: bold;\n    border: none;\n    color: #333333\n}\n.col-md-8{\n    padding: 100px 50px;\n}\nh1{\n    font-size: 36pt;\n    color: white;\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLm5hdmJhci1saWdodC5iZy1saWdodHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDcyYmMhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xufVxuYS5uYXYtbGlua3tcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuYS5uYXZiYXItYnJhbmR7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItbGlnaHQuYmctbGlnaHQgaW1ne1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLm5hdmJhci1saWdodC5iZy1saWdodCBzcGFuIGF7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMXB0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnN1Ym5hdntcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNjOWM4Yzggc29saWQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFwdDtcbiAgICBjb2xvcjogIzMzMzMzM1xufVxuLmNvbC1tZC04IHNwYW57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVwdDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG59XG4uc3VibmF2IGxpe1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgcGFkZGluZzogNDBweCAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xufVxuXG4ubG9naW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3MmJjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4ubG9naW4gc3BhbiBhe1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4gaDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XG59XG4jbG9naW5fYnRue1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmRiMjQ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMzMzMzMzXG59XG4uY29sLW1kLTh7XG4gICAgcGFkZGluZzogMTAwcHggNTBweDtcbn1cbmgxe1xuICAgIGZvbnQtc2l6ZTogMzZwdDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar.navbar-expand-lg.navbar-light.bg-light{\n    background-color:#0072bc!important;\n    padding: 8px 50px;\n}\na.nav-link{\n    color: white!important;\n    /* font-weight: bold; */\n    letter-spacing: 1pt;\n    margin-right: 10px;\n}\na.navbar-brand{\n    color: white!important;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light img{\n    width: 25px;\n    margin: 5px;\n}\n.navbar.navbar-expand-lg.navbar-light.bg-light span a{\n    color: white!important;\n    /* font-weight: bold; */\n    letter-spacing: 1pt;\n    margin-left: 10px;\n}\n.subnav{\n    width: auto;\n    height: 50px;\n    border-bottom: 2px #c9c8c8 solid;\n    padding: 15px;\n    font-size: 10pt;\n    letter-spacing: 1pt;\n    color: #333333\n}\n.col-md-8 span{\n    color: white;\n    letter-spacing: 0.5pt;\n    font-size: 10pt;\n}\n.subnav li{\n    padding-left: 40px;\n}\n.container-fluid{\n    padding: 40px 120px;\n    background-color: #e6f2fd;\n    background-size: cover;\n    min-height: 1000px;\n}\n.login{\n    background-color:#0072bc;\n    color: white;\n    border-radius: 10px;\n    padding: 30px;\n}\n.login span a{\n    font-size: 10pt;\n    color: white;\n}\n.login h2{\n    color: white;\n    letter-spacing: 1pt;\n    margin-bottom: 20px;\n}\n#login_btn{\n    margin: 10px 0px;\n    background-color:#fdb244;\n    letter-spacing: 1pt;\n    font-weight: bold;\n    border: none;\n    color: #333333\n}\nh1{\n    font-size: 36pt;\n    color: white;\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLm5hdmJhci1saWdodC5iZy1saWdodHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDcyYmMhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xufVxuYS5uYXYtbGlua3tcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuYS5uYXZiYXItYnJhbmR7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItbGlnaHQuYmctbGlnaHQgaW1ne1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLm5hdmJhci1saWdodC5iZy1saWdodCBzcGFuIGF7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMXB0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnN1Ym5hdntcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNjOWM4Yzggc29saWQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFwdDtcbiAgICBjb2xvcjogIzMzMzMzM1xufVxuLmNvbC1tZC04IHNwYW57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVwdDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG59XG4uc3VibmF2IGxpe1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgcGFkZGluZzogNDBweCAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xufVxuXG4ubG9naW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3MmJjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4ubG9naW4gc3BhbiBhe1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4gaDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNsb2dpbl9idG57XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZGIyNDQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFwdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMzMzMzMzNcbn1cbmgxe1xuICAgIGZvbnQtc2l6ZTogMzZwdDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegistrationComponent = class RegistrationComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.newUser = {};
        this.errors = [];
        this.newUser = { "firstName": "", "lastName": "", "birthday": "", "email": "", "password": "" };
    }
    ngOnInit() {
        this.newUser = { "firstName": "", "lastName": "", "birthday": "", "email": "", "password": "" };
    }
    addUser() {
        let tempObservable = this._httpService.createUser(this.newUser);
        tempObservable.subscribe(data => {
            if (data['errors']) {
                console.log("There are errors");
                this.errors = data['errors'];
                console.log(data['errors']);
            }
            else {
                console.log("There are NO errors");
                console.log(data);
                this.errors = [];
                this.newUser = { "firstName": "", "lastName": "", "birthday": "", "email": "", "password": "" };
                this._router.navigate(['/dashboard/home']);
            }
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/breanneduren/Desktop/CD Work/MEAN/bank_git/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map