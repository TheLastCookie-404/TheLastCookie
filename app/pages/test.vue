<script setup lang="ts">
  // Reference to our donut mesh for animation
  const donutRef = ref();

  // Animation loop
  const { onBeforeRender } = useLoop();

  onBeforeRender(({ elapsed }) => {
    if (donutRef.value) {
      // Rotate the donut on both X and Y axes
      donutRef.value.rotation.x = elapsed * 0.5;
      donutRef.value.rotation.y = elapsed * 0.3;
    }
  });
</script>

<template>
  <TresCanvasContext>
    <TresCanvas>
      <!-- Camera Setup -->
      <TresPerspectiveCamera :position="[7, 7, 7]" :look-at="[0, 0, 0]" />

      <!-- The Donut -->
      <TresMesh :position="[0, 2, 0]">
        <TresTorusGeometry :args="[1, 0.4, 16, 32]" />
        <TresMeshBasicMaterial color="#ff6b35" />
      </TresMesh>

      <!-- Visual Helpers -->
      <TresAxesHelper />
      <TresGridHelper />
    </TresCanvas>
  </TresCanvasContext>
</template>
