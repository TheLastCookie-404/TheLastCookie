<template>
  <div class="h-[80vh]">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[2, 2, 2]" :look-at="[0, 0, 0]" />
      <OrbitControls />
      <!-- <KeyboardControls /> -->
      <Suspense>
        <Model :scale="0.005" cast-shadow />
      </Suspense>
      <TresMesh :position="[0, -0.44, 0]" cast-shadow>
        <TresBoxGeometry :args="[4, 0.5, 4]" />
        <TresMeshToonMaterial color="#4F4F4F" />
      </TresMesh>
      <TresDirectionalLight color="#ffffbb" :position="[3, 3, 3]" :intensity="1" cast-shadow />
      <TresAmbientLight :intensity="1" cast-shadow />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
  import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";

  const gl = {
    clearColor: "#25252f",
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
    windowSize: false,
  };
</script>
