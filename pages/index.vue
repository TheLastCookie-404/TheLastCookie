<template>
  <div class="h-[80vh]">
    <TresCanvas clear-color="#82DBC5">
      <TresPerspectiveCamera :position="[9, 9, 9]" />
      <OrbitControls />
      <TresMesh :position="[-2, 2, 0]" :rotation="[0, Math.PI, 0]">
        <TresConeGeometry :args="[1, 1.5, 3]" />
        <TresMeshToonMaterial color="#82DBC5" />
      </TresMesh>
      <TresMesh :position="[0, 0, 0]" cast-shadow>
        <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
        <TresMeshToonMaterial color="#4F4F4F" />
      </TresMesh>
      <TresMesh :position="[2, -2, 0]">
        <TresSphereGeometry />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>
      <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
  // import { TresCanvas } from "@tresjs/core";
  // import { OrbitControls } from "@tresjs/cientos";
</script>
