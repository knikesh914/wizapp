<template>
  <nav class="navbar"  :class="{ onDark: darkMode }">
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
               <li> <button @click="toggleDarkMode">
            {{ darkMode ? "Light Mode" : "Dark Mode" }}
          </button></li>
            </ul>
            <h5 class="logo"><router-link to="/">Shopping</router-link></h5>
        </div>
    </nav>
  <router-view/>
</template>
<script>
import { mapState, mapActions, mapGetters  } from 'vuex';
import './assets/custome.css';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["darkMode"]),
    ...mapState(["cartItems"]),
  },
  methods: {
    ...mapActions(["toggleDarkMode"]),
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
  background-color: var(--background-color);
  color: var(--text-color);
}

</style>
