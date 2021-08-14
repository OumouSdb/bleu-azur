<template>
  <div class="home">
<h1>Bleu ˜˜ Azur</h1>
<h2>Laissez vous bercer par le bruit des vagues, sous une nuit étoilée</h2>
   <div  class="block1">
<span v-for="(destination,index) in getDestination"
   v-bind:key="index">
    <div class="divImage">
      <h2>{{destination.pays}}</h2>
      <img :src="destination.image" alt="">
      <button>Reserver</button>
    </div>
    </span>
   </div>
  </div>
</template>

<script>

export default{
  name: 'Home',
    computed:{
       getDestination(){
         return this.$store.getters.getDestinations;
    }
  },

}
</script>
<style scoped>
body,html {
  font-family: "Zen Loop", cursive;
  color: purple;
  margin: 0;
  padding: 0;
}
h1,h2, h3{
  font-family: "Dr Sugiyama", cursive;
  font-size: 2.5em;
}

.divImage{
 width: 250px;
  text-align: center;
  background: linear-gradient(#ff9966, #ff5e62);
  margin-top: 20px;
  border-radius: 5px;
  opacity: 0.9;

}
.home{
  width: 100%;
 
}
.block1{
max-width: 60%;
width: 100%;
flex-wrap: wrap;
display: flex;
justify-content: space-between;
  margin: auto;
  text-align: center;
/* margin-top: 5%; */

}

.block1 img{
  width: 90%;
  text-align: center; 
}

button {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid turquoise;
  background-color: transparent;
  cursor: pointer;
}
button:hover {
  background: linear-gradient(#f2994a, #f2c94c);
}
</style>