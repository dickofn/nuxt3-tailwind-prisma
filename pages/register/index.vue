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
            Register new account
          </h2>
          <p class="mt-2 text-center text-sm">
            or
            <NuxtLink class="link" to="/">login here</NuxtLink>
          </p>
        </div>
        <RegisterForm @submit="register" :disabled="isLoading" :error="error" />
      </div>
    </Card>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user";

definePageMeta({
  layout: "clean",
});

const userStore = useUserStore();

const isLoading = ref(false);
const error = ref({});

async function register({ username, password }) {
  isLoading.value = true;
  try {
    await userStore.register({ username, password });
  } catch (e) {
    error.value = e.response?._data;
  } finally {
    isLoading.value = false;
  }
}
</script>
