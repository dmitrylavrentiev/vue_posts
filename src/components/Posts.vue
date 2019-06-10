<template>
  <v-container>
    <h2 class="display-4">Posts</h2>
    <v-layout row wrap v-if="postsUsers && postsUsers.length">
      <v-flex xs12 sm6 md4 pa-2 v-for="postUsers in postsUsers" :key="postUsers.id">
        <v-card elevation-5 height="100%">
          <v-card-title>
            <router-link :to="{ name: 'post', params: { post_id: postUsers.id }}">
              <span class="headline font-weight-bold" :title="postUsers.title">{{postUsers.title}}</span>
            </router-link>
          </v-card-title>
          <v-card-text class="font-weight-light">
            {{postUsers.body}}
          </v-card-text>
          <v-card-actions>
            {{postUsers.userName}}
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {POSTS, USERS} from '../store/mutation-types'

  export default {
    created: function () {
      this.$store.dispatch(POSTS);
      this.$store.dispatch(USERS);
    },
    computed: {
      postsUsers() {
        return this.$store.getters.getPostsUsers;
      }
    }
  }
</script>
