<template>
    <nav>
        <ul class="menu" v-if="path !== '/Auth'">
            <li><a><router-link to="/">홈</router-link></a></li>
            <li><a><router-link to="/CreatePaperForm">서류생성</router-link></a></li>
            <li><a><router-link to="/ImportData">데이터<br>불러오기</router-link></a></li>
            <li><a><router-link to="SelectPaperForm">적용 서류<br> 선택</router-link></a></li>
            <li><a id="AuthLogOut" @click="onLogOutClick">로그아웃</a></li>
            <li><a id="AuthUserDelete" @click="userObjDelete">계정삭제</a></li> <!-- test용 버튼 삭제 예정 -->
        </ul>
    </nav>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getAuth from '../composables/getAuth'

export default {
    setup() {
        const route = useRoute()
        const path = computed(()=> route.path)
        const { onLogOutClick, userObjDelete } = getAuth();
        
        return {
            path,
            onLogOutClick,
            userObjDelete
        }
    }    
}
</script>
<style lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Varela+Round");

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 800px;
        margin: 0 auto;
        padding:0;
        height: 100px;
        list-style: none;
        
    }

    .menu li {
        width: 125px;
        height: 50px;
        text-align: center;

        a {
            font-size: 22px;
            color: #fff;
            text-decoration: none;
            transition: all 0.45s;
            cursor: pointer;
        }

        &:hover a {
            color: #d989dd;
        }
        a .router-link-active {
            color: #d94f5c;
        }
        &:not(:last-child) {
            margin-right: 30px;
        }
    }

    @keyframes line {
        0% {
            background-position-x: 390px;
        }
    }

</style>