"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Address", {
  enumerable: true,
  get: function () {
    return _address.default;
  }
});
Object.defineProperty(exports, "Aes", {
  enumerable: true,
  get: function () {
    return _aes.default;
  }
});
Object.defineProperty(exports, "PrivateKey", {
  enumerable: true,
  get: function () {
    return _PrivateKey.default;
  }
});
Object.defineProperty(exports, "PublicKey", {
  enumerable: true,
  get: function () {
    return _PublicKey.default;
  }
});
Object.defineProperty(exports, "Signature", {
  enumerable: true,
  get: function () {
    return _signature.default;
  }
});
Object.defineProperty(exports, "brainKey", {
  enumerable: true,
  get: function () {
    return _BrainKey.default;
  }
});
Object.defineProperty(exports, "key", {
  enumerable: true,
  get: function () {
    return _KeyUtils.default;
  }
});
Object.defineProperty(exports, "setAddressPrefix", {
  enumerable: true,
  get: function () {
    return _addressPrefix.setAddressPrefix;
  }
});
Object.defineProperty(exports, "getAddressPrefix", {
  enumerable: true,
  get: function () {
    return _addressPrefix.getAddressPrefix;
  }
});
exports.hash = void 0;

var _address = _interopRequireDefault(require("./address"));

var _aes = _interopRequireDefault(require("./aes"));

var _PrivateKey = _interopRequireDefault(require("./PrivateKey"));

var _PublicKey = _interopRequireDefault(require("./PublicKey"));

var _signature = _interopRequireDefault(require("./signature"));

var _BrainKey = _interopRequireDefault(require("./BrainKey"));

var hash = _interopRequireWildcard(require("./hash"));

exports.hash = hash;

var _KeyUtils = _interopRequireDefault(require("./KeyUtils"));

var _addressPrefix = require("./addressPrefix");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }