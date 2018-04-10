<template>
  <div class="hello">
    <img src="./../assets/porg.jpg">
    <h1>{{ msg }}</h1>
    <h3>{{ submsg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
    submsg: {
      type: String,
      default: '',
    },
    submsg2: {
      type: String,
      default: '',
    },
  },
};
</script>