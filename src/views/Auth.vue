<template>
    <!-- <div class="bg-three"></div> -->
        <SignForm />
</template>
<script>
import SignForm from '../components/SignForm'
import getBackgound from '../composables/getBackgound'

import { onMounted, onBeforeUnmount, ref } from 'vue'
export default {
    components:{
        SignForm
    },
    setup() {
        const { animateId, rendererDom } = getBackgound();
		onBeforeUnmount(()=> {
			cancelAnimationFrame( animateId )
			document.body.removeChild(rendererDom)
		})
    },
}
</script>
<style scoped>
    #bg-three{
        position: fixed;
        z-index: 2;
    }
</style>