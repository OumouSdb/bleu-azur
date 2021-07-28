<template>

    <div>
      <div>
              <h1>Quelle destination vous fais rêver ?</h1>
                <form action="" @click.prevent="form">
                <input type="text" placeholder="Quel pays vous fais rêver ?" v-model='verify'>
                <label for="date">Date de depart</label>
                <input type="date" name="" id="" v-model='date'>
                <label for="dateA">Date d'arrivée</label>
                <input type="date" name="" id="" v-model='dateA'>
                <button >Valider</button>
                </form>

          </div>
            
                <section>
          <article 
        v-bind:style="{display: display}" 
                v-for='(destination,index) in destinations ' 
                v-bind:pays='destination.pays'
                v-bind:image='destination.image'
                v-bind:activite='destination.activite'
                v-bind:key='index'
                class="container"
        >
    <div v-if="verify == destination.pays.substr(0, 1) || verify == destination.pays.substr(0, 2) || verify == destination.pays.substr(0, 3) ||verify == destination.pays"
    class="card"
      >
        <h2> {{destination.pays}}</h2>
        <img :src="destination.image">
       <button @click='handleClick(destination)'>Reserver</button>

    </div>
</article>
      </section>

    <div v-if='seen' class="recap">
        {{recapitulatif}}
    </div>

</div>
</template>

<script>

export default {
  name:'Sejour',

  data:function(){
    return{
       
            verify: '',
            image: '',
            recapitulatif: 'Recapitulatif de votre voyage:',
            seen: false,
            date: '',
            dateA: '',
            display: 'block',
             destinations: [
                { pays: 'Tanzanie', image: 'https://images.unsplash.com/photo-1592229506490-dda533630362?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHphbnppYmFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'de Zanzibar' },
                { pays: 'Tanzanie', image: 'https://images.unsplash.com/photo-1549035092-33b2937b075a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8emFuemliYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'du Safari' },
                { pays: 'Ile maurice', image: 'https://images.unsplash.com/photo-1585494716074-4788d5a54b1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWxlJTIwbWF1cmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'du Zoo' },
                { pays: 'Bali', image: 'https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'de la Jungle' },
                { pays: 'Turquie', image: 'https://images.unsplash.com/photo-1583655225827-d08dff9c46ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHVycXVpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'de Izmir et Istanbul' },
                { pays: 'Maldives', image: 'https://images.unsplash.com/photo-1537026999589-10d732272c29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'vous Balader, vous relaxer, faire de la plongé sous marine' },
                { pays: 'Bora Bora', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yYSUyMGJvcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'profiter des promenandes en Bateau' },
                { pays: 'Seychelles', image: 'https://images.unsplash.com/photo-1595773382291-06d1b6cbc43b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V5Y2hlbGxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'profiter des promenandes Bateau'},
                { pays: 'Kenya', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VueWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'la plage' }


            ]
            
    }
  },methods:{
    handleClick: function (destination) {
               this.destinations.forEach(e=>{
                this.recapitulatif = ""
                this.recapitulatif = 'Recapitulatif de votre voyage: Date de depart' + this.date + " Date d'arrivée : " + this.dateA + 'a destination de ' + destination.pays + 'vous pourrez  ' + e.activite
                this.seen = true

               })

            },
            form: function () {
              this.seen == false
                this.destinations.forEach(e => {
                
                    if (this.verify != e.pays) {
                        this.recapitulatif = 'Cette destination n\'est pas encore disponible'
                        this.seen = true
                    } if (this.verify.length == '') {
                        this.recapitulatif = 'Aucune destination n\'a ete choisi'
                        this.seen = false
                    }
                    else {
                        this.seen = false
                        this.recapitulatif = ''
                        this.display = 'block'
                    }
                })
            },
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Dr+Sugiyama&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');

section{
  display: flex;
  justify-content: space-around;
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


h2,h1 {
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
form{
  border: 2px solid pink;
padding: 50px;
}
p{
  font-family: 'Zen Loop', cursive;
}
.recap{
  background: linear-gradient(#B2FEFA,#0ED2F7);
  padding: 40px;
  border-radius: 5px;
  color: white;
}

</style>

