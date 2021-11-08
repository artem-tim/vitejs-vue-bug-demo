# Vue 3 + Vite bug

This small repo demonstrates a bug when building a Vite+Vue project in library mode.
Specificially, the fact that HelloWorld.vue contains both `<script setup>` and `<script>` tags (despite the docs explicitly talking about this usecase : https://v3.vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script )

The problem only appears when the project is built (`npm run build`) for production, and the umd file is imported from another app (mounting a #app tag) - in dev mode (`npm run dev`) everything is working fine

To reproduce, try entering something in the input tag : console will display error about data var in the v-model being undefined.

Checking out the built source (minification disabled), here's the generated function (from `dist/test-lib.umd.js` after running `npm run build`) :
```
  function setup(__props) {
    const title = "HelloWorld Title 1";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, toDisplayString(title)),
        _hoisted_1,
        withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(testData) ? testData.value = $event : null)
        }, null, 512), [
          [vModelText, _ctx.testData]
        ])
      ], 64);
    };
  }
```

We can see that indeed the var `testData` is nowhere to be defined
