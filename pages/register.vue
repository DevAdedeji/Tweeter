<template>
  <div class="min-h-screen flex gap-6">
    <Head>
      <Title>Register on Twitter</Title>
    </Head>
    <div class="hidden md:block md:w-[50%] w-[60%] min-h-screen">
      <img src="/tw.jpg" class="w-full min-h-full" />
    </div>
    <!-- Container -->
    <div class="w-[90%] mx-auto md:w-[50%] lg:w-[40%] lg:mx-0 flex flex-col">
      <div class="logo h-[10vh] w-full justify-self-start">
        <img src="/logo.png" alt="logo" class="w-[50px] h-[50px]" />
      </div>
      <div class="title italic pt-[100px] pb-10 flex flex-col gap-10">
        <p
          class="
            font-black
            text-[25px]
            md:text-[30px]
            lg:text-[40px]
            tracking-wide
          "
        >
          Join Twitter Today.
        </p>
      </div>
      <!-- Form Container -->
      <div class="flex flex-col gap-4">
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
        <button
          class="py-3 mt-4 bg-primary text-white text-center rounded-[5px]"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const config = useRuntimeConfig();
    const email = ref();
    const password = ref();
    let apiLink = config.API_BASE_URL;
    return {
      apiLink,
      email,
      password,
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