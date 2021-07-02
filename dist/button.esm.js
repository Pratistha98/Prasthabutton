import { openBlock, createBlock, createVNode, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'Button',
  props: {
    name: String
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-2b586ce6");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [createVNode("button", null, toDisplayString($props.name), 1)]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-2b586ce6";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('Button', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
