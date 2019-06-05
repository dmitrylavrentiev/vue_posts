import Vue from 'vue'
import axios from 'axios'

import { GET_COMMENTS, GET_POST } from '../mutation-types'

export default {
    state: {
        post: {},
        comments: [],
    },
    mutations: {
        [GET_POST]: (state, post) => state.post = post,
        [GET_COMMENTS]: (state, comments) => state.comments = comments,
    },
    actions: {
        [GET_POST]({commit}, post_id) {

            function getPost(post_id) {
                return Vue.axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id);
            }

            function getComents(post_id) {
                return Vue.axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + post_id);
            }

            axios.all([getPost(post_id), getComents(post_id)])
                .then(
                    axios.spread((post, comments) => {
                        commit(GET_POST, post.data);
                        commit(GET_COMMENTS, comments.data);
                    }))
                .catch((post, comments) => {
                    commit(GET_POST, post);
                    commit(GET_COMMENTS, comments);
                    //console.log(post, comments);
                });
        }
    },
    getters: {

    }
}