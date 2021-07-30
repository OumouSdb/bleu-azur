<template>
  <div class="home">
<h1>Bleu Azur</h1>

    <h2>Escapade romantique</h2>
    <div class="block1">
      <div class="divImage">
        <h3>Bora</h3>
        <img src="@/assets/turquie.jpg" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>Reserver !</button>
      </div>
    
        <div class="divImage">
      <h3>Maldives</h3>
      <img src="@/assets/turquie.jpg" alt="">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button>Reserver !</button>
    </div>
    <div class="divImage">
      <h3>Seychelles</h3>
      <img src="@/assets/turquie.jpg" alt="">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button>Reserver !</button>
    </div>
    </div>
        <h2>Séjour en Thalasso</h2>
  <div class="block1">
      <div class="divImage">
      <h3>Zanzibar</h3>
        <img src="@/assets/turquie.jpg" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>Reserver !</button>
      </div>
      <div class="divImage">
      <h3>Turquie</h3>
        <img src="@/assets/turquie.jpg" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>Reserver !</button>
      </div>
      <div class="divImage">
      <h3>Maldives</h3>
        <img src="@/assets/turquie.jpg" alt="">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>Reserver !</button>
      </div>
  </div>
<h2>Aventure et immersion garantie</h2>
  <div class="block1">
    <div class="divImage">
      <h3>Turquie</h3>

      <img src="@/assets/turquie.jpg" alt="">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button>Reserver !</button>
    </div>
    <div class="divImage">
      <h3>Kenya</h3>

      <img src="@/assets/turquie.jpg" alt="">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button>Reserver !</button>
    </div>
    <div class="divImage">
      <h3>Tanzanie</h3>
      <img src="@/assets/turquie.jpg" alt="">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button>Reserver !</button>
    </div>

  </div>



  </div>
</template>



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
.home{

  margin: auto;
  text-align: center;
/* margin-top: 5%; */

}
.divImage{
 width: 250px;
  text-align: center;
  background: linear-gradient(#ff9966, #ff5e62);
  margin-top: 20px;
  border-radius: 5px;
  opacity: 0.9;
}
.block1{
    width: 100%;
    grid-gap: 30px;
display: flex;
justify-content: space-around;
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