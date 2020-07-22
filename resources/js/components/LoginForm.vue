<template>
    <form @submit.prevent="login" class="landing-page__form-body mdc-card mdc-elevation--z3 col-span-12 place-self-center w-full max-w-sm flex flex-col mb-20 p-4 sm:p-8 border-b-4">

        <img src="img/ICON_KPBI.png" alt="" class="w-24 self-center my-8">

        <label data-mdc-auto-init="MDCTextField" class="input__container mdc-text-field mdc-text-field--outlined my-4">
            <input v-model="name" type="text" class="mdc-text-field__input" aria-labelledby="name" required value="">
            <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__notch">
                    <span class="mdc-floating-label" id="name">username</span>
                </span>
                <span class="mdc-notched-outline__trailing"></span>
            </span>
        </label>

        <label data-mdc-auto-init="MDCTextField" class="input__container mdc-text-field mdc-text-field--outlined my-4">
            <input v-model="password" type="password" class="mdc-text-field__input" aria-labelledby="password">
            <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__notch">
                    <span class="mdc-floating-label" id="password">Password</span>
                </span>
                <span class="mdc-notched-outline__trailing"></span>
            </span>
        </label>

        
        <div class="flex justify-between items-end w-full my-8">
            <a href="#" class="mdc-typography--caption underline mdc-theme--primary">Already have account ?</a>

            <button class="mdc-button mdc-button--raised" data-mdc-auto-init="MDCRipple">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">Login</span>
            </button>
        </div>

    </form>
</template>

<script>
export default {

    data() {
        return {
            token: document.querySelector('meta[name=csrf-token]').content,
            name: null,
            password: null,
        }
    },

    methods: {
        login() {
            const loginData = {
                _token: this.token,
                name: this.name,
                password: this.password
            }
            this.authenticate(loginData)
        },

        authenticate(loginData) {
            window.axios.post('/login', loginData)
                .then(resp => resp)
                .catch(err => err)
        }
    },
}
</script>