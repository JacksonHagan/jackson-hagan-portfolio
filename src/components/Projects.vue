<template>
  <div id="recent-projects" class="relative isolate scroll-my-20">
    <div class="flex justify-center">
      <h2 class="heading text-4xl md:text-5xl aeonik tracking-[-.01em]">
        Recent Projects
      </h2>
    </div>

    <container class="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative group"
               data-spotlight>

      <div
          class="pointer-events-none -z-10 opacity-40 min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full absolute top-0 gradient-experience__1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2"></div>

      <project-card
          link="https://wikimaps.gg"
          image-path="/src/assets/images/projects/wikimaps.png"
          hover-image-path="/src/assets/images/projects/wikimaps-hover.png">
        <template #sub-title>
          Full Stack Developer 2025
        </template>
        <template #title>
         Wikimaps
        </template>
        <template #description>
          Wikimaps.gg is a collaborative mapping platform for video game worlds. It allows players to explore interactive maps, uncover hidden locations, and share their discoveries with the community.
        </template>
        <template #pills>
          <pill>
            <icon-laravel/>
            Laravel
          </pill>
          <pill>
            <icon-inertia/>
            Inertia.js
          </pill>
          <pill>
            <icon-vue/>
            Vue.js
          </pill>
          <pill>
            <icon-tailwind/>
            Tailwind
          </pill>
        </template>
      </project-card>

        <project-card
            link="https://www.diablotrade.gg"
          image-path="/src/assets/images/projects/diablotrade.png"
          hover-image-path="/src/assets/images/projects/diablotrade-hover.png">
        <template #sub-title>
          Full Stack Developer 2023
        </template>
        <template #title>
          Diablo Trade
        </template>
        <template #description>
          DiabloTrade.gg is a dedicated trading platform for Diablo IV that helps players buy and sell equipment using powerful, stat-based filters. Sellers can upload in-game screenshots to generate searchable listings, with editable item details and image verification for buyers.
        </template>
        <template #pills>
          <pill>
            <icon-laravel/>
            Laravel
          </pill>
          <pill>
            <icon-alpine/>
            Alpine.js
          </pill>
          <pill>
            <icon-livewire/>
            Livewire
          </pill>
          <pill>
            <icon-tailwind/>
            Tailwind
          </pill>
          <pill>
            Tesseract OCR
          </pill>
        </template>
      </project-card>

      <project-card
          link="https://www.agedcareguide.com.au/"
          image-path="src/assets/images/projects/acg.png"
      >
        <template #sub-title>
          Full Stack Developer
        </template>
        <template #title>
          Aged Care guide
        </template>
        <template #description>
          AgedCareGuide.com.au is a comprehensive Australian aged care directory that helps families find and compare aged care homes, home care, retirement living, and support services.
        </template>
        <template #pills>
          <pill>
            <icon-laravel/>
            Laravel
          </pill>
          <pill>
            <icon-livewire/>
            Livewire
          </pill>
          <pill>
            <icon-tailwind/>
            Tailwind
          </pill>
        </template>
      </project-card>

      <project-card
          link="https://www.disabilitysupportguide.com.au/"
          image-path="src/assets/images/projects/dsg.png">
        <template #sub-title>
          Full Stack Developer
        </template>
        <template #title>
          Disability Support Guide
        </template>
        <template #description>
          DisabilitySupportGuide.com.au is an Australian directory and resource hub that helps people with disability, their families, and carers find support services. It features searchable provider listings, service categories, and expert guides to make navigating the NDIS and accessing care simple and reliable.
        </template>
        <template #pills>
          <pill>
            <icon-laravel/>
            Laravel
          </pill>
          <pill>
            <icon-vue/>
            Vue.js
          </pill>
          <pill>
            <icon-tailwind/>
            Tailwind
          </pill>
        </template>
      </project-card>

<!--      <project-card image-path="src/assets/images/projects/moderninvestor.png">-->
<!--        <template #sub-title>-->
<!--          Full Stack Developer 2020-->
<!--        </template>-->
<!--        <template #title>-->
<!--          Modern Investor-->
<!--        </template>-->
<!--        <template #description>-->
<!--          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in-->
<!--          accusamus quisquam.-->
<!--        </template>-->
<!--        <template #pills>-->
<!--          <pill>-->
<!--            <icon-laravel/>-->
<!--            Laravel-->
<!--          </pill>-->
<!--          <pill>-->
<!--            <icon-vue/>-->
<!--            Vue.js-->
<!--          </pill>-->
<!--          <pill>-->
<!--            <icon-tailwind/>-->
<!--            Tailwind-->
<!--          </pill>-->
<!--          <pill>-->
<!--            <icon-chartjs/>-->
<!--            Chart.js-->
<!--          </pill>-->
<!--        </template>-->
<!--      </project-card>-->


      <project-card link="https://www.readysteadygokids.com.au/" image-path="src/assets/images/projects/readysteadygokids.png"
                    hover-image-path="/src/assets/images/projects/readysteadygokids-hover.png">
        <template #sub-title>
          Front End Developer 2021
        </template>
        <template #title>
          Ready Steady Go Kids
        </template>
        <template #description>
          ReadySteadyGoKids.com.au is Australia’s multi-sport program for young children, offering fun, skill-building classes that develop coordination, confidence, and teamwork. The site supports class discovery, enrolments, and trial bookings across locations nationwide.
        </template>
        <template #pills>
          <pill>
            <icon-tailwind/>
            Tailwind
          </pill>
        </template>
      </project-card>




      <project-card link="https://www.toribashtextures.com" image-path="src/assets/images/projects/toribashtextures.png">
        <template #sub-title>
          Full Stack Developer
        </template>
        <template #title>
          Toribash Textures
        </template>
        <template #description>
          ToribashTextures.com is a showcase platform for character skins created by the Toribash community, allowing users to upload, share, and view custom textures on 3D models. The platform hosts over 10,000 user uploads.
        </template>
        <template #pills>
          <pill>
            <icon-threejs/>
            Three.js
          </pill>
          <pill>
            <icon-bootstrap/>
            Bootstrap
          </pill>
          <pill>
            <icon-jquery/>
            jQuery
          </pill>
          <pill>
            <icon-php/>
            PHP
          </pill>
        </template>
      </project-card>
    </container>
  </div>
</template>

<script>
import IconTailwind from "@/components/icons/IconTailwind.vue";
import Pill from "@/components/Pill.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import IconAlpine from "@/components/icons/IconAlpine.vue";
import IconLivewire from "@/components/icons/IconLivewire.vue";
import IconLaravel from "@/components/icons/IconLaravel.vue";
import IconChartjs from "@/components/icons/IconChartjs.vue";
import IconVue from "@/components/icons/IconVue.vue";
import Container from "@/components/Container.vue";
import AnimatedComponent from "@/components/AnimatedComponent.vue";
import IconThreejs from "@/components/icons/IconThreejs.vue";
import IconPhp from "@/components/icons/IconPhp.vue";
import IconBootstrap from "@/components/icons/IconBootstrap.vue";
import IconJquery from "@/components/icons/IconJquery.vue";
import IconInertia from "@/components/icons/IconInertia.vue";

export default {
  components: {
    IconInertia,
    IconJquery,
    IconBootstrap,
    IconPhp,
    IconThreejs,
    AnimatedComponent,
    Container,
    IconChartjs,
    IconTailwind,
    IconLivewire,
    IconAlpine,
    IconVue,
    IconLaravel,
    Pill,
    ProjectCard,
  },
  mounted() {
    // Init Spotlight
    const spotlights = document.querySelectorAll('[data-spotlight]');
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }
};


class Spotlight {
  constructor(containerElement) {
    this.container = containerElement;
    this.cards = Array.from(this.container.children);
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.containerSize = {
      w: 0,
      h: 0,
    };
    this.initContainer = this.initContainer.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.init();
  }

  initContainer() {
    this.containerSize.w = this.container.offsetWidth;
    this.containerSize.h = this.container.offsetHeight;
  }

  onMouseMove(event) {
    const {clientX, clientY} = event;
    const rect = this.container.getBoundingClientRect();
    const {w, h} = this.containerSize;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;
    if (inside) {
      this.mouse.x = x;
      this.mouse.y = y;
      this.cards.forEach((card) => {
        const cardX = -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
        const cardY = -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
        card.style.setProperty('--mouse-x', `${cardX}px`);
        card.style.setProperty('--mouse-y', `${cardY}px`);
      });
    }
  }

  init() {
    this.initContainer();
    window.addEventListener('resize', this.initContainer);
    window.addEventListener('mousemove', this.onMouseMove);
  }
}
</script>
