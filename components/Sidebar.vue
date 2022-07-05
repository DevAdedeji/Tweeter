<template>
  <section
    class="
      fixed
      md:top-0 md:left-0
      bottom-0
      w-full
      md:w-[10%]
      py-2
      px-8
      md:px-4 md:py-4
      lg:px-8
      bg-white
      md:max-h-full
      border-t-2
      md:border-r-2 md:border-t-0
      border-[#e4e4e4]
    "
  >
    <div class="flex w-full md:flex-col gap-4">
      <div class="logo hidden md:block">
        <img src="/logo.png" alt="logo" class="w-[40px] h-[40px]" />
      </div>
      <!-- Links container -->
      <div
        class="
          w-full
          links
          flex
          items-center
          justify-between
          md:justify-start md:items-start md:flex-col
          gap-4
          text-[18px]
        "
      >
        <!-- Home -->
        <a
          href="/"
          class="
            flex
            items-center
            gap-2
            px-2
            py-4
            rounded-[5px]
            hover:bg-[#e4e4e4]
          "
          :class="route.path === '/' ? 'active' : ''"
        >
          <div>
            <img src="/sidebar/home.svg" alt="home-icon" />
          </div>
          <p class="hidden lg:block">Home</p>
        </a>
        <!-- Bookmarks -->
        <a
          href="/bookmarks"
          class="
            flex
            items-center
            gap-2
            px-2
            py-4
            rounded-[5px]
            hover:bg-[#e4e4e4]
          "
          :class="route.path === '/bookmarks' ? 'active' : ''"
        >
          <div>
            <img src="/sidebar/bookmark.svg" alt="bookmark-icon" />
          </div>
          <p class="hidden lg:block">Bookmarks</p>
        </a>
        <!-- Profile -->
        <a
          href="/profile"
          class="
            flex
            items-center
            gap-2
            px-2
            py-4
            rounded-[5px]
            hover:bg-[#e4e4e4]
          "
          :class="route.path === '/profile' ? 'active' : ''"
        >
          <div>
            <img src="/sidebar/profile.svg" alt="profile-icon" />
          </div>
          <p class="hidden lg:block">Profile</p>
        </a>
        <!-- Tweet -->
        <a
          href="/tweet"
          class="
            hidden
            lg:block
            text-center
            bg-primary
            px-2
            py-4
            rounded-[30px]
            text-white
            font-bold
          "
        >
          Tweet
        </a>
        <!-- Mobile Tweet -->
        <div
          class="
            lg:hidden
            flex
            items-center
            gap-2
            px-2
            py-4
            rounded-[5px]
            hover:bg-[#e4e4e4]
          "
          :class="route.path === '/profile' ? 'active' : ''"
        >
          <img src="/sidebar/tweet.svg" alt="tweet-icon" />
        </div>
      </div>
      <div class="hidden profile lg:flex pb-4 pt-10 items-center gap-2">
        <div class="">
          <img
            :src="profileImage"
            alt="profile-image"
            class="w-[50px] h-[50px] rounded-[50%]"
          />
        </div>
        <p>
          @{{ username.slice(0, 10) }}{{ username.length > 10 ? "..." : "" }}
        </p>
      </div>
      <div
        class="md:pt-10 flex items-center gap-2 cursor-pointer"
        @click="logout"
      >
        <img src="/sidebar/logout.svg" alt="logout-icon" />
        <button class="hidden lg:block">LogOut</button>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const profileImage = localStorage.getItem("TweeterProfileImage");
    const username = localStorage.getItem("TweeterUsername");
    function logout() {
      localStorage.removeItem("TweeterProfileImage");
      localStorage.removeItem("TweeterUsername");
      localStorage.removeItem("TweeterToken");
      router.push("/login");
    }
    return { route, profileImage, username, logout };
  },
};
</script>

<style scoped>
.active {
  background: #e4e4e4;
  font-weight: 900;
}
</style>