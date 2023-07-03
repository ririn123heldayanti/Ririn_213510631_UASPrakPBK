<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/' }"><router-link to="/" class="nav-link">Home</router-link></li>
          <li :class="{ 'active': $route.path === '/Foto' }"><router-link to="/Foto" class="nav-link">Foto</router-link></li>
          <li :class="{ 'active': $route.path === '/Game' }"><router-link to="/Game" class="nav-link">Game</router-link></li>
          <li :class="{ 'active': $route.path === '/Lokasi' }"><router-link to="/Lokasi" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/Stopwatch' }"><router-link to="/Stopwatch" class="nav-link">Stopwatch</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}
body{
  background-color: #eee3cb;
}
header {
  background: #9BABb8;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px; /* Set the desired height */
  line-height: 30px; /* Set the desired line height */
}

nav a:hover {
  background-color: #d7c0ae;
  text-decoration: none;
}

.active {
  background-color: #d7c0ae; /* Change the color to your desired one */
  border-radius: 4px ;
  width: auto;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
  }

  nav li {
    width: 100%;
    margin-bottom: 10px;
  }
  .active{
    width: auto;
  }
}
</style>
