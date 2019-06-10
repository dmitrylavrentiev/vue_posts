<template>
  <v-app>
    <v-content>
      <MainMenu/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import MainMenu from './components/MainMenu'
export default {
  name: 'App',
  components: {
    MainMenu,
  }
}
</script>
