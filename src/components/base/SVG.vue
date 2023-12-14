<template>
  <svg>
    <use :href="`#icon-${href}`" />
  </svg>
</template>
<script>
export default {
  name: "CSVG",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      href: props.href,
    };
  },
};
</script>
