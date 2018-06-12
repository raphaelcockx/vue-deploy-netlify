<template>
  <div class="home">
    <div v-for="user in users.users" :key="user.lastname">
      <p>{{ user.firstname }} {{ user.lastname }} ({{ user.position }})</p>
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
