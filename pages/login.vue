<template>
  <div class="min-h-screen flex gap-6">
    <Head>
      <Title>Login to Twitter</Title>
    </Head>
    <div class="hidden md:block md:w-[50%] w-[60%] min-h-screen">
      <img src="/tw.jpg" class="w-full min-h-full" />
    </div>
    <!-- Container -->
    <div class="w-[90%] mx-auto md:w-[50%] lg:w-[40%] lg:mx-0 flex flex-col">
      <div class="logo h-[10vh] w-full py-8">
        <img src="/logo.png" alt="logo" class="w-[50px] h-[50px]" />
      </div>
      <div class="title italic pt-[100px] pb-10 flex flex-col gap-10">
        <p class="font-black text-[40px] tracking-wide">Login to Twitter.</p>
      </div>
      <!-- Form Container -->
      <div class="flex flex-col gap-4 md:pr-4">
        <form @submit.prevent="loginUser" class="flex flex-col gap-4">
          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label for="email">Email:</label>
            <input
              type="email"
              v-model="email"
              required
              class="p-2 rounded-[5px]"
            />
          </div>
          <!-- Password -->
          <div class="flex flex-col gap-1">
            <label for="password">Password:</label>
            <input
              type="password"
              v-model="password"
              required
              class="p-2 rounded-[5px]"
            />
          </div>
          <p v-if="error" class="text-primary text-[14px] font-black">
            Invalid email or password
          </p>
          <button
            class="
              py-3
              mt-4
              bg-primary
              text-white text-center
              rounded-[5px]
              w-full
            "
            id="btn"
            :disabled="Btndisabled"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "../services/auth";
import { useRouter } from "vue-router";
export default {
  setup() {
    const config = useRuntimeConfig();
    const email = ref();
    const password = ref();
    const error = ref(false);
    const router = useRouter();
    let Btndisabled = ref(false);
    const apiLink = config.API_BASE_URL;

    function loginUser() {
      Btndisabled = true;
      document.getElementById("btn").textContent = "Logging in...";
      auth(apiLink + "login", {
        email: email.value,
        password: password.value,
      })
        .then((response) => {
          // Login successful
          localStorage.setItem("TweeterToken", response.data.token);
          if (response.status === 201) {
            router.push("/");
          }
        })
        .catch((err) => {
          Btndisabled = false;
          document.getElementById("btn").textContent = "Loggin";
          let res = err.response;
          if (res.status === 400) {
            error.value = true;
            setTimeout(() => {
              error.value = false;
            }, 2000);
            password.value = "";
          }
        });
    }

    return {
      apiLink,
      email,
      password,
      loginUser,
      error,
      Btndisabled,
    };
  },
};
</script>

<style scoped>
input {
  background: rgba(28, 155, 240, 0.03);
  border: 1px solid rgba(28, 155, 240, 0.3);
  outline: none;
}
</style>