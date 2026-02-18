<template>
  <div>
    <div class="m-10 flex w-fit rounded-sm p-2">
      <div
        v-for="(week, index) in data.contributions"
        :class="['flex w-fit flex-col', index === 0 && 'justify-end']">
        <div v-for="day in week" :class="['m-px size-3 rounded-xs', levels[day.intensity]]"></div>
      </div>
    </div>
    <!-- <pre>
      {{ data }}
    </pre> -->
    <input v-model="year" type="text" placeholder="Type here" class="input m-10" />
    <button @click="() => refresh()" class="btn">Refresh</button>
    <!-- <pre>{{ graphqlQuery }}</pre> -->
  </div>
</template>

<script setup>
  const year = ref(2024);

  const url = computed(
    () => `https://gh-calendar.rschristian.dev/user/TheLastCookie-404?year=${year.value}`,
  );

  const { data } = await useFetch(url);

  const levels = {
    0: "bg-base-300",
    1: "bg-emerald-700",
    2: "bg-emerald-500",
    3: "bg-emerald-300",
    4: "bg-emerald-200",
  };
</script>
