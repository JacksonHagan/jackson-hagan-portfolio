<template>
  <a :href="link"
     target="_blank"
     @mouseover="evtIn"
     @mouseleave="evtOut"
     class="projects-hover-outer-glow ring-1 ring-inset ring-white/10 relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-slate-200/20  after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-30 after:z-30 after:blur-[100px] overflow-hidden">

    <div class="glow-block flex flex-col gap-4 lg:items-center relative h-full bg-slate-800 p-4 pb-8 rounded-[inherit] z-20">
      <div style="mix-blend-mode: soft-light;"
           class="absolute w-full h-full z-10 top-0 left-0 animate-gradient__rotate rounded-[inherit]">
        <i></i>
      </div>

      <div
          class="-z-10 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none w-2/3 aspect-square"
          aria-hidden="true">
        <div class="absolute inset-0 translate-z-0 bg-slate-600/20 rounded-full blur-[80px]"></div>
      </div>

      <div class="overflow-hidden w-full relative">


        <div ref="domCanvas"
             class="overflow-hidden aspect-[5/3] w-full flex-none rounded-2xl object-cover lg:pb-[40%]"
        ></div>


<!--        <img style="z-index: 20; position: relative;"-->
<!--             class="aspect-[5/3] w-full flex-none rounded-2xl object-cover lg:h-auto"-->
<!--             :src="imagePath"-->
<!--             alt="">-->
      </div>

      <div class="w-full flex-auto px-3">
        <div>
          <h3 class="text-base gradient-hading3 aeonik tracking-[-.02em]">
            <slot name="sub-title"></slot>
          </h3>

          <div class="flex items-center space-x-3">
            <h2 class="text-3xl text-white aeonik tracking-[-.02em]">
              <slot name="title"></slot>
            </h2>
            <div>
              <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
              </svg>
            </div>
          </div>

          <p class="mt-3 text-base text-gray-400 leading-7">
            <slot name="description"></slot>
          </p>
        </div>

        <div class="my-6 w-full h-[1px] bg-white opacity-[.1]"></div>

        <div class="inline-flex flex-wrap gap-2">
          <slot name="pills"></slot>
        </div>
      </div>
    </div>
  </a>
</template>

<script>

import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  TextureLoader,
  RepeatWrapping,
  LinearFilter,
  ShaderMaterial,
  PlaneBufferGeometry,
  Mesh
} from "three";

import { TweenMax, Expo } from "gsap";

import { vertex, fragment } from "../../public/assets/js/shaders";

let disp = '/assets/images/disp.jpg';
let imagePath = '/assets/images/projects/diablotrade.png';
let hoverImagePath = '/assets/images/projects/diablotrade-hover.png';


export default {
  props: {
    imagePath: String,
    hoverImagePath: String,
    link: String,
  },
  data() {
    return {
      time: 0,
      paused: true,
      textures: [],
      fragmentValue: fragment,
      current: 0,
      isRunning: false,

      speedIn: 1,
      speedOut: 1,
    }
  },
  mounted() {
    const initialImage = this.imagePath;
    const hoverImage = this.hoverImagePath;
    const displacementImage = disp;

    this.setupCanvas(hoverImage ?? initialImage, initialImage, displacementImage);
  },
  methods:{
    setupCanvas: function (currImage, replacementImage, displacementImage) {
      const parent = this.$refs['domCanvas'] || console.warn("no parent");

      const dispImage =
          displacementImage || console.warn("displacement image missing");
      const image1 = currImage || console.warn("first image missing");
      const image2 = replacementImage || console.warn("second image missing");
      const intensity = 0.8;


      // var easing = opts.easing || Expo.easeOut;

      const scene = new Scene();
      const camera = new OrthographicCamera(
          parent.offsetWidth / -2,
          parent.offsetWidth / 2,
          parent.offsetHeight / 2,
          parent.offsetHeight / -2,
          1,
          1000
      );

      camera.position.z = 1;

      const renderer = new WebGLRenderer({
        antialias: false
        // alpha: true
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0xffffff, 0.0);
      renderer.setSize(parent.offsetWidth, parent.offsetHeight);
      parent.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
        const parent = this.$refs['domCanvas'] || console.warn("no parent");

        camera.aspect = (parent.offsetWidth / -2) / (parent.offsetWidth / 2);
        camera.updateProjectionMatrix();

        renderer.setSize(parent.offsetWidth, parent.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        renderer.render(scene, camera); // -> Also needed
      });

      const loader = new TextureLoader();
      loader.crossOrigin = "";
      const texture1 = loader.load(image1, (tex) => {
        tex.needsUpdate = true;
      });

      const texture2 = loader.load(image2, (tex) => {
        tex.needsUpdate = true;
      });



      const disp = loader.load(dispImage);
      disp.wrapS = disp.wrapT = RepeatWrapping;

      texture1.magFilter = texture2.magFilter = LinearFilter;
      texture1.minFilter = texture2.minFilter = LinearFilter;

      texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture2.anisotropy = renderer.capabilities.getMaxAnisotropy();

      this.mat = new ShaderMaterial({
        uniforms: {
          effectFactor: { type: "f", value: intensity },
          dispFactor: { type: "f", value: 1.0 },
          texture: { type: "t", value: texture1 },
          texture2: { type: "t", value: texture2 },
          disp: { type: "t", value: disp }
        },

        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0
      });

      const geometry = new PlaneBufferGeometry(
          parent.offsetWidth,
          parent.offsetHeight,
          1
      );
      const object = new Mesh(geometry, this.mat);
      scene.add(object);

      const animate = function() {
        requestAnimationFrame(animate);
        // console.log("anim?");
        renderer.render(scene, camera);
      };
      animate();
    },

    evtIn: function(){
      TweenMax.to(this.mat.uniforms.dispFactor, this.speedIn, {
        value: 0,
        ease: Expo.easeOut
      });
    },

    evtOut: function() {
      TweenMax.to(this.mat.uniforms.dispFactor, this.speedOut, {
        value: 1,
        ease: Expo.easeOut
      });
    },
  }
};
</script>

<style scoped>

</style>
