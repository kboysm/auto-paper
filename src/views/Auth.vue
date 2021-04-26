<template>
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

        onMounted(()=>{
        })
        return{
        }
    },
}
</script>
<style scoped>
</style>