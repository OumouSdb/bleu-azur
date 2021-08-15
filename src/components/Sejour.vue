<template>
  <div class="sejour">
    <div>
      <h1>Quelle destination vous fais rêver ?</h1>
      <form action="" @submit="form(verify)">
        <input type="text" placeholder="Quel pays vous fais rêver ?" v-model="verify" @click="ipt"/>
        <label for="date">Date de depart</label>
        <input type="date" data-date="" id="maDate" v-model="date" />
        <label for="dateA">Date d'arrivée</label>
        <input type="date" name="" id="" v-model="dateA" />

        <button>Valider</button>
      </form>
    </div>
    <section>
      <article
        v-bind:style="{ display: display }"
        v-for="(destination, index) in getDestination"
        v-bind:pays="destination.pays"
        v-bind:image="destination.image"
        v-bind:activite="destination.activite"
        v-bind:key="index"
        class="container"
      >
        <div
          v-if=" filter(verify) == destination.pays.substr(0, 1) || filter(verify) == destination.pays.substr(0, 2) || filter(verify) == destination.pays.substr(0, 3) ||filter(verify) == destination.pays"
          class="card"
        >
          <h2>{{ destination.pays }}</h2>
          <img :src="destination.image" />
          <button @click="handleClick(destination)">Reserver</button>
        </div>
      </article>
    </section>

    <div v-if="seen" class="recap">
      {{ recapitulatif }}
    </div>
  </div>
  
</template>

<script>

export default {
  name: "Sejour",
  data: function () {
    return {
      verify: "",
      image: "",
      recapitulatif: "",
      seen: false,
      date: '',
      dateA: "",
      display: "block",
      maDate:''
    };

  },
   computed:{
         getDestination(){
         return this.$store.getters.getDestinations;
         }
      },
  methods: {
    
    handleClick: function (destination) {
      this.recapitulatif = "";
      this.recapitulatif = "Recapitulatif de votre voyage: Date de depart " + this.date + " Date d'arrivée : " + this.dateA + " a destination de " + destination.pays + "vous pourrez profiter de  " + destination.activite;
      this.seen = true;

      
    },
    form: function () {
    this.seen == false;
      this.recapitulatif = true;
      
      this.destinations.forEach((e) => {
        if (this.verify != e.pays) {
          this.recapitulatif = "Cette destination n'est pas encore disponible";
          this.seen = true;
         
        }
        if (this.verify.length < 1) {
          this.recapitulatif = "Aucune destination n'a ete choisi";
          this.seen = true;
        } else {
          this.seen = false;
          this.recapitulatif = "";
          this.display = "block";
        }
      });
    },
    filter: function (monInput) {
      if (monInput.length) {
        if (monInput == monInput.toLowerCase()) {
          return monInput[0].toUpperCase() + monInput.slice(1);
        } else if (monInput == monInput.toUpperCase()) {
          return monInput[0] + monInput.toLowerCase().slice(1);
        }
      }
    },
    ipt: function () {
      this.recapitulatif = "";
    }

  }
};
</script>
<style>
.sejour {
  margin: auto;
  width: 1350px;
  margin: auto;
  text-align: center;
  margin-top: 5%;
}
@import url("https://fonts.googleapis.com/css2?family=Dr+Sugiyama&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap");

section {
  /* display: grid;
  grid-template-columns: repeat(auto-fill 300px 300px); */
  justify-content: space-around;

  width: 60%;
  margin: auto;
  display: flex;
}
body {
  font-family: "Zen Loop", cursive;
  color: purple;
  margin: 0;
  padding: 0;
}

.card {
  width: 250px;
  text-align: center;
  background: linear-gradient(#ff9966, #ff5e62);
  margin-top: 20px;
  border-radius: 5px;
  opacity: 0.9;
}

.card button,
button {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid turquoise;
  background-color: transparent;
  cursor: pointer;
}
.card button:hover,
button:hover {
  background: linear-gradient(#f2994a, #f2c94c);
}

.card img {
  width: 240px;
  border-radius: 5px;
}

h2,
h1 {
  font-family: "Dr Sugiyama", cursive;
  font-size: 2.5em;
}

.card p {
  font-size: 1.3em;
  color: white;
  font-weight: bold;
}
input {
  padding: 10px;
}
form {
  border: 2px solid pink;
  padding: 50px;
}
p {
  font-family: "Zen Loop", cursive;
}
.recap {
  background: linear-gradient(#b2fefa, #0ed2f7);
  padding: 40px;
  border-radius: 5px;
  color: white;
}
</style>
