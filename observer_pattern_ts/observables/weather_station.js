"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var observable_ts_1 = require("./observable.ts");
var WeatherStation = /** @class */ (function (_super) {
    __extends(WeatherStation, _super);
    function WeatherStation() {
        var _this = _super.call(this) || this;
        _this._temperature = 0;
        return _this;
    }
    Object.defineProperty(WeatherStation.prototype, "temperature", {
        set: function (temp) {
            console.log("Setting temperature to ", temp);
            this._temperature = temp;
            this.notifyObservers(this._temperature);
        },
        enumerable: false,
        configurable: true
    });
    return WeatherStation;
}(observable_ts_1.default));
exports.default = WeatherStation;
