<template>
  <v-app>
    <drawer-navigation v-model="isDrawerOpen" />

    <navigation-bar @drawer:toggling="isDrawerOpen = !isDrawerOpen" />

    <v-main>
      <v-container fluid>
        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import DrawerNavigation from 'components/DrawerNavigation.vue';
import NavigationBar from 'components/NavigationBar.vue';

export default defineComponent({
  name: 'MainLayout',

  data: () => ({
    isDrawerOpen: true,
  }),

  components: {
    DrawerNavigation,
    NavigationBar,
  },
});
</script>
