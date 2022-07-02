<template>
  <section class="flex">
    <Head>
      <Title>Home / Twitter</Title>
    </Head>
    <Sidebar />
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<style>
</style>