const mutations = {
    SET_COMMENT: 'SET_COMMENT',
}

const actions = {
    ADD_COMMENT: 'ADD_COMMENT',
}

const getters = {
    comments: 'comments',
    reviews: 'review',
    consultant: 'consultant',
}

export const vuexTypes = {
    ...mutations,
    ...actions,
    ...getters,
}
