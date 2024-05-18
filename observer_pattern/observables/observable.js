"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observalble = /** @class */ (function () {
    function Observalble() {
        this.observers = [];
    }
    Observalble.prototype.addObserver = function (observer) {
        console.log("Adding observer ", observer);
        this.observers.push(observer);
    };
    Observalble.prototype.removeObserver = function (observer) {
        console.log("Removing observer ", observer);
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Observalble.prototype.notifyObservers = function (data) {
        this.observers.forEach(function (obs) {
            console.log("Notifying observer ", obs);
            obs.update(data);
        });
    };
    return Observalble;
}());
exports.default = Observalble;
