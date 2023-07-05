<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link class="text-decoration-none" to="/cart">
        <v-btn text>
          <v-icon left>mdi-cart</v-icon>
          {{ cartItems.length }} items
        </v-btn>
      </router-link>
  </nav> -->
  <nav class="navbar" :class="{ onDark: darkMode }">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li> <router-link class="text-decoration-none" to="/cart">
               {{ cartItems.length }} <i class="fa fa-shopping-basket"></i>
               </router-link></li>
               <li><a @click="toggleDarkMode" color="primary">{{ darkMode ? 'Light Mode' : 'Dark Mode' }}</a></li>
            </ul>
            <h5 class="logo"><router-link to="/">Shopping</router-link></h5>
        </div>
    </nav>
  <router-view/>
</template>
<script>
import { mapState } from 'vuex';
import './assets/custome.css';

export default {
  data() {
  return {
    darkMode: false, 
  };
},
  computed: {
    ...mapState(['cartItems']),
  },
  methods: {
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  },
},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.dark-mode {
  background-color: #000 !important;
  color: #fff;
  /* Add any other dark mode styles you want */
}
</style>
