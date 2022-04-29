<template>
  <div class="flex min-h-screen items-center justify-center p-2">
    <Card class="w-[512px]">
      <div class="mx-auto w-full max-w-md">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://dickofinus.vercel.app/assets/images/logo/logo--dark.png"
            alt="Logo"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm">
            or
            <NuxtLink class="link" to="register">register here</NuxtLink>
          </p>
        </div>
        <LoginForm @submit="login" />
      </div>
    </Card>
  </div>
</template>
s

<script setup>
definePageMeta({
  layout: "clean",
});

function login({ username, password }) {
  return { username, password };
}
</script>
