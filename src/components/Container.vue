<template>
  <div :class="classes" class="mx-auto max-w-7xl px-6 lg:px-8">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  props: ['classes']
}
</script>

