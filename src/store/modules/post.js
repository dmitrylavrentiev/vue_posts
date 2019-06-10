import axios from 'axios'

import { COMMENTS, POST } from '../mutation-types'
import jsonplaceholderApi from '../../services/api/jsonplaceholder'

export default {
    state: {
        post: {},
        comments: [],
    },
    mutations: {
        [POST]: (state, post) => state.post = post,
        [COMMENTS]: (state, comments) => state.comments = comments,
    },
    actions: {
        [POST]({commit}, post_id) {

            function getPost(post_id) {
                return jsonplaceholderApi.getPost(post_id);
            }

            function getComents(post_id) {
                return jsonplaceholderApi.getComents(post_id);
            }

            axios.all([getPost(post_id), getComents(post_id)])
                .then(
                    axios.spread((post, comments) => {
                        commit(POST, post.data);
                        commit(COMMENTS, comments.data);
                    }))
                .catch((post, comments) => {
                    commit(POST, post);
                    commit(COMMENTS, comments);
                    //console.log(post, comments);
                });
        }
    },
    getters: {

    }
}