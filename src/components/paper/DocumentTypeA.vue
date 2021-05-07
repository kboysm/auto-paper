<template>
    <div class="create-paper-container">
        <div class="preview-paper page" :style="reportCss">
            <div class="subpage" id="content">
                <table border="1" class="paper-table">
                    <tr>
                        <td colspan="5" class="paper-title"> 
                            <span>
                                계약갱신요구권 행사 여부 확인서
                            </span> 
                        </td>
                    </tr>
                    <tr>
                        <td class="option-title" rowspan="2">임대인<br>(매도인)</td>
                        <td class="option option-name-label">성명</td>
                        <td class="option option-name"></td>
                        <td class="option option-personal-number-label">주민등록번호</td>
                        <td class="option option-personal-number"></td>
                    </tr>
                    <tr>
                        <td class="option option-address-label">주소</td>
                        <td class="option" colspan="3"> </td>
                    </tr>
                    <tr>
                        <td class="option-title option-purpose-label">목적물</td>
                        <td class="option option-purpose" colspan="4"></td>
                    </tr>
                    <tr>
                        <td class="option-title" rowspan="5">계약갱신요구권 행사 여부</td>
                        <td class="option option-exercise-label">기행사</td>
                        <td class="option option-select">[ ]</td>
                        <td class="option option-term-label">임대차 기간</td>
                        <td class="option"></td>
                    </tr>
                    <tr>
                        <td class="option-exercise-label" rowspan="2">행사</td>
                        <td class="option option-select" rowspan="2">[ ]</td>
                        <td class="option option-term-label">현재 임대차 기간</td>
                        <td class="option"></td>
                    </tr>
                    <tr>
                        <td class="option option-term-label">갱신 후 임대차 기간</td>
                        <td class="option"></td>
                    </tr>
                    <tr>
                        <td class="option option-exercise-label">불행사</td>
                        <td colspan="3" style="text-align:left; padding-left:43px;">[ ]</td>
                    </tr>
                    <tr>
                        <td class="option option-exercise-label">미결정</td>
                        <td colspan="3" style="text-align:left; padding-left:43px;">[ ]</td>
                    </tr>
                    <tr>
                        <td class="option-warning" colspan="5">
                                    계약갱신요구권 행사는 임대차기간이 끝나기 6개월 전부터 1개월 전까지의 기간에 가능 (단,
                                    '20.12.10' 이후 최초로 체결되거나 갱신될 계약에 대한 계약갱신요구권 행사는 임대차 기간이 끝나기 6개월 전부터 2개월 전까지의 기간에 가능)
                                
                        </td>
                    </tr>
                    <tr>
                        <td class="last-option" colspan="5">
                            <div class="last-option-1">
                                임대인(매도인)은 위 내용이 사실과 틀림없음을 확인합니다.
                            </div>
                            <br><br><br>
                            <div class="last-option-2">
                                년 월 일
                            </div>
                            <br><br><br>
                            <div class="last-option-3">
                                확인자 : 임대인(매도인) 홍 길 동 (서명 또는 인)
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, reactive } from 'vue'

    export default {
        
        setup( props ) {
            const reportCss= reactive({
                paddingTop: '2cm',
                PaddingBottom: '2cm',
                paddingLeft: '2cm',
                paddingRight: '2cm',
            })
            const contentCss= reactive({
                border: '1px solid red'
            })
            const paperKey = ['성명','주민등록번호','주소','목적물','계약권 행사 여부','임대차기간','현재임대차기간','갱신후임대차기간']
            return {
                reportCss,
                contentCss,
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
                .option-title {
                    width: 120px;
                    background-color: #d7e4ff;
                }
                .option {
                    height: 50px;
                }
                .option-name-label , .option-address-label {
                    width:50px;
                }
                .option-name {
                    width:120px;
                }
                .option-personal-number {
                    width:200px;
                }
                .option-personal-number-label {
                    width:120px;
                }
                .option-purpose , .option-purpose-label {
                    height: 80px;
                }
                .option-exercise-label {
                    width:120px;
                }
                .option-term-label {
                    width:200px;
                }
                .option-warning {
                    padding-left: 10px;
                    height: 120px;
                }
                .last-option {
                    text-align: right;
                    padding-right: 10px;
                    font-size: 20px;
                    font-weight: 600;
                }
                // .last-option-1 , .last-option-2 , .last-option-3 {
                    
                // }
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