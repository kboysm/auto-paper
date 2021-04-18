<template>
  <router-view/>
</template>
<script>
import getAuth from './composables/getAuth'

export default {
  setup( props ) {
    const { init, userObj, setUserObj, refreshUser } = getAuth();
    return {
      init,
      userObj,
      setUserObj,
      refreshUser
    }
  },
}
</script>
<style lang="scss">
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
