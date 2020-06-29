"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddressPrefix = exports.setAddressPrefix = void 0;
var addressPrefix = "DX";

const setAddressPrefix = prefix => addressPrefix = prefix;

exports.setAddressPrefix = setAddressPrefix;

const getAddressPrefix = () => addressPrefix;

exports.getAddressPrefix = getAddressPrefix;