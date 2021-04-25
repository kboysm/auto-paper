<template>
<div class="AuthForm">
    <!-- <div class="login-box"> -->
        <h2>{{newAccount ? '회원가입' : '로그인'}}</h2>
        <form @submit.prevent >
            <div class="user-box">
                <input id="AuthFormEmail" autofocus class="authInput" name="email" type="text" required  v-model="email" @input="onInputEmail" />
                <label>Email</label>
            </div>
            <div class="user-box">
                <input id="AuthFormPassword" class="authInput" name="password" type="password" required  v-model="password" @input="onInputPassword" />
                <label>Password</label>
            </div>
            <input id="AuthFormSubmit" class="authInput authSubmit" @click="onSubmit" type="submit" :value="newAccount ? '회원가입' : '로그인'" />
        </form>
        <div id="toggleAccount" className="authSwitch" @Click="toggleAccount">{{newAccount ? "로그인" : "회원가입"}}</div>
        <span class="authError">{{error}}</span>
    <!-- </div> -->
</div>
</template>
<script>
import { ref } from 'vue'
import { authService } from '../plugins/fbase'
export default {
    name: 'SignForm',
    setup() {
        const email = ref('')
        const password = ref('')
        let newAccount = ref(false)
        const error = ref('')
        const toggleAccount = () => {
            newAccount.value = !newAccount.value
        }
        const onSubmit = async () => {
            console.log('submit')
            try {
                let data;
                if( newAccount.value ) {
                    console.log('signUp')
                    data = await authService.createUserWithEmailAndPassword(
                        email.value,
                        password.value
                    )
                } else {
                    console.log('login')
                    data = await authService.signInWithEmailAndPassword(
                        email.value,
                        password.value
                    )
                }
                console.log( data );
            } catch( err ) {
                console.log( "err : " , err.message )
                error.value = err.message;
            }
        }
        const onInputEmail = ( event ) => {
            email.value = event.target.value
        }
        const onInputPassword = ( event ) => {
            password.value = event.target.value
        }
        return {
            email,
            password,
            newAccount,
            error,
            toggleAccount,
            onSubmit,
            onInputEmail,
            onInputPassword
        }
    },
}
</script>
<style lang="scss" scoped>
    .AuthForm {
        position: absolute;
        left: calc(50vw - 50px);
        top: calc(50vh - 50px);
        width: 400px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, .6);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
        border-radius: 10px;

        h2 {
            margin: 0 0 30px;
            padding: 0;
            color: #fff;
            text-align: center;
        }

        input {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            background: transparent;
        }

        label {
            position: absolute;
            top:0;
            left: 0;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            pointer-events: none;
            transition: .5s;
        }

        input:focus ~ label,
        input:valid ~ label {
            top: -20px;
            left: 0;
            color: #03e9f4;
            font-size: 12px;
        }

        .authSubmit {
            position: relative;
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            font-size: 16px;
            text-decoration: none;
            overflow: hidden;
            transition: .5s;
            margin-top: 40px;
            letter-spacing: 4px;
            border: none;
        }
        .authSubmit:hover {
            background: #03e9a4;
            color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px #03e9f4,
                        0 0 25px #03e9f4,
                        0 0 50px #03e9f4,
                        0 0 100px #03e9f4;
        }

        .user-box {
            position: relative;
        }

        .authError {
            color: red;
        }

        #toggleAccount{
            color:white;
            cursor: pointer;
        }
    }

</style>