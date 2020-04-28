import Vue from 'vue'
import Vuex from 'vuex'

import comments from './comments.module'
import reviews from './reviews.module'
import consultant from './consultant.module'

Vue.use(Vuex)
let store
function buildStore () {
    store = new Vuex.Store({
        modules: {
            comments,
            reviews,
            consultant,
        },
    })

    return store
}
buildStore()

export { store, buildStore }
export { vuexTypes } from './types'