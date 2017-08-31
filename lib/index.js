'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _genericrunner = require('genericrunner');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Console = function (_Node) {
    (0, _inherits3.default)(Console, _Node);

    function Console() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Console);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Console.__proto__ || (0, _getPrototypeOf2.default)(Console)).call.apply(_ref, [this].concat(args))), _this), _this.out = 0, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Console, [{
        key: 'exec',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(param) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                (0, _get3.default)(Console.prototype.__proto__ || (0, _getPrototypeOf2.default)(Console.prototype), 'exec', this).call(this, param);
                                console.log('example');
                                return _context.abrupt('return', new _genericrunner.ReturnValue(0, null, this));

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function exec(_x) {
                return _ref2.apply(this, arguments);
            }

            return exec;
        }()
    }]);
    return Console;
}(_genericrunner.Node);

Console.type = 'example';
exports.default = Console;