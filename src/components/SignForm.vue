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
$formColor: rgba(0, 0, 0, .6);
$baseColor: #fff;
$effectColor: #03e9f4;
$errorFontColor: red;
    .AuthForm {
        position: absolute;
        left: 50vw;
        top: calc(50vh - 50px);
        width: 400px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: $formColor;
        box-sizing: border-box;
        box-shadow: 0 15px 25px $formColor;
        border-radius: 10px;

        h2 {
            margin: 0 0 30px;
            padding: 0;
            color: $baseColor;
            text-align: center;
        }

        input {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: $baseColor;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid $baseColor;
            outline: none;
            background: transparent;
        }

        label {
            position: absolute;
            top:0;
            left: 0;
            padding: 10px 0;
            font-size: 16px;
            color: $baseColor;
            pointer-events: none;
            transition: .5s;
        }

        input:focus ~ label,
        input:valid ~ label {
            top: -20px;
            left: 0;
            color: $effectColor;
            font-size: 12px;
        }

        .authSubmit {
            position: relative;
            display: inline-block;
            padding: 10px 20px;
            color: $baseColor;
            font-size: 16px;
            text-decoration: none;
            overflow: hidden;
            transition: .5s;
            margin-top: 40px;
            letter-spacing: 4px;
            border: none;

            &:hover {
            background: #03e9a4;
            color: $baseColor;
            border-radius: 5px;
            box-shadow: 0 0 5px $effectColor;
        }
        }

        .user-box {
            position: relative;
        }

        .authError {
            color: $errorFontColor;
        }

        #toggleAccount{
            color: $baseColor;
            cursor: pointer;
        }
    }

</style>