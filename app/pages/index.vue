<template>
  <div class="fixed top-0 left-0 size-full">
    <TresCanvas shadows :tone-mapping-exposure="1" :shadow-map-type="shadowMapType">
      <OrbitControls />
      <TresPerspectiveCamera />

      <TresGroup>
        <TresDirectionalLight
          color="#ffffbb"
          :position="[3, 3, 3]"
          :intensity="2"
          cast-shadow
          :shadow-radius="2.5" />
        <TresAmbientLight :intensity="0.6" />

        <Model src="/models/turtle/source/TheLastCookie.gltf" :position="[0, -0.2, 0]" />

        <Model
          src="/models/cookie/CookieBite.glb"
          :position="[0, -0.2, 1.5]"
          :scale="0.25"
          :rotate-y="3" />

        <Model
          src="/models/pearto/scene.gltf"
          :rotation="[0, 0.7, 0]"
          :scale="0.1"
          :position="[0, -3, 0]" />

        <TresMesh :position="[0, -0.44, 0]" receive-shadow>
          <TresBoxGeometry :args="[20, 0.5, 20]" />
          <TresMeshToonMaterial color="#4F4F4F" />
        </TresMesh>
      </TresGroup>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
  const shadowMapType = 1;
</script>
