<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import url('https://fonts.googleapis.com/css2?family=Dr+Sugiyama&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');
body,html {
  font-family: "Zen Loop", cursive;
  color: purple;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
background-repeat: no-repeat;
  margin: auto;
 position: relative;
padding: 300px 100px;
max-width: 100%;

}
#app::before{
  content:'';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(./assets/Webp.net-resizeimage.jpg);
background-size: cover;
background-position: top center;
opacity: 0.25;
}
#nav {
  padding: 30px;
 position: absolute;
 top: 0;
  right: 40%;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: white;
}
input, button{
  z-index: 99;
  position: relative;
}

</style>
