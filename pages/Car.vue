<template>
  <div class="h-[80vh]">
    <TresCanvas preset="realistic" :tone-mapping-exposure="1">
      <TresPerspectiveCamera :position="[2, 2, 2]" :look-at="[0, 0, 0]" />
      <OrbitControls />
      <Suspense>
        <Model src="/models/car/scene.gltf" animation="Car engine" :scale="0.005" />
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

<script setup lang="ts"></script>
