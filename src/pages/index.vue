<template>
  <div>
    <Header />
    <div v-show="btnState" class="bg-red-600">Hello</div>
    <button class="btn" @click="btnState = !btnState">Button</button>
  </div>
</template>

<script lang="ts" setup>
  import Header from '~/components/Header.vue';

  import { ref } from 'vue';
  const btnState = ref<boolean>(false);
  // 51, 61A, 52, 81A, 81B, 
</script>

