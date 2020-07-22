<template>
<div @MDCAutoInit:End="loading" role="progressbar" class="mdc-linear-progress" aria-label="Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0" data-mdc-auto-init="MDCLinearProgress">
    <div class="mdc-linear-progress__buffer">
        <div class="mdc-linear-progress__buffer-bar"></div>
        <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProgressBar',

    data() {
        return {
            isLoading: false,
        }
    },

    methods: {
        loading() {
            this.$el.MDCLinearProgress.foundation.setDeterminate(false)
        }
    },

    // mounted() {
        // console.log(this.$el.MDCLinearProgress)
        // this.$el.MDCLinearProgress.foundation.setDeterminate(false)
    // },

    // computed: {
    //     isLoading: {
    //         get: () => this.$el.MDCLinearProgress.foundation.isDeterminate,
    //         set: val => this.$el.MDCLinearProgress.foundation.setDeterminate(val)
    //     }
    // }
}
</script>