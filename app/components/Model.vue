<template>
  <primitive v-if="model" :object="model?.scene" />
  <!-- <GLTFModel :path="src" :cast-shadow="castShadow" /> Also works -->
</template>

<script setup lang="ts">
  import { useGLTF, useAnimations } from "@tresjs/cientos";

  const props = withDefaults(
    defineProps<{
      src: string;
      castShadow?: boolean;
      receiveShadow?: boolean;
      animation?: string | "none";
    }>(),
    {
      castShadow: true,
      animation: "none",
    },
  );

  const { state: model } = useGLTF(props.src, {
    draco: true,
    traverse(child) {
      if (child.isObject3D) {
        child.castShadow = props.castShadow;
        child.receiveShadow = props.receiveShadow;
      }
    },
  });
  // const animations = computed(() => model.value?.animations || []);
  // const rig = computed(() => nodes.value.Rig);
  // const { actions } = useAnimations(animations, rig);

  // model.traverse((child: { isObject3D: any; castShadow: boolean }) => {
  //   if (child.isObject3D) child.castShadow = props.castShadow;
  // });

  // if (props.animation !== "none") {
  //   actions[props.animation].play();
  // }

  // currentAction.value.play();
</script>
