"use strict";

var _testUtils = require("@vue/test-utils");

var _vuex = _interopRequireDefault(require("vuex"));

var _Counter = _interopRequireDefault(require("@/components/Counter.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localVue = (0, _testUtils.createLocalVue)();
localVue.use(_vuex["default"]);
describe('Counter.vue', function () {
  var store;
  var state;
  var mutations;
  beforeEach(function () {
    state = {
      counter: 0
    };
    mutations = {
      increment: jest.fn(),
      decrement: jest.fn()
    };
    store = new _vuex["default"].Store({
      state: state,
      mutations: mutations
    });
  });
  it('muestra el valor inicial', function () {
    var wrapper = (0, _testUtils.shallowMount)(_Counter["default"], {
      store: store,
      localVue: localVue
    });
    expect(wrapper.text()).toContain('0');
  });
  it('incrementa el contador', function () {
    var wrapper = (0, _testUtils.shallowMount)(_Counter["default"], {
      store: store,
      localVue: localVue
    });
    wrapper.find('button').trigger('click');
    expect(mutations.increment).toHaveBeenCalled();
  });
  it('decrementa el contador', function () {
    var wrapper = (0, _testUtils.shallowMount)(_Counter["default"], {
      store: store,
      localVue: localVue
    });
    wrapper.findAll('button').at(1).trigger('click');
    expect(mutations.decrement).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Counter.spec.dev.js.map
