<template>
  <div>
    <div class="m-10 flex w-fit rounded-sm p-2">
      <div
        v-for="(week, index) in data.data.user.contributionsCollection.contributionCalendar.weeks"
        :class="['flex w-fit flex-col', index === 0 && 'justify-end']">
        <div
          v-for="day in week.contributionDays"
          :class="['m-px size-3 rounded-xs', levels[getCellColor(day.contributionCount)]]"></div>
      </div>
    </div>
    <input v-model="year" type="text" placeholder="Type here" class="input m-10" />
    <!-- <button @click="() => refresh()" class="btn">Refresh</button> -->
    <!-- <pre>{{ graphqlQuery }}</pre> -->
  </div>
</template>

<script setup>
  // const { data } = useFetch("https://github-contributions-api.jogruber.de/v4/TheLastCookie-404");
  // const { data } = useFetch("https://gh-calendar.rschristian.dev/user/TheLastCookie-404");

  const year = ref(2023);

  const graphqlQuery = computed(() => ({
    query: `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      username: "TheLastCookie-404",
      // ...(year.value !== "" && {
      //   from: `${year.value}-01-01T00:00:00Z`,
      //   to: `${year.value}-12-31T23:59:59Z`,
      // }),
      from: `${year.value}-01-01T00:00:00Z`,
      to: `${year.value}-12-31T23:59:59Z`,
    },
  }));

  const { data, refresh } = await useFetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: "bearer ",
      "Content-Type": "application/json",
    },
    body: graphqlQuery,
    watch: [graphqlQuery],
  });

  // const { data, refresh } = await useFetch("https://api.github.com/graphql", {
  //   method: "POST",
  //   headers: {
  //     Authorization: "bearer ",
  //     "Content-Type": "application/json",
  //   },
  //   body: {
  //     query: `query($userName:String!, $from: DateTime!, $to: DateTime!) {
  //       user(login: $userName) {
  //         contributionsCollection(from: $from, to: $to) {
  //           contributionCalendar {
  //             totalContributions
  //             weeks {
  //               contributionDays {
  //                 contributionCount
  //                 date
  //                 color
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }`,
  //     variables: {
  //       userName: "TheLastCookie-404",
  //       from: `${year.value}-01-01T00:00:00Z`,
  //       to: `${year.value}-12-31T23:59:59Z`,
  //     },
  //   },
  //   watch: [year],
  // });

  const levels = {
    0: "bg-base-300",
    1: "bg-emerald-700",
    2: "bg-emerald-500",
    3: "bg-emerald-300",
    4: "bg-emerald-200",
  };

  function getCellColor(contributionCount) {
    if (contributionCount === 0) return 0;
    if (contributionCount < 5) return 1;
    if (contributionCount < 10) return 2;
    if (contributionCount < 20) return 3;
    return 4;
  }
</script>
