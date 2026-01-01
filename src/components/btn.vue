<template>
  <a :class="paddingClass"
     :href="href"
     class="group hover-outer-glow glow-block animate-gradient__rotate relative bg-white/5 flex items-center ring-1 ring-white/20 hover:ring-transparent transition-all duration-200 font-semibold rounded-full py-2 text-base text-white">
    <i></i>
    <slot></slot>
  </a>
</template>
<script setup>
</script>

<script>

export default {
  props: {
    paddingClass: {
      type: String,
      default: 'px-5',
    },
    href: {
      type: String,
      default: '#'
    }
  }
}

</script>
