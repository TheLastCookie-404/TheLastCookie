<template>
  <div class="h-[80vh]">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[2, 2, 2]" :look-at="[0, 0, 0]" />
      <OrbitControls />
      <Suspense>
        <!-- <Car :scale="0.005" /> -->
        <Turtle :position="[0, -0.2, 0]" />
      </Suspense>
      <!-- <TresMesh :position="[0, 3, 0]" :rotation="[0, Math.PI, 0]">
        <TresConeGeometry :args="[1, 1.5, 3]" />
        <TresMeshToonMaterial color="#82DBC5" />
      </TresMesh> -->
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
  const gl = {
    clearColor: "#25252f",
    shadows: true,
    alpha: false,
    windowSize: false,
  };
</script>
