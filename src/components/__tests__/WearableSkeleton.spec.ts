import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import WearableSkeleton from '../WearableSkeleton.vue';

describe('WearableSkeleton', () => {
  it('renders properly', () => {
    const wrapper = mount(WearableSkeleton, { props: { msg: 'Hello Vitest' } });
    expect(wrapper);
  });
});
