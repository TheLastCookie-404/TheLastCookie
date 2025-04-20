<template>
  <primitive :object="model" />
</template>

<script setup lang="ts">
  import { useGLTF } from "@tresjs/cientos";

  const { scene: model } = await useGLTF("/models/turtle/source/turtle-output.gltf");

  onBeforeMount(() => {
    model.traverse((child) => {
      if (child.isObject3D) child.castShadow = true;
    });
  });
</script>
