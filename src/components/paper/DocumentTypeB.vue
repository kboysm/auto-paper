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
                <div class="middle-content">
                    <div class="middle-title">제목 : 임대차계약해지건</div>
                    <div class="middle-purpose-container">
                        <div class="middle-purpose">해당부동산 : </div>
                        <div class="middle-purpose-item">
                            서울시 동작구 동작대로 다리 밑 400번째 집에서 세번째 노인
                        </div>
                    </div>
                    <div class="middle-content-container">
                        <div class="middle-content">내용 : </div>
                        <div class="middle-content-item">
                            상기 부동산의 임대차계약을 2020년 10월 12일 쌍방합의하에 종료하기로 합의함.
                        </div>
                    </div>
                </div>
                <br>
                <div class="table-and-bottom">
                        <div class="table-container">
                            <div class="table-item">임 차 인</div>
                            <div class="table-item">주민번호:</div>
                            <div class="table-item">성    명: <span>서명: (인)</span> </div>
                        </div>
                        <br>
                        <div class="table-container">
                            <div class="table-item">임 차 인</div>
                            <div class="table-item">주민번호:</div>
                            <div class="table-item">성    명: <span>서명: (인)</span> </div>
                        </div>
                        <br>
                        <div> 2020년 10월 10일</div>
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
            padding: 2cm;
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
            .middle-content {
                text-align: left;
                display: flex;
                flex-wrap: wrap;
                font-size: 17px;
                font-weight: 550;
                letter-spacing: 2px;
                padding-right:10px;
                .middle-title {
                    width: 100%;
                    min-height: 50px;
                }
                .middle-purpose-container {
                    width: 100%;
                    display: flex;
                    min-height: 50px;
                    max-height: 70px;
                    .middle-purpose {
                    flex-shrink: 0;
	                width: 120px;
                    }
                    .middle-purpose-item {
                        flex-grow: 1;
                    }
                }
                .middle-content-container {
                    width: 100%;
                    display: flex;
                    min-height: 50px;
                    .middle-content {
                        flex-shrink: 0;
	                    width: 70px;   
                    }
                    .middle-content-item {
                        flex-grow: 1;
                    }
                }
                
            }
            .table-container {
                .table-item {
                    border: 1px solid black;
                border-collapse: collapse;
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