<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" :  "#f0f3f5";
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

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
/* Theme  */

.light-background {
    background-color: $light-gray;
}
.dark-background {
    background-color: $dark-blue;
}

.light-text {
   color: $white;
}

.dark-text {
    color: $black;
}

.light-field {
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.2);

    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }
}
 
.dark-field {
    background: rgba(198,208,235,0.2);
    border: 1px solid rgba(0,0,0,0.2);

     &::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
}

</style>
