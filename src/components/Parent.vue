<template>
    <div>
        <Child @message="displayMessage" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    components: { Child },
    data() {
        return { message: '' };
    },
    methods: {
        displayMessage(msg) {
            this.message = msg;
        }
    }
};
</script>