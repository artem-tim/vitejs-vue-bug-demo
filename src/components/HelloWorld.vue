<script setup>
const title = 'HelloWorld Title';
</script>

<template>
  <h1>{{ title }}</h1>
  Input: <input type="text" v-model="testData" />
</template>

<script>
export default {
  data() {
    return {
      testData: '',
    };
  },
};
</script>
