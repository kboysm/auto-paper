<template>
    <div class="create-paper-container">
        <div class="preview-paper page">
            <div class="subpage">
                <div class="paperName">
                    <span class="paperName-span">
                        임 대 계 약 해 지 확 인 서
                    </span><br>
                    <div class="paperName-underline">
                        <div class="underline-1">
                        </div>
                        <div class="underline-2">
                        </div>
                    </div>
                </div>
                <div class="subPaperName">
                    - 합 의 서 -
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
            padding: 1.5cm;
            .paperName {
                font-size: 30px;
                font-weight: 550;
                
                .paperName-underline {
                    // border: 1px solid black;
                    .underline-1 {
                        background-color: gray;
                        padding: 1px;
                        margin-bottom:10px;
                        // margin-bottom:16px;
                        display: inline-block;
                        width:9.5cm;
                    }
                    .underline-2 {
                        background-color: black;
                        margin-bottom:25px;
                        padding: 1px;
                        display: inline-block;
                        width:9.5cm;
                    }
                    
                }
            }
            .subPaperName {
                font-weight: 530;
                font-size: 30px;
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