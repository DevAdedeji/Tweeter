<template>
  <div>
    <!-- Head containing user and post details -->
    <div
      class="
        w-full
        flex
        gap-4
        border-t border-b border-[rgba(28,
        155,
        240,
        0.3)]
        p-4
      "
    >
      <div>
        <img
          :src="tweet.user.profile_image"
          alt="user-icon"
          class="w-[50px] h-[40px] rounded-[50%]"
        />
      </div>
      <div class="w-full flex flex-col gap-1">
        <div class="flex items-center gap-1">
          <p class="font-bold">{{ tweet.user.username }}</p>
          <!-- <p class="font-normal">
            .{{ Math.floor(tweet.createdAt.$date / 86400) }}
          </p> -->
        </div>
        <!-- Post info -->
        <div class="opacity-[0.9]">
          <p class="text-[14px]">
            {{ tweet.caption }}
          </p>
          <div v-if="tweet.post_urls.length > 0" class="w-full">
            <div
              v-for="img in tweet.post_urls"
              :key="img"
              class="grid grid-cols-2 py-2 w-full"
              :class="
                tweet.post_urls.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
              "
            >
              <img :src="img" alt="post_image" class="w-full rounded-[10px]" />
            </div>
          </div>
        </div>
        <div
          class="
            w-[90%]
            opacity-[0.9]
            text-[14px]
            pt-2
            flex
            items-center
            justify-between
          "
        >
          <div class="flex items-center gap-2">
            <img src="/comment.svg" alt="comment-icon" />
            <p>{{ tweet.comments }}</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/like.svg" alt="comment-icon" />
            <p>{{ tweet.likes }}</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/retweet.svg" alt="comment-icon" />
            <p>{{ tweet.retweets }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tweet"],
  setup() {
    const profileImage = localStorage.getItem("TweeterProfileImage");
    return {
      profileImage,
    };
  },
};
</script>

<style>
</style>