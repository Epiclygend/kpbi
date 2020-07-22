<template>
<div class="h-full w-full grid grid-cols-12">
    <Login-Form></Login-Form>
</div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import { autoInit } from 'material-components-web';

export default {
    name: 'Login',

    components: {
        'Login-Form': LoginForm,
    },

    mounted() {
        window.MDComponents = autoInit()
    }
}
</script>