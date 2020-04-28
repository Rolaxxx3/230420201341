import Vue from 'vue'
import Vuex from 'vuex'
import { Consultant } from '@/js/entities/consultant'
import { vuexTypes } from "@/vuex/types";

Vue.use(Vuex)

export const state = {
    avatar: 'https://s3-alpha-sig.figma.com/img/1fc9/88cc/75e823313c999f5e437da758b7e14205?Expires=1588550400&Signature=KMqQZMlNojTJBzxAZ7pTu-9Wnj5CcjChhBdo9DLEMiX-TTAn8JoN14Ixkr97HsWNBpLI3gZV2GSrZfoVBBNQfFfraH7LM3H3EnjKW~UakwAjUUgOP0emBNClqj1pCTkEE3U0wBXEeLIEHF~pW10FbUIGGjW-~7-T~t-ZFY7zBigJmJKBT7sW00E~eeJAtc8Jb8g9remYzjiZXMRU2D41GuosWNwl8DYn8N1vekR8D0bkUlN2ZUOJ4bkJjUJK5~CjYHtLhAsD6DpRt3cxASRf4zxDkiMUKaD65EfJWFsFkhoaCin~IyGLFw0MXlP3jVygh8-uI9zdv141mWJQ3Qph7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name: 'Вероника Ростова',
    profession: 'Менеджер по продажам',
    about: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
    services: [
        {
            name: 'Ручное бронирование',
            amount: 11,
        },
        {
            name: 'Пакетные туры',
            amount: 3,
        },
        {
            name: 'Отели',
            amount: 1,
        }
    ]
}

export const getters = {
    [vuexTypes.consultant]: state => new Consultant(state),
}

export default {
    state,
    getters,
}
