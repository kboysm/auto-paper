<template>
    <div class="if-data-false" v-if="dragAndDropBtn">
        <div id="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">Drop Here</div>
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
import { reactive,ref } from 'vue'
import XLSX from 'xlsx'

export default {
    
    setup(){
        const dragAndDropBtn= ref(true)
        let tickets = reactive([])
        let headers = reactive([])

        const handleDrop = ( e ) => {
            e.stopPropagation();
            e.preventDefault();
            console.log("DROPPED");
            let files = e.dataTransfer.files, i, f;
            for (i = 0, f = files[i]; i != files.length; ++i) {
                let reader = new FileReader(),
                name = f.name;
                reader.onload = function(e) {
                let results, 
                    data = e.target.result, 
                    fixedData = fixdata(data), 
                    workbook=XLSX.read(btoa(fixedData), {type: 'base64'}), 
                    firstSheetName = workbook.SheetNames[0], 
                    worksheet = workbook.Sheets[firstSheetName];
                get_header_row(worksheet).forEach( item => {
                    headers.push(item)
                });
                results=XLSX.utils.sheet_to_json(worksheet);
                results.forEach( item => {
                    tickets.push( item )
                });
                };
                reader.readAsArrayBuffer(f);
                dragAndDropBtn.value = false
            }
        }
        const handleDragover = ( e ) => {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
        function get_header_row(sheet) {
            var headers = [], range = XLSX.utils.decode_range(sheet['!ref']);
            var C, R = range.s.r; /* start in the first row */
            for(C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
                var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */
                var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
                if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);
                headers.push(hdr);
            }
            return headers;
        }
        function fixdata(data) {
            var o = "", l = 0, w = 10240;
            for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
            o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
            return o;
        }
        const resetData = () => {
            tickets.length= 0;
            headers.length= 0;
            dragAndDropBtn.value= true
        }
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