<template>
    <div class="create-paper-container">
        <div class="preview-paper page">
            <div class="subpage">
                <div class="papaerName">
                    임 대 계 약 해 지 확 인 서
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        setup() {
            return {

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
            // padding: 1cm;
            height: 256mm;
            color: black;
            .paper-table {
                width:100%;
                height: 100%;
                border-collapse: collapse;
                .paper-title{
                    height: 70px;
                    background-color:  #bebebe;
                    font-size: 25px;
                    font-weight: 800;
                }
            }
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
        
</style>