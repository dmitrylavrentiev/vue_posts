<template>
    <v-container>

        <h2 class="display-4">Add Post</h2>

        <v-layout row wrap>
            <v-flex xs12 pa-2>
                <v-card elevation-5 height="100%">
                    <v-card-title>
                        <span class="headline font-weight-bold"></span>
                    </v-card-title>
                    <v-card-text class="font-weight-light">
                        <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                        >
                            <v-text-field
                                    v-model="title"
                                    :counter="200"
                                    :rules="textRules"
                                    label="Title"
                                    required
                            ></v-text-field>

                            <v-textarea
                                    v-model="body"
                                    :rules="textRules"
                                    label="Text"
                                    required
                            ></v-textarea>

                            <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    @click="validate"
                            >
                                Save
                            </v-btn>

                            <v-btn
                                    color="error"
                                    @click="reset"
                            >
                                Reset Form
                            </v-btn>

                        </v-form>
                    </v-card-text>
                </v-card>

            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>
    import jsonplaceholderApi from '../services/api/jsonplaceholder'

    export default {
        data: () => ({
            valid: true,
            title: '',
            textRules: [
                v => !!v || 'Field is required',
            ],
            body: '',
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    jsonplaceholderApi.setPost(this.title, this.body);
                }
            },
            reset() {
                this.$refs.form.reset()
            },
        }
    }
</script>
