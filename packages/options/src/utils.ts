import { OptionsProps } from './props';

export function generateOptionList(
  originList: OptionsProps['options'],
  props: OptionsProps,
): OptionsProps['options'] {
  const result = originList?.map((_option) => {
    const _children = generateOptionList(_option.children, props);
    return {
      ..._option,
      children: _children,
    };
  });
  return result;
}
