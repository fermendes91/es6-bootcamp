'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConvertableArray = function (_Array) {
    _inherits(ConvertableArray, _Array);

    function ConvertableArray() {
        _classCallCheck(this, ConvertableArray);

        return _possibleConstructorReturn(this, (ConvertableArray.__proto__ || Object.getPrototypeOf(ConvertableArray)).apply(this, arguments));
    }

    _createClass(ConvertableArray, [{
        key: 'convert',
        value: function convert() {
            console.log('convert method');
            var returnArray = [];
            this.forEach(function (value) {
                return returnArray.push('Converted!' + value);
            });
            return returnArray;
        }
    }]);

    return ConvertableArray;
}(Array);

exports.default = ConvertableArray;
//# sourceMappingURL=convertableArray.js.map