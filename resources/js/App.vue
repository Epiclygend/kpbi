<template>
<v-app :style="$store.state.isContentLoading ? { 'cursor': 'wait' }:{}">

  <drawer-navigation v-model="drawer" />
  <navigation-bar @navigate="drawer = !drawer" :contentLoading="isContentLoading" />

  <div class="flash-alert__wrapper mx-sm-10 px-4 pt-4">
    <v-scale-transition group>
      <flash-message
        v-for="({message, color, type}, index) in flashes" :key="index"
        :type="type"
        :color="color"
        :message="message"
      />
    </v-scale-transition>
  </div>

  <v-main>
    <keep-alive>
      <router-view
        :isLoading="isContentLoading"
        @notice="flash" @noticeError="axiosErrorMessageHandler"
      />
    </keep-alive>
  </v-main>

</v-app>
</template>

<script>
import DrawerNavigation from "./components/DrawerNavigation";
import NavigationBar from "./components/NavigationBar";
import FlashMessage from "./components/FlashMessage";

export default {
  data() {
    return {
      drawer: true,
      flashes: [],
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    userName() {
      return this.$store.getters.userName
    },
    userEmail() {
      return this.$store.getters.userEmail
    },
    isContentLoading() {
      return this.$store.state.isContentLoading
    }
  },

  methods: {
    flash() {
      const flashes = [...arguments].map(({
        message,
        color = undefined,
        type = undefined
      }) => {
        return { message, color, type }
      })

      this.flashes.push(...flashes)
    },


    axiosErrorMessageHandler() {
      const messages = [];
      [...arguments].forEach(({response: {data}}) => {
        if ('errors' in data) {
          Object.entries(data.errors).forEach(([errType, errMsg]) =>
            errMsg.forEach(msg => messages.push(`<b>${errType}:</b> ${msg}`))
          )
        } else
          messages.push(data.message)
      })
      messages.forEach(msg => this.flash({message: msg, type: 'error', color: 'red'}))
    }
  },


  components: {
    DrawerNavigation, NavigationBar, FlashMessage
  }
}
</script>


<style lang="scss" scoped>
.flash-alert {
  &__wrapper {
    position: fixed;
    z-index: 999;
    right: 0; bottom: 0;
    width: 1000px; max-width: 100%;
    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;

      &-thumb {
        background-color: #b9b9b9;
        border-radius: 3px;
        &:hover { background-color: #ddd; }
      }
    }
  }
}
</style>
