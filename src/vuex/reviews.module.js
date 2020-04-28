import Vue from 'vue'
import Vuex from 'vuex'
import { Reviews } from '@/js/entities/reviews'
import { vuexTypes } from "@/vuex/types";

Vue.use(Vuex)

export const state = {
    likes: 131,
    comments: 14,
}

export const getters = {
    [vuexTypes.review]: state => new Reviews(state),
}

export default {
    state,
    getters,
}