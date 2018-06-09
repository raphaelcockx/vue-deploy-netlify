<template>
  <div class="home">
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>
