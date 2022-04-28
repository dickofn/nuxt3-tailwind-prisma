<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const title = ref("Dicko's Nuxt x Tailwind");
const description = ref("Boilerplate for Nuxt 3 x Tailwind 3");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style>
html {
  @apply h-full text-matterhorn-800;
}
body {
  @apply h-full;
}
</style>
