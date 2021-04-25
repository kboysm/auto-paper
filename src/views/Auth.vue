<template>
    <Particles
        class="bg-three"
        id="tsparticles"
        :options="particlesOption"
    />
    <SignForm />
</template>
<script>
import SignForm from '../components/SignForm'
// import getBackgound from '../composables/getBackgound'
import { onMounted, onBeforeUnmount, ref } from 'vue'
export default {
    components:{
        SignForm
    },
    setup() {
        const particlesOption= require('./particlesConfig').particlesOption
        onMounted(()=>{
        })
        return{
            particlesOption
        }
    },
}
</script>
<style scoped>
</style>