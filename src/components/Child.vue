<template>
    <div>
        <input v-model="input" />
        <button @click="sendMessage">Enviar</button>
    </div>
</template>

<script>
export default {
    data() {
        return { input: '' };
    },
    methods: {
        sendMessage() {
            this.$emit('message', this.input);
        }
    }
};
</script>