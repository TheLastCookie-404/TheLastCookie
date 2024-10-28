<template>
  <div>
    <div v-show="btnState" class="bg-red-600">Hello</div>
    <button @click="btnState = !btnState" class="btn">Button</button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const btnState = ref<boolean>(false);
  // 51, 61A, 52, 81A, 81B, 
</script>

