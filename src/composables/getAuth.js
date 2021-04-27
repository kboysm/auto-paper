import { onMounted, reactive, ref } from 'vue'
import { authService } from '../plugins/fbase'
import { useStore } from 'vuex'
import router from '../router'

const getAuth = () => {
    const store = useStore()
    const init = ref(false)
    const userObj = reactive({
        displayName: '',
        uid: '',
        updateProfile: () => {},
    })
    const setInit = ( initState ) => init.value= initState
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
    const onLogOutClick = () => {
        authService.signOut();
        // history.push("/")
        refreshUser();
    }
    const userObjDelete = () => {
        const user = authService.currentUser;
        user.delete()
            .then(() => {
                console.log('User Delete')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    onMounted( () => {
        authService.onAuthStateChanged(( user )=> {
            if( user ) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    updateProfile: ( args ) => user.updateProfile(args),
                })
                store.dispatch('setUserAction',userObj)
                router.push({name:'Home'})
            } else {
                setUserObj({
                    displayName: '',
                    uid: '',
                    updateProfile: () => {},
                })
                store.dispatch('setUserAction',userObj)
                router.push({name:'Auth'})
            }
        })
        setInit(true)
    })
    return { init, userObj, setUserObj, refreshUser, onLogOutClick, userObjDelete }
}

export default getAuth;