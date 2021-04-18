import { onMounted, reactive, ref } from 'vue'
import { authService } from '../plugins/fbase'
import router from '../router'

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
    const refreshUser = () => {
        const user = authService.currentUser
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: ( args ) => user.updateProfile(args),
        });
      }
    onMounted( () => {
        authService.onAuthStateChanged(( user )=> {
            if( user ) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    updateProfile: ( args ) => user.updateProfile(args),
                })
                router.push({name:'Home'})
            } else {
                setUserObj({
                    displayName: '',
                    uid: '',
                    updateProfile: () => {},
                })
                router.push({name:'Auth'})
            }
        })
        setInit(true)
    })
    return { init, userObj, setUserObj, refreshUser }
}

export default getAuth;