require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Button.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/Button.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Icon.js");
/* harmony import */ var _plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugin-vue_export-helper.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/plugin-vue_export-helper.js");
/* harmony import */ var _pxCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pxCheck.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/pxCheck.js");


/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/






var _createComponent = Object(_component_js__WEBPACK_IMPORTED_MODULE_4__[/* c */ "a"])("button"),
    componentName = _createComponent.componentName,
    create = _createComponent.create;

var _sfc_main = create({
  components: Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Icon_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].name, _Icon_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]),
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _toRefs = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ "r"])(props),
        type = _toRefs.type,
        size = _toRefs.size,
        shape = _toRefs.shape,
        disabled = _toRefs.disabled,
        loading = _toRefs.loading,
        color = _toRefs.color,
        plain = _toRefs.plain,
        block = _toRefs.block;

    var handleClick = function handleClick(event) {
      if (!loading.value && !disabled.value) {
        emit("click", event);
      }
    };

    var classes = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* computed */ "c"])(function () {
      var _ref2;

      var prefixCls = componentName;
      return _ref2 = {}, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, prefixCls, true), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--").concat(type.value), type.value), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--").concat(size.value), size.value), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--").concat(shape.value), shape.value), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--plain"), plain.value), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--block"), block.value), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--disabled"), disabled.value), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, "".concat(prefixCls, "--loading"), loading.value), _ref2;
    });
    var getStyle = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* computed */ "c"])(function () {
      var _a;

      var style = {};

      if (color == null ? void 0 : color.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = "#fff";

          if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
            style.borderColor = color.value;
          }
        } else {
          style.color = "#fff";
          style.background = color.value;
        }
      }

      return style;
    });
    return {
      handleClick: handleClick,
      classes: classes,
      getStyle: getStyle
    };
  }
});

var _hoisted_1 = {
  class: "nut-button__warp"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* resolveComponent */ "B"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* normalizeClass */ "I"])(_ctx.classes),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* normalizeStyle */ "J"])(_ctx.getStyle),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementVNode */ "h"])("view", _hoisted_1, [_ctx.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createBlock */ "e"])(_component_nut_icon, {
    key: 0,
    class: "nut-icon-loading"
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createCommentVNode */ "f"])("", true), _ctx.icon && !_ctx.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createBlock */ "e"])(_component_nut_icon, {
    key: 1,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* normalizeClass */ "I"])(_ctx.icon),
    name: _ctx.icon
  }, null, 8, ["class", "name"])) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createCommentVNode */ "f"])("", true), _ctx.$slots.default ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("view", {
    key: 2,
    class: Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* normalizeClass */ "I"])({
      text: _ctx.icon || _ctx.loading
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* renderSlot */ "A"])(_ctx.$slots, "default")], 2)) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createCommentVNode */ "f"])("", true)])], 6);
}

var Button = /* @__PURE__ */Object(_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_6__[/* _ */ "a"])(_sfc_main, [["render", _sfc_render]]);



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Icon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/Icon.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _sfc_main; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js");
/* harmony import */ var _pxCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pxCheck.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/pxCheck.js");
/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/




var _createComponent = Object(_component_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("icon"),
    componentName = _createComponent.componentName,
    create = _createComponent.create;

var _sfc_main = create({
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    color: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: "i"
    }
  },
  emits: ["click"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var handleClick = function handleClick(event) {
      emit("click", event);
    };

    var isImage = function isImage() {
      return props.name ? props.name.indexOf("/") !== -1 : false;
    };

    return function () {
      var _a;

      var _isImage = isImage();

      return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* h */ "o"])(_isImage ? "img" : props.tag, {
        class: _isImage ? "".concat(componentName, "__img") : "".concat(props.fontClassName, " ").concat(componentName, " ").concat(props.classPrefix, "-").concat(props.name),
        style: {
          color: props.color,
          fontSize: Object(_pxCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* p */ "a"])(props.size),
          width: Object(_pxCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* p */ "a"])(props.size),
          height: Object(_pxCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* p */ "a"])(props.size)
        },
        onClick: handleClick,
        src: _isImage ? props.name : ""
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Tabbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/Tabbar.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index_taro; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js");
/* harmony import */ var _plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin-vue_export-helper.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/plugin-vue_export-helper.js");
/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/




var _createComponent = Object(_component_js__WEBPACK_IMPORTED_MODULE_3__[/* c */ "a"])("tabbar"),
    create = _createComponent.create;

var _sfc_main = create({
  props: {
    visible: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "base"
    },
    size: {
      type: String,
      default: "20px"
    },
    unactiveColor: {
      type: String,
      default: "#000000"
    },
    activeColor: {
      type: String,
      default: ""
    }
  },
  emits: ["tab-switch", "update:visible"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var mdValue = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* reactive */ "k"])({
      val: props.visible,
      children: []
    });

    function changeIndex(active) {
      emit("update:visible", active);
      parentData.modelValue = active;
      emit("tab-switch", parentData.children[active], active);
    }

    var parentData = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* reactive */ "k"])({
      children: mdValue.children,
      size: props.size,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex: changeIndex
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* provide */ "y"])("parent", parentData);
    Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* watch */ "G"])(function () {
      return props.visible;
    }, function (value) {
      parentData.modelValue = value;
    });
    return {
      changeIndex: changeIndex
    };
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createElementBlock */ "g"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* normalizeClass */ "I"])(["nut-tabbar", {
      "nut-tabbar-bottom": _ctx.bottom
    }])
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* renderSlot */ "A"])(_ctx.$slots, "default")], 2);
}

var index_taro = /* @__PURE__ */Object(_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_4__[/* _ */ "a"])(_sfc_main, [["render", _sfc_render]]);



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/TabbarItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/TabbarItem.js ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugin-vue_export-helper.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/plugin-vue_export-helper.js");
/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/





var _createComponent = Object(_component_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "a"])("tabbar-item"),
    create = _createComponent.create;

var _sfc_main = create({
  props: {
    tabTitle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    num: {
      type: String,
      default: ""
    },
    activeImg: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    classPrefix: {
      type: String,
      default: "nut-icon"
    },
    fontClassName: {
      type: String,
      default: "nutui-iconfont"
    },
    to: [Object, String]
  },
  setup: function setup(props, ctx) {
    var parent = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* inject */ "p"])("parent");
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* reactive */ "k"])({
      size: parent.size,
      unactiveColor: parent.unactiveColor,
      activeColor: parent.activeColor,
      active: parent.modelValue,
      index: 0
    });
    var router = Object(vue_router__WEBPACK_IMPORTED_MODULE_1__[/* useRouter */ "a"])();

    var relation = function relation(child) {
      if (child.proxy) {
        var index2 = parent.children.length;
        state.index = index2;
        parent.children.push(child.proxy);
      }
    };

    relation(Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* getCurrentInstance */ "m"])());

    function change(index2) {
      parent.changeIndex(index2);
    }

    var choosed = Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* computed */ "c"])(function () {
      if (parent) {
        return parent.modelValue;
      }

      return null;
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* watch */ "G"])(choosed, function (value, oldValue) {
      state.active = value;
      setTimeout(function () {
        if (parent.children[value].href) {
          window.location.href = parent.children[value].href;
        }

        if (parent.children[value].to) {
          var to = parent.children[value].to;
          router.push(to);
        }
      });
    });
    return {
      state: state,
      change: change
    };
  }
});

var _hoisted_1 = {
  class: "nut-tabbar-item_icon-box"
};
var _hoisted_2 = {
  key: 0,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_num"
};
var _hoisted_3 = {
  key: 1,
  class: "nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_nums"
};
var _hoisted_4 = {
  key: 2
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* resolveComponent */ "B"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeClass */ "I"])(["nut-tabbar-item", {
      "nut-tabbar-item__icon--unactive": _ctx.state.active != _ctx.state.index
    }]),
    style: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeStyle */ "J"])({
      color: _ctx.state.active == _ctx.state.index ? _ctx.state.activeColor : _ctx.state.unactiveColor
    }),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.change(_ctx.state.index);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementVNode */ "h"])("view", _hoisted_1, [_ctx.num && _ctx.num <= 99 ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("view", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* toDisplayString */ "L"])(_ctx.num), 1)) : _ctx.num && _ctx.num > 100 ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("view", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* toDisplayString */ "L"])("99+"))) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createCommentVNode */ "f"])("", true), _ctx.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("view", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createVNode */ "k"])(_component_nut_icon, {
    class: "nut-tabbar-item_icon-box_icon",
    size: _ctx.state.size,
    name: _ctx.icon,
    "font-class-name": _ctx.fontClassName,
    "class-prefix": _ctx.classPrefix
  }, null, 8, ["size", "name", "font-class-name", "class-prefix"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createCommentVNode */ "f"])("", true), !_ctx.icon && _ctx.activeImg ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementBlock */ "g"])("div", {
    key: 3,
    class: "nut-tabbar-item_icon-box_icon",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeStyle */ "J"])({
      backgroundImage: "url(".concat(_ctx.state.active == _ctx.state.index ? _ctx.activeImg : _ctx.img, ")"),
      width: _ctx.state.size,
      height: _ctx.state.size
    })
  }, null, 4)) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createCommentVNode */ "f"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* createElementVNode */ "h"])("view", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeClass */ "I"])(["nut-tabbar-item_icon-box_nav-word", {
      "nut-tabbar-item_icon-box_big-word": !_ctx.icon && !_ctx.activeImg
    }])
  }, Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* toDisplayString */ "L"])(_ctx.tabTitle), 3)])], 6);
}

var index = /* @__PURE__ */Object(_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_5__[/* _ */ "a"])(_sfc_main, [["render", _sfc_render]]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Toast.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/Toast.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index_taro; });
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Icon.js");
/* harmony import */ var _plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugin-vue_export-helper.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/plugin-vue_export-helper.js");
/* harmony import */ var _pxCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pxCheck.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/pxCheck.js");


/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/






var _createComponent = Object(_component_js__WEBPACK_IMPORTED_MODULE_5__[/* c */ "a"])("toast"),
    create = _createComponent.create;

var _sfc_main = create({
  components: Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Icon_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].name, _Icon_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: String,
      default: "30px"
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: String,
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "rgba(0, 0, 0, .8)"
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: "rgba(0, 0, 0, 0)"
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "closed"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var timer;

    var clearTimer = function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    var hide = function hide() {
      emit("update:visible", false);
      emit("closed");
    };

    var show = function show() {
      clearTimer();

      if (props.duration) {
        timer = setTimeout(function () {
          hide();
        }, props.duration);
      }
    };

    var clickCover = function clickCover() {
      if (props.closeOnClickOverlay) {
        hide();
      }
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* watch */ "G"])(function () {
      return props.visible;
    }, function (val) {
      if (val) {
        show();
      }
    });
    var hasIcon = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* computed */ "c"])(function () {
      if (props.type !== "text") {
        return true;
      } else {
        return !!props.icon;
      }
    });
    var iconName = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* computed */ "c"])(function () {
      if (props.icon) {
        return props.icon;
      } else {
        return {
          success: "success",
          fail: "failure",
          warn: "tips",
          loading: "loading"
        }[props.type];
      }
    });
    var toastBodyClass = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* computed */ "c"])(function () {
      return ["nut-toast", {
        "nut-toast-center": props.center
      }, {
        "nut-toast-has-icon": hasIcon.value
      }, {
        "nut-toast-cover": props.cover
      }, {
        "nut-toast-loading": props.type === "loading"
      }, props.customClass, "nut-toast-" + props.size];
    });

    var onAfterLeave = function onAfterLeave() {
      if (props.visible) {
        clearTimer();
        hide();
      }
    };

    return {
      clickCover: clickCover,
      hasIcon: hasIcon,
      iconName: iconName,
      toastBodyClass: toastBodyClass,
      onAfterLeave: onAfterLeave
    };
  }
});

var _hoisted_1 = {
  key: 0,
  class: "nut-toast-icon-wrapper"
};
var _hoisted_2 = {
  key: 1,
  class: "nut-toast-title"
};
var _hoisted_3 = ["innerHTML"];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* resolveComponent */ "B"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createBlock */ "e"])(vue__WEBPACK_IMPORTED_MODULE_3__[/* Transition */ "a"], {
    name: "toast-fade",
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* withCtx */ "J"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* withDirectives */ "K"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createElementVNode */ "h"])("view", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeClass */ "I"])(_ctx.toastBodyClass),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeStyle */ "J"])({
          bottom: _ctx.center ? "auto" : _ctx.bottom,
          "background-color": _ctx.coverColor
        }),
        onClick: _cache[0] || (_cache[0] = function () {
          return _ctx.clickCover && _ctx.clickCover.apply(_ctx, arguments);
        })
      }, [_ctx.$slots.default ? Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* renderSlot */ "A"])(_ctx.$slots, "default", {
        key: 0
      }) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createElementBlock */ "g"])("view", {
        key: 1,
        class: "nut-toast-inner",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* normalizeStyle */ "J"])({
          "text-align": _ctx.textAlignCenter ? "center" : "left",
          "background-color": _ctx.bgColor
        })
      }, [_ctx.hasIcon ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createElementBlock */ "g"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createVNode */ "k"])(_component_nut_icon, {
        size: "20",
        color: "#ffffff",
        name: _ctx.iconName
      }, null, 8, ["name"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createCommentVNode */ "f"])("", true), _ctx.title ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createElementBlock */ "g"])("div", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* toDisplayString */ "L"])(_ctx.title), 1)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createCommentVNode */ "f"])("", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* createElementVNode */ "h"])("view", {
        class: "nut-toast-text",
        innerHTML: _ctx.msg
      }, null, 8, _hoisted_3)], 4))], 6), [[vue__WEBPACK_IMPORTED_MODULE_3__[/* vShow */ "c"], _ctx.visible]])];
    }),
    _: 3
  }, 8, ["onAfterLeave"]);
}

var index_taro = /* @__PURE__ */Object(_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_7__[/* _ */ "a"])(_sfc_main, [["render", _sfc_render]]);



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/component.js ***!
  \***********************************************************************/
/*! exports provided: c */
/*! exports used: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createComponent; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/


function createComponent(name) {
  var componentName = "nut-" + name;
  return {
    componentName: componentName,
    create: function create(_component) {
      _component.baseName = name;
      _component.name = componentName;

      _component.install = function (vue) {
        vue.component(_component.name, _component);
      };

      return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* defineComponent */ "l"])(_component);
    },
    createDemo: function createDemo(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* defineComponent */ "l"])(_component);
    }
  };
}



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/plugin-vue_export-helper.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/plugin-vue_export-helper.js ***!
  \**************************************************************************************/
/*! exports provided: _ */
/*! exports used: _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _export_sfc; });
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");



/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/
var _export_sfc = function _export_sfc(sfc, props) {
  var target = sfc.__vccOpts || sfc;

  var _iterator = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_step.value, 2),
          key = _step$value[0],
          val = _step$value[1];

      target[key] = val;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return target;
};



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/pxCheck.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/pxCheck.js ***!
  \*********************************************************************/
/*! exports provided: p */
/*! exports used: p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pxCheck; });
/*!
* @nutui/nutui-taro v3.1.14 Wed Dec 22 2021 20:50:58 GMT+0800 (中国标准时间)
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/
var pxCheck = function pxCheck(value) {
  return isNaN(Number(value)) ? String(value) : "".concat(value, "px");
};



/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/style.css":
/*!*******************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/style.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/*! exports provided: HOOK_SETUP, HOOK_PLUGIN_SETTINGS_SET */
/*! exports used: HOOK_PLUGIN_SETTINGS_SET, HOOK_SETUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOOK_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOOK_PLUGIN_SETTINGS_SET; });
var HOOK_SETUP = 'devtools-plugin:setup';
var HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/*! exports provided: getDevtoolsGlobalHook, getTarget, isProxyAvailable */
/*! exports used: getDevtoolsGlobalHook, getTarget, isProxyAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator, window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isProxyAvailable; });
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  // @ts-ignore
  return typeof navigator !== 'undefined' && typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
var isProxyAvailable = typeof Proxy === 'function';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/*! exports provided: setupDevtoolsPlugin */
/*! exports used: setupDevtoolsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setupDevtoolsPlugin; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy */ "./node_modules/@vue/devtools-api/lib/esm/proxy.js");





function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  var target = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getTarget */ "b"])();
  var hook = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getDevtoolsGlobalHook */ "a"])();
  var enableProxy = _env__WEBPACK_IMPORTED_MODULE_0__[/* isProxyAvailable */ "c"] && pluginDescriptor.enableEarlyProxy;

  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(_const__WEBPACK_IMPORTED_MODULE_1__[/* HOOK_SETUP */ "b"], pluginDescriptor, setupFn);
  } else {
    var proxy = enableProxy ? new _proxy__WEBPACK_IMPORTED_MODULE_2__[/* ApiProxy */ "a"](pluginDescriptor, hook) : null;
    var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: pluginDescriptor,
      setupFn: setupFn,
      proxy: proxy
    });
    if (proxy) setupFn(proxy.proxiedTarget);
  }
}

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/proxy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/proxy.js ***!
  \*********************************************************/
/*! exports provided: ApiProxy */
/*! exports used: ApiProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProxy; });
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_MyFiles_taro_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");







var ApiProxy = /*#__PURE__*/function () {
  function ApiProxy(plugin, hook) {
    var _this = this;

    Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, ApiProxy);

    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    var defaultSettings = {};

    if (plugin.settings) {
      for (var id in plugin.settings) {
        var item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }

    var localSettingsSaveId = "__vue-devtools-plugin-settings__".concat(plugin.id);
    var currentSettings = Object.assign({}, defaultSettings);

    try {
      var raw = localStorage.getItem(localSettingsSaveId);
      var data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {// noop
    }

    this.fallbacks = {
      getSettings: function getSettings() {
        return currentSettings;
      },
      setSettings: function setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {// noop
        }

        currentSettings = value;
      }
    };

    if (hook) {
      hook.on(_const__WEBPACK_IMPORTED_MODULE_6__[/* HOOK_PLUGIN_SETTINGS_SET */ "a"], function (pluginId, value) {
        if (pluginId === _this.plugin.id) {
          _this.fallbacks.setSettings(value);
        }
      });
    }

    this.proxiedOn = new Proxy({}, {
      get: function get(_target, prop) {
        if (_this.target) {
          return _this.target.on[prop];
        } else {
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this.onQueue.push({
              method: prop,
              args: args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: function get(_target, prop) {
        if (_this.target) {
          return _this.target[prop];
        } else if (prop === 'on') {
          return _this.proxiedOn;
        } else if (Object.keys(_this.fallbacks).includes(prop)) {
          return function () {
            var _this$fallbacks;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this.targetQueue.push({
              method: prop,
              args: args,
              resolve: function resolve() {}
            });

            return (_this$fallbacks = _this.fallbacks)[prop].apply(_this$fallbacks, args);
          };
        } else {
          return function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return new Promise(function (resolve) {
              _this.targetQueue.push({
                method: prop,
                args: args,
                resolve: resolve
              });
            });
          };
        }
      }
    });
  }

  Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ApiProxy, [{
    key: "setRealTarget",
    value: function () {
      var _setRealTarget = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/D_MyFiles_taro_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(target) {
        var _iterator, _step, _this$target$on, item, _iterator2, _step2, _this$target, _item;

        return D_MyFiles_taro_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.target = target;
                _iterator = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this.onQueue);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    item = _step.value;

                    (_this$target$on = this.target.on)[item.method].apply(_this$target$on, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(item.args));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _iterator2 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this.targetQueue);
                _context.prev = 4;

                _iterator2.s();

              case 6:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 15;
                  break;
                }

                _item = _step2.value;
                _context.t0 = _item;
                _context.next = 11;
                return (_this$target = this.target)[_item.method].apply(_this$target, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_item.args));

              case 11:
                _context.t1 = _context.sent;

                _context.t0.resolve.call(_context.t0, _context.t1);

              case 13:
                _context.next = 6;
                break;

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t2 = _context["catch"](4);

                _iterator2.e(_context.t2);

              case 20:
                _context.prev = 20;

                _iterator2.f();

                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 17, 20, 23]]);
      }));

      function setRealTarget(_x) {
        return _setRealTarget.apply(this, arguments);
      }

      return setRealTarget;
    }()
  }]);

  return ApiProxy;
}();

/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/*! exports provided: EffectScope, ReactiveEffect, computed, customRef, effect, effectScope, getCurrentScope, isProxy, isReactive, isReadonly, isRef, markRaw, onScopeDispose, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, normalizeClass, normalizeProps, normalizeStyle, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, createBlock, createCommentVNode, createElementBlock, createElementVNode, createHydrationRenderer, createPropsRestProxy, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, guardReactiveProps, h, handleError, initCustomFormatter, inject, isMemoSame, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withMemo, withScopeId, Transition, TransitionGroup, VueElement, createApp, createSSRApp, defineCustomElement, defineSSRCustomElement, hydrate, initDirectivesForSSR, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers */
/*! exports used: Transition, createApp, vShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document, window, navigator, requestAnimationFrame, SVGElement, Element) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
/* unused harmony export TransitionGroup */
/* unused harmony export VueElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* unused harmony export createSSRApp */
/* unused harmony export defineCustomElement */
/* unused harmony export defineSSRCustomElement */
/* unused harmony export hydrate */
/* unused harmony export initDirectivesForSSR */
/* unused harmony export render */
/* unused harmony export useCssModule */
/* unused harmony export useCssVars */
/* unused harmony export vModelCheckbox */
/* unused harmony export vModelDynamic */
/* unused harmony export vModelRadio */
/* unused harmony export vModelSelect */
/* unused harmony export vModelText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vShow; });
/* unused harmony export withKeys */
/* unused harmony export withModifiers */
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");











var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var staticTemplateCache = new Map();
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG) {
    // <parent> before | first ... last | anchor </parent>
    var before = anchor ? anchor.previousSibling : parent.lastChild;
    var template = staticTemplateCache.get(content);

    if (!template) {
      var t = doc.createElement('template');
      t.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
      template = t.content;

      if (isSVG) {
        // remove outer svg wrapper
        var wrapper = template.firstChild;

        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }

        template.removeChild(wrapper);
      }

      staticTemplateCache.set(content, template);
    }

    parent.insertBefore(template.cloneNode(true), anchor);
    return [// first
    before ? before.nextSibling : parent.firstChild, // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  // directly setting className should be faster than setAttribute in theory
  // if this is an element during a transition, take the temporary transition
  // classes into account.
  var transitionClasses = el._vtc;

  if (transitionClasses) {
    value = (value ? [value].concat(Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(transitionClasses)) : Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(transitionClasses)).join(' ');
  }

  if (value == null) {
    el.removeAttribute('class');
  } else if (isSVG) {
    el.setAttribute('class', value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;
  var isCssString = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isString */ "D"])(next);

  if (next && !isCssString) {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isString */ "D"])(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  } else {
    var currentDisplay = style.display;

    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute('style');
    } // indicates that the `display` of the element is controlled by `v-show`,
    // so we always keep the current `display` value regardless of the `style`
    // value, thus handing over control to `v-show`.


    if ('_vod' in el) {
      style.display = currentDisplay;
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* hyphenate */ "l"])(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* camelize */ "e"])(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* capitalize */ "f"])(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSpecialBooleanAttr */ "C"])(key);

    if (value == null || isBoolean && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* includeBooleanAttr */ "m"])(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS' && // custom elements may use _value internally
  !el.tagName.includes('-')) {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    el.tagName === 'OPTION') {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  if (value === '' || value == null) {
    var type = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(el[key]);

    if (type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* includeBooleanAttr */ "m"])(value);
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
      try {
        el[key] = 0;
      } catch (_a) {}

      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now;
var skipTimestampCheck = false;

if (typeof window !== 'undefined') {
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  if (_getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = function _getNow() {
      return performance.now();
    };
  } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
  // and does not fire microtasks in between event propagation, so safe to exclude.


  var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* hyphenate */ "l"])(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* callWithAsyncErrorHandling */ "d"])(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  if (key === 'class') {
    patchClass(el, nextValue, isSVG);
  } else if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isOn */ "w"])(key)) {
    // ignore v-model listeners
    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isModelListener */ "u"])(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    // special case for <input v-model type="checkbox"> with
    // :true-value & :false-value
    // store value as dom properties since non-string values will be
    // stringified.
    if (key === 'true-value') {
      el._trueValue = nextValue;
    } else if (key === 'false-value') {
      el._falseValue = nextValue;
    }

    patchAttr(el, key, nextValue, isSVG);
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML & textContent
    if (key === 'innerHTML' || key === 'textContent') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isFunction */ "p"])(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isString */ "D"])(value)) {
    return false;
  }

  return key in el;
}

function defineCustomElement(options, hydate) {
  var Comp = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* defineComponent */ "l"])(options);

  var VueCustomElement = /*#__PURE__*/function (_VueElement) {
    Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VueCustomElement, _VueElement);

    var _super = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VueCustomElement);

    function VueCustomElement(initialProps) {
      Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, VueCustomElement);

      return _super.call(this, Comp, initialProps, hydate);
    }

    return Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VueCustomElement);
  }(VueElement);

  VueCustomElement.def = Comp;
  return VueCustomElement;
}

var defineSSRCustomElement = function defineSSRCustomElement(options) {
  // @ts-ignore
  return defineCustomElement(options, hydrate);
};

var BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : /*#__PURE__*/function () {
  function _class() {
    Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, _class);
  }

  return Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class);
}();

var VueElement = /*#__PURE__*/function (_BaseClass) {
  Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VueElement, _BaseClass);

  var _super2 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VueElement);

  function VueElement(_def) {
    var _this;

    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hydrate = arguments.length > 2 ? arguments[2] : undefined;

    Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, VueElement);

    _this = _super2.call(this);
    _this._def = _def;
    _this._props = _props;
    /**
     * @internal
     */

    _this._instance = null;
    _this._connected = false;
    _this._resolved = false;
    _this._numberProps = null;

    if (_this.shadowRoot && hydrate) {
      hydrate(_this._createVNode(), _this.shadowRoot);
    } else {
      if ( true && _this.shadowRoot) {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("Custom element has pre-rendered declarative shadow root but is not " + "defined as hydratable. Use `defineSSRCustomElement`.");
      }

      _this.attachShadow({
        mode: 'open'
      });
    }

    return _this;
  }

  Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VueElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._connected = true;

      if (!this._instance) {
        this._resolveDef();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this._connected = false;
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "r"])(function () {
        if (!_this2._connected) {
          render(null, _this2.shadowRoot);
          _this2._instance = null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */

  }, {
    key: "_resolveDef",
    value: function _resolveDef() {
      var _this3 = this;

      if (this._resolved) {
        return;
      }

      this._resolved = true; // set initial attrs

      for (var i = 0; i < this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      } // watch future attr changes


      new MutationObserver(function (mutations) {
        var _iterator = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(mutations),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;

            _this3._setAttr(m.attributeName);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }).observe(this, {
        attributes: true
      });

      var resolve = function resolve(def) {
        var props = def.props,
            styles = def.styles;
        var hasOptions = !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(props);
        var rawKeys = props ? hasOptions ? Object.keys(props) : props : []; // cast Number-type props set before resolve

        var numberProps;

        if (hasOptions) {
          for (var key in _this3._props) {
            var opt = props[key];

            if (opt === Number || opt && opt.type === Number) {
              _this3._props[key] = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* toNumber */ "N"])(_this3._props[key]);
              (numberProps || (numberProps = Object.create(null)))[key] = true;
            }
          }
        }

        _this3._numberProps = numberProps; // check if there are props set pre-upgrade or connect

        for (var _i = 0, _Object$keys = Object.keys(_this3); _i < _Object$keys.length; _i++) {
          var _key2 = _Object$keys[_i];

          if (_key2[0] !== '_') {
            _this3._setProp(_key2, _this3[_key2], true, false);
          }
        } // defining getter/setters on prototype


        var _iterator2 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rawKeys.map(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* camelize */ "e"])),
            _step2;

        try {
          var _loop = function _loop() {
            var key = _step2.value;
            Object.defineProperty(_this3, key, {
              get: function get() {
                return this._getProp(key);
              },
              set: function set(val) {
                this._setProp(key, val);
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          } // apply CSS

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _this3._applyStyles(styles); // initial render


        _this3._update();
      };

      var asyncDef = this._def.__asyncLoader;

      if (asyncDef) {
        asyncDef().then(resolve);
      } else {
        resolve(this._def);
      }
    }
  }, {
    key: "_setAttr",
    value: function _setAttr(key) {
      var value = this.getAttribute(key);

      if (this._numberProps && this._numberProps[key]) {
        value = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* toNumber */ "N"])(value);
      }

      this._setProp(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* camelize */ "e"])(key), value, false);
    }
    /**
     * @internal
     */

  }, {
    key: "_getProp",
    value: function _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */

  }, {
    key: "_setProp",
    value: function _setProp(key, val) {
      var shouldReflect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var shouldUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (val !== this._props[key]) {
        this._props[key] = val;

        if (shouldUpdate && this._instance) {
          this._update();
        } // reflect


        if (shouldReflect) {
          if (val === true) {
            this.setAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* hyphenate */ "l"])(key), '');
          } else if (typeof val === 'string' || typeof val === 'number') {
            this.setAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* hyphenate */ "l"])(key), val + '');
          } else if (!val) {
            this.removeAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* hyphenate */ "l"])(key));
          }
        }
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      render(this._createVNode(), this.shadowRoot);
    }
  }, {
    key: "_createVNode",
    value: function _createVNode() {
      var _this4 = this;

      var vnode = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "k"])(this._def, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* extend */ "h"])({}, this._props));

      if (!this._instance) {
        vnode.ce = function (instance) {
          _this4._instance = instance;
          instance.isCE = true; // HMR

          if (true) {
            instance.ceReload = function (newStyles) {
              // always reset styles
              if (_this4._styles) {
                _this4._styles.forEach(function (s) {
                  return _this4.shadowRoot.removeChild(s);
                });

                _this4._styles.length = 0;
              }

              _this4._applyStyles(newStyles); // if this is an async component, ceReload is called from the inner
              // component so no need to reload the async wrapper


              if (!_this4._def.__asyncLoader) {
                // reload
                _this4._instance = null;

                _this4._update();
              }
            };
          } // intercept emit


          instance.emit = function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            _this4.dispatchEvent(new CustomEvent(event, {
              detail: args
            }));
          }; // locate nearest Vue custom element parent for provide/inject


          var parent = _this4;

          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              instance.parent = parent._instance;
              break;
            }
          }
        };
      }

      return vnode;
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles(styles) {
      var _this5 = this;

      if (styles) {
        styles.forEach(function (css) {
          var s = document.createElement('style');
          s.textContent = css;

          _this5.shadowRoot.appendChild(s); // record for HMR


          if (true) {
            (_this5._styles || (_this5._styles = [])).push(s);
          }
        });
      }
    }
  }]);

  return VueElement;
}(BaseClass);

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "m"])();

    if (!instance) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("useCssModule must be called inside setup()");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* EMPTY_OBJ */ "b"];
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("Current instance does not have CSS modules injected.");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* EMPTY_OBJ */ "b"];
    }

    var mod = modules[name];

    if (!mod) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* EMPTY_OBJ */ "b"];
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "m"])();
  /* istanbul ignore next */

  if (!instance) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* watchPostEffect */ "I"])(setVars);
  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "u"])(function () {
    var ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* onUnmounted */ "v"])(function () {
      return ob.disconnect();
    });
  });
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    var suspense = vnode.suspense;
    vnode = suspense.activeBranch;

    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(function () {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"]) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* Static */ "c"]) {
    var _vnode = vnode,
        el = _vnode.el,
        anchor = _vnode.anchor;

    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}

function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    var style = el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* h */ "o"])(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* BaseTransition */ "a"], resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* extend */ "h"])({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* BaseTransition */ "a"].props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(args));
    });
  } else if (hook) {
    hook.apply(void 0, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* extend */ "h"])(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isObject */ "v"])(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* toNumber */ "N"])(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc.delete(cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* extend */ "h"])({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "m"])();
    var state = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* useTransitionState */ "E"])();
    var prevChildren;
    var children;
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* onUpdated */ "w"])(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* toRaw */ "q"])(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "b"];
      prevChildren = children;
      children = slots.default ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getTransitionRawChildren */ "n"])(slots.default()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* setTransitionHooks */ "D"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* resolveTransitionHooks */ "C"])(child, cssTransitionProps, state, instance));
        } else if (true) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
          var _child = prevChildren[_i2];
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* setTransitionHooks */ "D"])(_child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* resolveTransitionHooks */ "C"])(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "k"])(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(fn) ? function (value) {
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* invokeArrayFns */ "n"])(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || vnode.props && vnode.props.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* toNumber */ "N"])(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        lazy = _ref5$modifiers.lazy,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (lazy) {
        return;
      }

      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* toNumber */ "N"])(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(modelValue)) {
        var index = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseIndexOf */ "G"])(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSet */ "B"])(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(value)) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseIndexOf */ "G"])(value, vnode.props.value) > -1;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSet */ "B"])(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseEqual */ "F"])(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseEqual */ "F"])(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseEqual */ "F"])(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSet */ "B"])(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* toNumber */ "N"])(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(value) && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSet */ "B"])(value)) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(value)) {
        option.selected = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseIndexOf */ "G"])(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseEqual */ "F"])(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVModelForSSR() {
  vModelText.getSSRProps = function (_ref12) {
    var value = _ref12.value;
    return {
      value: value
    };
  };

  vModelRadio.getSSRProps = function (_ref13, vnode) {
    var value = _ref13.value;

    if (vnode.props && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseEqual */ "F"])(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };

  vModelCheckbox.getSSRProps = function (_ref14, vnode) {
    var value = _ref14.value;

    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isArray */ "o"])(value)) {
      if (vnode.props && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* looseIndexOf */ "G"])(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSet */ "B"])(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  delete: 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* hyphenate */ "l"])(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref15, _ref16) {
    var value = _ref15.value;
    var transition = _ref16.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref17, _ref18) {
    var value = _ref17.value;
    var transition = _ref18.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref19, _ref20) {
    var value = _ref19.value,
        oldValue = _ref19.oldValue;
    var transition = _ref20.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref21) {
    var value = _ref21.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVShowForSSR() {
  vShow.getSSRProps = function (_ref22) {
    var value = _ref22.value;

    if (!value) {
      return {
        style: {
          display: 'none'
        }
      };
    }
  };
}

var rendererOptions = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* extend */ "h"])({
  patchProp: patchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createRenderer */ "j"])(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createHydrationRenderer */ "i"])(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isFunction */ "p"])(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isHTMLTag */ "r"])(tag) || Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isSVGTag */ "A"])(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isRuntimeOnly */ "q"])()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])(msg);
        return compilerOptions;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__[/* isString */ "D"])(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "F"])("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}

var ssrDirectiveInitialized = false;
/**
 * @internal
 */

var initDirectivesForSSR = function initDirectivesForSSR() {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["SVGElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/components/svg-icon/SvgIcon.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/components/svg-icon/SvgIcon.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var iconName = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "c"])(function () {
      return "#icon-".concat(props.name);
    });
    var __returned__ = {
      props: props,
      iconName: iconName,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "c"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/svg-icon/SvgIcon.vue?vue&type=template&id=6ee45a20":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/components/svg-icon/SvgIcon.vue?vue&type=template&id=6ee45a20 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

var _hoisted_1 = {
  class: "svg-icon",
  "aria-hidden": "true"
};
var _hoisted_2 = ["xlink:href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "x"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("svg", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("use", {
    "xlink:href": $setup.iconName
  }, null, 8
  /* PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.ts":
/*!****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.ts ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nutui_nutui_taro_dist_packages_es_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/_es/Button */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Button.js");
/* harmony import */ var _nutui_nutui_taro_dist_packages_es_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/_es/Toast */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Toast.js");
/* harmony import */ var _nutui_nutui_taro_dist_packages_es_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/_es/Icon */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Icon.js");
/* harmony import */ var _nutui_nutui_taro_dist_packages_es_Tabbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/_es/Tabbar */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Tabbar.js");
/* harmony import */ var _nutui_nutui_taro_dist_packages_es_TabbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/_es/TabbarItem */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/TabbarItem.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nutui/nutui-taro/dist/style.css */ "./node_modules/@nutui/nutui-taro/dist/style.css");
/* harmony import */ var _nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nutui_nutui_taro_dist_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/svg-icon */ "./src/components/svg-icon/index.ts");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.less */ "./src/app.less");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_8__);









var App = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* createApp */ "b"])({
  onShow: function onShow() {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖

});
Object(_components_svg_icon__WEBPACK_IMPORTED_MODULE_7__[/* setSvgIcon */ "a"])(App);
App.use(_nutui_nutui_taro_dist_packages_es_Button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]).use(_nutui_nutui_taro_dist_packages_es_Toast__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).use(_nutui_nutui_taro_dist_packages_es_Icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).use(_nutui_nutui_taro_dist_packages_es_Tabbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).use(_nutui_nutui_taro_dist_packages_es_TabbarItem__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/components/svg-icon/SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-0-2!./node_modules/vue-loader/dist??ref--10-0!./src/components/svg-icon/SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm-bundler.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm-bundler.js ***!
  \****************************************************************/
/*! exports provided: NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouter, createRouterMatcher, createWebHashHistory, createWebHistory, isNavigationFailure, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey */
/*! exports used: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document) {/* unused harmony export NavigationFailureType */
/* unused harmony export RouterLink */
/* unused harmony export RouterView */
/* unused harmony export START_LOCATION */
/* unused harmony export createMemoryHistory */
/* unused harmony export createRouter */
/* unused harmony export createRouterMatcher */
/* unused harmony export createWebHashHistory */
/* unused harmony export createWebHistory */
/* unused harmony export isNavigationFailure */
/* unused harmony export matchedRouteKey */
/* unused harmony export onBeforeRouteLeave */
/* unused harmony export onBeforeRouteUpdate */
/* unused harmony export parseQuery */
/* unused harmony export routeLocationKey */
/* unused harmony export routerKey */
/* unused harmony export routerViewLocationKey */
/* unused harmony export stringifyQuery */
/* unused harmony export useLink */
/* unused harmony export useRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRouter; });
/* unused harmony export viewDepthKey */
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");





var _ErrorTypeMessages;

/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */


var hasSymbol = typeof Symbol === 'function' && Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Symbol.toStringTag) === 'symbol';

var PolySymbol = function PolySymbol(name) {
  return (// vr = vue router
    hasSymbol ? Symbol( true ? '[vue-router]: ' + name : undefined) : ( true ? '[vue-router]: ' : undefined) + name
  );
}; // rvlm = Router View Location Matched

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */


var matchedRouteKey = /*#__PURE__*/PolySymbol( true ? 'router view location matched' : undefined);
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */

var viewDepthKey = /*#__PURE__*/PolySymbol( true ? 'router view depth' : undefined);
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */

var routerKey = /*#__PURE__*/PolySymbol( true ? 'router' : undefined);
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */

var routeLocationKey = /*#__PURE__*/PolySymbol( true ? 'route location' : undefined);
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */

var routerViewLocationKey = /*#__PURE__*/PolySymbol( true ? 'router view location' : undefined);
var isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

var assign = Object.assign;

function applyToParams(fn, params) {
  var newParams = {};

  for (var key in params) {
    var value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }

  return newParams;
}

var noop = function noop() {};

function warn(msg) {
  // avoid using ...args as it breaks in older Edge builds
  var args = Array.from(arguments).slice(1);
  console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

var TRAILING_SLASH_RE = /\/$/;

var removeTrailingSlash = function removeTrailingSlash(path) {
  return path.replace(TRAILING_SLASH_RE, '');
};
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */


function parseURL(parseQuery, location) {
  var currentLocation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  var path,
      query = {},
      searchString = '',
      hash = ''; // Could use URL and URLSearchParams but IE 11 doesn't support it

  var searchPos = location.indexOf('?');
  var hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);

  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery(searchString);
  }

  if (hashPos > -1) {
    path = path || location.slice(0, hashPos); // keep the # character

    hash = location.slice(hashPos, location.length);
  } // no search and no query


  path = resolveRelativePath(path != null ? path : location, currentLocation); // empty path means a relative query or hash `?foo=f`, `#thing`

  return {
    fullPath: path + (searchString && '?') + searchString + hash,
    path: path,
    query: query,
    hash: hash
  };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */


function stringifyURL(stringifyQuery, location) {
  var query = location.query ? stringifyQuery(location.query) : '';
  return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */


function stripBase(pathname, base) {
  // no base or base is not found at the beginning
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
  return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */


function isSameRouteLocation(stringifyQuery, a, b) {
  var aLastIndex = a.matched.length - 1;
  var bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */


function isSameRouteRecord(a, b) {
  // since the original record has an undefined value for aliasOf
  // but all aliases point to the original record, this will always compare
  // the original record
  return (a.aliasOf || a) === (b.aliasOf || b);
}

function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (var key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
  }

  return true;
}

function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */


function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every(function (value, i) {
    return value === b[i];
  }) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */


function resolveRelativePath(to, from) {
  if (to.startsWith('/')) return to;

  if ( true && !from.startsWith('/')) {
    warn("Cannot resolve a relative location without an absolute path. Trying to resolve \"".concat(to, "\" from \"").concat(from, "\". It should look like \"/").concat(from, "\"."));
    return to;
  }

  if (!to) return from;
  var fromSegments = from.split('/');
  var toSegments = to.split('/');
  var position = fromSegments.length - 1;
  var toPosition;
  var segment;

  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition]; // can't go below zero

    if (position === 1 || segment === '.') continue;
    if (segment === '..') position--; // found something that is not relative path
    else break;
  }

  return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join('/');
}

var NavigationType;

(function (NavigationType) {
  NavigationType["pop"] = "pop";
  NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));

var NavigationDirection;

(function (NavigationDirection) {
  NavigationDirection["back"] = "back";
  NavigationDirection["forward"] = "forward";
  NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */


var START = ''; // Generic utils

/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */

function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/'; // strip full URL origin

      base = base.replace(/^\w+:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  } // ensure leading slash when it was removed by the regex above avoid leading
  // slash with hash because the file could be read from the disk like file://
  // and the leading slash would cause problems


  if (base[0] !== '/' && base[0] !== '#') base = '/' + base; // remove the trailing slash so all other method can just do `base + fullPath`
  // to build an href

  return removeTrailingSlash(base);
} // remove any character before the hash


var BEFORE_HASH_RE = /^[^#]+#/;

function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
  var docRect = document.documentElement.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}

var computeScrollPosition = function computeScrollPosition() {
  return {
    left: window.pageXOffset,
    top: window.pageYOffset
  };
};

function scrollToPosition(position) {
  var scrollToOptions;

  if ('el' in position) {
    var positionEl = position.el;
    var isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
    /**
     * `id`s can accept pretty much any characters, including CSS combinators
     * like `>` or `~`. It's still possible to retrieve elements using
     * `document.getElementById('~')` but it needs to be escaped when using
     * `document.querySelector('#\\~')` for it to be valid. The only
     * requirements for `id`s are them to be unique on the page and to not be
     * empty (`id=""`). Because of that, when passing an id selector, it should
     * be properly escaped for it to work with `querySelector`. We could check
     * for the id selector to be simple (no CSS combinators `+ >~`) but that
     * would make things inconsistent since they are valid characters for an
     * `id` but would need to be escaped when using `querySelector`, breaking
     * their usage and ending up in no selector returned. Selectors need to be
     * escaped:
     *
     * - `#1-thing` becomes `#\31 -thing`
     * - `#with~symbols` becomes `#with\\~symbols`
     *
     * - More information about  the topic can be found at
     *   https://mathiasbynens.be/notes/html5-id-class.
     * - Practical example: https://mathiasbynens.be/demo/html5-id
     */

    if ( true && typeof position.el === 'string') {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          var foundEl = document.querySelector(position.el);

          if (isIdSelector && foundEl) {
            warn("The selector \"".concat(position.el, "\" should be passed as \"el: document.querySelector('").concat(position.el, "')\" because it starts with \"#\".")); // return to avoid other warnings

            return;
          }
        } catch (err) {
          warn("The selector \"".concat(position.el, "\" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).")); // return to avoid other warnings

          return;
        }
      }
    }

    var el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;

    if (!el) {
       true && warn("Couldn't find element using selector \"".concat(position.el, "\" returned by scrollBehavior."));
      return;
    }

    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }

  if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}

function getScrollKey(path, delta) {
  var position = history.state ? history.state.position - delta : -1;
  return position + path;
}

var scrollPositions = new Map();

function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}

function getSavedScrollPosition(key) {
  var scroll = scrollPositions.get(key); // consume it so it's not used again

  scrollPositions.delete(key);
  return scroll;
} // TODO: RFC about how to save scroll position

/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }


var createBaseLocation = function createBaseLocation() {
  return location.protocol + '//' + location.host;
};
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */


function createCurrentLocation(base, location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash; // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end

  var hashPos = base.indexOf('#');

  if (hashPos > -1) {
    var slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    var pathFromHash = hash.slice(slicePos); // prepend the starting slash to hash so the url starts with /#

    if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
    return stripBase(pathFromHash, '');
  }

  var path = stripBase(pathname, base);
  return path + search + hash;
}

function useHistoryListeners(base, historyState, currentLocation, replace) {
  var listeners = [];
  var teardowns = []; // TODO: should it be a stack? a Dict. Check if the popstate listener
  // can trigger twice

  var pauseState = null;

  var popStateHandler = function popStateHandler(_ref) {
    var state = _ref.state;
    var to = createCurrentLocation(base, location);
    var from = currentLocation.value;
    var fromState = historyState.value;
    var delta = 0;

    if (state) {
      currentLocation.value = to;
      historyState.value = state; // ignore the popstate and reset the pauseState

      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }

      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    } // console.log({ deltaFromCurrent })
    // Here we could also revert the navigation by calling history.go(-delta)
    // this listener will have to be adapted to not trigger again and to wait for the url
    // to be updated before triggering the listeners. Some kind of validation function would also
    // need to be passed to the listeners so the navigation can be accepted
    // call all listeners


    listeners.forEach(function (listener) {
      listener(currentLocation.value, from, {
        delta: delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };

  function pauseListeners() {
    pauseState = currentLocation.value;
  }

  function listen(callback) {
    // setup the listener and prepare teardown callbacks
    listeners.push(callback);

    var teardown = function teardown() {
      var index = listeners.indexOf(callback);
      if (index > -1) listeners.splice(index, 1);
    };

    teardowns.push(teardown);
    return teardown;
  }

  function beforeUnloadListener() {
    var _window = window,
        history = _window.history;
    if (!history.state) return;
    history.replaceState(assign({}, history.state, {
      scroll: computeScrollPosition()
    }), '');
  }

  function destroy() {
    var _iterator = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(teardowns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var teardown = _step.value;
        teardown();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    teardowns = [];
    window.removeEventListener('popstate', popStateHandler);
    window.removeEventListener('beforeunload', beforeUnloadListener);
  } // setup the listeners and prepare teardown callbacks


  window.addEventListener('popstate', popStateHandler);
  window.addEventListener('beforeunload', beforeUnloadListener);
  return {
    pauseListeners: pauseListeners,
    listen: listen,
    destroy: destroy
  };
}
/**
 * Creates a state object
 */


function buildState(back, current, forward) {
  var replaced = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var computeScroll = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return {
    back: back,
    current: current,
    forward: forward,
    replaced: replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}

function useHistoryStateNavigation(base) {
  var _window2 = window,
      history = _window2.history,
      location = _window2.location; // private variables

  var currentLocation = {
    value: createCurrentLocation(base, location)
  };
  var historyState = {
    value: history.state
  }; // build current history entry as this is a fresh navigation

  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }

  function changeLocation(to, state, replace) {
    /**
     * if a base tag is provided and we are on a normal domain, we have to
     * respect the provided `base` attribute because pushState() will use it and
     * potentially erase anything before the `#` like at
     * https://github.com/vuejs/vue-router-next/issues/685 where a base of
     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
     * there is no host, the `<base>` tag makes no sense and if there isn't a
     * base tag we can just use everything after the `#`.
     */
    var hashIndex = base.indexOf('#');
    var url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;

    try {
      // BROWSER QUIRK
      // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
      history[replace ? 'replaceState' : 'pushState'](state, '', url);
      historyState.value = state;
    } catch (err) {
      if (true) {
        warn('Error with push/replace State', err);
      } else {} // Force the navigation, this also resets the call count


      location[replace ? 'replace' : 'assign'](url);
    }
  }

  function replace(to, data) {
    var state = assign({}, history.state, buildState(historyState.value.back, // keep back and forward entries but override current position
    to, historyState.value.forward, true), data, {
      position: historyState.value.position
    });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }

  function push(to, data) {
    // Add to current entry the information of where we are going
    // as well as saving the current position
    var currentState = assign({}, // use current history state to gracefully handle a wrong call to
    // history.replaceState
    // https://github.com/vuejs/vue-router-next/issues/366
    historyState.value, history.state, {
      forward: to,
      scroll: computeScrollPosition()
    });

    if ( true && !history.state) {
      warn("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n" + "history.replaceState(history.state, '', url)\n\n" + "You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.");
    }

    changeLocation(currentState.current, currentState, true);
    var state = assign({}, buildState(currentLocation.value, to, null), {
      position: currentState.position + 1
    }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }

  return {
    location: currentLocation,
    state: historyState,
    push: push,
    replace: replace
  };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */


function createWebHistory(base) {
  base = normalizeBase(base);
  var historyNavigation = useHistoryStateNavigation(base);
  var historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);

  function go(delta) {
    var triggerListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!triggerListeners) historyListeners.pauseListeners();
    history.go(delta);
  }

  var routerHistory = assign({
    // it's overridden right after
    location: '',
    base: base,
    go: go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return historyNavigation.location.value;
    }
  });
  Object.defineProperty(routerHistory, 'state', {
    enumerable: true,
    get: function get() {
      return historyNavigation.state.value;
    }
  });
  return routerHistory;
}
/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */


function createMemoryHistory() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var listeners = [];
  var queue = [START];
  var position = 0;
  base = normalizeBase(base);

  function setLocation(location) {
    position++;

    if (position === queue.length) {
      // we are at the end, we can simply append a new entry
      queue.push(location);
    } else {
      // we are in the middle, we remove everything from here in the queue
      queue.splice(position);
      queue.push(location);
    }
  }

  function triggerListeners(to, from, _ref2) {
    var direction = _ref2.direction,
        delta = _ref2.delta;
    var info = {
      direction: direction,
      delta: delta,
      type: NavigationType.pop
    };

    var _iterator2 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(listeners),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var callback = _step2.value;
        callback(to, from, info);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base: base,
    createHref: createHref.bind(null, base),
    replace: function replace(to) {
      // remove current entry and decrement position
      queue.splice(position--, 1);
      setLocation(to);
    },
    push: function push(to, data) {
      setLocation(to);
    },
    listen: function listen(callback) {
      listeners.push(callback);
      return function () {
        var index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
    },
    destroy: function destroy() {
      listeners = [];
      queue = [START];
      position = 0;
    },
    go: function go(delta) {
      var shouldTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var from = this.location;
      var direction = // we are considering delta === 0 going forward, but in abstract mode
      // using 0 for the delta doesn't make sense like it does in html5 where
      // it reloads the page
      delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
      position = Math.max(0, Math.min(position + delta, queue.length - 1));

      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction: direction,
          delta: delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: function get() {
      return queue[position];
    }
  });
  return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g.
 * `file://`) or when configuring a server to handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname +
 * location.search` If there is a `<base>` tag in the `head`, its value will be
 * ignored in favor of this parameter **but note it affects all the
 * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
 * `href` value **has to match this parameter** (ignoring anything after the
 * `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */


function createWebHashHistory(base) {
  // Make sure this implementation is fine in terms of encoding, specially for IE11
  // for `file://`, directly use the pathname and ignore the base
  // location.pathname contains an initial `/` even at the root: `https://example.com`
  base = location.host ? base || location.pathname + location.search : ''; // allow the user to provide a `#` in the middle: `/base/#/app`

  if (!base.includes('#')) base += '#';

  if ( true && !base.endsWith('#/') && !base.endsWith('#')) {
    warn("A hash base must end with a \"#\":\n\"".concat(base, "\" should be \"").concat(base.replace(/#.*$/, '#'), "\"."));
  }

  return createWebHistory(base);
}

function isRouteLocation(route) {
  return typeof route === 'string' || route && Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(route) === 'object';
}

function isRouteName(name) {
  return typeof name === 'string' || Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(name) === 'symbol';
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */


var START_LOCATION_NORMALIZED = {
  path: '/',
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined
};
var NavigationFailureSymbol = /*#__PURE__*/PolySymbol( true ? 'navigation failure' : undefined);
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */

var NavigationFailureType;

(function (NavigationFailureType) {
  /**
   * An aborted navigation is a navigation that failed because a navigation
   * guard returned `false` or called `next(false)`
   */
  NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
  /**
   * A cancelled navigation is a navigation that failed because a more recent
   * navigation finished started (not necessarily finished).
   */

  NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
  /**
   * A duplicated navigation is a navigation that failed because it was
   * initiated while already being at the exact same location.
   */

  NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {})); // DEV only debug messages


var ErrorTypeMessages = (_ErrorTypeMessages = {}, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 1
/* MATCHER_NOT_FOUND */
, function _(_ref3) {
  var location = _ref3.location,
      currentLocation = _ref3.currentLocation;
  return "No match for\n ".concat(JSON.stringify(location)).concat(currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : '');
}), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 2
/* NAVIGATION_GUARD_REDIRECT */
, function _(_ref4) {
  var from = _ref4.from,
      to = _ref4.to;
  return "Redirected from \"".concat(from.fullPath, "\" to \"").concat(stringifyRoute(to), "\" via a navigation guard.");
}), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 4
/* NAVIGATION_ABORTED */
, function _(_ref5) {
  var from = _ref5.from,
      to = _ref5.to;
  return "Navigation aborted from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" via a navigation guard.");
}), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 8
/* NAVIGATION_CANCELLED */
, function _(_ref6) {
  var from = _ref6.from,
      to = _ref6.to;
  return "Navigation cancelled from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" with a new navigation.");
}), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ErrorTypeMessages, 16
/* NAVIGATION_DUPLICATED */
, function _(_ref7) {
  var from = _ref7.from,
      to = _ref7.to;
  return "Avoided redundant navigation to current location: \"".concat(from.fullPath, "\".");
}), _ErrorTypeMessages);

function createRouterError(type, params) {
  // keep full error messages in cjs versions
  if (true) {
    return assign(new Error(ErrorTypeMessages[type](params)), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      type: type
    }, NavigationFailureSymbol, true), params);
  } else {}
}

function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute(to) {
  if (typeof to === 'string') return to;
  if ('path' in to) return to.path;
  var location = {};

  var _iterator3 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(propertiesToLog),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var key = _step3.value;
      if (key in to) location[key] = to[key];
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return JSON.stringify(location, null, 2);
} // default pattern for a param: non greedy everything but /


var BASE_PARAM_PATTERN = '[^/]+?';
var BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
}; // Special Regex characters that must be escaped in static tokens

var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */

function tokensToParser(segments, extraOptions) {
  var options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions); // the amount of scores is the same as the length of segments except for the root segment "/"

  var score = []; // the regexp as a string

  var pattern = options.start ? '^' : ''; // extracted keys

  var keys = [];

  var _iterator4 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segments),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var segment = _step4.value;
      // the root segment needs special treatment
      var segmentScores = segment.length ? [] : [90
      /* Root */
      ]; // allow trailing slash

      if (options.strict && !segment.length) pattern += '/';

      for (var tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        var token = segment[tokenIndex]; // resets the score if we are inside a sub segment /:a-other-:b

        var subSegmentScore = 40
        /* Segment */
        + (options.sensitive ? 0.25
        /* BonusCaseSensitive */
        : 0);

        if (token.type === 0
        /* Static */
        ) {
          // prepend the slash if we are starting a new segment
          if (!tokenIndex) pattern += '/';
          pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
          subSegmentScore += 40
          /* Static */
          ;
        } else if (token.type === 1
        /* Param */
        ) {
          var value = token.value,
              repeatable = token.repeatable,
              optional = token.optional,
              regexp = token.regexp;
          keys.push({
            name: value,
            repeatable: repeatable,
            optional: optional
          });

          var _re = regexp ? regexp : BASE_PARAM_PATTERN; // the user provided a custom regexp /:id(\\d+)


          if (_re !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10
            /* BonusCustomRegExp */
            ; // make sure the regexp is valid before using it

            try {
              new RegExp("(".concat(_re, ")"));
            } catch (err) {
              throw new Error("Invalid custom RegExp for param \"".concat(value, "\" (").concat(_re, "): ") + err.message);
            }
          } // when we repeat we must take care of the repeating leading slash


          var subPattern = repeatable ? "((?:".concat(_re, ")(?:/(?:").concat(_re, "))*)") : "(".concat(_re, ")"); // prepend the slash if we are starting a new segment

          if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? "(?:/".concat(subPattern, ")") : '/' + subPattern;
          if (optional) subPattern += '?';
          pattern += subPattern;
          subSegmentScore += 20
          /* Dynamic */
          ;
          if (optional) subSegmentScore += -8
          /* BonusOptional */
          ;
          if (repeatable) subSegmentScore += -20
          /* BonusRepeatable */
          ;
          if (_re === '.*') subSegmentScore += -50
          /* BonusWildcard */
          ;
        }

        segmentScores.push(subSegmentScore);
      } // an empty array like /home/ -> [[{home}], []]
      // if (!segment.length) pattern += '/'


      score.push(segmentScores);
    } // only apply the strict bonus to the last score

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (options.strict && options.end) {
    var i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001
    /* BonusStrict */
    ;
  } // TODO: dev only warn double trailing slash


  if (!options.strict) pattern += '/?';
  if (options.end) pattern += '$'; // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
  else if (options.strict) pattern += '(?:/|$)';
  var re = new RegExp(pattern, options.sensitive ? '' : 'i');

  function parse(path) {
    var match = path.match(re);
    var params = {};
    if (!match) return null;

    for (var _i = 1; _i < match.length; _i++) {
      var value = match[_i] || '';
      var key = keys[_i - 1];
      params[key.name] = value && key.repeatable ? value.split('/') : value;
    }

    return params;
  }

  function stringify(params) {
    var path = ''; // for optional parameters to allow to be empty

    var avoidDuplicatedSlash = false;

    var _iterator5 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segments),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var segment = _step5.value;
        if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
        avoidDuplicatedSlash = false;

        var _iterator6 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(segment),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var token = _step6.value;

            if (token.type === 0
            /* Static */
            ) {
              path += token.value;
            } else if (token.type === 1
            /* Param */
            ) {
              var value = token.value,
                  repeatable = token.repeatable,
                  optional = token.optional;
              var param = value in params ? params[value] : '';
              if (Array.isArray(param) && !repeatable) throw new Error("Provided param \"".concat(value, "\" is an array but it is not repeatable (* or + modifiers)"));
              var text = Array.isArray(param) ? param.join('/') : param;

              if (!text) {
                if (optional) {
                  // if we have more than one optional param like /:a?-static we
                  // don't need to care about the optional param
                  if (segment.length < 2) {
                    // remove the last slash as we could be at the end
                    if (path.endsWith('/')) path = path.slice(0, -1); // do not append a slash on the next iteration
                    else avoidDuplicatedSlash = true;
                  }
                } else throw new Error("Missing required param \"".concat(value, "\""));
              }

              path += text;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return path;
  }

  return {
    re: re,
    score: score,
    keys: keys,
    parse: parse,
    stringify: stringify
  };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */


function compareScoreArray(a, b) {
  var i = 0;

  while (i < a.length && i < b.length) {
    var diff = b[i] - a[i]; // only keep going if diff === 0

    if (diff) return diff;
    i++;
  } // if the last subsegment was Static, the shorter segments should be sorted first
  // otherwise sort the longest segment first


  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40
    /* Static */
    + 40
    /* Segment */
    ? 1 : -1;
  }

  return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */


function comparePathParserScore(a, b) {
  var i = 0;
  var aScore = a.score;
  var bScore = b.score;

  while (i < aScore.length && i < bScore.length) {
    var comp = compareScoreArray(aScore[i], bScore[i]); // do not return if both are equal

    if (comp) return comp;
    i++;
  } // if a and b share the same score entries but b has more, sort b first


  return bScore.length - aScore.length; // this is the ternary version
  // return aScore.length < bScore.length
  //   ? 1
  //   : aScore.length > bScore.length
  //   ? -1
  //   : 0
}

var ROOT_TOKEN = {
  type: 0
  /* Static */
  ,
  value: ''
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/; // After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()

function tokenizePath(path) {
  if (!path) return [[]];
  if (path === '/') return [[ROOT_TOKEN]];

  if (!path.startsWith('/')) {
    throw new Error( true ? "Route paths should start with a \"/\": \"".concat(path, "\" should be \"/").concat(path, "\".") : undefined);
  } // if (tokenCache.has(path)) return tokenCache.get(path)!


  function crash(message) {
    throw new Error("ERR (".concat(state, ")/\"").concat(buffer, "\": ").concat(message));
  }

  var state = 0
  /* Static */
  ;
  var previousState = state;
  var tokens = []; // the segment will always be valid because we get into the initial state
  // with the leading /

  var segment;

  function finalizeSegment() {
    if (segment) tokens.push(segment);
    segment = [];
  } // index on the path


  var i = 0; // char at index

  var char; // buffer of the value read

  var buffer = ''; // custom regexp for a param

  var customRe = '';

  function consumeBuffer() {
    if (!buffer) return;

    if (state === 0
    /* Static */
    ) {
      segment.push({
        type: 0
        /* Static */
        ,
        value: buffer
      });
    } else if (state === 1
    /* Param */
    || state === 2
    /* ParamRegExp */
    || state === 3
    /* ParamRegExpEnd */
    ) {
      if (segment.length > 1 && (char === '*' || char === '+')) crash("A repeatable param (".concat(buffer, ") must be alone in its segment. eg: '/:ids+."));
      segment.push({
        type: 1
        /* Param */
        ,
        value: buffer,
        regexp: customRe,
        repeatable: char === '*' || char === '+',
        optional: char === '*' || char === '?'
      });
    } else {
      crash('Invalid state to consume buffer');
    }

    buffer = '';
  }

  function addCharToBuffer() {
    buffer += char;
  }

  while (i < path.length) {
    char = path[i++];

    if (char === '\\' && state !== 2
    /* ParamRegExp */
    ) {
      previousState = state;
      state = 4
      /* EscapeNext */
      ;
      continue;
    }

    switch (state) {
      case 0
      /* Static */
      :
        if (char === '/') {
          if (buffer) {
            consumeBuffer();
          }

          finalizeSegment();
        } else if (char === ':') {
          consumeBuffer();
          state = 1
          /* Param */
          ;
        } else {
          addCharToBuffer();
        }

        break;

      case 4
      /* EscapeNext */
      :
        addCharToBuffer();
        state = previousState;
        break;

      case 1
      /* Param */
      :
        if (char === '(') {
          state = 2
          /* ParamRegExp */
          ;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0
          /* Static */
          ; // go back one character if we were not modifying

          if (char !== '*' && char !== '?' && char !== '+') i--;
        }

        break;

      case 2
      /* ParamRegExp */
      :
        // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
        // it already works by escaping the closing )
        // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
        // is this really something people need since you can also write
        // /prefix_:p()_suffix
        if (char === ')') {
          // handle the escaped )
          if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;else state = 3
          /* ParamRegExpEnd */
          ;
        } else {
          customRe += char;
        }

        break;

      case 3
      /* ParamRegExpEnd */
      :
        // same as finalizing a param
        consumeBuffer();
        state = 0
        /* Static */
        ; // go back one character if we were not modifying

        if (char !== '*' && char !== '?' && char !== '+') i--;
        customRe = '';
        break;

      default:
        crash('Unknown state');
        break;
    }
  }

  if (state === 2
  /* ParamRegExp */
  ) crash("Unfinished custom RegExp for param \"".concat(buffer, "\""));
  consumeBuffer();
  finalizeSegment(); // tokenCache.set(path, tokens)

  return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
  var parser = tokensToParser(tokenizePath(record.path), options); // warn against params with the same name

  if (true) {
    var existingKeys = new Set();

    var _iterator7 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(parser.keys),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var key = _step7.value;
        if (existingKeys.has(key.name)) warn("Found duplicated params with name \"".concat(key.name, "\" for path \"").concat(record.path, "\". Only the last one will be available on \"$route.params\"."));
        existingKeys.add(key.name);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  var matcher = assign(parser, {
    record: record,
    parent: parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });

  if (parent) {
    // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
  }

  return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */


function createRouterMatcher(routes, globalOptions) {
  // normalized ordered array of matchers
  var matchers = [];
  var matcherMap = new Map();
  globalOptions = mergeOptions({
    strict: false,
    end: true,
    sensitive: false
  }, globalOptions);

  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }

  function addRoute(record, parent, originalRecord) {
    // used later on to remove by name
    var isRootAdd = !originalRecord;
    var mainNormalizedRecord = normalizeRouteRecord(record); // we might be the child of an alias

    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    var options = mergeOptions(globalOptions, record); // generate an array of records to correctly handle aliases

    var normalizedRecords = [mainNormalizedRecord];

    if ('alias' in record) {
      var aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;

      var _iterator8 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(aliases),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var alias = _step8.value;
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord // the aliases are always of the same kind as the original since they
            // are defined on the same record

          }));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    var matcher;
    var originalMatcher;

    for (var _i2 = 0, _normalizedRecords = normalizedRecords; _i2 < _normalizedRecords.length; _i2++) {
      var normalizedRecord = _normalizedRecords[_i2];
      var path = normalizedRecord.path; // Build up the path for nested routes if the child isn't an absolute
      // route. Only add the / delimiter if the child path isn't empty and if the
      // parent path doesn't have a trailing slash

      if (parent && path[0] !== '/') {
        var parentPath = parent.record.path;
        var connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }

      if ( true && normalizedRecord.path === '*') {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' + 'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      } // create the object before hand so it can be passed to children


      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if ( true && parent && path[0] === '/') checkMissingParamsInAbsolutePath(matcher, parent); // if we are an alias we must tell the original record that we exist
      // so we can be removed

      if (originalRecord) {
        originalRecord.alias.push(matcher);

        if (true) {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        // otherwise, the first record is the original and others are aliases
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher) originalMatcher.alias.push(matcher); // remove the route if named and only for the top record (avoid in nested calls)
        // this works because the original record is the first one

        if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
      }

      if ('children' in mainNormalizedRecord) {
        var children = mainNormalizedRecord.children;

        for (var i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      } // if there was no original record, then the first one was not an alias and all
      // other alias (if any) need to reference this record when adding children


      originalRecord = originalRecord || matcher; // TODO: add normalized records for more flexibility
      // if (parent && isAliasRecord(originalRecord)) {
      //   parent.children.push(originalRecord)
      // }

      insertMatcher(matcher);
    }

    return originalMatcher ? function () {
      // since other matchers are aliases, they should be removed by the original matcher
      removeRoute(originalMatcher);
    } : noop;
  }

  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      var matcher = matcherMap.get(matcherRef);

      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      var index = matchers.indexOf(matcherRef);

      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }

  function getRoutes() {
    return matchers;
  }

  function insertMatcher(matcher) {
    var i = 0; // console.log('i is', { i })

    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0) {
      i++;
    } // console.log('END i is', { i })
    // while (i < matchers.length && matcher.score <= matchers[i].score) i++


    matchers.splice(i, 0, matcher); // only add the original record to the name map

    if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
  }

  function resolve(location, currentLocation) {
    var matcher;
    var params = {};
    var path;
    var name;

    if ('name' in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location
      });
      name = matcher.record.name;
      params = assign( // paramsFromLocation is a new object
      paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
      // TODO: only keep optional params coming from a parent record
      matcher.keys.filter(function (k) {
        return !k.optional;
      }).map(function (k) {
        return k.name;
      })), location.params); // throws if cannot be stringified

      path = matcher.stringify(params);
    } else if ('path' in location) {
      // no need to resolve the path with the matcher as it was provided
      // this also allows the user to control the encoding
      path = location.path;

      if ( true && !path.startsWith('/')) {
        warn("The Matcher cannot resolve relative paths but received \"".concat(path, "\". Unless you directly called `matcher.resolve(\"").concat(path, "\")`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next."));
      }

      matcher = matchers.find(function (m) {
        return m.re.test(path);
      }); // matcher should have a value after the loop

      if (matcher) {
        // TODO: dev warning of unused params if provided
        // we know the matcher works because we tested the regexp
        params = matcher.parse(path);
        name = matcher.record.name;
      } // location is a relative path

    } else {
      // match by name or path of current route
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(function (m) {
        return m.re.test(currentLocation.path);
      });
      if (!matcher) throw createRouterError(1
      /* MATCHER_NOT_FOUND */
      , {
        location: location,
        currentLocation: currentLocation
      });
      name = matcher.record.name; // since we are navigating to the same location, we don't need to pick the
      // params like when `name` is provided

      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }

    var matched = [];
    var parentMatcher = matcher;

    while (parentMatcher) {
      // reversed order so parents are at the beginning
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }

    return {
      name: name,
      path: path,
      params: params,
      matched: matched,
      meta: mergeMetaFields(matched)
    };
  } // add initial routes


  routes.forEach(function (route) {
    return addRoute(route);
  });
  return {
    addRoute: addRoute,
    resolve: resolve,
    removeRoute: removeRoute,
    getRoutes: getRoutes,
    getRecordMatcher: getRecordMatcher
  };
}

function paramsFromLocation(params, keys) {
  var newParams = {};

  var _iterator9 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(keys),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var key = _step9.value;
      if (key in params) newParams[key] = params[key];
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */


function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: undefined,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in record ? record.components || {} : {
      default: record.component
    }
  };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */


function normalizeRecordProps(record) {
  var propsObject = {}; // props does not exist on redirect records but we can set false directly

  var props = record.props || false;

  if ('component' in record) {
    propsObject.default = props;
  } else {
    // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for (var name in record.components) {
      propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
  }

  return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */


function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf) return true;
    record = record.parent;
  }

  return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */


function mergeMetaFields(matched) {
  return matched.reduce(function (meta, record) {
    return assign(meta, record.meta);
  }, {});
}

function mergeOptions(defaults, partialOptions) {
  var options = {};

  for (var key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }

  return options;
}

function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */


function checkSameParams(a, b) {
  var _iterator10 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a.keys),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var key = _step10.value;
      if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(key.name, "\""));
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var _iterator11 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b.keys),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _key = _step11.value;
      if (!_key.optional && !a.keys.find(isSameParam.bind(null, _key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(_key.name, "\""));
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function checkMissingParamsInAbsolutePath(record, parent) {
  var _iterator12 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(parent.keys),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var key = _step12.value;
      if (!record.keys.find(isSameParam.bind(null, key))) return warn("Absolute path \"".concat(record.record.path, "\" should have the exact same param named \"").concat(key.name, "\" as its parent \"").concat(parent.record.path, "\"."));
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)


var HASH_RE = /#/g; // %23

var AMPERSAND_RE = /&/g; // %26

var SLASH_RE = /\//g; // %2F

var EQUAL_RE = /=/g; // %3D

var IM_RE = /\?/g; // %3F

var PLUS_RE = /\+/g; // %2B

/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */

var ENC_BRACKET_OPEN_RE = /%5B/g; // [

var ENC_BRACKET_CLOSE_RE = /%5D/g; // ]

var ENC_CARET_RE = /%5E/g; // ^

var ENC_BACKTICK_RE = /%60/g; // `

var ENC_CURLY_OPEN_RE = /%7B/g; // {

var ENC_PIPE_RE = /%7C/g; // |

var ENC_CURLY_CLOSE_RE = /%7D/g; // }

var ENC_SPACE_RE = /%20/g; // }

/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */

function commonEncode(text) {
  return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeQueryValue(text) {
  return commonEncode(text) // Encode the space as +, encode the + to differentiate it from the space
  .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */


function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */


function encodeParam(text) {
  return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */


function decode(text) {
  try {
    return decodeURIComponent('' + text);
  } catch (err) {
     true && warn("Error decoding \"".concat(text, "\". Using original value"));
  }

  return '' + text;
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */


function parseQuery(search) {
  var query = {}; // avoid creating an object with an empty key and empty value
  // because of split('&')

  if (search === '' || search === '?') return query;
  var hasLeadingIM = search[0] === '?';
  var searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');

  for (var i = 0; i < searchParams.length; ++i) {
    // pre decode the + into space
    var searchParam = searchParams[i].replace(PLUS_RE, ' '); // allow the = character

    var eqPos = searchParam.indexOf('=');
    var key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    var value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));

    if (key in query) {
      // an extra variable for ts types
      var currentValue = query[key];

      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }

      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }

  return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */


function stringifyQuery(query) {
  var search = '';

  var _loop = function _loop(_key2) {
    var value = query[_key2];
    _key2 = encodeQueryKey(_key2);

    if (value == null) {
      // only null adds the value
      if (value !== undefined) {
        search += (search.length ? '&' : '') + _key2;
      }

      key = _key2;
      return "continue";
    } // keep null values


    var values = Array.isArray(value) ? value.map(function (v) {
      return v && encodeQueryValue(v);
    }) : [value && encodeQueryValue(value)];
    values.forEach(function (value) {
      // skip undefined values in arrays as if they were not present
      // smaller code than using filter
      if (value !== undefined) {
        // only append & with non-empty search
        search += (search.length ? '&' : '') + _key2;
        if (value != null) search += '=' + value;
      }
    });
    key = _key2;
  };

  for (var key in query) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */


function normalizeQuery(query) {
  var normalizedQuery = {};

  for (var _key3 in query) {
    var value = query[_key3];

    if (value !== undefined) {
      normalizedQuery[_key3] = Array.isArray(value) ? value.map(function (v) {
        return v == null ? null : '' + v;
      }) : value == null ? value : '' + value;
    }
  }

  return normalizedQuery;
}
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */


function useCallbacks() {
  var handlers = [];

  function add(handler) {
    handlers.push(handler);
    return function () {
      var i = handlers.indexOf(handler);
      if (i > -1) handlers.splice(i, 1);
    };
  }

  function reset() {
    handlers = [];
  }

  return {
    add: add,
    list: function list() {
      return handlers;
    },
    reset: reset
  };
}

function registerGuard(record, name, guard) {
  var removeFromList = function removeFromList() {
    record[name].delete(guard);
  };

  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onUnmounted */ "v"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onDeactivated */ "t"])(removeFromList);
  Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* onActivated */ "s"])(function () {
    record[name].add(guard);
  });
  record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */


function onBeforeRouteLeave(leaveGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(matchedRouteKey, // to avoid warning
  {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside of a component child of <router-view>. Maybe you called it inside of App.vue?');
    return;
  }

  registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */


function onBeforeRouteUpdate(updateGuard) {
  if ( true && !Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])()) {
    warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
    return;
  }

  var activeRecord = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(matchedRouteKey, // to avoid warning
  {}).value;

  if (!activeRecord) {
     true && warn('No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside of a component child of <router-view>. Maybe you called it inside of App.vue?');
    return;
  }

  registerGuard(activeRecord, 'updateGuards', updateGuard);
}

function guardToPromiseFn(guard, to, from, record, name) {
  // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
  var enterCallbackArray = record && ( // name is defined if record is because of the function overload
  record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return function () {
    return new Promise(function (resolve, reject) {
      var next = function next(valid) {
        if (valid === false) reject(createRouterError(4
        /* NAVIGATION_ABORTED */
        , {
          from: from,
          to: to
        }));else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2
          /* NAVIGATION_GUARD_REDIRECT */
          , {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') enterCallbackArray.push(valid);
          resolve();
        }
      }; // wrapping with Promise.resolve allows it to work with both async and sync guards


      var guardReturn = guard.call(record && record.instances[name], to, from,  true ? canOnlyBeCalledOnce(next, to, from) : undefined);
      var guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3) guardCall = guardCall.then(next);

      if ( true && guard.length > 2) {
        var message = "The \"next\" callback was never called inside of ".concat(guard.name ? '"' + guard.name + '"' : '', ":\n").concat(guard.toString(), "\n. If you are returning a value instead of calling \"next\", make sure to remove the \"next\" parameter from your function.");

        if (Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(guardReturn) === 'object' && 'then' in guardReturn) {
          guardCall = guardCall.then(function (resolvedValue) {
            // @ts-expect-error: _called is added at canOnlyBeCalledOnce
            if (!next._called) {
              warn(message);
              return Promise.reject(new Error('Invalid navigation guard'));
            }

            return resolvedValue;
          }); // TODO: test me!
        } else if (guardReturn !== undefined) {
          // @ts-expect-error: _called is added at canOnlyBeCalledOnce
          if (!next._called) {
            warn(message);
            reject(new Error('Invalid navigation guard'));
            return;
          }
        }
      }

      guardCall.catch(function (err) {
        return reject(err);
      });
    });
  };
}

function canOnlyBeCalledOnce(next, to, from) {
  var called = 0;
  return function () {
    if (called++ === 1) warn("The \"next\" callback was called more than once in one navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\". It should be called exactly one time in each navigation guard. This will fail in production.")); // @ts-expect-error: we put it in the original one because it's easier to check

    next._called = true;
    if (called === 1) next.apply(null, arguments);
  };
}

function extractComponentsGuards(matched, guardType, to, from) {
  var guards = [];

  var _iterator13 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(matched),
      _step13;

  try {
    var _loop2 = function _loop2() {
      var record = _step13.value;

      var _loop3 = function _loop3(name) {
        var rawComponent = record.components[name];

        if (true) {
          if (!rawComponent || Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(rawComponent) !== 'object' && typeof rawComponent !== 'function') {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is not") + " a valid component. Received \"".concat(String(rawComponent), "\".")); // throw to ensure we stop here but warn to ensure the message isn't
            // missed by the user

            throw new Error('Invalid route component');
          } else if ('then' in rawComponent) {
            // warn if user wrote import('/component.vue') instead of () =>
            // import('./component.vue')
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a ") + "Promise instead of a function that returns a Promise. Did you " + "write \"import('./MyPage.vue')\" instead of " + "\"() => import('./MyPage.vue')\" ? This will break in " + "production if not fixed.");
            var promise = rawComponent;

            rawComponent = function rawComponent() {
              return promise;
            };
          } else if (rawComponent.__asyncLoader && // warn only once per component
          !rawComponent.__warnedDefineAsync) {
            rawComponent.__warnedDefineAsync = true;
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is defined ") + "using \"defineAsyncComponent()\". " + "Write \"() => import('./MyPage.vue')\" instead of " + "\"defineAsyncComponent(() => import('./MyPage.vue'))\".");
          }
        } // skip update and leave guards if the route component is not mounted


        if (guardType !== 'beforeRouteEnter' && !record.instances[name]) return "continue";

        if (isRouteComponent(rawComponent)) {
          // __vccOpts is added by vue-class-component and contain the regular options
          var options = rawComponent.__vccOpts || rawComponent;
          var guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          // start requesting the chunk already
          var componentPromise = rawComponent();

          if ( true && !('catch' in componentPromise)) {
            warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a function that does not return a Promise. If you were passing a functional component, make sure to add a \"displayName\" to the component. This will break in production if not fixed."));
            componentPromise = Promise.resolve(componentPromise);
          }

          guards.push(function () {
            return componentPromise.then(function (resolved) {
              if (!resolved) return Promise.reject(new Error("Couldn't resolve component \"".concat(name, "\" at \"").concat(record.path, "\"")));
              var resolvedComponent = isESModule(resolved) ? resolved.default : resolved; // replace the function with the resolved component

              record.components[name] = resolvedComponent; // __vccOpts is added by vue-class-component and contain the regular options

              var options = resolvedComponent.__vccOpts || resolvedComponent;
              var guard = options[guardType];
              return guard && guardToPromiseFn(guard, to, from, record, name)();
            });
          });
        }
      };

      for (var name in record.components) {
        var _ret2 = _loop3(name);

        if (_ret2 === "continue") continue;
      }
    };

    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 *
 * @param component
 */


function isRouteComponent(component) {
  return Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(component) === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
} // TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC


function useLink(props) {
  var router = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerKey);
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routeLocationKey);
  var route = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    return router.resolve(Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "u"])(props.to));
  });
  var activeRecordIndex = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    var matched = route.value.matched;
    var length = matched.length;
    var routeMatched = matched[length - 1];
    var currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    var index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index; // possible parent record

    var parentRecordPath = getOriginalPath(matched[length - 2]);
    return (// we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  var isActive = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    return activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params);
  });
  var isExactActive = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
    return activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params);
  });

  function navigate() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (guardEvent(e)) {
      return router[Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "u"])(props.replace) ? 'replace' : 'push'](Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "u"])(props.to) // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }

    return Promise.resolve();
  } // devtools only


  if (( true) && isBrowser) {
    var instance = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();

    if (instance) {
      var linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      }; // @ts-expect-error: this is internal

      instance.__vrl_devtools = instance.__vrl_devtools || []; // @ts-expect-error: this is internal

      instance.__vrl_devtools.push(linkContextDevtools);

      Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watchEffect */ "H"])(function () {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, {
        flush: 'post'
      });
    }
  }

  return {
    route: route,
    href: Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      return route.value.href;
    }),
    isActive: isActive,
    isExactActive: isExactActive,
    navigate: navigate
  };
}

var RouterLinkImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* defineComponent */ "l"])({
  name: 'RouterLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    }
  },
  useLink: useLink,
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var link = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "k"])(useLink(props));

    var _inject = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerKey),
        options = _inject.options;

    var elClass = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      var _ref9;

      return _ref9 = {}, Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref9, getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active'), link.isActive), Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref9, getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active'), link.isExactActive), _ref9;
    });
    return function () {
      var children = slots.default && slots.default(link);
      return props.custom ? children : Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* h */ "o"])('a', {
        'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
}); // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to render a link that triggers a navigation on click.
 */

var RouterLink = RouterLinkImpl;

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return; // don't redirect when preventDefault called

  if (e.defaultPrevented) return; // don't redirect on right click

  if (e.button !== undefined && e.button !== 0) return; // don't redirect if `target="_blank"`
  // @ts-expect-error getAttribute does exist

  if (e.currentTarget && e.currentTarget.getAttribute) {
    // @ts-expect-error getAttribute exists
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) return;
  } // this may be a Weex event which doesn't have this method


  if (e.preventDefault) e.preventDefault();
  return true;
}

function includesParams(outer, inner) {
  var _loop4 = function _loop4(_key4) {
    var innerValue = inner[_key4];
    var outerValue = outer[_key4];

    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) return {
        v: false
      };
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some(function (value, i) {
        return value !== outerValue[i];
      })) return {
        v: false
      };
    }
  };

  for (var _key4 in inner) {
    var _ret3 = _loop4(_key4);

    if (Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ret3) === "object") return _ret3.v;
  }

  return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */


function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */


var getLinkClass = function getLinkClass(propClass, globalClass, defaultClass) {
  return propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
};

var RouterViewImpl = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* defineComponent */ "l"])({
  name: 'RouterView',
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'default'
    },
    route: Object
  },
  setup: function setup(props, _ref10) {
    var attrs = _ref10.attrs,
        slots = _ref10.slots;
     true && warnDeprecatedUsage();
    var injectedRoute = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerViewLocationKey);
    var routeToDisplay = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      return props.route || injectedRoute.value;
    });
    var depth = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(viewDepthKey, 0);
    var matchedRouteRef = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
      return routeToDisplay.value.matched[depth];
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "y"])(viewDepthKey, depth + 1);
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "y"])(matchedRouteKey, matchedRouteRef);
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* provide */ "y"])(routerViewLocationKey, routeToDisplay);
    var viewRef = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* ref */ "l"])(); // watch at the same time the component instance, the route record we are
    // rendering, and the name

    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watch */ "G"])(function () {
      return [viewRef.value, matchedRouteRef.value, props.name];
    }, function (_ref11, _ref12) {
      var _ref13 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref11, 3),
          instance = _ref13[0],
          to = _ref13[1],
          name = _ref13[2];

      var _ref14 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref12, 3),
          oldInstance = _ref14[0],
          from = _ref14[1],
          oldName = _ref14[2];

      // copy reused instances
      if (to) {
        // this will update the instance for new instances as well as reused
        // instances when navigating to a new route
        to.instances[name] = instance; // the component instance is reused for a different route or name so
        // we copy any saved update or leave guards. With async setup, the
        // mounting component will mount before the matchedRoute changes,
        // making instance === oldInstance, so we check if guards have been
        // added before. This works because we remove guards when
        // unmounting/deactivating components

        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }

          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      } // trigger beforeRouteEnter next callbacks


      if (instance && to && ( // if there is no instance but to and from are the same this might be
      // the first visit
      !from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach(function (callback) {
          return callback(instance);
        });
      }
    }, {
      flush: 'post'
    });
    return function () {
      var route = routeToDisplay.value;
      var matchedRoute = matchedRouteRef.value;
      var ViewComponent = matchedRoute && matchedRoute.components[props.name]; // we need the value at the time we render because when we unmount, we
      // navigated to a different location so the value is different

      var currentName = props.name;

      if (!ViewComponent) {
        return normalizeSlot(slots.default, {
          Component: ViewComponent,
          route: route
        });
      } // props from route configuration


      var routePropsOption = matchedRoute.props[props.name];
      var routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;

      var onVnodeUnmounted = function onVnodeUnmounted(vnode) {
        // remove the instance reference to prevent leak
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };

      var component = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* h */ "o"])(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted: onVnodeUnmounted,
        ref: viewRef
      }));

      if (( true) && isBrowser && component.ref) {
        // TODO: can display if it's an alias, its props
        var info = {
          depth: depth,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        var internalInstances = Array.isArray(component.ref) ? component.ref.map(function (r) {
          return r.i;
        }) : [component.ref.i];
        internalInstances.forEach(function (instance) {
          // @ts-expect-error
          instance.__vrv_devtools = info;
        });
      }

      return (// pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, {
          Component: component,
          route: route
        }) || component
      );
    };
  }
});

function normalizeSlot(slot, data) {
  if (!slot) return null;
  var slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
} // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

/**
 * Component to display the current route the user is at.
 */


var RouterView = RouterViewImpl; // warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3

function warnDeprecatedUsage() {
  var instance = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentInstance */ "m"])();
  var parentName = instance.parent && instance.parent.type.name;

  if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
    var comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
    warn("<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n" + "Use slot props instead:\n\n" + "<router-view v-slot=\"{ Component }\">\n" + "  <".concat(comp, ">\n") + "    <component :is=\"Component\" />\n" + "  </".concat(comp, ">\n") + "</router-view>");
  }
}

function formatRouteLocation(routeLocation, tooltip) {
  var copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map(function (matched) {
      return omit(matched, ['instances', 'children', 'aliasOf']);
    })
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip: tooltip,
      value: copy
    }
  };
}

function formatDisplay(display) {
  return {
    _custom: {
      display: display
    }
  };
} // to support multiple router instances


var routerId = 0;

function addDevtools(app, router, matcher) {
  // Take over router.beforeEach and afterEach
  // make sure we are not registering the devtool twice
  if (router.__hasDevtools) return;
  router.__hasDevtools = true; // increment to support multiple router instances

  var id = routerId++;
  Object(_vue_devtools_api__WEBPACK_IMPORTED_MODULE_6__[/* setupDevtoolsPlugin */ "a"])({
    id: 'org.vuejs.router' + (id ? '.' + id : ''),
    label: 'Vue Router',
    packageName: 'vue-router',
    homepage: 'https://next.router.vuejs.org/',
    logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
    componentStateTypes: ['Routing'],
    app: app
  }, function (api) {
    // display state added by the router
    api.on.inspectComponent(function (payload, ctx) {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: 'Routing',
          key: '$route',
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, 'Current Route')
        });
      }
    }); // mark router-link as active and display tags on router views

    api.on.visitComponentTree(function (_ref15) {
      var node = _ref15.treeNode,
          componentInstance = _ref15.componentInstance;

      if (componentInstance.__vrv_devtools) {
        var info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? "".concat(info.name.toString(), ": ") : '') + info.path,
          textColor: 0,
          tooltip: 'This component is rendered by &lt;router-view&gt;',
          backgroundColor: PINK_500
        });
      } // if multiple useLink are used


      if (Array.isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;

        componentInstance.__vrl_devtools.forEach(function (devtoolsData) {
          var backgroundColor = ORANGE_400;
          var tooltip = '';

          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = 'This is exactly active';
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = 'This link is active';
          }

          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip: tooltip,
            backgroundColor: backgroundColor
          });
        });
      }
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* watch */ "G"])(router.currentRoute, function () {
      // refresh active state
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    var navigationsLayerId = 'router:navigations:' + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: "Router".concat(id ? ' ' + id : '', " Navigations"),
      color: 0x40a8c4
    }); // const errorsLayerId = 'router:errors'
    // api.addTimelineLayer({
    //   id: errorsLayerId,
    //   label: 'Router Errors',
    //   color: 0xea5455,
    // })

    router.onError(function (error, to) {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'Error during Navigation',
          subtitle: to.fullPath,
          logType: 'error',
          time: Date.now(),
          data: {
            error: error
          },
          groupId: to.meta.__navigationId
        }
      });
    }); // attached to `meta` and used to group events

    var navigationId = 0;
    router.beforeEach(function (to, from) {
      var data = {
        guard: formatDisplay('beforeEach'),
        from: formatRouteLocation(from, 'Current Location during this navigation'),
        to: formatRouteLocation(to, 'Target location')
      }; // Used to group navigations together, hide from devtools

      Object.defineProperty(to.meta, '__navigationId', {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: Date.now(),
          title: 'Start of navigation',
          subtitle: to.fullPath,
          data: data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach(function (to, from, failure) {
      var data = {
        guard: formatDisplay('afterEach')
      };

      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : '',
            tooltip: 'Navigation Failure',
            value: failure
          }
        };
        data.status = formatDisplay('❌');
      } else {
        data.status = formatDisplay('✅');
      } // we set here to have the right order


      data.from = formatRouteLocation(from, 'Current Location during this navigation');
      data.to = formatRouteLocation(to, 'Target location');
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'End of navigation',
          subtitle: to.fullPath,
          time: Date.now(),
          data: data,
          logType: failure ? 'warning' : 'default',
          groupId: to.meta.__navigationId
        }
      });
    });
    /**
     * Inspector of Existing routes
     */

    var routerInspectorId = 'router-inspector:' + id;
    api.addInspector({
      id: routerInspectorId,
      label: 'Routes' + (id ? ' ' + id : ''),
      icon: 'book',
      treeFilterPlaceholder: 'Search routes'
    });

    function refreshRoutesView() {
      // the routes view isn't active
      if (!activeRoutesPayload) return;
      var payload = activeRoutesPayload; // children routes will appear as nested

      var routes = matcher.getRoutes().filter(function (route) {
        return !route.parent;
      }); // reset match state to false

      routes.forEach(resetMatchStateOnRouteRecord); // apply a match state if there is a payload

      if (payload.filter) {
        routes = routes.filter(function (route) {
          return (// save matches state based on the payload
            isRouteMatching(route, payload.filter.toLowerCase())
          );
        });
      } // mark active routes


      routes.forEach(function (route) {
        return markRouteRecordActive(route, router.currentRoute.value);
      });
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }

    var activeRoutesPayload;
    api.on.getInspectorTree(function (payload) {
      activeRoutesPayload = payload;

      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    /**
     * Display information about the currently selected route record
     */

    api.on.getInspectorState(function (payload) {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        var routes = matcher.getRoutes();
        var route = routes.find(function (route) {
          return route.record.__vd_id === payload.nodeId;
        });

        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}

function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? '*' : '?';
  } else {
    return key.repeatable ? '+' : '';
  }
}

function formatRouteRecordMatcherForStateInspector(route) {
  var record = route.record;
  var fields = [{
    editable: false,
    key: 'path',
    value: record.path
  }];

  if (record.name != null) {
    fields.push({
      editable: false,
      key: 'name',
      value: record.name
    });
  }

  fields.push({
    editable: false,
    key: 'regexp',
    value: route.re
  });

  if (route.keys.length) {
    fields.push({
      editable: false,
      key: 'keys',
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map(function (key) {
            return "".concat(key.name).concat(modifierForKey(key));
          }).join(' '),
          tooltip: 'Param keys',
          value: route.keys
        }
      }
    });
  }

  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: 'redirect',
      value: record.redirect
    });
  }

  if (route.alias.length) {
    fields.push({
      editable: false,
      key: 'aliases',
      value: route.alias.map(function (alias) {
        return alias.record.path;
      })
    });
  }

  fields.push({
    key: 'score',
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map(function (score) {
          return score.join(', ');
        }).join(' | '),
        tooltip: 'Score used to sort routes',
        value: route.score
      }
    }
  });
  return fields;
}
/**
 * Extracted from tailwind palette
 */


var PINK_500 = 0xec4899;
var BLUE_600 = 0x2563eb;
var LIME_500 = 0x84cc16;
var CYAN_400 = 0x22d3ee;
var ORANGE_400 = 0xfb923c; // const GRAY_100 = 0xf4f4f5

var DARK = 0x666666;

function formatRouteRecordForInspector(route) {
  var tags = [];
  var record = route.record;

  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }

  if (record.aliasOf) {
    tags.push({
      label: 'alias',
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }

  if (route.__vd_match) {
    tags.push({
      label: 'matches',
      textColor: 0,
      backgroundColor: PINK_500
    });
  }

  if (route.__vd_exactActive) {
    tags.push({
      label: 'exact',
      textColor: 0,
      backgroundColor: LIME_500
    });
  }

  if (route.__vd_active) {
    tags.push({
      label: 'active',
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }

  if (record.redirect) {
    tags.push({
      label: 'redirect: ' + (typeof record.redirect === 'string' ? record.redirect : 'Object'),
      textColor: 0xffffff,
      backgroundColor: DARK
    });
  } // add an id to be able to select it. Using the `path` is not possible because
  // empty path children would collide with their parents


  var id = record.__vd_id;

  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }

  return {
    id: id,
    label: record.path,
    tags: tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
} //  incremental id for route records and inspector state


var routeRecordId = 0;
var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;

function markRouteRecordActive(route, currentRoute) {
  // no route will be active if matched is empty
  // reset the matching state
  var isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;

  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some(function (match) {
      return isSameRouteRecord(match, route.record);
    });
  }

  route.children.forEach(function (childRoute) {
    return markRouteRecordActive(childRoute, currentRoute);
  });
}

function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}

function isRouteMatching(route, filter) {
  var found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;

  if (!found || found.length < 3) {
    return false;
  } // use a regexp without $ at the end to match nested routes better


  var nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);

  if (nonEndingRE.test(filter)) {
    // mark children as matches
    route.children.forEach(function (child) {
      return isRouteMatching(child, filter);
    }); // exception case: `/`

    if (route.record.path !== '/' || filter === '/') {
      route.__vd_match = route.re.test(filter);
      return true;
    } // hide the / route


    return false;
  }

  var path = route.record.path.toLowerCase();
  var decodedPath = decode(path); // also allow partial matching on the path

  if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
  if (route.record.name && String(route.record.name).includes(filter)) return true;
  return route.children.some(function (child) {
    return isRouteMatching(child, filter);
  });
}

function omit(obj, keys) {
  var ret = {};

  for (var _key5 in obj) {
    if (!keys.includes(_key5)) {
      // @ts-expect-error
      ret[_key5] = obj[_key5];
    }
  }

  return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */


function createRouter(options) {
  var matcher = createRouterMatcher(options.routes, options);
  var parseQuery$1 = options.parseQuery || parseQuery;
  var stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  var routerHistory = options.history;
  if ( true && !routerHistory) throw new Error('Provide the "history" option when calling "createRouter()":' + ' https://next.router.vuejs.org/api/#history.');
  var beforeGuards = useCallbacks();
  var beforeResolveGuards = useCallbacks();
  var afterGuards = useCallbacks();
  var currentRoute = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* shallowRef */ "p"])(START_LOCATION_NORMALIZED);
  var pendingLocation = START_LOCATION_NORMALIZED; // leave the scrollRestoration if no scrollBehavior is provided

  if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  var normalizeParams = applyToParams.bind(null, function (paramValue) {
    return '' + paramValue;
  });
  var encodeParams = applyToParams.bind(null, encodeParam);
  var decodeParams = // @ts-expect-error: intentionally avoid the type check
  applyToParams.bind(null, decode);

  function addRoute(parentOrRoute, route) {
    var parent;
    var record;

    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }

    return matcher.addRoute(record, parent);
  }

  function removeRoute(name) {
    var recordMatcher = matcher.getRecordMatcher(name);

    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (true) {
      warn("Cannot remove non-existent route \"".concat(String(name), "\""));
    }
  }

  function getRoutes() {
    return matcher.getRoutes().map(function (routeMatcher) {
      return routeMatcher.record;
    });
  }

  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }

  function resolve(rawLocation, currentLocation) {
    // const objectLocation = routerLocationAsObject(rawLocation)
    // we create a copy to modify it later
    currentLocation = assign({}, currentLocation || currentRoute.value);

    if (typeof rawLocation === 'string') {
      var locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);

      var _matchedRoute = matcher.resolve({
        path: locationNormalized.path
      }, currentLocation);

      var _href = routerHistory.createHref(locationNormalized.fullPath);

      if (true) {
        if (_href.startsWith('//')) warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(_href, "\". A resolved location cannot start with multiple slashes."));else if (!_matchedRoute.matched.length) {
          warn("No match found for location with path \"".concat(rawLocation, "\""));
        }
      } // locationNormalized is always a new object


      return assign(locationNormalized, _matchedRoute, {
        params: decodeParams(_matchedRoute.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: undefined,
        href: _href
      });
    }

    var matcherLocation; // path could be relative in object as well

    if ('path' in rawLocation) {
      if ( true && 'params' in rawLocation && !('name' in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn("Path \"".concat( // @ts-expect-error: the type is never
        rawLocation.path, "\" was passed with params but they will be ignored. Use a named route alongside params instead."));
      }

      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      // remove any nullish param
      var targetParams = assign({}, rawLocation.params);

      for (var _key6 in targetParams) {
        if (targetParams[_key6] == null) {
          delete targetParams[_key6];
        }
      } // pass encoded values to the matcher so it can produce encoded path and fullPath


      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      }); // current location params are decoded, we need to encode them in case the
      // matcher merges the params

      currentLocation.params = encodeParams(currentLocation.params);
    }

    var matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    var hash = rawLocation.hash || '';

    if ( true && hash && !hash.startsWith('#')) {
      warn("A `hash` should always start with the character \"#\". Replace \"".concat(hash, "\" with \"#").concat(hash, "\"."));
    } // decoding them) the matcher might have merged current location params so
    // we need to run the decoding again


    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    var fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    var href = routerHistory.createHref(fullPath);

    if (true) {
      if (href.startsWith('//')) {
        warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(href, "\". A resolved location cannot start with multiple slashes."));
      } else if (!matchedRoute.matched.length) {
        warn("No match found for location with path \"".concat('path' in rawLocation ? rawLocation.path : rawLocation, "\""));
      }
    }

    return assign({
      fullPath: fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: hash,
      query: // if the user is using a custom query lib like qs, we might have
      // nested objects, so we keep the query as is, meaning it can contain
      // numbers at `$route.query`, but at the point, the user will have to
      // use their own type anyway.
      // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
      stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: undefined,
      href: href
    });
  }

  function locationAsObject(to) {
    return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }

  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8
      /* NAVIGATION_CANCELLED */
      , {
        from: from,
        to: to
      });
    }
  }

  function push(to) {
    return pushWithRedirect(to);
  }

  function replace(to) {
    return push(assign(locationAsObject(to), {
      replace: true
    }));
  }

  function handleRedirectRecord(to) {
    var lastMatched = to.matched[to.matched.length - 1];

    if (lastMatched && lastMatched.redirect) {
      var redirect = lastMatched.redirect;
      var newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;

      if (typeof newTargetLocation === 'string') {
        newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) : // force empty params
        {
          path: newTargetLocation
        }; // @ts-expect-error: force empty params when a string is passed to let
        // the router parse them again

        newTargetLocation.params = {};
      }

      if ( true && !('path' in newTargetLocation) && !('name' in newTargetLocation)) {
        warn("Invalid redirect found:\n".concat(JSON.stringify(newTargetLocation, null, 2), "\n when navigating to \"").concat(to.fullPath, "\". A redirect must contain a name or path. This will break in production."));
        throw new Error('Invalid redirect');
      }

      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }

  function pushWithRedirect(to, redirectedFrom) {
    var targetLocation = pendingLocation = resolve(to);
    var from = currentRoute.value;
    var data = to.state;
    var force = to.force; // to could be a string where `replace` is a function

    var replace = to.replace === true;
    var shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
      state: data,
      force: force,
      replace: replace
    }), // keep original redirectedFrom if it exists
    redirectedFrom || targetLocation); // if it was a redirect we already called `pushWithRedirect` above

    var toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    var failure;

    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16
      /* NAVIGATION_DUPLICATED */
      , {
        to: toLocation,
        from: from
      }); // trigger scroll to allow scrolling to the same anchor

      handleScroll(from, from, // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      true, // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      false);
    }

    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch(function (error) {
      return isNavigationFailure(error) ? error : // reject any unknown error
      triggerError(error, toLocation, from);
    }).then(function (failure) {
      if (failure) {
        if (isNavigationFailure(failure, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          if ( true && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? // @ts-expect-error
          redirectedFrom._count + 1 : 1) > 10) {
            warn("Detected an infinite redirection in a navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(toLocation.fullPath, "\". Aborting to avoid a Stack Overflow. This will break in production if not fixed."));
            return Promise.reject(new Error('Infinite redirect in navigation guard'));
          }

          return pushWithRedirect( // keep options
          assign(locationAsObject(failure.to), {
            state: data,
            force: force,
            replace: replace
          }), // preserve the original redirectedFrom if any
          redirectedFrom || toLocation);
        }
      } else {
        // if we fail we don't finalize the navigation
        failure = finalizeNavigation(toLocation, from, true, replace, data);
      }

      triggerAfterEach(toLocation, from, failure);
      return failure;
    });
  }
  /**
   * Helper to reject and skip all navigation guards if a new navigation happened
   * @param to
   * @param from
   */


  function checkCanceledNavigationAndReject(to, from) {
    var error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  } // TODO: refactor the whole before guards by internally using router.beforeEach


  function navigate(to, from) {
    var guards;

    var _extractChangingRecor = extractChangingRecords(to, from),
        _extractChangingRecor2 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_extractChangingRecor, 3),
        leavingRecords = _extractChangingRecor2[0],
        updatingRecords = _extractChangingRecor2[1],
        enteringRecords = _extractChangingRecor2[2]; // all components here have been resolved once because we are leaving


    guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from); // leavingRecords is already reversed

    var _iterator14 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(leavingRecords),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var record = _step14.value;
        record.leaveGuards.forEach(function (guard) {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    var canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck); // run the queue of per route beforeRouteLeave guards

    return runGuardQueue(guards).then(function () {
      // check global guards beforeEach
      guards = [];

      var _iterator15 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(beforeGuards.list()),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var guard = _step15.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(function () {
      // check in components beforeRouteUpdate
      guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);

      var _iterator16 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updatingRecords),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var record = _step16.value;
          record.updateGuards.forEach(function (guard) {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check the route beforeEnter
      guards = [];

      var _iterator17 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(to.matched),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var record = _step17.value;

          // do not trigger beforeEnter on reused views
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              var _iterator18 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(record.beforeEnter),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var beforeEnter = _step18.value;
                  guards.push(guardToPromiseFn(beforeEnter, to, from));
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
      // clear existing enterCallbacks, these are added by extractComponentsGuards
      to.matched.forEach(function (record) {
        return record.enterCallbacks = {};
      }); // check in-component beforeRouteEnter

      guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
      guards.push(canceledNavigationCheck); // run the queue of per route beforeEnter guards

      return runGuardQueue(guards);
    }).then(function () {
      // check global guards beforeResolve
      guards = [];

      var _iterator19 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(beforeResolveGuards.list()),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var guard = _step19.value;
          guards.push(guardToPromiseFn(guard, to, from));
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }) // catch any navigation canceled
    .catch(function (err) {
      return isNavigationFailure(err, 8
      /* NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err);
    });
  }

  function triggerAfterEach(to, from, failure) {
    // navigation is confirmed, call afterGuards
    // TODO: wrap with error handlers
    var _iterator20 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(afterGuards.list()),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var guard = _step20.value;
        guard(to, from, failure);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
  }
  /**
   * - Cleans up any navigation guards
   * - Changes the url if necessary
   * - Calls the scrollBehavior
   */


  function finalizeNavigation(toLocation, from, isPush, replace, data) {
    // a more recent navigation took place
    var error = checkCanceledNavigation(toLocation, from);
    if (error) return error; // only consider as push if it's not the first navigation

    var isFirstNavigation = from === START_LOCATION_NORMALIZED;
    var state = !isBrowser ? {} : history.state; // change URL only if the user did a push/replace and if it's not the initial navigation because
    // it's just reflecting the url

    if (isPush) {
      // on the initial navigation, we want to reuse the scroll position from
      // history state if it exists
      if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
        scroll: isFirstNavigation && state && state.scroll
      }, data));else routerHistory.push(toLocation.fullPath, data);
    } // accept current navigation


    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }

  var removeHistoryListener; // attach listener to history to trigger navigations

  function setupListeners() {
    removeHistoryListener = routerHistory.listen(function (to, _from, info) {
      // cannot be a redirect route because it was in history
      var toLocation = resolve(to); // due to dynamic routing, and to hash history with manual navigation
      // (manually changing the url or calling history.hash = '#/somewhere'),
      // there could be a redirect record in history

      var shouldRedirect = handleRedirectRecord(toLocation);

      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, {
          replace: true
        }), toLocation).catch(noop);
        return;
      }

      pendingLocation = toLocation;
      var from = currentRoute.value; // TODO: should be moved to web history?

      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }

      navigate(toLocation, from).catch(function (error) {
        if (isNavigationFailure(error, 4
        /* NAVIGATION_ABORTED */
        | 8
        /* NAVIGATION_CANCELLED */
        )) {
          return error;
        }

        if (isNavigationFailure(error, 2
        /* NAVIGATION_GUARD_REDIRECT */
        )) {
          // Here we could call if (info.delta) routerHistory.go(-info.delta,
          // false) but this is bug prone as we have no way to wait the
          // navigation to be finished before calling pushWithRedirect. Using
          // a setTimeout of 16ms seems to work but there is not guarantee for
          // it to work on every browser. So Instead we do not restore the
          // history entry and trigger a new navigation as requested by the
          // navigation guard.
          // the error is already handled by router.push we just want to avoid
          // logging the error
          pushWithRedirect(error.to, toLocation // avoid an uncaught rejection, let push call triggerError
          ).then(function (failure) {
            // manual change in hash history #916 ending up in the URL not
            // changing but it was changed by the manual url change, so we
            // need to manually change it ourselves
            if (isNavigationFailure(failure, 4
            /* NAVIGATION_ABORTED */
            | 16
            /* NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop); // avoid the then branch

          return Promise.reject();
        } // do not restore history on unknown direction


        if (info.delta) routerHistory.go(-info.delta, false); // unrecognized error, transfer to the global handler

        return triggerError(error, toLocation, from);
      }).then(function (failure) {
        failure = failure || finalizeNavigation( // after navigation, all matched components are resolved
        toLocation, from, false); // revert the navigation

        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4
          /* NAVIGATION_ABORTED */
          | 16
          /* NAVIGATION_DUPLICATED */
          )) {
            // manual change in hash history #916
            // it's like a push but lacks the information of the direction
            routerHistory.go(-1, false);
          }
        }

        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  } // Initialization and Errors


  var readyHandlers = useCallbacks();
  var errorHandlers = useCallbacks();
  var ready;
  /**
   * Trigger errorHandlers added via onError and throws the error as well
   *
   * @param error - error to throw
   * @param to - location we were navigating to when the error happened
   * @param from - location we were navigating from when the error happened
   * @returns the error as a rejected promise
   */

  function triggerError(error, to, from) {
    markAsReady(error);
    var list = errorHandlers.list();

    if (list.length) {
      list.forEach(function (handler) {
        return handler(error, to, from);
      });
    } else {
      if (true) {
        warn('uncaught error during route navigation:');
      }

      console.error(error);
    }

    return Promise.reject(error);
  }

  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      readyHandlers.add([resolve, reject]);
    });
  }
  /**
   * Mark the router as ready, resolving the promised returned by isReady(). Can
   * only be called once, otherwise does nothing.
   * @param err - optional error
   */


  function markAsReady(err) {
    if (ready) return;
    ready = true;
    setupListeners();
    readyHandlers.list().forEach(function (_ref16) {
      var _ref17 = Object(D_MyFiles_taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref16, 2),
          resolve = _ref17[0],
          reject = _ref17[1];

      return err ? reject(err) : resolve();
    });
    readyHandlers.reset();
  } // Scroll behavior


  function handleScroll(to, from, isPush, isFirstNavigation) {
    var scrollBehavior = options.scrollBehavior;
    if (!isBrowser || !scrollBehavior) return Promise.resolve();
    var scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* nextTick */ "r"])().then(function () {
      return scrollBehavior(to, from, scrollPosition);
    }).then(function (position) {
      return position && scrollToPosition(position);
    }).catch(function (err) {
      return triggerError(err, to, from);
    });
  }

  var go = function go(delta) {
    return routerHistory.go(delta);
  };

  var started;
  var installedApps = new Set();
  var router = {
    currentRoute: currentRoute,
    addRoute: addRoute,
    removeRoute: removeRoute,
    hasRoute: hasRoute,
    getRoutes: getRoutes,
    resolve: resolve,
    options: options,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      return go(-1);
    },
    forward: function forward() {
      return go(1);
    },
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady: isReady,
    install: function install(app) {
      var router = this;
      app.component('RouterLink', RouterLink);
      app.component('RouterView', RouterView);
      app.config.globalProperties.$router = router;
      Object.defineProperty(app.config.globalProperties, '$route', {
        enumerable: true,
        get: function get() {
          return Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* unref */ "u"])(currentRoute);
        }
      }); // this initial navigation is only necessary on client, on server it doesn't
      // make sense because it will create an extra unnecessary navigation and could
      // lead to problems

      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        // see above
        started = true;
        push(routerHistory.location).catch(function (err) {
          if (true) warn('Unexpected error when starting the router:', err);
        });
      }

      var reactiveRoute = {};

      var _loop5 = function _loop5(_key7) {
        // @ts-expect-error: the key matches
        reactiveRoute[_key7] = Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(function () {
          return currentRoute.value[_key7];
        });
      };

      for (var _key7 in START_LOCATION_NORMALIZED) {
        _loop5(_key7);
      }

      app.provide(routerKey, router);
      app.provide(routeLocationKey, Object(vue__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "k"])(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      var unmountApp = app.unmount;
      installedApps.add(app);

      app.unmount = function () {
        installedApps.delete(app); // the router is not attached to an app anymore

        if (installedApps.size < 1) {
          // invalidate the current navigation
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }

        unmountApp();
      };

      if (( true) && isBrowser) {
        addDevtools(app, router, matcher);
      }
    }
  };
  return router;
}

function runGuardQueue(guards) {
  return guards.reduce(function (promise, guard) {
    return promise.then(function () {
      return guard();
    });
  }, Promise.resolve());
}

function extractChangingRecords(to, from) {
  var leavingRecords = [];
  var updatingRecords = [];
  var enteringRecords = [];
  var len = Math.max(from.matched.length, to.matched.length);

  var _loop6 = function _loop6(i) {
    var recordFrom = from.matched[i];

    if (recordFrom) {
      if (to.matched.find(function (record) {
        return isSameRouteRecord(record, recordFrom);
      })) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
    }

    var recordTo = to.matched[i];

    if (recordTo) {
      // the type doesn't matter because we are comparing per reference
      if (!from.matched.find(function (record) {
        return isSameRouteRecord(record, recordTo);
      })) {
        enteringRecords.push(recordTo);
      }
    }
  };

  for (var i = 0; i < len; i++) {
    _loop6(i);
  }

  return [leavingRecords, updatingRecords, enteringRecords];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */


function useRouter() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */


function useRoute() {
  return Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* inject */ "p"])(routeLocationKey);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./src/app.less":
/*!**********************!*\
  !*** ./src/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.ts */ "./node_modules/babel-loader/lib/index.js!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");









var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__["createVue3App"])(_node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], vue__WEBPACK_IMPORTED_MODULE_5__[/* h */ "o"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["initPxTransform"])({
  designWidth: 375,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/assets/icons sync \\.svg$":
/*!***************************************************!*\
  !*** ./src/assets/icons sync nonrecursive \.svg$ ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pendant_1.svg": "./src/assets/icons/pendant_1.svg",
	"./pendant_10.svg": "./src/assets/icons/pendant_10.svg",
	"./pendant_10_1.svg": "./src/assets/icons/pendant_10_1.svg",
	"./pendant_11.svg": "./src/assets/icons/pendant_11.svg",
	"./pendant_12.svg": "./src/assets/icons/pendant_12.svg",
	"./pendant_2.svg": "./src/assets/icons/pendant_2.svg",
	"./pendant_3.svg": "./src/assets/icons/pendant_3.svg",
	"./pendant_3_1.svg": "./src/assets/icons/pendant_3_1.svg",
	"./pendant_4.svg": "./src/assets/icons/pendant_4.svg",
	"./pendant_5.svg": "./src/assets/icons/pendant_5.svg",
	"./pendant_5_1.svg": "./src/assets/icons/pendant_5_1.svg",
	"./pendant_5_2.svg": "./src/assets/icons/pendant_5_2.svg",
	"./pendant_6.svg": "./src/assets/icons/pendant_6.svg",
	"./pendant_7.svg": "./src/assets/icons/pendant_7.svg",
	"./pendant_8.svg": "./src/assets/icons/pendant_8.svg",
	"./pendant_9.svg": "./src/assets/icons/pendant_9.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync \\.svg$";

/***/ }),

/***/ "./src/components/svg-icon/SvgIcon.vue":
/*!*********************************************!*\
  !*** ./src/components/svg-icon/SvgIcon.vue ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _SvgIcon_vue_vue_type_template_id_6ee45a20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcon.vue?vue&type=template&id=6ee45a20 */ "./src/components/svg-icon/SvgIcon.vue?vue&type=template&id=6ee45a20");
/* harmony import */ var _SvgIcon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon.vue?vue&type=script&setup=true&lang=js */ "./src/components/svg-icon/SvgIcon.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _SvgIcon_vue_vue_type_style_index_0_id_6ee45a20_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css */ "./src/components/svg-icon/SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
/* harmony import */ var D_MyFiles_taro_demo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_MyFiles_taro_demo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/D_MyFiles_taro_demo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_SvgIcon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_SvgIcon_vue_vue_type_template_id_6ee45a20__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/components/svg-icon/SvgIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./src/components/svg-icon/SvgIcon.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/svg-icon/SvgIcon.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./SvgIcon.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/components/svg-icon/SvgIcon.vue?vue&type=script&setup=true&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/components/svg-icon/SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/components/svg-icon/SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_0_2_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_style_index_0_id_6ee45a20_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-0-2!../../../node_modules/vue-loader/dist??ref--10-0!./SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/components/svg-icon/SvgIcon.vue?vue&type=style&index=0&id=6ee45a20&lang=css");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_0_2_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_style_index_0_id_6ee45a20_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_0_2_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_style_index_0_id_6ee45a20_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/components/svg-icon/SvgIcon.vue?vue&type=template&id=6ee45a20":
/*!***************************************************************************!*\
  !*** ./src/components/svg-icon/SvgIcon.vue?vue&type=template&id=6ee45a20 ***!
  \***************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_template_id_6ee45a20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./SvgIcon.vue?vue&type=template&id=6ee45a20 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/svg-icon/SvgIcon.vue?vue&type=template&id=6ee45a20");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_SvgIcon_vue_vue_type_template_id_6ee45a20__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./src/components/svg-icon/index.ts":
/*!******************************************!*\
  !*** ./src/components/svg-icon/index.ts ***!
  \******************************************/
/*! exports provided: setSvgIcon */
/*! exports used: setSvgIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setSvgIcon; });
/* harmony import */ var _SvgIcon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcon.vue */ "./src/components/svg-icon/SvgIcon.vue");

function setSvgIcon(app) {
  var req = __webpack_require__("./src/assets/icons sync \\.svg$");

  var requireAll = function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  };

  requireAll(req);
  app.component("SvgIcon", _SvgIcon_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
}

/***/ })

},[["./src/app.ts","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map