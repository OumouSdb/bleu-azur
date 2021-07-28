<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/sejour'>Séjour</router-link>
    </div>
    <router-view />

  </div>
</template>

<script>
export default {
   name: "App",
  data:function(){
    return{

         
    }
  }
}


</script>

<style>


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
