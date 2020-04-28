<template>
    <div class="account-details">
        <div class="account-details__passport">
            <div class="account-details__avatar">
                <img
                    class="account-details__avatar-image"
                    :src="consultantDetails.avatar"
                    alt="Ошибка"
                >
            </div>
            <div class="account-details__passport-wrapper">
                <span class="account-details__text--bold">{{ consultantDetails.name }}</span>
                <span class="account-details__text">{{ consultantDetails.profession }}</span>
            </div>
            <div class="account-details__about-wrapper">
                <span class="account-details__about-text">{{ consultantDetails.about }}</span>
            </div>
        </div>
        <div class="account-details__wrapper">
            <div class="account-details__row">
                <span class="account-details__services-title">Услуг</span>
            </div>
            <div class="account-details__row">
                <div class="account-details__services-wrapper">
                    <div class="account-details__services">
                        <div
                                class="account-details__service"
                                v-for="(service, i) in getSortedServices"
                                :key="i"
                        >

                            <div
                                class="account-details__service-name-wrapper"
                                :style="{ width: calculateSizeServiceWrapper(service.amount) }"
                            >
                                <span class="account-details__service-name">{{ service.name }}</span>
                            </div>
                            <span class="account-details__service-amount">{{ service.amount }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const MAX_SERVICE_WRAPPER_WIDTH = 219
    export default {
        name: "AccountDetails",
        props: {
            consultantDetails: { required: true, type: Object }
        },
        computed: {
            getServicesMaxAmount () {
                let result = this.consultantDetails.services[0].amount
                for (let i = 1; i < this.consultantDetails.services.length; i++) {
                    if (this.consultantDetails.services[i].amount > result) {
                        result = this.consultantDetails.services[i].amount
                    }
                }
                return result;
            },
            getSortedServices () {
                let services = this.consultantDetails.services
                return services.sort((a, b) => b.amount - a.amount)
            }
        },
        methods: {
            calculateSizeServiceWrapper (serviceAmount) {
                return MAX_SERVICE_WRAPPER_WIDTH / this.getServicesMaxAmount * serviceAmount + 'px'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/scss/variables';

    .account-details__service-name-wrapper {
        border-radius: 0 3px 3px 0;
        background-color: #ACE2F8;
        margin-top: 1px;
    }

    .account-details__service-name {
        font-family: $app-main-font-family;
        font-size: 13px;
        line-height: 26px;
        padding-left: 6px;
        white-space: nowrap;
    }

    .account-details__service-amount {
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        color: $app-main-text-color;
        font-family: $app-main-font-family;
    }

    .account-details__services {
        margin-top: 16px;
        margin-bottom: 16px;
        border-left: 1px solid rgba(51, 51, 51, 0.2);
    }

    .account-details__service {
        display: flex;
        margin-right: 29px;
        justify-content: space-between;

        &:first-child .account-details__service-name-wrapper {
            background-color: #B1E19B;
            margin-top: 0;
        }
    }

    .account-details__services-title {
        font-size: 13px;
        line-height: 15px;
        font-family: $app-main-font-family;
        color: #333333;
        margin-right: 20px;
    }

    .account-details__services-wrapper {
        border-top: 1px solid #DADADA;
        border-bottom: 1px solid #DADADA;
        width: 317px;
    }

    .account-details__row {
        margin-top: 13px;
        display: flex;
        justify-content: flex-end;
    }

    .account-details {
        margin-bottom: 20px;
        margin-right: 4.3%;
    }

    .account-details__about-text {
        font-family: $app-main-font-family;
        font-size: 14px;
        line-height: 20px;
        color: $app-main-text-color;
    }

    .account-details__about-wrapper {
        background: #FFFBC8;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 5px;
        margin-left: 118px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 33px;
    }

    .account-details__passport-wrapper {
        margin-top: 14px;
        margin-left: 151px;
        max-width: 364px;
    }

    .account-details__text--bold {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        font-family: $app-main-font-family;
        display: flex;
    }

    .account-details__text {
        display: flex;
        color: $app-secondary-text-color;
        font-family: $app-main-font-family;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
    }

    .account-details__avatar {
        width: 124px;
        height: 124px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left: 17px;
        top: 14px;
    }

    .account-details__avatar-image {
        width: 175px;
        height: 175px;
        margin-left: -30px;
        margin-top: -15px;
    }

</style>
