/**
 * @flow
 */

const metaConstants = {};

class MetaConstant {

    _key: string;

    constructor(key:string) {
        this._key = key;
    }
}

/**
 * interns a meta constant with the given key. If
 * an equal string to a previously interned key
 * is supplied the same meta constant is returned.
 */
function intern(key:string): MetaConstant {
    const constPresent = metaConstants[key];
    if (constPresent) {
        return constPresent;
    }
    const newConst = new MetaConstant(key);
    metaConstants[key] = newConst;
    return newConst;
}

/**
 * A shortcut for _$_``.
 */
export const _0_ = intern('');

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
export function _$_(strings: [string]): any {
    const key = strings.reduce((str1, str2) => str1 + str2, '');

    if (key.trim() === '') {
        return _0_;
    }

    return intern(key);
}
