import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Counter from '@/components/Counter.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Counter.vue', () => {
    let store;
    let state;
    let mutations;

    beforeEach(() => {
        state = { counter: 0 };
        mutations = {
            increment: jest.fn(),
            decrement: jest.fn()
        };
        store = new Vuex.Store({ state, mutations });
    });

    it('muestra el valor inicial', () => {
        const wrapper = shallowMount(Counter, { store, localVue });
        expect(wrapper.text()).toContain('0');
    });

    it('incrementa el contador', () => {
        const wrapper = shallowMount(Counter, { store, localVue });
        wrapper.find('button').trigger('click');
        expect(mutations.increment).toHaveBeenCalled();
    });

    it('decrementa el contador', () => {
        const wrapper = shallowMount(Counter, { store, localVue });
        wrapper.findAll('button').at(1).trigger('click');
        expect(mutations.decrement).toHaveBeenCalled();
    });
});
