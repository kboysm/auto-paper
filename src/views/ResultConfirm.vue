<template>
    <div v-for=" (item , index) in resultObj" :key="index">
        <DocumentTypeA :resultObj="item" />
    </div>
</template>
<script>
import DocumentTypeA from '../components/paper/DocumentTypeA'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    components:{
        DocumentTypeA
    },
    setup() {
        const store = useStore()
        const resultObj = computed(()=> store.state.tickets )
        return {
            resultObj
        }
    }
}
</script>