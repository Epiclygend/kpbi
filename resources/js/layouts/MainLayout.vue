<template>
    <v-app>
        <drawer-navigation v-model="isDrawerOpen" />

        <navigation-bar @drawer:toggling="isDrawerOpen = !isDrawerOpen" />

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script>
import DrawerNavigation from 'components/DrawerNavigation.vue';
import NavigationBar from 'components/NavigationBar.vue';

export default {
    name: 'MainLayout',

    data: () => ({
        isDrawerOpen: true,
    }),

    components: {
        DrawerNavigation,
        NavigationBar,
    },
};
</script>
