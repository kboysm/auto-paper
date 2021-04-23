<template>
<div  class="AuthForm">
        <form @submit.prevent >
            <input id="AuthFormEmail" autofocus class="authInput" name="email" type="text" placeholder="Email" required  v-model="email" @input="onInputEmail" />
            <input id="AuthFormPassword" class="authInput" name="password" type="password" placeholder="Password" required  v-model="password" @input="onInputPassword" />
            <input id="AuthFormSubmit" class="authInput authSubmit" @click="onSubmit" type="submit" :value="newAccount ? 'Create Account' : 'Log In'" />
            <span class="authError">{{error}}</span>
        </form>
        <span id="toggleAccount" className="authSwitch" @Click="toggleAccount">{{newAccount ? "Log In" : "Create Account"}}</span>
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
        let newAccount = ref(true)
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
<style scoped>
 .AuthForm {
     position: fixed;
     z-index: 10;
 }
 #toggleAccount{
     color:white;
     cursor: pointer;
 }
</style>