"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTinymce = void 0;
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};
exports.getTinymce = getTinymce;
