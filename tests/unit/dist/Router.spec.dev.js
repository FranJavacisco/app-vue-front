"use strict";

var _testUtils = require("@vue/test-utils");

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("@/views/Home.vue"));

var _About = _interopRequireDefault(require("@/views/About.vue"));

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localVue = (0, _testUtils.createLocalVue)();
localVue.use(_vueRouter["default"]);
describe('Router', function () {
  it('existe la ruta Home', function () {
    var wrapper = (0, _testUtils.shallowMount)(_Home["default"], {
      localVue: localVue,
      router: _router["default"]
    });
    expect(wrapper.exists()).toBe(true);
  });
  it('existe la ruta About', function () {
    var wrapper = (0, _testUtils.shallowMount)(_About["default"], {
      localVue: localVue,
      router: _router["default"]
    });
    expect(wrapper.exists()).toBe(true);
  });
});
//# sourceMappingURL=Router.spec.dev.js.map
