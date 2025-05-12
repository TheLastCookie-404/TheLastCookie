<template>
  <primitive :object="model" />
</template>

<script setup lang="ts">
  import { useGLTF, useAnimations } from "@tresjs/cientos";

  const props = withDefaults(
    defineProps<{
      src: string;
      castShadow?: boolean;
      animation?: string | "none";
    }>(),
    {
      castShadow: true,
      animation: "none",
    },
  );

  const { scene: model, animations } = await useGLTF(props.src);
  const { actions } = useAnimations(animations, model);

  model.traverse((child) => {
    if (child.isObject3D) child.castShadow = props.castShadow;
  });

  if (props.animation !== "none") {
    actions[props.animation].play();
  }

  // currentAction.value.play();
</script>
