import { onMounted, reactive, ref } from 'vue'
import { authService } from '../plugins/fbase'

const getAuth = () => {
    const init = ref(false)
    const userObj = reactive({
        displayName: '',
        uid: '',
        updateProfile: () => {},
    })
    const setInit = ( initState ) => init.value=initState
    const setUserObj = ( userObj_ ) => {
        userObj.displayName = userObj_.displayName
        userObj.uid = userObj_.uid
        userObj.updateProfile = userObj_.updateProfile
    }

    onMounted( () => {
        authService.onAuthStateChanged(( user )=> {
            if( user ) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    updateProfile: ( args ) => user.updateProfile(args),
                })
            } else {
                setUserObj({
                    displayName: '',
                    uid: '',
                    updateProfile: () => {},
                })
            }
        })
        setInit(true)
    })
    return { init, userObj, setUserObj }
}

export default getAuth;