import { defineStore } from "pinia";

interface loginPayload {
  username: string;
  password: string;
}

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: undefined,
      token: undefined,
    };
  },
  getters: {},
  actions: {
    async register(payload: loginPayload) {
      const req = {
        username: payload.username,
        password: payload.password,
      };

      const { data, error, refresh } = await useFetch("/api/user", {
        method: "POST",
        body: req,
      });

      if (error) {
        throw error.value;
      }

      watch(
        () => payload,
        () => refresh()
      );

      this.user = data;

      return data;
    },
  },
});
