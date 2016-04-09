'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._$_ = _$_;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var metaConstants = {};

var MetaConstant = function MetaConstant(key) {
    _classCallCheck(this, MetaConstant);

    this._key = key;
};

/**
 * interns a meta constant with the given key. If
 * an equal string to a previously interned key
 * is supplied the same meta constant is returned.
 */


function intern(key) {
    var constPresent = metaConstants[key];
    if (constPresent) {
        return constPresent;
    }
    var newConst = new MetaConstant(key);
    metaConstants[key] = newConst;
    return newConst;
}

/**
 * A shortcut for _$_``.
 */
var _0_ = exports._0_ = intern('');

/**
 * "produces" a meta constant.
 * The returned object only provides identity and equality to itself.
 *
 * This function is meant to be used with tagged strings, but you
 * should not (yet) use ${} placeholders in the string.
 *
 * Although the tagged string template features are not used yet, it
 * is used for syntactic "stick out" and future extensions.
 */
function _$_(strings) {
    var key = strings.reduce(function (str1, str2) {
        return str1 + str2;
    }, '');

    if (key.trim() === '') {
        return _0_;
    }

    return intern(key);
}