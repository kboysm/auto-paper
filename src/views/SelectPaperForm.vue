<template>
    <div class="container">
        <div class="drop-down-paper-list">
            <label class="select" for="slct">
            <select id="slct" required="required" v-model="cloneSelectedPaper">
                <option value="" disabled="disabled" selected="selected">서류 선택</option>
                <option>계약갱신요구권 행사 여부 확인서</option>
                <option>임대계약해지확인서</option>
                <option>test2</option>
                <option>test3</option>
                <option>test4</option>
            </select>
            <svg>
                <use xlink:href="#select-arrow-down"></use>
            </svg>
            </label>
            <!-- SVG Sprites-->
            <svg class="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
            </svg>
        </div>
        <document-type-a :resultObj="resultObj" v-if="selectedPaper === '계약갱신요구권 행사 여부 확인서'"/>
        <document-type-b :resultObj="resultObj" v-if="selectedPaper === '임대계약해지확인서'"/>
    </div>
</template>
<script>
import DocumentTypeA from '@/components/paper/DocumentTypeA'
import DocumentTypeB from '@/components/paper/DocumentTypeB'
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
    components: {
      DocumentTypeA,
      DocumentTypeB,
    },
    setup() {
      const store = useStore()
      const updateSelectedPaper = ( newPaperName ) => store.dispatch('setSelectedPaperAction', newPaperName)
      const selectedPaper = computed(()=> store.state.selectedPaper )
      const cloneSelectedPaper = ref('')
      const resultObj = {
        '성명':'',
        '주민등록번호':'',
        '주소':'',
        '목적물':'',
        '계약권 행사 여부':'',
        '임대차기간':'',
        '현재임대차기간':'',
        '갱신후임대차기간':'',
      }
      watch(cloneSelectedPaper, (newValue, oldValue)=>{
        updateSelectedPaper(newValue)
      })
      onMounted(()=> {
        const selectedItem = JSON.parse(localStorage.getItem('selectedPaper'))
        if( selectedItem ) {
          cloneSelectedPaper.value = selectedItem
        }
      })
      return {
        selectedPaper,
        updateSelectedPaper,
        cloneSelectedPaper,
        resultObj
      }
    }
}
</script>
<style lang="scss" scoped>

.drop-down-paper-list{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}
* {
  box-sizing: border-box;
}
.select {
  position: relative;
  min-width: 200px;
}
.select svg {
  position: absolute;
  right: 12px;
  top: calc(50% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #9098a9;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}
.select select {
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
}
.select select:required:invalid {
  color: #5a667f;
}
.select select option {
  color: #223254;
}
.select select option[value=""][disabled] {
  display: none;
}
.select select:focus {
  outline: none;
  border-color: #07f;
  box-shadow: 0 0 0 2px rgba(0,119,255,0.2);
}
.select select:hover + svg {
  stroke: #07f;
}
.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

</style>