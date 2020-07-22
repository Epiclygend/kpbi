<template>
<aside id="navDrawer" class="mdc-drawer mdc-drawer--dismissible fixed mdc-drawer--open" data-mdc-auto-init="MDCDrawer">
    <div class="mdc-drawer__header flex flex-col">
        <router-link :to="{ name: 'Home' }" class="mt-2 mb-2 self-center">
            <img src="img/ICON_KPBI.png" alt="" class="w-20">
        </router-link>
        <h3 class="mdc-drawer__title">S1 PBIO UPT</h3>
        <a href="mailto:email@material.io" class="mdc-drawer__subtitle no-underline hover:underline">email@material.io</a>
    </div>
    <div class="mdc-drawer__content">
        <nav class="mdc-list" data-mdc-auto-init="MDCList" role="listbox">
            <hr class="mdc-list-divider">

            <a href="/my-profile" class="mdc-list-item" tabindex="">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">person</i>
                <span class="mdc-list-item__text">My Profile</span>
            </a>
            
            <a href="/my-account" class="mdc-list-item" tabindex="">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">settings</i>
                <span class="mdc-list-item__text">Account settings</span>
            </a>
            
            <!-- <a href="#" class="mdc-list-item" tabindex="">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">exit_to_app</i>
                <span class="mdc-list-item__text">Logout</span>
            </a> -->

            <a href="/login" class="mdc-list-item" tabindex="">
            <!-- <router-link :to="{ name: 'Login' }" class="mdc-list-item" :class="{ 'mdc-list-item--selected': isRoute('Login') }" :tabindex="{ '0': isRoute('Login') }"> -->
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">login</i>
                <span class="mdc-list-item__text">Login</span>
            <!-- </router-link> -->
            </a>

            <a href="/register" class="mdc-list-item" tabindex="">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">person_add</i>
                <span class="mdc-list-item__text">Register</span>
            </a>
        
            <hr class="mdc-list-divider">
            <h6 class="mdc-list-group__subheader">KPBI</h6>
            
            <router-link :to="{ name: 'Member' }" class="mdc-list-item" :class="{ 'mdc-list-item--selected': isRoute('Member') }" :tabindex="{ '0': isRoute('Member') }">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">people</i>
                <span class="mdc-list-item__text">KPBI Member</span>
            </router-link>
        
        </nav>
    </div>
</aside>
</template>

<script>
export default {
    name: 'DrawerNav',

    data() {
        return {
        }
    },
        
    computed: {
    },

    methods: {
        isRoute(routeName) {
            return this.$route.name === routeName
        }
    },
}
</script>