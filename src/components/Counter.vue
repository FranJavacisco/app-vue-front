<template>
    <div>
        <p>{{ counter }}</p>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['counter'])
    },
    methods: {
        ...mapMutations(['increment', 'decrement'])
    }
};
</script>