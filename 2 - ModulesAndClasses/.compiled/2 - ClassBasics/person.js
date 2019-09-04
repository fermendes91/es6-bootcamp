'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// getters and setters

var PersonTest = exports.PersonTest = function () {
    function PersonTest(name) {
        _classCallCheck(this, PersonTest);

        this._name = name;
    }

    _createClass(PersonTest, [{
        key: 'name',
        get: function get() {
            return this._name.toUpperCase();
        },
        set: function set(value) {
            if (value.length > 2) {
                this._name = value;
            } else {
                console.log('The name inserted was rejected!');
            }
        }
    }]);

    return PersonTest;
}();
//# sourceMappingURL=person.js.map