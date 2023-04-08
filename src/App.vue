<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/proxima-nova");
#app {
  font-family: "Proxima Nova", "Cairo";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
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
