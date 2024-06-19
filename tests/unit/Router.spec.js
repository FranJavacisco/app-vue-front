import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import router from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Router', () => {
    it('existe la ruta Home', () => {
        const wrapper = shallowMount(Home, { localVue, router });
        expect(wrapper.exists()).toBe(true);
    });

    it('existe la ruta About', () => {
        const wrapper = shallowMount(About, { localVue, router });
        expect(wrapper.exists()).toBe(true);
    });
});
