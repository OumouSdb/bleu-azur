<template>
  <div class="contact">
    <h1>Nous contacter</h1>

    <form action="">
      <label for="nom">Nom</label>
      <input type="text" placeholder="Votre nom" name="nom" required />
      <label for="email">Email</label>
      <input
        type="email"
        placeholder="Votre adresse email"
        name="email"
        required
      />
      <label for="numero">Téléphone</label>
      <input
        type="number"
        placeholder="Votre numero de telephone"
        name="numero"
        required
      />
      <button>Envoyer</button>
    </form>
  </div>
</template>

<script>

export default{
    name: 'Contact',
}
</script>
