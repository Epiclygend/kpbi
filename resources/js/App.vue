<template>
    <main-layout>
        <router-view />
    </main-layout>
</template>

<script>
import MainLayout from 'js/layouts/MainLayout.vue';

export default {
    name: 'App',
    components: {
        MainLayout,
    },
};
</script>
