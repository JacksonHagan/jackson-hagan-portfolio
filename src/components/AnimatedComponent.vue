<template>
  <div ref="target">
    <transition :name="animationType">
      <div v-appear="animate" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';

const appear = {

};


export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade'
    }
  },
  setup() {
    const target = ref();
    const animate = ref(false);
    const observer = new IntersectionObserver(
        ([entry]) => {
          animate.value = entry.isIntersecting;
        },
        {
          threshold: 0.5
        }
    );
    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      animate,
      target
    };
  },
  directives: {
    // enables v-focus in template
    appear: {
      beforeMount(element) {
        element.style.visibility = 'hidden';
      },
      updated(element, binding, node) {
        if (!binding.value === !binding.oldValue
            || null === node.transition) {
          return;
        }
        if (!binding.value) {
          node.transition.leave(element, () => {
            element.style.visibility = 'hidden';
          });
          return;
        }
        node.transition.beforeEnter(element);
        element.style.visibility = '';
        node.transition.enter(element);
      }
    }
  }
};
</script>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}

/* Fade animation down */
.fade-down-enter-active {
  transition: all 2s ease;
}
.fade-down-leave-active {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.fade-down-enter-from, .fade-down-leave-to {
  transform: translateY(-14px);
  opacity: 0;
}


/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2000ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/*

 */
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 300ms ease;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.9);
}
</style>