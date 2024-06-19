import { shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('ParentChild Communication', () => {
    it('Child emite mensaje y Parent lo recibe', async () => {
        const wrapper = shallowMount(Parent);
        const child = wrapper.findComponent(Child);
        child.vm.$emit('message', 'Hola');
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain('Hola');
    });
});
