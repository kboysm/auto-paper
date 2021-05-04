<template>
    <div class="create-paper-container">
        <div class="options-box">
            option- box
        </div>
        <div class="create-paper page" :style="reportCss">
            <font-awesome-icon :icon="['fas', 'bars']" class="icon-menu" />
            <div class="subpage" id="content">
                createPaper
            </div>
        </div>
        <div class="preview-paper page" :style="reportCss">
            <div class="subpage" id="content" :style="contentCss">
                previewPaper
            </div>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'

    export default {
        
        setup() {
            const reportCss= reactive({
                paddingTop: '2cm',
                PaddingBottom: '2cm',
                paddingLeft: '2cm',
                paddingRight: '2cm',
            })
            const contentCss= reactive({
                border: '1px solid red'
            })
            return {
                reportCss,
                contentCss
            }
        }
    }
</script>
<style lang="scss" scoped>
        create-paper-container {
            margin: 0;
            padding: 0;
            font: 12pt "Tahoma";
        }
        * {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }
        .page {
            display: inline-block;
            margin: 1cm;
            width: 21cm;
            min-height: 29.7cm;
            // padding: 2cm;
            // margin: 1cm auto;
            border-radius: 5px;
            background: white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .subpage {
            padding: 1cm;
            height: 256mm;
            color: black;
        }
        @page {
            size: A4 landscape;
            margin: 0;
            /*size: landscape;*/
        }
        @media print {
            .page {
                margin: 0;
                border: initial;
                border-radius: initial;
                width: initial;
                min-height: initial;
                box-shadow: initial;
                background: initial;
                page-break-after: always;
            }
        }
        .icon-menu {
            color: black;
            cursor: pointer;
            float: left;
        }
</style>