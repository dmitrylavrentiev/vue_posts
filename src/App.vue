<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <router-link :to="{ name: 'home'}">Home</router-link>
          </v-btn>
          <v-btn flat>
            <router-link :to="{ name: 'add_post' }">Add post</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
