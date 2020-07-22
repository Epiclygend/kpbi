<template>
	<div id="app">
        <DrawerNav></DrawerNav>
        <!-- <ProgressBar></ProgressBar> -->
        <main class="landing-page-wrapper mdc-drawer-app-content p-4 xl:p-12 pb-2 h-full flex flex-col items-center box-border">

            <router-view />        

        </main>
	</div>
</template>
<script>
import * as MDC from "material-components-web"
import DrawerNav from "./components/DrawerNav"
// import Auth from "./middlware/auth"
// import ProgressBar from "./components/ProgressBar"

export default {
    mounted() {
        this.$nextTick(function () {
            window.MDComponents = MDC.autoInit()
        })
    },

    components: {
        DrawerNav,
        // ProgressBar
    }
}
</script>
