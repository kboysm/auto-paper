<template>
    <div class="if-data-false" v-if="dragAndDropBtn">
        <div id="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">Drop Here Excel File</div>
    </div>
    <div class="if-data-true" v-else>
        <h2 class="table-title">사용할 데이터 목록</h2>
        <vue-scrolling-table >
            <template #thead>
            <tr>
                <th v-for="(col,idx) in headers"
                class="tableOption"
                :key="idx">{{ col }}</th>
            </tr>
            </template>
            <template #tbody>
            <tr v-for=" (item,idx) in tickets" :key="idx">
                <td v-for=" (col ,idx) in item"
                class="tableOption"
                :key="idx">{{ col }}</td>
            </tr>
            </template>
            </vue-scrolling-table>
            <div class="btn-container">
                <button class="data-btn" @click="resetData"> 초기화</button>
            </div>
        </div>
</template>
<script>
import handleDragAndDrop from '../composables/handleDragAndDrop'
export default {
    
    setup(){
        const {
            tickets,
            headers,
            handleDrop,
            handleDragover,
            dragAndDropBtn,
            resetData
        } = handleDragAndDrop();
        return {
            tickets,
            headers,
            handleDrop,
            handleDragover,
            dragAndDropBtn,
            resetData
        }
    }
}
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
    .if-data-false {
        width: 210mm;
        min-height: 50mm;
        padding: 20mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        color: black;
        opacity: .95;
    }
    .if-data-true {
        background: #fff;
        padding: 5px;
        color: black;
        // width: 210mm;
        .table-title {
            word-spacing: 7px;
        }
        .btn-container {
            margin: 5px;
            .data-btn {
                width: 100px;
                font-size: 18px;
                font-weight: 600;
                padding: 6px;
                margin:10px;
                outline: none;
                border: 1px solid #CFD8DC;
                border-radius: 5px;
                background: #fff;
                cursor: pointer;
                &:hover {
                    border: 1px solid #EF5350;
                }
            }
        }
    }
    #drop{
        border: 2px dashed #bbb;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        padding: 25px;
        text-align: center;
        font: 20pt bold,"Vollkorn";
        color: #bbb;
    }
    
</style>