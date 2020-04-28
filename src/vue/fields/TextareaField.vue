<template>
    <div
        class="text-field"
        :class="{ 'text-field--error': errorMessage }
    ">
        <textarea
            class="text-field__input"
            :value="value"
            @input="onInput"
        />

        <transition>
            <p class="text-field__error-msg" v-if="errorMessage">
                {{ errorMessage }}
            </p>
        </transition>
    </div>
</template>

<script>

const EVENTS = {
    input: 'input',
}

export default {
    props: {
      value: { type: [String, Number], default: undefined },
      errorMessage: { type: String, default: undefined },
    },

    methods: {
        onInput (event) {
            this.$emit(EVENTS.input, event.target.value)
        },
    },
  }
</script>

<style lang="scss" scoped>
    @import '~@/scss/variables';
    .text-field {
        width: 100%;
        position: relative;
        caret-color: #000000;
        background-color: #FFFFFF;
        border: 1px solid #000000;
        padding-bottom: 24px;
        border-radius: 2px;
        transition: all 0s, border-color 0.2s ease-out;
        overflow: hidden;

        &--error {
          border-color: $app-error-message-color;
        }
    }

    .text-field__input {
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        resize: none;
        display: block;
        font-size: 16px;
        overflow-y: auto;
        height: 33px;
    }


    .text-field__error-msg {
        position: absolute;
        bottom: -8px;
        left: 12px;
        max-width: 70%;
        font-size: 12px;
        color: $app-error-message-color;
    }

</style>
