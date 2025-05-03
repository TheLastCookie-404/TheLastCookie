<template>
  <div class="h-[80vh]">
    <TresCanvas preset="realistic" :tone-mapping-exposure="1">
      <TresPerspectiveCamera :position="[0, 2, 3]" :look-at="[0, 0, 0]" />
      <OrbitControls />
      <Suspense>
        <Turtle :position="[0, -0.2, 0]" />
      </Suspense>
      <TresMesh :position="[0, -0.44, 0]" receive-shadow>
        <TresBoxGeometry :args="[20, 0.5, 20]" />
        <TresMeshToonMaterial color="#4F4F4F" />
      </TresMesh>
      <TresDirectionalLight color="#ffffbb" :position="[3, 3, 3]" :intensity="2" cast-shadow />
      <TresAmbientLight :intensity="1" />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "model",
  });
</script>
