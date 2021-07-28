<template>
  <div class="home">

    <h2>Escapade romantique</h2>
      <article class="article">
       <div class="cardHome">
          <h3>Maldives</h3>
          <img src="https://images.unsplash.com/photo-1537026999589-10d732272c29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <button>Valider</button>
        </div>
          <div class="cardHome">
          <h3>Zanzibar</h3>
          <img src="https://images.unsplash.com/photo-1592229506490-dda533630362?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHphbnppYmFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <button>Valider</button>
        </div>
          <div class="cardHome">
          <h3>Les seychelles</h3>
          <img src="https://images.unsplash.com/photo-1537026999589-10d732272c29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">

          <button>Valider</button>
        </div>
      </article>
      <br>
      <br>
      <br>
        <br>
      <br>
      <br>  <br>
      <br>
      <br>  <br>
      <br>
      <br>  <br>
      <br>
      <br>  <br>
      <br>
      <br>

    <h2>Séjour en Thalasso</h2>
   <article class="article">
        <div class="cardHome">
          <h3>Bora Bora</h3>
          <img src="https://images.unsplash.com/photo-1549035092-33b2937b075a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8emFuemliYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <button>Valider</button>
        </div>
          <div class="cardHome">
          <h3>Ile maurice</h3>
          <img src="https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yYSUyMGJvcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <button>Valider</button>
        </div>
          <div class="cardHome">
          <h3>Bali</h3>
          <img src="https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'" alt="">
          <button>Valider</button>
        </div>
      </article>
            <br>
      <br>
      <br>
        <br>
      <br>
      <br>  <br>
      <br>
      <br>  <br>
      <br>
      <br>  <br>
      <br>
      <br>  <br>
      <br>
      <br>
    <h2>Séjour en immersion</h2>
         <article class="article">
        <div class="cardHome">
          <h3>Turquie</h3>
          <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VueWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'" alt="">
          <button>Valider</button>
        </div>
          <div class="cardHome">
          <h3>Kenya</h3>
          <img src="https://images.unsplash.com/photo-1583655225827-d08dff9c46ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHVycXVpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <button>Valider</button>
        </div>
          <div class="cardHome">
          <h3>Tanzanie</h3>
          <img src="https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          <button>Valider</button>
        </div>
      </article>
  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Dr+Sugiyama&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');

.cardHome {
  width: 250px;
  text-align: center;
  background: linear-gradient(#ff9966, #ff5e62);
  margin-top: 20px;
  border-radius: 5px;
  opacity: 0.9;
  float: left;
} 

.cardHome button,
button {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid turquoise;
  background-color: transparent;
  cursor: pointer;
}
.cardHome button:hover,
button:hover {
  background: linear-gradient(#f2994a, #f2c94c);
}

.cardHome img {
  width: 240px;
  border-radius: 5px;

}
.cardHome p {
  font-size: 1.3em;
  color: white;
  font-weight: bold;
}

p{
  font-family: 'Zen Loop', cursive;

}
.article{
  margin-left: 25%;
  justify-content: space-between;
  width: 100%;

}

</style>