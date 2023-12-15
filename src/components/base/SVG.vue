<template>
  <svg :style="{ width: size ? size : width, height: size ? size : height }">
    <use :href="`#icon-${href}`" :fill="color" />
  </svg>
</template>

<script setup lang="js">
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  color: {
    type: String ,
    default: undefined,
  },
  //默认svg宽高一致填写size，不一致填写width和height
  size: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
});
console.log('>>>>>>>>>>>>>>>>>>>>');
</script>
