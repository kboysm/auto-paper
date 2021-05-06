<template>
    <div class="create-paper-container">
        <div class="preview-paper page" :style="reportCss">
            <div class="subpage" id="content">
                <table border="1" class="paper-table">
                    <tr>
                        <td colspan="5">계약갱신요구권 행사 여부 확인서</td>
                    </tr>
                    <tr>
                        <td rowspan="2">입대인<br>(매도인)</td>
                        <td>성명</td>
                        <td></td>
                        <td>주민등록번호</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td colspan="3"> </td>
                    </tr>
                    <tr>
                        <td>목적물</td>
                        <td colspan="4">d</td>
                    </tr>
                    <tr>
                        <td rowspan="5">여기</td>
                        <td>기행사</td>
                        <td>[ ]</td>
                        <td>임대차 기간</td>
                        <td>b</td>
                    </tr>
                    <tr>
                        <td rowspan="2">행사</td>
                        <td>[ ]</td>
                        <td>현재 임대차 기간</td>
                        <td>b</td>
                    </tr>
                    <tr>
                        <td>[ ]</td>
                        <td>갱신 후 임대차 기간</td>
                        <td>b</td>
                    </tr>
                    <tr>
                        <td>불행사</td>
                        <td colspan="3">[ ]</td>
                    </tr>
                    <tr>
                        <td>미결정</td>
                        <td colspan="3">[ ]</td>
                    </tr>
                    <tr>
                        <td colspan="5">asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</td>
                    </tr>
                    <tr>
                        <td colspan="5">asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</td>
                    </tr>
                </table>
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
            // padding: 1cm;
            height: 256mm;
            color: black;
            .paper-table {
                width:100%;
                height: 100%;
                border-collapse: collapse;
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
        .icon-menu {
            color: black;
            cursor: pointer;
            float: left;
        }
</style>