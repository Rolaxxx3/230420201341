<template>
    <div class="account-comments">
        <div class="account-comments__text-row">
            <div class="account-comments__text-reviews">
                <span class="account-comments__text-reviews--bold">Последние отзывы</span>
                <router-link
                    tag="a"
                    to="/"
                >
                    <span>Все отзывы</span>
                </router-link>
            </div>
            <div class="account-comments__icons">
                <div class="account-comments__icon-with-text">
                    <svg width="16" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_di)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99441 10.7136C6.01753 10.735 6.02964 10.7461 6.02964 10.7461L6.02947 10.681C6.70429 10.0532 12.0107 5.05023 11.9888 2.98327C11.9652 0.775808 10.5617 -0.0226816 8.96488 0.000488394C7.45338 0.0231885 6.1314 1.32853 5.99439 1.46801C5.85737 1.32853 4.53537 0.0231885 3.02404 0.000488394C1.42727 -0.0226816 0.0235557 0.775808 6.77177e-05 2.98327C-0.0218521 5.05023 5.28453 10.0532 5.95935 10.681L5.95919 10.7461C5.95919 10.7461 5.97129 10.735 5.99441 10.7136Z" fill="#333333"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99441 10.7136C6.01753 10.735 6.02964 10.7461 6.02964 10.7461L6.02947 10.681C6.70429 10.0532 12.0107 5.05023 11.9888 2.98327C11.9652 0.775808 10.5617 -0.0226816 8.96488 0.000488394C7.45338 0.0231885 6.1314 1.32853 5.99439 1.46801C5.85737 1.32853 4.53537 0.0231885 3.02404 0.000488394C1.42727 -0.0226816 0.0235557 0.775808 6.77177e-05 2.98327C-0.0218521 5.05023 5.28453 10.0532 5.95935 10.681L5.95919 10.7461C5.95919 10.7461 5.97129 10.735 5.99441 10.7136Z" fill="#73B4D5"/>
                        </g>
                        <defs>
                            <filter id="filter0_di" x="0" y="0" width="11.9888" height="11.7461">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-1"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                            </filter>
                        </defs>
                    </svg>
                    <span>{{ review.likes }}</span>
                </div>
                <div class="account-comments__icon-with-text">
                    <svg width="16" height="16" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_di)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 -0.00106812H1C0.447728 -0.00106812 0 0.446852 0 0.998964V7.999C0 8.55132 0.447728 8.99892 1 8.99892H6.24995L9.99997 12.7489V8.99892H12C12.5523 8.99892 13 8.55132 13 7.999V0.998964C13 0.446852 12.5523 -0.00106812 12 -0.00106812Z" fill="#B3B3B3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 -0.00106812H1C0.447728 -0.00106812 0 0.446852 0 0.998964V7.999C0 8.55132 0.447728 8.99892 1 8.99892H6.24995L9.99997 12.7489V8.99892H12C12.5523 8.99892 13 8.55132 13 7.999V0.998964C13 0.446852 12.5523 -0.00106812 12 -0.00106812Z" fill="#73B4D5"/>
                        </g>
                        <defs>
                            <filter id="filter0_di" x="0" y="-0.00106812" width="13" height="13.7499">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-1"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                            </filter>
                        </defs>
                    </svg>
                    <span>{{ review.comments }}</span>
                </div>
            </div>
        </div>
        <div
            v-for="(comment, i) in commentsList"
            :key="i"
            class="account-comments__comment-wrapper"
        >
            <div class="account-comments__row">
                <span class="account-comments__text-comment--bold">{{ comment.name }}</span>
                <span class="account-comments__text-date">{{ comment.date | formatDate }}</span>
            </div>
            <div class="account-comments__comment">
                <div class="account-comments__text-wrapper">
                    <span class="account-comments__comment-text">{{ comment.comment }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountComments",
        props: {
            review: { type: Object, required: true },
            commentsList: { type: Array, required: true },
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/scss/variables';

    .account-comments__text-date {
        color: $app-secondary-text-color;
        font-size: 12px;
        font-weight: 100;
        font-family: $app-main-font-family;
        font-style: normal;
    }

    .account-comments__comment-wrapper {
        margin-top: 22px;
        margin-bottom: 22px;
    }

    .account-comments__comment {
        border: 1px solid #C4CBCF;
        margin-top: 10px;
        padding: 20px;
        position: relative;
        background-color: #F2FBFF;
        box-shadow: 0 4px 10px rgba(128, 128, 128, 0.1);

        &::before {
            content: '';
            position: absolute;
            top: -8px;
            left: 20px;
            border-right: 10px solid transparent;
            border-bottom: 8px solid #C4CBCF;
        }


        &::after {
            left: 21px;
            content: '';
            position: absolute;
            top: -6px;
            border-right: 8.5px solid transparent;
            border-bottom: 6.75px solid #F2FBFF;
        }
    }

    .account-comments__text-row {
        display: flex;
        justify-content: space-between;
    }

    .account-comments__row {
        display: flex;
    }

    .account-comments__text-reviews {
        text-align: left;
    }

    .account-comments__text-reviews--bold {
        font-size: 16px;
        font-weight: bold;
        font-family: $app-main-font-family;
        padding-right: 16px;
    }

    .account-comments__text-comment--bold {
        font-size: 14px;
        font-weight: bold;
        font-family: $app-main-font-family;
        padding-right: 16px;
    }

    .account-comments {
        width: 91.4%;
        margin: auto;
    }

    .account-comments__icon-with-text {
        display: flex;
        font-size: 12px;
        line-height: 14px;

        &:first-child {
            padding-right: 16px;
        }
    }

    .account-comments__icons {
        display: flex;
    }
</style>