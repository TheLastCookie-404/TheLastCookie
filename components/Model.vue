<template>
  <primitive :object="model" />
</template>

<script setup lang="ts">
  import { useGLTF } from "@tresjs/cientos";

  const props = defineProps<{
    src: string;
  }>();

  const { scene: model } = await useGLTF(props.src);

  model.traverse((child) => {
    if (child.isObject3D) child.castShadow = true;
  });
</script>
