<script setup lang="ts">
  import { OrbitControls } from "@tresjs/cientos";
</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :position="[0, 0, 5]" />
    <OrbitControls />
    <TresMesh>
      <TresBoxGeometry />
      <TresMeshBasicMaterial :color="0x00ff00" />
    </TresMesh>
  </TresCanvas>
</template>
