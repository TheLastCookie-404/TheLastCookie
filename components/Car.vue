<template>
  <primitive :object="model" />
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useAnimations, useGLTF } from "@tresjs/cientos";

  const { scene: model, animations } = await useGLTF("/models/car/scene.gltf");
  const { actions } = useAnimations(animations, model);

  const currentAction = ref(actions["Car engine"]);

  model.traverse((child) => {
    if (child.isObject3D) child.castShadow = true;
  });

  currentAction.value.play();
</script>
