<template>
  <v-container>
    <h2 class="display-4">Posts</h2>
    <v-layout row wrap v-if="posts && posts.length">
      <v-flex xs12 sm6 md4 pa-2 v-for="post in posts" :key="post.id">
        <v-card elevation-5 height="100%">
          <v-card-title>
            <router-link :to="{ name: 'post', params: { post_id: post.id }}">
              <span class="headline font-weight-bold" :title="post.title">{{ post.title }}</span>
            </router-link>
          </v-card-title>
          <v-card-text class="font-weight-light">
            {{ post.body }}
          </v-card-text>
          <v-card-actions>
            {{ user(post.userId).name }}
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  import { GET_USER, LOAD_POSTS, LOAD_USERS } from "../store/mutation-types";

  export default {
    created: function () {
      this.$store.dispatch(LOAD_USERS);
      this.$store.dispatch(LOAD_POSTS);

    },
    computed: {
      ...mapGetters({
        user: GET_USER,
      }),
      ...mapState({
        posts: state => state.postsList.posts,
        users: state => state.postsList.users,
      }),
    }
  }
</script>
