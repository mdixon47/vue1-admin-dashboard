<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/scss/main.scss";
body {
  background: $dark-blue;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: $white;
    }
  }
}
h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}
</style>
