<template>
    <div class="account">
        <account-details
                :consultant-details="consultantDetails"
        />
        <account-comments
                :review="currentReview"
                :comments-list="commentsList"
        />
        <comment-form @submit="reloadCommentsList()" />
    </div>
</template>

<script>
    import AccountComments from "@/vue/pages/Account/AccountComments";
    import AccountDetails from "@/vue/pages/Account/AccountDetails";
    import CommentForm from "@/vue/forms/CommentForm";
    import { mapGetters } from 'vuex'
    import { vuexTypes } from '@/vuex'
    export default {
        name: "account",
        components: {
            CommentForm,
            AccountDetails,
            AccountComments,
        },

        data () {
            return {
                commentsList: [],
                currentReview: {},
                consultantDetails: {},
            }
        },

        computed: {
            ...mapGetters({
                comments: vuexTypes.comments,
                review: vuexTypes.review,
                consultant: vuexTypes.consultant,
            })
        },
        created () {
            this.commentsList = this.comments
            this.currentReview = this.review
            this.consultantDetails = this.consultant
        },
        methods: {
            reloadCommentsList () {
                this.commentsList = this.comments
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/scss/variables';

    .account {
        background: $app-background-color;
    }
</style>
