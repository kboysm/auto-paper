<template>
  <Particles
        class="bg-three"
        id="tsparticles"
        :options="particlesOption"
  />
  <nav-bar />
  <router-view/>
  <!-- <button id="AuthLogOut" v-if="userObj.uid" @click="onLogOutClick">Log Out</button>
  <button id="AuthUserDelete" v-if="userObj.uid" @click="userObjDelete">User Delete</button> -->
</template>
<script>
import getAuth from './composables/getAuth'
import NavBar from './components/NavBar.vue';

export default {
  components:{
    NavBar
  },
  setup() {
    const { init, userObj, setUserObj, refreshUser, onLogOutClick, userObjDelete } = getAuth();
    const particlesOption= require('./particlesConfig.js').particlesOption
    return {
      init,
      userObj,
      setUserObj,
      refreshUser,
      onLogOutClick,
      userObjDelete,
      particlesOption
    }
  },
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
