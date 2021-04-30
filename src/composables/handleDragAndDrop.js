import { reactive, ref } from 'vue'
import XLSX from 'xlsx'
import { useStore } from 'vuex'

const handleDragAndDrop = () => {
        const dragAndDropBtn= ref(true)
        let tickets = reactive([])
        let headers = reactive([])
        const store = useStore()

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
                    const getHeader = get_header_row(worksheet)
                    getHeader.forEach( item => {
                    headers.push(item)
                });
                store.dispatch('setHeadersAction', getHeader)

                results=XLSX.utils.sheet_to_json(worksheet);
                results.forEach( item => {
                    tickets.push( item )
                });
                store.dispatch('setTicketsAction', results)
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
            store.dispatch('setHeadersAction', [])
            store.dispatch('setTicketsAction', [])
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

export default handleDragAndDrop;