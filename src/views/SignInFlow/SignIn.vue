<template>
    <div class="container" :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}">
        <RequestAccount/>
        <div class="login">
            <img src="../../assets/img/DCHQ.svg" v-show="isDarkMode">
            <img src="../../assets/img/DCHQ-dark.svg" v-show="!isDarkMode">
            <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into Design+Code HQ</h4>
            <input type="email" placeholder="Email" :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}">
            <input type="password" placeholder="Password" :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}">
            <button>Sign In</button>
            <router-link to="/recover" :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}">Forgot your password?</router-link>
            <ThemeSwitch/>
        </div>

    </div>
</template>

<script>
import * as netlifyIdentifyWidget from "netlify-identity-widget";
import RequestAccount from "../../components/RequestAccount";
import ThemeSwitch from "../../components/ThemeSwitch";


    export default {
        name: "SignIn",
        components: {
            RequestAccount,
            ThemeSwitch
        },
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode;
            }
        },    
        methods:{
            onSubmit() {
                const email = this.email;
                const password = this.password;
                

            }
        }
    };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";

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

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login {
    width: 400px;
}

button {
    background: #56CCF2;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    color: white;
    height: 60px;
    width: 100%;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 50px;

}


h4 {
    margin: 0;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
}

input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;

    height: 60px;
    width: 100%;

    font-size: 20px;
    color: #FFFFFF;
    padding-left: 20px;
    margin-top: 20px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.3)
    }
}


a {
    line-height: 25px;
    text-align: center;
    
    text-decoration: none;
}

.light-link {
    color: rgba(255,255,255, 0.3);

}

.dark-link {
    color: rgba(0, 0, 0, 0.3);
}
h4 {
    margin: 0;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
}

input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;

    height: 60px;
    width: 100%;

    font-size: 20px;
    color: #FFFFFF;
    padding-left: 20px;
    margin-top: 20px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.3)
    }
}


a {
    line-height: 25px;
    text-align: center;
    
    text-decoration: none;
}

.light-link {
    color: rgba(255,255,255, 0.3);

}

.dark-link {
    color: rgba(0, 0, 0, 0.3);
}
</style>