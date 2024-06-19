"use strict";

var _testUtils = require("@vue/test-utils");

var _Parent = _interopRequireDefault(require("@/components/Parent.vue"));

var _Child = _interopRequireDefault(require("@/components/Child.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ParentChild Communication', function () {
  it('Child emite mensaje y Parent lo recibe', function _callee() {
    var wrapper, child;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wrapper = (0, _testUtils.shallowMount)(_Parent["default"]);
            child = wrapper.findComponent(_Child["default"]);
            child.vm.$emit('message', 'Hola');
            _context.next = 5;
            return regeneratorRuntime.awrap(wrapper.vm.$nextTick());

          case 5:
            expect(wrapper.text()).toContain('Hola');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});
//# sourceMappingURL=ParentChild.spec.dev.js.map
