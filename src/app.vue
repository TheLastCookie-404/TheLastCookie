<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome v-if="false"/>
    <div class="fixed top-0 left-0 z-0 w-full h-full bg-cover bg-colors">
      <div class="h-full backdrop-blur-[200pt]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
