<template>
    <div class="page">
        <h2 class="page-title"> 
            <span
            v-for="(t, index) in getText(0)"
            :key="index"
            class="animationItem"
            :style="{animationDelay: index*2+'ms'}"
            v-text="t"
            />
        </h2>
        <ol class="manual-list">
            <div v-for="(item, idx) in getText(1)" :key="idx">
                <li class="list-item">
                        <span
                        v-for="(t, index) in item"
                        :key="index"
                        class="animationItem"
                        :style="{animationDelay: (index +countLength(idx))*2+'ms'}"
                        v-text="t"
                        />
                </li>
            </div>
        </ol>
    </div>
</template>
<script>
    export default {
        setup() {
            const textAnimationItem = [
                'Auto - Paper',
                '반복작업이 필요한 서류를 생성합니다. 불러온 데이터를 넣을 위치에 $((item))을 넣습니다.',
                '데이터 불러오기 버튼을 클릭 후 .csv 파일을 불러옵니다.',
                '적용할 서류가 2개 이상일 경우 적용할 서류를 선택합니다.',
                '적용할 서류를 선택 후 인쇄버튼을 클릭하여 반복적인 작업이 필요한 서류를 인쇄합니다.'
            ]
            
            const countLength = ( item ) => {
                let defaultValue = 12
                switch(item) {
                    case 0:
                        return defaultValue;
                        break;
                    case 1:
                        return defaultValue+ textAnimationItem[1].length
                        break;
                    case 2:
                        return defaultValue+ textAnimationItem[1].length+ textAnimationItem[2].length
                        break;
                    case 3:
                        return defaultValue+ textAnimationItem[1].length+ textAnimationItem[2].length+ textAnimationItem[3].length
                        break;
                }
            }
            const getText = ( item ) =>{
                if( item === 0 ) {
                    return textAnimationItem[0]
                }
                let cloneData = Object.assign([],textAnimationItem)
                cloneData.shift()
                return cloneData
            }
            return {
                textAnimationItem,
                countLength,
                getText
            }
        }
    }
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.page {
    width: 210mm;
    min-height: 200mm;
    padding: 20mm;
    margin: 10mm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    color: black;
    opacity: .95;
    .page-title {
        font-size: 60px;
    }
    .manual-list {
        text-align: left;
        .list-item {
            margin-bottom: 20px;
            font-size: 17px;
            font-weight: 600;
            line-height: 35px;
        }
    }
}

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.animationItem {
  display: inline-block;
  min-width: 0.3em;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

</style>