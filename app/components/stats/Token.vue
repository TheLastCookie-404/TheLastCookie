<template>
  <div class="m-10 flex w-fit rounded-sm p-2">
    <template v-if="!error && data !== undefined">
      <div
        v-for="(week, index) in (data as GHResponse).data.user.contributionsCollection
          .contributionCalendar.weeks"
        :class="['flex w-fit flex-col', index === 0 && 'justify-end']">
        <div
          v-for="day in week.contributionDays"
          :class="['m-px size-3 rounded-xs', levels[getCellColor(day.contributionCount)]]"></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
  interface GHResponse {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            weeks: {
              contributionDays: {
                contributionCount: number;
                date: string;
                color: string;
              }[];
            }[];
          };
        };
      };
    };
  }

  const { githubSecret } = useRuntimeConfig();

  const year = 2025;

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
      from: `${year}-01-01T00:00:00Z`,
      to: `${year}-12-31T23:59:59Z`,
    },
  }));

  const { data, error } = await useFetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${githubSecret}`,
      "Content-Type": "application/json",
    },
    body: graphqlQuery,
    // watch: [graphqlQuery],
  });

  const levels = {
    0: "bg-base-300",
    1: "bg-emerald-700",
    2: "bg-emerald-500",
    3: "bg-emerald-300",
    4: "bg-emerald-200",
  };

  function getCellColor(contributionCount: number) {
    if (contributionCount === 0) return 0;
    if (contributionCount < 3) return 1;
    if (contributionCount < 5) return 2;
    if (contributionCount < 10) return 3;
    return 4;
  }
</script>
