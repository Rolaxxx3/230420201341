<template>
    <form
        class="comment-form"
        @submit.prevent="tryToSubmit()"
        @keyup.enter.ctrl="tryToSubmit()"
    >
        <div class="comment-form__row">
            <div class="comment-form__textarea-field-wrapper">
                <textarea-field
                    v-model="form.comment"
                    :error-message="errorMessage"
                />
            </div>
        </div>
        <div class="comment-form__row">
            <button
                class="comment-form__btn-submit"
                click="submit"
            >
                Написать консультанту
            </button>
        </div>
    </form>
</template>

<script>
    import TextareaField from "@/vue/fields/TextareaField"
    import { required, minLength } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
    import { vuexTypes } from "@/vuex";

    const EVENTS = {
        submit: 'submit'
    }

    export default {
        name: "CommentForm",
        components: { TextareaField },
        data () {
            return {
                form: {
                    comment: ''
                },
                errorMessage: '',
                isCommentSent: false
            }
        },

        validations: {
            form: {
                comment: {
                    required,
                    minLength: minLength(10),
                },
            },
        },

        watch: {
            'form.comment' () {
                if (this.isCommentSent) {
                    this.isCommentSent = false
                    return
                }
                if (!this.$v.form.comment.minLength) {
                    this.errorMessage = 'Минимальная длина комментария 10 символов'
                } else if(!this.$v.form.comment.required) {
                    this.errorMessage = 'Это поле должно быть заполено'
                } else {
                    this.errorMessage = ''
                }
            }
        },

        methods: {
            ...mapActions({
                ADD_COMMENT: vuexTypes.ADD_COMMENT
            }),

            tryToSubmit () {
                if (!this.form.comment.length) this.errorMessage = 'Это поле должно быть заполено'
                if (this.$v.$invalid) return
                this.ADD_COMMENT(this.form)
                this.isCommentSent = true
                this.form.comment = ''
                this.$emit(EVENTS.submit)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/scss/variables';

    .comment-form {
        background-color: $app-forms-background-color;
    }

    .comment-form__btn-submit {
        background-color: #FDD639;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: $app-secondary-font-family;
        font-style: normal;
        font-weight: bold;
        border-radius: 23px;
        color: $app-main-text-color;
        width: 281px;
        height: 43px;
        padding: 0;
        border: none;
        margin-bottom: 34px;
        cursor: pointer;

        &:hover {
            transition: 0.2s;
            background-color: rgba(#FDD639, 0.7);
        }
    }

    .comment-form__row {
        display: flex;
        justify-content: center;
    }

    .comment-form__textarea-field-wrapper {
        width: 91.4%;
        margin-bottom: 23px;
        margin-top: 28px;
        color: $app-main-text-color;
    }
</style>
