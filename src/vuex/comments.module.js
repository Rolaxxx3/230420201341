import Vue from 'vue'
import Vuex from 'vuex'
import { vuexTypes } from './types'
import moment from 'moment'
import { Comment } from '@/js/entities/comment'

Vue.use(Vuex)

export const state = {
    comments: [
        {
            name: 'Самуил',
            date: moment('13-10-2011', "DD-MM-YYYY").toISOString(),
            comment: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
        },
        {
            name: 'Лилия Семёновна',
            date: moment('14-10-2011', "DD-MM-YYYY").toISOString(),
            comment: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
        },
        {
            name: 'Лилия Семёновна',
            date: moment('14-10-2011', "DD-MM-YYYY").toISOString(),
            comment: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
        }
    ]
}

export const mutations = {
    [vuexTypes.SET_COMMENT] (state, comment) {
        state.comments.push(new Comment(comment))
    }
}

export const actions = {
    [vuexTypes.ADD_COMMENT] ({ commit }, comment) {
        commit(vuexTypes.SET_COMMENT, comment)
    }
}

export const getters = {
    [vuexTypes.comments]: state => state.comments.map(item => new Comment(item)),
}

export default {
    state,
    mutations,
    actions,
    getters,
}
