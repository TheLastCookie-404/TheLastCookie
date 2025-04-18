<template>
  <div class="h-[80vh]">
    <TresCanvas clear-color="#111" shadows>
      <OrbitControls />
      <TresPerspectiveCamera :position="[5, 7.5, 7.5]" />
      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight cast-shadow :position="[0, 2, 0]" :intensity="1" />
      <TresMesh :position="[-2, 2, 0]" :rotation="[0, Math.PI, 0]" cast-shadow>
        <TresConeGeometry :args="[1, 1.5, 3]" />
        <TresMeshToonMaterial color="#82DBC5" />
      </TresMesh>
      <TresMesh :position="[0, 0, 0]" cast-shadow>
        <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
        <TresMeshToonMaterial color="#4F4F4F" />
      </TresMesh>
      <TresMesh :position="[2, -2, 0]" cast-shadow>
        <TresSphereGeometry />
        <TresMeshToonMaterial color="#FBB03B" />
      </TresMesh>
      <TresMesh :position="[0, -3, 0]" :rotation="[-Math.PI / 2, 0, 0]" receive-shadow>
        <TresPlaneGeometry :args="[10, 10, 10, 10]" />
        <TresMeshStandardMaterial color="#f7f7f7" />
      </TresMesh>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
  import { OrbitControls } from "@tresjs/cientos";
  import { TresCanvas } from "@tresjs/core";
</script>
