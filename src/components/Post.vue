<template>
  <v-container>
    <template v-if="!isLoading">
      <h2 class="display-4">Post {{post.id}}</h2>
      <v-layout row wrap>
        <v-flex xs12 pa-2>
          <v-card v-if="post.id" elevation-5 height="100%">
            <v-card-title>
              <span class="headline font-weight-bold">{{post.title}}</span>
            </v-card-title>
            <v-card-text class="font-weight-light">
              {{post.body}}
            </v-card-text>
            <v-card-actions>
              <v-card class="w100">
                <v-list three-line class="pa-0">
                  <template v-for="(comment, index) in comments">
                    <v-list-tile
                            :key="comment.id"
                            avatar
                            ripple
                            @click="toggle(index)"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title>{{ comment.name }}</v-list-tile-title>
                        <v-list-tile-sub-title>
                          <blockquote class="blockquote">{{ comment.body }}</blockquote>
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider
                            v-if="index + 1 < comments.length"
                            :key="index"
                    ></v-divider>
                  </template>
                </v-list>
              </v-card>
            </v-card-actions>
          </v-card>
          <v-card v-else elevation-5 height="100%">
            <v-card-title>
              <span class="headline font-weight-bold">
                Пост не существует
              </span>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
    <template v-else>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </template>
  </v-container>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  import {GET_COMMENTS, GET_LOADING, GET_POST, LOAD_POST, MUTATE_LOADING} from '../store/mutation-types'

  export default {
    created: function () {
      this.$store.commit(MUTATE_LOADING, true);
      this.$store.dispatch(LOAD_POST, this.$route.params.post_id)
              .then(() => {
                debugger;
                setTimeout(() => {
                  this.$store.commit(MUTATE_LOADING, false);
                }, 500)

              });
    },
    computed: {
      ...mapGetters({
        post: GET_POST,
        comments: GET_COMMENTS,
        isLoading: GET_LOADING
      }),
      ...mapState({
        isLoading: state => state.loading,
      }),
    },
  }
</script>

<style>
  .w100{
    width: 100%;
  }
</style>