import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({
  presetIElementOptions: {
    include: ['input'],
  },
});
