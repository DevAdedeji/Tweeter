<template>
  <section class="flex">
    <Head>
      <Title>Home / Twitter</Title>
    </Head>
    <main
      class="
        w-full
        md:w-[90%]
        lg:w-[80%]
        ml-auto
        min-h-screen
        flex flex-col
        gap-6
      "
      :class="loading ? 'justify-center items-center' : ''"
    >
      <loader v-if="loading" />
      <!-- Tweets -->
      <div
        class="
          mt-14
          flex flex-col
          sm:w-full
          lg:w-[50%]
          md:border-r
          sm:border-[rgba(28,
          155,
          240,
          0.3)]
        "
        v-if="!loading"
      >
        <header
          class="
            w-full
            flex
            items-center
            px-4
            h-[8vh]
            fixed
            top-0
            bottom-4
            md:border-r
            sm:border-[rgba(28,
            155,
            240,
            0.3)]
          "
        >
          <h1 class="font-black text-[20px]">Home</h1>
        </header>
        <div class="w-full" v-for="(tweet, index) in tweets" :key="index">
          <Tweet :tweet="tweet" />
        </div>
      </div>
    </main>
    <Sidebar />
  </section>
</template>

<script setup>
import get from "../services/get";
definePageMeta({
  middleware: "auth",
});
const config = useRuntimeConfig();
const apiLink = config.API_BASE_URL;
const tweets = ref(null);
const loading = ref(true);
onBeforeMount(() => {
  get(apiLink + "feed")
    .then((res) => {
      if (res.status === 200) {
        tweets.value = res.data;
        console.log(res.data);
        loading.value = false;
      }
    })
    .catch((err) => console.log(err));
});
</script>
<style>
header {
  background: rgba(255, 255, 255, 0.9);
}
</style>