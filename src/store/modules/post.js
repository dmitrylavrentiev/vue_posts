import axios from 'axios'

import jsonplaceholderApi from '../../services/api/jsonplaceholder'
import {GET_COMMENTS, GET_POST, LOAD_POST, MUTATE_COMMENTS, MUTATE_POST} from "../mutation-types";

export default {
    state: {
        post: {},
        comments: [],
    },
    mutations: {
        [MUTATE_POST]: (state, post) => state.post = post,
        [MUTATE_COMMENTS]: (state, comments) => state.comments = comments,
    },
    actions: {
        [LOAD_POST] ({commit}, post_id) {

            function getPost(post_id) {
                return jsonplaceholderApi.getPost(post_id);
            }

            function getComents(post_id) {
                return jsonplaceholderApi.getComents(post_id);
            }

            axios.all([getPost(post_id), getComents(post_id)])
                .then(
                    axios.spread((post, comments) => {
                        commit(MUTATE_POST, post.data);
                        commit(MUTATE_COMMENTS, comments.data);
                    }))
                .catch((post, comments) => {
                    commit(MUTATE_POST, post);
                    commit(MUTATE_COMMENTS, comments);
                    //console.log(post, comments);
                });
        }
    },
    getters: {
        [GET_POST]: state => state.post,
        [GET_COMMENTS]: state => state.comments,
    }
}