<!--242529-->

<style>
.home-hero-bg-wrap {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: linear-gradient(to top, rgba(148, 163, 184, 0) 30%, #42444b, rgba(148, 163, 184, 0));
}
.home-hero-bg-tiles {
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-image: url('/assets/images/grid.svg');
  background-position: 50% 0;
  background-size: 400px 200px;
  /* background-size: 71px 35.5px;  smaller bg grid */
  background-repeat: repeat;
}

.home-hero-bg-wrap::before {
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0;
  will-change: background, opacity;
  transition-duration: 400ms;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: opacity;
  background-image: radial-gradient(355px at var(--cursor-x) var(--cursor-y), rgba(190, 242, 255, 100%), transparent 40%);
  background-size: auto;
  background-origin: padding-box;
  z-index: 1;
}

.home-hero:hover .home-hero-bg-highlight {
  opacity: 100%;
}

.home-hero:hover .home-hero-bg-wrap::before {
  opacity: 1;
}

.cursor-glow {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 2600px;
  height: 2600px;
  border-radius: 50%;
  background: radial-gradient(400px 400px, rgba(97, 130, 235, 0.1), transparent);
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div class="relative isolate overflow-hidden">
    <div class="cursor-glow"></div>

    <svg class="pointer-events-none mt-[80px] absolute inset-0 -z-20 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
         aria-hidden="true">


    </svg>

    <div
        class="pointer-events-none absolute left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#5d7395] to-[#515c81] opacity-20"
           style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
    </div>

    <div style="z-index: -99999999999999999;" class="home-hero top-20 absolute -z-10 top-0 left-0 w-full h-full">
      <div class="home-hero-bg-wrap [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
        <div class="home-hero-bg-tiles">
        </div>
      </div>
    </div>

    <container class="pointer-events-none pb-24 sm:pb-72 flex justify-center pt-[17.25rem] text-center">
      <div class="mx-auto lg:mx-0 max-w-2xl pt-8">

        <h1 class="animate-fade-down-sm animate-ease animate-duration-[1000ms] text-6xl md:text-7xl	font-medium h1-title heading aeonik tracking-[-.02em]">
          <span class="leading-[71px] md:leading-[81px]">
            Jackson Hagan<br>
          <span class="gradient-heading animated-gradient-heading">Software Developer</span>
          </span>
        </h1>

        <p class="animate-fade-down-sm animate-delay-200 animate-ease animate-duration-[1000ms] mt-10 text-xl leading-8 text-gray-300">Designing and developing scalable, user-focused web experiences.
        </p>

        <div class="animate-fade-down-sm animate-delay-[400ms] animate-ease animate-duration-[1000ms] z-10 inline-flex items-center space-x-3 justify-center mt-10 pointer-events-auto">
          <btn>
            Download Resume
            <div class="pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
              </svg>
            </div>
          </btn>

          <btn padding-class="px-2" href="https://github.com/JacksonHagan" target="_blank">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path fill="#ffffff"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </btn>


          <btn padding-class="px-2" href="https://www.linkedin.com/in/jackson-hagan-356ba6272/" target="_blank">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
              <path fill="#ffffff"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </btn>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Projects from "@/components/Projects.vue";
import IconTailwind from "@/components/icons/IconTailwind.vue";
import IconLivewire from "@/components/icons/IconLivewire.vue";
import IconAlpine from "@/components/icons/IconAlpine.vue";
import IconLaravel from "@/components/icons/IconLaravel.vue";
import Pill from "@/components/Pill.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import Nav from "@/components/Nav.vue";
import Btn from "@/components/btn.vue";
import Container from "@/components/Container.vue";

export default {
  components: {Container, Btn},
  mounted() {
    const cursorOffSet = function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.setProperty("--cursor-x", x + "px");
      this.style.setProperty("--cursor-y", y + "px");
    };

    document.querySelector(".home-hero").addEventListener("mousemove", cursorOffSet);

    document.addEventListener('DOMContentLoaded', function () {
      var cursorGlow = document.querySelector('.cursor-glow');
      var animationDuration = 300; // Set the animation duration in milliseconds

      document.addEventListener('mousemove', function (e) {
        var posX = e.clientX;
        var posY = e.clientY;
        cursorGlow.style.left = posX + 'px';
        cursorGlow.style.top = posY + 'px';
      });

      document.addEventListener('click', function () {
        cursorGlow.classList.add('enlarged');
        cursorGlow.classList.add('clicked');
        setTimeout(function () {
          cursorGlow.classList.remove('enlarged');
          cursorGlow.classList.remove('clicked');
        }, animationDuration);
      });

      document.body.addEventListener('mouseenter', function () {
        document.body.classList.add('hide-cursor');
      });

      document.body.addEventListener('mouseleave', function () {
        document.body.classList.remove('hide-cursor');
      });
    });

    // Additional code to hide the actual cursor
    var style = document.createElement('style');
    // style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);
  }
};
</script>
