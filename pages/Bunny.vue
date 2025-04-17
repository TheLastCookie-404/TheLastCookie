<template>
  <div class="h-[80vh]">
    <TresCanvas v-bind="gl">
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

<script setup>
  import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";

  const gl = {
    clearColor: "#F78B3D",
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
    windowSize: false,
  };
</script>
