<template>
    <transition name="fade">
        <div :class="['alert', alertType]" role="alert" v-show="show">
            {{ body }}
        </div>
    </transition>
</template>
 
<script>
    import { EventBus } from '../utils/eventbus'

    export default { 
        data() {
            return {
                body: '',
                show: false,
                alertType: ''
            }
        },
 
        created() {
            EventBus.$on('success', (msg) => {
                this.alertType = 'alert-success'
                this.flash(`Success! ${msg}`)
            })

            EventBus.$on('error', (msg) => {
                this.alertType = 'alert-danger'
                this.flash(`Error: ${msg}`)
            })
        },
 
        methods: {
            flash(message) {
                this.body = message;
                this.show = true;
                this.hide();
            },
 
            hide() {
                setTimeout(() => {
                    this.show = false;
                }, 4000);
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
