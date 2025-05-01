<template>
  <div class="h-[80vh]">
    <TresCanvas clear-color="#F78B3D">
      <TresPerspectiveCamera :position="[2, 2, 9]" :look-at="[0, 2, 0]" />
      <OrbitControls />
      <Suspense>
        <UgglyBunny />
      </Suspense>
      <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="1" />
      <TresAmbientLight :intensity="2" />
    </TresCanvas>
  </div>
</template>

<script setup></script>
