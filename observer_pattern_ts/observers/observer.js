"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.update = function () {
        throw new Error("Observers should implement this function");
    };
    return Observer;
}());
exports.default = Observer;
